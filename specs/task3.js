describe('create user', function () {

     before ('login', async function () {
        await browser.url('https://viktor-silakov.github.io/course-sut/');
        await browser.maximizeWindow();
        await $('#login').setValue('walker@jw.com');
        await $('#password').setValue('password');
        await $('button').click();
        await browser.pause(5000);  
    })
    it('user should be created successfully', async function () {
        await $('#first-nav-block > li:nth-child(7)').click();
        await browser.pause(5000);

     

function fillFormUsingJson (el)  {
    var fs=require('fs');
    var jsonData =fs.readFileSync('data.json', 'utf8');
    var dataFromJson = JSON.parse(jsonData);
    console.log(dataFromJson.el)
  switch(el) {
    case 'Email':  
    return dataFromJson.Email;
    break;
    case 'Password':  
    return dataFromJson.Password;
    break;
    case 'Address':  
    return dataFromJson.Address;
    break;
    case 'Address2':  
    return dataFromJson.Address2;
    break;
    case 'City':  
    return dataFromJson.City;
    break;
    case 'Zip':  
    return dataFromJson.Zip;
   // console.log(dataFromJson.Zip)
    break;
}    
}
await $('#email').setValue(fillFormUsingJson ("Email"))
await $('#password').setValue(fillFormUsingJson ("Password"))
await $('#address').setValue(fillFormUsingJson ("Address"))
await $('#address2').setValue(fillFormUsingJson ("Address2"))
await $('#city').setValue(fillFormUsingJson ("City"))
await $('#zip').setValue(fillFormUsingJson ("Zip"))
    });
});

