import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/Auth/LoginScreen";
import CreateProfileScreen from "../screens/Auth/CreateProfileScreen";

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Create">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Create" component={CreateProfileScreen} />
      <Stack.Screen name="Chats" component={CreateProfileScreen} />
      <Stack.Screen name="Rooms" component={CreateProfileScreen} />
      <Stack.Screen name="Contacts" component={CreateProfileScreen} />
      <Stack.Screen name="Settings" component={CreateProfileScreen} />
    </Stack.Navigator>
  )
};
