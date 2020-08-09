describe("Search process", function () {
  it("Visit the url", function () {
    cy.visit("http://localhost:3000/");
  });

  it("Enter search text", function () {
    cy.get(".SearchComponent__input").type("test");
  });

  it("Click search button", function () {
    cy.get(".SearchComponent__button").click();
  });

  it("Expand first item from result list", function () {
    cy.get(".reposContainer").first().should("have.class", "collapsed");
    cy.get(".reposContainer__handler")
      .first()
      .should("have.class", "collapsed")
      .click()
      .should("have.class", "cols col-12 reposContainer__handler");
    cy.get(".reposContainer")
      .first()
      .should("have.class", "cols col-12 reposContainer");
  });

  it("Collapse first item from result list", function () {
    cy.get(".reposContainer__handler")
      .first()
      .click()
      .should("have.class", "collapsed");
    cy.get(".reposContainer").first().should("have.class", "collapsed");
  });
});
