import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";

export function setDocument({ db, collectionName, docName, docData, successCallback, errorCallback }) {
    const docRef = doc(db, collectionName, docName);
    setDoc(docRef, docData).then(() => {
        successCallback && successCallback();
    }).catch(err => {
        console.error("Error setting document: ", err);
        errorCallback && errorCallback()
    })
}

export function updateDocument({ db, collectionName, docName, docData, successCallback, errorCallback }) {
    const docRef = doc(db, collectionName, docName);
    updateDoc(docRef, docData).then(() => {
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
        return docSnap.data();
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        return null;
    }
}

export async function checkIfDocumentExists(db, collectionName, docName){
    const docRef = doc(db, collectionName, docName);
    const docSnap = await getDoc(docRef);
    return docSnap.exists();
}