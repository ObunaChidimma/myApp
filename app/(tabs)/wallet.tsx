import { router, useRouter, type Href, Stack } from "expo-router";
import { useState } from "react";
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

export default function WalletScreen() {
  const ctaButtons = [
    {
      id: "1",
      icon: require("../../assets/images/plus.png"),
      title: "Add Fund",
    },
    {
      id: "2",
      icon: require("../../assets/images/download.png"),
      title: "Withdraw",
    },
    {
      id: "3",
      icon: require("../../assets/images/swap.png"),
      title: "Swap",
    },
    {
      id: "4",
      icon: require("../../assets/images/statement.png"),
      title: "Statement",
    },
  ];

  const walletArray = [
    {
      id: "1",
      // icon: require("../../assets/images/plus.png"),
      title: "N",
      name: "CNGN",
      name2: "Complaint Naira",
      pay: "1,200.00",
      pay2: "= $1,200",
      color: "purple",
    },
    {
      id: "2",
      // icon: require("../../assets/images/download.png"),
      title: "T",
      name: "USDT",
      name2: "Tether USD",
      pay: "1,200.00",
      pay2: "= $1,200",
      color: "green",
    },
    {
      id: "3",
      // icon: require("../../assets/images/swap.png"),
      title: "S",
      name: "USDC",
      name2: "USD Coin",
      pay: "1,200.00",
      pay2: "= $1,200",
      color: "#39afcc",
    },
  ];

  const [showBalance, setShowBalance] = useState(false);
  const [showEye, setShowEye] = useState(false);

  return (
    <View style={styles.root}>
      <StatusBar />

      <Text style={styles.topText}>Wallets</Text>

      <View style={styles.container}>
        <View style={styles.three}>
        <Text style={styles.text}>My Asset Portfolio</Text>
        <Pressable
          onPress={() => {
            setShowBalance(!showBalance);
            setShowEye(!showEye);
          }}
        >
          <Image
            style={{ width: 20, height: 20, tintColor: "#fff",  }}
            source={
              showEye
                ? require("../../assets/images/eye.png")
                : require("../../assets/images/eye-off.png")
            }
          />
        </Pressable>
        </View>

        <Text style={{ fontWeight: 800, fontSize: 40, color: "white" }}>
          
          {showBalance ? "$ 12,480.22"  : "****"}
        </Text>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 5,
        }}
      >
        {ctaButtons.map((item, idx) => {
          return (
            <View
              key={item.id}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Pressable
                style={{
                  width: 70,
                  height: 70,
                  backgroundColor: "#fff",
                  borderRadius: 20,
                  marginTop: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image style={{ width: 40, height: 40 }} source={item.icon} />
              </Pressable>

              <Text style={{ color: "white", fontWeight: "bold" }}>
                {item.title}
              </Text>
            </View>
          );
        })}
      </View>

      <View
        style={{
          // fontWeight: 33,
          // fontSize: 20,
          marginTop: 30,
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          gap: 10,
          width: "100%",
          height: 50,
          backgroundColor: "#1d1b1b",
          borderRadius: 50,
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            backgroundColor: "#1f3de7",
            marginHorizontal: 5,
            width: "30%",
            height: "80%",
            paddingVertical: 5,
            marginLeft: 5,
            borderRadius: 50,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: 500,
              textAlign: "center",
              paddingVertical: 10,
              // paddingBottom: 10,
              // // width: "100%",
              // // height: 30,
            }}
          >
            Stablecoins
          </Text>
        </View>
        <View
          style={{
            width: "30%",
            height: "100%",
            borderRadius: 50,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: 500,
              textAlign: "center",
              paddingVertical: 10,
            }}
          >
            Utility
          </Text>
        </View>
        <View
          style={{
            width: "30%",
            height: "100%",
            borderRadius: 50,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: 500,
              textAlign: "center",
              paddingVertical: 10,
            }}
          >
            Memes 🔥
          </Text>
        </View>
      </View>

      {walletArray.map((item, idx) => {
        return (
          <View
          // key={item.id}
          // style={{
          //   display: "flex",
          //   flexDirection: "column",
          //   alignItems: "center",
          //   gap: 10,
          // }}
          >
            <View
              key={item.id}
              style={{
                width: "100%",
                height: 65,
                marginTop: 20,
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                paddingHorizontal: 20,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  // justifyContent: "center",
                }}
              >
                <View
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: item.color,
                    borderRadius: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{ color: "#fff", fontWeight: 600, fontSize: 23 }}
                  >
                    {item.title}
                  </Text>
                </View>
                <View style={{ gap: 4 }}>
                  <Text
                    style={{ fontWeight: 700, fontSize: 20, color: "white" }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{ fontWeight: "500", fontSize: 20, color: "grey" }}
                  >
                    {item.name2}
                  </Text>
                </View>
              </View>
              <View>
                <View
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    justifyContent: "center",
                    gap: 7,
                  }}
                >
                  <Text
                    style={{ fontWeight: 700, fontSize: 18, color: "white" }}
                  >
                    {showBalance ?  item.pay : "****"}
                    {/* {item.pay} */}
                  </Text>
                  <Text
                    style={{ fontSize: 14, textAlign: "right", color: "grey" }}
                  >
                  {showBalance ?  item.pay2 : "****"}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
  },
  topText: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    marginTop: 10,
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

    three: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
});
