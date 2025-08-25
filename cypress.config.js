const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    specPattern: "cypress/e2e/features/*.feature",
    env: {
      baseUrl: "http://localhost:3434/cars-app/",  
      authorization: "eyJhbGciOiJIUzI1NiJ9.eyJwcmluY2lwYWwiOiJINHNJQUFBQUFBQUFBSlZTUDBcL2JRQlJcL1RvTUFVUldvQkJJRFhhQmJkWkhhTVZOQmFTVmtRVVdhaFVwVUZcL3ZoSHB6dnpOMFprcVhLQkFNRHFBVUpxVitCYjFJV1BnQnFoNjdNWFhsbkNBNHNpSnZzZHpcL1wvXC9qMmZYY0dRTmZBdU1WeEl5ektaSjBJeG14bWhFb3RSYm9UcnN0eWlpZEVWaUk4RnNFVVR1RGxCQllJUUtpSjI4RExjNUR1OEpybEthaXZ0VFl4Y3ZXUGdyVGJKTGVPRzRTbnVhclBGN3JnamJmQ2VRRWtkSEZWZ2VBMG1lUlRwWExsbHJScWRUQmlNMTJDaW5JVTYydktqcVlodVVEbkJwUjJFRHFQaWJZbHhDR004ZDk4MHFRcTBEc1p2ek9aT3lGb1RYVDJFa1l4YlMrNGVKR2s2YjkzZmU1dUtFbXpEZDZoMnNvQU9kZmZhUTVubllZdGFTa290dExMekxaWHFXR3dJTDA3OHZka2ZGNGVcL2VxMEtBSFh5NXZGdnl2bk1BdlIrclwvOVwvVlJRZFJBNm1CNnlYc0hvbkl6ZVRKZk5uZzE3NTh2VFR6NU9yXC9TXC9QU05ralBqeDlIXC9QdmI1dnJMdW8wNDRZN1BiQWpvdDJ0K21jaVgzaWN2TCtGTG11S05KTklmNVJ5R045SmxNUVV0MnEwN1BmdFlIUjFKV3g4YlRVYnFcLzd0dVJTV00wc2tsc296OEtLSTduZkdRazBiT1wvaDNkSDQ0OTRkNGxtQm9oOHNjcWZtSkVyU2NwMjAwZTJjbnMyUEhmdytLSFAxXC8raHBPQ09jWUZ3TUFBQT09Iiwic3ViIjoibGlzYS5zaW1wc29uIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImV4cCI6MTY4NTAzNTU1NywiaWF0IjoxNjg1MDMxOTU3fQ.z2HPRk61gxQfYV_hij3IWcDUSbUNhtAdQa6cKsw-x0A"
    }
  }
});