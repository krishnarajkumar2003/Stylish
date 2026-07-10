import { StyleSheet, Text } from "react-native"

export const CustomText = ({ children, style }) => {
    const formattedStyle = StyleSheet.flatten(style)

    return (
        <Text style={formattedStyle}>{children}</Text>
    )
}