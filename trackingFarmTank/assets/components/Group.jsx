import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Group = ({ group, onDelete }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.groupContainer}>
        <Pressable
          onPress={() => navigation.navigate("GroupScreen", { group })}
          style={styles.pressable}
        >
          <View style={styles.group}>
            <MaterialCommunityIcons name="silo" size={80} color="black" />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{group.name}</Text>
            <Text style={styles.description}>{group.description}</Text>
          </View>
          <View style={styles.delete}>
            <Pressable onPress={() => onDelete()}>
              <FontAwesome5 name="trash" size={24} color="black" />
            </Pressable>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  groupContainer: {
    flexDirection: "row",
    padding: 15,
  },
  pressable: {
    flexDirection: "row",
  },
  group: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 15,
    backgroundColor: "white",
    shadowColor: "#000",
    width: 160,
    height: 160,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  infoContainer: {
    flex: 1,
    padding: 20,
  },
  name: {
    flexGrow: 1,
    fontSize: 20,
    fontWeight: "400",
  },
  description: {
    flexGrow: 1,
    marginVertical: 10,
    fontSize: 14,
  },
  delete: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
