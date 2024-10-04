export const darkColor = {
  primary: "#FF0083",
  secondary: "#FF008326",
  white: "#FFFFFF",
  black: "#000000",
  dark: "#111111",
  checkbox: "#D5DAE1",
  border: "#111111",
  name1: "#C9C9C9",
  name2: "#FDFDFD",
  date1: "#58677A",
  date2: "#58677A",
  dateBackground: "#111111",
  inputBackground: "#282828",
  inputBorder: "#FFFFFF",
  search: "#353739",
  searchBorder: "#353739",
  messageBorder: "#FF0083",
  messagePlaceholder: "#A6ADB5",
  primaryMessage: "#FF0083",
  placeholder: "#BCBEC0",
}

export const lightColor = {
  primary: "#FF0083",
  secondary: "#FF008326",
  white: "#111111",
  black: "#FFFFFF",
  dark: "#FFFFFF",
  checkbox: "#FFFFFF",
  border: "#FF0083",
  name1: "#111111",
  name2: "#FF0083",
  date1: "#FF0083",
  date2: "#FFFFFF",
  dateBackground: "#FF0083BD",
  inputBackground: "#FFFFFF",
  inputBorder: "#FF0083",
  search: "#FFFFFF",
  searchBorder: "#FF0083",
  messageBorder: "#1111117F",
  messagePlaceholder: "#FF0083",
  primaryMessage: "#FF008333",
  placeholder: "#BCBEC0",
}

export const getColor = (theme) => {
  return theme === "dark" ? darkColor : lightColor
}