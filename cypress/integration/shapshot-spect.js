describe('Overall page of components', () => {
  it('All components look right', () => {
    cy.visit('/')
    cy.percySnapshot()
  })
})
