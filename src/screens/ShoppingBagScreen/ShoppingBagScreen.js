import { StyleSheet, Text, View } from "react-native";
import { CustomButton } from "../../components/CustomButton";

export const ShoppingBagScreen = ({ navigation, route }) => {
    const { item } = route.params;
    const Image = item.image_url;

    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 3);

    const formattedDate = deliveryDate.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });

    const total = item.price * item.quantity;

    const goToCheckOut = () => {
        navigation.navigate("CheckOut", {item})
    }

    return (
        <View style={styles.screen}>
            {/* Product Card */}
            <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image width="90%" height="90%" />
                </View>

                <View style={styles.details}>
                    <Text numberOfLines={1} style={styles.title}>
                        {item.title}
                    </Text>

                    <Text numberOfLines={2} style={styles.description}>
                        {item.description}
                    </Text>

                    <Text style={styles.infoText}>
                        Size: <Text style={styles.infoValue}>{item.selectedSize}</Text>
                    </Text>

                    <Text style={styles.infoText}>
                        Qty: <Text style={styles.infoValue}>{item.quantity}</Text>
                    </Text>

                    <Text style={styles.delivery}>
                        Delivery by{" "}
                        <Text style={styles.deliveryDate}>{formattedDate}</Text>
                    </Text>
                </View>
            </View>

            {/* Payment Details */}
            <View style={styles.paymentContainer}>
                <Text style={styles.paymentTitle}>Order Payment Details</Text>

                <View style={styles.row}>
                    <Text style={styles.rowTitle}>Order Amount</Text>
                    <Text style={styles.rowValue}>₹ {item.price}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.rowTitle}>Quantity</Text>
                    <Text style={styles.rowValue}>{item.quantity}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.rowTitle}>Delivery Fee</Text>
                    <Text style={styles.free}>₹ 30</Text>
                </View>

                <View style={styles.divider} />

                <View style={styles.row}>
                    <Text style={styles.totalTitle}>Total Amount</Text>
                    <Text style={styles.totalValue}>₹ {total}</Text>
                </View>
            </View>
            <CustomButton onPress={goToCheckOut} style={{
                marginTop: 50,
                borderRadius: 10
            }}>
                <Text style={{
                    fontSize: 20,
                    color: '#ffffff',
                    fontWeight: 'bold'
                }}>Proceed payment</Text>
            </CustomButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        padding: 16,
    },

    card: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        borderRadius: 14,
        padding: 14,
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 6,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },

    imageContainer: {
        width: 120,
        height: 120,
        borderRadius: 12,
        backgroundColor: "#F4F4F4",
        justifyContent: "center",
        alignItems: "center",
    },

    details: {
        flex: 1,
        marginLeft: 16,
        justifyContent: "space-between",
    },

    title: {
        fontSize: 17,
        fontWeight: "700",
        color: "#1F2937",
    },

    description: {
        fontSize: 13,
        color: "#6B7280",
        lineHeight: 18,
        marginTop: 4,
    },

    infoText: {
        fontSize: 13,
        color: "#6B7280",
        marginTop: 6,
    },

    infoValue: {
        color: "#111827",
        fontWeight: "600",
    },

    delivery: {
        marginTop: 8,
        fontSize: 13,
        color: "#6B7280",
    },

    deliveryDate: {
        color: "#F83758",
        fontWeight: "700",
    },

    paymentContainer: {
        backgroundColor: "#FFFFFF",
        marginTop: 24,
        padding: 18,
        elevation: 2,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 1,
        },
    },

    paymentTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#111827",
        marginBottom: 16,
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 8,
    },

    rowTitle: {
        fontSize: 15,
        color: "#6B7280",
    },

    rowValue: {
        fontSize: 16,
        fontWeight: "600",
        color: "#111827",
    },

    free: {
        fontSize: 16,
        fontWeight: "700",
        color: "#22C55E",
    },

    divider: {
        height: 1,
        backgroundColor: "#E5E7EB",
        marginVertical: 12,
    },

    totalTitle: {
        fontSize: 17,
        fontWeight: "700",
        color: "#111827",
    },

    totalValue: {
        fontSize: 20,
        fontWeight: "700",
        color: "#F83758",
    },
});