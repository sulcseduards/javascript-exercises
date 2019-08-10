const inquirer = require("inquirer");
const { VideoStore } = require("./videostore");
const store = new VideoStore();
store.addMovie("Godfather II", 5);
store.addMovie("The Matrix", 5);
store.addMovie("Star Wars Episode IV: A New Hope", 5);

async function rentVideo() {
  const { choices, name } = await inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "What is your name?"
    },
    {
      name: "choices",
      type: "checkbox",
      message: "Which ones do you want?",
      choices: store.asChoices
    }
  ]);

  store.rentMovies(choices, name);
  console.log(
    `Oh, ${name}. ${choices.map(c => c.name).join(", ")} is a good choice.`
  );
  console.log(`movies: ${store.printContent}`);
}

async function returnVideo() {
  const { name } = await inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "What is your name?"
    }
  ]);

  if (store.getUserMoviesAsChoices(name).length >= 1) {
    const { movie } = await inquirer.prompt([
      {
        name: "movie",
        type: "list",
        message: "Which one would you like to return?",
        choices: store.getUserMoviesAsChoices(name)
      }
    ]);
    const { movieRating } = await inquirer.prompt([
      {
        name: "movieRating",
        type: "list",
        message: "How would you rate this movie from 1 - 5",
        choices: store.getUserRatingChoice(name)
      }
    ]);
    store.returnMovie(movie, movieRating);
  } else {
    console.log(`You don't have any movies to return!`);
  }
}

async function fillVideoStore() {
  let addMore = true;
  while (addMore) {
    const { movieName, movieRating, more } = await inquirer.prompt([
      { type: "input", name: "movieName", message: "Enter movie name" },
      { type: "input", name: "movieRating", message: "Enter movie rating" },
      { type: "confirm", name: "more", message: "Would you like to add more?" }
    ]);
    addMore = more;
    store.addMovie(movieName, movieRating);
    console.log(`Thanks, here's a list of movies: ${store.printContent}`);
  }
}

async function app() {
  const { user } = await inquirer.prompt([
    {
      type: "list",
      name: "user",
      message: `Welcome to our video store. \n${store.printContent} \nWho are you?`,
      choices: [
        "User",
        "Admin",
        { name: `I don't want to be here. Let me go`, value: false }
      ]
    }
  ]);
  if (user === "Admin") {
    console.log("Hello Admin. I guess you're here to fill our store.");
    await fillVideoStore();
  } else if (user === "User") {
    console.log("Hello User");
    const { intent } = await inquirer.prompt([
      {
        type: "list",
        name: "intent",
        message: "What do you want to do?",
        choices: [
          { name: "Rent a video", value: "rent" },
          { name: "Return a video", value: "return" }
        ]
      }
    ]);
    intent === "rent" ? await rentVideo() : await returnVideo();
  } else {
    return;
  }

  console.log("Okay. Thanks and Bye!");

  // Start from beginning
  app();
}

app();
