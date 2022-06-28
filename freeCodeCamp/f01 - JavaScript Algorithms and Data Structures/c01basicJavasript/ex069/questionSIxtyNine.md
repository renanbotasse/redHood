Comparisons with the Logical And Operator
Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

The same effect could be achieved by nesting an if statement inside another if:

if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";
will only return Yes if num is greater than 5 and less than 10. The same logic can be written as:

if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.

You should use the && operator once

You should only have one if statement

testLogicalAnd(0) should return the string No

testLogicalAnd(24) should return the string No

testLogicalAnd(25) should return the string Yes

testLogicalAnd(30) should return the string Yes

testLogicalAnd(50) should return the string Yes

testLogicalAnd(51) should return the string No

testLogicalAnd(75) should return the string No

testLogicalAnd(80) should return the string No