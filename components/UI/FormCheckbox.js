import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Color from '../../constants/Color';
import { useState } from 'react';

const FormCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false)
  
  return (
    <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
      <View style={[styles.checkbox, isChecked && styles.checked]}>
        {isChecked && <View style={styles.checkMark} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    backgroundColor: "#D5DAE1",
    borderWidth: 1,
    borderColor: "#D5DAE1",
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: Color.primary,
    borderColor: Color.primary,
  },
  checkMark: {
    width: 10,
    height: 10,
    backgroundColor: 'white',
    borderRadius: 3,
  },
});

export default FormCheckbox;
