import { Text, TextInput, useColorScheme, View } from "react-native"
import { useSelector } from "react-redux"

import { getStyles } from "../UI/style"

const SettingInput = ({ label, placeholder, type }) => {
  const colorScheme = useColorScheme()
  const theme = useSelector((state) => state.theme.theme)

  const activeTheme = theme === "automatic" ? colorScheme : theme
  const styles = getStyles(activeTheme)

  return (
    <View style={{ display: "flex", gap: 8, width: "100%" }}>
      <Text style={[styles.label, { fontSize: 12 }]}>{label}</Text>
      <TextInput placeholder={placeholder} placeholderTextColor={"#BCBEC0"} style={styles.input} secureTextEntry={type === "password"} />
    </View>
  )
}

export default SettingInput
