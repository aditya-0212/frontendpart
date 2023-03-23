import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle, formHeading } from "../styles/styles";
import { Avatar, Button } from "react-native-paper";
import ButtonBox from "../components/ButtonBox";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
const user = {
  name: "Aditya Choubisa",
  email: "adityachoubisa02@gmail.com",
};

const loading = false;

//Profile here
const Profile = ({navigation}) => {
  const [avatar, setAvatar] = useState(null);

  const logoutHandler = () =>{
      console.log("Signing out");
  }
  //navigateHandler here
  const navigateHandler = (text) => {
    switch (text) {
      case "Admin":
        navigation.navigate("adminpanel");
        break;
      case "Orders":
        navigation.navigate("orders");
        break;
      case "Profile":
        navigation.navigate("updateprofile");
        break;
      case "Password":
        navigation.navigate("changepassword");
        break;
      case "Sign Out":
        logoutHandler();
        break;

      default:
      case "Orders":
        navigation.navigate("orders");
        break;
    }
  };
  
  return (
      <>
    <View style={defaultStyle}>
      {/* Heading */}
      <View style={{ marginBottom: 20 }}>
        <Text style={formHeading}>Profile</Text>
      </View>

      {/* Loading */}
      {
          loading ? <Loader/> : (
              <>
            <View style={styles.container}>
            <Avatar.Image
              source={{
                uri: avatar,
              }}
              size={100}
              style={{ backgroundColor: colors.color1 }}
            />
            {/* remember in the register page,I told u that we will use camera but we wont't give any exra parameter. 
                  here we will pass update profile because the text will be change photo.
                  if i say where you will see change photo and whenever i click i will be redirected to the camera
                  and somehow we will create some conditions for this variable ("updateprofile") 
                    basically that if the update profile then after clicking the picture,we should be redirect back
                    to this profile screen because update profile is true and default will be the register or sign up page.
     */}
    
            <TouchableOpacity
              onPress={() => navigation.navigate("camera", { updateProfile: true })}
            >
              <Button textColor={colors.color1}>Change Photo</Button>
            </TouchableOpacity>
    
            <Text style={styles.name}>{user?.name}</Text>
            <Text
              style={{
                fontWeight: "300",
                color: colors.color2,
              }}
            >
              {user?.email}
            </Text>
           </View>
    
          {/* ButtonBox here */}
          <View>
              <View
                style={{
                  flexDirection: "row",
                  margin: 10,
                  justifyContent: "space-between",
                }}
              >
                <ButtonBox
                  handler={navigateHandler}
                  text={"Orders"}
                  icon={"format-list-bulleted-square"}
                />
                <ButtonBox
                  handler={navigateHandler}
                  icon={"view-dashboard"}
                  text={"Admin"}
                  reverse={true}
                />
    
                <ButtonBox
                  handler={navigateHandler}
                  text={"Profile"}
                  icon={"pencil"}
                />
              </View>
    
              <View
                style={{
                  flexDirection: "row",
                  margin: 10,
                  justifyContent: "space-evenly",
                }}
              >
                <ButtonBox
                  handler={navigateHandler}
                  text={"Password"}
                  icon={"pencil"}
                />
                <ButtonBox
                  handler={navigateHandler}
                  text={"Sign Out"}
                  icon={"exit-to-app"}
                />
              </View>
            </View>
            </>
          )
          
      }
    </View>

    {/*  Footer here */}
    <Footer/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 7,
    backgroundColor: colors.color3,
    padding: 30,
    borderRadius: 10,
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    color: colors.color2,
  },
});
export default Profile;
