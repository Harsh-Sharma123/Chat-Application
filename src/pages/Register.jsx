import React, { useState } from 'react';
import Add from '../img/add.png'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, storage, db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate }  from 'react-router-dom'; 

export const Register = () => {

  const [err, setErr] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try{

      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);

     
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        (error) => {
       
        }, 
        () => {

          getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
            console.log('File available at', downloadURL);
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            console.log("updated")
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL
            })

            // await setDoc(doc(db, "userChats", res.user.id), {});

            navigate("/");
          });
        }
      )


    }catch(error){
      setErr(true);
    }
   
  }

  return (
    <>
      <div className='formContainer'>
        <div className='formWrapper'>
          <span className='logo'>Lama Chat</span>
          <span className='title'>Register</span>
          <form onSubmit={handleSubmit}>
            <input type="text" name="" id="" placeholder='Display Name' />
            <input type="email" name="" id="" placeholder='Email' />
            <input type="password" name="" id="" placeholder='Password'/>
            <input type="file" name="" id="file" style={{display: "none"}} />
            <label htmlFor='file'>
              <img src={Add} alt="" />
              <span>Add an avatar</span>
            </label>
            <button>Sign Up</button>
          </form>
          <p>You do have an account? Login</p>
        </div>
      </div>
    </>
  )
}
