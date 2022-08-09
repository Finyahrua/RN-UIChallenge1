import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import HomeScreen from "./src/screens/HomeScreen";
import BookMarkScren from "./src/screens/BookMarkScren";
import DetailsScreen from "./src/screens/DetailsScreen";
import AdjustmentsScreen from "./src/screens/AdjustmentsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome, Feather, Ionicons } from "@expo/vector-icons"; 


const Tab = createBottomTabNavigator();
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color }) => (
                <Entypo name="home" size={26} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="bookmark"
            component={BookMarkScren}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color }) => (
                <FontAwesome name="bookmark-o" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Details"
            component={DetailsScreen}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color }) => (
                <Feather name="shopping-bag" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Adjustments"
            component={AdjustmentsScreen}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ color }) => (
                <View className="rotate-90">
                  <Ionicons name="options-outline" size={24} color={color} />
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
