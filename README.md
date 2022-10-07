## In Project
- DigitalCurrency Website.
- Landing Page (Homepage).
- Search functionaly. (Search input and list of all)
- DetailShow, some sort of Price, History
chart or something like that. 

- HTML / CSS / JS

- CoinGecko.

- API - In order to these two pieces of code / these two software to communicate they have to do via interface which is called as API(Application Programming Interface).

    - An interface using which two peices of software communicate with each other. (It can be server to browser, or even server to another server).

# Wireframing
- It is drawing a rough sketch of how the website is going to look. This is to get an idea about what sections of the page we will have. 

# Resources for color paletts:
- https://coolors.co/
- https://colors.muz.li/
- https://mycolor.space/
- https://cssgradient.io/


# Note:
- &emsp; - It is used for 1 tab that is 4 space.
- &nbsp; - it is used for 1 single space.


## Detail Screen
-> Name
-> Current Price (INR and USD)
-> Description
-> Symbol
-> Image (Logo)
-> Start Date (genesis date)
-> Market Capital
-> Last 2 weeks change

- https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=true


- https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd%2Ceur


- https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=inr&days=7


# Chart Library
- https://www.chartjs.org/
# Chart Library CDN
- https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js


UNIX Timestamp -> The number of second since January 1st, 1970.
In JS, they save the number of milliseconds since Jan 01, 1970.

1 second = 1000 milliseconds.