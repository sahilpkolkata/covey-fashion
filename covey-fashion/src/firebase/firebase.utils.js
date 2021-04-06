import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyD4jO3Fy03PpRAHFjheCRltTrztRhL7QeQ",
    authDomain: "my-cloth-shop-61cf8.firebaseapp.com",
    databaseURL: "https://my-cloth-shop-61cf8.firebaseio.com",
    projectId: "my-cloth-shop-61cf8",
    storageBucket: "my-cloth-shop-61cf8.appspot.com",
    messagingSenderId: "666562172242",
    appId: "1:666562172242:web:4c8320d03c7c9f2df4968b",
    measurementId: "G-XT4TD8NKJ5"
  }


  firebase.initializeApp(config)

  export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if(!userAuth) return ;
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()
    if(!snapShot.exists){
      const { displayName, email} = userAuth
      const createdAt = new Date()

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
      catch(error){
        console.log('error creating user', error.message)
      } 
    }
    return userRef
}

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd)=>{
    const collectionRef = firestore.collection(collectionKey)
    //console.log(collectionRef)
    const batch = firestore.batch()
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc()
      batch.set(newDocRef, obj)
    })
    return await batch.commit()
  }

  export const convertCollectionSnapshotToMap = collections =>{
    const transformedCollection = collections.docs.map(doc => {
      const {title, items} = doc.data()
      return{
        routeName: encodeURI(title.toLowerCase()),
        id : doc.id,
        title,
        items
      }
    })
    //console.log(transformedCollection)

    return transformedCollection.reduce((accumulator,collection)=>{
      accumulator[collection.title.toLowerCase()] = collection
      return accumulator
    },{})
  }

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()
  
  const  provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider)
  export default firebase