import React from 'react';
import WithAuthRoute from '../../WithAuthRoute';
import { withRouter } from "react-router-dom";
import { db, app, auth } from '../firebase/firebase';
import Bottomnavbar from "../../components/Bottomnavbar/Bottomnavbar";

function Upload() {
    return (
        <div>
            <p>Holi, aquí se subirán los post</p>
            <Bottomnavbar />
        </div>
    )
}

export default withRouter(Upload);
