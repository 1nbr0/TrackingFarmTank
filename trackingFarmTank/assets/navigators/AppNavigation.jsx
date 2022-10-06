import { FontAwesome } from "@expo/vector-icons";
import { GroupScreen } from "../screens/GroupScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FormGroup } from "../components/FormGroup";
import { FormTank } from "../components/FormTank";

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "Tracking Farm Tank",
          headerTransparent: true,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 22,
          },
          headerLeft: () => <FontAwesome name="home" size={36} color="black" />,
        }}
        name="Accueil"
        component={HomeScreen}
      />
      <Stack.Screen
        name="GroupScreen"
        component={GroupScreen}
        options={{
          title: "Groupe Courant",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="FormGroup"
        component={FormGroup}
        options={{
          title: "Ajout d'un groupe",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FormTank"
        component={FormTank}
        options={{
          title: "Ajout d'un silo",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
