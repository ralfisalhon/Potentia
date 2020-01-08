import {createStackNavigator, createAppContainer} from 'react-navigation';

const {Welcome} = require('./screens/Welcome/index');
const {Home} = require('./screens/Home/index');
const {Classes} = require('./screens/Classes/index');
const {Profile} = require('./screens/Profile/index');
const {Events} = require('./screens/Events/index');
const {CreateAccount} = require('./screens/CreateAccount/index');
const {ForgotPassword} = require('./screens/ForgotPassword/index');
const {Settings} = require('./screens/Settings/index');

// console.disableYellowBox = true;

const MainNavigator = createStackNavigator({
  Welcome: {screen: Welcome},
  Home: {screen: Home},
  Classes: {screen: Classes},
  Profile: {screen: Profile},
  Events: {screen: Events},
  CreateAccount: {screen: CreateAccount},
  ForgotPassword: {screen: ForgotPassword},
  Settings: {screen: Settings},
});

const App = createAppContainer(MainNavigator);

export default App;
