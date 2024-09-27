import { Image, ScrollView, StyleSheet, Text, View } from "react-native"

import Search from "../../../components/UI/Search"
import Color from "../../../constants/Color"
import PrimaryMessage from "../../../components/Chats/PrimaryMessage"
import SecondaryMessage from "../../../components/Chats/SecondaryMessage"
import PrimaryFollowingMessage from "../../../components/Chats/PrimaryFollowingMessage"
import SecondaryFollowingMessage from "../../../components/Chats/SecondaryFollowingMessage"
import DateDisplay from "../../../components/Chats/DateDisplay"
import MessageInput from "../../../components/Chats/MessageInput"

const Avatar = require("../../../assets/images/avatar.png")
const ThreeDot = require("../../../assets/icons/three-dot.png")

const ChatDetail = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.search}>
        <Search />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          <Image source={Avatar} style={styles.avatar} />

          <View style={{ flex: 1, gap: 8 }}>
            <Text style={styles.name}>Christopher Campbell</Text>
            <Text style={styles.date}>Last seen 02:55 pm</Text>
          </View>

          <Image source={ThreeDot} />
        </View>

        <ScrollView contentContainerStyle={{ gap: 12 }} style={styles.message}>
          <PrimaryMessage />
          <PrimaryFollowingMessage />
          <SecondaryMessage />
          <DateDisplay />
          <SecondaryFollowingMessage />
        </ScrollView>

        <MessageInput />
      </View>
    </View>
  )
}

export default ChatDetail

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
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

  header: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: Color.dark,
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomLeftRadius: 24,
    gap: 16,
    alignItems: "center",
  },

  avatar: {
    borderRadius: 9999999,
  },

  name: {
    fontSize: 18,
    fontWeight: "semibold",
    color: "#FDFDFD",
  },

  date: {
    fontSize: 16,
    color: "#58677A",
  },

  message: {
    paddingVertical: 10,
  }
})