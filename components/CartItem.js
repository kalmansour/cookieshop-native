import { ListItem, Text, Body } from "native-base";
import React from "react";

//Styles
import { TotalPrice } from "../styles";

const CartItem = ({ item }) => {
  return (
    <ListItem>
      <Body>
        <Text>{item.name}</Text>
        <Text note>
          {item.price} KWD x {item.quantity}
        </Text>
        <TotalPrice>{item.price * item.quantity} KWD</TotalPrice>
      </Body>
    </ListItem>
  );
};

export default CartItem;
