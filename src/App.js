import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import WithAuthRoute from "./WithAuthRoute";
import { auth, db } from "./components/firebase/firebase";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import Profile from "./components/profile/Profile";
import Feed from "./components/feed/Feed";
import Upload from "./components/upload/Upload";
import EditProfile from "./components/editProfile/EditProfile";
import "./App.sass";

function App() {
  const [firebaseUser, setFirebaseUser] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setFirebaseUser(user);
        console.log(firebaseUser)
        // console.log(firebaseUser);
      } else {
        setFirebaseUser(null);
      }
    });
    const getData = async () => {
      try {
        const current = auth.currentUser;
        if (!current) return;
        const uid = current.uid;
        console.log("yo merengues", uid);
        const data = await db.collection("user").doc(uid).get();
        console.log(data);
        const arrayData = { user: data.user, ...data.data() };
        setUserName(arrayData);
        console.log(arrayData);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return firebaseUser !== false ? (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Signin />
        </Route>
        <Route path="/Signup">
          <Signup />
        </Route>
        <Route path="/Profile">
          <Profile userName={userName} setUserName={setUserName} firebaseUser={firebaseUser} setFirebaseUser={setFirebaseUser}/>
        </Route>
        <Route path="/Upload">
          <Upload />
        </Route>
        <Route path="/Feed">
          <Feed />
        </Route>
        <Route path="/EditProfile">
          <EditProfile />
        </Route>
      </Switch>
    </Router>
  ) : (
    <p>Cargando...</p>
  );
}

export default App;
