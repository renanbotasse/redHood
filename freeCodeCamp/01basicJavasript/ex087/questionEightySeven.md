Using Objects for Lookups
Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.

Here is an example of a simple reverse alphabet lookup:

const alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};

alpha[2];
alpha[24];

const value = 2;
alpha[value];
alpha[2] is the string Y, alpha[24] is the string C, and alpha[value] is the string Y.

Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

phoneticLookup("alpha") should equal the string Adams

phoneticLookup("bravo") should equal the string Boston

phoneticLookup("charlie") should equal the string Chicago

phoneticLookup("delta") should equal the string Denver

phoneticLookup("echo") should equal the string Easy

phoneticLookup("foxtrot") should equal the string Frank

phoneticLookup("") should equal undefined

You should not modify the return statement

You should not use case, switch, or if statements