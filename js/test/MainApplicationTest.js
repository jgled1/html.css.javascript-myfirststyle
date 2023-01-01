function testHeaderBackgroundColor() {
    const header = getElementById('header');
    const headerStyles = getComputedStyle(header);
    const headerBackgroundColor = headerStyles.getPropertyValue('background-color');
    return headerBackgroundColor === 'rgb(255, 99, 71)';
}

function testHeaderTextSize() {
    const header = getElementById('header');
    const headerStyles = getComputedStyle(header);
    const headerTextSize = headerStyles.getPropertyValue('font-size');
    return headerTextSize === '24px';
}

function testHeaderTextAlignment() {
    const header = getElementById('header');
    const headerStyles = getComputedStyle(header);
    const headerTextAlignment = headerStyles.getPropertyValue('text-align');
    return headerTextAlignment === 'center';
}

function testListItemTextSize() {
    const listItem = getElementById('list-item');
    const listItemStyles = getComputedStyle(listItem);
    const listItemTextSize = listItemStyles.getPropertyValue('font-size');
    return null;
}

function testListItemColor() {
    const listItem = getElementById('list-item');
    const listItemStyles = getComputedStyle(listItem);
    const listItemColor = listItemStyles.getPropertyValue('color');
    return listItemColor === 'rgb(0, 0, 0)';
}

function testListItemPadding() {
    const listItem = getElementById('list-item');
    const listItemStyles = getComputedStyle(listItem);
    const listItemPadding = listItemStyles.getPropertyValue('padding');
    return listItemPadding === '10px';
}