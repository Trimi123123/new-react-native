import React from "react";
import { Text, View, StyleSheet, image } from 'react-native';
import StudentDetails from './StudentDetails';

const StudentsScreen = () => {
    return (
        <View>
            <Text style={styles.text}>Students Screen</Text>
            <StudentDetails name="Gerti" image={require('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxrWsdJFvBx8g6CtZnXj9S9xcOtMmEysWTAz1M-HSrxg&s=10')} description="Lorem ipsum"  ></StudentDetails>
            <StudentDetails name="Deon" image={require('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxrWsdJFvBx8g6CtZnXj9S9xcOtMmEysWTAz1M-HSrxg&s=10')} description="Lorem ipsum" ></StudentDetails>
            <StudentDetails name="Amant" image={require('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxrWsdJFvBx8g6CtZnXj9S9xcOtMmEysWTAz1M-HSrxg&s=10')} description="Lorem ipsum" ></StudentDetails>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20
    },
});

export default StudentsScreen;
