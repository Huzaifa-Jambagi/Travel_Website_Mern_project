const sampleListings = [
{
    title: "Modern Apartment in NYC",
    description: "Stay in style in this sleek, modern apartment located in the heart of New York City.",
    image: {
        filename:"listingimage",
        url:"https://images.pexels.com/photos/10812974/pexels-photo-10812974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: 3500,
    location: "New York",
    country: "United States"
},
{
    title: "Beachfront Villa in Hawaii",
    description: "Experience paradise in this stunning beachfront villa with direct access to the beach.",
    image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/1488327/pexels-photo-1488327.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    price: 7000,
    location: "Kauai",
    country: "United States"
},
{
    title: "Spacious Loft in San Francisco",
    description: "This spacious loft features high ceilings and large windows, perfect for city living.",
    image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/2451566/pexels-photo-2451566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    price: 3000,
    location: "San Francisco",
    country: "United States"
},
{
    title: "Stylish Studio in Tokyo",
    description: "Immerse yourself in the vibrant culture of Tokyo in this stylish and modern studio apartment.",
    image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1800,
    location: "Tokyo",
    country: "Japan"
},
{
    title: "Charming Victorian Home",
    description: "Stay in this beautifully restored Victorian home filled with character and charm.",
    image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/6202328/pexels-photo-6202328.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2200,
    location: "San Francisco",
    country: "United States"
},
{
    title: "Sunny Studio in Barcelona",
    description: "Enjoy the vibrant culture of Barcelona in this sunny studio apartment with great city views.",
    image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/16762322/pexels-photo-16762322/free-photo-of-photo-of-a-man-painting-on-a-small-canvas.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1500,
    location: "Barcelona",
    country: "Spain"
},
{
    title: "Riverside Apartment in London",
    description: "Enjoy the best of London in this stylish riverside apartment with breathtaking views.",
    image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/28486319/pexels-photo-28486319/free-photo-of-stunning-night-time-cityscape-of-london-skyline.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2500,
    location: "London",
    country: "United Kingdom"
},
{
    title: "Luxury Yacht on the Mediterranean",
    description: "Experience life at sea on this stunning luxury yacht with all the amenities for a perfect getaway.",
    image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/919237/pexels-photo-919237.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 5000,
    location: "Monaco",
    country: "Monaco"
},
{
    title: "Charming Cabin in the Woods",
    description: "Reconnect with nature in this charming cabin surrounded by towering trees and a peaceful atmosphere.",
    image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/9433045/pexels-photo-9433045.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 800,
    location: "Whistler",
    country: "Canada"
},
{
    title: "Stylish Apartment in Sydney",
    description: "Enjoy the vibrant lifestyle of Sydney in this modern and stylish apartment with great views of the harbor.",
    image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/28917753/pexels-photo-28917753/free-photo-of-cozy-alpine-interior-with-leather-chair.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 2000,
    location: "Sydney",
    country: "Australia"
},
{
    title: "Countryside Bungalow",
    description: "Enjoy a peaceful retreat in this lovely bungalow surrounded by lush greenery and scenic views.",
    image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/434549/pexels-photo-434549.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1000,
    location: "Berkshire",
    country: "United Kingdom"
},
{
    title: "Elegant Townhouse in Paris",
    description: "Experience the romance of Paris in this elegant townhouse with classic French decor.",
    image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/23855356/pexels-photo-23855356/free-photo-of-street-lamp-and-townhouse-near-eiffel-tower-in-paris-france.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 3000,
    location: "Paris",
    country: "France"
},
{
    title: "Sunny Farmhouse",
    description: "Escape to the countryside in this sunny farmhouse with plenty of space for family and friends.",
    image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/9811328/pexels-photo-9811328.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1500,
    location: "Oregon",
    country: "United States"
},
//
{
    title: "Historical Castle Stay",
    description: "Live like royalty in this beautifully restored castle offering a unique lodging experience.",
    image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/28857861/pexels-photo-28857861/free-photo-of-historic-fortress-by-the-bosphorus-river.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 8000,
    location: "Scotland",
    country: "United Kingdom"
},
{
    title: "Chic Studio in Berlin",
    description: "Explore Berlin's vibrant culture in this chic studio located in a trendy neighborhood.",
    image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/3097112/pexels-photo-3097112.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1200,
    location: "Berlin",
    country: "Germany"
},
{
    title: "Charming Villa in Tuscany",
    description: "Experience the beauty of Tuscany in this charming villa surrounded by vineyards.",
    image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/28889242/pexels-photo-28889242/free-photo-of-scenic-lighthouse-view-in-cascais-portugal.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 4000,
    location: "Tuscany",
    country: "Italy"
},
{
    title: "Rustic Lodge in the Mountains",
    description: "Enjoy breathtaking mountain views in this rustic lodge, perfect for outdoor enthusiasts.",
    image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/18053822/pexels-photo-18053822/free-photo-of-woman-sitting-in-front-of-a-huge-window-admiring-the-beautiful-panorama-of-the-valley.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1600,
    location: "Aspen",
    country: "United States"
},
{
    title: "Elegant Suite in Dubai",
    description: "Experience luxury in this elegant suite with stunning views of the Dubai skyline.",
    image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/14750389/pexels-photo-14750389.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 4500,
    location: "Dubai",
    country: "UAE"
},
{
    title: "Quaint Cottage in the Countryside",
    description: "Relax in this quaint cottage surrounded by beautiful gardens and a serene atmosphere.",
    image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/1131573/pexels-photo-1131573.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 900,
    location: "Kent",
    country: "United Kingdom"
},
{
    title: "Sleek Apartment in Shanghai",
    description: "Enjoy a stylish stay in this sleek apartment located in the bustling city of Shanghai.",
    image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/533157/pexels-photo-533157.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1700,
    location: "Shanghai",
    country: "China"
},
{
    title: "Elegant Resort in Bali",
    description: "Escape to paradise in this elegant resort surrounded by stunning landscapes.",
    image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/2480608/pexels-photo-2480608.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 3000,
    location: "Bali",
    country: "Indonesia"
},
{
    title: "Rustic Cabin in the Alps",
    description: "Enjoy breathtaking views in this rustic cabin nestled in the beautiful Alps.",
    image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/2583494/pexels-photo-2583494.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1200,
    location: "Alps",
    country: "Switzerland"
},
{
    title: "Charming Farm Stay",
    description: "Experience farm life in this charming stay that offers fresh produce and beautiful views.",
    image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    price: 900,
    location: "Napa Valley",
    country: "United States"
},
//
{
    title: "Luxury Cabin in the Mountains",
    description: "Relax in this luxury cabin featuring stunning views and top-notch amenities.",
    image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/17715855/pexels-photo-17715855/free-photo-of-a-house-in-the-middle-of-a-forest-with-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 4500,
    location: "Lake Tahoe",
    country: "United States"
},
{
    title: "Elegant Penthouse in Miami",
    description: "Enjoy luxurious living in this elegant penthouse with breathtaking views of Miami.",
    image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/8572163/pexels-photo-8572163.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 5000,
    location: "Miami",
    country: "United States"
},

//12
{
    title: "Serene Lake House",
    description: "Unwind in this serene lake house with stunning views and peaceful surroundings.",
    image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/1302242/pexels-photo-1302242.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 3000,
    location: "Minnesota",
    country: "United States"
},
{
    title: "Stylish Cabin in the Forest",
    description: "Experience the beauty of nature in this stylish cabin tucked away in the forest.",
    image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/10511470/pexels-photo-10511470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    price: 1500,
    location: "Montana",
    country: "United States"
},
{
    title: "Secluded Beach House in Costa Rica",
    description: "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/5690589/pexels-photo-5690589.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica"
},
{
    title: "Cozy Cottage by the Sea",
    description: "Enjoy a relaxing getaway in this charming cottage with stunning ocean views.",
    image: {
        filename: "listingimage",
        url: "https://images.pexels.com/photos/5028852/pexels-photo-5028852.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    price: 22000,
    location: "Maine",
    country: "United States"
}
];

module.exports = { data: sampleListings };