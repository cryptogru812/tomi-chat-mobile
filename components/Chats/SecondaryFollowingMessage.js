import { StyleSheet, Text, View } from "react-native"
import Color from "../../constants/Color"

const SecondaryFollowingMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>I am fine, How about you?</Text>
    </View>
  )
}

export default SecondaryFollowingMessage

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.dark,
    borderColor: Color.primary,
    borderWidth: 1,
    borderRadius: 40,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignSelf: "flex-end",
  },

  message: {
    color: "white",
    fontSize: 18,
  }
})