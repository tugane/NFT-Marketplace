import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RootStackScreenProps } from "../types";

const MakeBidScreen: React.FC<RootStackScreenProps<"MakeBidScreen">> = ({
  route,
}) => {
  const { currency, image } = route.params;
  return (
    <View>
      <Text>MakeBidScreen</Text>
    </View>
  );
};

export default MakeBidScreen;

const styles = StyleSheet.create({});
