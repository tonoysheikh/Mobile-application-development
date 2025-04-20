import React from "react";
import { SafeAreaView } from "react-native";
import UserList from "./userlist"; // Adjust the path if needed

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UserList />
    </SafeAreaView>
  );
}
