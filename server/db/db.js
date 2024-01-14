const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:root@cluster1.3agsb1n.mongodb.net/file_upload', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
