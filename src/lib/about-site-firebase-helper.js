import { collection, addDoc, doc, setDoc, getDoc } from "firebase/firestore";

export default function create(db,) {

}

export function addDocument(db, collectionName, docName, docData) {
    try {
        const docRef = doc(db, collectionName, docName);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export function setDocument(db, collectionName, docName, docData) {
    const docRef = doc(db, collectionName, docName);
    setDoc(docRef, docData).then().catch(err => {
        console.error("Error setting document: ", err)
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