import { createStackNavigator } from "@react-navigation/stack";
import { SignIn, Home } from "../screens";

export type RootStackParamList = {
  Home: undefined;
  SignIn: undefined;
};

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
