import { setDocument, getDocument } from "./firebase-helper";
import { showSuccessMessage, showErrorMessage } from './toast-notification'

export function setTitle({ db, title }) {
    setDocument({
        db,
        collectionName: 'about-site',
        docName: 'title',
        docData: {
            title
        },
        successCallback: () => showSuccessMessage('Title updated successfully'),
        errorCallback: () => showErrorMessage('Something went wrong while updating the title'),
    })
}

export function getTitle(db){
    return getDocument(db, "about-site", "title");
}