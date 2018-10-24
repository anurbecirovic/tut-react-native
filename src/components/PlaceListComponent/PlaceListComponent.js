import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem'

const placeList = props => {
    return (<FlatList 
        style={styles.listContainer}
        data={props.places}
        renderItem={()=> (
            <ListItem key={i} placeName={place} onItemPressed={() => props.onItemDeleted(i)} />
        )}
    />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});


export default placeList;