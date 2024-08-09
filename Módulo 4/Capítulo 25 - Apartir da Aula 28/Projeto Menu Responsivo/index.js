const itens = document.getElementById("itens");

const clickMenu = () => {
    if (itens.style.display == "block") {
        itens.style.display = "none";
    } else {
        itens.style.display = "block";
    }
}

const sizeChange = () => {
    // console.log(window.innerWidth);
    if (window.innerWidth >= 800) {
        itens.style.display = 'block';
    } else {
        itens.style.display = 'none';
    }
}

