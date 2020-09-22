import { db, app } from "../components/firebase/firebase.js";

function useDataFetch() {
    const getProfileData = async () => {
        const uid = app.auth().currentUser.uid;
        const doc = await db.collection('user').doc(uid).get();
        return doc.data();
    };
    // const getPostsData = async () => {
    //     const data = await db.collection('posts').orderBy('postTime', 'desc').get();
    //     const allPosts = data.docs.map((doc) => (
    //             {
    //             id: doc.id,
    //             ...doc.data(),
    //             }
    //         )
    //     );
    //     return allPosts;
    // };
    return {
        getProfileData,
        // getPostsData,
    };
};

export default useDataFetch
