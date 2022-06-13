import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

export default function Categories() {

     const items = [
          {
               image: require("../assets/images/shopping-bag.png"),
               text: "Pick-Up"
          },
          {
               image: require("../assets/images/soft-drink.png"),
               text: "Soft Drinks"
          },
          {
               image: require("../assets/images/bread.png"),
               text: "Bakery Items"
          },
          {
               image: require("../assets/images/fast-food.png"),
               text: "Deals"
          },
          {
               image: require("../assets/images/coffee.png"),
               text: "Coffee and Tea"
          },
     ]
  return (
       <View style={{
            marginTop: 5,
            backgroundColor: "#fff",
            paddingVertical: 10,
            paddingLeft: 20
       }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
         {items.map((item, index) => (
              <View key={index} style={{
               alignItems: "center",
               marginRight: 30
                    }}>
                    <Image source={item.image} style={{
                    width: 50,
                    height: 40,
                    resizeMode: "contain"
               }}/>
                    <Text style={{
                    fontSize: 13,
                    fontWeight: "900"
               }}> {item.text}</Text>
               </View>
         ))}
          </ScrollView>
       </View>
    
  )
}