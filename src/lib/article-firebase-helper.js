import { checkIfDocumentExists, setDocument } from './firebase-helper'

export function createArticle({db, title, description}) {
    setDocument({
        db, 
        collectionName: 'articles',
        docName: title,
        docData: {
            title, description
        },
    })
}