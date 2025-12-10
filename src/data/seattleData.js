import spaceNeedleImage from "../assets/space-needle.jpg"
import kerryParkImage from "../assets/kerry-park.jpg"
import alkiBeachImage from "../assets/alki-beach.jpg"
import starbucksStoreImage from "../assets/starbucks.jpg"
import pikePlaceMarketImage from "../assets/pike-place.jpg"
import gumWallImage from "../assets/gum-wall.jpg"
import gasworksImage from "../assets/gasworks.jpg"
import seattleAquariumImage from "../assets/seattle-aquarium.jpg"
import ivarsImage from "../assets/ivars.jpg"
import seattleGreatWheelImage from "../assets/seattle-wheel.jpg"
import museumOfPopCultureImage from "../assets/mopop.jpg"
import hellenikaImage from "../assets/hellenika.jpg"
import ferryImage from "../assets/ferry.jpg"
import boeingImage from "../assets/boeing.png"
import cortinaImage from "../assets/cortina.avif"

export const placesToEat = [
  {
    id: "Pike Place Market",
    title: "Pike Place Market",
    description: "Established in 1907, this historic market is one of the oldest continuously operated public farmers' markets in the U.S. Home to fresh seafood, artisanal products, and the famous fish-throwing fishmongers. Don't miss the original Starbucks store and local food vendors offering everything from fresh produce to handmade crafts.",
    image: pikePlaceMarketImage,
    rating: 5,
    type: "places-to-eat"
  },
  {
    id: "Ivar's",
    title: "Ivar's",
    description: "Ivar's is a seafood restaurant chain in Seattle, known for its clam chowder and seafood. It's a popular spot for locals and tourists alike.",
    image: ivarsImage,
    rating: 5,
    type: "places-to-eat"
  },
  {
    id: "First Starbucks Store",
    title: "First Starbucks Store",
    description: "The first Starbucks store was opened in 1971 in Seattle's Pike Place Market. Visit the original location where the coffee giant began, featuring the original logo and historic atmosphere.",
    image: starbucksStoreImage,
    rating: 5,
    type: "places-to-eat"
  },
  {
    id: "Hellenika Cultured Creamery",
    title: "Hellenika Cultured Creamery",
    description: "A family-owned gelato shop in Pike Place Market specializing in small-batch, slow-fermented gelato made with fresh local milk and live cultures. Blends traditional Greek techniques with Pacific Northwest creativity, featuring unique flavors like lemon curd, Dutch chocolate, and London Fog made with MarketSpice tea.",
    image: hellenikaImage,
    rating: 5,
    type: "places-to-eat"
  },
  {
    id: "Cortina",
    title: "Cortina",
    description: "A modern Italian restaurant located at the base of Two Union Square in downtown Seattle. Part of the Ethan Stowell Restaurants group, Cortina offers contemporary Italian cuisine including pasta, pizza, and seafood in a stylish setting featuring a 60-foot bar and glass pendant chandelier. Perfect for a sophisticated dining experience in the heart of downtown.",
    image: cortinaImage,
    rating: 5,
    type: "places-to-eat"
  }
]

