const usernames = [
'Albereder',
'Americarg',
'Anhartersp',
'Autestpe',
'Boricott',
'Conedia',
'Crossenel',
'DeluxeDarth',
'DramaLola',
'Etelycle',
'Extrabe',
'Hakalici',
'IamStylish',
'Locales',
'LovenNice',
'MissingWise',
'MowerGal',
'Nathwo',
'Newchinum',
'Perfectra',
'Ravagedyns',
'Rockonbr',
'Startie',
'Texarma',
'Topgreeni',
'VirtuosoChick',
'Wizon',
'Wonderye',
'WordIte',
'XoRomance',
]

const thoughts = [
    'First!',
    'This comment was made in 2022',
    'My favorite part was the whole thing',
    'Anyone else here because of Fullstack?',
    'I am in the weird part of the internet',
    'Star Wars isn`t very good',
    'Marriage no longer works',
    'Hot take',
    'Strawberries are disgusting',
    'Pineapple on pizza',
]


const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random user
const getRandomUsername = () => getRandomArrItem(usernames);

// Function to generate random thoughts that we can add to user object.
const getRandomThought = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(thoughts),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomUsername, getRandomThought };