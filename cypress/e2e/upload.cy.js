import { uploadpage } from "../pages/upload";
import { data } from "../pages/upload";

describe('Upload the file in qademo webpage', () => {
    it('Upload the file', () => {
       uploadpage.visit() 
       uploadpage.getUploadButton().attachFile(data.uploadFileName)
       uploadpage.getUploadedFile().should("contain", data.uploadFileName)

    });
});