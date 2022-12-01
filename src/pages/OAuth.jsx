import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import GoogleButton from 'react-google-button';
import { useEffect } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
export default function OAuth() {

  const navigate = useNavigate();
  async function onGoogleClick() {
    try {
    
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      navigate("../shopping_cart/after-login");
    } catch (error) {
      toast.error("Could not authorize with Google");
    }
  }
 
  return (
    <GoogleButton
  onClick={onGoogleClick}
/>
  );
}