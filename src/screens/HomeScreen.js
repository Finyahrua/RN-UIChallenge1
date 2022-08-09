import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

const Data = [
  {
    id: 1,
    title: "Art Unleashed",
    author: "Stephano Milik",
    image: require("../../assets/images/1.png"),
  },
  {
    id: 2,
    title: "Brand Strategy",
    author: "Dean Werner",
    image: require("../../assets/images/2.png"),
  },
  {
    id: 3,
    title: "Creative Hustle",
    author: "Ramen Albert",
    image: require("../../assets/images/3.png"),
  },
  {
    id: 4,
    title: "The Study of Be...",
    author: "Ramen Albert",
    image: require("../../assets/images/4.png"),
  },
];
const HomeScreen = () => {
  return (
    <SafeAreaView className="mx-6 bg-white">
      <ScrollView>
        <View className="flex flex-row justify-between mt-2">
          <MaterialCommunityIcons name="menu" size={26} color="black" />
          <Feather name="search" size={26} color="black" />
        </View>
        <Text className="font-bold text-3xl mt-7">Popular Now</Text>
        <FlatList
          data={Data}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View className="mt-4 mr-4">
                <Image
                  source={item.image}
                  style={{ height: 192, width: 142 }}
                  className="rounded-lg"
                />
                <Text
                  className="text-base font-bold mt-3"
                  style={{ color: "#333" }}
                >
                  {item.title}
                </Text>
                <Text
                  className="text-xs font-bold mt-1"
                  style={{ color: "#C1C0C3" }}
                >
                  {item.author}
                </Text>
              </View>
            );
          }}
        />
        <Text className="font-bold text-3xl mt-7">Bestsellers</Text>
        <FlatList
          data={Data}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View className="mt-4 mr-4">
                <Image
                  source={item.image}
                  style={{ height: 192, width: 142 }}
                  className="rounded-lg"
                />
                <Text
                  className="text-base font-bold mt-3"
                  style={{ color: "#333" }}
                >
                  {item.title}
                </Text>
                <Text
                  className="text-xs font-bold mt-1"
                  style={{ color: "#C1C0C3" }}
                >
                  {item.author}
                </Text>
              </View>
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
