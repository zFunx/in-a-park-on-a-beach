import { checkIfDocumentExists, setDocument } from './firebase-helper'
import { showErrorMessage } from './toast-notification'

export async function createArticle({ db, title, description }) {
    const collectionName = 'articles';
    const docName = title.trim().replace(/[^A-Za-z0-9 ]/g, "").replace(/ /g, "-");
    if (await checkIfDocumentExists(db, collectionName, docName)) {
        showErrorMessage('Title already exists')
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