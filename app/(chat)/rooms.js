import { ScrollView, View, Text, useColorScheme } from "react-native"
import { DrawerToggleButton } from "@react-navigation/drawer";
import { useSelector } from "react-redux";
import { useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";

import RoomCard from "../../components/Rooms/RoomCard";
import { darkColor, lightColor } from "../../constants/Color";
import { getStyles } from "./style";

const RoomsScreen = () => {
  const router = useRouter()
  const colorScheme = useColorScheme()
  const theme = useSelector((state) => state.theme.theme)

  const activeTheme = theme === "automatic" ? colorScheme : theme

  const Color = activeTheme === "dark" ? darkColor : lightColor
  const styles = getStyles(activeTheme)

  return (
    <ScrollView style={styles.screen}>
      <Drawer.Screen
        options={{
          title: "ROOMS",
          headerShown: false,
        }}
      />

      <View style={styles.header}>
        <DrawerToggleButton tintColor={Color.primary} />
        <Text style={styles.title}>{"R O O M S"}</Text>
      </View>

      <View style={styles.container}>
        {
          Array(10).fill(0).map((_, index) => (
            <RoomCard
              key={index}
              onPress={() => router.push(`rooms/${index}`)}
            />
          ))
        }
      </View>
    </ScrollView>
  )
}

export default RoomsScreen
