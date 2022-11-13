import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { RootStackScreenProps } from "../types";
import { ImageBackground } from "react-native";
import { BlurView } from "expo-blur";
import { user } from "../data";
import Spacing from "../constants/Spacing";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import Font from "../constants/Font";

const BUTTON_SIZE = Spacing * 7;

const MakeBidScreen: React.FC<RootStackScreenProps<"MakeBidScreen">> = ({
  route,
  navigation: { goBack },
}) => {
  const { currency, image } = route.params;
  return (
    <ImageBackground
      source={image}
      style={{
        flex: 1,
      }}
    >
      <BlurView
        intensity={100}
        style={{
          flex: 1,
        }}
      >
        <SafeAreaView
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: Spacing * 2,
            }}
          >
            <View style={{ flexDirection: "row", position: "relative" }}>
              <TouchableOpacity
                style={{
                  position: "absolute",
                  zIndex: 1,
                }}
                onPress={() => goBack()}
              >
                <BlurView
                  style={{
                    height: BUTTON_SIZE,
                    width: BUTTON_SIZE,
                    borderRadius: BUTTON_SIZE / 2,
                    overflow: "hidden",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  tint="light"
                  intensity={70}
                >
                  <Ionicons
                    name="close"
                    size={Spacing * 4}
                    color={Colors.light}
                  />
                </BlurView>
              </TouchableOpacity>
              <Image
                source={image}
                style={{
                  marginLeft: BUTTON_SIZE - Spacing * 2,
                  width: BUTTON_SIZE,
                  height: BUTTON_SIZE,
                  borderRadius: BUTTON_SIZE / 2,
                }}
              />
            </View>
            <TouchableOpacity>
              <Image
                source={user.image}
                style={{
                  width: BUTTON_SIZE,
                  height: BUTTON_SIZE,
                  borderRadius: BUTTON_SIZE / 2,
                }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              paddingHorizontal: Spacing * 2,
              paddingVertical: Spacing * 4,
              flex: 1,
            }}
          >
            <Text
              style={{
                fontSize: Spacing * 4.5,
                color: Colors.light,
                fontFamily: Font.gilroyBold,
              }}
            >
              Make
            </Text>
            <Text
              style={{
                fontSize: Spacing * 4.5,
                color: Colors.light,
                fontFamily: Font.gilroyBold,
              }}
            >
              collection bid
            </Text>

            <BlurView
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: Spacing,
                borderRadius: Spacing * 5,
                overflow: "hidden",
                marginVertical: Spacing * 3,
              }}
              intensity={70}
              tint="light"
            >
              <View
                style={{
                  height: BUTTON_SIZE,
                  width: BUTTON_SIZE,
                  padding: Spacing,
                  borderRadius: BUTTON_SIZE / 2,
                  overflow: "hidden",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: Colors.light,
                }}
              >
                <Image
                  style={{ height: "70%", width: "70%" }}
                  resizeMode="contain"
                  source={currency.image}
                />
              </View>
              <TextInput
                keyboardType="numeric"
                style={{
                  fontSize: Spacing * 5,
                  color: Colors.text,
                  fontFamily: Font.gilroyBold,
                  paddingHorizontal: Spacing * 3,
                  flex: 1,
                }}
              />
            </BlurView>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.light,
                paddingHorizontal: Spacing * 4,
                paddingVertical: Spacing * 3,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: Spacing * 5,
              }}
            >
              <Text
                style={{
                  fontSize: Spacing * 2,
                  color: Colors.darkText,
                  fontFamily: Font.gilroyBold,
                }}
              >
                Make bid
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </BlurView>
    </ImageBackground>
  );
};

export default MakeBidScreen;

const styles = StyleSheet.create({});
