function repeatStringNumTimes(str, num) {
    let result0 = [];
    if (num > 0){
                for (i = 1; i <= num; i++) {
                        result0.push(str);
                                            }
                 return result0.join("");
                }
                else {
                    return "";
                     }
    }
  console.log(repeatStringNumTimes("*", 0));