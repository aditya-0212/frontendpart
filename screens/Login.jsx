import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle, inputStyling } from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import Footer from "../components/Footer";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputOptions = {
    style: inputStyling,
    mode: "outlined",
    activeOutlineColor: colors.color1,
  };

  const loading = false;

  const submitHandler = () => {
    alert("yeah");
  };
  return (
    <>
      <View style={{...defaultStyle,backgroundColor:colors.color2}} >
        {/* Heading */}

        <View style={{ marginBottom: 20 }}>
          <Text style={styles.heading}>Login</Text>
        </View>
        {/* container */}
        <View style={styles.container}>
          <TextInput
            {...inputOptions}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            {...inputOptions}
            placeholder="Password"
            //this is what this will do,if i type in the bottom,you will see we will have start
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("forgetpassword")}
          >
            <Text style={styles.forget}>Forget Password</Text>
          </TouchableOpacity>

          <Button
            //so we will use this while fetching with backend to make sure that no one do multiple requests at a time.
            loading={loading}
            //email and password empty hone pr login button disable ho jaega
            disabled={email === " " || password === ""}
            textColor={colors.color2}
            style={styles.btn}
            onPress={submitHandler}
          >
            Log In
          </Button>
          <Text style={styles.or}>OR</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("signup")}
          >
            <Text style={styles.link}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/*  Footer */}
      <Footer activeRoute="profile"/>
    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    backgroundColor: colors.color3,
    color: colors.color2,
    padding: 5,
    borderRadius: 5,
  },

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.color3,
    borderRadius: 10,
    justifyContent: "center",
    elevation: 10,
  },

  forget: {
    color: colors.color2,
    marginHorizontal: 20,
    marginVertical: 10,
    alignSelf: "flex-end",
    fontWeight: "100",
  },

  btn: {
    backgroundColor: colors.color1,
    margin: 20,
    padding: 6,
  },

  or: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "100",
    color: colors.color2,
  },

  link: {
    alignSelf: "center",
    color: colors.color2,
    fontSize: 18,
    textTransform: "uppercase",
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
export default Login;
