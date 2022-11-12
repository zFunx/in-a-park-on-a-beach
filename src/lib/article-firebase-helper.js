import { checkIfDocumentExists, setDocument, updateDocument, getDocument } from './firebase-helper'
import { showErrorMessage } from './toast-notification'

export async function createArticle({ db, title, description, successCallback }) {
    const collectionName = 'articles';
    const docName = title.trim().replace(/[^A-Za-z0-9 ]/g, "").replace(/ /g, "-").toLowerCase();
    if (await checkIfDocumentExists(db, collectionName, docName)) {
        showErrorMessage('Title already exists')
    } else {
        setDocument({
            db,
            collectionName,
            docName,
            docData: {
                title, description
            },
            successCallback: () => successCallback(docName)
        })
    }

}

export async function updateArticle({ db, docName, title, description }) {
    const collectionName = 'articles';
    updateDocument({
        db,
        collectionName,
        docName,
        docData: {
            title, description
        },
    })
}

export async function getArticle({ db, docName }) {
    return await getDocument(db, 'articles', docName)
}