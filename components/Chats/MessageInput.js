import { Image, StyleSheet, TextInput, View } from "react-native"
import Color from "../../constants/Color"

const AttachmentIcon = require("../../assets/icons/attachment.png")
const MicIcon = require("../../assets/icons/mic.png")
const PlaneIcon = require("../../assets/icons/plane.png")

const MessageInput = () => {
  return (
    <View style={styles.container}>
      <Image source={AttachmentIcon} style={styles.attachmentIcon} />
      <TextInput style={styles.input} placeholder="Type your Message..." placeholderTextColor="#A6ADB5" />
      <Image source={MicIcon} style={styles.micIcon} />
      <Image source={PlaneIcon} style={styles.planeIcon} />
    </View>
  )
}

export default MessageInput

const styles = StyleSheet.create({
  container: {
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
    color: "white",
    borderRadius: 0,
    borderTopRightRadius: 24,
    fontSize: 18,
    paddingHorizontal: 60,
    paddingRight: 92,
  }
})