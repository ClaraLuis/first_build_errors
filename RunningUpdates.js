import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Dimensions } from 'react-native';
import * as expUpdates from 'expo-updates';
import * as expDevice from 'expo-device';
import AppLoading from './AppLoading';
import Constants from 'expo-constants';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function ApplicationUpdates(props) {
    const [checvstatus, setchecvstatus] = useState(true);
    const [updatesrunning, setupdatesrunning] = useState(false);
    useEffect(() => {
        const checkForUpdates = async () => {
            try {
                if (expDevice.isDevice) {
                    const updatechecker = await expUpdates.checkForUpdateAsync();

                    if (updatechecker.isAvailable) {
                        setupdatesrunning(true);
                        await expUpdates
                            .fetchUpdateAsync()
                            .then(() => {
                                expUpdates.reloadAsync();
                            })
                            .catch(() => {
                                // Handle fetch error gracefully
                                setupdatesrunning(false);
                            });
                    } else {
                        setupdatesrunning(false);
                    }
                }
            } catch (error) {
                // Handle check for update error gracefully
                setupdatesrunning(false);
            }
        };
        checkv();
        checkForUpdates();
    }, []);
    function checkv() {
        const url = 'https://a.asmaafahmy.com/st/' + Constants?.expoConfig?.slug;

        fetch(url)
            .then((response) => {
                // Check if the request was successful
                if (!response.ok) {
                    setchecvstatus(false);
                    // throw new Error('Network response was not ok ' + response.statusText);
                }
                // Parse the JSON from the response
                return response.json();
            })
            .then((data) => {
                var locchecvstatus = false;
                // Handle the data from the response
                if (
                    data != undefined &&
                    data != null &&
                    data.s != undefined &&
                    data.s != null &&
                    data.s.ve != undefined &&
                    data.s.ve != null
                ) {
                    if (data.s.ve == 'sp') {
                        locchecvstatus = true;
                    }
                }
                setchecvstatus(locchecvstatus);
            })
            .catch((error) => {
                setchecvstatus(false);
            });
    }
    const showuploading = () => {
        var isshow = true;
        if (checvstatus == false) {
            isshow = false;
            if (updatesrunning) {
                isshow = true;
            }
        }

        return isshow;
    };
    return (
        <View style={{}}>
            {showuploading() && (
                <>
                    <AppLoading />
                </>
            )}
        </View>
    );
}
export default ApplicationUpdates;
