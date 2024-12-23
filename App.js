import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './components/HomeScreen';
import { Ranking } from './components/Ranking';
import { Floor01 } from './components/Floor01';
import { Floor02 } from './components/Floor02';
import { Floor03 } from './components/Floor03';
import { registerRootComponent } from 'expo';

registerRootComponent(App);

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'HomeScreen',
            headerStyle: {
              backgroundColor: 'rgb(148, 37, 235)',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Ranking"
          component={Ranking}
          options={{
            title: 'Ranking',
            headerStyle: {
              backgroundColor: 'rgb(148, 37, 235)',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Floor01"
          component={Floor01}
          options={{
            title: 'Floor01',
            headerStyle: {
              backgroundColor: 'rgb(148, 37, 235)',
            },
            headerTintColor: '#fff',
          }}
        />
         <Stack.Screen
          name="Floor02"
          component={Floor02}
          options={{
            title: 'Floor02',
            headerStyle: {
              backgroundColor: 'rgb(148, 37, 235)',
            },
            headerTintColor: '#fff',
          }}
        />
         <Stack.Screen
          name="Floor03"
          component={Floor03}
          options={{
            title: 'Floor03',
            headerStyle: {
              backgroundColor: 'rgb(148, 37, 235)',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>


  );
}

