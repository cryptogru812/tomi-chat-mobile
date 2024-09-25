import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function ChatLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: false, swipeEdgeWidth: 0 }}>
        <Drawer.Screen
          name="chats"
          options={{
            drawerLabel: 'Chats',
            title: 'MESSAGES',
          }}
        />
        <Drawer.Screen
          name="rooms"
          options={{
            drawerLabel: 'Rooms',
            title: 'ROOMS',
          }}
        />
        {/* <Drawer.Screen
          name="contacts"
          options={{
            drawerLabel: 'Contacts',
            title: 'Contacts',
          }}
        /> */}
      </Drawer>
    </GestureHandlerRootView>
  );
}
