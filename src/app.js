import express from 'express';
const app = express();
import { home } from './controllers';

app.get('/', home.index)

app.listen(3000, () => {
  console.log('Listening on port 3000!')
})
