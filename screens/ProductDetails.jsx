import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import Carousel from "react-native-snap-carousel";
import { Avatar, Button } from "react-native-paper";
import Toast from "react-native-toast-message";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;

export const iconOptions = {
  size: 20,
  style: {
    borderRadius: 5,
    backgroundColor: colors.color5,
    height: 25,
    width: 25,
  },
};
const ProductDetails = ({ route: { params } }) => {
  const name = "Macbook pro";
  const price = 92000;
  const stock = 4;
  const description =
    "MacBook is a term used for a brand of Mac notebook computers that Apple started producing in 2006. The American multinational corporation created MacBook computers when it consolidated its PowerBook and iBook lines during its transition to Intel processor-based products. As of 2013, there are two types of MacBook computers: the base-level MacBook Air and the upper-level MacBook Pro.The MacBook is carved out of solid aluminum, thus giving it a distinctive look and a grayish-white hue. The MacBook Air in particular has a thin and light design. There are two versions of the MacBook Air: the 11-inch, with an 11.6-inch screen; and the 13-inch, with a 13.3-inch screen. Apple splits the MacBook Pro into a 13-inch and a 15-inch, with the latter consisting of a 15.4-inch screen. Each computer has a full-size, backlit 78-key keyboard.";
  const isCarousel = useRef(null);

  const [quantity, setQuantity] = useState(1);

  //array of the objects for the images
  const images = [
    {
      id: "jsdfsdjfskd",
      url: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-9520-t-black-gallery-5.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=676&qlt=100,1&resMode=sharp2&size=676,402&chrss=full",
    },
    {
      id: "akjfjadfjoeijfia",
      url: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
    {
      id: "jiejfiadjfkad",
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    },
  ];

  const incrementQty = () => {
    if (stock <= quantity) return;
    setQuantity((prev) => prev + 1);
  };

  const decrementQty = () => {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  };

//Use of Toast
  const addToCardHandler = () => {
    if (stock === 0)
      return Toast.show({
        type: "error",
        text1: "Out of Stock",
      });
    Toast.show({
      type: "success",
      text1: "Added To Cart",
    });
  };
  return (
    <View
      style={{
        ...defaultStyle,
        padding: 0,
        backgroundColor: colors.color1,
      }}
    >
      {/* Header is here */}
      <Header back={true} />

      {/* Carousel */}
      <Carousel
        //default,tinder
        layout="stack"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        //this will be an arry
        data={images}
        //the item that this carousel has to render
        renderItem={CarouselCardItem}
      />

      {/* Designing Product Detail layout */}
      <View
        style={{
          backgroundColor: colors.color2,
          padding: 35,
          flex: 1,
          marginTop: -380,
          borderTopLeftRadius: 55,
          borderTopRightRadius: 55,
        }}
      >
        <Text
          numberOfLines={2}
          style={{
            fontSize: 25,
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "900",
          }}
        >
          ₹{price}
        </Text>
        <Text
          style={{
            letterSpacing: 1,
            lineHeight: 20,
            marginVertical: 15,
          }}
          numberOfLines={8}
        >
          {description}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 5,
          }}
        >
          <Text
            style={{
              color: colors.color3,
              fontWeight: "100",
            }}
          >
            Quantity
          </Text>

          <View
            style={{
              width: 80,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={decrementQty}>
              <Avatar.Icon icon={"minus"} {...iconOptions} />
            </TouchableOpacity>

            <Text style={style.quantity}>{quantity}</Text>

            <TouchableOpacity onPress={incrementQty}>
              <Avatar.Icon icon={"plus"} {...iconOptions} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.9} onPress={addToCardHandler}>
          <Button icon={"cart"} style={style.btn} textColor={colors.color2}>
            Add To Cart
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// in the carousel, we'll pass the array as data,so we don't have to map on
// this array,carousel itself will map and render this item while providing both of them
const CarouselCardItem = ({ item, index }) => (
  <View style={style.container} key={index}>
    <Image source={{ uri: item.url }} style={style.image} />
  </View>
);

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    width: ITEM_WIDTH,
    paddingVertical: 40,
    height: 380,
  },
  image: {
    width: ITEM_WIDTH,
    resizeMode: "contain",
    height: 250,
  },
  quantity: {
    backgroundColor: colors.color4,
    height: 25,
    width: 25,
    //ye vertically center krne k liye
    textAlignVertical: "center",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.color5,
  },
  btn: {
    backgroundColor: colors.color3,
    borderRadius: 100,
    padding: 5,
    marginVertical: 35,
  },
});
export default ProductDetails;
