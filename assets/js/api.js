const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.rating.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value) ||
      user.restaurant.toLowerCase().includes(value) ||
      user.genre.toLowerCase().includes(value) ||
      user.review.toLowerCase().includes(value)

    user.element.classList.toggle("hide", !isVisible)
  })
})

fetch("/assets/js/rating.json")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const name = card.querySelector("[data-name]")
      const rating = card.querySelector("[data-rating]")
      const email = card.querySelector("[data-email]")
      const restaurant = card.querySelector("[data-restaurant]")
      const genre = card.querySelector("[data-genre]")
      const review = card.querySelector("[data-review]")
      const image = card.querySelector("[data-image]")

      name.textContent = user.name
      rating.textContent = user.rating
      email.textContent = user.email
      restaurant.textContent = user.restaurant
      genre.textContent = user.genre
      review.textContent = user.review
      image.src = user.image

      userCardContainer.append(card)
      return { name: user.name, rating: user.rating, 
              email: user.email, restaurant: user.restaurant, 
              genre: user.genre, review: user.review, 
              image: user.image ,element: card }
    })
  })
