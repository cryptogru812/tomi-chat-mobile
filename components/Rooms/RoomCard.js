import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import Color from "../../constants/Color"

const Avatar = require("../../assets/images/avatar.png")

const RoomCard = ({ onPress }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={Avatar} style={styles.avatar} />

        <View style={{ flex: 1, gap: 8 }}>
          <Text style={styles.name}>Blockchain community</Text>

          <Text style={styles.content}>1000+ People</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default RoomCard

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: Color.dark,
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderRadius: 24,
    gap: 16,
    alignItems: "center",
  },

  avatar: {
    borderRadius: 9999999,
  },

  name: {
    fontSize: 24,
    fontWeight: "semibold",
    color: "#C9C9C9",
  },

  content: {
    fontSize: 16,
    color: "white",
  }
})
