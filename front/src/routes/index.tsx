import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SingUp';
import useStore from '../useStore';
import { useEffect, useState } from 'react';

type NavigationProps = {
    Home: undefined
    SignIn: undefined
    SignUp: undefined
}

export type StackTypes = StackNavigationProp<NavigationProps>

const Routes = () => {
    const Stack = createStackNavigator();

    const [isLogged, setIsLogged] = useState(false)
    const signIn = useStore((state) => state.isLogged)

    useEffect(() => {
        setIsLogged(signIn)
    }, [signIn])
    

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SignIn'>
                {
                    isLogged
                        ?
                        <Stack.Screen name='Home' component={Home} />
                        :
                        <>
                            <Stack.Screen name='SignIn' component={SignIn} />
                            <Stack.Screen name='SignUp' component={SignUp} />
                        </>
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes