import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import { useNavigation } from "@react-navigation/native";

//array of objects for the cartItems
export const cartItems = [
  {
    name: "Mackbook",
    image:
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-9520-t-black-gallery-5.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=676&qlt=100,1&resMode=sharp2&size=676,402&chrss=full",
    product: "sjdkfjksjf",
    stock: 3,
    price: 49999,
    quantity: 2,
  },
  {
    name: "Puma Shoes",
    image: "https://images.meesho.com/images/products/184349512/ep8yk_512.jpg",
    product: "sjdfjd",
    stock: 5,
    price: 9999,
    quantity: 5,
  },
];
const Cart = () => {

    const navigate = useNavigation();
  const incrementHandler = (id, qty, stock) => {
    console.log("Incresing", id, qty, stock);
  };

  const decrementHandler = (id, qty) => {
    console.log("Decresing", id, qty);
  };
  return (
    <View
      style={{
        ...defaultStyle,
        padding: 0,
      }}
    >
      {/* Header */}
      <Header back={true} emptyCart={true} />

      {/* Heading */}
      <Heading
        text1="Shopping"
        text2="Cart"
        containerStyle={{ paddingTop: 70, marginLeft: 35 }}
      />

      {/* this is container for all the cart items */}
      <View
        style={{
          paddingVertical: 20,
          //it will fill up all the space
          flex: 1,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItems.map((i, index) => (
            <CartItem
              key={i.product}
              id={i.product}
              name={i.name}
              stock={i.stock}
              amount={i.price}
              imgSrc={i.image}
              index={index}
              qty={i.quantity}
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
            />
          ))}
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text>5 Items</Text>
        <Text> ₹5</Text>
      </View>

      <TouchableOpacity
 //if card items or length is more than zero, then only we will allow to navigate to confirm.     
        onPress={
          cartItems.length > 0 ? () => navigate.navigate("confirmorder") : null
        }
      >
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 30,
          }}
          icon={"cart"}
          textColor={colors.color2}
        >
          Checkout
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
