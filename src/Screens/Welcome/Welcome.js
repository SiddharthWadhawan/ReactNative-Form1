import { Button, StyleSheet, Text, View, Image, Linking } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function Welcome({navigation}){
 

    return(
        <View style={style.view1}>
          <StatusBar style='inverted'/>
          <View style={style.view2}>
            <Image source={{uri:"https://mediablog.cdnpk.net/sites/5/2021/12/01a-1024x683-1.png"}} style={style.img1} />
            {/* <Image source={{uri:"https://media.tenor.com/_rqNDp-2hOYAAAAC/loading-loading-gif.gif"}} style={{width:140,height:120, marginBottom:10 }} /> */}
            {/* <Image source={{uri:"https://happyvalentinesday2020.online/pics/i.pinimg.com/originals/e6/83/f2/e683f29e5eb2d87da457379948533a08.gif"}} style={style.img2} /> */}
            
          </View>
          <View style={style.view3}>
          {/* <Image source={{uri:"https://miro.medium.com/max/1400/1*e_Loq49BI4WmN7o9ItTADg.gif"}} style={{width:190,height:110 }} /> */}
          {/* <Image source={{uri:"https://media2.giphy.com/media/RgzryV9nRCMHPVVXPV/giphy.gif"}} style={{width:290,height:280 }} /> */}
          <View style={style.view3}>
            <Button onPress={()=> navigation.navigate('Login')} title="LOG IN"  /></View>
            <Button onPress={()=> navigation.navigate('AgeTest')} title="SIGN UP"  />
            <Text style={{color:"white" ,marginTop:20}} >Chat with us</Text>
            <Button title="Mr.Amrik" onPress={()=> Linking.openURL('https://wa.me/+917814572015')}/>
            {/* <Button onPress={()=> navigation.navigate('AgeTest')} title="Next" /> */}
          </View>
        </View>
    )
}  

const style= StyleSheet.create({
   view1:{ backgroundColor:'black', flex:1,alignItems:'center' , justifyContent:'center'},
   view2:{flex:0.6,marginTop:100, alignItems: 'center',justifyContent: 'center'},
   view3:{ flex:0.4, justifyContent:'flex-end',marginVertical:20},
   img1:{width:100,height:230 },
   img2:{width:200,height:25 }
}) 