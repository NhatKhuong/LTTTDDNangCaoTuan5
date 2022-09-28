import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Stack, Button } from "@react-native-material/core";
import { useState, useEffect } from "react";


export default function Detail({navigation}) {
  
  const imgDefault = require('../imgs/vsmart_live_xanh1.png');
  const [url, setUrl] = useState(imgDefault)
  // console.log(url.toString());

  const handlerChooseColor = (prop)=>{
    // const imgUrl = require(prop);
    setUrl(prop)
  }
  // var a = url.toString();
  // var urlPic = require('../imgs/vsmart_live_xanh1.png');
    return (
        
        <View style={styles.container}>
            <View style={{display:"flex", flexDirection:"row"}}>
                <Image style={{width:130, height:170}} source={url}/>
                <View style={{paddingTop:20, marginLeft:20}}>
                  <Text>Điện thoại Vsmart Joy 3</Text>
                  <Text>Hàng chính hãng</Text>
                </View>
            </View>
            <View style={{backgroundColor:"#ccc", display: "flex", flex:1, width:"100%", alignItems:"center"}}>
              <Text style={{margin:10, fontSize:16}}>Chọn màu bên dưới</Text>
              <View style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                <TouchableOpacity style={{marginBottom:20}} onPress={()=>handlerChooseColor(require('../imgs/vs_bac1.png'))}>
                  <View style={{backgroundColor:"#fff", width:100,height:100}}></View>
                </TouchableOpacity>
                <TouchableOpacity style={{marginBottom:20}} onPress={()=>handlerChooseColor(require('../imgs/vs_red_a2.png'))}>
                  <View style={{backgroundColor:"red", width:100,height:100}}></View>
                </TouchableOpacity>
                <TouchableOpacity style={{marginBottom:20}} onPress={()=>handlerChooseColor(require('../imgs/vsmart_black_star1.png'))}>
                  <View style={{backgroundColor:"#000", width:100,height:100}}></View>
                </TouchableOpacity>
                <TouchableOpacity style={{marginBottom:20}} onPress={()=>handlerChooseColor(require('../imgs/vsmart_live_xanh1.png'))}>
                  <View style={{backgroundColor:"blue", width:100,height:100}}></View>
                </TouchableOpacity>
              </View>
              <Button title="Xong" onPress={() => navigation.navigate('Home', { message: url, })} style={{width:350}} />
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // padding:20,
        paddingTop:30,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
