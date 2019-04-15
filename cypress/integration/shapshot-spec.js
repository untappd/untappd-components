describe('Overall page of components', () => {
  it('All components look right', () => {
    cy.visit('/')
    cy.get('[data-cy="tooltip-example"]').within(() => {
      cy.contains('Plain Text Example').trigger('mouseenter')
      cy.contains('Styled Text Example').trigger('mouseenter')
      cy.contains('Component Example').trigger('mouseenter')
    })
    cy.percySnapshot()
  })
})
