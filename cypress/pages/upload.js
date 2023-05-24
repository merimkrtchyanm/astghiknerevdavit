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
    data = {
        uploadFileName: "example.json"
    }
}

    export const uploadpage = new uploadPage
   