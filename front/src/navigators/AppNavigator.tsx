import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {navigationRef} from "./utils";
import {SCREENS} from "./screens";
import {Login} from "../screens/Login";
import {RootState} from "../store";
import {useSelector} from "react-redux";
import {StationList} from "../screens/Stations";
import {SignUp} from "../screens/SignUp";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={isAuthenticated ? SCREENS.LOGIN : SCREENS.STATIONLIST}>
      {isAuthenticated ? (
        <Stack.Screen name={SCREENS.STATIONLIST} component={StationList} />
      ) : (
        <>
          <Stack.Screen name={SCREENS.LOGIN} component={Login} />
          <Stack.Screen name={SCREENS.SIGNUP} component={SignUp} />
        </>
      )}
    </Stack.Navigator>
  );
};

const linking = {
  prefixes: [],
  config: {
    screens: {
      [SCREENS.LOGIN]: "signin",
      [SCREENS.SIGNUP]: "signup",
      [SCREENS.STATIONLIST]: "stationlist",
      [SCREENS.STATIONDETAILS]: "stationdetails",
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  return (
    <NavigationContainer ref={navigationRef} linking={linking} {...props}>
      <AppStack />
    </NavigationContainer>
  );
};
