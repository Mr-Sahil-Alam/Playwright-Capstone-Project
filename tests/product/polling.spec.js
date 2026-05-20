const { test, expect } = require('@playwright/test');

test('Polling Assertion Demo', async () => {

    let counter = 0;

    await expect.poll(async () => {

        counter++;

        return counter;

    }).toBe(5);

});