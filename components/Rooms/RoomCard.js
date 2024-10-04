import { Image, SafeAreaView, Text, TouchableOpacity, useColorScheme, View } from "react-native"
import { useSelector } from "react-redux"

import { getStyles } from "../Chats/style"

const Avatar = require("../../assets/images/avatar.png")

const RoomCard = ({ onPress }) => {
  const colorScheme = useColorScheme()
  const theme = useSelector((state) => state.theme.theme)

  const activeTheme = theme === "automatic" ? colorScheme : theme
  const styles = getStyles(activeTheme)

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
