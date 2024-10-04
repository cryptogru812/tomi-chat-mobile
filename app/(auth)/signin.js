import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useRouter } from "expo-router"
import { Moon, Sun } from "lucide-react-native"

import Device from "../../constants/Device"
import { darkColor, lightColor } from "../../constants/Color"
import FormInput from "../../components/UI/FormInput"
import FormButton from "../../components/UI/FormButton"
import { setTheme } from "../../store/themeSlice"
import { getStyles } from "./style"

const Logo = require("../../assets/images/logo.png")
const DarkBackground = require("../../assets/images/background-dark.png")
const LightBackground = require("../../assets/images/background-light.png")

const LoginScreen = () => {
  const router = useRouter()
  const colorScheme = useColorScheme()
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme.theme)
  const insets = useSafeAreaInsets()

  const activeTheme = theme === "automatic" ? colorScheme : theme

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
      <ImageBackground source={Background} style={[styles.background, { minHeight: Device.height - insets.bottom - insets.top }]}>
        <Image source={Logo} resizeMode="contain" style={styles.logo} />
        <TouchableOpacity style={styles.theme} onPress={() => handleThemeChange(activeTheme === "dark" ? "light" : "dark")}>
          {
            activeTheme === "dark" ? <Sun size={24} color="white" /> : <Moon size={24} color={Color.primary} />
          }
        </TouchableOpacity>

        <View style={[styles.modal, { marginTop: 24 }]}>
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
