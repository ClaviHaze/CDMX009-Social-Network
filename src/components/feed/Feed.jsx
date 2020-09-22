 import React, { useEffect, useState } from "react";
import WithAuthRoute from "../../WithAuthRoute";
import { withRouter } from "react-router-dom";
import useDataFetch from "../../hooks/useDataFetch";
import { db, app, auth } from "../firebase/firebase";
import Bottomnavbar from "../../components/Bottomnavbar/Bottomnavbar";
import Topnavbar from "../../components/Topnavbar/Topnavbar";

function Feed() {
  // const { getProfileData, getPostsData } = useDataFetch();
  // const [userName, setUserName] = useState();
  // const [profilePic, setProfilePic] = useState();
  // const [postsData, setPostsData] = useState();

  // getProfileData().then((profileData) => {
  //   setUserName(profileData.userName);
  //   setProfilePic(profileData.photo);
  // });
  // getPostsData().then((postsData) => {
  //   setPostsData(postsData);
  // });
  
  
  useEffect(() => {
    document.body.className = "nav-space";
    return () => {
      document.body.className = "";
    };
  });
  return (
    <div>
      <Topnavbar />

      <Bottomnavbar />
    </div>
  );
}

export default withRouter(Feed);
