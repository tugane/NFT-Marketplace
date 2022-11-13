import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import Layout from "../constants/Layout";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

import Colors from "../constants/Colors";
import Spacing from "../constants/Spacing";
import Font from "../constants/Font";

type DetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "DetailScreen"
>;

const BUTTON_SIZE = Spacing * 7;
const IMAGE_HEIGHT = Layout.window.height / 1.4;

const DetailScreen: React.FC<DetailScreenProps> = ({
  navigation: { goBack, navigate },
  route,
}) => {
  const collection = route.params.collection;

  return (
    <>
      <ImageBackground
        source={collection.image}
        style={{
          height: IMAGE_HEIGHT,
          width: "100%",
          borderBottomLeftRadius: Spacing * 3,
          borderBottomRightRadius: Spacing * 3,
          overflow: "hidden",
        }}
      >
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              paddingHorizontal: Spacing * 2,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={() => goBack()}>
              <BlurView
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
                  name="chevron-back"
                  color={Colors.text}
                />
              </BlurView>
            </TouchableOpacity>
            <TouchableOpacity
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
              <Ionicons
                style={{
                  marginTop: Spacing / 2,
                }}
                size={Spacing * 4}
                name="heart-outline"
                color={Colors.secondary}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingHorizontal: Spacing * 2,
              flexDirection: "row",
              justifyContent: "space-between",
              bottom: Spacing * 5,
            }}
          >
            <View>
              <Text
                style={{
                  color: Colors.text,
                  fontFamily: Font.gilroyBold,
                  fontSize: Spacing * 5,
                }}
              >
                {collection.name}
              </Text>
              <Text
                style={{
                  color: Colors.text,
                  fontFamily: Font.gilroyMedium,
                  fontSize: Spacing * 2,
                }}
              >
                {collection.handle}
              </Text>
            </View>
            <BlurView
              tint="light"
              intensity={70}
              style={{
                height: BUTTON_SIZE,
                width: BUTTON_SIZE,
                borderRadius: BUTTON_SIZE / 2,
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  width: "50%",
                  height: "50%",
                }}
                resizeMode="contain"
                source={collection.currency.image}
              />
            </BlurView>
          </View>
        </SafeAreaView>
      </ImageBackground>

      <View
        style={{
          paddingHorizontal: Spacing * 2,
          paddingVertical: Spacing * 3,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              color: Colors.text,
              fontSize: Spacing * 3,
              fontFamily: Font.gilroyLight,
            }}
          >
            By
          </Text>
          <Text
            style={{
              color: Colors.text,
              fontFamily: Font.gilroyBold,
              marginLeft: Spacing / 2,
              fontSize: Spacing * 3,
            }}
          >
            {collection.author}
          </Text>
        </View>
        <Text
          style={{
            color: Colors.text,
            fontSize: Spacing * 2,
            fontFamily: Font.gilroyLight,
            marginTop: Spacing,
          }}
        >
          Highest Bid: {collection.hightest_bid}
        </Text>

        <TouchableOpacity
          onPress={() =>
            navigate("MakeBidScreen", {
              image: collection.image,
              currency: collection.currency,
            })
          }
          style={{
            marginTop: Spacing * 4,
          }}
        >
          <BlurView
            style={{
              padding: Spacing,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: Spacing * 5,
              overflow: "hidden",
            }}
          >
            <BlurView
              tint="light"
              intensity={70}
              style={{
                height: BUTTON_SIZE,
                width: BUTTON_SIZE,
                borderRadius: BUTTON_SIZE / 2,
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  width: "50%",
                  height: "50%",
                }}
                resizeMode="contain"
                source={collection.currency.image}
              />
            </BlurView>
            <Text
              style={{
                fontFamily: Font.gilroyMedium,
                color: Colors.text,
                fontSize: Spacing * 1.6,
              }}
            >
              Make Collection Bid
            </Text>
            <View
              style={{
                flexDirection: "row",
                width: Spacing * 7,
              }}
            >
              <Ionicons
                name="chevron-forward"
                size={Spacing * 4}
                color={Colors.text}
                style={{
                  marginLeft: -Spacing * 2,
                  opacity: 0.2,
                }}
              />
              <Ionicons
                name="chevron-forward"
                size={Spacing * 4}
                color={Colors.text}
                style={{
                  marginLeft: -Spacing * 2,
                  opacity: 0.6,
                }}
              />
              <Ionicons
                name="chevron-forward"
                size={Spacing * 4}
                color={Colors.text}
                style={{
                  marginLeft: -Spacing * 2,
                }}
              />
            </View>
          </BlurView>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
