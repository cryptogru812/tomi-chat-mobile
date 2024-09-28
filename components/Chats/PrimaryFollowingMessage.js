import { StyleSheet, Text, View } from "react-native"
import Color from "../../constants/Color"

const PrimaryFollowingMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>I was asking for your New Year Plans, ask we are going to host a party.</Text>
    </View>
  )
}

export default PrimaryFollowingMessage

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.primary,
    borderRadius: 40,
    borderTopLeftRadius: 0,
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignSelf: "flex-start",
  },

  message: {
    color: "white",
    fontSize: 18,
  }
})