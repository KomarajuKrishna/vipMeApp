import React, {useState, useEffect} from "react"
import { View, Text, ImageBackground, Image, StyleSheet, ScrollView } from "react-native"
import { AntDesign, Feather, Entypo } from '@expo/vector-icons';


import { posts } from "../../../staticData"

export const MediaPost = () =>{
	const [oposts, setPosts] = useState([])
	console.log(oposts)

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.19.84:3000/media')
      if (!response.ok) {
        throw new Error('Network response was not ok.')
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  };

  fetchData();
}, []);
	return(
		<ScrollView>
			<View>
				{posts.map((eachPost) =>{
					return(
						<View key={eachPost.id}>
							<View style= {styles.profileContentContainer}>
								<Image	
									source={{uri:eachPost.profileImgUrl}}
									key={eachPost.id}
									style= {styles.profileImg}
								/>
								<Text style= {styles.profileName}>{eachPost.name}</Text>
							</View>
							<Image
								source={{uri: eachPost.imgUrl}}
								style={styles.postImage}
							/>
							<View style= {styles.iconsContainer}>
								<AntDesign name="hearto" size={26} color="black"  style= {[styles.icon, {marginTop: 3}]}/>
								<Feather name="message-circle" size={29} color="black" style= {styles.icon}/>
								<Entypo name="share-alternative" size={27} color="black" style= {styles.icon}/>
							</View>
							<View style= {{margin: 10, marginTop: 0}}>
								<Text>0 Likes</Text>
								<Text>All Comments</Text>
								<Text>Super</Text>
								<Text>#Prism</Text>
							</View>
						</View>
					)
				})}
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	postImage: {
		height: 400,
		width: 'auto',
		marginTop: 10
	},
	profileContentContainer: {
		flexDirection: 'row',
		marginTop: 10

	},
	profileImg: {
		height: 40,
		width: 40,
		borderRadius: 30
	},
	profileName:{
		alignSelf: 'center',
		marginLeft: 10,
		fontWeight: 'bold',
		fontSize: 16
	},
	iconsContainer: {
		flexDirection: 'row',
		margin: 10
	},
	icon: {
		marginRight: 10
	}

})