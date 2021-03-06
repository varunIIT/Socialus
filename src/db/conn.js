const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost:27017/social-media-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('Database connection successful')
})
    .catch((err) => {
        console.error('Database connection error')
    })