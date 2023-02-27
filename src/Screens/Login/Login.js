import {
    
    StyleSheet,
    ScrollView,
    Text,
    Image,
    TouchableOpacity
  } from "react-native";
  import { useState } from "react";
  import TxtInput from "../../Component/MyTextInput";
import { StatusBar } from "expo-status-bar";
  
  export default function Login({navigation}){
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    
    const inputChange1 = (val) => {
        setName(val);
      }
    
    const inputChange2 = (val) => {
        setPass(val);
      }

  
    function Validations(){
     
      if (!name.trim() || !pass.trim() ) {
        alert("Fill your details properly !");
      } else {
        alert(name + " Log in Sucessfull ✅");
      }
    }
    
  
    return (
      <ScrollView style={styles.scroller} bounces="tr">
        <StatusBar style='auto'/>
        <Text style={styles.headstyle}>LOG IN</Text>
        <Image source={{uri:"https://images.squarespace-cdn.com/content/v1/5fb03bb53d280f2b635b98ca/1622162818498-RYLGX709PS7CGXZO66IS/portfolio-drawing-gif-web-v2.gif"}} style={{alignSelf:'center', width:180,height:190 }} />


        <TxtInput
          placehold={"Username or Email..."}
          uservalue={name}
          inputtextChange={inputChange1}
          maxlg={30}
        />
        <TxtInput
          placehold={"Password"}
          uservalue={pass}
          inputtextChange={inputChange2}
          passtype={true}
        />
        
        <TouchableOpacity onPress={() => Validations()}>
          <Text style={styles.substyle}>LOG IN</Text>
        </TouchableOpacity>
        <Text style={{...styles.headstyle,fontSize:17,marginBottom:0,color:'black'}}>New User?</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Form')}>
          <Text style={{...styles.substyle,marginTop:5}}>SIGN UP</Text>
        </TouchableOpacity>
        
      </ScrollView>
    );
  }
  
  
  const styles = StyleSheet.create({
    scroller: { backgroundColor: "#F6E4D1", flex: 1, margin: 16 },
  
    headstyle: {
      fontWeight: "bold",
      alignSelf: "center",
      marginTop: 16,
      fontSize: 45,
      marginBottom: 24,
      marginTop: 50
    },
  
    substyle: {
      color: "white",
      alignSelf: "center",
      borderRadius: 8,
      backgroundColor: "black",
      borderWidth: 2,
      width: 110,
      fontSize: 23,
      height: 36,
      marginTop: 56,
      textAlign: "center",
      shadowColor: "black",
      shadowRadius: 12,
      shadowOpacity: 4,
    },
  });
  