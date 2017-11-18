## ExpressJS REST boilerplate


File uploads: All the files will be saved in `/uploads` folder, with a postfix `@timestamp.[extension]`. You can change the upload directory from `config.multerUpload` function.

Route | Controller | Type
------|------------|-----
`/api/upload` | uploadController.upload | Single file upload
`/api/uploads` | uploadController.uploads | Multiple file upload

