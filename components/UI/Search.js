import { Image, StyleSheet, TextInput, View } from "react-native"

const SearchIcon = require("../../assets/icons/search.png")

const Search = () => {
  return (
    <View style={styles.container}>
      <Image source={SearchIcon} style={styles.icon} />
      <TextInput style={styles.input} placeholder="Search" placeholderTextColor="#7F7F7F" />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "relative",
    justifyContent: "center",
    alignItems: "center", 
    width: "100%",
  },

  icon: {
    position: "absolute",
    top: 12,
    left: 8,
    zIndex: 10,
  },

  input: {
    width: "100%",
    height: 48,
    backgroundColor: "#353739",
    color: "white",
    borderRadius: 8,
    fontSize: 16,
    paddingHorizontal: 16,
    paddingLeft: 36,
  }
})