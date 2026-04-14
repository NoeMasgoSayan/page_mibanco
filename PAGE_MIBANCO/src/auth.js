import { auth, provider, db } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export async function loginWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    console.log("Usuario:", user);

    // Guardar en Firestore
    await setDoc(doc(db, "candidatas", user.uid), {
      nombre: user.displayName,
      email: user.email,
      foto: user.photoURL
    });

    // Redirigir
    window.location.href = "/dashboard";

  } catch (error) {
  console.error("ERROR:", error.code, error.message);
  alert(error.code);
}
}