import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GamesScreen from "../screens/GamesScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Games" component={GamesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
