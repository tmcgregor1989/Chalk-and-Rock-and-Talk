import React from 'react';
import {Button} from '@mui/material';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {auth} from '../Firebase';


function SignIn () {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
        <Button style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }} onClick={signInWithGoogle}>Sign In With Google</Button>
    </div>
  );
}

export default SignIn;