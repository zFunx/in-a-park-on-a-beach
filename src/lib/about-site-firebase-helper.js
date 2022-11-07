import { setDocument, getDocument } from "./firebase-helper";
import Toastify from 'toastify-js'

export function setTitle({ db, title }) {
    setDocument({
        db,
        collectionName: 'about-site',
        docName: 'title',
        docData: {
            title
        },
        successCallback: () => Toastify({
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
        errorCallback: () => Toastify({
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

export function getTitle(db){
    return getDocument(db, "about-site", "title");
}