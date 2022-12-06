import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { Provider } from "react-redux";

import Home from "./assets/components/Home";
import Navigator from "./routes/homeStack";
import { Store } from "./assets/redux/store";
//import { setName, setAge } from "./assets/redux/actions";

export default function App() {
  return (
    <Provider store={Store}>
      <View style={styles.container}>
        <Navigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "white",
  },
});
