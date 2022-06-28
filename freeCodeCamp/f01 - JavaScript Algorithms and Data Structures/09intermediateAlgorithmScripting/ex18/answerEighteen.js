function truthCheck(collection, pre) {
    return collection.every(function (element) {
      return element.hasOwnProperty(pre) && Boolean(element[pre]);
    });
  }
  