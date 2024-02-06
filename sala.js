
  let nomeUsuario;

  inicializar();
  function inicializar() {
    inicializaDB();
    nomeUsuario = localStorage.getItem("nome");
    document.getElementById("nomeUsuario").textContent = "Olá, " + nomeUsuario + "!";
    getData();
  } 

function addSala() {
    const txtSala = document.getElementById("nomeSala").value.trim();
    if (txtSala && !includesAny(txtSala, ["/", ".", "#", "$", "[", "]"])) {
        console.log(txtSala);
        db.ref("/").child(txtSala).set({
          salaCriada: true
        })
        carregaSala(txtSala);
    }
}

  function getData() {
    db.ref("/").on("value", (snapshot) => {
      const salas = []
      snapshot.forEach((childSS) => {
        const keySala = childSS.key;
        const linha = '<div class = "nomeSala" id="' +
        keySala +
        '"onclick="carregaSala(this.id)">' +
        keySala +
        '</div>';
        salas.push(linha);
      })
      document.getElementById("output").innerHTML = salas.join("");
    })
  }

  function carregaSala(nomeSala){
    localStorage.setItem("sala", nomeSala);
    location = "./chat.html"
  }