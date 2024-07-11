// priority: 1000
const { AirdropPoolItem } = require("../model/airdrop_pool_model")

global.AirdropPool = {}
const NewerAirdropPool = new Map()
    .set('land', [
        new AirdropPoolItem('minecolonies:supplycampdeployer').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
        new AirdropPoolItem('minecraft:oak_log').setMinCount(64).setMaxCount(64).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:cobblestone').setMinCount(64).setMaxCount(64).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:iron_ingot').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:gold_ingot').setMinCount(8).setMaxCount(8).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:diamond').setMinCount(1).setMaxCount(1).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:carrot').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:potato').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:dirt').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
        new AirdropPoolItem('sophisticatedbackpacks:backpack').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
        new AirdropPoolItem('kubejs:common_atlas').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
        new AirdropPoolItem('kubejs:master_certificate').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
    ])
    .set('sea', [
        new AirdropPoolItem('minecolonies:supplychestdeployer').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
        new AirdropPoolItem('minecraft:oak_log').setMinCount(64).setMaxCount(64).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:cobblestone').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:iron_ingot').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:gold_ingot').setMinCount(8).setMaxCount(8).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:diamond').setMinCount(1).setMaxCount(1).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:sponge').setMinCount(8).setMaxCount(8).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:carrot').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:potato').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:dirt').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
        new AirdropPoolItem('sophisticatedbackpacks:backpack').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
        new AirdropPoolItem('kubejs:common_atlas').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
        new AirdropPoolItem('kubejs:master_certificate').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
    ])

const WoodAirdropPool = new Map().set('wood&sapling', [
    new AirdropPoolItem('minecraft:dirt').setMinCount(16).setMaxCount(64).setFortuneCoe(0.5),
    new AirdropPoolItem('minecraft:grass_block').setMinCount(8).setMaxCount(16).setFortuneCoe(1).setChance(0.5),
    new AirdropPoolItem('minecraft:oak_log').setMinCount(32).setMaxCount(64).setFortuneCoe(2).setChance(0.8),
    new AirdropPoolItem('minecraft:birch_log').setMinCount(32).setMaxCount(64).setFortuneCoe(2).setChance(0.8),
    new AirdropPoolItem('minecraft:cherry_log').setMinCount(32).setMaxCount(64).setFortuneCoe(2).setChance(0.8),
    new AirdropPoolItem('minecraft:spruce_log').setMinCount(32).setMaxCount(64).setFortuneCoe(2).setChance(0.8),
    new AirdropPoolItem('minecraft:acacia_log').setMinCount(32).setMaxCount(64).setFortuneCoe(2).setChance(0.8),
    new AirdropPoolItem('minecraft:jungle_log').setMinCount(32).setMaxCount(64).setFortuneCoe(2).setChance(0.8),
    new AirdropPoolItem('minecraft:dark_oak_log').setMinCount(32).setMaxCount(64).setFortuneCoe(2).setChance(0.8),
    new AirdropPoolItem('minecraft:mangrove_log').setMinCount(32).setMaxCount(64).setFortuneCoe(2).setChance(0.8),
    new AirdropPoolItem('minecraft:oak_sapling').setMinCount(8).setMaxCount(16).setFortuneCoe(2).setChance(0.5),
    new AirdropPoolItem('minecraft:birch_sapling').setMinCount(8).setMaxCount(16).setFortuneCoe(2).setChance(0.5),
    new AirdropPoolItem('minecraft:spruce_sapling').setMinCount(8).setMaxCount(16).setFortuneCoe(2).setChance(0.5),
    new AirdropPoolItem('minecraft:acacia_sapling').setMinCount(8).setMaxCount(16).setFortuneCoe(2).setChance(0.5),
    new AirdropPoolItem('minecraft:cherry_sapling').setMinCount(8).setMaxCount(16).setFortuneCoe(2).setChance(0.5),
    new AirdropPoolItem('minecraft:jungle_sapling').setMinCount(8).setMaxCount(16).setFortuneCoe(2).setChance(0.5),
    new AirdropPoolItem('minecraft:dark_oak_sapling').setMinCount(8).setMaxCount(16).setFortuneCoe(2).setChance(0.5),
    new AirdropPoolItem('mangrove_roots').setMinCount(8).setMaxCount(16).setFortuneCoe(2).setChance(0.5),
]).set('only_wood', [
    new AirdropPoolItem('minecraft:oak_log').setMinCount(64).setMaxCount(128).setFortuneCoe(2).setChance(0.8),
    new AirdropPoolItem('minecraft:birch_log').setMinCount(64).setMaxCount(128).setFortuneCoe(2).setChance(0.8),
    new AirdropPoolItem('minecraft:cherry_log').setMinCount(64).setMaxCount(128).setFortuneCoe(2).setChance(0.8),
    new AirdropPoolItem('minecraft:spruce_log').setMinCount(64).setMaxCount(128).setFortuneCoe(2).setChance(0.8),
    new AirdropPoolItem('minecraft:acacia_log').setMinCount(64).setMaxCount(128).setFortuneCoe(2).setChance(0.8),
    new AirdropPoolItem('minecraft:jungle_log').setMinCount(64).setMaxCount(128).setFortuneCoe(2).setChance(0.8),
    new AirdropPoolItem('minecraft:dark_oak_log').setMinCount(64).setMaxCount(128).setFortuneCoe(2).setChance(0.8),
    new AirdropPoolItem('minecraft:mangrove_log').setMinCount(64).setMaxCount(128).setFortuneCoe(2).setChance(0.8),
])


