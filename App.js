import {createStackNavigator, createAppContainer} from 'react-navigation';
import {c} from './constants.js';

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
const {Cancellation} = require('./screens/Cancellation/index');
const {Confirmation} = require('./screens/Confirmation/index');

console.disableYellowBox = !c.test_mode;
global.globalEmail = 'NO_EMAIL';
global.globalToken = 'NO_TOKEN';

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
  Cancellation: {screen: Cancellation},
  Confirmation: {screen: Confirmation},
});

const App = createAppContainer(MainNavigator);

export default App;