export const sightseeing = [
  {
    id: "Space Needle",
    title: "Space Needle",
    description: "Seattle's iconic 605-foot-tall landmark offering 360-degree views of downtown Seattle, Mount Rainier, and Puget Sound. The observation deck features a glass floor for a unique perspective. Built for the 1962 World's Fair, it remains one of the most recognizable structures in the world and a must-see for any visitor.",
    image: spaceNeedleImage,
    rating: 5,
    type: "sightseeing"
  },
  {
    id: "Kerry Park",
    title: "Kerry Park",
    description: "A small public park on Queen Anne Hill offering postcard-perfect panoramic views of downtown Seattle, Elliott Bay, and Mount Rainier. This is the spot where you'll capture that iconic Seattle skyline photo with the Space Needle. Best visited during sunset for breathtaking views.",
    image: kerryParkImage,
    rating: 5,
    type: "sightseeing"
  },
  {
    id: "Alki Beach",
    title: "Alki Beach",
    description: "Alki Beach is a popular beach in West Seattle, known for its beautiful views of the Puget Sound and the Olympic Mountains. It's a great place to relax, watch the sunset, and enjoy the beach.",
    image: alkiBeachImage,
    rating: 5,
    type: "sightseeing"
  },
  {
    id: "The Gum Wall",
    title: "The Gum Wall",
    description: "The Gum Wall is a popular tourist attraction in Seattle's Pike Place Market. It's a wall covered in chewing gum and is a great place to see the city's unique culture.",
    image: gumWallImage,
    rating: 5,
    type: "sightseeing"
  },
  {
    id: "Gasworks Park",
    title: "Gasworks Park",
    description: "A unique public park on the north shore of Lake Union featuring panoramic views of the Seattle skyline. The park occupies the site of a former gasification plant and retains industrial remnants, making it the only remaining coal gasification plant in the United States. Features include a large play barn, a prominent hill popular for kite flying, and picnic areas.",
    image: gasworksImage,
    rating: 5,
    type: "sightseeing"
  }
]

export const activities = [
  {
    id: "Seattle Aquarium",
    title: "Seattle Aquarium",
    description: "Located on Pier 59, the Seattle Aquarium showcases marine life native to the Pacific Northwest. The recently opened Ocean Pavilion features a nearly 500,000-gallon tank with Indo-Pacific leopard sharks and spotted eagle rays. Perfect for families and groups interested in learning about local marine ecosystems.",
    image: seattleAquariumImage,
    rating: 5,
    type: "activities"
  },
  {
    id: "Seattle Great Wheel",
    title: "Seattle Great Wheel",
    description: "Take a ride on this 175-foot-tall Ferris wheel located on Pier 57, offering panoramic views of Elliott Bay and the city skyline. Each climate-controlled gondola provides a comfortable experience year-round. Great for groups looking for a memorable way to see Seattle from above.",
    image: seattleGreatWheelImage,
    rating: 4,
    type: "activities"
  },
  {
    id: "Museum of Pop Culture (MoPOP)",
    title: "Museum of Pop Culture (MoPOP)",
    description: "Explore contemporary pop culture at this unique museum featuring exhibits on music, film, and science fiction. Located at Seattle Center, MoPOP houses memorabilia from iconic movies and artists. Interactive exhibits make it engaging for groups of all ages, especially music and movie enthusiasts.",
    image: museumOfPopCultureImage,
    rating: 5,
    type: "activities"
  },
  {
    id: "Ferry to Bainbridge Island",
    title: "Ferry to Bainbridge Island",
    description: "Take a scenic 35-minute ferry ride from downtown Seattle to Bainbridge Island, offering stunning views of the Seattle skyline, Puget Sound, and the Olympic Mountains. The ferry ride itself is an experience, with opportunities to see marine life and enjoy the fresh sea air. Perfect for groups looking for a relaxing way to see Seattle from the water.",
    image: ferryImage,
    rating: 5,
    type: "activities"
  },
  {
    id: "Museum of Flight",
    title: "Museum of Flight",
    description: "One of the largest air and space museums in the world, featuring an extensive collection of aircraft and space artifacts. Located near Boeing Field, the museum showcases over 175 aircraft and spacecraft, including historic planes, the original Boeing 747, and exhibits on aviation history. Perfect for groups interested in aerospace, engineering, and aviation history.",
    image: boeingImage,
    rating: 5,
    type: "activities"
  }
]

// Helper function to get item by id and type
export const getItemById = (id, type) => {
  const allItems = [...placesToEat, ...sightseeing, ...activities]
  return allItems.find(item => item.id === id && item.type === type) || null
}

// Helper function to get item by id only (searches all types)
export const getItemByIdAnyType = (id) => {
  const allItems = [...placesToEat, ...sightseeing, ...activities]
  return allItems.find(item => item.id === id) || null
}

