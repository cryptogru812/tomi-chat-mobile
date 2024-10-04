import { Text, TouchableOpacity, useColorScheme, View } from "react-native"
import { useSelector } from "react-redux"

import { getStyles } from "./style"

const FormButton = ({ label, text, onPress, style }) => {
  const colorScheme = useColorScheme()
  const theme = useSelector((state) => state.theme.theme)

  const activeTheme = theme === "automatic" ? colorScheme : theme
  const styles = getStyles(activeTheme)

  return (
    <View style={[style, { display: "flex", gap: 8, width: "100%" }]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FormButton
