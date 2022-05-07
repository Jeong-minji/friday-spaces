describe('Login Logic', () => {
  it('Should Next-Auth With Login', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="btn-login"]').click()
    cy.url().should('include', '/api/auth')
    cy.get('[type="submit"]').click()
  })
})

const asModule = {}
export default asModule
