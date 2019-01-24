describe('Overall page of components', () => {
  it('All components look right', () => {
    cy.visit('/')
    cy.percySnapshot()
  })

  it('Modal looks right', () => {
    cy.visit('/')
    cy.contains('Open Modal').click()
    cy.percySnapshot()
  })
})
