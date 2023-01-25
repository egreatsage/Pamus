
import { db,storage } from "./Firebase";
import {collection,addDoc,updateDoc, getDocs,getDoc,doc,deleteDoc} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes, } from "firebase/storage";
import { updateProfile } from "firebase/auth";
const usersCollectionRef = collection(db, "Users");
const bookingCollectionRef = collection(db, "Bookings");
const messagesCollectionRef = collection(db, "Messages")
const staffCollectionRef = collection(db, "Staff")
const noticesCollectionRef = collection(db, 'Notices')
const occupantsCollectionRef = collection(db, 'Occupants')
const rulesCollectionRef = collection(db, 'rules')
const occupantCollectionRef = collection(db, 'Occupants')

class dbdataservice {
  //Bookings
  addBooking = (newBooking) => {
    return addDoc(bookingCollectionRef, newBooking);
  };
  //Messages
  addMessage = (newMessage) => {
    return addDoc(messagesCollectionRef, newMessage);
  }
  //Staff
  addStaff = (newStaff) => {
    return addDoc(staffCollectionRef, newStaff);
  }
  //Staff
  addOccupant = (newOccupant) => {
    return addDoc(occupantCollectionRef, newOccupant);
  }
  addNotice = (newNotice) => {
    return addDoc(noticesCollectionRef, newNotice);
  }
   //Messages
   addUser = (newUser) => {
    return addDoc(usersCollectionRef, newUser);
  }
  updateStaff = (id, updatedStaff) => {
    const staffDoc = doc(db, "Staff", id);
    return updateDoc(staffDoc, updatedStaff);
  };
  updateBooking = (id, updatedBooking) => {
    const bookingDoc = doc(db, "Bookings", id);
    return updateDoc(bookingDoc, updatedBooking);
  };
  deleteBooking = (id) => {
    const bookingDoc = doc(db, "Bookings", id);
    return deleteDoc(bookingDoc);
  };
  getAllBookings = () => {
    return getDocs(bookingCollectionRef);
  };
  getAllStaff = () => {
    return getDocs(staffCollectionRef);
  };
  getAllNotices = () => {
    return getDocs(noticesCollectionRef);
  };
  getAllMessages = () => {
    return getDocs(messagesCollectionRef);
  };
  getAllRules = () => {
    return getDocs(rulesCollectionRef);
  };
  getAllOccupants = () => {
    return getDocs(occupantsCollectionRef);
  };
  getNotice = (id) => {
    const noticeDoc = doc(db, "Notices", id);
    return getDoc(noticeDoc);
  };
  getStaff = (id) => {
    const staffDoc = doc(db, "Staff", id);
    return getDoc(staffDoc);
  };
  getBooking = (id) => {
    const bookingDoc = doc(db, "Bookings", id);
    return getDoc(bookingDoc);
  };

}
export default new dbdataservice();

export async function upload(file,user,setLoading){
  const fileRef = ref(storage,user.uid )
   setLoading(true)// eslint-disable-next-line 
  const snapshot = await uploadBytes(fileRef,file)
  const photoURL = await getDownloadURL(fileRef)
  updateProfile(user,{photoURL})
  setLoading(false);
  alert('uploaded successfully')
}