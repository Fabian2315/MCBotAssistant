const ITEM_ALIASES = {
  craftingtable: 'crafting_table',
  workbench: 'crafting_table',
  planks: 'oak_planks',
  woodplanks: 'oak_planks',
  wood_pickaxe: 'wooden_pickaxe',
  woodpickaxe: 'wooden_pickaxe',
  wood_axe: 'wooden_axe',
  woodaxe: 'wooden_axe',
  wood_shovel: 'wooden_shovel',
  woodshovel: 'wooden_shovel',
  wood_hoe: 'wooden_hoe',
  woodhoe: 'wooden_hoe',
  wood_sword: 'wooden_sword',
  woodsword: 'wooden_sword'
}

const BLOCKED_ITEM_IDS = new Set([])

const FURNACE_BLOCKS_BY_STATION = {
  furnace: ['furnace'],
  smoker: ['smoker'],
  blast_furnace: ['blast_furnace'],
  any: ['furnace', 'smoker', 'blast_furnace']
}

// Compact extensible smelting registry: output -> possible inputs + station preference.
const FURNACE_RECIPES_BY_OUTPUT = {
  iron_ingot: [
    { input: 'iron_ore', station: 'blast_furnace' },
    { input: 'deepslate_iron_ore', station: 'blast_furnace' },
    { input: 'raw_iron', station: 'blast_furnace' }
  ],
  gold_ingot: [
    { input: 'gold_ore', station: 'blast_furnace' },
    { input: 'deepslate_gold_ore', station: 'blast_furnace' },
    { input: 'raw_gold', station: 'blast_furnace' },
    { input: 'nether_gold_ore', station: 'furnace' }
  ],
  copper_ingot: [
    { input: 'copper_ore', station: 'blast_furnace' },
    { input: 'deepslate_copper_ore', station: 'blast_furnace' },
    { input: 'raw_copper', station: 'blast_furnace' }
  ],
  netherite_scrap: [
    { input: 'ancient_debris', station: 'furnace' }
  ],
  glass: [
    { input: 'sand', station: 'furnace' },
    { input: 'red_sand', station: 'furnace' }
  ],
  stone: [
    { input: 'cobblestone', station: 'furnace' }
  ],
  smooth_stone: [
    { input: 'stone', station: 'furnace' }
  ],
  smooth_sandstone: [
    { input: 'sandstone', station: 'furnace' }
  ],
  smooth_red_sandstone: [
    { input: 'red_sandstone', station: 'furnace' }
  ],
  smooth_quartz: [
    { input: 'quartz_block', station: 'furnace' }
  ],
  brick: [
    { input: 'clay_ball', station: 'furnace' }
  ],
  terracotta: [
    { input: 'clay', station: 'furnace' }
  ],
  charcoal: [
    { input: 'oak_log', station: 'furnace' },
    { input: 'spruce_log', station: 'furnace' },
    { input: 'birch_log', station: 'furnace' },
    { input: 'jungle_log', station: 'furnace' },
    { input: 'acacia_log', station: 'furnace' },
    { input: 'dark_oak_log', station: 'furnace' },
    { input: 'mangrove_log', station: 'furnace' },
    { input: 'cherry_log', station: 'furnace' },
    { input: 'pale_oak_log', station: 'furnace' },
    { input: 'crimson_stem', station: 'furnace' },
    { input: 'warped_stem', station: 'furnace' }
  ],
  cooked_beef: [{ input: 'beef', station: 'smoker' }],
  cooked_chicken: [{ input: 'chicken', station: 'smoker' }],
  cooked_porkchop: [{ input: 'porkchop', station: 'smoker' }],
  cooked_mutton: [{ input: 'mutton', station: 'smoker' }],
  cooked_rabbit: [{ input: 'rabbit', station: 'smoker' }],
  cooked_cod: [{ input: 'cod', station: 'smoker' }],
  cooked_salmon: [{ input: 'salmon', station: 'smoker' }],
  dried_kelp: [{ input: 'kelp', station: 'smoker' }],
  baked_potato: [{ input: 'potato', station: 'smoker' }],
  cracked_stone_bricks: [{ input: 'stone_bricks', station: 'furnace' }],
  cracked_deepslate_bricks: [{ input: 'deepslate_bricks', station: 'furnace' }],
  cracked_deepslate_tiles: [{ input: 'deepslate_tiles', station: 'furnace' }],
  green_dye: [{ input: 'cactus', station: 'furnace' }],
  lime_dye: [{ input: 'sea_pickle', station: 'furnace' }]
}

const FUEL_TICKS_BY_ITEM = {
  coal_block: 16000,
  coal: 1600,
  charcoal: 1600,
  blaze_rod: 2400,
  dried_kelp_block: 4000,
  lava_bucket: 20000,
  bamboo_block: 300,
  bamboo: 50,
  stick: 100,
  oak_planks: 300,
  spruce_planks: 300,
  birch_planks: 300,
  jungle_planks: 300,
  acacia_planks: 300,
  dark_oak_planks: 300,
  mangrove_planks: 300,
  cherry_planks: 300,
  pale_oak_planks: 300,
  crimson_planks: 300,
  warped_planks: 300,
  oak_log: 300,
  spruce_log: 300,
  birch_log: 300,
  jungle_log: 300,
  acacia_log: 300,
  dark_oak_log: 300,
  mangrove_log: 300,
  cherry_log: 300,
  pale_oak_log: 300,
  crimson_stem: 300,
  warped_stem: 300
}

function canonicalizeItemToken(input) {
  return String(input || '')
    .trim()
    .toLowerCase()
    .replace(/[\s-]+/g, '_')
}

function resolveCraftItemName(input) {
  const canonical = canonicalizeItemToken(input)
  return ITEM_ALIASES[canonical] || canonical
}

module.exports = {
  BLOCKED_ITEM_IDS,
  FUEL_TICKS_BY_ITEM,
  FURNACE_BLOCKS_BY_STATION,
  FURNACE_RECIPES_BY_OUTPUT,
  ITEM_ALIASES,
  canonicalizeItemToken,
  resolveCraftItemName
}