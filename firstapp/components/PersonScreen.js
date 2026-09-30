import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Personscreen() {
  return (
    <View style={styles.center}>
      <View style={styles.banner}>
        <Image 
          source={{ uri: 'https://unsplash.com' }} 
          style={styles.avatar} 
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.name}>JOHN DOE</Text>
        <Text style={styles.title}>UI/UX Designer</Text>
        <Text style={styles.desc}>
          We're passionate about creating beautiful design for startups & leading brands
        </Text>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>HIRE HIM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  banner: {
    backgroundColor: '#8ecae6',
    width: '100%',
    height: 160,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: -30,
  },
  card: {
    backgroundColor: '#fffdf0',
    width: '85%',
    borderRadius: 20,
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: -10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 13,
    color: 'gray',
    marginVertical: 2,
  },
  desc: {
    fontSize: 13,
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#ffb703',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
