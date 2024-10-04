import { ScrollView, Text, useColorScheme, View } from "react-native"
import { useSelector } from "react-redux"
import { Drawer } from "expo-router/drawer"

import SettingInput from "../../components/Settings/SettingInput"
import CustomButton from "../../components/UI/CustomButton"
import { getStyles } from "./style"

const SettingsScreen = () => {
  const colorScheme = useColorScheme()
  const theme = useSelector((state) => state.theme.theme)

  const activeTheme = theme === "automatic" ? colorScheme : theme
  const styles = getStyles(activeTheme)

  return (
    <ScrollView style={[styles.screen, { paddingHorizontal: 24 }]}>
      <Drawer.Screen
        options={{
          title: "SETTINGS",
          headerShown: false,
        }}
      />

      <View style={styles.form}>
        <Text style={styles.settingHeader}>Settings</Text>

        <SettingInput label={"FIRST NAME"} placeholder={"FIRST NAME"} />
        <SettingInput label={"LAST NAME"} placeholder={"LAST NAME"} />
        <SettingInput label={"USERNAME*"} placeholder={"USERNAME"} />
        <SettingInput label={"WALLET ADDRESS"} placeholder={"WALLET ADDRESS"} />
        <SettingInput label={"LOCATION"} placeholder={"LOCATION"} />

        <CustomButton title={"SAVE CHANGES"} style={styles.button} />
      </View>

      <View style={styles.hr} />

      <View style={styles.form}>
        <Text style={styles.settingHeader}>Change Password</Text>

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
