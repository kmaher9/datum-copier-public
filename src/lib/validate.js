//

const fs  = require('fs')

module.exports = {

  folderExists: async (src) => {
    return new Promise((resolve, reject) => {
      try {
        let stat = fs.statSync(src)
        resolve(true)
      } catch (err) {
        resolve(false)
      }
    })
  }

}