function ClickHello() {
    alert("rawr");
}

const haiku=[{text:"omg hi"}, {text:"test 1"}, {text:"test2"}];
document.getElementById("haiku-box").textContent=haiku[Math.floor(Math.random()*haiku.length)].text;
