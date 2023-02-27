import { View, TextInput , StyleSheet } from 'react-native';

const TxtInput = ({placehold,uservalue,kbdType,maxlg,inputtextChange,passtype})=>{
    return(
        <View style={styles.viewstyle}>
            <TextInput 
            value={uservalue}
            placeholder={placehold}
            placeholderTextColor='silver'
            keyboardType={kbdType}
            maxLength={maxlg}
            style={styles.inputstyl}
            onChangeText={inputtextChange}
            secureTextEntry={passtype}
            />
        </View>
    )
}
export default TxtInput

const styles= StyleSheet.create({
    inputstyl:{ color:'yellow', fontSize:16, height:66, width:350,backgroundColor:'black', borderRadius:11,marginTop:16, padding:8},
    viewstyle: {alignSelf:'center'}
    
})



