const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { getRandomThought, getRandomUsername } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Create empty array to hold the users
  const usernames = [];

  // Get some random thought objects using a helper function that we imported from ./data
  const thoughts = getRandomThought(5);

  // Loop 5 times -- add users to the users array
  for (let i = 0; i < 5; i++) {
    const username = getRandomUsername();
    const email = `${username}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}@gmail.com`;
    usernames.push({
      username,
      thoughts,
      email,
    });
  }

  // Add users to the collection and await the results
  await User.collection.insertMany(usernames);

  // Log out the seed data to indicate what should appear in the database
  console.table(usernames);
  console.table(thoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
