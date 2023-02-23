import { Text, View, TextInput , StyleSheet } from 'react-native';

const TxtInput = ({placehold,uservalue,kbdType,maxlg,inputtextChange})=>{
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
        />
        </View>
    )
}
export default TxtInput

const styles= StyleSheet.create({
    inputstyl:{ color:'yellow', fontSize:24, height:66, width:350,backgroundColor:'black', borderRadius:11,marginTop:16, padding:8},
    viewstyle: {alignSelf:'center'}
    
})



