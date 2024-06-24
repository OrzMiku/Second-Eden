// priority: 100
const { $ServerPlayer } = require("packages/net/minecraft/server/level/$ServerPlayer")
const { $MapItem } = require("packages/net/minecraft/world/item/$MapItem")
const { $MapDecoration$Type } = require("packages/net/minecraft/world/level/saveddata/maps/$MapDecoration$Type")
const { $MapItemSavedData } = require("packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData")
const { $ChunkStatus } = require("packages/net/minecraft/world/level/chunk/$ChunkStatus")

NetworkEvents.dataReceived(global.AtlasKeyPressed, event => {
    let {level, player} = event
    if (!player instanceof $ServerPlayer) return
    let lazyOptCapability = player.getCapability(CuriosCapabilities.INVENTORY)
    if (!lazyOptCapability.isPresent()) return
    let curios = lazyOptCapability.resolve().get()

    let atlasStacksHandler = curios.getStacksHandler('atlas')
    if (!atlasStacksHandler.isPresent()) return
    let atlasStacks = atlasStacksHandler.get().getStacks()
    if (!atlasStacks) return
    let atlasItem = atlasStacks.getStackInSlot(0)

    if (!AtlasActiveStrategy[atlasItem.id]) return
    let airdropPos = AtlasActiveStrategy[atlasItem.id](event, atlasItem)
    if (!airdropPos) return
    player.addItemCooldown(atlasItem, 20 * 30)

    let encodeAbility = player.getAttribute('kubejs:encode_ability').getValue()

    level.getPlayers().forEach(entityItem => {
        if (!entityItem instanceof $ServerPlayer) return
        /** @type {$ServerPlayer_} */
        let thisPlayer = entityItem
        let decodeAbility = thisPlayer.getAttribute('kubejs:decode_ability').getValue()
        if (Math.random() * 100 < decodeAbility - encodeAbility) {
            player.give(getMapItem(level, airdropPos))
        }
    })
})

/**
 * @param {$Level_} level 
 * @param {$ServerPlayer_} player 
 * @return {$BlockPos_}
 */
function getSpawnLocation(level, player) {
    let treasureDistance = player.getAttribute('kubejs:treasure_distance').getValue()
    let distance = treasureDistance * Math.random()
    
    let deltaDim = Math.floor(Math.random() * 4) + 1
    let deltaX = Math.pow(-1, Math.floor(deltaDim / 2)) * Math.random() * distance
    let deltaZ = Math.pow(-1, Math.floor((deltaDim + 1) / 2)) * Math.sqrt(Math.pow(distance, 2) - Math.pow(deltaX, 2))
    let randomPosBlock = player.block.offset(deltaX, 0, deltaZ)
    let targetChunk = level.getChunk(randomPosBlock.x, randomPosBlock.z, $ChunkStatus.SURFACE, true)

    let y = Math.min(targetChunk.getHeight('world_surface', randomPosBlock.x, randomPosBlock.z) + 20 + Math.random() * 20, 255)

    return new BlockPos(randomPosBlock.x, y, randomPosBlock.z)
}

/**
 * @param {$Level_} level 
 * @param {$ServerPlayer_} player 
 * @param {$BlockPos_} pos
 * @param {AirdropEntityConfig} config
 * @return {$Entity_}
 */
function getAirdropEntity(level, player, pos, config) {
    let treasureFortune = player.getAttribute('kubejs:treasure_fortune').getValue()
    let airdropEntity = level.createEntity(config.entityType)
    airdropEntity.persistentData.putString('owner', player.stringUuid)
    airdropEntity.persistentData.putFloat('fortune', treasureFortune)
    airdropEntity.persistentData.putString('type', config.type)
    airdropEntity.setPosition(pos.x, pos.y, pos.z)
    return true
}

/**
 * @param {$Level_} level 
 * @param {$BlockPos_} pos
 * @return {$ItemStack_}
 */
function getMapItem(level, pos) {
    let mapItem = $MapItem.create(level, pos.x, pos.z, 1, true, true)
    $MapItem.renderBiomePreviewMap(level, mapItem)
    $MapItemSavedData.addTargetDecoration(mapItem, pos, "+", $MapDecoration$Type.RED_X)
    mapItem = mapItem.withName({ "translate": "map.kubejs.lost_treasure" })
    return mapItem
}

/**
 * 空投实体配置
 * @param {string} type 
 */
function AirdropEntityConfig(type) {
    this.type = 'normal'
    this.entityType = 'kubejs:airdrop_balloon'
}
AirdropEntityConfig.prototype = {
    /**
     * @param {$EntityType_} entityType 
     * @returns {AirdropEntityConfig}
     */
    setEntityType : function (entityType) {
        this.entityType = entityType
        return this
    } 
}

/**
 * 空投呼唤策略
 * @constant
 * @type {Object<string,function($NetworkEventJS_, $ItemStack_):void>}
 * @returns {$BlockPos_}
 */
const AtlasActiveStrategy = {
    'kubejs:new_atlas': function (event, atlasItem) {
        let {level, player} = event
        if (!atlasItem || atlasItem.getDamageValue() + 1 > atlasItem.getMaxDamage()) return null

        let airdropPos = getSpawnLocation(level, player)

        let airdropEntity = getAirdropEntity(level, player, airdropPos, new AirdropEntityConfig('newer'))
        airdropEntity.spawn()

        let mapItem = getMapItem(level, airdropPos)
        player.give(mapItem)

        atlasItem.setDamageValue(atlasItem.getDamageValue() + 1)
        return airdropPos
    },
}