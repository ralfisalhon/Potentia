import { createStackNavigator, createAppContainer } from "react-navigation";
var { Screen1 } = require("./screens/Screen1/index.js");
var { Screen2 } = require("./screens/Screen2/index.js");

const MainNavigator = createStackNavigator({
  Screen1: { screen: Screen1 },
  Screen2: { screen: Screen2 }
});

const App = createAppContainer(MainNavigator);

export default App;
