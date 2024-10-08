// priority: 500
const { ColonyResearchModel, BuildingRequirementModel, ItemRequirementModel } = require("../../model/colony_research_model")

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:researches/civilian/introeconomics.json`,
        new ColonyResearchModel('minecolonies:civilian', 1, [
            new ItemRequirementModel(['minecraft:writable_book'], 16),
        ])
            .setEffects([{ 'kubejs:effects/introeconomics': 1 }])
            .setSubtitle('com.kubejs.research.civilian.introeconomics.subtitle')
    )
    event.addJson(`kubejs:researches/effects/introeconomics.json`, { "effect": true })

    event.addJson(`kubejs:researches/civilian/adveconomics.json`,
        new ColonyResearchModel('minecolonies:civilian', 2, [
            new BuildingRequirementModel('townhall', 3),
            new ItemRequirementModel(['minecraft:netherite_ingot'], 8),
            new ItemRequirementModel(['lightmanscurrency:coin_gold'], 16)
        ])
            .setEffects([{ 'kubejs:effects/adveconomics': 1 }])
            .setParentResearch('kubejs:civilian/introeconomics')
            .setSubtitle('com.kubejs.research.civilian.adveconomics.subtitle')
    )
    event.addJson(`kubejs:researches/effects/adveconomics.json`, { "effect": true })
})