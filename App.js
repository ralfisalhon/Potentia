import {createStackNavigator, createAppContainer} from 'react-navigation';

const {Welcome} = require('./screens/Welcome/index');
const {Home} = require('./screens/Home/index');
const {Classes} = require('./screens/Classes/index');
const {Profile} = require('./screens/Profile/index');
const {Events} = require('./screens/Events/index');
const {CreateAccount} = require('./screens/CreateAccount/index');
const {CreateAccount_2} = require('./screens/CreateAccount_2/index');
const {CreateAccount_3} = require('./screens/CreateAccount_3/index');
const {ForgotPassword} = require('./screens/ForgotPassword/index');
const {Settings} = require('./screens/Settings/index');

console.disableYellowBox = true;

const MainNavigator = createStackNavigator({
  Welcome: {screen: Welcome},
  Home: {screen: Home},
  Classes: {screen: Classes},
  Profile: {screen: Profile},
  Events: {screen: Events},
  CreateAccount: {screen: CreateAccount},
  CreateAccount_2: {screen: CreateAccount_2},
  CreateAccount_3: {screen: CreateAccount_3},
  ForgotPassword: {screen: ForgotPassword},
  Settings: {screen: Settings},
});

const App = createAppContainer(MainNavigator);

export default App;
