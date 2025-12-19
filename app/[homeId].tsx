import { ITEM_HEIGHT } from "@/constants";
import Colors from "@/constants/Colors";
import Font from "@/constants/Font";
import FontSize from "@/constants/FontSize";
import Spacing from "@/constants/Spacing";
import { homes } from "@/data";
import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import { BlurView } from "expo-blur";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeDetails() {
  const { homeId } = useLocalSearchParams();
  console.log(homeId);
  if (!homeId) return null;
  const currentHome = homes.find((home) => home.id.toString() === homeId);
  console.log(currentHome);
  return (
    <>
      <ImageBackground
        source={currentHome?.image}
        style={{
          height: ITEM_HEIGHT,
        }}
      >
        <SafeAreaView>
          <View
            style={{
              paddingHorizontal: Spacing * 2,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                height: Spacing * 6,
                width: Spacing * 6,
                overflow: "hidden",
                borderRadius: Spacing * 5,
              }}
              onPress={() => router.back()}
            >
              <BlurView
                style={{
                  height: "100%",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                tint="light"
              >
                <Ionicons name="chevron-back" size={24} color="#fff" />
              </BlurView>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: Spacing * 6,
                width: Spacing * 6,
                overflow: "hidden",
                borderRadius: Spacing * 5,
              }}
            >
              <BlurView
                style={{
                  height: "100%",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                tint="light"
              >
                <Feather name="box" size={24} color="#fff" />
              </BlurView>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
      <View
        style={{
          paddingHorizontal: Spacing,
          paddingVertical: Spacing * 3,
          borderRadius: Spacing * 4,
          marginTop: -Spacing * 4,
          backgroundColor: Colors.backgroundColor,
          flex: 1,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: Colors.iconBackgroundColor,
            height: Spacing * 8,
            width: Spacing * 8,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: Spacing * 5,
            borderColor: Colors.backgroundColor,
            borderWidth: Spacing,
            position: "absolute",
            right: Spacing * 4,
            top: -Spacing * 3,
          }}
        >
          <Ionicons
            name="bookmark-outline"
            size={24}
            color={Colors.titleColor}
          />
        </TouchableOpacity>
        <View
          style={{
            paddingHorizontal: Spacing * 2,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-bold"],
              fontSize: FontSize.xLarge,
              width: "70%",
            }}
          >
            {currentHome?.title}
          </Text>
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              fontSize: FontSize.medium,
              marginVertical: Spacing,
              color: Colors.subTitleColor,
            }}
          >
            {currentHome?.location}
          </Text>
          <Text
            style={{
              fontFamily: Font["poppins-regular"],
              fontSize: FontSize.medium,
              color: Colors.subTitleColor,
            }}
          >
            {currentHome?.description}
          </Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={{
              marginVertical: Spacing * 3,
            }}
          >
            {currentHome?.amenities.map((amenty) => (
              <View
                style={{
                  flexDirection: "row",
                  paddingVertical: Spacing * 2,
                  paddingHorizontal: Spacing * 2,
                  backgroundColor: Colors.iconBackgroundColor,
                  borderRadius: Spacing * 2,
                  marginRight: Spacing * 1.5,
                  alignItems: "center",
                }}
                key={amenty.id}
              >
                <Ionicons
                  name={amenty.icon}
                  size={24}
                  color={Colors.titleColor}
                />
                <Text
                  style={{
                    fontFamily: Font["poppins-regular"],
                    marginLeft: Spacing,
                  }}
                >
                  {amenty.name}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          position: "absolute",
          zIndex: 2,
          bottom: Spacing * 4,
          paddingHorizontal: Spacing * 2,
          width: "100%",
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              fontSize: FontSize.xLarge,
            }}
          >
            {currentHome?.price}
          </Text>
          <Text
            style={{
              fontFamily: Font["poppins-regular"],
              fontSize: FontSize.medium,
            }}
          >
            Per month wuth Tax
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.titleColor,

            borderRadius: Spacing * 4,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-bold"],
              fontSize: FontSize.xLarge,
              color: Colors.backgroundColor,
              paddingHorizontal: Spacing * 3,
              paddingVertical: Spacing * 2,
              borderRadius: Spacing * 5,
            }}
          >
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
