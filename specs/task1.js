describe('task1', function () {
   
    before ('login', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut/');
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();
    })


       it('task1.1', async function () {
        
        await $('.sr-only').waitForExist({ timeout: 4400 });
        await browser.pause(15000);
        if (!(await $("//*[contains(@title,'walker@jw.com')]").getText()).includes('John Walker')) {
            throw new Error('Wrong user logged in')
        }
        });


        it('task1.2', async function () {
        
        await $('.sr-only').waitForExist({ timeout: 4400 });
        await browser.pause(15000);
        const sidebar = await $$('#first-nav-block li') 

        for (const s of sidebar) {
            const text = await s.getText();
            console.log({ text });
            s.moveTo();
            await browser.pause(5000);
            const color = await s.getCSSProperty('background-color');
            console.log(color.value);

            if (color.value == 'rgba(255,0,0,1)') {
                throw new Error('The menu Item Product has wrong color!')  
                }


        }
       
    });

});



