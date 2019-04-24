describe('Tooltip', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should show and hide', () => {
    cy.contains('Plain Text Example').trigger('mouseenter')
    cy.contains('.tippy-popper', 'Hello World')

    cy.contains('Plain Text Example').trigger('mouseleave')
    cy.get('.tippy-popper').should('not.exist')
  })
})
