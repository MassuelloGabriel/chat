const firebaseConfig = {
    apiKey: "AIzaSyBVX2JZdK1sfh7x7fbOO2Y9vgnqmI87uKQ",
    authDomain: "xert-d7c3a.firebaseapp.com",
    databaseURL: "https://xert-d7c3a-default-rtdb.firebaseio.com",
    projectId: "xert-d7c3a",
    storageBucket: "xert-d7c3a.appspot.com",
    messagingSenderId: "372451735657",
    appId: "1:372451735657:web:99eca691047e823a768af8"
  };
  let db;

  function inicializaDB() {
    firebase.initializeApp(firebaseConfig)
    db = firebase.database();
  }
function addUsuario() {
    const nome = document.getElementById("nomeUsuario").value.trim();
    if (nome && !includesAny(nome, ["/", "."])) {
        localStorage.setItem("nome",nome);
        location = "./sala.html";
    }
}

function includesAny(str, arrayChar) {
    for(let i = 0; i < arrayChar.length; i++) {
        const teste = arrayChar[i];
        if (str.includes(teste)) {
            return true;
        }
    }
    return false;
}

function logout() {
    localStorage.removeItem("nome");
    localStorage.removeItem("sala");
    //remove a sala do local storage 
    location= "./index.html"; 
}