const CommonAirdropPool = new Map()
    .set('common_wood', [
        new AirdropPoolItem('minecraft:dirt').setMinCount(16).setMaxCount(64).setFortuneCoe(0.5),
        new AirdropPoolItem('minecraft:grass_block').setMinCount(8).setMaxCount(16).setFortuneCoe(0.5).setChance(0.2),
        new AirdropPoolItem('minecraft:oak_log').setMinCount(32).setMaxCount(128).setFortuneCoe(1.5).setChance(0.75),
        new AirdropPoolItem('minecraft:birch_log').setMinCount(32).setMaxCount(128).setFortuneCoe(1.5).setChance(0.75),
        new AirdropPoolItem('minecraft:cherry_log').setMinCount(32).setMaxCount(128).setFortuneCoe(1.5).setChance(0.5),
        new AirdropPoolItem('minecraft:spruce_log').setMinCount(32).setMaxCount(128).setFortuneCoe(1.5).setChance(0.5),
    ]).set('all_wood', [
        new AirdropPoolItem('minecraft:dirt').setMinCount(16).setMaxCount(64).setFortuneCoe(0.5),
        new AirdropPoolItem('minecraft:grass_block').setMinCount(8).setMaxCount(16).setFortuneCoe(0.5).setChance(0.2),
        new AirdropPoolItem('minecraft:oak_log').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.5),
        new AirdropPoolItem('minecraft:birch_log').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.5),
        new AirdropPoolItem('minecraft:cherry_log').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:spruce_log').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.5),
        new AirdropPoolItem('minecraft:acacia_log').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:jungle_log').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:dark_oak_log').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:mangrove_log').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.25),
    ]).set('stone', [
        new AirdropPoolItem('minecraft:sand').setMinCount(32).setMaxCount(128).setFortuneCoe(1.5).setChance(0.75),
        new AirdropPoolItem('minecraft:red_sand').setMinCount(32).setMaxCount(64).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:gravel').setMinCount(32).setMaxCount(128).setFortuneCoe(1.5).setChance(0.5),
        new AirdropPoolItem('minecraft:cobblestone').setMinCount(32).setMaxCount(128).setFortuneCoe(1.5),
        new AirdropPoolItem('minecraft:stone').setMinCount(32).setMaxCount(128).setFortuneCoe(1.5).setChance(0.75),
        new AirdropPoolItem('minecraft:cobbled_deepslate').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.75),
        new AirdropPoolItem('minecraft:deepslate').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.75),
        new AirdropPoolItem('minecraft:smooth_stone').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:stone_bricks').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecart:clay_block').setMinCount(16).setMaxCount(64).setFortuneCoe(0.5).setChance(0.5),
    ]).set('raw_ore', [
        new AirdropPoolItem('minecraft:coal').setMinCount(32).setMaxCount(64).setFortuneCoe(1.5).setChance(0.8),
        new AirdropPoolItem('minecraft:raw_iron').setMinCount(32).setMaxCount(64).setFortuneCoe(1.5).setChance(0.8),
        new AirdropPoolItem('minecraft:raw_copper').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.5),
        new AirdropPoolItem('minecraft:raw_gold').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.5),
        new AirdropPoolItem('minecraft:quartz').setMinCount(16).setMaxCount(32).setFortuneCoe(1.5).setChance(0.3),
        new AirdropPoolItem('kubejs:raw_iridium').setMinCount(1).setMaxCount(4).setFortuneCoe(1.5).setChance(0.02),
    ]).set('wool', [
        new AirdropPoolItem('minecraft:white_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:orange_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:magenta_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:light_blue_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:yellow_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:lime_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:pink_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:gray_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:light_gray_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:cyan_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:purple_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:blue_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:brown_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:green_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:red_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:black_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
    ]).set('dye', [
        new AirdropPoolItem('minecraft:white_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:orange_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:magenta_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:light_blue_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:yellow_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:lime_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:pink_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:gray_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:light_gray_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:cyan_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:purple_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:blue_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:brown_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:green_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:red_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:black_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.25),
    ]).set('gem', [
        new AirdropPoolItem('minecraft:diamond').setMinCount(2).setMaxCount(4).setFortuneCoe(1.5).setChance(0.15),
        new AirdropPoolItem('minecraft:emerald').setMinCount(8).setMaxCount(16).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:lapis_lazuli').setMinCount(8).setMaxCount(16).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:redstone').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.3),
        new AirdropPoolItem('kubejs:echo_crystal').setMinCount(1).setMaxCount(2).setFortuneCoe(1.5).setChance(0.02),
    ]).set('altas', [
        new AirdropPoolItem('kubejs:common_atlas').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.8),
        new AirdropPoolItem('kubejs:advanced_atlas').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.2),
        new AirdropPoolItem('kubejs:ultra_atlas').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('kubejs:wood_atlas').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.25),
        new AirdropPoolItem('kubejs:stone_atlas').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.25),
        new AirdropPoolItem('kubejs:ore_atlas').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.25),
        new AirdropPoolItem('kubejs:sociality_atlas').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.3),
        new AirdropPoolItem('kubejs:luxury_atlas').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.25),
        new AirdropPoolItem('kubejs:huge_atlas').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
    ])

