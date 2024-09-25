import { Button, View } from "react-native"
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";

const RoomsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Drawer.Screen
        options={{
          title: "ROOMS",
          headerShown: true,
          headerLeft: () => <DrawerToggleButton />,
        }}
      />
      <Button
        // onPress={}
        title="Go to Chats"
      />
    </View>
  )
}

export default RoomsScreen
