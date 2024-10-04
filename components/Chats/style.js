import { StyleSheet } from "react-native";

import { getColor } from "../../constants/Color";

export const getStyles = theme => {
  const Color = getColor(theme)

  return StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: Color.dark,
      width: "100%",
      paddingHorizontal: 16,
      paddingVertical: 24,
      borderColor: Color.border,
      borderWidth: 1,
      borderRadius: 24,
      gap: 16,
      alignItems: "center",
    },
  
    avatar: {
      borderRadius: 9999999,
    },
  
    name: {
      fontSize: 24,
      fontWeight: "600",
      color: Color.name1,
    },
  
    address: {
      fontSize: 16,
      color: Color.white,
      fontWeight: "500",
    },
  
    content: {
      fontSize: 16,
      color: Color.white,
      fontWeight: "500",
    },

    messageContainer: {
      flexDirection: "row",
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  
    attachmentIcon: {
      position: "absolute",
      top: 24,
      left: 16,
      zIndex: 10,
    },
  
    micIcon: {
      position: "absolute",
      top: 28,
      right: 56,
      zIndex: 10,
    },
  
    planeIcon: {
      position: "absolute",
      top: 28,
      right: 16,
      zIndex: 10,
    },
  
    input: {
      width: "100%",
      height: 88,
      backgroundColor: Color.dark,
      color: Color.white,
      borderColor: Color.border,
      borderWidth: 1,
      borderRadius: 0,
      borderTopRightRadius: 24,
      fontSize: 18,
      paddingHorizontal: 60,
      paddingRight: 92,
    },

    dateContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: Color.dateBackground,
      borderRadius: 48,
      marginVertical: 8,
      paddingVertical: 8,
      paddingHorizontal: 40,
      alignSelf: "center",
    },
  
    date: {
      color: Color.date2,
      fontSize: 18,
    },

    primaryContainer: {
      backgroundColor: Color.primaryMessage,
      borderRadius: 40,
      borderTopLeftRadius: 0,
      paddingHorizontal: 24,
      paddingVertical: 12,
      alignSelf: "flex-start",
    },

    secondaryContainer: {
      backgroundColor: Color.dark,
      borderColor: Color.messageBorder,
      borderWidth: 1,
      borderRadius: 40,
      borderBottomRightRadius: 0,
      paddingHorizontal: 24,
      paddingVertical: 12,
      alignSelf: "flex-end",
    },
  
    message: {
      color: Color.white,
      fontSize: 18,
    }
  });
}
