async function add() {
  let username = document.getElementById("username").value;

  await fetch("/add", {
    method: "POST",
    body: JSON.stringify({ username }),
    headers: { "Content-Type": "application/json" }
  });

  alert("Contact added");
}

async function show() {
  let res = await fetch("/contacts");
  let data = await res.json();

  let list = document.getElementById("list");
  list.innerHTML = "";
  
  data.forEach(x => {
    let li = document.createElement("li");
    li.innerText = x.username;
    list.append(li);
  });
}
