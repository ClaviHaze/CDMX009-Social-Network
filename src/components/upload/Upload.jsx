import React, { useEffect } from 'react';
import WithAuthRoute from '../../WithAuthRoute';
import { withRouter } from "react-router-dom";
import { db, app, auth } from '../firebase/firebase';
import Bottomnavbar from "../../components/Bottomnavbar/Bottomnavbar";
import Topnavbar from '../../components/Topnavbar/Topnavbar';

function Upload() {
    useEffect(() => {
        document.body.className = 'nav-space';
        return () => { document.body.className = ''; }
      });
    return (
        <div>
        
            <Topnavbar />
            <p>Holi?</p>
            <div id="showNewImg" className="file is-centered">
            <img id="showImgPreview" className="is-rounded" src=""/>
        </div>
<div className="field">
<div className="file is-info has-name is-small">
    <label className="file-label">
        <input id="uploadImg" className="file-input" type="file" accept="image/x-png,image/gif,image/jpeg" name="resume" />
        <span className="file-cta">
            <span className="file-icon">
                <i className="fas fa-upload"></i>
            </span>
            <span className="file-label">
                Sube un archivo
            </span>
        </span>
    </label>
</div>  
</div>
<div className="field">
<input id="postMessage" className="input is-hovered" placeholder="Agrega un pie de foto" rows="5" />
</div>
<button id="update" className="button is-success">
<span className="icon is-small">
    <i className="fas fa-check"></i>
</span>
<span>
    Compartir
</span>
</button>
            <Bottomnavbar />
        </div>
    )
}

export default withRouter(Upload);
