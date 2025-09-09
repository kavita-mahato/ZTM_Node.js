const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))

const PORT = 3000;

app.use((req, res, next) =>{
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use('/site', express.static(path.join(__dirname, 'public'))); // when we want to host smaller or medium-sized application with node
app.use(express.json());

// app.post('/friends',friendsController.postFriend);
// app.get('/friends', friendsController.getFriends);
// app.get('/friends/:friendId', friendsController.getFriend);

// app.get('/messages', messagesController.getMessages);
// app.post('/messages', messagesController.postMessages);

app.use('/', (req, res) => {
  res.render('index', {
    title: "Node.js Practice",
    caption: 'Lets\'s go skiing',
  })
});
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});