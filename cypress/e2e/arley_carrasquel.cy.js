///reference types="cypress" />

describe("desafio 4 Arley Carrasquel",()=>{
    it("Deberia registrarse en PushingIT correctamente, Loguearse y Eliminar el usuario",()=>{
        cy.visit('');

        const numero = Math.floor(Math.random() * 1000)
        const bodyRequest = {
                username: `arley ${numero}`,
                password: 'arley1234!',
                gender:'Female',
                day:'05',
                month:'September',
                year: '1987',
                respuesta: 200
        }
        cy.request({
            url: 'https://pushing-it.onrender.com/api/register',
            method: 'POST',
            body:bodyRequest
        }).then(respuesta => {
            expect(respuesta.status).to.be.equal(200);
            
        });
        cy.request({
            url:'https://pushing-it.onrender.com/api/login',
            method: 'POST',
            body:{
                username: bodyRequest.username,
                password: bodyRequest.password
            }
        }).then(respuesta=>{
            expect(respuesta.status).to.be.equal(200);
        });
        cy.request({
            url:`https://pushing-it.onrender.com/api/deleteuser/${bodyRequest.username}`,
            method: 'DELETE'
        }).then(respuesta=>{
            expect(respuesta.status).to.be.equal(200);
        });


    });
});