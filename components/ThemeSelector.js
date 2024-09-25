import React from "react";
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  Appearance,
  useColorScheme,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../store/themeSlice";

const ThemeSelector = () => {
  const dispatch = useDispatch();
  const colorScheme = useColorScheme();
  const theme = useSelector((state) => state.theme.theme);
  const colorScheme2 = Appearance.getColorScheme();

  const handleThemeChange = (selectedTheme) => {
    dispatch(setTheme(selectedTheme));
  };
  const activeTheme = theme === "automatic" ? colorScheme : theme;
  const themeTextStyle =
    activeTheme === "light" ? styles.lightThemeText : styles.darkThemeText;

  return (
    <View>
      <Text style={themeTextStyle}>Theme: {theme}</Text>
      <Pressable
        onPress={() => handleThemeChange("light")}
        style={styles.pressableMargin}>
        <Text style={themeTextStyle}>Light Mode</Text>
      </Pressable>
      <Pressable
        onPress={() => handleThemeChange("dark")}
        style={styles.pressableMargin}>
        <Text style={themeTextStyle}>Dark Mode</Text>
      </Pressable>
      <Pressable
        onPress={() => handleThemeChange("automatic")}
        style={styles.pressableMargin}>
        <Text style={themeTextStyle}>same as device :  {colorScheme}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pressableMargin: {
    marginTop: 16,
  },
  lightThemeText: {
    color: "#242c40",
  },
  darkThemeText: {
    color: "#d0d0c0",
  },
});

export default ThemeSelector;
