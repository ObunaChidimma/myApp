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

export default function Email() {
  const router = useRouter();
  return (
    <View style={styles.root}>
      <StatusBar />

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 50,
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text style={styles.topText}>Welcome</Text>
        <Ionicons style={{ paddingRight: 20 }} name="chatbubble-ellipses" size={30} color="white" />
      </View>
      <Text
        style={{
          marginTop: 30,
          textAlign: "left",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          fontSize: 16,
          color: "#fff",
          width: "100%",
          paddingLeft: 20
        }}
      >
        Enter your email adress
      </Text>

      <View style={{ width: "100%", paddingLeft: 20 }}>
        <Text style={{ color: "white", fontSize: 16, marginTop: 10 }}>Email</Text>

        <TextInput style={{ color: "white", fontSize: 16, marginTop: 10, }} placeholder="✉ Enter your Email" />
      </View>
      <Pressable onPress={() => router.push("/(auth)/login")} style={styles.continueButton}>
        <Text style={{ color: "white", fontSize: 16, fontWeight: 600 }}>Continue</Text>
      </Pressable>

      <View style={styles.insuredRow}>
        <Ionicons name="checkmark-circle" size={18} color="#22c55e" />
        <Text style={styles.insuredText}>
          Deposits insured by <Text style={styles.tidal}> ~~~tidal</Text>
        </Text>
      </View>

      <Text style={styles.backed}>Backed By:</Text>

      <View style={styles.backedRow}>
        <Text style={styles.backedText}>Google FOR STARTUPS</Text>

        <View style={styles.binanceRow}>
          <Ionicons name="diamond-outline" size={12} color="gray" />
          <Text style={styles.backedText}>BINANCE</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#000000",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  topText: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: 800,
    color: "#fff",
    marginLeft: 20,
  },

  insuredRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  insuredText: {
    color: "gray",
    marginLeft: 5,
  },

  tidal: {
    color: "white",
    backgroundColor: "#5119ac",
    paddingHorizontal: 6,
    borderRadius: 4,
  },

  backed: {
    color: "gray",
    marginTop: 10,
    marginBottom: 20,
  },

  backedRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "80%",
  },

  backedText: {
    color: "gray",
    fontSize: 12,
    marginBottom: 0,
    marginLeft: 4, // add this
  },

  binanceRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  chatBubble: {
    position: "absolute",
    top: 60,
    right: 20,
    backgroundColor: "#1f2937",
    padding: 12,
    borderRadius: 30,
    elevation: 5, // Android shadow
  },
  continueButton: {
    backgroundColor: "#1e40af",
    paddingVertical: 12,
    width: 300,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30
}
});
