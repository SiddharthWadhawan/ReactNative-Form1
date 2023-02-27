import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "../Screens/Welcome/Welcome";
import AgeTest from "../Screens/AgeTest/AgeTest";
import Form from "../Screens/Forms/Form";
import Login from "../Screens/Login/Login";


export const  Routes=()=>{
    const Stack = createNativeStackNavigator()

    return(
        <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={Welcome}  />
            <Stack.Screen name="AgeTest" component={AgeTest} options={{animation:'flip'}}/>
            <Stack.Screen name="Form" component={Form} options={{animation:'flip'}}/>
            <Stack.Screen name="Login" component={Login} options={{animation:'flip'}}/>
        </Stack.Navigator>
        </NavigationContainer>
        
    )
}