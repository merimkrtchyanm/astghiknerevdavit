class uploadPage{
    visit(){
        cy.visit ('https://demoqa.com/upload-download')
    }
    getUploadButton(){
        return cy.get('#uploadFile')
    }
    getUploadedFile(){
        return cy.get('#uploadedFilePath')
    }
}
const data = {
    uploadFileName: "example.json"
}
    export const uploadpage = new uploadPage
    export {data}