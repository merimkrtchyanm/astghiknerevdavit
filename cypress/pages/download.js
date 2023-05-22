class downloadPage{
    visit(){
        cy.visit ('https://demoqa.com/upload-download')
    }
    getDownButton(){
        return cy.get('#downloadButton')
    }
}
const data = {
    downloadedFileName: "sampleFile.jpeg"
}

    export const downloadpage = new downloadPage
    export {data}