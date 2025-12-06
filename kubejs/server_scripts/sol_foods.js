ServerEvents.tags('item', event => {
    const add = (tag, items) => items.forEach(item => event.add(tag, item));
	add('sol_valheim_reforged:not_food', [
		'immersive_weathering:icicle',
		'immersive_weathering:ice_sicle',
		'immersive_weathering:azalea_flowers',
		'the_deep_void:void_pendant',
		'the_deep_void:void_mirror',
		'the_deep_void:call_upon_the_hive',
		'the_deep_void:necronomicon',
		'hexerei:lava_bottle',
		'born_in_chaos_v1:bottle_of_magical_energy',
		'born_in_chaos_v1:elixirof_insect_protection',
		'born_in_chaos_v1:potion_of_rampage',
		'born_in_chaos_v1:elixir_of_vampirism',
		'born_in_chaos_v1:elixirof_wither_resistance',
		'born_in_chaos_v1:elixirof_ice_barrier',
		'born_in_chaos_v1:intoxicating_decoction',
		'born_in_chaos_v1:stimulating_decoction',
		'kismet:kismet_battery',
		'kismet:synthetic_organ',
		'kismet:organ_regrower',
		'hexical:hexburst',
		'hexical:hextito'
	]);
    add('sol_valheim_reforged:high_nutrients', [
        'born_in_chaos_v1:eternal_candy'
    ]);
    add('sol_valheim_reforged:always_edible', [
        'cold_sweat:soul_sprout'
    ]);
});

