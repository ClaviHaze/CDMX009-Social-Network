import React from 'react';
import WithAuthRoute from '../../WithAuthRoute';
import { withRouter } from "react-router-dom";
import { db, app, auth } from '../firebase/firebase';
import Bottomnavbar from "../../components/Bottomnavbar/Bottomnavbar";

function Feed() {
    return (
        <div>
            <p>Aquí va el feed :p</p>
            <Bottomnavbar />
        </div>
    )
}

export default withRouter(Feed)
