import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const ReferralScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Referral</Text>
      <Text style={styles.subtitle}>
        Share your code and earn rewards with every friend who joins.
      </Text>

      {/* Rewards Card */}
      <View style={styles.rewardCard}>
        <Text style={styles.rewardTitle}>Rewards</Text>
        <Text style={styles.rewardText}>
          Let's grow together — refer your friends and family with your referral code.
        </Text>
      </View>

      {/* Referral Code */}
      <View style={styles.codeCard}>
        <Text style={styles.label}>Your referral code</Text>
        <Text style={styles.code}>XEND-DIMMA</Text>

        <TouchableOpacity>
          <Text style={styles.copyText}>Copy code</Text>
        </TouchableOpacity>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Referrals</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Points</Text>
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Share invite link</Text>
      </TouchableOpacity>

     
    </SafeAreaView>
  );
};

export default ReferralScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272525",
    padding: 20,
  },

  title: {
    fontSize: 36,
    fontWeight: 800,
    color: "#fff",
    marginBottom: 8,
    marginLeft: 5,
  },

  subtitle: {
    fontSize: 15,
    fontWeight: 500,
    color: "gray",
    marginBottom: 20,
  },

  rewardCard: {
    backgroundColor: "#2D6BFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },

  rewardTitle: {
    color: "#000",
    fontWeight: 800,
    fontSize: 30,
    marginBottom: 5,
  },

  rewardText: {
    color: "#000",
    fontSize: 20,
    fontWeight: 500,
  },

  codeCard: {
    backgroundColor: "#161515",
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },

  label: {
    color: "#888",
    marginBottom: 5,
  },

  code: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  copyText: {
    color: "#2D6BFF",
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  statBox: {
    backgroundColor: "#0c0b0b",
    flex: 1,
    marginHorizontal: 5,
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },

  statNumber: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  statLabel: {
    color: "#888",
  },

  button: {
    backgroundColor: "#2D6BFF",
    padding: 16,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 30,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderColor: "#222",
    paddingTop: 10,
  },

  navItem: {
    color: "#888",
    fontSize: 12,
  },

  activeNav: {
    color: "#2D6BFF",
  },
});