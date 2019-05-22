//

const inquirer  = require('inquirer')
const fs        = require('fs')
const path      = require('path')

module.exports = {

  ingestAll: () => {
    let isFile = false

    const questions = [
      {
        name: 'source',
        type: 'input',
        message: 'Source file / directory:',
        validate: function (src) {
          if (!src.length) {
            return 'Please enter a source directory.'
          } else {
            try {
              let stats = fs.statSync(src)
              if (stats.isFile()) {
                isFile = true
              }
              return true
            } catch (err) {
              return 'Not a valid file or directory. Try again.'
            }
          }
        }
      },
      {
        name: 'destination',
        type: 'input',
        message: 'Destination file / directory:',
        validate: function (dest) {
          if (!dest.length) {
            return 'Please enter a destination directory.'
          } else {
            try {
              if (fs.existsSync(dest)) {
                return 'Destination already exists.'
              }
              
              let ext = path.extname(dest)

              if (ext === '' && !isFile) {
                return true
              }

              return 'File folder mismatch.'

            } catch (err) {
              return 'Not a valid file or directory. Try again.'
            }
          }
        }
      },
      {
        name: 'standard',
        type: 'list',
        message: 'select a copy standard:',
        choices: [
          'All Files and Folders',
          'Just Files (flatten directory structure)',
          'All Files and Folders, Excluding Windows files',
          'All Files and Folders, Excluding Mac OS files'
        ],
        validate: function (val) {
          if (val.length) {
            return true
          } else {
            return 'Please select a standard.'
          }
        }
      },
      {
        name: 'documents',
        type: 'list',
        message: 'select file type(s) to copy:',
        choices: [
          'All File Types',
          'Only Generated Documents (txt, docx, xlsx, pdf, etc)',
          'Only Generated Media (mpeg, mp3, png, tiff, etc)',
          'Only Generated Documents and Media'
        ],
        validate: function (val) {
          if (val.length) {
            return true
          } else {
            return 'Please select a document type.'
          }
        }
      },
      {
        name: 'log',
        type: 'input',
        message: 'log location:',
        default: `${process.cwd()}`,
        validate: function (val) {
          if (val.length) {
            return true
          } else {
            return 'Please enter a log location.'
          }
        }
      }
    ]
    return inquirer.prompt(questions)
  },

  getSource: () => {
    const question = [
      {
        name: 'source',
        type: 'input',
        message: 'Source file / directory:',
        validate: function (val) {
          if (val.length) {
            return true
          } else {
            return false
          }
        }
      }
    ]
    return inquirer.prompt(question)
  }

}