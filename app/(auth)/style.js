import { StyleSheet } from "react-native";

import { getColor } from "../../constants/Color";
import Device from "../../constants/Device";

export const getStyles = theme => {
  const Color = getColor(theme)

  return StyleSheet.create({
    screen: {
      flexGrow: 1,
      backgroundColor: Color.dark,
    },

    background: {
      position: "relative",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 0.05 * Device.width,
      paddingVertical: 16,
    },

    logo: {
      position: "absolute",
      top: 24,
      height: 40,
    },

    theme: {
      position: "absolute",
      top: 24,
      right: 24,
    },

    modal: {
      position: "absolute",
      display: "flex",
      backgroundColor: Color.secondary,
      width: "100%",
      gap: 24,
      margin: "auto",
      paddingHorizontal: 10,
      paddingVertical: 16,
      borderWidth: 2,
      borderRadius: 28,
      borderColor: "#FF00831A",
      alignItems: "center",
    },

    title: {
      color: Color.white,
      fontSize: 24,
      fontWeight: "700",
      textAlign: "center",
    },

    avatarButton: {
      textAlign: "center",
      color: Color.white,
      height: 90,
      width: 90,
      fontSize: 48,
      lineHeight: 80,
      borderColor: Color.white,
      borderRadius: 8,
      borderStyle: "dashed",
      borderWidth: 2,
    },
  
    checkboxContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      paddingVertical: 12,
      width: "100%",
    },
  
    checkbox: {
      width: 16,
      height: 16,
      backgroundColor: Color.checkbox,
      borderWidth: 2,
      borderColor: Color.checkbox,
      borderRadius: 2,
    },

    paragraph: {
      color: Color.white,
      fontWeight: "400",
      lineHeight: 16,
      marginTop: 4,
    }
  });
}
