import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTab from '../Components/HeaderTab'
import SearchBar from '../Components/SearchBar'
import Categories from '../Components/Categories'

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
               <Categories />
          
     </SafeAreaView>
  )
}