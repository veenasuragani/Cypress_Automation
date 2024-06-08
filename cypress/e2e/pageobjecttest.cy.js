import Login from '../PageObjects/Login.js'
describe('pageobjecttest', ()=>{
    it('pageobjecttest', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        const ln =new Login()
        cy.fixture('orangehrm').then((data)=>{
            ln.setUsername(data.username)
            ln.setPassword(data.password)
            ln.clickLoginButton()
            ln.verifyLogin(data.expected)
        })
    })
})