Hooks.on("init", () => {
    game.settings.register("rarity-colors", "rarityFlag", {
        name: game.i18n.format("rarity-colors.rarityFlag.name"),
        hint: game.i18n.format("rarity-colors.rarityFlag.hint"),
        scope: "world",
        config: true,
        default: true,
        type: Boolean,
    })

    game.settings.register("rarity-colors", "spellFlag", {
        name: game.i18n.format("rarity-colors.spellFlag.name"),
        hint: game.i18n.format("rarity-colors.spellFlag.hint"),
        scope: "world",
        config: true,
        default: true,
        type: Boolean,
    })

    game.settings.register("rarity-colors", "featFlag", {
        name: game.i18n.format("rarity-colors.featFlag.name"),
        hint: game.i18n.format("rarity-colors.featFlag.hint"),
        scope: "world",
        config: true,
        default: true,
        type: Boolean,
    })
})