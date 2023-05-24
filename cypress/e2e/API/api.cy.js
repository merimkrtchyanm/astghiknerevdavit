import { username } from "../../../utils/apiData";

let token, userId
let generatedName = username.generaterandomName()
describe("Api", () => {
it("Verify login functionality with valid credentials", () => {
      cy.request({
          method: 'POST',
          url:  'https://demoqa.com/Account/v1/User',
          body: {
              userName: generatedName,
              password: "Password1!"
          },
        }).then((response)=>{
          cy.log(response)
          userId = response.body.userID
        })
    });

    it("Verify generated token", () => {
      cy.request({
          method: 'POST',
          url:  'https://demoqa.com/Account/v1/GenerateToken',
          body: {
              userName: generatedName,
              password: "Password1!"
          },
        }).then((response)=>{
          cy.log(response)
          token = response.body.token
        })
    });

    it("Get userData", () => {
      cy.request({
          method: 'GET',
          url:  'https://demoqa.com/Account/v1/User/' + userId,
          headers: {
              "Authorization": "Bearer" + " " + token, 
              "Content-Type": "application/json" 
          },
        }).then((response)=>{
          cy.log(response)
        })
    });

    it("Authorized user", () => {
      cy.request('https://demoqa.com/Account/v1/Authorized').then((response) => {
      expect(response.status).to.eq(200)
        }).then((response)=>{
          cy.log(response)
          })
        })
    });
  

 
