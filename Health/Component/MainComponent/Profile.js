import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserDetails, setProfileImageUri } from '../Redux/UserDetailsReducer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { BasicInfo } from './ProfileDetails';



const Profile = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const userDetails = useSelector(selectUserDetails);
    const [details, setDetails] = useState({});
    const [infoModalVisible, setInfoModalVisible] = useState(false);

    useEffect(() => {
        try {
            async function getDetails() {
                const name = userDetails.name;
                const age = userDetails.age;
                const height = userDetails.height;
                const email = await AsyncStorage.getItem('email');
                const weight = userDetails.weight;
                const gender = userDetails.gender;
                setDetails({ name, age, height, email, weight, gender });
            }
            getDetails();
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    }, [userDetails]);

    const selectImage = async () => {
        try {
            const options = {
                cropping: true,
                width: 150,
                height: 150,
                compressImageQuality: 0.5,
                mediaType: 'photo',
            };

            ImageCropPicker.openPicker(options)
                .then(async (image) => {
                    dispatch(setProfileImageUri(image?.path));
              
                })
                .catch(async (error) => {
                    if (error.code === 'E_PICKER_CANCELLED') {
                        try {
                            const cameraImage = await ImageCropPicker.openCamera({
                                ...options,
                                cropperCircleOverlay: true,
                            });
                            dispatch(setProfileImageUri(cameraImage?.path));
                          
                        } catch (cameraError) {
                            console.error('Camera Error: ', cameraError);
                        }
                    } else {
                        console.error('ImagePicker Error: ', error);
                    }
                });
        } catch (error) {
            console.error('ImagePicker Error: ', error);
        }
    };

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={{ backgroundColor: '#FFFFFF', padding: 10 }}>
                <FontAwesome5
                    name="arrow-left"
                    size={22}
                    color="black"
                    onPress={() => navigation.goBack()}
                />
            </View>

            <View style={styles.container}>
                <Pressable onPress={selectImage}>
                    {userDetails.profileImageUri ? (
                        <Avatar.Image size={80} source={{ uri: userDetails.profileImageUri }} />
                    ) : (
                        <Avatar.Image
                            size={80}
                            source={require('../../assets/3d-render-little-boy-with-eyeglasses-blue-shirt.jpg')}
                        />
                    )}
                </Pressable>
                <View style={{ padding: 10 }}>
                    <Text style={{ fontSize: 28, color: 'black', fontWeight: '600' }}>
                        {details?.name?.toUpperCase()}
                    </Text>
                    <Text style={{ fontSize: 22, fontWeight: '500' }}>
                        {details?.email}
                    </Text>
                </View>
            </View>

            <View style={styles.container}>
                <FontAwesome5 name="quote-right" color="black" size={25} />
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }}>
                        Bio
                    </Text>
                    <Text style={{ fontSize: 18, fontWeight: '400' }}>
                        Write something about you here
                    </Text>
                </View>
            </View>

            <View style={styles.container}>
                <Ionicons name="location-sharp" color="black" size={25} />
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }}>
                        Location
                    </Text>
                    <Text style={{ fontSize: 18, fontWeight: '400' }}>
                        Gorakhpur, India
                    </Text>
                </View>
            </View>

            <View style={styles.container} >
                <FontAwesome5 name="user-alt" color="black" size={25} />
                <Pressable style={{ padding: 20 }} onPress={() => setInfoModalVisible(true)}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }}>
                        Basic Information
                    </Text>
                    <Text style={{ fontSize: 18, fontWeight: '400' }}>
                        Height, Weight, Age, Gender
                    </Text>
                </Pressable>
                <Modal animationType="slide" transparent={false} visible={infoModalVisible} onRequestClose={() => {
                    setInfoModalVisible(false);
                }}>
                    <BasicInfo onClose={() => setInfoModalVisible(false)} details={details} setDetails={setDetails} />
                </Modal>
            </View>

            <View style={styles.container}>
                <MaterialCommunityIcons name="flag" color="black" size={28} />
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }}>
                        Primary goal
                    </Text>
                    <Text style={{ fontSize: 18, fontWeight: '400' }}>Loss Weight</Text>
                </View>
            </View>

            <View style={styles.container}>
                <MaterialCommunityIcons name="food-variant" color="black" size={30} />
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }}>
                        Food Preferences
                    </Text>
                    <Text style={{ fontSize: 18, fontWeight: '400' }}>
                        Diet Preferences, Allergies, Cuisine
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.8,
        padding: 10,
        backgroundColor: '#FFFFFF',
    },
});

export default Profile;
