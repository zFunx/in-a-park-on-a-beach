import React, { useState } from "react";

// Icons
import { Edit } from "@styled-icons/fluentui-system-filled";
import { Tick } from "@styled-icons/typicons";

// Helpers
import { setTitle as setTitleInFirebase } from "../lib/about-site-firebase-helper.js";
import { getArticle } from "../lib/article-firebase-helper.js";

// Firebase
import firebase from "../lib/init-firebase";
import { getFirestore } from "firebase/firestore";
const db = getFirestore(firebase);

// Get logo
const description = await getArticle({ db, docName: "about" });
function getFirstImg(delta){
  const firstImgOp = delta.find(op => op?.insert?.image);
  if(firstImgOp){
    return firstImgOp.insert.image
  }else{
    return null
  }
}

const Logo = (props) => (
  <img src={props.img ?? "/favicon.svg"} className="mr-3 h-6 sm:h-9" alt={props.title} />
);

const Header = (props) => {
  const { isLoggedIn } = props;

  // Edit title
  const [editTitle, setEditTitle] = useState(false);
  const [title, setTitle] = useState(props.title);
  function enableTitleEditing() {
    setEditTitle(true);
  }
  function saveTitle() {
    setEditTitle(false);
  }
  function onTitleChanged(event) {
    const val = event.target.value;
    setTitle(val);
  }
  function changeTitleOnServer() {
    setTitleInFirebase({ db, title });
  }

  return (
    <header>
      <nav className="bg-white drop-shadow px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between">
          <div className="flex">
            {editTitle ? (
              <span className="flex items-center">
                <Logo title={title} img={getFirstImg(description.description)}/>
                <input
                  value={title}
                  onChange={onTitleChanged}
                  className="self-center text-xl font-semibold whitespace-nowrap text-black"
                />
              </span>
            ) : (
              <a href="/" className="flex items-center">
                <Logo title={title} img={getFirstImg(description.description)}/>
                <span className="self-center text-xl font-semibold whitespace-nowrap text-black">
                  {title}
                </span>
              </a>
            )}
            {isLoggedIn && (
              <div
                className="w-[1rem] ml-2 cursor-pointer"
                onClick={editTitle ? saveTitle : enableTitleEditing}
              >
                {editTitle ? (
                  <Tick size={20} onClick={changeTitleOnServer} />
                ) : (
                  <Edit />
                )}
              </div>
            )}
          </div>
          {isLoggedIn && (
            <div className="flex items-center lg:order-2">
              <a
                href="logout"
                className="text-black hover:bg-gray-50 hover:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log out
              </a>
            </div>
          )}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"></ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
