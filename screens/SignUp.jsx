import {ScrollView} from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  formStyles as styles,
  defaultImg,
} from "../styles/styles";
import { Avatar, Button, TextInput } from "react-native-paper";
import Footer from "../components/Footer";

const SignUp = ({ navigation }) => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");

  const loading = false;

  const disableBtn = !name || !email || !password || !address || !city || !country || !pinCode;
  const submitHandler = () => {
    alert("yeah");
    //will remove this in future
    navigation.navigate("verify");
  };
  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>
        {/* Heading */}

        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Sign Up</Text>
        </View>
        {/* container */}

        <ScrollView showsVerticalScrollIndicator={false}
        style={{
            padding:20,
            elevation:10,
            borderRadius:10,
            backgroundColor:colors.color3,
        }}
        >
          <View style={{minHeight:900}}>
              <Avatar.Image
              style={{
                  alignSelf:"center",
                  backgroundColor:colors.color1 }}
                  size={80}
                  source={{
                      uri:avatar?avatar:defaultImg
                 }}
              />

              <TouchableOpacity onPress={()=>navigation.navigate("camera")}>
                  <Button textColor={colors.color1}>Change Photo</Button>
              </TouchableOpacity>

              <TextInput
              {...inputOptions}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            {/* this is for the email input */}
            <TextInput
              {...inputOptions}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />

<TextInput
              {...inputOptions}
              secureTextEntry={true}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
            />

<TextInput
              {...inputOptions}
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
            />

<TextInput
              {...inputOptions}
              placeholder="City"
              value={city}
              onChangeText={setCity}
            />

<TextInput
              {...inputOptions}
              placeholder="Country"
              value={country}
              onChangeText={setCountry}
            />

<TextInput
              {...inputOptions}
              placeholder="Pin Code"
              value={pinCode}
              onChangeText={setPinCode}
            />
            {/* this is for the send OTP */}
            <Button
              //so we will use this while fetching with backend to make sure that no one do multiple requests at a time.
              loading={loading}
              //email and password empty hone pr login button disable ho jaega
              disabled={disableBtn}
              textColor={colors.color2}
              style={styles.btn}
              onPress={submitHandler}
            >
              Sign Up
            </Button>

            {/* this is for OR */}
            <Text style={styles.or}>OR</Text>

            {/* This is for login */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("login")}
            >
              <Text style={styles.link}>Log In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      {/*  Footer */}
      <Footer activeRoute="profile" />
    </>
  );
};

export default SignUp;
