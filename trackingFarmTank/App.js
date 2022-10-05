import * as React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Layout } from "./assets/components/Layout";
import { Header } from "./assets/components/Header";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { AppNavigation } from "./assets/navigators/AppNavigation";

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
      <Layout>
        <Header />
        <NavigationContainer theme={navTheme}>
          <AppNavigation />
        </NavigationContainer>
      </Layout>
    </ApplicationProvider>
  );
}
