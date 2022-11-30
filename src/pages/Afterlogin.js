import { getAuth, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Afterlogin() {
    const auth = getAuth();
    const navigate = useNavigate();
    const [changeDetail, setChangeDetail] = useState(false);
    const [listings, setListings] = useState(null);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
      name: auth.currentUser.displayName,
      email: auth.currentUser.email,
    });
    const { name, email } = formData;
    console.log(formData);
    function onLogout() {
      auth.signOut();
      navigate("../shopping_cart/login");
    }
  return (
    <div>
        <h1>{formData.name}</h1>
        <h1>{formData.email}</h1>
       <button onClick={onLogout}>Logout</button>
    </div>
  )
}
