import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { colors, defaultStyle, formHeading } from '../styles/styles'
import Loader from '../components/Loader'
import { Headline } from 'react-native-paper'
import OrderItem from '../components/OrderItem'

//array of objects for the array
const orders = [
    {
        _id:"fnaksnjfka",
        shippingInfo:{
            address:"73 bhinder",
            city:"Newyork",
            country:"india",
            pinCode:3455,
        },
        createdAt:"12-3-2023T2343",
        orderStatus:"Processing",
        paymentMethod:"COD",
        totalAmount:20000,
    },
    {
        _id:"fnakgdgsdfsnjfka",
        shippingInfo:{
            address:"73 bhinder",
            city:"Newyork",
            country:"india",
            pinCode:3455,
        },
        createdAt:"12-3-2023T2343",
        orderStatus:"Processing",
        paymentMethod:"ONLINE",
        totalAmount:40000,
    },
    {
        _id:"fnakssdfvsdnjfka",
        shippingInfo:{
            address:"73 bhinder",
            city:"Newyork",
            country:"india",
            pinCode:3455,
        },
        createdAt:"12-3-2023T2343",
        orderStatus:"Processing",
        paymentMethod:"COD",
        totalAmount:20000,
    },
    {
        _id:"fnatrfesdfsnjfka",
        shippingInfo:{
            address:"73 bhinder",
            city:"Newyork",
            country:"india",
            pinCode:3455,
        },
        createdAt:"12-3-2023T2343",
        orderStatus:"Processing",
        paymentMethod:"ONLINE",
        totalAmount:40000,
    },
]
const Orders = () => {
    
    const loading = false;
  return (
    <View 
    style={{
        ...defaultStyle,
        backgroundColor: colors.color5,
      }}>
     
     {/* Header */}
     <Header back={true} />

     {/* Heading */}
     <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Orders</Text>
      </View>

      {/* Loader */}
      {loading ? (
        <Loader />
      ) : 
      (
        <View
          style={{
            padding: 10,
            flex: 1,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {orders.length > 0 ? (
              orders.map((item, index) => (
                <OrderItem
                  key={item._id}
                  id={item._id}
                  i={index}
                  price={item.totalAmount}
                  status={item.orderStatus}
                  paymentMethod={item.paymentMethod}
                  orderedOn={item.createdAt.split("T")[0]}
                  address={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country} ${item.shippingInfo.pinCode}`}
                 
                  loading={true}
                />
              ))
           
            ) : (
              <Headline style={{ textAlign: "center" }}>No Orders Yet</Headline>
            )}
          </ScrollView>
        </View>
      )}
      
    </View>
  )
}

export default Orders