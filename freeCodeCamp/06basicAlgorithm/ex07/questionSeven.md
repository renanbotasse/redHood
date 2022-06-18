Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

Tests
Waiting:repeatStringNumTimes("*", 3) should return the string ***.
Waiting:repeatStringNumTimes("abc", 3) should return the string abcabcabc.
Waiting:repeatStringNumTimes("abc", 4) should return the string abcabcabcabc.
Waiting:repeatStringNumTimes("abc", 1) should return the string abc.
Waiting:repeatStringNumTimes("*", 8) should return the string ********.
Waiting:repeatStringNumTimes("abc", -2) should return an empty string ("").
Waiting:The built-in repeat() method should not be used.
Waiting:repeatStringNumTimes("abc", 0) should return "".