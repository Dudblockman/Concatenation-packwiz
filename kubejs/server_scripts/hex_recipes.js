ServerEvents.recipes(event => {
event.remove({id: 'hexcasting:staff/oak'});
event.remove({id: 'hexcasting:staff/spruce'});
event.remove({id: 'hexcasting:staff/birch'});
event.remove({id: 'hexcasting:staff/jungle'});
event.remove({id: 'hexcasting:staff/acacia'});
event.remove({id: 'hexcasting:staff/dark_oak'});
event.remove({id: 'hexcasting:staff/crimson'});
event.remove({id: 'hexcasting:staff/warped'});
event.remove({id: 'hexcasting:staff/mangrove'});
event.remove({id: 'hexcasting:staff/cherry'});
event.remove({id: 'hexcasting:staff/bamboo'});

// Add back the staffs with modified recipes
const woodTypes = [
    'oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak',
    'crimson', 'warped', 'mangrove', 'cherry', 'bamboo'
];

woodTypes.forEach(wood => {
    event.shaped(`hexcasting:staff/${wood}`, [
        ' SA',
        ' PC',
        'S  '
    ], {
        P: `minecraft:${wood}_planks`,
        S: 'minecraft:stick',
        A: 'hexcasting:charged_amethyst',
        C: 'concatenationcore:the_error'
    }).keepIngredient('concatenationcore:the_error');
});

event.remove({id: 'ars_scalaes:archwood_staff'});
event.shaped('ars_scalaes:archwood_staff', [
        ' SA',
        ' PC',
        'S  '
    ], {
        P: 'ars_nouveau:archwood_planks',
        S: 'minecraft:stick',
        A: 'ars_nouveau:source_gem',
        C: 'concatenationcore:the_error'
    }).keepIngredient('concatenationcore:the_error');

event.remove({id: 'hexical:gauntlet_staff'});
event.remove({id: 'hexical:lightning_rod_staff'});

event.shaped('hexical:gauntlet_staff', [
        ' PC',
        'PAP',
        'PP '
    ], {
        P: 'minecraft:copper_ingot',
        A: 'hexcasting:charged_amethyst',
        C: 'concatenationcore:the_error'
    }).keepIngredient('concatenationcore:the_error');

event.shaped('hexical:lightning_rod_staff', [
        '  B',
        ' RC',
        'R  '
    ], {
        R: 'minecraft:lightning_rod',
        B: 'minecraft:amethyst_block',
        C: 'concatenationcore:the_error'
    }).keepIngredient('concatenationcore:the_error');

event.remove({id: 'hexdebug:evaluator'});


event.shaped('hexdebug:evaluator', [
        ' AW',
        ' SA',
        'S  '
    ], {
        A: 'hexcasting:charged_amethyst',
        S: 'hexcasting:slate_block',
        W: '#hexcasting:staves',
    }).keepIngredient('concatenationcore:the_error');

});