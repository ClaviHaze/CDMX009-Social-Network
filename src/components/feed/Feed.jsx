import React, { useEffect } from 'react';
import WithAuthRoute from '../../WithAuthRoute';
import { withRouter } from "react-router-dom";
import { db, app, auth } from '../firebase/firebase';
import Bottomnavbar from "../../components/Bottomnavbar/Bottomnavbar";
import Topnavbar from '../../components/Topnavbar/Topnavbar';

function Feed({ userName, setUserName}) {
    useEffect(() => {
        document.body.className = 'nav-space';
        return () => { document.body.className = ''; }
      });
    return (
        <div>
            <Topnavbar
            />
       
            <Bottomnavbar />
        </div>
    )
}

export default withRouter(Feed)
