/// <reference types="Cypress"/>

describe("Testuojame Home page", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    });
    it("patikrinti ar pagrindiniame puslapyje yra iframe elementas", () => {
        cy.get("#frame").should("exist");
    });
    it("patikrinti ar paspaudus add to cart iskvieciamas papildomas modalas", () => {
        cy.get("#addToCartButton").click().should("exist")
    });
    it("patikrinti ar galima issiusti forma, kai laukas tuscias", () => {
        cy.get('#message').should('have.text', '');
    });
    // it("patikrinti ar galima issiusti forma, kai laukas uzpildytas", () => {
    //     cy.type('tekstas');
    //     cy.get('#message').should('have.text', 'tekstas');
    // });
});

describe("Testuojame Shipping & Return page", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/Shipping')
    });
    it("patikrinti ar yra shipping headeris", () => {
        cy.get("#shipping").should("exist");
    });
    it("patikrinti ar yra return headeris", () => {
        cy.get("#return").should("exist");
    });
});