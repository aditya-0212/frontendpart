import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../styles/styles";
import { Button } from "react-native-paper";

const OrderItem = ({
  id,
  price,
  address,
  orderedOn,
  status,
  paymentMethod,
  //we need this updateHandler function if  admin = true,because only admin can use this function
  //so we not need to pass updateHandler form Order.jsx
  updateHandler,
  admin = false,
  loading,
  i = 0,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: i % 2 === 0 ? colors.color2 : colors.color3,
      }}
    >
      <Text
        style={{
          ...styles.text,
          backgroundColor: i % 2 === 0 ? colors.color3 : colors.color1,
        }}
      >
        ID - #{id}
      </Text>

      <TextBox title={"Address"} value={address} i={i} />
      <TextBox title={"Ordered On"} value={orderedOn} i={i} />
      <TextBox title={"Price"} value={price} i={i} />
      <TextBox title={"Status"} value={status} i={i} />
      <TextBox title={"Payment Method"} value={paymentMethod} i={i} />

      {admin && (
          //this is basically to update the status,If i click here in future this well be shipped.and if 
        //   this is shipped,if i click on the update, then this will be deliverd.
        <Button
          icon={"update"}

          //for mode-text,contained-tonal,elevated,outline,
          mode={"contained"}
          textColor={i % 2 === 0 ? colors.color2 : colors.color3}
          style={{
            width: 120,
            alignSelf: "center",
            marginTop: 10,
            backgroundColor: i % 2 === 0 ? colors.color3 : colors.color2,
          }}
          onPress={() => updateHandler(id)}
          loading={loading}
          disabled={loading}
        >
          Update
        </Button>
      )}
    </View>
  );
};

const TextBox = ({ title, value, i }) => (
  <Text
    style={{
      marginVertical: 6,
      color: i % 2 === 0 ? colors.color3 : colors.color2,
    }}
  >
    <Text style={{ fontWeight: "900" }}>{title} - </Text>
    {title === "Price" ? "₹" : ""}
    {value}
  </Text>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 5,
  },
  text: {
    color: colors.color2,
    fontSize: 16,
    fontWeight: "900",
    marginHorizontal: -20,
    marginTop: -20,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});

export default OrderItem;