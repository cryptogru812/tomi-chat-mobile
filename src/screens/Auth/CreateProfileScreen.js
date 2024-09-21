import { Image, StyleSheet, Text, View } from "react-native"

import Color from "../../constants/Color"
import Device from "../../constants/Device"
import CustomButton from "../../components/UI/CustomButton"
import FormInput from "../../components/UI/FormInput"
import FormButton from "../../components/UI/FormButton"

const Logo = require("../../../assets/images/logo.png")

const CreateProfileScreen = () => {
  return (
    <View style={styles.screen}>
      <Image source={Logo} resizeMode="contain" style={{ height: 40 }} />

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

        <View style={{ display: "flex", gap: 12, width: "100%" }}>
          <Text style={[styles.title, { lineHeight: 32, marginBottom: 12 }]}>
            {"Create an account"}
          </Text>
          <FormInput label={"Name"} placeholder={"Name"} />
          <FormButton label={"Connect Wallet"} text={"Connect Wallet"} />
          <FormInput label={"Password"} placeholder={"Password"} type={"password"} />
          <FormInput label={"Confirm Password"} placeholder={"Confirm Password"} type={"password"} />
        </View>
      </View>
    </View>
  )
}

export default CreateProfileScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: "relative",
    height: "100%",
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 0.05 * Device.width,
    paddingVertical: 16,
    backgroundColor: "black",
  },

  modal: {
    display: "flex",
    backgroundColor: Color.secondary,
    width: "100%",
    gap: 24,
    margin: "auto",
    paddingHorizontal: 10,
    paddingVertical: 32,
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
  }
})
