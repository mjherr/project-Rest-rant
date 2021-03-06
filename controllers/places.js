const { append } = require('express/lib/response')

const router = require('express').Router()

//GET /places
app.get('/', (req, res) => {
  res.render('places/index')
})

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/salmon-veggie-bowl.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/bbq-hawaiian-pizza.jpg'
      }]
      
    res.render('places/index', {places})
})

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
  res.render('places/show', {place: places[id], id})
  }
})

module.exports = router