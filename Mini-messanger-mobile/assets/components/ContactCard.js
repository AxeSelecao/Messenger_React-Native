import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
} from "react-native";
import { useSelector } from "react-redux";

export default ContactCard = ({ navigation }) => {
  const id = navigation.getParam("id");

  const { name, status, messages, phoneNumber } = useSelector(
    (state) => state.userReducer.contacts[id - 1]
  );

  return (
    <ImageBackground
      source={{
        uri: "https://cdn.memes.com/profilebackgroundpics/26210361599407571/image/1381599407957.jpg",
      }}
      resizeMode="cover"
      style={{
        display: "flex",
        flexDirection: "column",
        //  justifyContent: "center",
        paddingTop: 150,
        alignItems: "center",
        flex: 1,
      }}
    >
      <Image
        source={{
          uri: "https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png",
        }}
        style={{ width: 130, height: 130, borderRadius: "75%" }}
      />
      <Text style={{ fontSize: 25, marginTop: 15, color: "white" }}>
        {name}
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 15,
          marginBottom: 15,
        }}
      >
        <Image
          source={{
            uri: "https://image.pngaaa.com/415/99415-middle.png",
          }}
          style={{ width: 15, height: 15, marginTop: 3, borderRadius: "75%" }}
        />
        <Text style={{ color: "#1e90ff", fontSize: 20, color: "white" }}>
          {" "}
          {status}
        </Text>
      </View>
      <Text style={{ fontSize: 22, color: "white" }}>{phoneNumber}</Text>
    </ImageBackground>
  );
};
