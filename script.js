mapboxgl.accessToken = 'pk.eyJ1IjoicmFqc29uaTIwMDQiLCJhIjoiY2w4ZGRlMjkwMHZrOTNubXJ2OGIxZW14aiJ9.67W53zZBqRsC5Hc5Qw9tuw'

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([-2.24, 53.48])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style:"mapbox://styles/rajsoni2004/cl9cm4981001w15r176kwtcui/draft",
    center: center,
    zoom: 15
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}