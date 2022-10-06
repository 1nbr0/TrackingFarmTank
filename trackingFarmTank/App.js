import * as React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Layout } from "./assets/components/Layout";
import { Header } from "./assets/components/Header";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { AppNavigation } from "./assets/navigators/AppNavigation";
import { AuthProvider, useAuth } from "./assets/contexts/AuthProvider";
import { AuthNavigator } from "./assets/navigators/AuthNavigator";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <AuthProvider>
        <Layout>
          <Header />
          <NavigationContainer theme={navTheme}>
            <Root />
          </NavigationContainer>
        </Layout>
      </AuthProvider>
    </ApplicationProvider>
  );
}
const Root = () => {
  const { currentUser, loading, error, cleanError } = useAuth();

  if (error) {
    return (
      <View style={styles.centeredView}>
        <Modal animationType="slide" transparent={true} visible={true}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{error}</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => cleanError()}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return currentUser ? <AppNavigation /> : <AuthNavigator />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
