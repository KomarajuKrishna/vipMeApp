import React, {useState} from "react";
import { View, Text, StyleSheet,Image, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import { Axios } from "axios";
import { MediaStackScreen } from "../../../App";

import { profileImage } from "../../../staticData";
import { MediaPost } from "./mediaPosts";
import { MediaProfile } from "./mediaProfile";
// import { MediaProfile } from "./mediaProfile";

export const Media = ()=>{
	const navigation = useNavigation()

	//Media Profile Functionality
	const renderMediaProfile = ()=>{
		navigation.navigate("mediaProfile")
	}

	//Media Access Functionality

const handleCameraPress = async () => {
  const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (permissionResult.granted === false) {
    alert('Permission to access camera roll is required!');
    return;
  }

  const pickerResult = await ImagePicker.launchImageLibraryAsync();
  if (!pickerResult.canceled) {
    const formData = new FormData();
    formData.append('media', {
      uri: pickerResult.assets[0].uri,
      type: pickerResult.assets[0].mediaType,
      name: pickerResult.assets[0].fileName,
    });

    try {
      const response = await fetch('http://192.168.19.84:3000/media', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.ok) {
        console.log('Media uploaded successfully!');
      } else {
        console.error('Failed to upload media:', response.status);
      }
    } catch (error) {
      console.error('Error uploading media:', error);
    }
  }
};

	
	return(
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<TouchableOpacity onPress={handleCameraPress}>
					<Ionicons 
						name="camera-reverse-outline" 
						size={30} 
						color="black" 
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={renderMediaProfile}>
  					<Image 
    					style={styles.profileImg} 
   						source={{ uri: 'https://cdn.siasat.com/wp-content/uploads/2023/04/Jr-NTR-1.jpg' }}
  					/>
				</TouchableOpacity>
			</View>
			<ScrollView 
				horizontal={true}  // Making horizontal scroll is Enable 
				contentContainerStyle={styles.scrollViewContainer}
				showsHorizontalScrollIndicator = {false} // For hidding of horizontal bar
			>	
				{statusProfile = profileImage.map((eachProfile) =>{ 
					return(
						<Image
							key={eachProfile.id}
							style={styles.statusImg}
							source={{uri: eachProfile.imgUrl}}
						/>
					)
				})}
			</ScrollView>
			<ScrollView>
				<View>
					<MediaPost />
				</View>
			</ScrollView>
		</View>
	)	
}


// Stlying for screen::: 

const styles = StyleSheet.create({
	container: {
		marginTop: 30,
		backgroundColor: '#fff',
		marginLeft: 3,
		marginRight: 3
	},
	scrollViewContainer: {
    	flexDirection: "row", 
    	alignItems: "center",
		height: 100,
		marginBottom: 15
  	},
	imagesContainer:{
		flexDirection: 'row'
	},
	statusImg:{
		width: 70,
		height: 70,
		borderRadius: 33,
		marginRight: 5
	},
	headerContainer:{
		flexDirection: 'row',
		justifyContent: "space-between",
		marginBottom: 10,
		marginTop: 10,
	},
	profileImg:{
		height: 50,
		width: 50,
		borderRadius: 30
	}
})