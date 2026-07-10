import { useCallback, useRef, useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CustomInput } from "../../components/CustomInput"
import LockIcon from "../../../assets/icons/lock.svg"
import UserIcon from "../../../assets/icons/user.svg"
import { CustomButton } from "../../components/CustomButton"
export const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailRef = useRef();

    const onClickLogin = useCallback(
        () => {
            navigation.replace("GetStarted")
        },[]
    )

    return (
        <View style={styles.screen}>
            <Text style={styles.welcome}>Welcome Back!</Text>

            <View style={styles.form}>
                <CustomInput
                    placeholder="Enter your email"
                    showLeftIcon
                    leftIcon={<UserIcon width={20} height={20} />}
                    onChangeText={setEmail}
                    value={email}
                    ref={emailRef}
                />

                <CustomInput
                    placeholder="Enter your password"
                    showLeftIcon
                    leftIcon={<LockIcon width={20} height={20} />}
                    onChangeText={setPassword}
                    value={password}
                    isPassword
                    style={{
                        marginTop: 34
                    }}
                />
                <TouchableOpacity style={styles.forget}>
                    <Text style={styles.forget}>Forget password?</Text>
                </TouchableOpacity>
            </View>
            <CustomButton onPress={onClickLogin} style={{
                marginTop: 73
            }}>
                <Text style={styles.login}>Login</Text>
            </CustomButton>
            <View style={styles.signUpCon}>
                <Text style={styles.createAcc}>Create an account  </Text>
                <TouchableOpacity style={styles.signUp}>
                    <Text style={styles.signUp}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 19,
        backgroundColor: '#ffffff'
    },
    welcome: {
        width: 185,
        fontSize: 36,
        fontWeight: '500'
    },
    form: {
        height: 168,
        width: '100%',
        justifyContent: 'space-between',
        marginTop: 35,
    },
    forget: {
        textAlign: 'right',
        marginTop: 9,
        color: '#F83758',
        fontSize: 15,
        fontWeight: 'regular'

    },
    signUpCon: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    createAcc: {
        fontSize: 15
    },
    signUp: {
        fontSize: 15,
        textDecorationLine: 'underline',
        color: '#F83758',
        fontWeight: '500'
    },
    login: {
        fontSize: 20,
        fontWeight: 500,
        color: '#ffffff'
    }
})