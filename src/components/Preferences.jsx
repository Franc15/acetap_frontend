import app from '../auth/base';
import { auth } from '../auth/base';
import { signOut } from 'firebase/auth';


const Preferences = () => {
    return (<div>
        <button className="text-2xl text-white" onClick={() => signOut(auth)}>Sign Out</button>
    </div>);
}

export default Preferences;