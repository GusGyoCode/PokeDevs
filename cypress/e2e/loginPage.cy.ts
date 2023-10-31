// eslint-disable-next-line
describe("Login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login")
  })
  // check login page
  it("Login Page can be open", () => {
    cy.contains("Inicia Sesion")
  })
  // check element button form
  it("Button Login", () => {
    cy.contains("Iniciar Sesion").click()
  })
  // error user send form
  it("error user form", () => {
    cy.get('[name="email"]').type("guspibe15@gmail")
    cy.get('[name="password"]').type("gustavo123")
    cy.contains("Iniciar Sesion").click()
    cy.contains("Usuario no encontrado")
  })
  // error password send form
  it("error password form", () => {
    cy.get('[name="email"]').type("guspibe15@gmail.com")
    cy.get('[name="password"]').type("gustavo")
    cy.contains("Iniciar Sesion").click()
    cy.contains("Contraseña invalida")
  })

  // send form and verify if the current page is /dashboard
  it("send form Login", () => {
    cy.get('[name="email"]').type("guspibe15@gmail.com")
    cy.get('[name="password"]').type("gustavo123")
    cy.contains("Iniciar Sesion").click()
    cy.url().should("contains", "/dashboard")
  })
  // logout
  it("logout to Login", () => {
    cy.get('[name="email"]').type("guspibe15@gmail.com")
    cy.get('[name="password"]').type("gustavo123")
    cy.contains("Iniciar Sesion").click()
    cy.url().should("contains", "/dashboard")
    cy.get("header").get("img").last().click()
    cy.contains("Cerrar sesion").click()
    cy.url().should("contains", "/login")
  })
})
