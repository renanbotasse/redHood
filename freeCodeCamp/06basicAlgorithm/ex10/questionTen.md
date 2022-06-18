Boo who
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

Tests
Waiting:booWho(true) should return true.
Waiting:booWho(false) should return true.
Waiting:booWho([1, 2, 3]) should return false.
Waiting:booWho([].slice) should return false.
Waiting:booWho({ "a": 1 }) should return false.
Waiting:booWho(1) should return false.
Waiting:booWho(NaN) should return false.
Waiting:booWho("a") should return false.
Waiting:booWho("true") should return false.
Waiting:booWho("false") should return false.