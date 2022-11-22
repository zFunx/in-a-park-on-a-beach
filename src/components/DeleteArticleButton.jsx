import { useState } from "react";

import Modal from "./Modal";
import Button from "./Button";

// Helper
import { deleteArticle } from "../lib/article-firebase-helper";

// Firebase
import firebase from "../lib/init-firebase";
import { getFirestore } from "firebase/firestore";
const db = getFirestore(firebase);

const DeleteArticleButton = props => {
  const [showModal, setShowModal] = useState(false);
  function toggleModal() {
    setShowModal((prev) => !prev);
  }

  async function delArticle(){
    await deleteArticle({db, docName: props.articleId});
    window.location.href = '/'
  }

  return (
    <>
      <Button onClick={toggleModal}>Delete</Button>
      {showModal && <Modal 
      message="Are you sure you want to delete this article?"
      onClose={toggleModal} 
      onSure={delArticle}
      />}
    </>
  );
};

export default DeleteArticleButton;
