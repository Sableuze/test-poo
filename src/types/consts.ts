export const PAIRS = ['BTCUSDT', 'BNBBTC', 'ETHBTC'] as const;
export const PAIR_KEY = 'pair';
export const CHANGES_KEY = 'changes';
export type Pair = (typeof PAIRS)[number];
