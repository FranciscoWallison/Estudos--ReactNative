import Home from './pages/home';
import Repositorio from './pages/repositorio';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Repositorio" component={Repositorio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;