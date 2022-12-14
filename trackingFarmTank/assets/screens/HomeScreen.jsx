import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useGroup } from "../contexts/GroupProvider";
import { Group } from "../components/Group";

export function HomeScreen() {
  const [visibility, setVisibility] = useState(true);
  const { groups, handleDelete } = useGroup();
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        {visibility ||
          (!groups && (
            <View style={styles.containerWelcome}>
              <Text style={styles.titleh1}>
                Bienvenue sur la page d’accueil !
              </Text>
              <Text style={styles.textWelcome}>
                Veuiller cliquer sur le bouton en bas à droite afin d’ajouter un
                groupe de silos.
              </Text>
            </View>
          ))}
        <FlatList
          keyExtractor={(item) => item.id}
          data={groups}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <Group group={item} onDelete={() => handleDelete(item.id)} />
          )}
        />
        <Pressable
          style={styles.addButton}
          onPress={() => {
            setVisibility(false);
            navigation.navigate("FormGroup");
          }}
        >
          <AntDesign name="plus" style={styles.addButtonText} />
        </Pressable>
      </View>
    </>
  );
}

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
