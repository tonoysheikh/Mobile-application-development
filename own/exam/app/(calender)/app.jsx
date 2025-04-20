import React from "react";
import { SafeAreaView } from "react-native";
import CalendarScreen from "./calender"; 

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CalendarScreen />
    </SafeAreaView>
  );
}
