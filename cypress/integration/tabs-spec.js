describe('Tabs', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be switchable', () => {
    cy.contains('Past Events').click()
    cy.contains('Past Events').should('have.attr', 'aria-selected')
    cy.contains('Content 3')
  })
})
