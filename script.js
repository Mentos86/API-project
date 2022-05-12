
async function getCoinId() {
    const selection = document.getElementById("inputField").value
    const baseUrl = "https://api.coingecko.com/api/v3/search"
    const requestParams = `?query=${selection}`
    
    const urlToFetch = `${baseUrl}${requestParams}`;
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            jsonResponse = await response.json();
            const coins = jsonResponse.coins;
            return coins;
        }

    }
    catch (error) {
        console.log(error);
    }
}

const array = [{"id":"Ethereum", "name": "ETH"},{"id":"Bitcoin","name": 'BTC' }]
array.forEach(element => {
    console.log(element.id)
})

const triggerDropdown = () =>{
    getCoinId().then((coins) => {
        const select = document.getElementById("idCoins");
        var length = select.options.length;
            for (i = length-1; i >= 0; i--) {
            select.options[i] = null;
}
    
        coins.forEach(item => {
            let option = document.createElement("option");
            option.value = item.id;
            option.text = item.name;
            select.appendChild(option);
        })
    })
}

function update () {
    const select = document.getElementById("idCoins");
    const option = select.options[select.selectedIndex];

    document.getElementById("outputSelection").innerHTML = option.value;
}



