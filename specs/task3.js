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
await $('#address1').setValue(fillFormUsingJson ("Address"))
await $('#address2').setValue(fillFormUsingJson ("Address2"))
await $('#city').setValue(fillFormUsingJson ("City"))
await $('#zip').setValue(fillFormUsingJson ("Zip"))

await $('//*[@id="dashboard"]/div/div/div/form/button').click(); //rewrite xpath
await browser.pause(15000);  

// const address1Text = $('//div[text()="user@gmail.com"]/following-sibling::div[text()="International str"]').getText();
// const address2Text = $('//div[text()="user@gmail.com"]/following-sibling::div[text()="apartment 123"]').getText();
// const cityText = $('//div[text()="user@gmail.com"]/following-sibling::div[text()="Minsk"]').getText();
// const zipText = $('//div[text()="user@gmail.com"]/following-sibling::div[text()="KT00MP"]').getText();

const address1Text = await $('//div[text()="user@gmail.com"]/following-sibling::div[@tabulator-field="address1"]').getText(); 
const address2Text =  await $('//div[text()="user@gmail.com"]/following-sibling::div[@tabulator-field="address2"]').getText(); 
const cityText =  await $('//div[text()="user@gmail.com"]/following-sibling::div[@tabulator-field="city"]').getText(); 
const zipText =  await $('//div[text()="user@gmail.com"]/following-sibling::div[@tabulator-field="zip"]').getText(); 

console.log(address1Text)
console.log(address2Text)
console.log(cityText)
console.log(zipText)

const a = address1Text.includes("International str");
console.log(a);
const b  = address2Text.includes("apartment 123");
console.log(b);
const c  = cityText.includes("Minsk");
console.log(c);
const d  = zipText.includes("KT00MP");
console.log(d);

if (!a) {
    throw new Error('Wrong Address 1')
}
if (!b) {
    throw new Error('Wrong Address 2')
}
if (!c) {
    throw new Error('Wrong City')
}
if (!d) {
    throw new Error('Wrong Zip')
}

    });
});

