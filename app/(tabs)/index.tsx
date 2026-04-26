import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const bott = [
    {
      id: "1",
      title: "To Bank",
      icon: require("../../assets/images/bank.png"),
    },
    {
      id: "2",
      title: "withdraw",
      icon: require("../../assets/images/withdraw.png"),
    },
    {
      id: "3",
      title: "Save",
      icon: require("../../assets/images/piggy.png"),
    },
    {
      id: "4",
      title: "Invest",
      icon: require("../../assets/images/invest.png"),
    },
    {
      id: "5",
      title: "High Yield",
      icon: require("../../assets/images/chat.png"),
    },
    {
      id: "6",
      title: "Swap",
      icon: require("../../assets/images/swap.png"),
    },
  ];

  const toDo = [
    {
      id: "1",
      name: "Update your profile",
    },
    {
      id: "2",
      name: "Verify your Phone Number",
    },
    {
      id: "3",
      name: "Complete KYC to check",
    },
  ];

  const [showBalance, setShowBalance] = useState(false);
  const [showEye, setShowEye] = useState(false);

  return (
    <View style={style.root}>
      <StatusBar />
      <View style={style.one}>
        <View>
          <Image />
          <View style={{ gap: 5 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "white", marginTop: 20, }}>
              Hi, @Obuna_Chidimma
            </Text>
            <Text style={{ color: "grey", fontWeight: 500, fontSize: 17 }}>
              Start saving now
            </Text>
          </View>
        </View>
        <View>
          {" "}
          <Pressable>
            <Image
              style={{ width: 40, height: 40, backgroundColor: "white", padding: 8, borderRadius: 50, marginTop: 20 }}
              source={require("../../assets/images/chart2.png")}
            />{" "}
          </Pressable>
        </View>
      </View>
      <View style={style.two}>
        <View style={style.three}>
          <Text style={{ color: "#fff", fontWeight: 300 }}>
            PORTFOLIO BALANCE
          </Text>
          <Pressable
            onPress={() => {
              setShowBalance(!showBalance);
              setShowEye(!showEye);
            }}
          >
            <Image
              style={{ width: 20, height: 20, tintColor: "#fff" }}
              source={
                showEye
                  ? require("../../assets/images/eye.png")
                  : require("../../assets/images/eye-off.png")
              }
            />
          </Pressable>
          <Pressable>
            <Text style={{ color: "#fff", fontWeight: 300, fontSize: 13 }}>
              Transaction History {">"}
            </Text>
          </Pressable>
        </View>
        <Text style={{ color: "#fff", fontWeight: 900, fontSize: 35 }}>
          {showBalance ? "₦ 2,450,120.00" : "****"}
        </Text>
      </View>
      <View style={style.two1}>
        <View>
          <View style={{ gap: 10, display: "flex", flexDirection: "row" }}>
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: "#fff",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{ width: 25, height: 25, tintColor: "blue" }}
                source={require("../../assets/images/seed.png")}
              />
            </View>
            <View>
              <Text style={{ color: "blue", fontWeight: 700, fontSize: 18 }}>
                Total Savings
              </Text>
              <Text style={{ color: "blue", fontWeight: 700, fontSize: 28 }}>
                {showBalance ? "₦ 890,000.00" : "****"}
              </Text>
            </View>
          </View>
        </View>
        <Pressable>
          <View style={style.plan}>
            <Text style={{ color: "blue", fontWeight: 700 }}>plans {">"} </Text>
          </View>
        </Pressable>
      </View>
      <Text
        style={{
          width: "100%",
          textAlign: "left",
          marginTop: 30,
          color: "grey",
          fontWeight: 700,
          fontSize: 15,
        }}
      >
        QUICK ACTIONS
      </Text>
      <View
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginTop: 20,
        }}
      >
        {bott.map((items, idx) => {
          return (
            <View
              key={items.id}
              style={{
                width: "30%",
                alignItems: "center",
                marginBottom: 20,
                gap: 10,
              }}
            >
              <View
                style={{
                  width: 70,
                  backgroundColor: "#fdfcfc",
                  height: 70,
                  borderRadius: 15,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image style={{ width: 30, height: 30, tintColor: "blue" }} source={items.icon} />
              </View>
              <Text style={{ fontWeight: 500, color: "grey" }}>{items.title}</Text>
            </View>
          );
        })}
      </View>
      <Text
        style={{
          width: "100%",
          textAlign: "left",
          marginTop: 30,
          color: "grey",
          fontWeight: 700,
          fontSize: 15,
        }}
      >
        TO DO
      </Text>
      <View style={{ width: "100%" }}>
        {toDo.map((items, idx) => {
          return (
            <View key={items.id} style={style.four}>
              <View style={style.five}></View>
              <Text style={{ color: "#fff", fontWeight: 600, fontSize: 16 }}>
                {items.name}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    backgroundColor: "black"
  },
  one: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    // marginTop: 30,
  },
  two: {
    width: "100%",
    height: 100,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "blue",
    marginTop: 20,
    padding: 10,
    gap: 10,
  },
  two1: {
    width: "100%",
    height: 90,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "#b5b5b5",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  three: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  plan: {
    width: 75,
    height: 30,
    backgroundColor: "#fff",
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "blue",
  },
  four: {
    width: "100%",
    textAlign: "left",
    height: 45,
    backgroundColor: "#3d3a3a",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
    paddingLeft: 20,
    marginTop: 20,
  },
  five: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 5,
    backgroundColor: "black"
  },
});
