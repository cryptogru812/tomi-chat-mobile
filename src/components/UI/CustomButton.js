import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Color from "../../constants/Color"

const CustomButton = ({ onPress, title, style }) => {
  const textStyle = style ? style : styles.textStyle;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={textStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonContainer: {
    justifyContent: 'center',
    overflow: 'hidden',
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  textStyle: {
    textAlign: 'center',
    color: Color.white,
    fontSize: 18,
  },
});
