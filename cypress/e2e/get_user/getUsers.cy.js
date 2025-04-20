describe("GET users Reqres.in", () => {
  let expectedData;

  before(() => {
    cy.fixture("responseGetUsers").then((data) => {
      expectedData = data;
    });
  });
  it("Requisição e validação do GET Users", () => {
    cy.request("https://reqres.in/api/users/2").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.deep.equal(expectedData.data); // Validação dos dados de data
      expect(response.body.support).to.deep.equal(expectedData.support); // Validação dos dados de support
    });
  });
  it("Deve retornar 404 ao buscar um usuário que não existe", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users/465", 
      failOnStatusCode: false, 
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body).to.be.empty; 
    });
});
});
