import { View, Button,Text,TouchableOpacity } from 'react-native';

export default function MyButton(){

    return(
        <TouchableOpacity >
            <Text style={{alignItems:'center', color:'black',borderRadius:8,backgroundColor:'rgba(435,98,5,1)',borderWidth:1,width:300, fontSize:6,height:55 ,alignSelf:'center',marginTop:16}}>SUBMIT</Text>
        </TouchableOpacity>
    )
}