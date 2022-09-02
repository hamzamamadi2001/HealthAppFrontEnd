import React from 'react';
import {View, StyleSheet,Text, KeyboardAvoidingView, TouchableWithoutFeedback ,I18nManager,Image ,Platform,Keyboard, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button,SocialIcon  } from "@rneui/themed";


const Login = () => {
    const input = React.createRef();
    I18nManager.forceRTL(true)

    return (
        <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"}>
                  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

   <View style={{backgroundColor:"white",width:"100%",height:"100%"}}>
 
    <Image style={{width:100,alignSelf:"center",marginTop:50,height:100}} source={require('../assets/vecteezy_heart-and-heartbeat-symbol-on-reflective-surface_10829966_608.png')} />



 
<Text style={{textAlign:"center",marginTop:50}} >login into your account</Text>
<View style={{marginTop:30,
     width:"95%"
    ,height:200
    ,justifyContent:"center"
    ,alignSelf:"center"}}>
<Input
textAlign='right'
leftIconContainerStyle={{marginLeft:13}}
inputContainerStyle={{backgroundColor:"#dbd9d3",
 borderRadius:20,
 width:"100%"}}
       placeholder='الهاتف'
      leftIcon={{ type: 'font-awesome', name: 'phone' }}
      renderErrorMessage={false}
      errorMessage="هناك خطا ما"
    
    />

<Input
textAlign='right'

 leftIconContainerStyle={{marginLeft:13}}
 inputContainerStyle={{backgroundColor:"#dbd9d3",
 borderRadius:20,
 width:"100%"}}
       placeholder='كلمة السر'
      leftIcon={{ type: 'font-awesome', name: 'lock' }}
       errorMessage="هناك خطا"
    />
 <Button
              title="الدخول"
              buttonStyle={{
                backgroundColor: 'black',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                alignSelf:'center',
                marginVertical: 10,
              }}
              titleStyle={{ fontWeight: 'bold' }}
            /></View>
   <Text style={{textAlign:"center",marginTop:"5%"}}>_________________الدخول عن طريق_________________</Text>
   <View style={{flexDirection:"row",justifyContent:"center",alignContent:"center",marginTop:"5%"}}>
    <Pressable onPress={()=>console.log("hello")}>
          <SocialIcon
                type="facebook"
                iconType= 'font-awesome'
                 
              />
    </Pressable>

    <Pressable onPress={()=>console.log("hello")}>
          <SocialIcon
                type="google"
                iconType= 'font-awesome'
                 
              />
    </Pressable>
 
   </View>

<View style={{flexDirection:"row",justifyContent:"center",alignContent:"center",marginTop:"6%"}}>
      <Text style={{textAlign:"center",verticalAlign:"center",textAlignVertical:"center"}}>لايوجد عندك حساب ؟ 
 </Text><Button title="انشئ حساب الان" type="clear" />

</View>
 
   </View>
   </TouchableWithoutFeedback>
   </KeyboardAvoidingView>
    );
}

 
export default Login;
