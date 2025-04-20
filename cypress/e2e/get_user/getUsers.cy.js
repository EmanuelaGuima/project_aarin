describe("GET users Reqres.in", () => {
  let expectedData;

  before(() => {
    // Carrega os dados da fixture antes de rodar os testes
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
});
