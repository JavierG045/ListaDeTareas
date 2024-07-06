import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido a TaskTopia</Text>
            <Text style={styles.subtitle}>Gestiona tus tareas fácilmente</Text>
            <Text style={styles.subtitle}>Dale click o toca los iconos para seguir navegando...</Text>
            <Text style={styles.credit}>Elaborado por Javier Garcia</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center', // Alineación central horizontal
    },
    subtitle: {
        fontSize: 18,
        color: '#666',
        marginBottom: 5,
        textAlign: 'center', // Alineación central horizontal
    },
    credit: {
        position: 'absolute',
        bottom: 20,
        fontSize: 14,
        color: '#888',
        textAlign: 'center', // Alineación central horizontal
        width: '100%', // Asegura que ocupe todo el ancho disponible
    },
});

export default Home;
