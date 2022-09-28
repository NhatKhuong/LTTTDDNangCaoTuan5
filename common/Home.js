import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { Stack, Button } from "@react-native-material/core";
import { useState, useEffect } from "react";
import {useRoute } from '@react-navigation/native';

export default function Home({navigation}) {
  const route = useRoute();
  var blue = require('../imgs/vsmart_live_xanh1.png')
  var [url, setUrl] = useState(blue)
  useEffect(() => {
    if (route.params != null)
    setUrl(route.params.message)
  });
  
    return (
        
        <View style={styles.container}>
            <View style={styles.img}>
                <Image style={{width:300, height:350}} source={url}/>
            </View>
            <View style={{marginTop:30}}>
              <Text style={{fontSize:20}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
              <View style={{display:"flex", flexDirection:"row",marginTop:10, justifyContent:"space-between"}}>
                  <View style={{display:"flex", flexDirection:"row"}}>
                    <Image style={{width:20, height:20}} source={require('../imgs/Star5.png')}/>
                    <Image style={{width:20, height:20}} source={require('../imgs/Star5.png')}/>
                    <Image style={{width:20, height:20}} source={require('../imgs/Star5.png')}/>
                    <Image style={{width:20, height:20}} source={require('../imgs/Star5.png')}/>
                    <Image style={{width:20, height:20}} source={require('../imgs/Star5.png')}/>
                  </View>
                  <Text style={{marginLeft:30}}>(Xem 828 đánh giá)</Text>
              </View>
              <View style={{display:"flex", flexDirection:"row",marginTop:10}}>
                  <Text style={{fontWeight:"bold", fontSize:20, color:"#333"}}>1.790.000 đ</Text>
                  <Text style={{marginLeft:70, fontSize:15, textDecorationLine:"line-through"}}>1.790.000 đ</Text>
              </View>
              <View style={{marginTop:10}}>
                <Text style={{color:"red", fontWeight:"bold"}}>Ở đâu rẻ hơn hoàn tiền</Text>
              </View>
              <View style={{marginTop:20}}>
                <Button variant="outlined" title="4 Màu - Chọn Màu" color="#d4ac2d" onPress={() => navigation.navigate('Detail')}/>
              </View>
              <View style={{marginTop:80}}>
                <Button title="Mua" color="error" onPress={() => navigation.navigate('Detail')} />
              </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding:20,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
