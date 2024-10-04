import { Text, TextInput, useColorScheme, View } from "react-native"
import { useSelector } from "react-redux"

import { darkColor, lightColor } from "../../constants/Color"
import { getStyles } from "./style"

const FormInput = ({ label, placeholder, type }) => {
  const colorScheme = useColorScheme()
  const theme = useSelector((state) => state.theme.theme)

  const activeTheme = theme === "automatic" ? colorScheme : theme
  
  const styles = getStyles(activeTheme)
  const Color = activeTheme === "dark" ? darkColor : lightColor

  return (
    <View style={{ display: "flex", gap: 8, width: "100%" }}>
      <Text style={styles.label}>{label}</Text>
      <TextInput placeholder={placeholder} placeholderTextColor={Color.placeholder} style={styles.formInput} secureTextEntry={type === "password"} />
    </View>
  )
}

export default FormInput
