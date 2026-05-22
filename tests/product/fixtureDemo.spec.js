const { test, expect } = require(
    '../../fixtures/baseFixture'
);

test('Fixture Demo Test', async ({ preparedPage }) => {

    await expect(
        preparedPage
            .getByRole('link', {
                name: 'Products'
            })
    ).toBeVisible();

});