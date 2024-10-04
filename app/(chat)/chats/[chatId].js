import {
  Image,
  ScrollView,
  Text,
  useColorScheme,
  View,
} from "react-native"
import { useSelector } from "react-redux"

import Search from "../../../components/UI/Search"
import PrimaryMessage from "../../../components/Chats/PrimaryMessage"
import SecondaryMessage from "../../../components/Chats/SecondaryMessage"
import PrimaryFollowingMessage from "../../../components/Chats/PrimaryFollowingMessage"
import SecondaryFollowingMessage from "../../../components/Chats/SecondaryFollowingMessage"
import DateDisplay from "../../../components/Chats/DateDisplay"
import MessageInput from "../../../components/Chats/MessageInput"
import { getStyles } from "../style"

const Avatar = require("../../../assets/images/avatar.png")
const DarkThreeDot = require("../../../assets/icons/three-dot-dark.png")
const LightThreeDot = require("../../../assets/icons/three-dot-light.png")

const ChatDetail = () => {
  const colorScheme = useColorScheme()
  const theme = useSelector((state) => state.theme.theme)

  const activeTheme = theme === "automatic" ? colorScheme : theme

  const ThreeDot = activeTheme === "dark" ? DarkThreeDot : LightThreeDot
  const styles = getStyles(activeTheme)

  return (
    <View style={styles.chatScreen}>
      <View style={styles.search}>
        <Search />
      </View>

      <View style={styles.content}>
        <View style={styles.chatHeader}>
          <Image source={Avatar} style={styles.avatar} />

          <View style={{ flex: 1, gap: 8 }}>
            <Text style={styles.name}>Christopher Campbell</Text>
            <Text style={styles.date}>Last seen 02:55 pm</Text>
          </View>

          <Image source={ThreeDot} />
        </View>

        <ScrollView contentContainerStyle={{ gap: 12 }} style={styles.message}>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Image source={Avatar} style={styles.avatar1} />
            <PrimaryMessage style={{ width: "80%" }} />
          </View>
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
