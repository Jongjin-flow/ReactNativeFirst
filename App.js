import { StatusBar } from 'expo-status-bar';
import React, { Profiler } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

/**
 * Header
 * MyProfile
 * Division
 * FriendSection
 * FriendList
 */

 const Header = (props) => {
   return <Text>{props.title}</Text>
 }
 const MyProfile = () => {
  return <Profile name="종진" uri="https://blog.kakaocdn.net/dn/uqGMx/btq4l9SMqEV/jofd0jUhc2LIviOmIcMAzk/img.jpg" 
  profilesize ={40}/>
}
const Division = () => {
  return <Text>Division</Text>
}
const FriendSection = () => {
  return <Text>FriendSection</Text>
}
const FriendList = () => {
  return (
    <View>
      <Profile 
      name = "친구1"
      uri="https://blog.kakaocdn.net/dn/uqGMx/btq4l9SMqEV/jofd0jUhc2LIviOmIcMAzk/img.jpg"
      profilesize={30}
      />
      <Profile 
      name = "친구2"
      uri="https://blog.kakaocdn.net/dn/uqGMx/btq4l9SMqEV/jofd0jUhc2LIviOmIcMAzk/img.jpg"
      profilesize={30}
      />
      <Profile 
      name = "친구3"
      uri="https://blog.kakaocdn.net/dn/uqGMx/btq4l9SMqEV/jofd0jUhc2LIviOmIcMAzk/img.jpg"
      profilesize={30}
      />
      <Profile 
      name = "친구4"
      uri="https://blog.kakaocdn.net/dn/uqGMx/btq4l9SMqEV/jofd0jUhc2LIviOmIcMAzk/img.jpg"
      profilesize={30}
      />
      <Profile 
      name = "친구5"
      uri="https://blog.kakaocdn.net/dn/uqGMx/btq4l9SMqEV/jofd0jUhc2LIviOmIcMAzk/img.jpg"
      profilesize={30}
      />
    </View>
  );
}

const Profile = (props) => {
  return (
    <View style={{flexDirection : "row"}}>
      <Image
        source ={{
          uri: props.uri
        }}
        style={{
          width: props.profilesize,
          height : props.profilesize,
        }}
        />

        <Text>{props.name}</Text>
    </View>
  )
}


export default function App() {
  return <View style={styles.container}>
    <Header title="친구"/>
    <MyProfile />
    <Division />
    <FriendSection />
    <FriendList/>
  </View>;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});