import { StyleSheet } from "react-native";

import { getColor } from "../../constants/Color";

export const getStyles = theme => {
  const Color = getColor(theme)

  return StyleSheet.create({
    container: {
      flexDirection: "row",
      position: "relative",
      justifyContent: "center",
      alignItems: "center", 
      width: "100%",
    },
  
    icon: {
      position: "absolute",
      top: 12,
      left: 8,
      zIndex: 10,
    },
  
    searchInput: {
      width: "100%",
      height: 48,
      backgroundColor: Color.search,
      color: Color.white,
      borderColor: Color.searchBorder,
      borderWidth: 1,
      borderRadius: 8,
      fontSize: 16,
      paddingHorizontal: 16,
      paddingLeft: 36,
    },
    
    input: {
      color: Color.white,
      backgroundColor: Color.inputBackground,
      borderRadius: 12,
      borderColor: Color.inputBorder,
      borderWidth: 1,
      paddingVertical: 8,
      paddingHorizontal: 16,
      fontSize: 14,
      fontWeight: "700",
    },

    label: {
      color: Color.white,
      fontWeight: "700",
    },

    formInput: {
      backgroundColor: "white",
      borderRadius: 5,
      borderColor: Color.placeholder,
      borderWidth: 1,
      paddingVertical: 8,
      paddingHorizontal: 16,
      fontSize: 14,
      fontWeight: "700",
    },

    checkbox: {
      width: 20,
      height: 20,
      backgroundColor: "#D5DAE1",
      borderWidth: 1,
      borderColor: "#D5DAE1",
      borderRadius: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },

    checked: {
      backgroundColor: Color.primary,
      borderColor: Color.primary,
    },

    checkMark: {
      width: 10,
      height: 10,
      backgroundColor: 'white',
      borderRadius: 3,
    },

    button: {
      backgroundColor: Color.primary,
      borderRadius: 8,
      paddingVertical: 10,
    },

    text: {
      color: "white",
      fontSize: 16,
      fontWeight: "700",
      textAlign: "center",
    },

    buttonWrapper: {
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },

    buttonContainer: {
      justifyContent: 'center',
      overflow: 'hidden',
      paddingHorizontal: 30,
      borderRadius: 8,
    },

    textStyle: {
      textAlign: 'center',
      color: Color.white,
      fontSize: 18,
    },
  });
}
