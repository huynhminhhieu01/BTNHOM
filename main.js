const API_URL = 'https://611232ba89c6d00017ac016b.mockapi.io/pets';
const Posts = document.querySelector('.js-posts-grid');

(async () => {
    try {
        const res = await axios.get(API_URL)
        const data = await res.data;
        handleData(data)
    } catch (error) {
        console.log(error)
    }
})();

const handleData = (data) => {
    console.log(data);
    const html = data.map(item => {
        return `
            <div class="card">
                <img class="card-image" src="${item.avatar}" alt="img-pets">
                <div class="card-info">
                    <a class="card-title" href="#">[Bán] ${item.name}</a>
                    <div class="card-content">
                        <span class="card-price">${item.price}$</span>
                        <div class="card-sub">
                            <div class="card-location">
                                <ion-icon name="location-outline"></ion-icon>
                                <span>${item.city}</span>
                            </div>
                            <div class="card-time">
                                <span>${moment(item.createAt).format('DD/MM/YYYY')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
    })
    Posts.innerHTML = html.join('');
}

let login = document.querySelector('.login-modal');
let loginBtn = document.querySelector('.account');

loginBtn.addEventListener('click',function(){
    login.style.display = "flex";
});

document.body.addEventListener('click', (e) => {
    if(e.target.matches('.login-modal')) {
        login.style.display = 'none';
    }
})







