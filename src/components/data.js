export const bingoValues = [
  "Hello, hello?",
  "I need to jump in another call",
  "Could you share this slides afterwards?",
  "Animal noises in the backgound",
  "Can somebody grant presenter rights?",
  "Child noises in the background",
  "Bad Echo / Feedback",
  "You will send the minutes?",
  "Can we take this offline",
  "Sorry, I was on mute.",
  "Can you email that to everyone",
  "Could you please get closer to the mic?",
  "Next slide please",
  "Sorry, I did not find the conference Id",
  "Do you see my screen?",
  "Who just joined?",
  "Sorry, I had problems logging in",
  "I was having connection issues",
  "I will have to get back to you",
  "Sorry something is wrong with my calender",
  "Lets wait for few more people",
  "can you repeat please?",
  "Can everyone go on mute?",
  "Anybody wants to ask a question?",
  "We can now drop off.",
];

export function shuffleValues(array) {
  var ctr = array.length,
    temp,
    index;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = array[ctr];
    array[ctr] = array[index];
    array[index] = temp;
  }
  return array;
}
export const winCombinations = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],
  [0, 6, 12, 18, 24],
  [4, 8, 12, 16, 20],
];
