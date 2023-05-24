import { uploadpage } from "../pages/upload";

describe('Upload the file in qademo webpage', () => {
    it('Upload the file', () => {
       uploadpage.visit() 
       uploadpage.getUploadButton().attachFile(uploadpage.data.uploadFileName)
       uploadpage.getUploadedFile().should("contain", uploadpage.data.uploadFileName)

    });
});