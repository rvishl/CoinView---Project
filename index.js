function convertToJson(response) {
    return response.json();
}

function showData(data) {
    const bitcoin_price_container = document.getElementById("bitcoin_price_container");
    const ethereum_price_container = document.getElementById("ethereum_price_container");
    const tether_price_container = document.getElementById("tether_price_container");
    const binance_price_container = document.getElementById("binance_price_container");
    const doge_price_container = document.getElementById("doge_price_container");
    const solana_price_container = document.getElementById("solana_price_container");
    const cardano_price_container = document.getElementById("cardano_price_container");
    const helium_price_container = document.getElementById("helium_price_container");
    const polkadot_price_container = document.getElementById("polkadot_price_container");
    const litecoin_price_container = document.getElementById("litecoin_price_container");
    const uniswap_price_container = document.getElementById("uniswap_price_container");
    const chainlink_price_container = document.getElementById("chainlink_price_container");
    const cosmos_price_container = document.getElementById("cosmos_price_container");
    const dai_price_container = document.getElementById("dai_price_container");
    const flow_price_container = document.getElementById("flow_price_container");

    bitcoin_price_container.innerText = data.bitcoin.inr;
    ethereum_price_container.innerText = data.ethereum.inr;
    tether_price_container.innerText = data.tether.inr;
    binance_price_container.innerText = data.binancecoin.inr;
    doge_price_container.innerText = data.dogecoin.inr;
    solana_price_container.innerText = data.solana.inr;
    cardano_price_container.innerText = data.cardano.inr;
    helium_price_container.innerText = data.helium.inr;
    polkadot_price_container.innerText = data.polkadot.inr;
    litecoin_price_container.innerText = data.litecoin.inr;
    uniswap_price_container.innerText = data.uniswap.inr;
    chainlink_price_container.innerText = data.chainlink.inr;
    cosmos_price_container.innerText = data.cosmos.inr;
    dai_price_container.innerText = data.dai.inr;
    flow_price_container.innerText = data.flow.inr;
    //console.log(data);
}

fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cbinancecoin%2Cdogecoin%2Ccardano%2Csolana%2Chelium%2Cpolkadot%2Clitecoin%2Cuniswap%2Cchainlink%2Ccosmos%2Cdai%2Cflow&vs_currencies=inr").then(convertToJson).then(showData);