import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import axios from "axios";

export default function UsersScreen({ navigation }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadUsers = () => {
    setLoading(true);
    setError(null);
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch(() => setError("Error al cargar usuarios"))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadUsers();
  }, []);

  if (loading) return <Text>Cargando usuarios...</Text>;
  if (error) return (
    <View style={styles.errorContainer}>
      <Text style={{ color: "red" }}>{error}</Text>
      <Button title="Reintentar" onPress={loadUsers} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.counter}>Total de usuarios: {users.length}</Text>
        <Button title="Recargar" onPress={loadUsers} />
      </View>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Posts", { userId: item.id })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.email}</Text>
            <Text>{item.address.city}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    padding: 10,
    backgroundColor: "#f8f9fa",
    borderBottomWidth: 1,
    borderBottomColor: "#dee2e6"
  },
  counter: { 
    fontSize: 16, 
    fontWeight: "bold", 
    color: "#495057" 
  },
  errorContainer: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    padding: 20 
  },
  card: { backgroundColor: "#f2f2f2", padding: 10, margin: 5, borderRadius: 5 },
  name: { fontWeight: "bold", fontSize: 16 },
});
