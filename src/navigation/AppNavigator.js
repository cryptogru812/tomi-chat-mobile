import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { AuthNavigator } from "./ChatNavigator";

const AppNavigator = () => {
  const { isConnected_ } = useSelector((state) => state.auth);

  return (
    <NavigationContainer>
      {isConnected_ && <></>}
      {!isConnected_ && <AuthNavigator />}
    </NavigationContainer>
  );
}

export default AppNavigator;