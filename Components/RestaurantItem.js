import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons"

const localRestaurants = [
     {
          name: "Beach Side Bar",
          image_url: "https://images.unsplash.com/photo-1537639622086-73570d45a9ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBiYXJ8ZW58MHx8MHx8&w=1000&q=80",
          categories: ["cafe", "bar"],
          price: "$5",
          reviews: 1474,
          rating: 5.0
     },
     {
          name: "Benihana",
          image_url: "https://media.istockphoto.com/photos/assorted-of-indian-dish-with-curry-dish-naan-chicken-picture-id1290444763?b=1&k=20&m=1290444763&s=170667a&w=0&h=Ae7oa3Ns2bkIxQMnlxoQTS8jztFBLBsBC4jwIYx68HI=",
          categories: ["cafe", "bar"],
          price: "$5",
          reviews: 1244,
          rating: 4.5
     },
     {
          name: "Maimi Tour",
          image_url: "https://i.pinimg.com/originals/7b/ba/b1/7bbab155b830359e5455116eaf5597fa.png",
          categories: ["cafe", "bar"],
          price: "$5",
          reviews: 174,
          rating: 3.8
     },
     {
          name: "Maimi Tour",
          image_url: "https://bgr.com/wp-content/uploads/2020/09/bgrpic-copy-19.jpg?quality=82&strip=all&w=1440&h=810&crop=1",
          categories: ["cafe", "bar"],
          price: "$5",
          reviews: 804,
          rating: 2.5
     },
     {
          name: "Sea food",
          image_url: "https://www.crushpixel.com/big-static18/preview4/fresh-salmon-steak-with-variety-2836405.jpg",
          categories: ["cafe", "bar"],
          price: "$5",
          reviews: 992,
          rating: 3.9
     },
]

export default function RestaurantItem() {
  return (
       <TouchableOpacity activeOpacity={1} style={{marginBottom: 25}}>
            {localRestaurants.map((restuarnt, index) => (
                 <View 
                 key={index}
                 style={{
                    marginTop: 10,
                    padding: 15,
                    backgroundColor: "#fff"
               }}>
                    <RestaurantImage image={restuarnt.image_url}/>
                    <RestaurantInfo name={restuarnt.name} rating={restuarnt.rating}/>
               </View>
            ))}
       </TouchableOpacity>
    
  )
}

const RestaurantImage = (props) => (
     <>
     <Image source={{
          uri: props.image
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

const RestaurantInfo = (props) => (
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
          }}>{props.name}</Text>
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
               <Text >{props.rating}</Text>
          </View>
          
     </View>
);