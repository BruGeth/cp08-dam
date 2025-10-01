import React, { useState, useEffect} from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import axios from "axios";

export default function PostsScreen({ route }) {
    const { userId } = route.params;
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadPosts = () => {
        setLoading(true);
        setError(null);
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then((res) => setPosts(res.data))
            .catch(() => setError("Error al cargar posts"))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        loadPosts();
    }, [userId]);

    if (loading) return <Text>Cargando posts...</Text>;
    if (error) return (
        <View style={styles.errorContainer}>
            <Text style={{ color: "red" }}>{error}</Text>
            <Button title="Reintentar" onPress={loadPosts} />
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.counter}>Total de posts: {posts.length}</Text>
                <Button title="Recargar" onPress={loadPosts} />
            </View>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text>{item.body}</Text>
                    </View>
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
    card: { backgroundColor: "#e6f7ff", padding: 10, margin: 5, borderRadius: 5 },
    title: { fontWeight: "bold", marginBottom: 5 },
});
