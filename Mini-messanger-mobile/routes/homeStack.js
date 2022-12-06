import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../assets/components/Home";
import MessagesComponent from "../assets/components/MessagesComponent";
import ContactCard from "../assets/components/ContactCard";

const screens = {
  Messenger: {
    screen: Home,
  },
  Messages: {
    screen: MessagesComponent,
  },
  Contact_Card: {
    screen: ContactCard,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
