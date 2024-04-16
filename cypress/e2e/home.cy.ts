describe('Home page test', () => {
  beforeEach(() => {
    cy.visit('http://ais.ukf.sk')
  })

  it('Provnanie nadpisu', () => {
    cy.get("h1").contains("Testing Next.js Applications with")
  })
  
  it('Provnanie nadpisu html atribut', () => {
    cy.get("[data-test='hero-heading'").contains("Testing Next.js Applications with")
  })

  it('Provnanie obsahu v DT', () => {
    cy.get("dt").eq(0).contains("4 Courses")
  })

  it.only('Provnanie obsahu v buttone', () => {
    cy.get("h3").eq(0).contains("Prepare")
  })
  it.only('Overenie poctu h3 elementov', () => {
    cy.get('h3').should('have.length', 6);
})
})