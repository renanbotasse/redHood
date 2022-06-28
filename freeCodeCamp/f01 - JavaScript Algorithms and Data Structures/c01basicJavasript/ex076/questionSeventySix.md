Selecting from Many Options with Switch Statements
If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched case value until a break is encountered.

Here is an example of a switch statement:

switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.

Write a switch statement which tests val and sets answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta

caseInSwitch(1) should have a value of the string alpha

caseInSwitch(2) should have a value of the string beta

caseInSwitch(3) should have a value of the string gamma

caseInSwitch(4) should have a value of the string delta

You should not use any if or else statements

You should have at least 3 break statements

