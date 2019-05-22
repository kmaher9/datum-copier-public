//

const fs    = require('fs')
const path  = require('path')

module.exports = {
    getCurrentDirectoryBase: () => {
        return path.basename(process.cwd())
    },
    
    directoryExists: (file) => {
        try {
            return fs.statSync(file).isDirectory()
        } catch (err) {
            return false
        }
    }
}