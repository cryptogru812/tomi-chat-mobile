import {
  Text,
  View,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import { useSelector } from 'react-redux';
import { getStyles } from './style';

const CustomButton = ({ onPress, title, style }) => {
  const textStyle = style ? style : styles.textStyle;
  const colorScheme = useColorScheme()
  const theme = useSelector((state) => state.theme.theme)

  const activeTheme = theme === "automatic" ? colorScheme : theme
  const styles = getStyles(activeTheme)

  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={textStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
