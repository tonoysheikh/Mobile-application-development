import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import CustomButton from './components/Button';

const App = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [error, setError] = useState('');

    const validateInputs = () => {
        if (!input1 || !input2) {
            setError('Both fields are required!');
        }
        else if (!/@/.test(input1)) {
          setError('Invalid email address!');
        }
        else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(input2)){
          setError('Password must have at least 1 uppercase, 1 lowercase, 1 digit, and be at least 8 characters long!');
        }
        else {
            setError('');
            alert('Form submitted successfully!');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email Address"
                value={input1}
                onChangeText={setInput1}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={input2}
                onChangeText={setInput2}
            />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <CustomButton title="Submit" onPress={validateInputs} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});

export default App;
