const app = require("express")();
const PORT = 8080;
const cors = require("cors");

let quotes = [
  {
    text: "Breathe Air",
    author: "Andrew Tate",
  },
  {
    text: "What color is your bugatti?",
    author: "Andrew Tate",
  },
  {
    text: "If you cannot control your own mind then you are just a feather in the wind of life.",
    author: "Andrew Tate",
  },
  {
    text: "Don't believe in things that take power away from you",
    author: "Andrew Tate",
  },
  {
    text: "My unmatched perspicacity coupled with my sheer indefatigability, make me a feared opponent in any realm of human endeavor",
    author: "Emory Tate",
  },
  {
    text: "Allow manipulation to find out where your enemy wants you to go, then use your mind to break the trap and punish the perpetrators",
    author: "Andrew Tate",
  },
  {
    text: "Everyone has a dream, but not everyone has a plan",
    author: "Andrew Tate",
  },
  {
    text: "Nothing good is going to happen on accident",
    author: "Andrew Tate",
  },
  {
    text: "Your mind must be stronger than your feelings",
    author: "Andrew Tate",
  },
  {
    text: "Your are the only person who can make this work, and you are the only person that can f*ck this up",
    author: "Andrew Tate",
  },
  {
    text: "A man without a vision for his future, always return to his past",
    author: "Andrew Tate",
  },
  {
    text: "You are exactly where you deserve to be, change who you are and you will change how you live",
    author: "Andrew Tate",
  },
  {
    text: "No exceptional person ever lived like an average person",
    author: "Andrew Tate",
  },
  {
    text: "Do the impossible and you'll never doubt yourself ever again",
    author: "Andrew Tate",
  },
  {
    text: "A MAN should have absolutely no interest in whether he is actually happy or not",
    author: "Andrew Tate",
  },
  {
    text: "How you feel should have no impact on how you live your life",
    author: "Andrew Tate",
  },
  {
    text: "The temporary satisfaction of quitting is outweighed by the eternal suffering of being a nobody",
    author: "Andrew Tate",
  },
  {
    text: "The man who goes to the gym every single day regardless of how he feels will always beat the man who goes to the gym when he feels like going to the gym",
    author: "Andrew Tate",
  },
  {
    text: "Anything you cannot conquer will enslave you, To conquer the world, you must first conquer yourself",
    author: "Andrew Tate",
  },
];
let arrLength = quotes.length;
app.listen(PORT, () => {
  console.log(`alive on http://localhost:${PORT}`);
});
app.use(
  cors({
    origin: "*",
  })
);

app.get("/tateQuote", (req, res) => {
  let rand = Math.floor(Math.random() * arrLength) - 1;
  res.status(200).send(quotes[rand]);
});

// app.post("/tshirt/:id", (req, res) => {
//   const { id } = req.params;
//   const { logo } = req.body;

//   if (!logo) {
//     res.status(418).send({ message: "We need a logo" });
//   }
//   res.send({
//     tshirt: `Tshirt with logo ${logo} and ID of ${id}`,
//   });
// });
