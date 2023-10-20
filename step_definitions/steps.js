const { I } = inject();
// Add in your custom step files

Given('I Login into Orange HRM', () => {
  I.amOnPage('https://opensource-demo.orangehrmlive.com');
  I.see("LOGIN Panel");
  I.fillField("//input[@id='txtUsername']","Admin");
  I.fillField("#txtPassword","admin123");
  I.click("#btnLogin");
  I.see("Dashboard");
  I.dontSee("LOGIN panel");
});

Then('I should see the Dashboard page',()=>{
  I.see("Dashboard");  
})
