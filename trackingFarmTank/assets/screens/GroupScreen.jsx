import React from "react";
import { StyleSheet, View, Pressable, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useTank } from "../contexts/TankProvider";
import { Tank } from "../components/Tank";

export const GroupScreen = () => {
  const { tanks, handleDelete } = useTank();
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={tanks}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <Tank tank={item} onDelete={() => handleDelete(item.id)} />
          )}
        />
        <Pressable
          style={styles.addButton}
          onPress={() => {
            navigation.navigate("FormTank");
          }}
        >
          <AntDesign name="plus" style={styles.addButtonText} />
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40,
  },
  containerWelcome: {
    height: 240,
    width: 336,
  },
  titleh1: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 40,
  },
  textWelcome: {
    fontSize: 20,
    textAlign: "center",
  },
  list: {
    flexGrow: 1,
    paddingBottom: 15,
  },
  addButton: {
    position: "absolute",
    right: "8%",
    bottom: "6%",
    backgroundColor: "#66BB6A",
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  addButtonText: {
    color: "#000000",
    fontSize: 35,
    lineHeight: 50,
  },
});
