import "@walletconnect/react-native-compat";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, arbitrum } from "@wagmi/core/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createWeb3Modal,
  defaultWagmiConfig,
  Web3Modal,
} from "@web3modal/wagmi-react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { Slot } from "expo-router";

import { store } from "../store/store";

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = process.env.EXPO_PUBLIC_PROJECT_ID;

// 2. Create config
const metadata = {
  name: "AppKit RN",
  description: "AppKit RN Example",
  url: "https://walletconnect.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
  redirect: {
    native: "YOUR_APP_SCHEME://",
    universal: "YOUR_APP_UNIVERSAL_LINK.com",
  },
};

const chains = [mainnet, polygon, arbitrum];

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({
  projectId,
  wagmiConfig,
  defaultChain: mainnet, // Optional
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  themeMode: "dark",
});

export default function MainLayout() {
  return (
    <SafeAreaProvider>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <SafeAreaView style={{ flex: 1 }}>
              <Web3Modal />
              <Slot />
            </SafeAreaView>
          </Provider>
        </QueryClientProvider>
      </WagmiProvider>
    </SafeAreaProvider>
  );
}
