import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SingUp';

type Props = {}

const Routes = (props: Props) => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SignIn'>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='SignIn' component={SignIn} />
                <Stack.Screen name='SignUp' component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes