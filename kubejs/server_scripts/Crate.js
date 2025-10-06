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
ItemEvents.modification(event => {
    event.modify('quark:crate', item => {
        item.showInCreative = true;
    });
});