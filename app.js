const app = document.getElementById('root') // get div root id

const logo = document.createElement('img') // create image element
logo.src = './logo/logo.png' //image source

const container = document.createElement('div')
container.setAttribute('class', 'container') // created a new div element with class attribute 'container'

app.appendChild(logo) // placing the logo and the container in the website using the appendChild() method to the app root
app.appendChild(container)


var request = new XMLHttpRequest()
    // create a request var and assign a new XMLhtprqt... object to it

request.open('GET', 'http://gateway.marvel.com/v1/public/comics', true)
    // open a new connection, using the GET request on the URL endpoint
    //Then we'll open a new connection with the open() method - in the arguments we'll specify the type of request as GET as well as the URL of the API endpoint. The request completes and we can access the data inside the onload function. When we're done, we'll send the request.
console.log('GET')
request.onload = function() {
    // begin accessing JSON data here
    var data = JSON.parse(this.response)
        //We're going to use JSON.parse() to parse the response, and create a data variable that contains all the JSON as an array of JavaScript objects. Using forEach(), we'll console log out the title of each film to ensure it's working properly.
    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            // create a div with a card class
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            // create an h1 and set the text content to the films title
            const h1 = document.createElement('h1')
            h1.textContent = movie.title

            // create a p and set the text content to the films description
            const p = document.createElement('p')
            movie.description = movie.description.substring(0, 300) // limit to 300 characters
            p.textContent = `${movie.description}...` // end with an ellipses

            // append the cards to the container element
            container.appendChild(card)

            // each card will contain an h1 and a p
            card.appendChild(h1)
            card.appendChild(p)
        })
    } else {
        const errorMesssage = document.createElement('banana')
        errorMesssage.textContent = `Did it worked?`
        app.appendChild(errorMesssage)
            // create element error messages
    }


}
request.send()