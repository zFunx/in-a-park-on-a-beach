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

export async function getTitle(db){
    const doc = await getDocument(db, "about-site", "title")

    if(doc){
        return doc.title;
    }else{
        return null
    }
}