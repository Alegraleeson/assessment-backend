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
const userInput = document.querySelector('#addFortuneField')
const submitBtn = document.querySelector('#addFortuneButton')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
            createDisplay(data)
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

const createDisplay = (list) => {
    let newList = list.map((x,i) => `<p id='${i}'>${x}</p> <button class="delete" onclick="deleteFortune(${i})">delete</button>`)
    console.log(newList)
    fortuneContainer.innerHTML = ""
    fortuneContainer.innerHTML = newList.join('')
}

const addFortune = () => {
    const userValue = userInput.value;
    // console.log(userValue);
    axios.post("http://localhost:4000/api/fortune/", {userValue})
    .then
    createDisplay(res.data)

}

submitBtn.addEventListener('click', addFortune)



const deleteFortune = id => {
    axios.delete("http://localhost:4000/api/fortune/:id")
    .then (res => {
        createDisplay(res.data)
    })
}

// deleteBTN.addEventListener('click', deleteFortune)

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            let data = res.data;
            alert(data);
            // createDisplay(data)
            // let fortuna = document.createElement('li');
            // let fortune = document.createElement('span');
            // fortune.textContent = data;
            // document.querySelector('ul').appendChild(fortuna);
            // fortuna.appendChild(fortune);
            // let deleteBTN = document.createElement('button');
            // deleteBTN.textContent = 'Delete Fortune';
            // deleteBTN.classList.add('delete')
            // deleteBTN.addEventListener('click', deleteFortune)
            // fortuna.appendChild(deleteBTN);
        
        
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
            createDisplay(data)
            // alert(data);
            // for(let i =0; i<data.length; i++){
            // let fortuna = document.createElement('li')
            // let fortune = document.createElement('span');
            // fortune.textContent = data;
            // document.querySelector('ul').appendChild(fortuna);
            // fortuna.appendChild(fortune);
            // }
                        
            // let deleteBTN = document.createElement('button');
            // deleteBTN.textContent = 'Delete Fortune';
            // deleteBTN.classList.add('delete')
            // deleteBTN.addEventListener('click', deleteFortune)
            // fortuna.appendChild(deleteBTN);
        
        
    });
};

allForts.addEventListener('click', getAllFortunes)

// const deleteFortune = (id) => {
//     axios.delete(`${baseURL}/${id}`)
//     .then(res => {
//             deleteBTN.parentNode.remove('li')
//             alert('Fortune deleted!');
//     })
// }



// function submitHandler(e) {
//     e.preventDefault()

//     let fort = document.querySelector('#addFortuneField')
    
    

//     let bodyObj = {
//         fort: fort.value,
        
        
//     }

//     addFortune(bodyObj)

//     fort.value = ''
    
// }



// function addFortune(body){
//     preventDefault()
//     axios.post(baseURL, body)
//     .then( res =>{
//         console.log(res.data);
//     let inputField = document.querySelector('input')
//     let fortuna = document.createElement('li');
//     let fortune = document.createElement('span');
//     fortune.textContent = res.data;
//     document.querySelector('ul').appendChild(fortuna);
//     fortuna.appendChild(fortune);
//     let deleteBTN = document.createElement('button');
//     deleteBTN.textContent = 'Delete Fortune';
//     deleteBTN.classList.add('delete')
//     fortuna.appendChild(deleteBTN);
//     // inputField.value = "";
// })
// }
    
// form.addEventListener('submit', addFortune) 


