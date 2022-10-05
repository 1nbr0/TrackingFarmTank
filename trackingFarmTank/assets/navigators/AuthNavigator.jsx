import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../assets/screens/LoginScreen";

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Login"}
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
