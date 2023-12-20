import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { ActivityIndicator, Button } from 'react-native-paper';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async()=> {
    setLoading(true);
    try{
      const response = await signInWithEmailAndPassword(auth, email, password);
      // console.log(response);
    }catch(error){
      console.log(error);
      alert('Sign in Failed: ' + error.message);
    }finally{
      setLoading(false);
    }
  }

  const signUp = async()=> {
    setLoading(true);
    try{
      const response = await createUserWithEmailAndPassword(auth, email, password);
      // console.log(response);
      alert('Check Your Email');
    }catch(error){
      console.log(error);
      alert('Sign in Failed: ' + error.message);
    }finally{
      setLoading(false);
    }
  }

  return (
    <View style= {styles.container}>
      <Text>Welcome To Your Todo List!</Text>
      <TextInput value={email} style = {styles.input} placeholder="Enter Email" autoCapitalize="none" onChangeText={(text) => setEmail(text)}></TextInput>
      <TextInput secureTextEntry={true} value={password} style = {styles.input} placeholder="Enter Password" autoCapitalize="none" onChangeText={(text) => setPassword(text)}></TextInput>
      {loading ? (
        <ActivityIndicator size="large"/>
        ):(
          <>
          {/* <Button title="Login" onPress={signIn} style={{ color: "#000"}}/>
          <Button title="Create Account" onPress={signUp}/> */}
          <Button mode="contained" onPress={signIn} style={{ marginVertical: 10 }}>Login</Button>
          <Button mode="contained" onPress={signUp}>Create Account</Button>
          </>
        )
      }
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,width:200,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  
}); 