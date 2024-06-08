import 'cypress-file-upload'
describe('FileUpload', ()=>{

    it('singlefileupload', ()=>{
        cy.visit('http://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('test1.pdf')
        cy.get('#file-submit').click()
        cy.get('h3').should('have.text', 'File Uploaded!')

    })

    it('File Upload-Rename', ()=>{
        cy.visit('http://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'test1.pdf', fileName: 'renamedfile.pdf'})
        cy.get('#file-submit').click()
        cy.get('h3').should('have.text', 'File Uploaded!')

    })

    it('File Upload- Drag&Drop', ()=>{
        cy.visit('http://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('test1.pdf', {subjectType:'drag-n-drop'})
        cy.get("div[class='dz-preview dz-file-preview dz-processing'] div[class='dz-details'] span").contains('test1.pdf')

    })

    it('Multiple File Upload', ()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['test1.pdf', 'test2.docx'])
        cy.wait(5000)
        cy.get(':nth-child(6) > strong').should('have.text', 'Files You Selected:')
    })

    it.only('File Upload -Shadow Dom', ()=>{
        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile('test1.pdf')
        cy.wait(5000)
        cy.get('.smart-item-name', {includeShadowDom:true}).contains('test1.pdf')
    })

})