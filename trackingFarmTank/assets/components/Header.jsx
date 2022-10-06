import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  Text,
  TopNavigation,
  TopNavigationAction,
  MenuItem,
  OverflowMenu,
} from "@ui-kitten/components";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useAuth } from "../contexts/AuthProvider";
import { auth } from "../../firebase";

const ProfilIcon = () => (
  <FontAwesome
    name="user-circle-o"
    size={36}
    color="black"
    style={styles.profil}
  />
);

const LogoutIcon = () => (
  <MaterialIcons name="logout" size={20} color="black" />
);

export const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const { logout, currentUser } = useAuth();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={ProfilIcon} onPress={toggleMenu} />
  );

  const renderOverflowMenuAction = () => (
    <React.Fragment>
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        backdropStyle={styles.backdrop}
        onBackdropPress={toggleMenu}
      >
        <MenuItem
          accessoryLeft={LogoutIcon}
          title="Logout"
          onPress={() => {
            logout();
          }}
        />
        <MenuItem
          title="Delete Account"
          onPress={() => {
            auth.currentUser.delete();
            alert("Compte supprimé");
            logout();
          }}
        />
      </OverflowMenu>
    </React.Fragment>
  );

  const renderTitle = () => (
    <View style={styles.titleContainer}>
      <Image style={styles.logo} source={require("../icons/logo_tft.png")} />
    </View>
  );

  return (
    <TopNavigation
      title={renderTitle}
      accessoryRight={renderOverflowMenuAction}
      style={styles.header}
    />
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profil: {
    backgroundColor: "white",
    borderRadius: 50,
    marginHorizontal: 10,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  header: {
    backgroundColor: "#66BB6A",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  logo: {
    height: 70,
    width: 70,
  },
});
