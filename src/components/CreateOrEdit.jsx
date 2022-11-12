import React, { useState, useEffect } from "react";

// Editot
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// Components
import Button from "./Button.jsx";

// Firebase
import firebase from "../lib/init-firebase";
import { getFirestore } from "firebase/firestore";
const db = getFirestore(firebase);

// helper
import { createArticle, getArticle } from "../lib/article-firebase-helper";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    ["clean"],
    [
      { align: "" },
      { align: "center" },
      { align: "right" },
      { align: "justify" },
    ],
  ],
};

// Add image handler https://github.com/quilljs/quill/issues/2034

const CreateOrEdit = (props) => {
  const [title, setTitle] = useState("");
  function onTitleChanged(event) {
    setTitle(event.target.value);
  }
  const [description, setDescription] = useState("");

  function onSubmit(value) {
    createArticle({
      db,
      title,
      description,
      successCallback: (docName) => {
        window.location.href = "/article/edit/" + docName;
      },
    });
  }

  useEffect(() => {
    async function getArticleAsync() {
      const savedArticle = await getArticle({ db, docName: props.id });
      setTitle(savedArticle.title);
      setDescription(savedArticle.description);
    }
    if (props.id) {
      getArticleAsync();
    }
  }, [props.id]);

  return (
    <div className="px-16 py-8">
      <h1 className="text-3xl">Create Aritcle</h1>
      <br />
      <div>
        <label htmlFor="title" className="block text-2xl mb-2 font-medium">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="mb-8 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Give it a nice title"
          value={title}
          onChange={onTitleChanged}
        />

        <label htmlFor="title" className="block text-2xl mb-2 font-medium">
          Description
        </label>
        <ReactQuill
          theme="snow"
          value={description}
          onChange={setDescription}
          modules={modules}
          className="mb-8"
        />
        <Button disabled={!(title && description)} onClick={onSubmit}>
          {props.id ? "Update" : "Save"}
        </Button>
      </div>
    </div>
  );
};

export default CreateOrEdit;
