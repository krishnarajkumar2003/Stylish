import React, { createContext, useContext, useState } from "react";
import {
  ActivityIndicator,
  Modal,
  StyleSheet,
  View,
} from "react-native";

const LoaderContext = createContext(null);

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}

      <Modal
        visible={loading}
        transparent
        animationType="fade"
        statusBarTranslucent
      >
        <View style={styles.overlay}>
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#F83758" />
          </View>
        </View>
      </Modal>
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  const context = useContext(LoaderContext);

  if (!context) {
    throw new Error("useLoader must be used within LoaderProvider");
  }

  return context;
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    width: 100,
    height: 100,
    borderRadius: 16,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});