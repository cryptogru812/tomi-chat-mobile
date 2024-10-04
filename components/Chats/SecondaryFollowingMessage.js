import { Text, useColorScheme, View } from "react-native"
import { useSelector } from "react-redux"

import { getStyles } from "./style"

const SecondaryFollowingMessage = () => {
  const colorScheme = useColorScheme()
  const theme = useSelector((state) => state.theme.theme)

  const activeTheme = theme === "automatic" ? colorScheme : theme

  const styles = getStyles(activeTheme)

  return (
    <View style={[styles.secondaryContainer, { borderTopRightRadius: 0 }]}>
      <Text style={[styles.message, { fontWeight: "500" }]}>I am fine, How about you?</Text>
    </View>
  )
}

export default SecondaryFollowingMessage
