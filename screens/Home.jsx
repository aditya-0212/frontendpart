import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle } from "../styles/styles";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import SearchModal from "../components/SearchModal";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
import Heading from "../components/Heading";

//array of objects for the categories
const categories = [
  { category: "Nice", _id: "adjfjfjas" },
  { category: "Nice2", _id: "asfsdjfjfjas" },
  { category: "Nice3", _id: "adsdfvsdfjfjas" },
  { category: "Nice", _id: "adbsdgfsdjfjas" },
  { category: "Nice2", _id: "asfsdfgdfvfjfjas" },
  { category: "Nice3", _id: "adsdffxvxcxfjfjas" },
];

//array of Products
const products = [
  {
    price: 12345,
    name: "Sample",
    _id: "ajkfjadjfa",
    stock:23,
    images: [
      {
        url: "https://thumbs.dreamstime.com/b/laptop-computer-blank-white-screen-mobile-table-cafe-background-139812612.jpg",
      },
    ],
  },
  {
    price: 12345,
    name: "Mackbook",
    _id: "ajkfjggfdsfsadjfa",
    stock:23,
    images: [
      {
        url: "https://thumbs.dreamstime.com/b/laptop-computer-blank-white-screen-mobile-table-cafe-background-139812612.jpg",
      },
    ],
  },
  {
    price: 12345,
    name: "Mackbook",
    _id: "ajkfjggfdsdfgsfdsfsadjfa",
    stock:23,
    images: [
      {
        url: "https://thumbs.dreamstime.com/b/laptop-computer-blank-white-screen-mobile-table-cafe-background-139812612.jpg",
      },
    ],
  },
  {
    price: 12345,
    name: "Mackbook",
    _id: "ajkfjggfdssdgsdfgfsadjfa",
    stock:23,
    images: [
      {
        url: "https://thumbs.dreamstime.com/b/laptop-computer-blank-white-screen-mobile-table-cafe-background-139812612.jpg",
      },
    ],
  }
];
const Home = () => {
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigation();
  //categoryButtonHandler
  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  //addToCardHandler
  const addToCardHandler = (id) => {
    console.log("Add to Card", id);
  };
  return (
    <>
      {activeSearch && (
        <SearchModal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}

      <View style={defaultStyle}>
        {/* {Header} */}
        <Header />

        <View
          style={{
            paddingTop: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Heading Row*/}
         <Heading text1="Our" text2="Products"/>

          {/* Search Bar */}
          <View>
            {/* so whatever the previous is, it is the reverse of the previous.is it because initially thi was false
            so currently pressing on the first time it will turn the acive cells to true.and when the active search is true,pressing it again will make it false. */}
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                icon={"magnify"}
                size={50}
                color={"gray"}
                style={{ backgroundColor: colors.color2, elevation: 12 }}
              />
            </TouchableOpacity>
          </View>
        </View>

{/* Categories */}
        <View
          style={{
            flexDirection: "row",
            height: 80,
          }}
        >
          <ScrollView
            horizontal
            contentContainerStyle={{ alignItems: "center" }}
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor:
                    category === item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}
                onPress={() => categoryButtonHandler(item._id)}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: category === item._id ? colors.color2 : "gray",
                  }}
                >
                  {item.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>

        {/* Products */}
        <View style={{ flex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {products.map((item, index) => (
              <ProductCard
                stock={item.stock}
                name={item.name}
                price={item.price}
                image={item.images[0]?.url}
                addToCardHandler={addToCardHandler}
                id={item._id}
                key={item._id}
                i={index}
                navigate={navigate}
              />
            ))}
          </ScrollView>
        </View>
      </View>

      {/* Footer */}
      {/* we pass home because this foooter is in the home file */}
      <Footer activeRoute={"home"}/>
    </>
  );
};

export default Home;
