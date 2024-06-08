const Ajv=require('ajv')
const ajv=new Ajv()

describe('json schema', ()=>{
    it('Json Schema', ()=>{
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
        }).then((Response)=>{
           var schema={
            "$schema": "http://json-schema.org/draft-07/schema#",
            "title": "Generated schema for Root",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "number"
                },
                "title": {
                  "type": "string"
                },
                "price": {
                  "type": "number"
                },
                "description": {
                  "type": "string"
                },
                "category": {
                  "type": "string"
                },
                "image": {
                  "type": "string"
                },
                "rating": {
                  "type": "object",
                  "properties": {
                    "rate": {
                      "type": "number"
                    },
                    "count": {
                      "type": "number"
                    }
                  },
                  "required": [
                    "rate",
                    "count"
                  ]
                }
              },
              "required": [
                "id",
                "title",
                "price",
                "description",
                "category",
                "image",
                "rating"
              ]
            }
          }

          const validate=ajv.compile(schema)
          const isValid=validate(Response.body)
          expect(isValid).to.be.true

        })
        
    })
})