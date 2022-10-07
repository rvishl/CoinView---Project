function convertToJson(response) {
    return response.json();
}

function showInformation(data) {
    //DOM Manipulation
    const coin_img = document.getElementById('coin_img');
    const coin_name = document.getElementById('coin_name');
    const coin_description = document.getElementById('coin_description');


    coin_img.src = data.image.large;
    coin_name.innerText = data.name;
    coin_description.innerHTML = data.description.en;
    // console.log(data);
}

function showPrice(data) {
    //DOM Manipulation
    const inr_price = document.getElementById('inr_price');
    const usd_price = document.getElementById('usd_price');
    const eur_price = document.getElementById('eur_price');

    inr_price.innerText = data.bitcoin.inr;
    usd_price.innerText = data.bitcoin.usd;
    eur_price.innerText = data.bitcoin.eur;
    // console.log(data);
}

function showHistory(data) {
    //console.log(data);
    showGraph(data);
}

//fetch the data through API
fetch("https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=true").then(convertToJson).then(showInformation);
fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd%2Ceur").then(convertToJson).then(showPrice);
fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=inr&days=10&interval=daily").then(convertToJson).then(showHistory);

//return month string on the basis of month number(1-12).
function month(str) {
    switch(str) {
        case 0:
            return 'Jan';
        case 1:
            return 'Feb';
        case 2:
            return 'Mar';
        case 3:
            return 'Apr';
        case 4:
            return 'May';
        case 5:
            return 'Jun';
        case 6:
            return 'Jul';
        case 7:
            return 'Aug';
        case 8:
            return 'Sep';
        case 9:
            return 'Oct';
        case 10:
            return 'Nov';
        case 11:
            return 'Dec';
    }
}

// convert unix timestamp to date/month
function convertUnixToReadable(timestamp) {    
    const date = new Date(timestamp);
    const date_string = date.getDate();
    const month_string = month(date.getMonth());    
    const readable = date_string + ' - ' + month_string;
    return readable;
}

// Chart code
function showGraph(history_data) {

    // console.log(history_data.prices);

    let labels = [];
    let prices = [];

    for (let i=0; i<history_data.prices.length; i++) {
        const single_price = history_data.prices[i];

        const readable_label = convertUnixToReadable(single_price[0]);
        labels.push(readable_label);
        prices.push(single_price[1]);

        // console.log(single_price);
    }

    console.log(labels);
    console.log(prices);

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {          
            labels: labels,  
            datasets: [{
                label: 'Price in INR',
                data: prices,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                    // grid: {
                    //     display: false,
                    // }
                }
                // x: {
                //     grid: {
                //         display: false
                //     }
                // }
            }
        }
    });
}


