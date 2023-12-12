/*JS DETAIL*/

const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzcwYzBkOGEyMDAwMThhNDhhMzMiLCJpYXQiOjE3MDIzNzQyNjksImV4cCI6MTcwMzU4Mzg2OX0.6xvGO7JXQHwazzPCyH61puY5A_y3zqMteDTmZ3ErqRM";

const params = new URLSearchParams(location.search);
const productId = params.get("id");

document.addEventListener("click", function (event) {
    if (
        event.target.classList.contains("btn-info") &&
        event.target.getAttribute("href").startsWith("detail.html")
    ) {
        event.preventDefault();

        window.location.href = `detail.html?id=${productId}`;
    }
});

const fetchAndDisplayProductDetails = (productId) => {
    const url = "https://striveschool-api.herokuapp.com/api/product";
    const headers = {
        "Authorization": token,
        "Accept": "application/json",
        "Content-Type": "application/json",
    };

    const content = document.getElementById("content");

    fetch(`${url}/${productId}`, {
        headers: headers,
    })
        .then((response) => response.json())
        .then((product) => {
            content.innerHTML =
                `<div class="card">
            <img src="${product.imageUrl}" class="card-img-top" alt="Product Image" />
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <p class="card-text">${product.price}</p>
              <p class="card-text">${product.brand}</p>
                          </div>
          </div>`
                ;
        })
        .catch((error) => {
            console.error("Errore", error);
        });
};

if (productId) {
    fetchAndDisplayProductDetails(productId);
}