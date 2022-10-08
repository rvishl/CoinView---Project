function convertToJson(response) {
    return response.json();
}

function showResult(data) {
    // console.log(data.coins);

    const tbody_elem = document.getElementById("search_result");
    for(let i=0; i<data.coins.length; i++) {
        const single_data = data.coins[i];

        const new_row = document.createElement('tr');

        const new_id = document.createElement('td');
        const new_logo = document.createElement('td');
        const new_name = document.createElement('td');
        const new_link = document.createElement('td');

        const new_img = document.createElement('img');
        const new_a = document.createElement('a');
        
        new_id.innerText = i+1;
        new_img.src = single_data.thumb;
        new_logo.appendChild(new_img);
        new_name.innerText = single_data.name + "(" + single_data.symbol + ")";
        new_a.innerText = "Show more";
        new_a.href = `detail.html?coin=${single_data.id}`;
        new_link.appendChild(new_a); 


        new_row.appendChild(new_id);
        new_row.appendChild(new_logo);
        new_row.appendChild(new_name);
        new_row.appendChild(new_link);

        // console.log(single_data);

        tbody_elem.appendChild(new_row);
    }
}

const search_field = document.getElementById('search_field');

let url = new URL(window.location.href);
let params = new URLSearchParams(url.search);
let query = params.get("q");

console.log(query);

search_field.value = query;

fetch(`https://api.coingecko.com/api/v3/search?query=${query}`).then(convertToJson).then(showResult);