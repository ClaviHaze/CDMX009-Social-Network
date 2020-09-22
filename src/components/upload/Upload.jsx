import React, { useEffect, useState } from "react";
import WithAuthRoute from "../../WithAuthRoute";
import { withRouter } from "react-router-dom";
import useDataFetch from "../../hooks/useDataFetch";
import { db, app, auth, storage } from "../firebase/firebase";
import shortid from "shortid";
import Bottomnavbar from "../../components/Bottomnavbar/Bottomnavbar";
import Topnavbar from "../../components/Topnavbar/Topnavbar";

function Upload({ history }) {
  const { getProfileData } = useDataFetch();
    const [userName, setUserName] = useState();
    const [caption, setCaption] = useState('');
    const [privacy, setPrivacy] = useState("");
    const [url, setUrl] = useState("");
    const [post, setPost] = useState ();

    getProfileData().then((profileData) => {
      setUserName(profileData.userName);
    })

    const postCaption = async () => {
      const uid = app.auth().currentUser.uid;
      await db.collection("post").add({
          userName: userName,
          uid: uid,
          postTime: new Date(),
          id: shortid.generate(),
          caption: caption,
          privacy: privacy,
          url: url, 
          post: post,
      });
      console.log('se subió');
      history.push("/Feed");
  };
    const selectPost = e => {
      const postSRC = e.target.files[0]
      console.log('post', e.target.files[0])
      // if(postSRC.type === ("image/pgn" || "image/jpg" || "image/gif")){
        createPost(postSRC)
        setPost(postSRC.name)
      // }
    }
    // // console.log("pinche post",post)
    const createPost = async (createNewPost) => {
      const uid = app.auth().currentUser.uid;
      const id = shortid;
      const postRef = storage.ref(`post-image/${post}`)
      postRef.put(createNewPost)
      const postURL = await postRef.getDownloadURL()
      setUrl(postURL.name);
      // db.collection('user').add(postURL);
      // db.collection("post").add({
      // post: postURL,
      // id: shortid.generate(),
      // uid: uid
      // })
      console.log('post!', postURL);
      console.log("perra imagen",post)
    }

  useEffect(() => {
    document.body.className = "nav-space";
    return () => {
      document.body.className = "";
    };
  });

  return (
    <div>
        <WithAuthRoute/>
      <Topnavbar />
      <div id="showNewImg" className="file is-centered">
        <img id="showImgPreview" className="is-rounded" src="" />
        {/* aquí va la imagen en vista previa */}
      </div>
      <div className="field">
        <div className="file is-info has-name is-small">
          <label className="file-label">
            <input
              id="uploadImg"
              className="file-input"
              type="file"
              accept="image/x-png,image/gif,image/jpeg"
              name="resume"
              onChange={(e) => selectPost(e)}
            //   value={post}
            />
            <span className="file-cta">
              <span className="file-icon">
                <i className="fas fa-upload"></i>
              </span>
              <span className="file-label">Sube un archivo</span>
            </span>
          </label>
        </div>
      </div>
      <div className="field">
        <input
          id="postMessage"
          className="input is-hovered"
          placeholder="Agrega un pie de foto"
          rows="5"
          onChange={(e) => setCaption(e.target.value)}
          value={caption}
        />
      </div>
      <div>
        <div className="select is-rounded has-text-centered">
          <div className="select is-info">
            <select onChange={(e) => setPrivacy(e.target.value)}>
              <option value="0">Privacidad</option>
              <option value="public">Público</option>
              <option value="private">Privado</option>
            </select>
          </div>
        </div>
      </div>
      <br/>
      <button id="update" className="button is-success">
        <span className="icon is-small">
          <i className="fas fa-check"></i>
        </span>
        <span
        onClick={(e) => postCaption()}
        >Compartir</span>
      </button>
      <Bottomnavbar />
    </div>
  );
}

export default withRouter(Upload);
