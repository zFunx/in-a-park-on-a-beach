import { doc, setDoc, updateDoc, getDoc, deleteDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadString, getDownloadURL, } from "firebase/storage";

export function setDocument({ db, collectionName, docName, docData, successCallback, errorCallback }) {
    const docRef = doc(db, collectionName, docName);
    setDoc(docRef, {
        ...docData,
        created_at: serverTimestamp(),
        updated_at: serverTimestamp()
    }).then(() => {
        successCallback && successCallback();
    }).catch(err => {
        console.error("Error setting document: ", err);
        errorCallback && errorCallback()
    })
}

export function updateDocument({ db, collectionName, docName, docData, successCallback, errorCallback }) {
    const docRef = doc(db, collectionName, docName);
    updateDoc(docRef, {
        ...docData,
        updated_at: serverTimestamp()
    }).then(() => {
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

export async function deleteDocument({ db, collectionName, docName }) {
    await deleteDoc(doc(db, collectionName, docName));
}

export async function checkIfDocumentExists(db, collectionName, docName) {
    const docRef = doc(db, collectionName, docName);
    const docSnap = await getDoc(docRef);
    return docSnap.exists();
}

export async function uploadDataURI({ storage, name, dataURI }) {
    const fileRef = ref(storage, `articles/${name}`);
    const snapshot = await uploadString(fileRef, dataURI, "data_url");
    if (snapshot) {
        const downloadURL = await getDownloadURL(snapshot.ref);
        return downloadURL;
    }
}