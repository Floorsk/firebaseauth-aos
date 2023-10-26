import { useState } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StackTypes } from "../../routes"
import { auth, firebase } from '../../../firebase'

const SignUp = () => {

  const navigation = useNavigation<StackTypes>()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = () => {

    let signUpError = false

    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        alert(error.message);
        signUpError = true;
      })

      if (!signUpError) {
        navigation.navigate('SignIn')
      }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça seu cadastro</Text>
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
      <TouchableOpacity style={styles.button} onPress={() => handleRegister()}>
        <Text style={styles.buttonText}>Resgistrar</Text>
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

export default SignUp