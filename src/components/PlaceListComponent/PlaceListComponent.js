import React from 'react';
import { Text ,View, StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem'

const placeList = props => {
    const placesOutput = props.places.map((place, i) => {
        <ListItem key={i} placeName={place} />
    });

    return (
        <View style={styles.listContainer}>
        <Text>PROBA 123</Text>
        {placesOutput}
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});


export default placeList;