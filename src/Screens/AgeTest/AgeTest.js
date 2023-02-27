import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Text, View, Image,  TouchableOpacity } from 'react-native';
import { ext } from './sidstyle';
export default function AgeTest({navigation}) {
 
  const [age, givText]= useState('92')
   
  function ageTests(){

    switch(true){

    case (age < 18) : givText('❌Not Eligible for Driving❌');
     break;
     
    case (age >= 18 && age < 70):  givText('You are eligible for Driving👍');
     break;

    case (age > 70): givText('❌Cant drive due to age factor');
     break;
    }
  }
   
  return (
     
     
    <View style={ext.safestyle}>
      <StatusBar style='auto'/>
      <View  style={ext.view1style}>
        <Text style={ext.text2style}>Select your age Category</Text>
        <Text style={ext.text2style}> {age}</Text>
        <View style={{marginTop:50, flexDirection:'row'}}>
          <Button  title='Below-18' onPress={()=>{givText('17');}}></Button>
          <Button title='Above-18' onPress={()=>{ givText('20');}}></Button>
          <Button  title='Above-70' onPress={()=>{ givText('77');}}></Button>
        </View>
      </View>
      <View  style={ext.view2style}>
        <Image source={{uri:"https://th.bing.com/th/id/R.1010c75dc2f74ef3a289f4df62e8f81b?rik=%2bNUlf6oqNKy8Bg&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-white-ferrari-enzo-racing-carcarferrarivehicletransportracing-car-961524642333ddlhe.png&ehk=Q4LbZNwH%2bif%2by%2b3hDSPfcqcJ6%2ffC1Seh8Ec%2fgfCQ7HA%3d&risl=&pid=ImgRaw&r=0"}} style={{marginBottom:50,width:"100%",height:230 }} />
        <TouchableOpacity >
          <Text style={ext.text3style} onPress={ageTests}>Check</Text>
        </TouchableOpacity>
        <Button onPress={()=> navigation.navigate('Form')} title="Next" />
      </View>
    

    </View>
  )




      


    }
