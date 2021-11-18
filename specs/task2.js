describe('task2', function () {
    it('task2.1', async function () {

        await browser.url('https://viktor-silakov.github.io/course-sut/');
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();
        await $('.sr-only').waitForExist({ timeout: 4400 });
        await browser.pause(10000);
      
        await browser.execute( function del() {
            var elem = $('header');
            elem.remove();
        })
        await browser.pause(5000);

        const elementToBeClicked = await $('#dashboard > div:nth-child(1) > div > div > button')
      //  const elementToBeClicked = await $('.btn btn-danger')
        elementToBeClicked.click();
        await browser.pause(5000);
        browser.acceptAlert();
        await browser.pause(5000);

        if (await browser.isAlertOpen()) {
            throw new Error('Accept alert wasnt executed')
        }

    });
});


   