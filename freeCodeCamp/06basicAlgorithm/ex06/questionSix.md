Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Tests
Waiting:confirmEnding("Bastian", "n") should return true.
Waiting:confirmEnding("Congratulation", "on") should return true.
Waiting:confirmEnding("Connor", "n") should return false.
Waiting:confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
Waiting:confirmEnding("He has to give me a new name", "name") should return true.
Waiting:confirmEnding("Open sesame", "same") should return true.
Waiting:confirmEnding("Open sesame", "sage") should return false.
Waiting:confirmEnding("Open sesame", "game") should return false.
Waiting:confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
Waiting:confirmEnding("Abstraction", "action") should return true.
Waiting:Your code should not use the built-in method .endsWith() to solve the challenge.