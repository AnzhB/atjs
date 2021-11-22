describe('login plus menu items background color check', function () {
   
    before ('login', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut/');
        await browser.maximizeWindow();
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();
    })
        it('should login successfully', async function () {
            await $('.sr-only').waitForExist({ timeout: 15000, reverse: true });
        if (!(await $('a[title="walker@jw.com"]').getText()).includes('John Walker')) {
            throw new Error('Wrong user logged in')
        }
        });
        it('menu items background color shouldnt be red', async function () {
          //  await $('.sr-only').waitForExist({ timeout: 4400 });
          //  await browser.pause(10000);
            await $('.sr-only').waitForDisplayed({ timeout: 15000, reverse: true });
        const menuItems = await $$('#first-nav-block li') 
        for (const item of menuItems) {
            const text = await item.getText();
            item.moveTo();
            await browser.pause(5000);
            const color = await item.getCSSProperty('background-color');
            if (color.value == 'rgba(255,0,0,1)') {
                throw new Error(`The menu Item ${text} has wrong color!`) 
                }
        }   
    });
});



