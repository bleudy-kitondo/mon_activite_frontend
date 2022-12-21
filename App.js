import Login from './screens/loginScreen'
import Admin from './screens/adminScreen'
import SignUp from './screens/signUpScreen'
import UserHome from './screens/userHomeScreen'
import Setting from './screens/settingScreen'
import Group from './screens/groupScreen'
import Send from './screens/sendSreen'
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
        <Stack.Screen name="Login" component={UserHome} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Userhome" component={UserHome} />
        <Stack.Screen name="Send" component={Send} />
        <Stack.Screen name="Group" component={Group} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
