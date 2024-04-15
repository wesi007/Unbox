const bester = document.getElementById("bester");
const foto = document.getElementById("foto");

bester.addEventListener("click", async function () {
    const randomNumber = Math.round(Math.random() * 993);
    const imageURL =`https://picsum.photos/v2/list?page=${randomNumber}&limit=1`;

    const response = await fetch(imageURL);
    const fotos = await response.json();
    console.log(fotos)

    foto.classList.remove('hide');



    let imageSrc = `https://picsum.photos/id/${fotos[0].id}/1000/600`;
    foto.src = imageSrc;
});


