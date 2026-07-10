import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const CustomButton = ({children, style, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 66,
        backgroundColor: '#F83758',
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center'
    }
})