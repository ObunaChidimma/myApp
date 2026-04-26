import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function MoreScreen() {
  const settingBot = [
    {
      id: "1",
      icon: require("../../assets/images/account.png"),
      name: "Account Settings",
      word: "Edit your profile and next of kin",
      push: ">",
    },
    {
      id: "2",
      icon: require("../../assets/images/verify.png"),
      name: "Verify Phone Number",
      word: "Enable OTP notifications",
      push: ">",
    },
    {
      id: "3",
      icon: require("../../assets/images/wallet.png"),
      name: "KYC Verification",
      word: "Complete your KYC",
      push: ">",
    },
    {
      id: "4",
      name: "Support",
      word: "Chat with our support agents",
      icon: require("../../assets/images/chat3.png"),
      push: ">",
    },
    {
      id: "5",
      icon: require("../../assets/images/fingerprint.png"),
      name: "Biometrics",
      word: "Enable Secure Login",
      //   push: ">",
    },
    {
      id: "6",
      icon: require("../../assets/images/security.png"),
      name: "Security",
      word: "Add an extra layer of security",
      push: ">",
    },
  ];

  return (
    <View style={style.root}>
      <StatusBar />
      <View style={style.one}>
        <Text style={{ fontWeight: 800, fontSize: 40, color: "white", marginTop: 20, }}>
          Account
        </Text>
        <Image
          source={require("../../assets/images/dots2.png")}
          style={{ width: 40, height: 40, marginTop: 20,  }}
        />
        {/* <Text style={{ color: "#fff", fontWeight: 600, fontSize: 50 }}>
            {" "}
            {":"}{" "}
          </Text> */}
      </View>
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 20,
        }}
      >
        <View style={style.first}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/images/profile.png")}
              style={{ width: 50, height: 50 }}
            />
            <View style={{ display: "flex", flexDirection: "row", gap: 100 }}>
              <Text style={{ fontWeight: 600, fontSize: 18, color: "white", marginTop: 5 }}>
                @Ugwu_Victor
              </Text>
              <View>
                <Image
                  source={require("../../assets/images/copy.png")}
                  style={{ width: 40, height: 40 }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: 110,
          backgroundColor: "blue",
          borderRadius: 15,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          padding: 20,
          alignItems: "center",
        }}
      >
        <View style={{ gap: 15 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 30,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: 600, fontSize: 28 }}>
              Referral
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                // width: "100%",
                gap: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/images/trophy.png")}
                style={{ width: 30, height: 30 }}
              />
              <Text style={{ color: "#fff", fontWeight: 600, fontSize: 20 }}>
                {" "}
                {">"}{" "}
              </Text>
            </View>
          </View>

          <Text style={{ color: "#fff", fontSize: 15 }}>
            Refer friends and earn points
          </Text>
        </View>
      </View>
      <View style={style.second}>
        {settingBot.map((items, idx) => {
          if (items.push === ">") {
            return (
              <View key={items.id}>
                <View style={style.third}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 20,
                    }}
                  >
                    <Image
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: "#383434",
                      }}
                      source={items.icon}
                    />
                    <View>
                      <Text
                        style={{ color: "#fff", fontWeight: 600, fontSize: 18 }}
                      >
                        {items.name}
                      </Text>
                      <Text style={{ color: "grey", fontSize: 12 }}>
                        {items.word}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      height: 30,
                      width: 30,
                      backgroundColor: "gray",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 50,
                    }}
                  >
                    {" "}
                    <Text style={{ color: "lightgrey", fontWeight: 500 }}>
                      {items.push}
                    </Text>
                  </View>
                </View>
              </View>
            );
          } else {
            return (
              <View key={items.id}>
                <View style={style.third}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <Image
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: "#383434",
                      }}
                      source={items.icon}
                    />
                    <View>
                      <Text
                        style={{ color: "#fff", fontWeight: 600, fontSize: 18 }}
                      >
                        {items.name}
                      </Text>
                      <Text style={{ color: "grey", fontSize: 12 }}>
                        {items.word}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      height: 30,
                      width: 70,
                      backgroundColor: "gray",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      borderRadius: 50,
                    }}
                  >
                    {" "}
                    <View
                      style={{
                        height: "80%",
                        width: 40,
                        backgroundColor: "white",
                        borderRadius: 50,
                        marginLeft: 2,
                      }}
                    ></View>
                  </View>
                </View>
              </View>
            );
          }
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
    backgroundColor: "black",
  },
  one: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  first: {
    display: "flex",
    alignItems: "center",
    gap: 5,
  },
  second: {
    marginTop: 15,
    width: "100%",
    backgroundColor: "#181616",
    height: 520,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "grey",
  },
  third: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    height: 70,
  },
});
