describe("POST users Reqres.in", () => {
  let usuario;

  before(() => {
    cy.fixture("bodyPostUsers").then((data) => {
      usuario = data;
    });
  });
  it("Requisição do POST Users", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      headers: {
        "Content-Type": "application/json",
      },
      body: usuario,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.name).to.eq(usuario.name);
      expect(response.body.job).to.eq(usuario.job);
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("createdAt");
    });
  });
  it('Deve retornar erro 400 para body inválido', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      failOnStatusCode: false, 
      headers: {
        'Content-Type': 'application/json'
      },
      body: "null"
    }).then((response) => {
      expect(response.status).to.eq(400); 
      expect(response.body).to.include("Bad Request"); 
    });
});
});
