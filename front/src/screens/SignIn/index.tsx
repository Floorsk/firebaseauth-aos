import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { auth, firebase } from '../../../firebase.js'
import useStore from '../../useStore'

type Props = {}

const SignIn = (props: Props) => {

    const navigation = useNavigation<StackTypes>()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const store = useStore()

    const handleLogin = async () => {

        let threwError = false;
        await auth.signInWithEmailAndPassword(email, password).catch((error: { message: any; }) => {
            alert(error.message);
            threwError = true;
        });

        if (!threwError) {
            if (auth.currentUser) {
                let userId = auth.currentUser.uid
                store.signIn(userId)
            }
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>Faça seu login</Text>
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
            <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.buttonText}>Cadastrar</Text>
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
        fontSize: 26,
        marginBottom: 10,
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
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 3,
        backgroundColor: 'black'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18
    }
});

export default SignIn
