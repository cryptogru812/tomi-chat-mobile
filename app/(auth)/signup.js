import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native"
import { Moon, Sun } from "lucide-react-native"
import { useRouter } from "expo-router"
import Checkbox from "expo-checkbox"

import { darkColor, lightColor } from "../../constants/Color"
import CustomButton from "../../components/UI/CustomButton"
import FormInput from "../../components/UI/FormInput"
import FormButton from "../../components/UI/FormButton"
import { setTheme } from "../../store/themeSlice"
import { getStyles } from "./style"

const Logo = require("../../assets/images/logo.png")
const DarkBackground = require("../../assets/images/background-dark.png")
const LightBackground = require("../../assets/images/background-light.png")

const CreateProfileScreen = () => {
  const router = useRouter()
  const colorScheme = useColorScheme()
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const [isChecked, setChecked] = useState(false)

  const activeTheme = theme === "automatic" ? colorScheme : theme;

  const Background = activeTheme === "dark" ? DarkBackground : LightBackground
  const Color = activeTheme === "dark" ? darkColor : lightColor
  const styles = getStyles(activeTheme)

  const handleThemeChange = (selectedTheme) => {
    dispatch(setTheme(selectedTheme))
  };

  return (
    <ScrollView
      contentContainerStyle={styles.screen}
      keyboardShouldPersistTaps="handled"
    >
      <ImageBackground source={Background} style={[styles.background, { minHeight: 930 }]}>
        <Image source={Logo} resizeMode="contain" style={styles.logo} />
        <TouchableOpacity style={styles.theme} onPress={() => handleThemeChange(activeTheme === "dark" ? "light" : "dark")}>
          {
            activeTheme === "dark" ? <Sun size={24} color="white" /> : <Moon size={24} color={Color.primary} />
          }
        </TouchableOpacity>

        <View style={[styles.modal, { top: 96 }]}>
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
                <Text style={{ color: Color.white, fontSize: 20, fontWeight: "500" }}>{"Upload a picture"}</Text>
                <Text style={{ color: Color.white, fontSize: 16, fontWeight: "400", textAlign: "center" }}>{"(Automatically created as an NFT asset)"}</Text>
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
              <Text style={[styles.paragraph, { width: "95%" }]}>
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
