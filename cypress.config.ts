import { defineConfig } from "cypress";
// import { mysql } from "mysql"
const mysql = require("mysql")

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task",{
        queryDb: (query)=>{
          return queryTestDb(query, config, config.env['envName'])
        }
      })
    },
    "env":{
      "local":{
        'host': 'localhost',
        'database': 'test-app-dev',
        'user': 'devuser',
        'password': '12345678'
      },
      "production":{
        'host': 'c8u4r7fp8i8qaniw.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
        'database': 'jn58grsf3pg8ipjh',
        'user': 'nmbo9azzsx5iwasg',
        'password': 'k6wok7dtn3w0f3kp'
      }
    },

    baseUrl: 'http://localhost:3000',
    supportFile: 'tests/cypress/support/commands.ts',
    specPattern: 'tests/cypress/integration/*.spec.{js,jsx,ts,tsx}'
  },  
  video:false,
  videosFolder:"tests/cypress/video",
  screenshotsFolder:"tests/cypress/screenshots",
  watchForFileChanges:false  
});


function queryTestDb(query: any, config: any, env:string) {

  const connection = mysql.createConnection(config.env[env])

  connection.connect()

  return new Promise((resolve, reject) => {
    connection.query(query, (error: any, result: any) => {
      if (error) {
        if (error.code == "ER_DUP_ENTRY") resolve(error)
        reject(error)
    }
      else {
        connection.end()
        return resolve(result)
      }
    })
  })
}