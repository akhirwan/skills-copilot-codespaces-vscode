// Create web server
// Create a web server that listens on port 3000 and serves the following responses:
// - When a GET request is made to the path /comments, it should return an array of comments.
// - When a POST request is made to the path /comments, it should add a new comment to the array of comments.
// - When a PUT request is made to the path /comments/:id, it should modify the comment with the specified id.
// - When a DELETE request is made to the path /comments/:id, it should remove the comment with the specified id.

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const comments = [
  { id: 1, comment: 'Comment 1' },
  { id: 2, comment: 'Comment 2' },
  { id: 3, comment: 'Comment 3' }
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});

app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  const updatedComment = req.body;
  comments.forEach((comment) => {
    if (comment.id == id) {
      comment.comment = updatedComment.comment;
    }
  });
  res.json(updatedComment);
});

app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  comments.forEach((comment, index) => {
    if (comment.id == id) {
      comments.splice(index, 1);
    }
  });
  res.json({ message: 'Comment deleted' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});