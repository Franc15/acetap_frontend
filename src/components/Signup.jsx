import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../firebase";

const auth = getAuth(app);

const handleSignup = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const userId = user.uid;
        const name = document.getElementById("name").value;
        const email = user.email;
        // phone
        // country
        // first name
        // last name
        // gender
        
        const db = getDatabase(app);
        const userRef = ref(db, 'users/' + userId);
        set(userRef, {
            name: name,
            email: email
        });
        // ...

        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
    });
}

const email = "franc@gmail.com";
const password = "test123";
const name = "Francis";



const Signup = () => {
    return (
        <div>
            <h1>Signup</h1>
            <input type="text" id="email" placeholder="Email" />
            <input type="password" id="password" placeholder="Password" />
            <input type="text" id="name" placeholder="Name" />
            <button onClick={handleSignup}>Signup</button>
            
        </div>
    );
};

export default Signup;