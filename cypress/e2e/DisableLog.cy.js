describe('disable_log', ()=>{
    it('disable_log', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']", {log:false}).type('Admin')
        cy.get("input[placeholder='Password']").type('admin123', {log:false})
        cy.get("button[type='submit']", {log:false}).click()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard')
    })
})