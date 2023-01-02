const isPresent = (element) => {
  const elementIsUndefined = element == undefined;
  const elementIsNull = element == null;
  const elementIsPresent = !(elementIsUndefined || elementIsNull);
  return elementIsPresent;
}

const getElementById = (id) => {
  const element = document.getElementById(id);
  if(!isPresent(element)) {
      console.log(`Unable to retrieve element with id of '${id}'`)
      return;
  } else {
      console.log(`Successfully retrieved element with id of '${id}'`)
      return element;
  }
}

const getComputedStyle = (element) => {
  if(!isPresent(element)) {
      console.log(`Unable to compute style of element with value of '${element}'`);
      return;
  } else {
      console.log(`Successfully computed style of element with value of '${element}'`);
      return window.getComputedStyle(element);
  }
}

const getPropertyValue = (element, propertyValue) => {
  if(!isPresent(element)) {
    console.log(`Unable to get property value of '${propertyValue}' from element with value of '${element}'`);
  } else {
    console.log(`Successfully retrieved property value of '${propertyValue}' from element with value of '${element}'`);
    return element.getPropertyValue(propertyValue);
  }  
}