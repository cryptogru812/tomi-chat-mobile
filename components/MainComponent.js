// import { W3mButton } from "@web3modal/wagmi-react-native";
import { View, StyleSheet, useColorScheme, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import ThemeSelector from "./ThemeSelector";
import { useWeb3Modal } from "@web3modal/wagmi-react-native";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect, disconnect } from "../store/authSlice";
import AvatarPicker from "./AvatarPicker";

export default function MainComponent() {
  const dispatch = useDispatch();
  const colorScheme = useColorScheme();
  const { open, close } = useWeb3Modal();
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  const { isConnected_ } = useSelector((state) => state.auth);
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    if (address && isConnected) {
      dispatch(connect({ address }));
    }
  }, [address, isConnected]);

  const activeTheme = theme === "automatic" ? colorScheme : theme;
  const themeContainerStyle =
    activeTheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <View style={{ height: 100 }} />
      <Button title={isConnected ? "Disconnect" : "Connect"} onPress={open} />
      <AvatarPicker />
      <ThemeSelector />
      <StatusBar />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  lightContainer: {
    backgroundColor: "#d0d0c0",
  },
  darkContainer: {
    backgroundColor: "#242c40",
  },
  lightThemeText: {
    color: "#242c40",
  },
  darkThemeText: {
    color: "#d0d0c0",
  },
});
