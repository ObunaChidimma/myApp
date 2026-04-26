import { router, useRouter, type Href, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function LoginScreen() {
  return (
    <View style={style.root}>
      <StatusBar />
      <View style={style.first}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../../assets/images/barchart.png")}
          />
          <Text style={style.firstText}>XEND Finance</Text>
        </View>
        <Image
          source={require("../../assets/images/message.png")}
          style={{ width: 40, height: 40, backgroundColor: "#ffffff", padding: 8, borderRadius: 50, marginTop: 30 }}
        />
      </View>
      <View style={style.second}>
        <Image source={require("../../assets/images/profile.png")} />
        <Text style={{ fontWeight: 700, fontSize: 17, color: "white" }}>
          Welcome, Ugwu Victor
        </Text>
      </View>
      {/* hi */}
      <Text
        style={{
          textAlign: "left",
          width: "100%",
          paddingLeft: 20,
          marginTop: 40,
          fontSize: 28,
          fontWeight: 700,
            color: "white",
        }}
      >
        Enter your password
      </Text>
      <View style={style.third}>
        <Text style={{ color: "grey", fontSize: 13 }}>Your Password</Text>
        <TextInput
          secureTextEntry={true}
          style={style.input}
          placeholder="🔒  ........."
        />
      </View>
      <Pressable
        style={{
          width: "100%",
          paddingRight: 20,
        }}
      >
        <Text style={{ textAlign: "right", fontWeight: 500, color: "white", marginTop: 10 }}>
          Forgot password?
        </Text>
      </Pressable>
      <View>
        <Image
          style={{ marginVertical: 30 }}
          source={require("../../assets/images/mail.png")}
        />
      </View>
      <Pressable style={style.onlyButton} onPress={() => router.push("/(tabs)")}>
        <Text style={{ fontWeight: 700, color: "#fff", fontSize: 17 }}>
          Login
        </Text>
      </Pressable>
      <View style={style.fourth}>
        <Text style={{ fontSize: 16, fontWeight: 400, color: "white" }}>Not you?</Text>
        <Pressable>
          {" "}
          <Text style={{ color: "#d16720", fontWeight: 700, fontSize: 16 }}>
            Switch account
          </Text>{" "}
        </Pressable>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
          gap: 5,
        }}
      >
        <Image
          style={{ width: 20, height: 20 }}
          source={require("../../assets/images/check2.png")}
        />
        <Text style={{ color: "grey", fontSize: 14 }}>Deposite insured by | </Text>
        <View style={style.tidal}>
          <Text style={{ color: "white", fontSize: 12 }}> ~~~ tidal</Text>
        </View>
      </View>
      <View style={{ width: 300, marginVertical: 15 }}>
        <Text style={{ fontWeight: 300, textAlign: "center", color: "grey" }}>Backed By:</Text>
      </View>
      <View>
        <Text style={{ color: "grey" }}>Google for STARTUPS ⬥BINANCE</Text>
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
    backgroundColor: "black",
  },
  first: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 20,
  },
  firstText: {
    fontSize: 20,
    fontWeight: 700,
    color: "white",
  },
  second: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    paddingLeft: 20,
    marginTop: 30,
    gap: 25,
  },
  third: {
    width: "100%",
    paddingLeft: 20,
    marginTop: 15,
  },
  input: {
    height: 40,
    width: 350,
    marginTop: 8,
    borderRadius: 15,
    fontSize: 25,
    paddingLeft: 20,
    color: "white",
  },
  onlyButton: {
    width: 350,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  fourth: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    marginVertical: 20,
    alignItems: "center",
  },
  tidal: {
    height: 20,
    backgroundColor: "#464285",
    width: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});