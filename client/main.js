const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const luckyNum = document.getElementById("luckyNum")
const watch = document.getElementById("watch")
const allForts = document.getElementById("allForts")
const deleteBTN = document.querySelector(".delete")
const addBtn = document.getElementById("addFortuneButton")
const baseURL = `http://localhost:4000/api/fortune`
const fortuneContainer = document.querySelector('#fortune-container')
const form = document.querySelector('form')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const getLuckyNumber = () => {
    axios.get("http://localhost:4000/api/luckyNumber/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

luckyNum.addEventListener('click', getLuckyNumber)





const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            let data = res.data;
            alert(data);
            let fortuna = document.createElement('li');
            let fortune = document.createElement('span');
            fortune.textContent = data;
            document.querySelector('ul').appendChild(fortuna);
            fortuna.appendChild(fortune);
            let deleteBTN = document.createElement('button');
            deleteBTN.textContent = 'Delete Fortune';
            deleteBTN.classList.add('delete')
            deleteBTN.addEventListener('click', deleteFortune)
            fortuna.appendChild(deleteBTN);
        
        
    });
};

fortuneBtn.addEventListener('click', getFortune)

const getWatchList = () => {
    axios.get("http://localhost:4000/api/watchList/")
        .then(res => {
            let data = res.data;
            let movie = document.createElement('li');
            let movieTitle = document.createElement('span');
            movieTitle.textContent = data;
            document.querySelector('ul').appendChild(movie);
            movie.appendChild(movieTitle);
            let deleteBTN = document.createElement('button');
            deleteBTN.textContent = 'Delete Movie';
            deleteBTN.classList.add('delete')
            deleteBTN.addEventListener('click', deleteFortune)
            movie.appendChild(deleteBTN);
    });
};

watch.addEventListener('click', getWatchList)

const getAllFortunes = () => {
    axios.get("http://localhost:4000/api/fortunes/")
        .then(res => {
            let data = res.data;
            // alert(data);
            // for(let i =0; i<data.length; i++){
            let fortuna = document.createElement('li');
            let fortune = document.createElement('span');
            fortune.textContent = data;
            document.querySelector('ul').appendChild(fortuna);
            fortuna.appendChild(fortune);
            // }
                        
            let deleteBTN = document.createElement('button');
            deleteBTN.textContent = 'Delete Fortune';
            deleteBTN.classList.add('delete')
            deleteBTN.addEventListener('click', deleteFortune)
            fortuna.appendChild(deleteBTN);
        
        
    });
};

allForts.addEventListener('click', getAllFortunes)

const deleteFortune = (id) => {
    axios.delete(`${baseURL}/${id}`)
    .then(res => {
            deleteBTN.parentNode.remove('li')
            alert('Fortune deleted!');
    })
}



function submitHandler(e) {
    e.preventDefault()

    let fort = document.querySelector('#addFortuneField')
    
    

    let bodyObj = {
        fort: fort.value,
        
        
    }

    addFortune(bodyObj)

    fort.value = ''
    
}



function addFortune(body){
    preventDefault()
    axios.post(baseURL, body)
    .then( res =>{
        console.log(res.data);
    let inputField = document.querySelector('input')
    let fortuna = document.createElement('li');
    let fortune = document.createElement('span');
    fortune.textContent = res.data;
    document.querySelector('ul').appendChild(fortuna);
    fortuna.appendChild(fortune);
    let deleteBTN = document.createElement('button');
    deleteBTN.textContent = 'Delete Fortune';
    deleteBTN.classList.add('delete')
    fortuna.appendChild(deleteBTN);
    // inputField.value = "";
})
}
    
form.addEventListener('submit', addFortune) 


// const moviesContainer = document.querySelector('#movies-container')
// const form = document.querySelector('form')

// const baseURL = `http://localhost:4004/api/movies`

// const moviesCallback = ({ data: movies }) => displayMovies(movies)
// const errCallback = err => alert(err.response.data)

// const getAllMovies = () => axios.get(baseURL).then(moviesCallback).catch(errCallback)
// const createMovie = body => axios.post(baseURL, body).then(moviesCallback).catch(errCallback)
// const deleteMovie = id => axios.delete(`${baseURL}/${id}`).then(moviesCallback).catch(errCallback)
// const updateMovie = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(moviesCallback).catch(errCallback)

// function submitHandler(e) {
//     e.preventDefault()

//     let title = document.querySelector('#title')
//     let rating = document.querySelector('input[name="ratings"]:checked')
//     let imageURL = document.querySelector('#img')

//     let bodyObj = {
//         title: title.value,
//         rating: rating.value, 
//         imageURL: imageURL.value
//     }

//     createMovie(bodyObj)

//     title.value = ''
//     rating.checked = false
//     imageURL.value = ''
// }

// function createMovieCard(movie) {
//     const movieCard = document.createElement('div')
//     movieCard.classList.add('movie-card')

//     movieCard.innerHTML = `<img alt='movie cover' src=${movie.imageURL} class="movie-cover"/>
//     <p class="movie-title">${movie.title}</p>
//     <div class="btns-container">
//         <button onclick="updateMovie(${movie.id}, 'minus')">-</button>
//         <p class="movie-rating">${movie.rating} stars</p>
//         <button onclick="updateMovie(${movie.id}, 'plus')">+</button>
//     </div>
//     <button onclick="deleteMovie(${movie.id})">delete</button>
//     `


//     moviesContainer.appendChild(movieCard)
// }

// function displayMovies(arr) {
//     moviesContainer.innerHTML = ``
//     for (let i = 0; i < arr.length; i++) {
//         createMovieCard(arr[i])
//     }
// }

// form.addEventListener('submit', submitHandler)

// getAllMovies()