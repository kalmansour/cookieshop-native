import React from "react";
import { observer } from "mobx-react";
import { List, Spinner, Content } from "native-base";
// import { Icon } from "native-base";

//Stores
import bakeryStore from "../stores/bakeryStore";

//Components
import BakeryItem from "./BakeryItem";

const BakeryList = ({ navigation }) => {
  if (bakeryStore.loading) return <Spinner />;

  const bakeryList = bakeryStore.bakeries.map((bakery) => (
    <BakeryItem bakery={bakery} key={bakery.id} navigation={navigation} />
  ));
  return (
    <>
      <Content>
        <List>{bakeryList}</List>
      </Content>
      {/* <Icon
        title="Back"
        type="Entypo"
        name="home"
        onClick={() => this.props.navigation.goBack()}
      /> */}
    </>
  );
};

export default observer(BakeryList);
