import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMessage } from "../redux/actions";
import { deleteMessage } from "../redux/actions";
import ContactCard from "./ContactCard";

export default function MessagesComponent({ navigation, route }) {
  const id = navigation.getParam("id");
  const dispatch = useDispatch();

  const { name, status, messages } = useSelector(
    (state) => state.userReducer.contacts[id - 1]
  );

  const [message, setMessage] = useState("");
  const [input, setInput] = useState("");
  const scrollViewRef = useRef(0);

  const onPress = () => {
    setMessage(input);
    if (input != "") {
      dispatch(addMessage({ id: id - 1, message: input }));
    }
    setInput("");
  };

  const delMessage = () => {
    dispatch(deleteMessage({ id: id - 1 }));
  };

  const [contacts, setContacts] = useState([
    { id: 1, name: "Ayazbayev Ruslan", online: false },
    { id: 2, name: "Bekov Alan", online: false },
    { id: 3, name: "Koshenayev Shalkar", online: true },
    { id: 4, name: "Sagyndyk Miras", online: false },
    { id: 5, name: "Seylov Tamirlan", online: false },
  ]);

  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : null}>
      <TouchableOpacity
        style={{
          paddingTop: 10,
          paddingBottom: 10,
          borderBottomWidth: 1,
          backgroundColor: "#955a95",
        }}
        onPress={() => navigation.navigate("Contact_Card", contacts[id - 1])}
      >
        <Text style={{ textAlign: "center", fontSize: 17, color: "white" }}>
          {name}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 3,
          }}
        >
          {status == "online" ? (
            <Image
              source={{
                uri: "https://image.pngaaa.com/415/99415-middle.png",
              }}
              style={{ width: 7, height: 7, borderRadius: 50, marginTop: 3 }}
            />
          ) : (
            <></>
          )}

          <Text style={{ textAlign: "center", color: "#e3e6e8" }}>
            {" "}
            {status}
          </Text>
        </View>
      </TouchableOpacity>
      <ScrollView
        style={{ height: "84%" }}
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
      >
        <ImageBackground
          source={{
            uri: "https://cdn.memes.com/profilebackgroundpics/26210361599407571/image/1381599407957.jpg",
          }}
          resizeMode="cover"
          style={{ height: "100%" }}
        >
          {messages.map((message) => {
            return (
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  marginLeft: "auto",
                  borderRadius: 10,
                  padding: 10,
                  marginTop: 10,
                  marginBottom: 20,
                  marginRight: 15,
                  maxWidth: 250,
                }}
                // onPress={() =>
                //   dispatch(deleteMessage({ id: id - 1, message: message }))
                // }
              >
                <Text>{message}</Text>
              </TouchableOpacity>
            );
          })}
        </ImageBackground>
      </ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 3,
          paddingTop: 10,
          paddingBottom: 5,
          position: "fixed",
        }}
      >
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Enter a text..."
          style={{
            borderWidth: 1,
            padding: 10,
            width: "72%",
            marginLeft: 15,
            borderRadius: "50%",
            borderColor: "gray",
          }}
        />
        <TouchableOpacity
          style={{
            marginRight: 30,
            backgroundColor: "#1e90ff",
            padding: 10,
            borderRadius: "45%",
          }}
          onPress={onPress}
        >
          <Text style={{ color: "white" }}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "red !important",
  },
});
