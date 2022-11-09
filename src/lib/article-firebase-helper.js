import { checkIfDocumentExists, setDocument } from './firebase-helper'
import Toastify from 'toastify-js'

export async function createArticle({ db, title, description }) {
    const collectionName = 'articles';
    const docName = title.trim().replace(/[^A-Za-z0-9 ]/g, "").replace(/ /g, "-");
    if (await checkIfDocumentExists(db, collectionName, docName)) {
        Toastify({
            text: 'Title already exists',
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "red",
            },
        }).showToast()
    } else {
        setDocument({
            db,
            collectionName,
            docName: title,
            docData: {
                title, description
            },
        })
    }

}