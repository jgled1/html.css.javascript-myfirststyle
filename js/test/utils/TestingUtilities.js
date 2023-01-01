const getElementById = (id) => {
  const element = document.getElementById(id);
  const elementIsUndefined = element == undefined;
  const elementIsNull = element == null;
  const elementIsPresent = !(elementIsUndefined || elementIsNull);
  if(!elementIsPresent) {
      console.log(`Unable to retrieve element with id of '${id}'`)
      return;
  } else {
      console.log(`Successfully retrieved element with id of '${id}'`)
      return element;
  }
}

const getComputedStyle = (element) => {
  const elementIsUndefined = element == undefined;
  const elementIsNull = element == null;
  const elementIsPresent = !(elementIsUndefined || elementIsNull);
  if(!elementIsPresent) {
      console.log(`Unable to compute style of element with value of '${element}'`);
      return;
  } else {
      console.log(`Successfully computed style of element with value of '${element}'`);
      return window.getComputedStyle(element);
  }
}