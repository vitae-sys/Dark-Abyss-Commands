(() => {
  const systems = window.ABYSS_SYSTEMS || [];
  const find = (name) => systems.find((system) => system[0] === name);

  const rtp = find('Abyss RTP');
  if (rtp) {
    rtp[3] = 'Random safe teleport into the Overworld wilderness.';
    rtp[6] = 'Overworld only. Searches between 500 and 7,500 blocks from the center, has a 3 second warmup that cancels if you move, a 15 minute cooldown, avoids protected claims/towns/regions, and grants 5 seconds of arrival protection.';
  }

  const claims = find('Abyss Claims');
  if (claims) {
    claims[5] = claims[5].filter(([command]) => !command.startsWith('/claimban'));
    claims[6] = 'Personal claims are Overworld-only. You start with 100 claim blocks and earn 100 more per hour. Use a Golden Shovel for claim tooling. Claims are disabled in the Nether and The End.';
  }

  const towns = find('Abyss Towns');
  if (towns) {
    towns[5] = towns[5].filter(([command]) => command !== '/town war');
    towns[6] = 'Many town commands depend on your Mayor/Trustee/Resident role. Town relations are enabled, but town wars are currently disabled. Town claims are unavailable in the Nether and The End.';
  }

  const enchants = find('Abyss Enchants');
  if (enchants) {
    enchants[3] = 'Browse, inspect and use the custom Abyss Enchant system.';
    enchants[6] = 'Enchanting Table, loot, villagers and anvils can all provide or apply Abyss Enchants. Use the Enchant List tab on this website to search the full current list, descriptions, rarities, targets and max levels.';
  }

  if (!find('Abyss Honing')) {
    const honing = [
      'Abyss Honing', '✦', 'rpg',
      'Upgrade supported armor through nine named Honing tiers.',
      'member',
      [
        ['/honing', 'Show the Honing system help.'],
        ['/honing core', 'Show the Abyssal Honing Core crafting recipe.']
      ],
      'HOW TO HONE: Put supported armor in the left side of a normal anvil and a genuine Abyssal Honing Core in the right side. Tier path: Dormant I → Hardened II → Tempered III → Runed IV → Awakened V → Ascendant VI → Abyssforged VII → Sovereign VIII → Transcendent IX. Upgrade costs/chances: 1 Core + $1,000 (100%), 1 + $2,500 (100%), 2 + $5,000 (90%), 2 + $8,000 (80%), 3 + $12,000 (65%), 4 + $18,000 (50%), 5 + $28,000 (35%), 6 + $45,000 (20%). Failed attempts consume the required Cores and money, but never break or downgrade the item. Each failure adds +5 percentage points of pity, up to +25. Diamond → Netherite keeps the Honing tier and pity. Core recipe: D A D / I E I / D A D (D = Diamond, A = Amethyst Shard, I = Iron Block, E = Echo Shard).'
    ];
    const enchantIndex = systems.findIndex((system) => system[0] === 'Abyss Enchants');
    systems.splice(enchantIndex >= 0 ? enchantIndex + 1 : systems.length, 0, honing);
  }

  if (!find('Server Plugin Stack')) {
    systems.push([
      'Server Plugin Stack', '⚙', 'rpg social land economy cosmetic',
      'The main player-facing systems currently powering Dark Abyss.',
      '', [],
      'Custom: AbyssAurora, AbyssBosses, AbyssHoning, AbyssLoot, AbyssRTP. Progression & economy: EcoSkills, EcoJobs, EcoShop, EcoEnchants, GlobalMarketplace. Land & social: HuskClaims, HuskTowns, PlayerWarps. World & content: BetterStructures, JustLootIt, NewSeasons, EcoMobs, EliteMobs. Player features: Citizens, UltraCosmetics, ImageFrame, FancyHolograms. Crossplay: Geyser + Floodgate. Backend/admin-only plugins are intentionally not listed here.'
    ]);
  }
})();
