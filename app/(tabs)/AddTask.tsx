import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, FlatList, Text } from 'react-native';

const AddTask = () => {
    const [task, setTask] = useState('');
    const [tasksList, setTasksList] = useState<{ id: string, task: string }[]>([]);

    const handleAddTask = () => {
        const newTask = task.trim();
        if (newTask !== '') {
            const newTaskItem = { id: String(tasksList.length + 1), task: newTask };
            setTasksList([...tasksList, newTaskItem]);
            setTask('');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={task}
                onChangeText={setTask}
                placeholder="Escribe tu tarea aquí"
                placeholderTextColor="#999"
            />
            <Button
                title="Añadir Tarea"
                onPress={handleAddTask}
                color="#4CAF50"
            />

            <View style={styles.addedTasksContainer}>
                <Text style={styles.title}>Tareas añadidas:</Text>
                <FlatList
                    data={tasksList}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Text style={styles.task}>{item.task}</Text>
                    )}
                />
            </View>

            <Text style={styles.footerText}>Elaborador por Javier Garcia</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 50,
        backgroundColor: '#FFF',
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: '#DDD',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        fontSize: 16,
        borderRadius: 5,
        color: '#333',
    },
    addedTasksContainer: {
        marginTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#DDD',
        paddingTop: 10,
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    task: {
        fontSize: 16,
        marginBottom: 5,
        color: '#666',
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

export default AddTask;
