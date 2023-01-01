
function runTests() {
    const tests = [
        testHeaderBackgroundColor,
        testHeaderTextSize,
        testHeaderTextAlignment,
        testListItemTextSize,
        testListItemColor,
        testListItemPadding
    ];

    tests.forEach(test => {
        let testResult = false;
        try {
            console.log("================================================================================")
            console.log(`Running test with name of '${test.name}'`);
            testResult = test();
        } catch (exception) {
            console.error(exception);
        }
        console.log(`${test.name} output: ${testResult}`);
    });
}

runTests();