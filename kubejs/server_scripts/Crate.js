// Add the crafting recipe for the Quark Crate
ServerEvents.recipes(event => {
    event.shaped('quark:crate', [
        'IWI',
        'WCW',
        'IWI'
    ], {
        W: '#minecraft:planks', // Any type of planks
        I: '#forge:ingots/iron', // Any iron ingot
        C: '#forge:chests/wooden' // Any wooden chest
    });
});

// Unhide the Quark Crate in the creative inventory
ServerEvents.tags('item', event => {
    event.get('minecraft:creative_inventory').add('quark:crate');
});