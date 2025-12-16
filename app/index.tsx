import { ITEM_HEIGHT, ITEM_WIDTH } from "@/constants";
import Colors from "@/constants/Colors";
import Font from "@/constants/Font";
import FontSize from "@/constants/FontSize";
import Spacing from "@/constants/Spacing";
import { homes, tags } from "@/data";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [activeTag, setActiveTag] = useState<number>(tags[0].id);
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: Colors.backgroundColor,
          paddingHorizontal: Spacing * 2,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              height: Spacing * 5,
              width: Spacing * 5,
              borderRadius: Spacing * 3,
              backgroundColor: Colors.iconBackgroundColor,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Octicons name="apps" size={24} color={Colors.titleColor} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: Spacing * 5,
              width: Spacing * 5,
              borderRadius: Spacing * 3,
              backgroundColor: Colors.iconBackgroundColor,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Octicons name="search" size={24} color={Colors.titleColor} />
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: Spacing * 2 }}>
          <Text
            style={{
              fontSize: FontSize.xxLarge,
              fontFamily: Font["poppins-bold"],
              width: "60%",
            }}
          >
            Find The Perfect Home
          </Text>
          <Text
            style={{
              fontSize: FontSize.medium,
              fontFamily: Font["poppins-regular"],
            }}
          >
            Discover the best home for you with us
          </Text>
        </View>
        {/* Tags */}
        <ScrollView horizontal showsHorizontalScrollIndicator>
          {tags.map((tag) => (
            <TouchableOpacity
              key={tag.id}
              style={{
                backgroundColor:
                  tag.id === activeTag
                    ? Colors.titleColor
                    : Colors.iconBackgroundColor,
                paddingVertical: Spacing * 2,
                paddingHorizontal: Spacing * 3,
                borderRadius: Spacing * 5,
                marginRight: Spacing,
              }}
              onPress={() => setActiveTag(tag.id)}
            >
              <Text
                style={{
                  color:
                    tag.id === activeTag
                      ? Colors.backgroundColor
                      : Colors.subTitleColor,
                  fontFamily:
                    tag.id === activeTag
                      ? Font["poppins-bold"]
                      : Font["poppins-regular"],
                  fontSize:
                    tag.id === activeTag ? FontSize.large : FontSize.medium,
                }}
              >
                {tag.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        {/* End Tags */}
        {/* Start Housing section */}
        <ScrollView horizontal showsHorizontalScrollIndicator>
          {homes.map((house) => {
            return (
              <TouchableOpacity
                style={{
                  height: ITEM_HEIGHT,
                  width: ITEM_WIDTH,
                  borderRadius: Spacing * 5,
                  overflow: "hidden",
                  marginRight: Spacing * 3,
                  marginVertical: Spacing * 2,
                }}
                key={house.id}
              >
                <ImageBackground
                  source={house.image}
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                >
                  <View
                    style={{
                      padding: Spacing * 3,
                      justifyContent: "space-between",
                      height: "100%",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: Font["poppins-bold"],
                          fontSize: FontSize.large,
                          color: Colors.backgroundColor,
                          width: "60%",
                        }}
                      >
                        {house.title}
                      </Text>
                      <Text
                        style={{
                          fontFamily: Font["poppins-bold"],
                          fontSize: FontSize.large,
                          color: Colors.backgroundColor,
                        }}
                      >
                        {house.price}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          backgroundColor: Colors.backgroundColor,
                          paddingHorizontal: Spacing * 2,
                          paddingVertical: Spacing,
                          borderRadius: Spacing * 5,
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: Font["poppins-semiBold"],
                            fontSize: FontSize.medium,
                          }}
                        >
                          View Home
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          backgroundColor: Colors.backgroundColor,
                          borderRadius: Spacing * 8,
                          height: Spacing * 5,
                          width: Spacing * 5,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Ionicons
                          name="bookmark-outline"
                          size={24}
                          color={Colors.titleColor}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        {/* End Housing section */}
      </View>
    </SafeAreaView>
  );
}
