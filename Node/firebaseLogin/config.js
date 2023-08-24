const {initializeApp,cert}=require('firebase-admin/app')
const { getFirestore}=require('firebase-admin/firestore')

// const firebaseConfig = {
  //     apiKey: "AIzaSyA4rbPk4tUbn9TDV8MT2MyMxvm84LI-Rog",
  //     authDomain: "cart-authentication-18d00.firebaseapp.com",
  //     projectId: "cart-authentication-18d00",
  //     storageBucket: "cart-authentication-18d00.appspot.com",
  //     messagingSenderId: "215775211288",
  //     appId: "1:215775211288:web:47aac4d25e4265a843b86d",
  //     measurementId: "G-MFC48C1341"
  //   };
  
  let serviceAccount={
    "type": "service_account",
    "project_id": "cart-authentication-18d00",
    "private_key_id": "25552dbacc2a68b11cfb5275ea5576dd4c3d2a78",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDFt6YNw9v8I9wI\nC2z8Xl5uIhBJukn9oLSFV936ALBiXOo1c65PPPwoioEIHKxtBWL3druQZniQEbKq\nvtfQrhTMvdr+0c2zG3MQgc7A6mTR2AYvMo/xeA3zXAJN1NKn8jAE4tR1Wv1G/7wQ\n7eaj1fKM1YTq3UAnmZkdDnWYh0MZe+9/enjP51tddJI6Vvm/eieVWcly+65/o+Km\nxUju57DCxKmiCxuw1bi7SM6CODbFcPS1fBc/wl0PHipr3QWoo9cWKE/GyuNRFHe/\n38lmBm8PO84bgs1d7+kBCLcF8t7rcxQ3+TReQ/gNj8Zg7YNVrCgIWEPsK7JZpaHH\np+pvymN9AgMBAAECggEAWYOOy3acFyiJCp9ZpVx4NjZ311le/FQQxroERpafRLk6\nVB7ekQNUSmqChpCsw+MHbnAz9OlftiI9GK60eMcHpbZi+rE0Bt3rl1Kdr5uvL441\nJpMmtjUbY82JQYGUKfMtKFklxUf/mXBYzfVXUV+go4Bb4BVxYTxaJNySAw9iIpu8\nO/jjFTzzanPoko543AWCEW55wmc+hVeOwoBwI5S6reev9ivXsAPg4iTV6yUmLB+C\nitygWVP9dIJtNKg/hUKJiBDoau/Z84PyoMMb2rOv+7RChIJBJeanG46ZOLTHbRQQ\n/lS+b+WHDgsz1ZSKJnzEZbsgrPnL1zmsa46H1qwrhQKBgQD2oyJmWMDojLzIbeqe\nsJLMGv7iYqxi4gQOqOnskf0nwBGs+UuCRUw4h8Ld6zEKJUFCay5hQw2Xz3Xk9kYT\n/IFshLNN+vNitXav35OIK5C80GOLvbdDCAAWyu34sj/YCdfhCTF63H3GPDM6l4JQ\nB14GPUxQoFNfcTvDV6Hu1CcvCwKBgQDNORoj5I+b5ewxuhI7rsbLb05+c2kPIPMh\nTmNz3YaLKXy+gS6tQcgUiGhNYAhp/EIIorZ2B0xfx5VGaF4gnxAF9geBZ6+rB0Jx\nqwxk3QpMWJI7nNmh/gCeo+gFihk7g1U+bh7IXgvQYJ4ppUyFkIaERLAKupkVIaw/\nLkvJx59slwKBgFbZn3V274d0d84ElsgG2cqx/uttX9L6T/9xj95Uklb7Fb5ZkzNu\nf6awd/h5p60w7UgcQhrR5+l7jsJvzsGe+1xhZlqhci9iQ0cvbd5XqQI0R7mftvcN\nzCo6j44yBrVm0fRWrmvbVRcHf+q0C5lu3rdHwqXprzI+x5LEOyvE3X99AoGBAJ29\n1G/eUNwdwI0AXt9tGfRom8bqYsh0JS1mmV8H2VDCFNZBaWVW+Ll/l9xRgmYktYT5\nvJHATl4YhI7XzfH5EVHjqCU5U3d8XwAL37zvgejo843KpCW1nThS+Ba57WcnLbCM\n6DBOyXnjqe6M1eKcEik8uqukfeIWPdVaenqga9QFAoGBAMEChmE3XNp6PO9idBSN\nRIDss9sDWBDGRd7VXBzsvYb9srkrnL1rsFTUHNNNbUA4xmYtzQl0obvyWKqd+FmQ\nQ/w3oidMXp2SGnNGgTcggwoPTwK5Fkxe3052Efvh3CbQa7y8sMCG/mC5MzOUBLPA\n4TpYtlthhwdrCZxwzimUoGBz\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-zifdw@cart-authentication-18d00.iam.gserviceaccount.com",
    "client_id": "113333192373640759456",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-zifdw%40cart-authentication-18d00.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }
  
  
  
  initializeApp({
    credential:cert(serviceAccount)
  })


  // const app=initializeApp();
  // const db= firebase.firestore()
  // const Users=db.collection('Users')
  const db=getFirestore()
  const Users=db.collection('users')
  
  module.exports=Users;