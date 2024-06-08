describe('Handlig WebTables', ()=>{

    beforeEach('login', ()=>{

        cy.visit('demo.opencart.com/admin/index.php')
        cy.get('#input-username').type("demo")
        cy.get('#input-password').type("demo")
        cy.get("button[type='submit']").click()
        cy.wait(2000)
        cy.get('.btn-close').click()
        cy.wait(2000)
        cy.get('#menu-customer>a').click()
        cy.get('#menu-customer>ul>li:first-child>a').click()
    })

    it('finding no.of rows and columns', ()=>{
        cy.get('.table.table-bordered.table-hover>tbody>tr').should('have.length', 10)
        cy.get('.table.table-bordered.table-hover>thead>tr>td').should('have.length', 7)

    })

    it('getting specific element in a table', ()=>{
        cy.get('.table.table-bordered.table-hover>tbody>tr:nth-child(3)>td:nth-child(3)').should('have.text', 'olaola@das.com')

    })

    it('getting all the elements from the table', ()=>{

        cy.get('.table.table-bordered.table-hover>tbody>tr')
            .each(($row, index, $rows)=>{
                cy.wrap($row).within(()=>{
                    cy.get('td')
                    .each(($col, index, $cols)=>{
                        cy.log($col.text())

                    })
                })
        })
    })

    it.only('paganation', ()=>{

        //to find no.of pages
        /*cy.get('.col-sm-6.text-end').then((e)=>{
            const fullstring=e.text()
            const totalpages=fullstring.substring('('+1, 'Pages'-1)
            cy.log(totalpages)
        })*/

        const pages=5;
        for( let p=1; p<=pages; p++){
            if(pages>1){
                cy.log("Active page is "+p)
                cy.get(".pagination>li:nth-child(" +p+ ")").click()
                cy.wait(3000)
                cy.get('.table.table-bordered.table-hover>tbody>tr')
                .each(($row, index, $rows)=>{
                    cy.wrap($row).within(()=>{
                        cy.get('td:nth-child(3)').then((e)=>{
                            cy.log(e.text())
                        })
                    })
                })
            }
            
        }


    })
})