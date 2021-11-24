describe('check status', function () {
    before ('login', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut/');
        await browser.maximizeWindow();
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();
        await browser.pause(15000);  
    })

   
    it('rigth status should be displayed after timeout', async () => {
        await $('#status').click();
        function waitForText(selector, text, timeout) {
            browser.waitUntil(() => {
            return $(selector).getText() === text
            }, timeout, 'erexpected status Active')
            }
        waitForText('#status', 'Active', 5000)
        const statusText = await $('#status').getText();
        console.log(statusText)
        if (!statusText == "Active") {
            throw new Error('Wrong status')
        }
    });
})
    
//     it('rigth status should be displayed after timeout', async () => {
//         await $('#status').click();
//         await browser.waitUntil(
//             async () => (await $('#status').getText()) === 'Active',
//             {
//                 timeout: 5000,
//                 timeoutMsg: 'results arent appear after corresponding timeout'
//             }
//         );
//         const statusText = await $('#status').getText();
//         console.log(statusText);
//         if (!statusText == "Active") {
//             throw new Error('Wrong status')
//         }
//     });
// })
   
