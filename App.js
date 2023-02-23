import { Button, StyleSheet,ScrollView, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import TxtInput from './src/component/MyTextInput';
import MyButton from './src/component/MyButtons';

export default function App(){
   const [name, setName]= useState('');
   const [age, setAge]= useState('');
   const [roll, setRoll]= useState('');
   const [dprtmnt, setdprtmnt]= useState('');
   const [email, setEmail]= useState('');
   const [phno, setphno]= useState('');
   
   const inputChange1 =(val)=>{ if(val.match("^[A-Za-z_-]*$")) {setName(val)} }
   const inputChange2 =(val)=>{ if(val.match("^[0-9]*$") ) {setAge(val)} }
   const inputChange3 =(val)=>{ if(val.match("^[0-9]*$") ) {setRoll(val)} }
   const inputChange4 =(val)=>{ setdprtmnt(val) }
   const inputChange5 =(val)=>{ setEmail(val) }
   const inputChange6 =(val)=>{ if(val.match("^[0-9]*$")) {setphno(val)}; }

   const Validations = ()=>{
     var emailFormatCheckr = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
         
          if(!name.trim() || !age.trim() || !roll.trim() || !dprtmnt.trim() || !email.match(emailFormatCheckr) ){
                alert('Fill your details properly !');
          }
          else{ alert(name + ' Your Form is Submitted ✅' ); }
          }

   return(
        <ScrollView style={styles.scroller} bounces='tr'>
          <Text style={styles.headstyle}>FORM</Text>
          <TxtInput placehold={'Enter your name...'} uservalue={name} inputtextChange={inputChange1} maxlg={30}  />
          <TxtInput placehold={'Enter your age...'} uservalue={age} kbdType={'numeric'} maxlg={2} inputtextChange={inputChange2} />
          <TxtInput placehold={'Enter your Roll no...'} uservalue={roll} kbdType={'numeric'} maxlg={10} inputtextChange={inputChange3}/>
          <TxtInput placehold={'Enter your Department...'} uservalue={dprtmnt} inputtextChange={inputChange4} />
          <TxtInput placehold={'Enter your Email...'} uservalue={email} kbdType={'email-address'} inputtextChange={inputChange5}  />
          <TxtInput placehold={'Enter your Phone no...'} uservalue={phno} kbdType={'numeric'} maxlg={10} inputtextChange={inputChange6}  />
          <TouchableOpacity onPress={()=>Validations()} >
            <Text style={styles.substyle}>SUBMIT</Text>
        </TouchableOpacity>
        </ScrollView>
  
   )


}

const styles= StyleSheet.create({
        scroller: { backgroundColor:'rgba(125,477,657,1)', flex:1,margin:16
         },

         headstyle: { fontWeight:'bold',alignSelf:'center',marginTop:16, fontSize:55, marginBottom:24
         },

         substyle: {color:'white', alignSelf:'center',borderRadius:8,backgroundColor:'black',borderWidth:2,width:110, fontSize:23,height:36,marginTop:56, textAlign:'center', shadowColor:'black',shadowRadius: 12,shadowOpacity:4}
})     