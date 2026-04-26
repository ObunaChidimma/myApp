// // app/(tabs)/_layout.tsx
// import { Tabs } from "expo-router";
// import { View, Text, Image, StyleSheet } from "react-native";

// export default function TabsLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,

//         // Tab bar main style
//         tabBarStyle: {
//           backgroundColor: "#0A0A0A",
//           height: 75,
//           borderTopWidth: 0,
//           paddingTop: 8,
//           paddingBottom: 8,
//         },

//         tabBarShowLabel: false,
//       }}
//     >
//       {/* HOME */}
//       <Tabs.Screen
//         name="index"
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <View style={styles.iconBox}>
//               <Image
//                 source={require("../../assets/images/bank.png")}
//                 style={[
//                   styles.icon,
//                   { tintColor: focused ? "white" : "#777" },
//                 ]}
//               />
//               <Text
//                 style={[
//                   styles.label,
//                   { color: focused ? "white" : "#777" },
//                 ]}
//               >
//                 Home
//               </Text>
//             </View>
//           ),
//         }}
//       />

//       {/* WALLET */}
//       <Tabs.Screen
//         name="wallet"
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <View style={styles.iconBox}>
//               <Image
//                 source={require("../../assets/images/wallet.png")}
//                 style={[
//                   styles.icon,
//                   { tintColor: focused ? "white" : "#777" },
//                 ]}
//               />
//               <Text
//                 style={[
//                   styles.label,
//                   { color: focused ? "white" : "#777" },
//                 ]}
//               >
//                 Wallet
//               </Text>
//             </View>
//           ),
//         }}
//       />

//       {/* REFERRAL (CENTER BIG BUTTON) */}
//       <Tabs.Screen
//         name="referral"
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <View style={styles.centerWrap}>
//               <View style={styles.centerButton}>
//                 <Image
//                   source={require("../../assets/images/profile.png")}
//                   style={styles.centerIcon}
//                 />
//               </View>

//               <Text style={styles.centerText}>Referral</Text>
//             </View>
//           ),
//         }}
//       />

//       {/* PLANS */}
//       <Tabs.Screen
//         name="plans"
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <View style={styles.iconBox}>
//               <Image
//                 source={require("../../assets/images/piggy2.png")}
//                 style={[
//                   styles.icon,
//                   { tintColor: focused ? "white" : "#777" },
//                 ]}
//               />
//               <Text
//                 style={[
//                   styles.label,
//                   { color: focused ? "white" : "#777" },
//                 ]}
//               >
//                 Plans
//               </Text>
//             </View>
//           ),
//         }}
//       />

//       {/* MORE */}
//       <Tabs.Screen
//         name="more"
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <View style={styles.iconBox}>
//               <Image
//                 source={require("../../assets/images/profile.png")}
//                 style={[
//                   styles.icon,
//                   { tintColor: focused ? "white" : "#777" },
//                 ]}
//               />
//               <Text
//                 style={[
//                   styles.label,
//                   { color: focused ? "white" : "#777" },
//                 ]}
//               >
//                 More
//               </Text>
//             </View>
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }

// const styles = StyleSheet.create({
//   iconBox: {
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 10,
//   },

//   icon: {
//     width: 23,
//     height: 23,
//     resizeMode: "contain",
//     marginBottom: 3,
//   },

//   label: {
//     fontSize: 12,
//   },

//   centerWrap: {
//     alignItems: "center",
//     marginTop: -25,
//   },

//   centerButton: {
//     width: 62,
//     height: 62,
//     borderRadius: 31,
//     backgroundColor: "#2145F5",
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: 4,
//     borderColor: "#FF6A00",
//   },

//   centerIcon: {
//     width: 26,
//     height: 26,
//     tintColor: "white",
//     resizeMode: "contain",
//   },

//   centerText: {
//     color: "white",
//     fontSize: 12,
//     marginTop: 3,
//   },
// });

import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0B0F1A",
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: "#4A90E2",
        tabBarInactiveTintColor: "#888",
        tabBarLabelStyle: { fontSize: 10 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="referral"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.referralWrapper}>
              <View style={styles.referralCircle}>
                <Ionicons name="people" size={28} color="white" />
              </View>

              <Text style={styles.referralText}>Referral</Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="plans"
        options={{
          title: "Plans",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document-text-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  referralWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: -28,
  },

  referralCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#2145F5", // blue
    borderWidth: 4,
    borderColor: "#FF7A00", // orange border
    justifyContent: "center",
    alignItems: "center",
  },

  referralText: {
    color: "white",
    fontSize: 12,
    marginTop: 4,
  },
});
