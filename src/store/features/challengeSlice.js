import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  challenges: [
    {
      test_names: [
        "Sum two numbers together",
        "Sum two or more numbers together",
      ],
      test_inputs: ["myFunction([1,2])", "myFunction([2,3,4])"],
      test_results: [3, 9],
      test_placeholder: `function myFunction(args){
        return args
      }`,
      test_description:
        "Given an unknown number of integers, can you create a function that returns the sum of all those integers.",
    },
    {
      test_names: [
        "Remove first and last letters of a word",
        "Remove first and last letters of a single sentence",
        "Remove first and last letters of a each entry in an array",
      ],
      test_inputs: [
        "myFunction(['treehouse'])",
        "myFunction(['the microphone is in the drawer'])",
        "myFunction(['the microphone is in the drawer', 'the sun rises at six in the morning', 'the dog and the cat are best friends'])",
      ],
      test_results: [
        "reehous",
        "he microphone is in the drawe",
        [
          "the microphone is in the drawer",
          "the sun rises at six in the morning",
          "the dog and the cat are best friends",
        ],
      ],
      test_placeholder: `function myFunction(args){
        return args
      }`,
      test_description:
        "You are a given a single word, or a sentence of several words and asked to remove the first and last letter of the word, or every word in the array.",
    },
    {
      test_names: [
        "Check is a single word is a palindrome",
        "Check is single sentence is a palindrome",
        "check is multiple words are palindromes",
      ],
      test_inputs: [
        "myFunction(['abba'])",
        "myFunction(['No lemon, no melon'])",
        "myFunction(['dog', 'madam', 'racecar'])",
      ],
      test_results: [true, true, [false, true, true]],
      test_placeholder: `function myFunction(args){
        return args
      }`,
      test_description:
        "The palindrome test... can you determine if a single word, a sentence or each entry in a multi-word array is a true palindrome",
    },
  ],
  completedChallenges: [],
};

const challengeSlice = createSlice({
  name: "challenges",
  initialState,
  reducers: {
    addCompletedChallenge: (state, action) => {
      state.completedChallenges.push(action.payload);
    },
  },
});

export const { addCompletedChallenge } = challengeSlice.actions;

export const challengeSelector = (state) => state.challenge.challenges;

export default challengeSlice.reducer;
