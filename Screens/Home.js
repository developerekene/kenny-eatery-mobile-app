import { View, Text, ScrollView  } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";


import HeaderTab from '../Components/HeaderTab'
import SearchBar from '../Components/SearchBar'
import Categories from '../Components/Categories'
import RestaurantItem from '../Components/RestaurantItem'


export default function Home() {
  return (

     <SafeAreaView style={{
          backgroundColor: "#eee",
          // flex: 1
          }}>
               <View style={{
                    backgroundColor: "white", 
                    padding: 15
               }}>
                    <HeaderTab />
                    <SearchBar />
                    
               </View>
               <ScrollView showsVerticalScrollIndicator={false}>
                    <Categories />
                    <RestaurantItem />
               </ScrollView>
     </SafeAreaView>
  )
}