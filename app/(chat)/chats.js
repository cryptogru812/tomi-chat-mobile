import { StyleSheet, ScrollView, View } from "react-native"
import { DrawerToggleButton } from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";

import ChatCard from "../../components/Chats/ChatCard";

const ChatsScreen = () => {
  const router = useRouter()

  return (
    <ScrollView style={styles.screen}>
      <Drawer.Screen
        options={{
          title: "MESSAGES",
          headerShown: true,
          headerLeft: () => <DrawerToggleButton />,
        }}
      />

      <View style={styles.container}>
        {
          Array(10).fill(0).map((_, index) => (
            <ChatCard
              key={index}
              onPress={() => router.push(`chats/${index}`)}
            />
          ))
        }
      </View>
    </ScrollView>
  )
}

export default ChatsScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "black",
  },

  container: {
    display: "flex",
    gap: 16,
    paddingHorizontal: 16,
    marginTop: 16,
  }
})
