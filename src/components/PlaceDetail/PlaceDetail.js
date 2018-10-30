import React, { Component } from "react";
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
const placeDetail = props => {
    let modalContent = null;
    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={props.selectedPlace ? props.selectedPlace.image : null} style={styles.placeImage} />
                <Text style={styles.placeName}>{props.selectedPlace ? props.selectedPlace.name : null}</Text>
            </View>
        );
    }
    return (
        <Modal visible={props.selectedPlace !== null} animationType="slide" onRequestClose={props.onModalClosed}>
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <TouchableOpacity onPress={props.onItemDeleted} style={styles.deleteIcon}>
                        <Ionicons name="md-trash" size={30} color="red" />
                        {/* <Button title="Delete" color="red" onPress={props.onItemDeleted} /> */}
                    </TouchableOpacity>
                    <Button title="Close" color="lightblue" onPress={props.onModalClosed} />
                </View>
            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    placeImage: {
        width: "100%",
        height: 100
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    },
    deleteIcon: {
        justifyContent: "center",
        alignItems: "center"
    }
});


export default placeDetail;