import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    Modal,
    TextInput,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import AddIcon from "../../../assets/icons/add.svg";

export const CartScreen = () => {
    // 1. Manage a list of addresses
    const [addresses, setAddresses] = useState([
        {
            id: "1",
            address: "Balaji nagar 2nd cross street, krishna nagar, vandiyur, madurai",
            contact: "+91-9267872591",
        }
    ]);
    const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);

    // 2. Manage Modal visibility & input state
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalMode, setModalMode] = useState("add");
    const [tempAddress, setTempAddress] = useState("");
    const [tempContact, setTempContact] = useState("");
    const [editingIndex, setEditingIndex] = useState(null); // Cleaned: TypeScript type removed

    // Open Modal for adding a NEW address
    const handleOpenAddModal = () => {
        setModalMode("add");
        setTempAddress("");
        setTempContact("");
        setIsModalVisible(true);
    };

    // Open Modal for editing an EXISTING address
    const handleOpenEditModal = (index) => { // Cleaned: TypeScript ": number" type removed
        setModalMode("edit");
        setEditingIndex(index);
        setTempAddress(addresses[index].address);
        setTempContact(addresses[index].contact);
        setIsModalVisible(true);
    };

    // Save action (handles both adding or updating)
    const handleSaveAddress = () => {
        if (!tempAddress.trim() || !tempContact.trim()) {
            alert("Please fill in both fields.");
            return;
        }

        if (modalMode === "add") {
            const newAddressItem = {
                id: Date.now().toString(),
                address: tempAddress,
                contact: tempContact,
            };
            const updatedAddresses = [...addresses, newAddressItem];
            setAddresses(updatedAddresses);
            setSelectedAddressIndex(updatedAddresses.length - 1);
        } else if (modalMode === "edit" && editingIndex !== null) {
            const updatedAddresses = [...addresses];
            updatedAddresses[editingIndex] = {
                ...updatedAddresses[editingIndex],
                address: tempAddress,
                contact: tempContact,
            };
            setAddresses(updatedAddresses);
        }

        setIsModalVisible(false);
    };

    // Mock shopping list items
    const cartItems = [
        {
            id: "1",
            title: "Women's Casual Wear",
            image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400",
            rating: 4.8,
            price: 34.00,
            originalPrice: 64.00,
            discountText: "upto 33% off"
        },
        {
            id: "2",
            title: "Men's Jacket",
            image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
            rating: 4.7,
            price: 45.00,
            originalPrice: 67.00,
            discountText: "upto 28% off"
        }
    ];

    return (
        <View style={styles.safeArea}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} />
                <Text style={styles.headerTitle}>Checkout</Text>
                <View style={{ width: 28 }} />
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.sectionHeaderRow}>
                    <Text style={styles.sectionHeading}>Delivery Address</Text>
                </View>

                {/* Horizontal Address List */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.addressContainer}
                >
                    {addresses.map((item, index) => {
                        const isSelected = index === selectedAddressIndex;
                        return (
                            <TouchableOpacity
                                key={item.id}
                                activeOpacity={0.9}
                                style={[
                                    styles.addressCard,
                                    isSelected && styles.addressCardSelected
                                ]}
                                onPress={() => setSelectedAddressIndex(index)}
                            >
                                <View style={styles.addressCardHeader}>
                                    <Text style={[styles.addressLabel, isSelected && styles.addressTextSelected]}>
                                        {isSelected ? "● Delivery Address" : "Address :"}
                                    </Text>
                                    <TouchableOpacity onPress={() => handleOpenEditModal(index)}>
                                        <Text style={[styles.editText, isSelected && styles.editTextSelected]}>
                                            Edit
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={[styles.addressText, isSelected && styles.addressTextSelected]} numberOfLines={2}>
                                    {item.address}
                                </Text>
                                <Text style={[styles.addressText, isSelected && styles.addressTextSelected]}>
                                    Contact : {item.contact}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}

                    <TouchableOpacity style={styles.addAddressButton} onPress={handleOpenAddModal}>
                        <AddIcon />
                        <Text style={styles.addAddressButtonText}>Add New</Text>
                    </TouchableOpacity>
                </ScrollView>

                {/* Shopping List */}
                <Text style={[styles.sectionHeading, { marginTop: 24, marginBottom: 12 }]}>Shopping List</Text>

                {cartItems.map((item) => (
                    <View key={item.id} style={styles.itemCard}>
                        <View style={styles.itemTopContainer}>
                            <Image source={{ uri: item.image }} style={styles.productImage} />
                            <View style={styles.productDetails}>
                                <Text style={styles.productTitle}>{item.title}</Text>
                                <View style={styles.ratingRow}>
                                    <Text style={styles.ratingText}>{item.rating} </Text>
                                    <Text style={{ color: '#FFB300', fontSize: 15 }}>{"★".repeat(Math.floor(item.rating))}</Text>
                                </View>
                                <View style={styles.priceRow}>
                                    <View style={styles.priceBadge}>
                                        <Text style={styles.priceText}>$ {item.price.toFixed(2)}</Text>
                                    </View>
                                    <View style={styles.discountContainer}>
                                        <Text style={styles.discountText}>{item.discountText}</Text>
                                        <Text style={styles.originalPriceText}>$ {item.originalPrice.toFixed(2)}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.totalOrderRow}>
                            <Text style={styles.totalOrderLabel}>Total Order (1)  :</Text>
                            <Text style={styles.totalOrderPrice}>$ {item.price.toFixed(2)}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>

            {/* --- ADD/EDIT MODAL --- */}
            <Modal
                visible={isModalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setIsModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : undefined}
                        style={{ width: '100%' }}
                    >
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>
                                {modalMode === "add" ? "Add New Address" : "Update Address"}
                            </Text>

                            <Text style={styles.inputLabel}>Street Address</Text>
                            <TextInput
                                style={[styles.input, styles.textArea]}
                                placeholder="Enter delivery address"
                                value={tempAddress}
                                onChangeText={setTempAddress}
                                multiline
                                numberOfLines={3}
                            />

                            <Text style={styles.inputLabel}>Contact Number</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter contact number"
                                value={tempContact}
                                onChangeText={setTempContact}
                                keyboardType="phone-pad"
                            />

                            <View style={styles.modalButtonContainer}>
                                <TouchableOpacity
                                    style={[styles.modalButton, styles.cancelButton]}
                                    onPress={() => setIsModalVisible(false)}
                                >
                                    <Text style={styles.cancelButtonText}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.modalButton, styles.saveButton]}
                                    onPress={handleSaveAddress}
                                >
                                    <Text style={styles.saveButtonText}>Save</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#fcfcfc' },
    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, height: 56, backgroundColor: '#ffffff' },
    backButton: { padding: 4 },
    headerTitle: { fontSize: 25, fontWeight: '600', color: '#000' },
    scrollContainer: { paddingHorizontal: 16, paddingBottom: 24 },
    sectionHeaderRow: { flexDirection: 'row', alignItems: 'center', marginTop: 16, marginBottom: 12 },
    sectionHeading: { fontSize: 19, fontWeight: '600', color: '#000' },
    addressContainer: { paddingVertical: 4, alignItems: 'center' },
    addressCard: { width: 240, backgroundColor: '#fff', borderRadius: 8, padding: 12, marginRight: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2, borderWidth: 1.5, borderColor: 'transparent' },
    addressCardSelected: { backgroundColor: '#F83758', borderColor: '#F83758' },
    addressCardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
    addressLabel: { fontSize: 13, fontWeight: '700', color: '#000' },
    editText: { fontSize: 12, fontWeight: '600', color: '#F83758' },
    editTextSelected: { color: '#fff', textDecorationLine: 'underline' },
    addressText: { fontSize: 12, color: '#444', lineHeight: 16, marginTop: 2 },
    addressTextSelected: { color: '#fff' },
    addAddressButton: { width: 100, height: 96, backgroundColor: '#FFF0F2', borderRadius: 8, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderStyle: 'dashed', borderColor: '#F83758' },
    addAddressButtonText: { fontSize: 11, color: '#F83758', fontWeight: '700', marginTop: 4 },
    itemCard: { backgroundColor: '#fff', borderRadius: 8, padding: 12, marginBottom: 14, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
    itemTopContainer: { flexDirection: 'row' },
    productImage: { width: 100, height: 100, borderRadius: 6, backgroundColor: '#eaeaea' },
    productDetails: { flex: 1, marginLeft: 12, justifyContent: 'space-between' },
    productTitle: { fontSize: 14, fontWeight: '600', color: '#000' },
    ratingRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
    ratingText: { fontSize: 15, color: '#333', marginRight: 2 },
    priceRow: { flexDirection: 'row', alignItems: 'center', marginTop: 6 },
    priceBadge: { borderWidth: 1, borderColor: '#ddd', borderRadius: 4, paddingHorizontal: 8, paddingVertical: 4, backgroundColor: '#fafafa' },
    priceText: { fontSize: 14, fontWeight: '700', color: '#000' },
    discountContainer: { marginLeft: 10 },
    discountText: { fontSize: 9, color: '#ff4d4d', fontWeight: '500' },
    originalPriceText: { fontSize: 11, color: '#aaa', textDecorationLine: 'line-through' },
    divider: { height: 1, backgroundColor: '#eee', marginVertical: 12 },
    totalOrderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    totalOrderLabel: { fontSize: 12, fontWeight: '500', color: '#000' },
    totalOrderPrice: { fontSize: 13, fontWeight: '700', color: '#000' },
    modalOverlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', paddingHorizontal: 20 },
    modalContent: { backgroundColor: '#fff', borderRadius: 12, padding: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5 },
    modalTitle: { fontSize: 18, fontWeight: '700', color: '#000', marginBottom: 16, textAlign: 'center' },
    inputLabel: { fontSize: 12, fontWeight: '600', color: '#666', marginBottom: 6 },
    input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 6, paddingHorizontal: 12, paddingVertical: Platform.OS === 'ios' ? 12 : 8, fontSize: 14, color: '#000', marginBottom: 16, backgroundColor: '#fafafa' },
    textArea: { height: 60, textAlignVertical: 'top' },
    modalButtonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
    modalButton: { flex: 1, height: 44, borderRadius: 6, justifyContent: 'center', alignItems: 'center' },
    cancelButton: { backgroundColor: '#f1f1f1', marginRight: 8 },
    cancelButtonText: { color: '#666', fontWeight: '600', fontSize: 14 },
    saveButton: { backgroundColor: '#F83758', marginLeft: 8 },
    saveButtonText: { color: '#fff', fontWeight: '600', fontSize: 14 },
});