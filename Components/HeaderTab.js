import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTab() {
     const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={{
         flexDirection: "row",
         alignSelf: "center"
    }}>
      <HeaderButton text="Delivery" btnColor="black" textColor="white" activeTab={activeTab} setActiveTab={setActiveTab}/>
      <HeaderButton text="Pick Up" btnColor="white" textColor="black" activeTab={activeTab} setActiveTab={setActiveTab}/>
    </View>
  )
}

const HeaderButton = (props) => (
     <View style={{
          marginTop: 50
     }}>
          <TouchableOpacity style={{
               backgroundColor: props.activeTab === props.text ? "black" : "white",
               paddingVertical: 6,
               paddingHorizontal: 16,
               borderRadius: 30
          }}
          onPress={() => props.setActiveTab(props.text)}
          >
               
               <Text style={{
                    color: props.activeTab === props.text ? "white" : "black",
                    fontSize: 15,
                    fontWeight: "600"
               }}>{props.text}</Text>
          </TouchableOpacity>
     </View>
)

const styles = StyleSheet.create({})