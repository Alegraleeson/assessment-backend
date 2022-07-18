let userDB =[];
let fortunes = ["A fresh start will put you on your way.", "A friend asks only for your time not your money.", "A friend is a present you give yourself.", "A good friendship is often more important than a passionate romance.", "A golden egg of opportunity falls into your lap this month."];
const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

module.exports = {

    getCompliment: (req, res) => {
        
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        userDB.push(randomCompliment)
      
        res.status(200).send(randomCompliment);
    },

    getLuckyNumber: (req, res) => {
        const luckyNumbers= ['6', '5',' 7','11','12','30'];
      
        
        let randomIndex = Math.floor(Math.random() * luckyNumbers.length);
        let randomNumber = luckyNumbers[randomIndex];
      
        res.status(200).send(randomNumber);
             
    },

    getFortune: (req, res) => {
        // const fortunes = ["A fresh start will put you on your way.", "A friend asks only for your time not your money.", "A friend is a present you give yourself.", "A good friendship is often more important than a passionate romance.", "A golden egg of opportunity falls into your lap this month."];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        userDB.push(randomFortune)
        res.status(200).send(randomFortune);
    },

    getWatchList: (req, res) => {
        const watchList= ['Zombies', 'Legally Blond','Gordita Chronicles','Umbrella Academy','Stranger Things','Encanto'];
        
        let randomIndex = Math.floor(Math.random() * watchList.length);
        let randomMovie = watchList[randomIndex];
        res.status(200).send(randomMovie);
    },

    getAllFortunes: (req, res) => {
        
        
        // let randomIndex = Math.floor(Math.random() * watchList.length);
        // let randomFortune = watchList[randomIndex];
        res.status(200).send(userDB);
    },

    deleteFortune: (req, res) => {
        console.log(req.params.id)
        const {id} = req.params;
        usersDB.splice(id, 1);
        res.status(200).send(usersDB);
        // let index  = fortunes.indexOf(req.body)
        // fortunes.splice(index, 1);
        // res.status(200).send(fortunes)
    },

    addFortune: (req, res) => {
        // console.log(fortunes)
        console.log(req.body)
        const {userInput} = req.body;
        // let newFortune = { 
        //     text
        // }
        userDB.push(userInput);
        console.log(userDB)
        res.status(200).send(userDB)

    },

    changeFortune:  (req, res) => {
        let index  = fortunes.indexOf(req.body)
        fortunes[index] = req.body
        res.status(200).send(fortunes)

    }

}


