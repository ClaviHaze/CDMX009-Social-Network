import React, { useEffect, useState } from "react";
import WithAuthRoute from "../../WithAuthRoute";
import { withRouter } from "react-router-dom";
import { db, app, auth, storage } from "../firebase/firebase";
import Bottomnavbar from "../../components/Bottomnavbar/Bottomnavbar";
import Topnavbar from "../../components/Topnavbar/Topnavbar";

function Upload({ history }) {
    const [message, setMessage] = useState('');
    // const [post, setPost] = useState();

    // const createPost = (nameImage, url) => {
    // }

    const messagePost = async () => {
        const uid = app.auth().currentUser.uid;
        await db.collection('post').add({
            // userName: userName,
            uid: uid,
            postTime: new Date(),
            message: message,
            // url: url
        });
        console.log('se subió');
        history.push("/Feed");
    };

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
              onChange={(e) => e.target.value}
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
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
      </div>
      <button id="update" className="button is-success">
        <span className="icon is-small">
          <i className="fas fa-check"></i>
        </span>
        <span
        onClick={(e) => messagePost()}
        >Compartir</span>
      </button>
      <Bottomnavbar />
    </div>
  );
}

export default withRouter(Upload);
