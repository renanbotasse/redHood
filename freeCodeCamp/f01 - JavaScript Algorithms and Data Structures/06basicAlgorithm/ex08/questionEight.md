Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Tests
Waiting:truncateString("A-tisket a-tasket A green and yellow basket", 8) should return the string A-tisket....
Waiting:truncateString("Peter Piper picked a peck of pickled peppers", 11) should return the string Peter Piper....
Waiting:truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return the string A-tisket a-tasket A green and yellow basket.
Waiting:truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return the string A-tisket a-tasket A green and yellow basket.
Waiting:truncateString("A-", 1) should return the string A....
Waiting:truncateString("Absolutely Longer", 2) should return the string Ab....