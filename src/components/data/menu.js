function importAll(r) {
    return r.keys().map(r);
  }

// import images 
const sushies = importAll(require.context('../../images/', false, /\.(png|jpe?g)$/));
const sushi = [...sushies];

const fry = importAll(require.context('../../images/fries/', false, /\.(png|jpe?g)$/));
const fries = [...fry];

const drinkes = importAll(require.context('../../images/drinks/', false, /\.(png|jpe?g|webp)$/));
const drinks = [...drinkes];

export const data = {
  category:[
    {
        id:16,
        name:'Sushi',
        product: [
            {
                id:1,
                name: "Alaska",
                price : 80,
                description: "ths is the a menu item. It is for testing purposes. This is not real data.",
                image: sushi[0]
            },
            {
                id:2,
                name: "Californai",
                price : 70,
                description: "ths is the a menu item. It is for testing purposes. This is not real data.",
                image: sushi[1]
            },
            {
                id:3,
                name: "Wave Roll",
                price : 20.00,
                description: "ths is the a menu item. It is for testing purposes. This is not real data.",
                image: sushi[5]
            },
            {
                id:4,
                name: "Atlantic",
                price : 42.00,
                description: "ths is the a menu item. It is for testing purposes. This is not real data.",
                image: sushi[1]
            },
            {
                id:5,
                name: "Spicy Crab",
                price : 34.00,
                description: "ths is the a menu item. It is for testing purposes. This is not real data.",
                image: sushi[7]
            },
            {
                id:6,
                name: "Vegetarian",
                price : 50,
                description: "ths is the a menu item. It is for testing purposes. This is not real data.",
                image: sushi[2]
            },
        ]
    },
    {
        id:15,
        name:'Fries',
        product: [
            {
                id:7,
                name: "Potato Fries",
                price : 80,
                description: "ths is the a menu item. It is for testing purposes. This is not real data.",
                image: fries[0]
            },
            {
                id:8,
                name: "MC Fries",
                price : 70,
                description: "ths is the a menu item. It is for testing purposes. This is not real data.",
                image: fries[1]
            },
            {
                id:9,
                name: "Chips",
                price : 50,
                description: "ths is the a menu item. It is for testing purposes. This is not real data.",
                image: fries[2]
            },
        ]
    },
    {
        id:14,
        name:'Drinks',
        product: [
            {
                id:10,
                name: "Yougurt",
                price : 5,
                description: "ths is the a menu item. It is for testing purposes. This is not real data.",
                image: drinks[0]
            },
            {
                id:11,
                name: "Coca Cola",
                price : 12,
                description: "ths is the a menu item. It is for testing purposes. This is not real data.",
                image: drinks[1]
            },
            {
                id:12,
                name: "Seven Up",
                price : 10,
                description: "ths is the a menu item. It is for testing purposes. This is not real data.",
                image: drinks[2]
            },
            {
                id:13,
                name: "Small Water",
                price : 8,
                description: "ths is the a menu item. It is for testing purposes. This is not real data.",
                image: drinks[3]
            }
        ]
    }
  ]
}
