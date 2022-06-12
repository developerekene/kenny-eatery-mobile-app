import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function HeaderTab() {
  return (
    <View style={{
         flexDirection: "row",
         alignSelf: "center"
    }}>
      <HeaderButton text="Delivery" btnColor="black" textColor="white"/>
      <HeaderButton text="Pick Up" btnColor="white" textColor="black"/>
    </View>
  )
}

const HeaderButton = (props) => (
     <View style={{
          marginTop: 50
     }}>
          <TouchableOpacity style={{
               backgroundColor: props.btnColor,
               paddingVertical: 6,
               paddingHorizontal: 16,
               borderRadius: 30
          }}>
               <Text style={{
                    color: props.textColor,
                    fontSize: 15,
                    fontWeight: "600"
               }}>{props.text}</Text>
          </TouchableOpacity>
     </View>
)

const styles = StyleSheet.create({})