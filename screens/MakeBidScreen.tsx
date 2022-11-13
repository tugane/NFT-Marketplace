import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { BlurView } from "expo-blur";
import Spacing from "../constants/Spacing";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { user } from "../data";
import Font from "../constants/Font";

type MakeBidScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "MakeBidScreen"
>;

const BUTTON_SIZE = Spacing * 7;

const MakeBidScreen: React.FC<MakeBidScreenProps> = ({
  navigation: { goBack },
  route: {
    params: { image, currency },
  },
}) => {
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
        <SafeAreaView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: Spacing * 2,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  position: "absolute",
                  zIndex: 1,
                }}
                onPress={() => goBack()}
              >
                <BlurView
                  tint="light"
                  intensity={80}
                  style={{
                    height: BUTTON_SIZE,
                    width: BUTTON_SIZE,
                    borderRadius: BUTTON_SIZE / 2,
                    overflow: "hidden",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    size={Spacing * 4}
                    name="close"
                    color={Colors.text}
                  />
                </BlurView>
              </TouchableOpacity>
              <View
                style={{
                  height: BUTTON_SIZE,
                  width: BUTTON_SIZE,
                  borderRadius: BUTTON_SIZE / 2,
                  overflow: "hidden",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: Colors.light,
                  marginLeft: BUTTON_SIZE - Spacing * 2,
                }}
              >
                <Image
                  source={image}
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                />
              </View>
            </View>

            <View
              style={{
                height: BUTTON_SIZE,
                width: BUTTON_SIZE,
                borderRadius: BUTTON_SIZE / 2,
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: Colors.light,
              }}
            >
              <Image
                source={user.image}
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: Spacing * 2,
              marginVertical: Spacing * 4,
            }}
          >
            <Text
              style={{
                color: Colors.text,
                fontSize: Spacing * 5,
                fontFamily: Font.gilroyBold,
              }}
            >
              Make
            </Text>
            <Text
              style={{
                color: Colors.text,
                fontSize: Spacing * 5,
                fontFamily: Font.gilroyBold,
              }}
            >
              collection bid
            </Text>

            <View
              style={{
                marginVertical: Spacing * 4,
              }}
            >
              <BlurView
                tint="light"
                style={{
                  padding: Spacing,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: Spacing * 5,
                  overflow: "hidden",
                }}
              >
                <View
                  style={{
                    height: BUTTON_SIZE,
                    width: BUTTON_SIZE,
                    borderRadius: BUTTON_SIZE / 2,
                    overflow: "hidden",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: Colors.light,
                  }}
                >
                  <Image
                    style={{
                      width: "50%",
                      height: "50%",
                    }}
                    resizeMode="contain"
                    source={currency.image}
                  />
                </View>
                <TextInput
                  keyboardType="numeric"
                  style={{
                    flex: 1,
                    paddingHorizontal: Spacing * 2,
                    fontSize: Spacing * 5,
                    color: Colors.text,
                    fontFamily: Font.gilroyBold,
                  }}
                />
              </BlurView>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.light,
                padding: Spacing * 3,
                borderRadius: Spacing * 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: Spacing * 2,
                  color: Colors.darkText,
                  fontFamily: Font.gilroyMedium,
                }}
              >
                Make Bid
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
