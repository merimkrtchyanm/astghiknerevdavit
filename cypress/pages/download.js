class downloadPage{
    visit(){
        cy.visit ('https://demoqa.com/upload-download')
    }
    getDownButton(){
        return cy.get('#downloadButton')
    }
    data = {
        downloadedFileName: "sampleFile.jpeg"
    }
}
    export const downloadpage = new downloadPage
   