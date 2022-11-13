import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Spacing from "../constants/Spacing";
import Colors from "../constants/Colors";
import {
  categories,
  categoryInterface,
  collection,
  collectionInterface,
  user,
} from "../data";
import Font from "../constants/Font";
import { BlurView } from "expo-blur";
import Layout from "../constants/Layout";

const NFT_CARD_HEIGHT = Spacing * 48;
const NFT_CARD_WIDTH = Layout.window.width - Spacing * 4;

const HomeScreen: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<
    categoryInterface | undefined
  >(undefined);
  const [collectionList, setCollectionList] = useState<collectionInterface[]>(
    []
  );

  useEffect(() => {
    setCollectionList(
      collection.filter(
        (collection) => collection.category.id === activeCategory?.id
      )
    );
  }, [activeCategory]);

  useEffect(() => {
    setActiveCategory(categories[0]);
  }, []);

  return (
    <SafeAreaView>
      <View
        style={{
          padding: Spacing * 2,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="dots-grid"
            size={Spacing * 4}
            color={Colors.text}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: Spacing * 2,
            color: Colors.text,
            fontFamily: Font.gilroyBold,
          }}
        >
          {user.name}
        </Text>
        <TouchableOpacity>
          <Image
            source={user.image}
            style={{
              width: Spacing * 4,
              height: Spacing * 4,
              borderRadius: Spacing * 2,
            }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          backgroundColor: Colors.lightBackground,
          paddingRight: Spacing * 10,
        }}
        contentContainerStyle={{
          paddingVertical: Spacing * 2,
          flexDirection: "row",
          alignItems: "center",
          paddingRight: Spacing * 5,
        }}
      >
        {categories.map((category) => (
          <TouchableOpacity
            onPress={() => setActiveCategory(category)}
            style={{ marginHorizontal: Spacing * 2 }}
            key={category.id}
          >
            <Text
              style={[
                {
                  fontSize: Spacing * 2,
                  color: Colors.lightText,
                  fontFamily: Font.gilroyRegular,
                },

                activeCategory?.id === category.id && {
                  color: Colors.darkText,
                  fontFamily: Font.gilroyBold,
                  fontSize: Spacing * 3,
                },
              ]}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: Spacing * 2,
        }}
      >
        <Text
          style={{
            fontSize: Spacing * 2,
            color: Colors.text,
            fontFamily: Font.gilroyMedium,
          }}
        >
          {activeCategory?.name} collections
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: Spacing * 1.7,
              color: Colors.lightText,
              fontFamily: Font.gilroyRegular,
            }}
          >
            The week
          </Text>
          <MaterialCommunityIcons
            name="chevron-down"
            color={Colors.lightText}
            size={Spacing * 3}
          />
        </View>
      </View>
      <View>
        {collectionList.map((collection) => (
          <View
            style={{
              paddingHorizontal: Spacing * 2,
              position: "relative",
              alignItems: "center",
            }}
            key={collection.id}
          >
            {collection.nfts.map((nft, index) => (
              <View
                key={nft.id}
                style={{
                  zIndex: Spacing - index,
                  width: NFT_CARD_WIDTH,
                  height: NFT_CARD_HEIGHT,
                  position: "absolute",
                  shadowColor: "#000000",
                  shadowOffset: {
                    width: 0,
                    height: 8,
                  },
                  shadowOpacity: 0.4,
                  shadowRadius: 3.3,
                  transform: [
                    {
                      translateY: index * 10,
                    },
                    { scaleX: 1 - index / 10 },
                  ],
                }}
              >
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: Spacing * 3,
                  }}
                  source={nft.image}
                />
              </View>
            ))}
            <View
              style={{
                position: "absolute",
                zIndex: Spacing,
                top: NFT_CARD_HEIGHT - Spacing * 10,
                width: NFT_CARD_WIDTH - Spacing * 3,
                borderRadius: Spacing * 2,
                overflow: "hidden",
              }}
            >
              <BlurView
                intensity={40}
                tint="dark"
                style={{
                  padding: Spacing / 2,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    padding: Spacing,
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: Spacing * 2,
                      color: Colors.text,
                      fontFamily: Font.gilroyBold,
                    }}
                  >
                    {collection.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: Spacing * 1.5,
                      color: Colors.text,
                      fontFamily: Font.gilroyLight,
                      marginTop: Spacing / 2,
                    }}
                  >
                    @ {collection.author}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.secondary,
                    padding: Spacing,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: Spacing * 2,
                    paddingHorizontal: Spacing * 2,
                  }}
                >
                  <Text
                    style={{
                      fontSize: Spacing * 2,
                      color: Colors.text,
                      fontFamily: Font.gilroyBold,
                    }}
                  >
                    View Collection
                  </Text>
                </TouchableOpacity>
              </BlurView>
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
