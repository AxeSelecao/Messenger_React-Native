import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ImageBackground,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  const goToMessages = (data) => {
    navigation.navigate("Messages");
  };

  const [contacts, setContacts] = useState([
    { id: 1, name: "Ayazbayev Ruslan", online: false },
    { id: 2, name: "Bekov Alan", online: false },
    { id: 3, name: "Koshenayev Shalkar", online: true },
    { id: 4, name: "Sagyndyk Miras", online: false },
    { id: 5, name: "Seylov Tamirlan", online: false },
  ]);
  return (
    <ImageBackground
      source={{
        uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/HH_901_and_HH_902_in_the_Carina_nebula_%28captured_by_the_Hubble_Space_Telescope%29.jpg/1200px-HH_901_and_HH_902_in_the_Carina_nebula_%28captured_by_the_Hubble_Space_Telescope%29.jpg",
      }}
      resizeMode="cover"
      style={{
        paddingTop: 180,
        marginLeft: "auto",
        marginRight: "auto",
        height: 800,
        width: "100%",
        flex: 1,
      }}
    >
      {contacts.map((contact) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate("Messages", contact)}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "left",
            }}
          >
            <Image
              source={{
                uri: "https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png",
              }}
              style={{ width: 35, height: 35, borderRadius: "75%" }}
            />
            <Text style={{ fontSize: 20, color: "white" }}>
              {" "}
              {contact.name}{" "}
            </Text>
            {contact.online ? (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{
                    uri: "https://image.pngaaa.com/415/99415-middle.png",
                  }}
                  style={{
                    width: 7,
                    height: 7,
                    marginTop: 3,
                    borderRadius: "75%",
                  }}
                />
                <Text style={{ color: "#1e90ff", fontWeight: "bold" }}>
                  {" "}
                  online
                </Text>
              </View>
            ) : (
              <></>
            )}
          </TouchableOpacity>
        );
      })}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  button: {
    textDecoration: "underline",
  },
});
