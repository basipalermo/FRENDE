const url = "https://striveschool-api.herokuapp.com/api/product";
const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzcwYzBkOGEyMDAwMThhNDhhMzMiLCJpYXQiOjE3MDIzNzQyNjksImV4cCI6MTcwMzU4Mzg2OX0.6xvGO7JXQHwazzPCyH61puY5A_y3zqMteDTmZ3ErqRM";
const headers = {
    Authorization: token,
    Accept: "application/json",
    "Content-Type": "application/json",
};
const params = new URLSearchParams(location.search);
const productId = params.get("id");

function onClickFunction() {
    const name = document.getElementById("name").value.trim();
    const brand = document.getElementById("brand").value.trim();
    const price = document.getElementById("price").value.trim();
    const imageUrl = document.getElementById("imageUrl").value.trim();
    const description = document.getElementById("description").value.trim();

    if (!name || !brand || !price || !imageUrl || !description) {
        alert("I campi sono obbligatori!!!!");
        return;
    }

   
    const userConfirmed = confirm("Confermi di voler salvare il prodotto?");
    if (!userConfirmed) {
        return;
    }

    const newProduct = {
        name,
        brand,
        price,
        imageUrl,
        description,
    };

    const createProduct = async () => {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(newProduct),
            });

            if (!response.ok) {
                throw new Error("Errore");
            }

            fetchDataAndRender();

            document.querySelector("form").reset();
        } catch (error) {
            console.error("Errore", error);
        }
    };

    createProduct();
}