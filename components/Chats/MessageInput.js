import { Image, TextInput, useColorScheme, View } from "react-native"
import { useSelector } from "react-redux"

import { darkColor, lightColor } from "../../constants/Color"
import { getStyles } from "./style"

const DarkAttachmentIcon = require("../../assets/icons/attachment-dark.png")
const DarkMicIcon = require("../../assets/icons/mic-dark.png")
const DarkPlaneIcon = require("../../assets/icons/plane-dark.png")
const LightAttachmentIcon = require("../../assets/icons/attachment-light.png")
const LightMicIcon = require("../../assets/icons/mic-light.png")
const LightPlaneIcon = require("../../assets/icons/plane-light.png")

const MessageInput = () => {
  const colorScheme = useColorScheme()
  const theme = useSelector((state) => state.theme.theme)

  const activeTheme = theme === "automatic" ? colorScheme : theme

  const Color = activeTheme === "dark" ? darkColor : lightColor
  const styles = getStyles(activeTheme)

  const AttachmentIcon = activeTheme === "dark" ? DarkAttachmentIcon : LightAttachmentIcon
  const MicIcon = activeTheme === "dark" ? DarkMicIcon : LightMicIcon
  const PlaneIcon = activeTheme === "dark" ? DarkPlaneIcon : LightPlaneIcon

  return (
    <View style={styles.messageContainer}>
      <Image source={AttachmentIcon} style={styles.attachmentIcon} />
      <TextInput style={styles.input} placeholder="Type your Message..." placeholderTextColor={Color.messagePlaceholder} />
      <Image source={MicIcon} style={styles.micIcon} />
      <Image source={PlaneIcon} style={styles.planeIcon} />
    </View>
  )
}

export default MessageInput
