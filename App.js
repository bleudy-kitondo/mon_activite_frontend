import login from './screens/loginScreen'
import admin from './screens/adminScreen'
import signUp from './screens/signUpScreen'
import userHome from './screens/userHomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Admin" component={admin} />
        <Stack.Screen name="Signup" component={signUp} />
        <Stack.Screen name="Userhome" component={userHome} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
