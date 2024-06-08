class Login{
    username="input[placeholder='Username']"
    password="input[placeholder='Password']"
    submitBtn="button[type='submit']"
    lblmsg=".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"
    setUsername(username){
        cy.get(this.username).type(username)
    }
    setPassword(password){
        cy.get(this.password).type(password)
    }
    clickLoginButton(){
        cy.get(this.submitBtn).click()
    }
    verifyLogin(){
        cy.get(this.lblmsg).should('have.text', "Dashboard")
    }
}
export default Login