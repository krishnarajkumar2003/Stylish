import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useLoader } from "../../context/LoaderContext";
import { PaymentDone } from "../../components/PaymentDone"

const paymentMethods = [
  {
    id: 1,
    name: "VISA",
    card: "********2109",
  },
  {
    id: 2,
    name: "PayPal",
    card: "********2109",
  },
  {
    id: 3,
    name: "MasterCard",
    card: "********2109",
  },
  {
    id: 4,
    name: "Apple Pay",
    card: "********2109",
  },
];

export const CheckOutScreen = ({ navigation, route }) => {
  const { item } = route.params;

  const [selected, setSelected] = useState(1);

  const { setLoading } = useLoader();

  const shipping = 30;
  const orderAmount = item.price * item.quantity;
  const total = orderAmount + shipping;
  const [visible, setVisible] = useState(false);

  const onContinue = () => {

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setVisible(true)
    }, 3000);

    setTimeout(() => {
      setVisible(false)
      navigation.reset({
        index: 0,
        routes: [{
          name: 'Dashboard'
        }]
      })
    }, 6000)

  }

  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* <Ionicons name="chevron-back" size={28} color="#000" /> */}
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Checkout</Text>

        <View style={{ width: 28 }} />
      </View>

      {/* Price Details */}

      <View style={styles.priceSection}>
        <View style={styles.priceRow}>
          <Text style={styles.label}>Order</Text>
          <Text style={styles.value}>₹ {orderAmount}</Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.label}>Shipping</Text>
          <Text style={styles.value}>₹ {shipping}</Text>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>₹ {total}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      {/* Payment */}

      <Text style={styles.paymentTitle}>Payment</Text>

      {paymentMethods.map(payment => (
        <TouchableOpacity
          key={payment.id}
          activeOpacity={0.8}
          onPress={() => setSelected(payment.id)}
          style={[
            styles.paymentCard,
            selected === payment.id && styles.selectedCard,
          ]}
        >
          <Text style={styles.paymentName}>{payment.name}</Text>

          <Text style={styles.cardNumber}>{payment.card}</Text>
        </TouchableOpacity>
      ))}

      {/* Button */}

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={onContinue}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <PaymentDone
        isVisible={visible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  header: {
    height: 90,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000",
  },

  priceSection: {
    paddingHorizontal: 32,
    marginTop: 28,
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  label: {
    fontSize: 18,
    color: "#A4A4A4",
  },

  value: {
    fontSize: 18,
    color: "#A4A4A4",
  },

  totalLabel: {
    fontSize: 20,
    fontWeight: "600",
    color: "#222",
  },

  totalValue: {
    fontSize: 20,
    fontWeight: "600",
    color: "#222",
  },

  divider: {
    height: 1,
    backgroundColor: "#D9D9D9",
    marginHorizontal: 32,
    marginVertical: 26,
  },

  paymentTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#222",
    marginHorizontal: 32,
    marginBottom: 20,
  },

  paymentCard: {
    marginHorizontal: 24,
    height: 58,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "transparent",
  },

  selectedCard: {
    borderColor: "#F83758",
  },

  paymentName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },

  cardNumber: {
    fontSize: 16,
    color: "#808080",
  },

  button: {
    position: "absolute",
    left: 24,
    right: 24,
    bottom: 30,
    height: 58,
    borderRadius: 10,
    backgroundColor: "#F83758",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "700",
  },
});