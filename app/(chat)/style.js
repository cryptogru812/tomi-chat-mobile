import { StyleSheet } from "react-native";

import { getColor } from "../../constants/Color";

export const getStyles = theme => {
  const Color = getColor(theme)

  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: Color.black,
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
    },
  
    form: {
      flex: 1,
      paddingVertical: 24,
      gap: 24,
      alignItems: "center",
    },
  
    settingHeader: {
      fontSize: 24,
      color: Color.white,
    },
  
    button: {
      color: "white",
      backgroundColor: Color.primary,
      paddingHorizontal: 32,
      paddingVertical: 12,
      fontSize: 16,
      fontWeight: "600",
      borderRadius: 24,
    },
  
    hr: {
      borderBottomColor: Color.inputBorder,
      borderBottomWidth: 1,
      marginVertical: 16,
    },
  
    footer: {
      color: Color.white,
      fontSize: 14,
      textAlign: "center",
    },

    chatScreen: {
      flex: 1,
      alignItems: "center",
      backgroundColor: Color.black,
      paddingHorizontal: 20,
    },
  
    search: {
      width: "100%",
      paddingVertical: 10,
    },
  
    content: {
      flex: 1,
      width: "100%",
    },
  
    chatHeader: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: Color.dark,
      width: "100%",
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderColor: Color.border,
      borderWidth: 1,
      borderBottomLeftRadius: 24,
      gap: 16,
      alignItems: "center",
    },
  
    avatar: {
      borderRadius: 9999999,
      width: 70,
      height: 70,
    },
  
    avatar1: {
      borderRadius: 9999999,
      width: 60,
      height: 60,
    },
  
    name: {
      fontSize: 18,
      fontWeight: "500",
      color: Color.name2,
    },
  
    date: {
      fontSize: 16,
      color: Color.date1,
      fontWeight: "500",
    },
  
    message: {
      paddingVertical: 10,
    }
  });
}
