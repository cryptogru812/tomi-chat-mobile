import { Text, useColorScheme, View } from "react-native"
import { useSelector } from "react-redux"

import { getStyles } from "./style"

const DateDisplay = () => {
  const colorScheme = useColorScheme()
  const theme = useSelector((state) => state.theme.theme)

  const activeTheme = theme === "automatic" ? colorScheme : theme
  const styles = getStyles(activeTheme)

  return (
    <View style={styles.dateContainer}>
      <Text style={styles.date}>10/09/2024 10:00 PM</Text>
    </View>
  )
}

export default DateDisplay
