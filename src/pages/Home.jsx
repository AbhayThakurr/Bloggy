/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useEffect, useState } from "react";
const Home = ({ isAuth }) => {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          photoURL: doc.photoURL,
        }))
      );
    };

    getPost();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button onClick={() => deletePost(post.id)}>X</button>
                )}
              </div>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            <img
              src={post.author.photoURL}
              style={{
                height: "32px",
                width: "32px",
                marginTop: "14px",
              }}
            />
            <h3
              style={{
                marginTop: "0",
              }}
            >
              @{post.author.name}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
