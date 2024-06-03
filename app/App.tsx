import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import  RootLayout  from './_layout';

const App = () => {
  return (
    <NavigationContainer>
      <RootLayout />
    </NavigationContainer>
  );
};

registerRootComponent(App);