const AdvancedAirdropPool = new Map()
    .set('relics', [
        new AirdropPoolItem('relics:amphibian_boot').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('relics:aqua_walker').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('relics:arrow_quiver').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('relics:bastion_ring').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('relics:blazing_flask').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('relics:chorus_inhibitor').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('relics:drowned_belt').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('relics:elytra_booster').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('relics:enders_hand').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('relics:holy_locket').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('relics:horse_flute').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('relics:hunter_belt').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('relics:ice_breaker').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('relics:ice_skates').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('relics:infinity_ham').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('relics:jellyfish_necklace').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('relics:leather_belt').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('relics:magic_mirror').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('relics:magma_walker').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('relics:midnight_robe').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('relics:rage_glove').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('relics:reflection_necklace').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('relics:roller_skates').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('relics:shadow_glaive').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('relics:space_dissector').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('relics:spatial_sign').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('relics:spore_sack').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('relics:wool_mitten').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
    ]).set('curios', [
        // todo 添加更多饰品
        new AirdropPoolItem('kubejs:transmog_mirror').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('sophisticatedbackpacks:diamond_backpack').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('sophisticatedbackpacks:netherite_backpack').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.05),
        new AirdropPoolItem('minecraft:dragon_head').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.01),
    ]).set('backpack', [
        new AirdropPoolItem('sophisticatedbackpacks:diamond_backpack').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.15),
        new AirdropPoolItem('sophisticatedbackpacks:netherite_backpack').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:stack_upgrade_tier_4').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:stack_upgrade_tier_3').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:stack_upgrade_tier_2').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:upgrade_base').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:anvil_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:auto_blasting_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:tank_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:auto_smoking_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:inception_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:advanced_magnet_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:magnet_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:advanced_compacting_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:advanced_void_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:void_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:deposit_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:advanced_restock_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:restock_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:refill_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:advanced_deposit_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:advanced_refill_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:stack_upgrade_tier_1').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:everlasting_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:smelting_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:blasting_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:smoking_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:auto_smelting_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:stonecutter_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:crafting_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:stack_upgrade_starter_tier').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:xp_pump_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:advanced_pump_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:pump_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:battery_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:advanced_tool_swapper_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:tool_swapper_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:pickup_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:advanced_filter_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:filter_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:advanced_pickup_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:advanced_feeding_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('sophisticatedbackpacks:feeding_upgrade').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
    ]).set('gem', [
        new AirdropPoolItem('minecraft:diamond').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.3),
        new AirdropPoolItem('minecraft:emerald').setMinCount(16).setMaxCount(32).setFortuneCoe(1.5).setChance(0.5),
        new AirdropPoolItem('minecraft:lapis_lazuli').setMinCount(16).setMaxCount(32).setFortuneCoe(1.5).setChance(0.75),
        new AirdropPoolItem('minecraft:redstone').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.8),
        new AirdropPoolItem('minecraft:nether_star').setMinCount(1).setMaxCount(2).setFortuneCoe(1.5).setChance(0.1),
        new AirdropPoolItem('kubejs:echo_crystal').setMinCount(1).setMaxCount(4).setFortuneCoe(1.5).setChance(0.08),
    ]).set('raw_ore', [
        new AirdropPoolItem('minecraft:coal').setMinCount(32).setMaxCount(128).setFortuneCoe(1.5).setChance(0.9),
        new AirdropPoolItem('minecraft:raw_iron').setMinCount(32).setMaxCount(128).setFortuneCoe(1.5).setChance(0.9),
        new AirdropPoolItem('minecraft:raw_copper').setMinCount(32).setMaxCount(128).setFortuneCoe(1.5).setChance(0.8),
        new AirdropPoolItem('minecraft:raw_gold').setMinCount(32).setMaxCount(128).setFortuneCoe(1.5).setChance(0.6),
        new AirdropPoolItem('minecraft:quartz').setMinCount(32).setMaxCount(128).setFortuneCoe(1.5).setChance(0.5),
        new AirdropPoolItem('kubejs:raw_iridium').setMinCount(1).setMaxCount(8).setFortuneCoe(1.5).setChance(0.1),
    ]).set('altas', [
        new AirdropPoolItem('kubejs:advanced_atlas').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.5),
        new AirdropPoolItem('kubejs:ultra_atlas').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
        new AirdropPoolItem('kubejs:wood_atlas').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.3),
        new AirdropPoolItem('kubejs:stone_atlas').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.3),
        new AirdropPoolItem('kubejs:ore_atlas').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.3),
        new AirdropPoolItem('kubejs:sociality_atlas').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.5),
        new AirdropPoolItem('kubejs:luxury_atlas').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.3),
        new AirdropPoolItem('kubejs:huge_atlas').setMinCount(1).setMaxCount(1).setFortuneCoe(0).setChance(0.1),
    ]).set('lantern', [
        new AirdropPoolItem('arcanelanterns:boreal_lantern').setMinCount(1).setMaxCount(3).setFortuneCoe(0).setChance(0.25),
        new AirdropPoolItem('arcanelanterns:brilliant_lantern').setMinCount(1).setMaxCount(3).setFortuneCoe(0).setChance(0.25),
        new AirdropPoolItem('arcanelanterns:cloud_lantern').setMinCount(1).setMaxCount(3).setFortuneCoe(0).setChance(0.25),
        new AirdropPoolItem('arcanelanterns:containing_lantern').setMinCount(1).setMaxCount(3).setFortuneCoe(0).setChance(0.25),
        new AirdropPoolItem('arcanelanterns:feral_lantern').setMinCount(1).setMaxCount(3).setFortuneCoe(0).setChance(0.25),
        new AirdropPoolItem('arcanelanterns:life_lantern').setMinCount(1).setMaxCount(3).setFortuneCoe(0).setChance(0.25),
        new AirdropPoolItem('arcanelanterns:love_lantern').setMinCount(1).setMaxCount(3).setFortuneCoe(0).setChance(0.25),
        new AirdropPoolItem('arcanelanterns:wailing_lantern').setMinCount(1).setMaxCount(3).setFortuneCoe(0).setChance(0.25),
        new AirdropPoolItem('arcanelanterns:warding_lantern').setMinCount(1).setMaxCount(3).setFortuneCoe(0).setChance(0.25),
        new AirdropPoolItem('arcanelanterns:withering_lantern').setMinCount(1).setMaxCount(3).setFortuneCoe(0).setChance(0.25),
    ])


global.AirdropPool['newer'] = NewerAirdropPool
global.AirdropPool['common'] = CommonAirdropPool
global.AirdropPool['advanced'] = AdvancedAirdropPool
global.AirdropPool['ultra'] = UltraAirdropPool
global.AirdropPool['huge'] = HugeAirdropPool
global.AirdropPool['wood'] = WoodAirdropPool
global.AirdropPool['stone'] = StoneAirdropPool
global.AirdropPool['ore'] = OreAirdropPool
global.AirdropPool['luxury'] = LuxuryAirdropPool

global.AtlasTypeMapping = new Map()
    .set('kubejs:newer_atlas', 'newer')
    .set('kubejs:common_atlas', 'common')
    .set('kubejs:sociality_atlas', 'common')
    .set('kubejs:advanced_atlas', 'advanced')
    .set('kubejs:ultra_atlas', 'ultra')
    .set('kubejs:huge_atlas', 'huge')
    .set('kubejs:wood_atlas', 'wood')
    .set('kubejs:stone_atlas', 'stone')
    .set('kubejs:ore_atlas', 'ore')
    .set('kubejs:luxury_atlas', 'luxury')