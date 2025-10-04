onEvent('recipes', event => {
    // Add the crafting recipe for the Quark Crate
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

onEvent('item.registry', event => {
    // Unhide the Quark Crate in the creative inventory
    event.modify('quark:crate', item => {
        item.showInCreative = true;
    });
});