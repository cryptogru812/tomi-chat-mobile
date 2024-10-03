import { useState } from "react"
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native"
import { useRouter } from "expo-router"
import Checkbox from "expo-checkbox"

import Color from "../../constants/Color"
import Device from "../../constants/Device"
import CustomButton from "../../components/UI/CustomButton"
import FormInput from "../../components/UI/FormInput"
import FormButton from "../../components/UI/FormButton"

const Logo = require("../../assets/images/logo.png")
const Background = require("../../assets/images/background.png")

const CreateProfileScreen = () => {
  const router = useRouter()
  const [isChecked, setChecked] = useState(false);

  return (
    <ScrollView
      contentContainerStyle={styles.screen}
      keyboardShouldPersistTaps="handled"
    >
      <ImageBackground source={Background} style={styles.background}>
        <Image source={Logo} resizeMode="contain" style={styles.logo} />

        <View style={styles.modal}>
          <View style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <Text style={[styles.title, { lineHeight: 32 }]}>
              {"Tomi "}
              <Text style={[styles.title, { color: Color.primary }]}>
                {"Mesh"}
              </Text>
            </Text>

            <View style={{ display: "flex", gap: 24, alignItems: "center" }}>
              <CustomButton title="+" style={styles.avatarButton} />
              <View style={{ display: "flex", alignItems: "center" }}>
                <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>{"Upload a picture"}</Text>
                <Text style={{ color: "white", fontSize: 16, fontWeight: "400", textAlign: "center" }}>{"(Automatically created as an NFT asset)"}</Text>
              </View>
            </View>
          </View>

          <View style={{ display: "flex", gap: 12, width: "100%", marginBottom: 12 }}>
            <Text style={[styles.title, { lineHeight: 32, marginBottom: 12 }]}>
              {"Create an account"}
            </Text>
            <FormInput label={"Name"} placeholder={"Name"} />
            <FormButton label={"Connect Wallet"} text={"Connect Wallet"} />
            <FormInput label={"Password"} placeholder={"Password"} type={"password"} />
            <FormInput label={"Confirm Password"} placeholder={"Confirm Password"} type={"password"} />
            <View style={{ display: "flex", flexDirection: "row", gap: 8, paddingVertical: 12, width: "100%" }}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? Color.primary : undefined}
              />
              <Text style={styles.paragraph}>
                By registering an account, you are agreeing {" "}
                <Text style={{ color: Color.primary }}>Terms and Agreement</Text>
                {" "}of Tomi
              </Text>
            </View>
            <FormButton text={"Create Account"} onPress={() => router.push("signin")} />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  )
}

export default CreateProfileScreen

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
    minHeight: 930,
  },

  logo: {
    position: "absolute",
    top: 24,
    height: 40,
  },

  modal: {
    position: "absolute",
    top: 96,
    display: "flex",
    backgroundColor: Color.secondary,
    width: "100%",
    gap: 24,
    margin: "auto",
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

  avatarButton: {
    textAlign: "center",
    color: "white",
    height: 90,
    width: 90,
    fontSize: 48,
    lineHeight: 80,
    borderColor: "white",
    borderRadius: 8,
    borderStyle: "dashed",
    borderWidth: 2,
  },

  checkboxContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 12,
    width: "100%",
  },

  checkbox: {
    width: 16,
    height: 16,
    backgroundColor: "#D5DAE1",
    borderWidth: 2,
    borderColor: "#D5DAE1",
    borderRadius: 2,
  },

  paragraph: {
    color: "white",
    fontWeight: "400",
    width: "95%",
    lineHeight: 16,
  }
})
