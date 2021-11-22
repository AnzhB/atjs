describe('task2', function () {
    it('task2.1', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut/');
        await browser.maximizeWindow();
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();
        await $('.sr-only').waitForDisplayed({ timeout: 15000, reverse: true });
        await browser.execute(function () {
            var elem = $('header');
            elem.remove();
        })
        await browser.pause(500);
        await $('//*[text()="alert"]').click();
        await browser.pause(500);
        browser.acceptAlert();
        await browser.pause(500);
        if (await browser.isAlertOpen()) {
            throw new Error('Accept alert wasnt executed')
        }
    });
});


   