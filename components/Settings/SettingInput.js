import { StyleSheet, Text, TextInput, View } from "react-native"

const SettingInput = ({ label, placeholder, type }) => {
  return (
    <View style={{ display: "flex", gap: 8, width: "100%" }}>
      <Text style={styles.label}>{label}</Text>
      <TextInput placeholder={placeholder} placeholderTextColor={"#BCBEC0"} style={styles.input} secureTextEntry={type === "password"} />
    </View>
  )
}

export default SettingInput

const styles = StyleSheet.create({
  label: {
    color: "white",
    fontWeight: "600",
    fontSize: 12,
  },
  input: {
    color: "white",
    backgroundColor: "#282828",
    borderRadius: 12,
    borderColor: "white",
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 14,
    fontWeight: "700",
  },
})
