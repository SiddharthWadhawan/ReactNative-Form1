import {
    StyleSheet,
    ScrollView,
    Text,
    Image,
    TouchableOpacity
  } from "react-native";
  import { StatusBar } from "expo-status-bar";
  import { useState } from "react";
  import TxtInput from "../../Component/MyTextInput";
  
  export default function Form({navigation}){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [roll, setRoll] = useState("");
    const [dprtmnt, setdprtmnt] = useState("");
    const [email, setEmail] = useState("");
    const [phno, setphno] = useState("");
  
    const inputChange1 = (val) => {
      if (val.match("^[A-Za-z_-]*$")) {
        setName(val);
      }
    };
    const inputChange2 = (val) => {
      if (val.match("^[0-9]*$")) {
        setAge(val);
      }
    };
    const inputChange3 = (val) => {
      if (val.match("^[0-9]*$")) {
        setRoll(val);
      }
    };
    const inputChange4 = (val) => {
      setdprtmnt(val);
    };
    const inputChange5 = (val) => {
      setEmail(val);
    };
    const inputChange6 = (val) => {
      if (val.match("^[0-9]*$")) {
        setphno(val);
      }
    };
  
    const Validations = () => {
      var emailFormatCheckr =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
      if (
        !name.trim() ||
        !age.trim() ||
        !roll.trim() ||
        !dprtmnt.trim() ||
        !email.match(emailFormatCheckr)
      ) {
        alert("Fill your details properly !");
      } else {
        alert(name + " Your Form is Submitted ✅");
      }
    };
  
    return (
      <ScrollView style={styles.scroller} bounces="tr">
        <StatusBar style='auto'/>
        <Text style={styles.headstyle}>SIGN UP</Text>
        <Image source={{uri:"https://i.stack.imgur.com/hodUR.gif"}} style={{alignSelf:'center', width:120,height:100,marginBottom:20 }} />
        <TxtInput
          placehold={"Enter your name..."}
          uservalue={name}
          inputtextChange={inputChange1}
          maxlg={30}
        />
        <TxtInput
          placehold={"Enter your age..."}
          uservalue={age}
          kbdType={"numeric"}
          maxlg={2}
          inputtextChange={inputChange2}
        />
        <TxtInput
          placehold={"Enter your Roll no..."}
          uservalue={roll}
          kbdType={"numeric"}
          maxlg={10}
          inputtextChange={inputChange3}
        />
        <TxtInput
          placehold={"Enter your Department..."}
          uservalue={dprtmnt}
          inputtextChange={inputChange4}
        />
        <TxtInput
          placehold={"Enter your Email..."}
          uservalue={email}
          kbdType={"email-address"}
          inputtextChange={inputChange5}
        />
        <TxtInput
          placehold={"Enter your Phone no..."}
          uservalue={phno}
          kbdType={"numeric"}
          maxlg={10}
          inputtextChange={inputChange6}
        />
         <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
        <Text style={{...styles.headstyle,fontSize:15,color:'blue',fontWeight:'500'}}>Already have an account ? Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Validations()}>
          <Text style={styles.substyle}>SUBMIT</Text>
        </TouchableOpacity >
       
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    scroller: { backgroundColor: "white", flex: 1, margin: 16 },
  
    headstyle: {
      fontWeight: "bold",
      alignSelf: "center",
      marginTop: 16,
      fontSize: 55,
      marginBottom: 24,
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
      marginTop: 20,
      textAlign: "center",
      shadowColor: "black",
      shadowRadius: 12,
      shadowOpacity: 4,
    },
  });
  