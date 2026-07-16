import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import EyeOpen from "../../assets/icons/eye.svg";
import EyeClose from "../../assets/icons/eye-close.svg";

export const CustomInput = ({
  showLeftIcon = false,
  leftIcon = <></>,
  isPassword = false,
  placeholder = "",
  ref = null,
  value = "",
  style,
  onChangeText = null,
  isEditable=false,
  width='100%'
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.inputV,style,{width}]}>
      {showLeftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}

      <TextInput
        style={styles.input}
        ref={ref}
        placeholder={placeholder}
        editable={isEditable}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isPassword && !showPassword}
        placeholderTextColor="#7A7A7A"
      />

      {isPassword && (
        <TouchableOpacity
          style={styles.rightIcon}
          onPress={() => setShowPassword(prev => !prev)}
          activeOpacity={0.7}
        >
          {showPassword ? <EyeOpen width={22} height={22} /> : <EyeClose width={22} height={22} />}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputV: {
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#A8A8A9",
    backgroundColor: "#F3F3F3",
  },

  leftIcon: {
    width: 28,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  input: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    color: "#000",
    paddingVertical: 0,
    paddingHorizontal: 0,
  },

  rightIcon: {
    width: 28,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
  },
});