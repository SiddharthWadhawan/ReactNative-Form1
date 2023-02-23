import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { ext } from './sidstyle';
export default function App() {
 
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
     
     
    <SafeAreaView style={ext.safestyle}>

      <View  style={ext.view1style}>
      <Text style={ext.text2style}>🚗</Text>
      

      <Text style={ext.text2style}> {age}</Text>
      </View>
      <View  style={ext.view2style}>
      <TouchableOpacity >
      
        <Text style={ext.text3style} onPress={ageTests}>SAVE</Text>
      </TouchableOpacity>
      </View>
    

    </SafeAreaView>
  )




      // {/* <Button style={{ borderRadius:8,width:95, fontSize:20,marginBottom:50}} title='Below-18' onPress={()=>{givText('17');}}></Button>
      // <Button style={{  borderRadius:8,width:95, fontSize:20,marginBottom:50}} title='Above-18' onPress={()=>{ givText('20');}}></Button>
      // <Button style={{ borderRadius:8,width:95, fontSize:20,marginBottom:50}} title='Above-70' onPress={()=>{ givText('77');}}></Button>
      // </View></View> */}






















    // {/* // <View style={styles.container}>
    // //   <Test1/>
    // //   <View style={{flex:5, alignItems: 'center',justifyContent: 'center',}}>
    // //    <Image source={{uri:"https://mediablog.cdnpk.net/sites/5/2021/12/01a-1024x683-1.png"}} style={{width:100,height:230 }} />
    // //   {/* <Text style={{color:'white', fontSize:19}}>Netflix</Text> */}
    //   <Image source={{uri:"https://happyvalentinesday2020.online/pics/i.pinimg.com/originals/e6/83/f2/e683f29e5eb2d87da457379948533a08.gif"}} style={{width:250,height:50 }} />
    //   <StatusBar style='inverted' />
    //   </View>
     
    //  <View style={{ flex:1, justifyContent:'flex-end'}}>
    //   {/* <Image source={{uri:"https://miro.medium.com/max/1400/1*e_Loq49BI4WmN7o9ItTADg.gif"}} style={{width:190,height:110 }} /> */}
    //   <Image source={{uri:"https://media.tenor.com/_rqNDp-2hOYAAAAC/loading-loading-gif.gif"}} style={{width:120,height:100 }} />
    //   {/* <Image source={{uri:"https://media2.giphy.com/media/RgzryV9nRCMHPVVXPV/giphy.gif"}} style={{width:290,height:280 }} /> */}
     
    //  </View>
    // </View>
   
    


// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }
    }
