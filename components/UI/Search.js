import { Image, TextInput, useColorScheme, View } from "react-native"
import { useSelector } from "react-redux"

import { getStyles } from "./style"

const SearchIcon = require("../../assets/icons/search.png")

const Search = () => {
  const colorScheme = useColorScheme()
  const theme = useSelector((state) => state.theme.theme)

  const activeTheme = theme === "automatic" ? colorScheme : theme
  const styles = getStyles(activeTheme)

  return (
    <View style={styles.container}>
      <Image source={SearchIcon} style={styles.icon} />
      <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor="#7F7F7F" />
    </View>
  )
}

export default Search
