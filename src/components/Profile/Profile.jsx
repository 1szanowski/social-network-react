import { Component } from "react";
import MyPostsContainer from "./MyPosts/MyPostscontainer";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  return (
    
    <div>
      <ProfileInfo />

      <MyPostsContainer  store = {props.store} />
    </div>
  );
};
export default Profile;
