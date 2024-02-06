let nome, sala;
inicializar()
function inicializar() {
    inicializaDB();
    nome = localStorage.getItem("nome")
    sala = localStorage.getItem("sala")
    document.getElementById("nomesala").textContent = sala;
    getData();
}

function send() {
    const msg = document.getElementById("msg").value;
    db.ref(sala).push({
        nome: nome,
        msg: msg,
        likes: 0
    });
    console.log("Mensagem enviada:", msg);
    document.getElementById("msg").value = "";
}

function getData() {
    db.ref("/" + sala).on("value", (snapshot) => {
        const output = document.getElementById("output");
        output.innerHTML = "";
        snapshot.forEach((childSS) => {
         const key = childSS.key;
         if (key != "salaCriada") {
            const data = childSS.val();
            console.log(data)
            const msg =  data.msg; // data["msg"]
            const name = data.nome;
            const chatCard = document.createElement("div");
            chatCard.className = "chatCard";
            output.appendChild(chatCard);
            const chatNome = document.createElement("h4");
            chatNome.textContent = name + ":";
            chatNome.className = "chatNome"
            chatCard.appendChild(chatNome);
            const chatMsg = document.createElement("h5");
            chatMsg.textContent = msg;
            chatMsg.className = "chatMsg";
            chatCard.appendChild(chatMsg)
         }
        });
    });
}