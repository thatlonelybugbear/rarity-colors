Hooks.on('renderActorSheet', (actor, html) => {
    let items = html.find($(".items-list .item"))
    for(let i of items){
        let id = i.outerHTML.match(/data-item-id="(.*?)"/)
        let rarity = actor.object.items.get(id[1]).data.data.rarity
        if(rarity !== "" && rarity !== undefined) i.classList.add(rarity.slugify().toLowerCase())
    }
});