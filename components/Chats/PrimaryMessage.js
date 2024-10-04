import { Text, useColorScheme, View } from "react-native"
import { useSelector } from "react-redux"

import { getStyles } from "./style"

const PrimaryMessage = ({ style }) => {
  const colorScheme = useColorScheme()
  const theme = useSelector((state) => state.theme.theme)

  const activeTheme = theme === "automatic" ? colorScheme : theme

  const styles = getStyles(activeTheme)

  return (
    <View style={[style, styles.primaryContainer, { borderBottomLeftRadius: 0 }]}>
      <Text style={styles.message}>I was asking for your New Year Plans, ask we are going to host a party.</Text>
    </View>
  )
}

export default PrimaryMessage
