import { View, Text,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle, formHeading, inputOptions,formStyles as styles} from "../styles/styles";
import { Button, TextInput } from "react-native-paper";
import Footer from "../components/Footer";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loading = false;

  const submitHandler = () => {
    alert("yeah");
   };
  return (
    <>
      <View style={{...defaultStyle,backgroundColor:colors.color2}} >
        {/* Heading */}

        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Login</Text>
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


export default Login;
