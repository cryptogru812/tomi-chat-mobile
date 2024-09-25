import { Button, View } from "react-native"
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";

const ChatsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Drawer.Screen
        options={{
          title: "MESSAGES",
          headerShown: true,
          headerLeft: () => <DrawerToggleButton />,
        }}
      />
      <Button
        // onPress={}
        title="Go to Rooms"
      />
    </View>
  )
}

export default ChatsScreen
