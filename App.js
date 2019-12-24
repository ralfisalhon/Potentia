import {createStackNavigator, createAppContainer} from 'react-navigation';
var {Welcome} = require('./screens/Welcome/index.js');
var {HomePage} = require('./screens/HomePage/index.js');
var {Classes} = require('./screens/Classes/index.js');
var {Tools} = require('./screens/Tools/index.js');
var {Progress} = require('./screens/Progress/index.js');

const MainNavigator = createStackNavigator({
  Welcome: {screen: Welcome},
  HomePage: {screen: HomePage},
  Classes: {screen: Classes},
  Tools: {screen: Tools},
  Progress: {screen: Progress},
});

const App = createAppContainer(MainNavigator);

export default App;
