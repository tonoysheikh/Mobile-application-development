import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
} from "react-native";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  const fetchUsers = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUsers(data.users); // The users array is inside 'users' key
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.avatar} />
      <View>
        <Text style={styles.name}>
          Hi, I'm {item.firstName} {item.maidenName} {item.lastName}
        </Text>
        <Text>Email: {item.email}</Text>
        <Text>Phone: {item.phone}</Text>
        <Text>Gender: {item.gender}</Text>
        <Text>Age: {item.age}</Text>
        <Text>Blood Group: {item.bloodGroup}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#7F39FB" />
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    alignItems: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
