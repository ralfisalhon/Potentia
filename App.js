import {createStackNavigator, createAppContainer} from 'react-navigation';

var {Welcome} = require('./screens/Welcome/index');
var {Home} = require('./screens/Home/index');
var {Classes} = require('./screens/Classes/index');
var {Profile} = require('./screens/Profile/index');
var {Events} = require('./screens/Events/index');
var {CreateAccount} = require('./screens/CreateAccount/index');

console.disableYellowBox = true;

const MainNavigator = createStackNavigator({
  Welcome: {screen: Welcome},
  Home: {screen: Home},
  Classes: {screen: Classes},
  Profile: {screen: Profile},
  Events: {screen: Events},
  CreateAccount: {screen: CreateAccount},
});

const App = createAppContainer(MainNavigator);

export default App;
