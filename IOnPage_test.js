Feature('Demo Search');

Scenario('test something',  ({ I }) => {
  I.amOnPage('/');
  I.wait(1);
  I.amOnPage('dooodles');
  I.wait(1);
  I.amOnPage('https://opensource-demo.orangehrmlive.com');
  I.wait(1);
  I.amOnPage('http://the-internet.herokuapp.com/dynamic_loading');
  I.wait(1);
});
   

Scenario('2.testCases2-Test'),(I=>{
   I.amOnPage('https://opensource-demo.orangehrmlive.com');
   I.see("LOGIN Panel");
   I.fillField("//input[@id='txtUsername']","Admin");
   I.fillField("#txtPassword","admin123");
   I.click("#btnLogin");
   I.see("Dashboard");
   I.dontSee("LOGIN panel");
});

Scenario('3.grab Text-Test'),async(I)=>{
    I.amOnPage('http://the-internet.herokuapp.com/checkboxes');
    let a= await I.grabTextfrom("#checkboxes");
    console.log(a);
 } ;

 Scenario('4.selectionOption-Test'),(I)=>{
    I.amOnPage('http://the-internet.herokuapp.com/dropdown');
    I.selectOption("#dropdown","Option 1");
    I.wait(1);
 } ;

 Scenario('5.Wait-Test'),(I)=>{
    I.amOnPage('http://the-internet.herokuapp.com/dynamic_loading/1');
    I.click("//button[contains(text(),'start')]");
    I.waitForText("hello World",20);
 } ;