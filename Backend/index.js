const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
    console.log("Failed to connect to MongoDB");
})


const UserSchema = new mongoose.Schema({
    username: String,
    password: String
})
const User = mongoose.model('User', UserSchema);

const PostSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    title: String,
    content: String
})
const Post = mongoose.model('Post', PostSchema);



function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token)
        return res.status(403).send('A token is required for authentication');
    try {
        req.user = jwt.verify(token.split(' ')[1], process.env.SECRET_KEY); // Split to remove 'Bearer'
        next();
    }
    catch (err) {
        return res.status(401).send('Invalid Token');
    }
}

    
app.post('/register', async (req, res) => {
    try{
        const hashPassword = bcrypt.hashSync(req.body.password, 8);
        const user = new User({username: req.body.username, password: hashPassword});
        await user.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        console.log(error)
        res.status(500).send('Error registering user');
    }
})

app.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (user && bcrypt.compareSync(req.body.password, user.password)) {
            const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
            res.json({ token });
        }
        else {
            res.status(401).send('Invalid credentials');
        }
    }
    catch (error) {
        res.status(500).send('Error during login');
    }
});
    

app.post('/post', verifyToken, async (req, res) => {
    try {
        const post = new Post({ userId: req.user.userId, title: req.body.title, content: req.body.content });
        await post.save();
        res.status(201).send('Post created successfully');
    }
    catch (error) {
        res.status(500).send('Error creating post');
    }
});

app.get('/posts', verifyToken, async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    }
    catch (error) {
        res.status(500).send('Error fetching posts');
    }
});

app.get('/post/:postId', verifyToken, async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        if (!post) {
            return res.status(404).send('Post not found');
        }
        res.json(post);
    }
    catch (error) {
        res.status(500).send('Error fetching post');
    }
});
    

app.put('/post/:postId', verifyToken, async (req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.postId, userId:
        req.user.userId });
        if (!post)
            return res.status(404).send('Post not found or unauthorized');
        post.title = req.body.title;
        post.content = req.body.content;
        await post.save();
        res.status(200).send('Post updated successfully');
    }
    catch (error) {
        res.status(500).send('Error updating post');
    }
});
    
app.delete('/post/:postId', verifyToken, async (req, res) => {
    try {
        const result = await Post.findOneAndDelete({ _id: req.params.postId, userId:
        req.user.userId });
        if (!result){
            return res.status(404).send('Post not found or unauthorized');
        }
        res.status(200).send('Post deleted successfully');
    }
    catch (error) {
        res.status(500).send('Error deleting post');
    }
});
    


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})