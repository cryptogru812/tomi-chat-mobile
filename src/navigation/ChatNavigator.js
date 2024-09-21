import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CreateProfileScreen from "../screens/Auth/CreateProfileScreen";

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Create">
      <Stack.Screen name="Login" component={CreateProfileScreen} />
      <Stack.Screen name="Create" component={CreateProfileScreen} />
    </Stack.Navigator>
  )
};
