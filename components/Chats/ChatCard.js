import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native"
import { useSelector } from "react-redux"

import { getStyles } from "./style"

const Avatar = require("../../assets/images/avatar.png")

const ChatCard = ({ onPress }) => {
  const colorScheme = useColorScheme()
  const theme = useSelector((state) => state.theme.theme)

  const activeTheme = theme === "automatic" ? colorScheme : theme
  const styles = getStyles(activeTheme)

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
