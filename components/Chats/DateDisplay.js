import { StyleSheet, Text, View } from "react-native"
import Color from "../../constants/Color"

const DateDisplay = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>10/09/2024 10:00 PM</Text>
    </View>
  )
}

export default DateDisplay

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.dark,
    borderRadius: 48,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 48,
    alignSelf: "center",
  },

  date: {
    color: "#58677A",
    fontSize: 18,
  }
})