import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import TodoScreen from "./src/screen/TodoScreen";
import LoginScreen from "./src/screen/LoginScreen";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {User, onAuthStateChanged} from 'firebase/auth'
import { FIREBASE_AUTH } from './FirebaseConfig';

const Stack = createNativeStackNavigator();


export default function App() {
	const [user,setUser] = useState(null);
	useEffect(()=>{
		onAuthStateChanged(FIREBASE_AUTH,(user) =>{
			// console.log('user',user);
			setUser(user);
		})
	},[]);

	return (
		
			<NavigationContainer>
				<Stack.Navigator initialRouteName = "LoginScreen">
					{user ? (
						<Stack.Screen name="todo" component={TodoScreen} options={{headerShown:false}}/>

					) : (
						<Stack.Screen name="login" component={LoginScreen} options={{headerShown:false}}/>
					) }
				</Stack.Navigator>
			</NavigationContainer>
		
	);
}

const styles = StyleSheet.create({});


