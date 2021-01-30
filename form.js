  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDH52VtRqVIB7DqbUTGcnnPuIN5m4l3Sws",
    authDomain: "sign-in-sign-up-5c98d.firebaseapp.com",
    databaseURL: "https://sign-in-sign-up-5c98d-default-rtdb.firebaseio.com",
    projectId: "sign-in-sign-up-5c98d",
    storageBucket: "sign-in-sign-up-5c98d.appspot.com",
    messagingSenderId: "593320296786",
    appId: "1:593320296786:web:b2955e74b1fc9d95a5ba8b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
        const auth = firebase.auth();
        
        
        function signUp(){
            
            var email = document.getElementById("email");
            var password = document.getElementById("password");
            
            const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
            promise.catch(e => alert(e.message));
            
            alert("Signed Up");
            email = document.getElementById("email").value;
    localStorage.setItem("email", email);
        }
        
        
        
        function signIn(){
            
            var email = document.getElementById("email");
            var password = document.getElementById("password");
            
            const promise = auth.signInWithEmailAndPassword(email.value, password.value);
            promise.catch(e => alert(e.message));
            email = document.getElementById("email").value;
    localStorage.setItem("email", email);
            
            
        }
        
        
        function signOut(){
            
            auth.signOut();
            alert("Signed Out");
            
        }
        
        
        
        auth.onAuthStateChanged(function(user){
            
            if(user){
                
                var email = user.email;
                alert("Active User " + email);
                
                //Take user to a different or home page
                window.location ="index.html";
                //is signed in
                email = document.getElementById("email").value;
    localStorage.setItem("email", email);
            }else{
                
                alert("No Active User");
                //no user is signed in
            }
            
            
            
        });