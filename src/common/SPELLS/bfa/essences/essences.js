/**
 * All azerite essences go in here.
 * You need to do this manually, usually an easy way to do this is by opening a WCL report and clicking the icons of spells to open the relevant Wowhead pages, here you can get the icon name by clicking the icon, copy the name of the spell and the ID is in the URL.
 * You can access these entries like other entries in the spells files by importing `common/SPELLS` and using the assigned property on the SPELLS object. Please try to avoid abbreviating properties.
 */

 // Trait IDs
  //   2 = "Azeroth's Undying Gift"
  //   3 = "Sphere of Suppression"
  //   4 = "Worldvein Resonance"
  //   5 = "Essence of the Focusing Iris"
  //   6 = "Purification Protocol"
  //   7 = "Anima of Life and Death"
  //  12 = "The Crucible of Flame"
  //  13 = "Nullification Dynamo"
  //  14 = "Condensed Life-Force"
  //  15 = "Ripple in Space"
  //  17 = "The Ever-Rising Tide"
  //  18 = "Artifice of Time"
  //  19 = "The Well of Existence"
  //  20 = "Life-Binder's Invocation"
  //  21 = "Vitality Conduit"
  //  22 = "Vision of Perfection"
  //  23 = "Blood of the Enemy"
  //  25 = "Aegis of the Deep"
  //  27 = "Memory of Lucid Dreams"
  //  28 = "The Unbound Force"
  //  32 = "Conflict and Strife"

