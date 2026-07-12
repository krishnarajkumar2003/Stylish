import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export const PaymentDone = ({ isVisible, onClose }) => {
  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="fade"
      statusBarTranslucent
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.container}>
              <View style={styles.icon}>
                <Text style={styles.tick}>✓</Text>
              </View>

              <Text style={styles.text}>
                Payment done successfully.
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  container: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 40,
    alignItems: "center",
  },

  icon: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#F83758",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },

  tick: {
    color: "#FFFFFF",
    fontSize: 48,
    fontWeight: "bold",
  },

  text: {
    fontSize: 24,
    fontWeight: "600",
    color: "#222",
    textAlign: "center",
  },
});