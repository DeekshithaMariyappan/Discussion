const express = require('express');
const path = require('path');
const mdb = require('mongoose');
const dotenv = require('dotenv');
const Signup = require("./models/signupSchema");
const Post = require("./models/postTechSchema");
const Post1 = require("./models/postAISchema");
const Post2 = require("./models/postFoodSchema");
const Post3= require("./models/postMusicSchema");
const Post4 = require("./models/postKpopSchema");
const Post5 = require("./models/postMoviesSchema");
const cors =require('cors');
const app = express();
dotenv.config();
app.use(cors())
app.use(express.json());

mdb.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB Connection Successful");
  })
  .catch((err) => {
    console.log("MongoDb connection unsuccessful", err);
  });

app.get('/', (req, res) => {
  res.send("Welcome to Backend friends");
});

app.get('/static', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post('/signup', async(req, res) => {
  var { firstname, lastname, username, email, password } = req.body;
  try {
    const newCustomer = new Signup({
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email,
      password: password,
    });

    console.log(newCustomer);
    newCustomer.save();
    res.status(201).send("Signup successful");
  } catch (err) {
    res.status(400).send("Signup unsuccessful", err);
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Signup.findOne({ email: email });
    if (!user) {
      return res.status(404).send({ response: "User not found", loginStatus: false });
    }
    if (user.password === password) {
      res.status(200).send({ response: "Login successful", loginStatus: true });
    } else {
      res.status(401).send({ response: "Incorrect password", loginStatus: false });
    }
  } catch (err) {
    res.status(500).send("Error during login");
  }
});

app.get('/getsignupdet', async (req, res) => {
  try {
    const signUpdet = await Signup.find();
    res.status(200).json(signUpdet);
  } catch (err) {
    res.status(500).send("Error fetching signup details");
  }
});

app.post('/updatedet',async(req,res)=>{
  var updateRec= await Signup.findOneAndUpdate(
    {username:""},
    {$set:{username:""}}
  )
  console.log(updateRec)
  updateRec.save()
  res.json("Record updated")
})

app.post('/deletedet', async (req, res) => {
    const { username } = req.body; 
    const deleteRec = await Signup.findOneAndDelete({ username: "" }); 
      if (deleteRec) {
        res.json("Record deleted successfully" );
      } else {
        res.json("Record not found");
      }
});

app.post('/techposts', async (req, res) => {
  try {
    const { title, content,userId } = req.body;
    const newPost = new Post({ title, content,userId });
    await newPost.save();
    res.status(201).json(newPost);
    console.log(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
});
  
app.post('/aiposts', async (req, res) => {
  try {
    const { AItitle, AIcontent,AIuserId } = req.body;
    const newPost = new Post1({ AItitle, AIcontent,AIuserId });
    await newPost.save();
    res.status(201).json(newPost);
    console.log(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
});
app.get('/getAIposts', async (req, res) => {
  try {
    const posts = await Post1.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

app.post('/foodposts', async (req, res) => {
  try {
    const { Foodtitle, Foodcontent ,FooduserId} = req.body;
    const newPost = new Post2({ Foodtitle, Foodcontent,FooduserId });
    await newPost.save();
    res.status(201).json(newPost);
    console.log(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
});
app.get('/getFoodposts', async (req, res) => {
  try {
    const posts = await Post2.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});


app.post('/musicposts', async (req, res) => {
  try {
    const { Musictitle, Musiccontent,MusicuserId } = req.body;
    const newPost = new Post3({ Musictitle, Musiccontent ,MusicuserId});
    await newPost.save();
    res.status(201).json(newPost);
    console.log(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
});
app.get('/getMusicposts', async (req, res) => {
  try {
    const posts = await Post3.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});


app.post('/kpopposts', async (req, res) => {
  try {
    const { Kpoptitle, Kpopcontent ,KpopuserId} = req.body;
    const newPost = new Post4({ Kpoptitle, Kpopcontent ,KpopuserId});
    await newPost.save();
    res.status(201).json(newPost);
    console.log(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
});
app.get('/getKpopposts', async (req, res) => {
  try {
    const posts = await Post4.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

app.post('/moviesposts', async (req, res) => {
  try {
    const { Moviestitle, Moviescontent,MoviesuserId } = req.body;
    const newPost = new Post5({ Moviestitle, Moviescontent,MoviesuserId});
    await newPost.save();
    res.status(201).json(newPost);
    console.log(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
});

app.get('/getMoviesposts', async (req, res) => {
  try {
    const posts = await Post5.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});
app.get('/getposts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});
app.delete("/deleteposts", async (req, res) => {
  try {
      const postId = req.params.id;
      const deletedPost = await Post4.findByIdAndDelete("");
      if (!deletedPost) {
          return res.status(404).json({ message: "Post not found" });
      }

      res.json({ message: "Post deleted successfully", deletedPost });
  } catch (error) {
      res.status(500).json({ message: "Error deleting post", error: error.message });
  }
});



app.listen(3001, () => {
  console.log("Server connected");
});