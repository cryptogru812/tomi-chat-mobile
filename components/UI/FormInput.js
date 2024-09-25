import { StyleSheet, Text, TextInput, View } from "react-native"

const FormInput = ({ label, placeholder, type }) => {
  return (
    <View style={{ display: "flex", gap: 8, width: "100%" }}>
      <Text style={styles.label}>{label}</Text>
      <TextInput placeholder={placeholder} placeholderTextColor={"#BCBEC0"} style={styles.input} secureTextEntry={type === "password"} />
    </View>
  )
}

export default FormInput

const styles = StyleSheet.create({
  label: {
    color: "white",
    fontWeight: "700",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "#BCBEC0",
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 14,
    fontWeight: "700",
  },
})
