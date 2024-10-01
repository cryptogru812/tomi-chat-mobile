import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useRouter } from "expo-router"

import Color from "../../constants/Color"
import Device from "../../constants/Device"
import FormInput from "../../components/UI/FormInput"
import FormButton from "../../components/UI/FormButton"

const Logo = require("../../assets/images/logo.png")
const Background = require("../../assets/images/background.png")

const LoginScreen = () => {
  const router = useRouter()
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={styles.screen}
      keyboardShouldPersistTaps="handled"
    >
      <ImageBackground source={Background} style={[styles.background, { minHeight: Device.height - insets.bottom - insets.top }]}>
        <Image source={Logo} resizeMode="contain" style={styles.logo} />

        <View style={styles.modal}>
          <View style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <Text style={[styles.title, { lineHeight: 32 }]}>
              {"Tomi "}
              <Text style={[styles.title, { color: Color.primary }]}>
                {"Mesh"}
              </Text>
            </Text>
          </View>

          <View style={{ display: "flex", gap: 12, width: "100%", marginBottom: 12 }}>
            <Text style={[styles.title, { lineHeight: 32, marginBottom: 12 }]}>
              {"Login"}
            </Text>
            <FormInput label={"Wallet Address"} placeholder={"wallet address"} />
            <FormInput label={"Password"} placeholder={"Password"} type={"password"} />
            <Text style={styles.paragraph}>Forgot Password?</Text>
            <FormButton text={"Sign in"} onPress={() => router.push("chats")} style={{ marginTop: 8 }} />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    backgroundColor: "black",
  },

  background: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0.05 * Device.width,
    paddingVertical: 16,
  },

  logo: {
    position: "absolute",
    top: 24,
    height: 40,
  },

  modal: {
    position: "absolute",
    display: "flex",
    backgroundColor: Color.secondary,
    width: "100%",
    gap: 24,
    margin: "auto",
    marginTop: 24,
    paddingHorizontal: 10,
    paddingVertical: 16,
    borderWidth: 2,
    borderRadius: 28,
    borderColor: Color.border,
    alignItems: "center",
  },

  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },

  paragraph: {
    color: "white",
    fontWeight: "400",
    lineHeight: 16,
    marginTop: 4,
  }
})
