import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";
import moment from "moment";

export default function CalendarScreen() {
  const [markedDates, setMarkedDates] = useState({});

  const markFridaysAndSaturdays = (year, month) => {
    const marks = {};
    const startDate = moment(`${year}-${month}`, "YYYY-MM").startOf("month");
    const endDate = moment(startDate).endOf("month");

    for (let date = startDate.clone(); date.isSameOrBefore(endDate); date.add(1, "day")) {
      const day = date.day(); // 5 = Friday, 6 = Saturday
      const dateStr = date.format("YYYY-MM-DD");

      if (day === 5 || day === 6) {
        marks[dateStr] = {
          customStyles: {
            container: {
              backgroundColor: "orange",
              flex: 1,
            },
            text: {
              color: "black",
              fontWeight: "bold",
            },
          },
        };
      } else {
        marks[dateStr] = {
          customStyles: {
            container: {
              backgroundColor: "white",
            },
            text: {
              color: "black",
            },
          },
        };
      }
    }

    setMarkedDates(marks);
  };

  useEffect(() => {
    const current = moment();
    markFridaysAndSaturdays(current.year(), current.format("MM"));
  }, []);

  return (
    <View style={styles.container}>
      <Calendar
        markingType="custom"
        markedDates={markedDates}
        onMonthChange={(month) => {
          markFridaysAndSaturdays(month.year, String(month.month).padStart(2, '0'));
        }}
        theme={{
          calendarBackground: "#212121",
          textSectionTitleColor: "white",
          dayTextColor: "#212121",
          monthTextColor : "white",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    color : "white",
  },
});
