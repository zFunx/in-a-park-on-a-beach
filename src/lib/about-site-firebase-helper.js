import { collection, addDoc, doc, setDoc, getDoc } from "firebase/firestore";
import Toastify from 'toastify-js'

export function setTitle({ db, title }) {
    setDocument({
        db,
        collectionName: 'about-site',
        docName: 'title',
        docData: {
            title
        },
        successCallback:() => Toastify({
            text: 'Title updated successfully',
            duration: 3000,
            // destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "green",
            },
            // onClick: function () { } // Callback after click
        }).showToast(),
        errorCallback:() => Toastify({
            text: 'Something went wrong while updating the title',
            duration: 3000,
            // destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "red",
            },
            // onClick: function () { } // Callback after click
        }).showToast()
    })
}

export function setDocument({ db, collectionName, docName, docData, successCallback, errorCallback }) {
    const docRef = doc(db, collectionName, docName);
    setDoc(docRef, docData).then(() => {
        successCallback && successCallback();
    }).catch(err => {
        console.error("Error setting document: ", err);
        errorCallback && errorCallback()
    })
}

export async function getDocument(db, collectionName, docName) {
    const docRef = doc(db, collectionName, docName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data().title;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        return null;
    }
}