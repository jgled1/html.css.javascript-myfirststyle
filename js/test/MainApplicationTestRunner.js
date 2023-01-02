
function runTests() {
    const tests = [
        testListItemTextSize,
        testListItemColor,
        testListItemPadding,
        testHeaderBackgroundColor,
        testHeaderTextSize,
        testHeaderTextAlignment
    ];

    tests.forEach(test => {
        let testResult = false;
        try {
            console.log("================================================================================")
            console.log(`Running test with name of '${test.name}'`);
            testResult = test();
            if(testResult === true) {
                console.log(`${test.name} output: ${testResult}`);
            } else {
                console.error(`${test.name} output: ${testResult}`);
            }
        } catch (exception) {
            console.error(exception);
        }        
    });
}

runTests();