import { downloadpage } from "../pages/download";
import { data } from "../pages/download";

describe('Download the file in qademo webpage', () => {
    it('Download the file', () => {
        downloadpage.visit()
        downloadpage.getDownButton().click()
        cy.verifyDownload(downloadpage.data.downloadedFileName)
        cy.wait(3000)
        cy.task("isFileExist", { fileName: "sampleFile"}).then(() => {
            cy.deleteDownloadsFolder("/sampleFile")
    })
})
})