import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import ProfileIcon from "../../../assets/images/profile.svg";
import EditIcon from "../../../assets/icons/edit.svg";
import { CustomInput } from "../../components/CustomInput";

export const ProfileScreen = ({navigation}) => {

    const onClickSave = () => {
        navigation.reset({
            index: 0,
            routes: [{name: 'Main'}]
        })
    }

    return (
        <View style={styles.screen}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.container}
            >
                {/* Profile */}
                <View style={styles.profile}>
                    <ProfileIcon width="95%" height="100%" />

                    <View style={styles.edit}>
                        <EditIcon width={14} height={14} />
                    </View>
                </View>

                {/* Personal Details */}
                <Text style={styles.sectionTitle}>Personal Details</Text>

                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Email Address</Text>
                    <CustomInput
                        placeholder="aashifa@gmail.com"
                        style={styles.input}
                    />
                </View>

                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Password</Text>
                    <CustomInput
                        placeholder="***********"
                        secureTextEntry
                        style={styles.input}
                    />
                </View>

                <TouchableOpacity style={styles.changePassword}>
                    <Text style={styles.changePasswordText}>Change Password</Text>
                </TouchableOpacity>

                <View style={styles.divider} />

                {/* Business Address */}
                <Text style={styles.sectionTitle}>Business Address Details</Text>

                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Pincode</Text>
                    <CustomInput placeholder="450116" style={styles.input} />
                </View>

                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Address</Text>
                    <CustomInput
                        placeholder="216 St Paul's Rd,"
                        style={styles.input}
                    />
                </View>

                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>City</Text>
                    <CustomInput placeholder="London" style={styles.input} />
                </View>

                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>State</Text>
                    <CustomInput placeholder="N1 2LL" style={styles.input} />
                </View>

                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Country</Text>
                    <CustomInput
                        placeholder="United Kingdom"
                        style={styles.input}
                    />
                </View>

                <View style={styles.divider} />

                {/* Bank Details */}
                <Text style={styles.sectionTitle}>Bank Account Details</Text>

                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Bank Account Number</Text>
                    <CustomInput
                        placeholder="204356XXXXXXX"
                        style={styles.input}
                    />
                </View>

                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Account Holder's Name</Text>
                    <CustomInput
                        placeholder="Abhiraj Sisodiya"
                        style={styles.input}
                    />
                </View>

                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>IFSC Code</Text>
                    <CustomInput
                        placeholder="SBIN00428"
                        style={styles.input}
                    />
                </View>

                <TouchableOpacity onPress={onClickSave} style={styles.saveButton}>
                    <Text style={styles.saveText}>Save</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },

    container: {
        paddingHorizontal: 24,
        paddingTop: 30,
        paddingBottom: 40,
    },

    profile: {
        width: 100,
        height: 100,
        alignSelf: "center",
        position: "relative",
    },

    edit: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "#4392F9",
        borderWidth: 2,
        borderColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
    },

    sectionTitle: {
        marginTop: 28,
        marginBottom: 20,
        fontSize: 26,
        fontWeight: "600",
        color: "#000",
    },

    fieldContainer: {
        marginBottom: 18,
    },

    label: {
        fontSize: 15,
        color: "#000",
        marginBottom: 10,
    },

    input: {
        marginTop: 0,
    },

    changePassword: {
        alignSelf: "flex-end",
        marginTop: -5,
    },

    changePasswordText: {
        fontSize: 14,
        color: "#FF3B5C",
        textDecorationLine: "underline",
    },

    divider: {
        height: 1,
        backgroundColor: "#E6E6E6",
        marginVertical: 30,
    },

    saveButton: {
        height: 52,
        backgroundColor: "#FF365D",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25,
    },

    saveText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "600",
    },
});