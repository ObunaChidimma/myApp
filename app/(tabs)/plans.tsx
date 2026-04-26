import { router, useRouter, type Href, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { MaterialIcons, AntDesign, Ionicons } from "@expo/vector-icons";

export default function PlansScreen() {
  const router = useRouter();
   const firstContainer = [
    {
      id: "1",
      title: "Create Plan",
      description: "Ceate a new fixed savings plan",
      icon: require("../../assets/images/piggy.png"),
    },
    {
      id: "2",
      title: "Interest Calculator",
      description: "Calculate the interest on your savings",
      icon: require("../../assets/images/calc.png"),
    },
  ];

  return (
    <View style={styles.root}>
      <StatusBar />
      <Text style={styles.topText}>Plans</Text>

      <View style={styles.container}>
        <Text style={styles.text}>SAVINGS PLAN</Text>
        <Text style={{ fontWeight: 800, fontSize: 40, color: "white" }}>USD 0.00</Text>
      </View>

            <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 20,
          width: "100%",
          gap: 10,
        }}
      >
        {firstContainer.map((items, idx) => {
          if (items.title === "Create Plan") {
            return (
              <View
                key={items.id}
                style={{
                  width: "49%",
                  height: 170,
                  display: "flex",
                  gap: 10,
                  paddingTop: 10,
                  borderRadius: 15,
                  borderColor: "#e88f47",
                  borderWidth: 2,
                  paddingHorizontal: 10,
                }}
              >
                <Image source={items.icon} />
                <Text
                  style={{ fontWeight: 800, fontSize: 18, color: "#e88f47" }}
                >
                  {items.title}
                </Text>
                <Text style={{ fontSize: 14, color: "grey", fontWeight: 500 }}>
                  {items.description}
                </Text>
              </View>
            );
          } else {
            return (
              <View
                key={items.id}
                style={{
                  width: "49%",
                  height: 170,
                  display: "flex",
                  gap: 10,
                  paddingTop: 10,
                  borderRadius: 15,
                  borderColor: "#1f3de7",
                  borderWidth: 2,
                  paddingHorizontal: 10,
                }}
              >
                <Image source={items.icon} />
                <Text
                  style={{ fontWeight: 800, fontSize: 18, color: "#1f3de7" }}
                >
                  {items.title}
                </Text>
                <Text style={{ fontSize: 14, color: "grey", fontWeight: 500 }}>
                  {items.description}
                </Text>
              </View>
            );
          }
        })}
      </View>
      <Text
        style={{
          color: "grey",
          fontWeight: 600,
          fontSize: 15,
          textAlign: "left",
          width: "100%",
          marginTop: 20,
          marginBottom: 10
        }}
      >
        ALL SAVINGS PLANS
      </Text>
      <View style={styles.two}>
        <View
          style={{
            width: "49%",
            height: 170,
            display: "flex",
            gap: 10,
            paddingTop: 10,
            borderRadius: 15,
            borderColor: "grey",
            borderWidth: 2,
            paddingHorizontal: 10,
            justifyContent: "space-between"
          }}
        >
          <Text style={{ color: "grey", fontWeight: 700, fontSize: 13 }}>
            FLEXIBLE SAVINGS
          </Text>
          <Text style={{ fontWeight: 800, fontSize: 33, color: "white" }}>$0.00</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              width: "100%",
              paddingBottom: 20
            }}
          >
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../../assets/images/plus2.png")}
            />
            <Text style={{ fontWeight: 800, fontSize: 12, color: "white" }}>ADD FUNDS</Text>
          </View>
        </View>
        <View
          style={{
            width: "49%",
            height: 170,
            display: "flex",
            gap: 10,
            paddingTop: 10,
            borderRadius: 15,
            borderColor: "grey",
            borderWidth: 2,
            paddingHorizontal: 10,
            justifyContent: "space-between",
            paddingBottom: 20
          }}
        >
          <Text style={{ color: "grey", fontWeight: 700, fontSize: 13 }}>
            FIXED SAVINGS
          </Text>
          <Text style={{ fontWeight: 800, fontSize: 33, color: "white" }}>$0.00</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              width: "100%",
            }}
          >
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../../assets/images/menu.png")}
            />
            <Text style={{ fontWeight: 800, fontSize: 12, color: "white" }}>
              VIEW ALL PLANS
            </Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 25, gap: 10 }}>
        <Text style={{ fontWeight: 600, fontSize: 15, color: "grey" }}>TODAY'S RATE</Text>
        <Text style={{ color: "grey" }}>This rate is updated daily (Apr 13, 2026 02:43 AM)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 20,
  },
  topText: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    marginTop: 20,
  },

  container: {
    backgroundColor: "blue",
    borderRadius: 10,
    justifyContent: "space-between",
    display: "flex",
    padding: 20,
    marginTop: 20,
    height: 130,
  },

  text: {
    color: "white",
    fontWeight: 500,
    fontSize: 20,
  },

    two: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});
