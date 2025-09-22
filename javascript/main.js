fetch("/project/wrappers/header.html")
    .then(res => res.text())
    .then(data => document.getElementById("header").innerHTML = data);

fetch("/project/wrappers/footer.html")
    .then(res => res.text())
    .then(data => document.getElementById("footer").innerHTML = data);
