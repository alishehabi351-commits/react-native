import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../screens/Home';
import About from '../screens/About';

const HomeStack = createNativeStackNavigator();
const AboutStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();



const screenOptions = {
    headerStyle: {
        backgroundColor: '#6200ee'
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        fontWeight: 'bold'
    }
};

export default function StackNavigator() {
    return(
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#6200ee'
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <Stack.Screen name="Home" component={Home} options={{title: "Home"}}></Stack.Screen>
            <Stack.Screen name="About" component={About} options={{title: "About us"}}></Stack.Screen>
        </Stack.Navigator>
    )
}

export function HomeStackNavigator() {
    return(
        <HomeStack.Navigator screenOptions={screenOptions}>
            <HomeStack.Screen name="Home" component={Home} options={{title: "Home"}}></HomeStack.Screen>
        </HomeStack.Navigator>
    )
}

export function AboutStackNavigator() {
    return(
        <AboutStack.Navigator screenOptions={screenOptions}>
            <AboutStack.Screen name="About" component={About} options={{title: "About us"}}></AboutStack.Screen>
        </AboutStack.Navigator>
    )
}