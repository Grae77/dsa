# API CODE EXPLANATION

// select the HTML template for user cards and user card container

```
const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
```

// select the search bar input element

```
const searchInput = document.querySelector("[data-search]")
```

// create an empty array to store user data

```
let users = []
```

// add an event listener to the search bar input to handle search functionality

```
searchInput.addEventListener("input", e => {
```


  // get the value of the search bar input and convert to lowercase

```
const value = e.target.value.toLowerCase()
```


  // iterate over each user and check if they match the search query

```
users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||  // check if the user's name includes the search query
      user.rating.toLowerCase().includes(value) ||  // check if the user's rating includes the search query
      user.email.toLowerCase().includes(value) ||  // check if the user's email includes the search query
      user.restaurant.toLowerCase().includes(value) ||  // check if the user's restaurant includes the search query
      user.genre.toLowerCase().includes(value) ||  // check if the user's genre includes the search query
      user.review.toLowerCase().includes(value)  // check if the user's review includes the search query
```


    // toggle the "hide" class on the user card element to show or hide it based on the search query

```
    user.element.classList.toggle("hide", !isVisible)
  })
})
```

// fetch the user data from the rating.json file

```
fetch("/assets/js/rating.json")
  .then(res => res.json()) // parse the response as JSON
  .then(data => {
```

    // map over the user data and create a user card element for each user

```
 users = data.map(user => {
```

    // clone the user card template and get the necessary elements from the template

```
const card = userCardTemplate.content.cloneNode(true).children[0]
      const name = card.querySelector("[data-name]")
      const rating = card.querySelector("[data-rating]")
      const email = card.querySelector("[data-email]")
      const restaurant = card.querySelector("[data-restaurant]")
      const genre = card.querySelector("[data-genre]")
      const review = card.querySelector("[data-review]")
      const image = card.querySelector("[data-image]")
```

    // set the text content and image source for each user card element

```
 name.textContent = user.name
      rating.textContent = user.rating
      email.textContent = user.email
      restaurant.textContent = user.restaurant
      genre.textContent = user.genre
      review.textContent = user.review
      image.src = user.image
```

    // append the user card element to the user card container

```
userCardContainer.append(card)
```

    // return an object containing the user data and user card element

```
return {
        name: user.name,
        rating: user.rating,
        email: user.email,
        restaurant: user.restaurant,
        genre: user.genre,
        review: user.review,
        image: user.image,
        element: card
      }
    })
  })
```
