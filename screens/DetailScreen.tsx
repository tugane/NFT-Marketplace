import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { RootStackScreenProps } from "../types";
import Layout from "../constants/Layout";
import Spacing from "../constants/Spacing";
import { BlurView } from "expo-blur";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import Font from "../constants/Font";

const IMAGE_HEIGHT = Layout.window.height / 1.4;
const BUTTON_SIZE = Spacing * 7;

const DetailScreen: React.FC<RootStackScreenProps<"DetailScreen">> = ({
  route,
  navigation: { goBack, navigate },
}) => {
  const collection = route.params.collection;

  return (
    <>
      <ImageBackground
        source={collection.image}
        imageStyle={{
          borderBottomLeftRadius: Spacing * 3,
          borderBottomRightRadius: Spacing * 3,
        }}
        style={{
          height: IMAGE_HEIGHT,
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
              flexDirection: "row",
              padding: Spacing * 2,
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
                tint="light"
                intensity={70}
              >
                <Ionicons
                  name="chevron-back"
                  size={Spacing * 4}
                  color={Colors.light}
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
                style={{ marginTop: Spacing / 2.5 }}
                name="heart-outline"
                size={Spacing * 3}
                color={Colors.secondary}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingHorizontal: Spacing * 2,
              flexDirection: "row",
              justifyContent: "space-between",
              bottom: Spacing * 4,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: Spacing * 4.5,
                  color: Colors.light,
                  fontFamily: Font.gilroyBold,
                }}
              >
                {collection.name}
              </Text>
              <Text
                style={{
                  fontSize: Spacing * 2,
                  color: Colors.light,
                  fontFamily: Font.gilroyMedium,
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
                padding: Spacing,
                borderRadius: BUTTON_SIZE / 2,
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ height: "70%", width: "70%" }}
                resizeMode="contain"
                source={collection.currency.image}
              />
            </BlurView>
          </View>
        </SafeAreaView>
      </ImageBackground>
      <View
        style={{
          padding: Spacing * 2,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginBottom: Spacing,
          }}
        >
          <Text
            style={{
              fontSize: Spacing * 2.5,
              color: Colors.light,
              fontFamily: Font.gilroyLight,
            }}
          >
            By
          </Text>
          <Text
            style={{
              fontSize: Spacing * 2.5,
              color: Colors.light,
              fontFamily: Font.gilroyBold,
              marginLeft: Spacing / 2,
            }}
          >
            {collection.author}
          </Text>
        </View>
        <Text
          style={{
            fontSize: Spacing * 1.7,
            color: Colors.light,
            fontFamily: Font.gilroyLight,
          }}
        >
          Highest bid: {collection.hightest_bid} {collection.currency.name}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigate("MakeBidScreen", {
            image: collection.image,
            currency: collection.currency,
          })
        }
      >
        <BlurView
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: Spacing * 2,
            padding: Spacing,
            borderRadius: Spacing * 5,
            overflow: "hidden",
          }}
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
              source={collection.currency.image}
            />
          </View>
          <Text
            style={{
              color: Colors.light,
              fontFamily: Font.gilroyBold,
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
              color={Colors.light}
              name="chevron-forward"
              size={Spacing * 3}
              style={{
                marginHorizontal: -Spacing / 1.2,
                opacity: 0.4,
              }}
            />
            <Ionicons
              color={Colors.light}
              name="chevron-forward"
              size={Spacing * 3}
              style={{
                marginHorizontal: -Spacing / 1.2,
                opacity: 0.8,
              }}
            />
            <Ionicons
              color={Colors.light}
              name="chevron-forward"
              size={Spacing * 3}
              style={{
                marginHorizontal: -Spacing / 1.2,
                opacity: 1,
              }}
            />
          </View>
        </BlurView>
      </TouchableOpacity>
    </>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
