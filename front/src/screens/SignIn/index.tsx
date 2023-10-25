import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

type Props = {}

const SignIn = (props: Props) => {
 
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>Olha o login</Text>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder='Email'
                    onChangeText={setEmail}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Senha'
                    onChangeText={setPassword}
                    style={styles.input}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,

    },
    inputGroup: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    input: {
        width: '75%',
        height: 40,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: '#000000',
    },
    button: {
        width: '75%',
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: 'blue'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18
    }
});

export default SignIn
