import { SafeAreaView, StyleSheet, Text } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

const HomeScreen = () => {
  const { colors } = useTheme();
  return (
    <SafeAreaView>
      <Text
        style={{
          color: colors.text,
        }}
      >
        HomeScreen
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
