import { useState } from 'react';
import { View, TouchableOpacity, useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';

import { getStyles } from './style';

const FormCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false)
  const colorScheme = useColorScheme()
  const theme = useSelector((state) => state.theme.theme)

  const activeTheme = theme === "automatic" ? colorScheme : theme
  const styles = getStyles(activeTheme)
  
  return (
    <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
      <View style={[styles.checkbox, isChecked && styles.checked]}>
        {isChecked && <View style={styles.checkMark} />}
      </View>
    </TouchableOpacity>
  );
};

export default FormCheckbox;
