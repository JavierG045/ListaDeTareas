import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const TaskList = () => {
    const [tasks, setTasks] = useState<{ id: number, task: string, completed: boolean }[]>([]);

    useEffect(() => {
        // Simulación de datos de tareas (puedes reemplazarlo con tu lógica real de obtención de datos)
        const initialTasks = [
            { id: 1, task: 'Hacer la compra', completed: false },
            { id: 2, task: 'Preparar presentación', completed: false },
            { id: 3, task: 'Llamar al cliente', completed: false },
            { id: 4, task: 'Enviar reporte semanal', completed: false },
            { id: 5, task: 'Revisar emails', completed: false },
        ];
        setTasks(initialTasks);
    }, []);

    const handleCompleteTask = (taskId: number) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, completed: true };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const handleDeleteTask = (taskId: number) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Tareas</Text>
            <FlatList
                contentContainerStyle={styles.flatListContainer}
                data={tasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.taskContainer}>
                        <Text style={[styles.task, item.completed && styles.completedTask]}>
                            {item.task}
                        </Text>
                        {!item.completed && (
                            <TouchableOpacity
                                style={[styles.button, styles.completeButton]}
                                onPress={() => handleCompleteTask(item.id)}
                            >
                                <Text style={styles.buttonText}>Completar</Text>
                            </TouchableOpacity>
                        )}
                        <TouchableOpacity
                            style={[styles.button, styles.deleteButton]}
                            onPress={() => handleDeleteTask(item.id)}
                        >
                            <Text style={styles.buttonText}>Eliminar</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <Text style={styles.footerText}>Elaborado por Javier Garcia</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
    },
    flatListContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center', // Alineación centrada del título
    },
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        width: '100%',
        paddingHorizontal: 10,
    },
    task: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 5,
        fontSize: 16,
    },
    completedTask: {
        backgroundColor: '#C8E6C9',
        textDecorationLine: 'line-through',
    },
    button: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    completeButton: {
        backgroundColor: '#4CAF50',
        marginRight: 10,
    },
    deleteButton: {
        backgroundColor: '#EF9A9A',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    footerText: {
        position: 'absolute',
        bottom: 20,
        fontSize: 14,
        color: '#999',
        textAlign: 'center',
        width: '100%',
    },
});

export default TaskList;
