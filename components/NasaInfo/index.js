import { useState, useEffect } from "react";
import { Image } from "expo-image";
import axios from "axios";
import { StyleSheet, Text, View } from 'react-native';
import { Box } from '@gluestack-ui/themed';

export default function NasaInfo() {
    const [data, setData] = useState();

    const myAPI = process.env.EXPO_PUBLIC_API;

    const year = '2023';
    const month = '01';
    const day = '01';

    const monthNames = ["Janurary", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const url = `https://api.nasa.gov/EPIC/api/natural/date/${year}-${month}-${day}?&api_key=${myAPI}`;

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                console.clear();
                console.log(response);
                setData(response.data);
            }).catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <>
            {
                data && data.map((a, index) => {
                    return (
                        <View style={styles.container} key={index}>
                            <View style={styles.infoContainer}>
                            <Image source={`https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${a.image}.png`} alt="" width={200} height={200} />
                            <View style={styles.textContainer}>
                            <Text style={{ color: "#fff" }}>Image #{index + 1}</Text>
                            <Text style={{ textAlign: "right", color: "#fff", width: 150, fontSize: 16 }}>{a.caption.toUpperCase()}</Text>
                            </View>
                            
                            </View>
                            
                            <Box style={styles.box} bg="$warning700" p="$5">
                                <View style={styles.boxContainer}>
                                <Text style={{ color: "#fff" }}>Date: {monthNames[Number(a.date.slice(5, 7)) - 1]} {Number(a.date.slice(8, 10))}, {a.date.slice(0, 4)}</Text>
                                <Text style={{ color: "#fff" }}>x: {a.centroid_coordinates.lat.toFixed(2)} y: {a.centroid_coordinates.lon.toFixed(2)}</Text>
                                </View>
                            </Box>
                        </View>
                    )
                })
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: 200,
        alignItems: 'flex-end',
        gap: 10,
    },
    boxContainer: {
        display: 'flex',
        alignItems: 'flex-end'
    },
    box: {
        borderRadius: 7
    }
});
