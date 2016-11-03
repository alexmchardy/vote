import express from 'express';
const app = express();
import { home } from './controllers';
import election from './controllers/elections';

app.get('/', home.index)
app.get('/vote', election.vote);

app.listen(3000, () => {
  console.log('Listening on port 3000!')
})
