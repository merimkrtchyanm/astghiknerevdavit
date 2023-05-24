const username = {
    generaterandomName (minLength = 8) {
           const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
           const nameLength = Math.max(minLength, 8);
           let randomName = '';
           for (let i = 0; i < nameLength; i++) {
             const randomIndex = Math.floor(Math.random() * characters.length);
             randomName += characters[randomIndex];
           }
           return randomName;
         }
       }

export {username}