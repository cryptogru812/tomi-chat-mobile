import { ScrollView, StyleSheet, Text, View } from "react-native"
import { Drawer } from "expo-router/drawer"

import SettingInput from "../../components/Settings/SettingInput"
import CustomButton from "../../components/UI/CustomButton"
import Color from "../../constants/Color"

const SettingsScreen = () => {
  return (
    <ScrollView style={styles.screen}>
      <Drawer.Screen
        options={{
          title: "SETTINGS",
          headerShown: false,
        }}
      />

      <View style={styles.form}>
        <Text style={styles.header}>Settings</Text>

        <SettingInput label={"FIRST NAME"} placeholder={"FIRST NAME"} />
        <SettingInput label={"LAST NAME"} placeholder={"LAST NAME"} />
        <SettingInput label={"USERNAME*"} placeholder={"USERNAME"} />
        <SettingInput label={"WALLET ADDRESS"} placeholder={"WALLET ADDRESS"} />
        <SettingInput label={"LOCATION"} placeholder={"LOCATION"} />

        <CustomButton title={"SAVE CHANGES"} style={styles.button} />
      </View>

      <View style={styles.hr} />

      <View style={styles.form}>
        <Text style={styles.header}>Change Password</Text>

        <SettingInput label={"CURRENT PASSWORD"} placeholder={"CURRENT PASSWORD"} type={"password"} />
        <SettingInput label={"NEW PASSWORD"} placeholder={"NEW PASSWORD"} type={"password"} />
        <SettingInput label={"CONFIRM PASSWORD"} placeholder={"CONFIRM PASSWORD"} type={"password"} />

        <CustomButton title={"SAVE CHANGES"} style={styles.button} />

        <Text style={styles.footer}>You will be asked to log in again with your new password after you save your changes.</Text>
      </View>
    </ScrollView>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 24,
  },

  form: {
    flex: 1,
    paddingVertical: 24,
    gap: 24,
    alignItems: "center",
  },

  header: {
    fontSize: 24,
    color: "white",
  },

  button: {
    color: "white",
    backgroundColor: Color.primary,
    paddingHorizontal: 32,
    paddingVertical: 12,
    fontSize: 16,
    fontWeight: "600",
    borderRadius: 24,
  },

  hr: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginVertical: 16,
  },

  footer: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
})
