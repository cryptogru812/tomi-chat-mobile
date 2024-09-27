import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import Color from "../../constants/Color"

const Avatar = require("../../assets/images/avatar.png")

const ChatCard = ({ onPress }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={Avatar} style={styles.avatar} />

        <View style={{ flex: 1, gap: 8 }}>
          <View>
            <Text style={styles.name}>Christopher Campbell</Text>
            <Text style={styles.address}>0xc457...2243</Text>
          </View>

          <Text style={styles.content}>In front of the Bar, about which...</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ChatCard

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: Color.dark,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 28,
    borderRadius: 24,
    gap: 24,
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

  address: {
    fontSize: 16,
    color: "white",
  },

  content: {
    fontSize: 16,
    color: "white",
  }
})
