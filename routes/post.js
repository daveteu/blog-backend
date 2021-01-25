const express = require('express')
const router = express.Router()

const {getPostById, createPost, getAllPosts, deletePost, myPost, updatePost, getLikePost, getPost, photo} = require('../controllers/post')
const { isSignedIn, isAuthenticated, isAdmin } = require('../controllers/auth')
const { getUserById } = require('../controllers/user')

//params 
router.param("userId",getUserById)
router.param("postId",getPostById)

//My Routes

//Create Post
router.post("/post/create/:userId", isSignedIn, isAuthenticated, createPost)

//My post
router.get("/post/:userId/mypost",isSignedIn, isAuthenticated, myPost)

//Get A post
router.get("/post/:postId",getPost)
router.get("/post/photo/:postId", photo)
//Delete post
router.delete("/post/delete/:postId/:userId", isSignedIn, isAuthenticated, deletePost)
 
//update post
router.put("/post/update/:postId/:userId", isSignedIn, isAuthenticated, updatePost)

//get all post 
router.get("/all/posts",isSignedIn,isAuthenticated, getAllPosts)

//like post
router.put("/post/like/:postId", isSignedIn, isAuthenticated, getLikePost)
module.exports = router