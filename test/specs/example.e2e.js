describe("My Login application", () => {
  it("Main page", async () => {
    await browser.url("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
  });
  it("Add customer", async () => {
    await $('button[ng-click="manager()"]').click();
    await $('button[ng-click="addCust()"]').click();
    await $('input[ng-model="fName"]').setValue("Artem");
    await $('input[ng-model="lName"]').setValue("Sakharov");
    await $('input[ng-model="postCd"]').setValue("88000");
    
    await $('button[type="submit"]').click();
  });
 /* it('Search customer and delete customer', async() =>{
    await $('button[ng-class="btnClass3"]').click();
    await $('input[ng-model="searchCustomer"]').setValue("Artem");
    await $('button[ng-click="deleteCust(cust)"]').click();
  }); */
    it("Open Account", async () => {
        await browser.url("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
        await $('button[ng-click="manager()"]').click();
        await $('button[ng-class="btnClass2"]').click();
        await $('select[ng-model="custId"]').click();
        await $('option[value="6"]').click();
        await $('select[ng-model="currency"]').click();
        await $('option[value="Dollar"]').click();
        await $('button[type="submit"]').click();

     
    });
    

    it("Costomer Login", async () => {
        await browser.url("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login");
        await $('button[ng-click="customer()"]').click();
        await $('select[ng-model="custId"]').click();
        await $('option[value="6"]').click();
        await $('button[type="submit"]').click();

     browser.pause(20000);
    });

    
    it("Deposit to user", async () => {
        let dollar = 1000;
        
        await $('button[ng-class="btnClass2"]').click();
        await $('input[ng-model="amount"]').setValue(dollar);
        await $('button[type="submit"]').click();

     browser.pause(20000);
    });

    it("Withdraw", async () => {
        let withdraw = 1000;
        
        await $('button[ng-class="btnClass3"]').click();
        await $('input[ng-model="amount"]').setValue(withdraw);
        await $('button[type="submit"]').click();

     browser.pause(20000);
    });
    
    
});