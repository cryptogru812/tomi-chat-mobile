import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Color from "../../constants/Color"

const FormButton = ({ label, text }) => {
  return (
    <View style={{ display: "flex", gap: 8, width: "100%" }}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FormButton

const styles = StyleSheet.create({
  label: {
    color: "white",
    fontWeight: "700",
  },
  button: {
    backgroundColor: Color.primary,
    borderRadius: 8,
    paddingVertical: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  }
})
