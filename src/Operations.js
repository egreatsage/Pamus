
import { db,storage } from "./Firebase";
import {collection,addDoc, getDocs,getDoc,doc} from "firebase/firestore";
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
   //Messages
   addUser = (newUser) => {
    return addDoc(usersCollectionRef, newUser);
  }
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