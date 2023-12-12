const url = "https://api.pexels.com/v1/search?query=";
const token = "Bearer 968lXGt5rEday1lTPhkpIs7asNFYC6NaURXPYM9oBhLFGZetlq5OYA1d";
const headers = {
    "Authorization": token,
    "Accept": "application/json",
    "Content-Type": "application/json"
}

let photos = [];

const getUrl = () => {
    fetch(url, {
        headers: headers
    })
    .then(response => response.json())
    .then(data => 
        photos = data;)
        data.forEach(element => {
            create(data.photos)
        })
}