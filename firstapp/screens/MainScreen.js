import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Personscreen from '../components/PersonScreen';
import Project from '../components/Projects';

export default function MainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.arrow}>←</Text>
        <Text style={styles.title}>App</Text>
        <View style={{ width: 20 }} /> 
      </View>

      <ScrollView>
        <Personscreen />

        <View style={styles.row}>
          <Text style={styles.sectionTitle}>PROJECTS</Text>
          <TouchableOpacity style={styles.viewAll}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.grid}>
          <Project imageUri="https://unsplash.com" />
          <Project imageUri="https://unsplash.com" />
        </View>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  arrow: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  viewAll: {
    backgroundColor: '#ffb703',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  viewAllText: {
    color: 'white',
    fontSize: 11,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
