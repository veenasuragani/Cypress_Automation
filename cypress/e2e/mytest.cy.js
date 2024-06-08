describe('My First Suite', () => {
  it('verify the title-->positive', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq', 'OrangeHRM')
  })
  it('verify the title-->negative',() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.title().should('eq', 'OrangeHRM123')
  })
})