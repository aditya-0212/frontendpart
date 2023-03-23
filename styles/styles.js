import { StyleSheet, Platform, StatusBar } from "react-native";

export const colors = {
  color1: "#c70049",
  color1_light: "rgba(227,25,99,1)",
  color1_light2: "rgba(199,0,73,0.8)",
  color2: "white",
  color3: "rgb(45,45,45)",
  color4: "transparent",
  color5: "#f2f2f2",
  color6: "#f7f7f7",
};

//sometimes i have used this style to create and sometimes i haven't used anything.So what's the meaning of this
// is nothing,it's just that using a stylesheet.create method will give me a suggeston that i can use 
// verticalmargin. here (whithout stylesshet) i have to write everything on my own.
export const defaultStyle = StyleSheet.create({
  padding: 35,
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  flex:1,
  backgroundColor: colors.color2,
});

export const inputStyling = StyleSheet.create({
  height: 50,
  backgroundColor: colors.color2,
  marginVertical: 10,
  marginHorizontal: 20,
});

export const formHeading = {
  fontSize: 25,
  fontWeight: "500",
  textAlign: "center",
  backgroundColor: colors.color3,
  color: colors.color2,
  padding: 5,
  borderRadius: 5,
};

export const inputOptions = {
  style: inputStyling,
  mode: "outlined",
  activeOutlineColor: colors.color1,
};

export const formStyles = StyleSheet.create({
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

export const defaultImg = "https://media.istockphoto.com/id/871752462/vector/default-gray-placeholder-man.jpg?s=612x612&w=0&k=20&c=4aUt99MQYO4dyo-rPImH2kszYe1EcuROC6f2iMQmn8o=";