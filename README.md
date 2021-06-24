### Welcome to the fifth mini-challenge!

The idea of this challenge is to prove that you have a basic knowledge of unit testing. For this, we are only asking you to create a simple unit test of a filter function.

For this exercise, we are going to use [Jest](https://jestjs.io/docs/en/getting-started). It is not required that you know advance Jest, but we would like to see that you understand the process of unit testing and how the matchers work.

## Instructions

In this Codesandbox, you have a complete environment with all you need to run your app. You just have to follow the instructions below:

1. Open the `utils/filterPokemon.js` file and start to analyze the function.
2. Open the `mock/pokeData.js` file to see the mock data that we are going to use in our tests.
3. Open the `utils/filterPokemon.test.js` file and review the code, this is the file that you are going to change to include some tests.
4. Inside of the `describe` function you will have to create 3 simple tests that will check that our filter function is working properly. Test the following scenarios:
   A) The function should return an array.
   B) The function should return an empty array when we filter by an empty string "".
   C) The function should return an array with charizard object when we search by "charizard".
5. You can check your tests are passing in the "Tests" tab or if you are running this code in your local machine, just write "npm run test" in your terminal.

## Bonus

Create two more tests to validate the input values passed to the filter function, the scenarios are the following:

1. The `pokeList` argument is `null`, `undefined` or not an `array`.
2. The `name` argument is `null`, `undefined` or not a `string`.

> Note: Both scenarios could make the tests fail as it is the code now, but what would be the fix to make them pass?
