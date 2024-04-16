describe('score check', () => {
  it('passes', () => {
    cy.visit('https://priscilla.fitped.eu/')
    cy.get('#email').type("jozef.rozar@student.ukf.sk")
    cy.get('#password').type("online101")
    cy.get('.btn-style > .v-btn__content').click()
    cy.get('.mobile-navigation-icon > .v-btn__content > .v-icon').click()
    cy.get('.mobile-navigation-icon > .v-btn__content > .v-icon').click()
    cy.get('.desktop-nav__header > .v-list-item').contains("Jozef Rožár")
    cy.get('.vertically-horizontally-centered > :nth-child(1)').invoke('text').then((text) => {
      const score = parseInt(text.replace(/\D/g, ''));    
      expect(score).to.be.greaterThan(20000);
    });
  })  
})