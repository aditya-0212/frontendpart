import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle, formHeading, inputOptions,formStyles as styles } from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import Footer from "../components/Footer";

const ForgetPassword= ({ navigation }) => {
  const [email, setEmail] = useState("");

 const loading = false;

  const submitHandler = () => {
    alert("yeah");
     //will remove this in future
     navigation.navigate("verify");
  };
  return (
    <>
      <View style={{...defaultStyle,backgroundColor:colors.color2}} >
        {/* Heading */}

        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Forget Password</Text>
        </View>
        {/* container */}
        <View style={styles.container}>

            {/* this is for the email input */}
          <TextInput
            {...inputOptions}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          
          {/* this is for the send OTP */}
          <Button
            //so we will use this while fetching with backend to make sure that no one do multiple requests at a time.
            loading={loading}
            //email and password empty hone pr login button disable ho jaega
            disabled={email === " "}
            textColor={colors.color2}
            style={styles.btn}
            onPress={submitHandler}
          >
            Send OTP
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
      </View>

      {/*  Footer */}
      <Footer activeRoute="profile"/>
    </>
  );
};


export default ForgetPassword;
