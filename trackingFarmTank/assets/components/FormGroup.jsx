import React, { useState } from "react";
import { TextInput, Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@ui-kitten/components";
import { useGroup } from "../contexts/GroupProvider";

export const FormGroup = () => {
  const [currentName, setCurrentName] = useState("");
  const [currentDesc, setCurrentDesc] = useState("");
  const { handleAdd } = useGroup();
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Ajouter votre groupe de silos.</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nom du groupe"
          value={currentName}
          onChangeText={(newName) => setCurrentName(newName)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputDesc}
          placeholder="Description"
          value={currentDesc}
          multiline={true}
          textAlignVertical={"top"}
          onChangeText={(newDesc) => setCurrentDesc(newDesc)}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button
          disabled={!currentName && !currentDesc}
          onPress={() => {
            handleAdd(currentName, currentDesc);
            setCurrentName("");
            setCurrentDesc("");
            navigation.navigate("Accueil");
          }}
          style={styles.btnAdd}
        >
          <Text>Ajouter</Text>
        </Button>
        <Button
          onPress={() => {
            setCurrentName("");
            setCurrentDesc("");
            navigation.navigate("Accueil");
          }}
          style={styles.btnCancel}
        >
          <Text>Annuler</Text>
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  title: {
    fontSize: 24,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 15,
    padding: 10,
    margin: 15,
  },
  input: {
    flex: 1,
  },
  inputDesc: {
    flex: 1,
    height: 80,
  },
  btnContainer: {
    flexDirection: "row-reverse",
    padding: 20,
  },
  btnAdd: {
    marginHorizontal: 15,
  },
  btnCancel: {
    marginHorizontal: 15,
  },
});
