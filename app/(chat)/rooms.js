import { StyleSheet, ScrollView, View, Text } from "react-native"
import { DrawerToggleButton } from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";

import Color from "../../constants/Color";
import RoomCard from "../../components/Rooms/RoomCard";

const RoomsScreen = () => {
  const router = useRouter()

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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "black",
  },

  header: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 8,
    paddingHorizontal: 8,
    alignItems: "center",
    gap: 8,
  },

  title: {
    fontSize: 24,
    color: Color.primary,
  },

  container: {
    display: "flex",
    gap: 16,
    paddingHorizontal: 16,
    marginTop: 16,
  }
})
