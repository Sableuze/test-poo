import { defineStore } from 'pinia';
import { CHANGES_KEY, ListingItem, Pair, PAIR_KEY, PAIRS } from '@/types';
import { v4 } from '@/utils';

export const useListingsStore = defineStore('listings', () => {
  const pair = ref<Pair>(
    (() => {
      const value = localStorage.getItem(PAIR_KEY) as Pair;
      return value && PAIRS.includes(value) ? value : PAIRS[0];
    })(),
  );
  const state = reactive<{ asks: ListingItem[]; bids: ListingItem[] }>({
    asks: [],
    bids: [],
  });
  const changes = ref(JSON.parse(localStorage.getItem(CHANGES_KEY) as string) || []);

  const getPair = computed(() => pair.value);
  const getChanges = computed(() => changes.value);

  let wsConnection: WebSocket | null = null;

  const setPair = async (value: Pair) => {
    if (PAIRS.includes(value)) {
      updateChanges(value, pair.value);
      pair.value = value;

      localStorage.setItem(PAIR_KEY, value);
      connect(value);
    }
  };

  const updateChanges = (value: Pair, previous: Pair) => {
    const change = {
      id: v4(),
      value,
      previous,
      at: Date.now(),
    };
    changes.value.unshift(change);
    localStorage.setItem(CHANGES_KEY, JSON.stringify(changes.value));
  };

  const connect = async (value: Pair = pair.value) => {
    // Call REST API endpoint to fetch initial data (optional)

    // Connect to WebSocket
    if (wsConnection) {
      wsConnection.close();
    }

    wsConnection = new WebSocket(
      `${import.meta.env.VITE_APP_BINANCE_WS_LINK}${value.toLowerCase()}@depth`,
    ); // Replace with your WS URL

    wsConnection.onopen = () => {
      console.log('WebSocket connection opened');
    };

    wsConnection.onmessage = (message) => {
      const data = JSON.parse(message.data);
      // Update prices state based on received data
      console.log(data);
      const ask = data.a[0];
      const bid = data.b[0];
      ask &&
        state.asks.unshift({
          price: ask[0],
          count: ask[1],
          total: ask[0] * ask[1],
        });
      bid &&
        state.bids.unshift({
          price: bid[0],
          count: bid[1],
          total: bid[0] * bid[1],
        });
    };

    wsConnection.onerror = (error) => {
      console.error('WebSocket error:', error);
      // Handle connection errors (optional)
    };
  };
  return {
    state,
    getPair,
    getChanges,
    setPair,
    connect,
  };
});
