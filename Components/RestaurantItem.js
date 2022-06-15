import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons"

export default function RestaurantItem() {
  return (
       <TouchableOpacity activeOpacity={1} style={{marginBottom: 25}}>
            <View style={{
         marginTop: 10,
         padding: 15,
         backgroundColor: "#fff"
    }}>
         <RestaurantImage />
         <RestaurantInfo />
    </View>
       </TouchableOpacity>
    
  )
}

const RestaurantImage = () => (
     <>
     <Image source={{
          uri: "https://media.istockphoto.com/photos/assorted-of-indian-dish-with-curry-dish-naan-chicken-picture-id1290444763?b=1&k=20&m=1290444763&s=170667a&w=0&h=Ae7oa3Ns2bkIxQMnlxoQTS8jztFBLBsBC4jwIYx68HI="
     }}
     style={{
          width: "100%",
          height: 200
     }}/>
     <TouchableOpacity style={{
          position: "absolute",
          right: 20,
          top: 20
     }}>
          <MaterialCommunityIcons name="heart-outline" size={25} color="#fff"/>
     </TouchableOpacity>
     </>
);

const RestaurantInfo = () => (
     <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10
     }}>
          <View>
          <Text style={{
               fontSize: 15,
               fontWeight: "bold"
          }}>FarmHouse Kitchen Thai Cuisine</Text>
          <Text style={{
               fontSize: 13,
               color: "grey",
               // backgroundColor: "#fff"
          }}>30.45 • min</Text>
          </View>
          
          <View style={{
               backgroundColor: "#eee",
               height: 30,
               width: 30,
               alignItems: "center",
               justifyContent: "center",
               borderRadius: 15
          }}>
               <Text >4.5</Text>
          </View>
          
     </View>
);