import {createStackNavigator, createAppContainer} from 'react-navigation';
var {Welcome} = require('./screens/Welcome/index');
var {HomePage} = require('./screens/HomePage/index');
var {Classes} = require('./screens/Classes/index');
var {Tools} = require('./screens/Tools/index');
var {Progress} = require('./screens/Progress/index');
var {CreateAccount} = require('./screens/CreateAccount/index');

console.disableYellowBox = true;

const MainNavigator = createStackNavigator({
  Welcome: {screen: Welcome},
  HomePage: {screen: HomePage},
  Classes: {screen: Classes},
  Tools: {screen: Tools},
  Progress: {screen: Progress},
  CreateAccount: {screen: CreateAccount},
});

const App = createAppContainer(MainNavigator);

export default App;
