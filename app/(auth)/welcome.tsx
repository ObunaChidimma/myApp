import { router, useRouter, type Href, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons, AntDesign, Ionicons } from "@expo/vector-icons";

export default function Welcome() {
  const router = useRouter();
  return (
    <View style={styles.root}>
      <StatusBar />
      <Image
        style={styles.image}
        source={require("../../assets/images/logo2.png")}
      />

      <View>
        <Text style={styles.topText}>Welcome to the</Text>
        <Text style={styles.topText}> Future of Finance</Text>
      </View>
      <Text style={styles.welcomeText}>
        To get started create an account, if you already have an account we will
        log you in.
      </Text>
      <View style={{ width: "60%" }}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push("/(auth)/email")}
        >
          <MaterialIcons name="email" size={20} color="white" />
          <Text style={styles.primaryText}>Continue with Email</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.outlineButton}>
          <AntDesign name="google" size={20} color="#4285F4" />
          <Text style={styles.outlineText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.outlineButton}>
          <Ionicons name="logo-apple" size={20} color="white" />
          <Text style={styles.outlineText}>Continue with Apple</Text>
        </TouchableOpacity>
      </View>

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

      <TouchableOpacity style={styles.chatBubble}>
        <Ionicons name="chatbubble-ellipses" size={22} color="white" />
      </TouchableOpacity>
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

  image: {
    width: 200,
    height: 200,
    marginTop: 60,
  },
  topText: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: 800,
    color: "#fff",
  },
  welcomeText: {
    paddingVertical: 30,
    paddingHorizontal: 40,
    textAlign: "center",
    fontSize: 16,
    fontWeight: 500,
    color: "grey",
  },
  buttonOne: {
    width: 300,
    backgroundColor: "#3b78e9",
    paddingVertical: 16,
    borderRadius: 50,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    fontWeight: 500,
    fontSize: 16,
    textAlign: "center",
  },

  primaryButton: {
    flexDirection: "row",
    backgroundColor: "#2F5BFF",
    paddingVertical: 15,
    paddingLeft: 20, 
    borderRadius: 30,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 15,
  },

  outlineButton: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#2F5BFF",
    paddingVertical: 15,
    paddingLeft: 20,
    borderRadius: 30,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 15,
  },

  primaryText: {
    color: "white",
    marginLeft: 20,
    fontWeight: "600",
  },

  outlineText: {
    color: "white",
    marginLeft: 20,
    fontWeight: "600",
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
    backgroundColor: "#440988",
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
});
