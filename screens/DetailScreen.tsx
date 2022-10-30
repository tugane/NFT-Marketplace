import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RootStackScreenProps } from "../types";

const DetailScreen: React.FC<RootStackScreenProps<"DetailScreen">> = ({
  route,
}) => {
  const { nft } = route.params;
  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
