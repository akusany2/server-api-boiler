module.exports = {
  index: (req, res, next) => {
    res.json({message: 'Route to upload files!'})
  },
  upload: (req, res, next) => {
    // req.file
    // add filename to DB or Embed it to respective collection
    res.json(req.file)
  },
  uploads: (req, res, next) => {
    // req.files
    // add filename to DB or Embed it to respective collection
    res.json(req.files)
  }
}