// Q1 display a star * for each full rating and full-stop (.) for the half rating
function showRating(rating) {
  let rate = "";
  for (let i = 0; i < rating; ++i) {
    rate += "*";
    // to not make unnecessary spaces
    // on layman terms, if the rating is not on-the-end/not-equal-to-end, we put space
    if (i !== rating - 1) {
      rate += " ";
    }
  }
  //   this if loop is not included in the for loop cuz it then will put full stops on every rating
  if (!Number.isInteger(rating)) {
    rate += ".";
  }
  return rate;
}

console.log(showRating(4));
console.log(showRating(6));
console.log(showRating(6.2));

// Q2 given array of numbers, return the numbers sorted low to high
function sortLowToHigh(numbers) {
  // this is how to sort NUMERICALLY
  // iyw to sort alphabetically, leave sort (blank, nothing, do not mind this just include a parenthesis beside it)
  return numbers.sort((a, b) => a - b);
}

console.log(sortLowToHigh([1, 5, 0, 10, -20, 100, -30]));

// Q3 sort high to low, given objects inside array tho
function sortHighToLow(object) {
  return object.sort((a, b) => b.price - a.price);
  // since the prices are inside an object, we put .price(inside the object) to call it and that is the one being sorted instead of the {whole object itself}
}

console.log(
  sortHighToLow([
    { id: 1, price: 50 },
    { id: 2, price: 30 },
    { id: 3, price: 60 },
    { id: 4, price: 10 },
  ])
);

// Q4 Promises, hmmm, yeh I learnt them already so IN WE GO LEZGO Q5

// Q5 find all post by a single user, a user has its posts stored in a database in which enclosed by a userId to separate from individual posts by every user, damn look at that explain

// we call them API's
async function API(userId) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // this is all backend stuff to be able to be able to be read by frontend
  const data = await response.json();
  // we have filtered enough so yeh get bored with having to use these so that it means I memorized them already
  const post = data.filter((element) => element.userId === userId);

  console.log(post);
}

API(4);

// Q6 I think these last from one, return the 1st 6 incomplete to-do's from the result
async function firstSixToDos(completed) {
  const respond = await fetch("https://jsonplaceholder.typicode.com/todos");
  const team = await respond.json();

  // MY SOLUTION (this works btw)
  const list = team.filter((element) => element.completed === false); //forgot I can just !element.completed instead of that so yeah
  const six = list.filter((element) => element.id <= 7);

  // ANSWER
  const incompleteTasks = team.filter((element) => !element.completed).slice(0, 6);

  console.log(incompleteTasks);
  console.log(six);
  //already filtered the all the false, now just gotta filter all false to do's from 1 to 6
  //did some if loops, then another const just suddenly came to mind so yeh, basically sugarcoating from trying to getting lazy
}

firstSixToDos();
