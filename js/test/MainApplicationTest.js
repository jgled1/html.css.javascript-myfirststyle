function testHeaderBackgroundColor() {
    const header = getElementById('header');
    const headerStyles = getComputedStyle(header);
    const headerBackgroundColor = getPropertyValue(headerStyles, 'background-color');
    return headerBackgroundColor === 'rgb(255, 99, 71)';
}

function testHeaderTextSize() {
    const header = getElementById('header');
    const headerStyles = getComputedStyle(header);
    const headerTextSize = getPropertyValue(headerStyles, 'font-size');
    return headerTextSize === '24px';
}

function testHeaderTextAlignment() {
    const header = getElementById('header');
    const headerStyles = getComputedStyle(header);
    const headerTextAlignment = getPropertyValue(headerStyles, 'text-align');
    return headerTextAlignment === 'center';
}

function testListItemTextSize() {
    const listItem = getElementById('list-item');
    const listItemStyles = getComputedStyle(listItem);
    const listItemTextSize = getPropertyValue(listItemStyles, 'font-size');
    return listItemTextSize=== '15px';
}

function testListItemColor() {
    const listItem = getElementById('list-item');
    const listItemStyles = getComputedStyle(listItem);
    const listItemColor = getPropertyValue(listItemStyles, 'color');
    return listItemColor === 'rgb(0, 0, 0)';
}

function testListItemPadding() {
    const listItem = getElementById('list-item');
    const listItemStyles = getComputedStyle(listItem);
    const listItemPadding = getPropertyValue(listItemStyles, 'padding');
    return listItemPadding === '10px';
}