export default {
  //The Ever-Rising Tide
  EVER_RISING_TIDE: {
    id: 299879,
    traitId: 17,
    name: 'The Ever-Rising Tide',
    icon: 'inv_elemental_mote_mana',
  },
  EVER_RISING_TIDE_MAJOR: {
    id: 299876,
    name: 'Overcharge Mana',
    icon: 'spell_azerite_essence09',
  },
  EVER_RISING_TIDE_HEALING_BUFF: {
    id: 299624,
    name: 'Overcharge Mana',
    icon: 'spell_azerite_essence09',
  },
  EVER_RISING_TIDE_CHARGING_BUFF: {
    id: 296072,
    name: 'Overcharge Mana',
    icon: 'spell_azerite_essence09',
  },
  EVER_RISING_TIDE_STAT_BUFF: {
    id: 296059,
    name: 'The Ever-Rising Tide',
    icon: 'inv_elemental_mote_mana',
  },
  EVER_RISING_TIDE_ENERGIZE: {
    id: 296065,
    name: 'The Ever-Rising Tide',
    icon: 'inv_elemental_mote_mana',
  },  
  WELL_OF_EXISTENCE: {
    id: 299936,
    traitId: 19,
    name: 'The Well Of Existence',
    icon: 'creatureportrait_twilightshammer_summoningportal_water01',
  },
  WELL_OF_EXISTENCE_MAJOR: {
    id: 299933,
    name: 'Refreshment',
    icon: 'creatureportrait_twilightshammer_summoningportal_water01',
  },
  WELL_OF_EXISTENCE_MAJOR_ABILITY: {
    id: 296197,
    name: 'Refreshment',
    icon: 'creatureportrait_twilightshammer_summoningportal_water01',
  },
  WELL_OF_EXISTENCE_DOUBLE_ABSORBTION: {
    id: 296193,
    name: 'The Well of Existence',
    icon: 'creatureportrait_twilightshammer_summoningportal_water01',
  },
  WELL_OF_EXISTENCE_HEAL: {
    id: 296184,
    name: 'The Well of Existence',
    icon: 'creatureportrait_twilightshammer_summoningportal_water01',
  },
  //The Crucible of Flame
  CONCENTRATED_FLAME: {
    id: 299349,
    name: 'Concentrated Flame',
    icon: 'spell_azerite_essence_15',
  },
  ANCIENT_FLAME: {
    id: 299348,
    traitId: 12,
    name: 'Ancient Flame',
    icon: 'inv_radientazeritematrix',
  },
  CONCENTRATED_FLAME_CAST: {
    id: 295373,
    name: 'Concentrated Flame',
    icon: 'spell_azerite_essence_15',
  },
  CONCENTRATED_FLAME_CAST_HEAL: {
    id: 295375,
    name: 'Concentrated Flame',
    icon: 'spell_azerite_essence_15',
  },
  CONCENTRATED_FLAME_CAST_DAMAGE: {
    id: 295374,
    name: 'Concentrated Flame',
    icon: 'spell_azerite_essence_15',
  },
  CONCENTRATED_FLAME_DOT_DAMAGE: {
    id: 295368,
    name: 'Concentrated Flame',
    icon: 'spell_azerite_essence_15',
  },
  ANCIENT_FLAME_DOT_HEAL: {
    id: 303380,
    name: 'Ancient Flame',
    icon: 'spell_azerite_essence_15',
  },
  ANCIENT_FLAME_DOT_DAMAGE: {
    id: 295367,
    name: 'Ancient Flame',
    icon: 'spell_azerite_essence_15',
  },
//general conflict (the major part of conflict and stife)
  CONFLICT: {
    id: 304088,
    traitId: 32,
    name: 'Conflict',
    icon: 'spell_azerite_essence_17',
  },
  //Worldvein Resonance
  WORLDVEIN_RESONANCE: {
    id: 295186,
    traitId: 4,
    name: 'Worldvein Resonance',
    icon: 'inv_misc_azerite_01',
  },
  LIFEBLOOD_BUFF: {
    // buff given when stood near shards with the minor essence, stacking up to 4
    id: 295137,
    name: 'Lifeblood',
    icon: 'inv_glowingazeritespire',
  },
  LIFEBLOOD_SHARD_SUMMON: {
    // id for 'summon' event of shards being created, either randomly from the minor or in response to activating the major
    id: 295114,
    name: 'Lifeblood Shard',
    icon: 'inv_radientazeritematrix',
  },
  NULL_DYNAMO: {
    traitId: 13,
    // major cast
    id: 295746,
    name: 'Nullification Dynamo',
    icon: 'spell_azerite_essence_16',
  },
  NULL_DYNAMO_SHIELD_MINOR: {
    id: 295842,
    name: 'Null Barrier',
    icon: 'spell_azerite_essence_16',
  },
  NULL_DYNAMO_DAMAGE: {
    id: 296061,
    name: 'Null Barrier',
    icon: 'spell_azerite_essence_16',
  },
  // Memory of Lucid Dreams
  LUCID_DREAMS: {
    id: 299374,
    traitId: 27,
    name: 'Memory of Lucid Dreams',
    icon: 'spell_azerite_essence05',
  },
  LUCID_DREAMS_MAJOR: {
    id: 298357,
    name: 'Memory of Lucid Dreams',
    icon: 'spell_azerite_essence05',
  },
  LUCID_DREAMS_MINOR: {
    id: 299373,
    name: 'Lucid Dreams',
    icon: 'inv_radientazeritematrix',
  },
  LUCID_DREAMS_MINOR_STAT_BUFF: {
    id: 298343,
    name: 'Lucid Dreams',
    icon: 'spell_azerite_essence05',
  },
  LUCID_DREAMS_HEAL: {
    id: 298318,
    name: 'Lucid Dreams',
    icon: 'inv_radientazeritematrix',
  },
  LUCID_DREAMS_MINOR_RESOURCE_REFUND: {
    id: 298324,
    name: 'Lucid Dreams',
    icon: 'inv_radientazeritematrix',
  },
   LUCID_DREAMS_MINOR_RESOURCE_REFUND_RAGE : {
    id: 298321,
    name: 'Lucid Dreams',
    icon: 'inv_radientazeritematrix',
  },
  //Vision of Perfection
  VISION_OF_PERFECTION: {
    id: 296325,
    traitId: 22,
    name: 'Vision of Perfection',
    icon: 'spell_azerite_essence_18',
  },
  VISION_OF_PERFECTION_HASTE_CALC: {
    id: 303342,
    name: 'Vision of Perfection',
    icon: 'spell_azerite_essence_18',
  },
  VISION_OF_PERFECTION_HASTE_BUFF_SELF: {
    id: 303344,
    name: 'Vision of Perfection',
    icon: 'spell_azerite_essence_18',
  },
  VISION_OF_PERFECTION_HASTE_BUFF_OTHERS: {
    id: 303345,
    name: 'Vision of Perfection',
    icon: 'spell_azerite_essence_18',
  },
  STRIVE_FOR_PERFECTION: {
    id: 296320,
    name: 'Strive for Perfection',
    icon: 'inv_radientazeritematrix',
  },
  STRIVE_FOR_PERFECTION_HEAL: { // 5% heal on activation
    id: 296330,
    name: 'Strive for Perfection',
    icon: 'spell_azerite_essence_18',
  },
  STRIVE_FOR_PERFECTION_VERSATILITY: {
    id: 296322,
    name: 'Strive for Perfection',
    icon: 'inv_radientazeritematrix',
  },
  //Condensed Life Force
  GUARDIAN_OF_AZEROTH: {
    id: 299358,
    traitId: 14,
    name: 'Guardian of Azeroth',
    icon: 'spell_azerite_essence14',
  },
  GUARDIAN_OF_AZEROTH_MAJOR: {
    id: 295840,
    name: 'Guardian of Azeroth',
    icon: 'spell_azerite_essence14',
  },
  GUARDIAN_OF_AZEROTH_HASTE_BUFF: {
    id: 295855,
    name: 'Guardian of Azeroth',
    icon: 'spell_azerite_essence14',
  },
  AZERITE_SPIKE: {
    id: 296856,
    name: 'Azerite Spike',
    icon: 'spell_azerite_essence14',
  },
  CONDENSED_LIFE_FORCE_DEBUFF: {
    id: 295838,
    name: 'Condensed Life Force',
    icon: 'spell_azerite_essence14',
  },
};
