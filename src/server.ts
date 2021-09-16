import app from './app';
import 'express-async-errors';

const port = 3333;

app.listen(port, () => {
  console.log('🔥🔥 Started Server 🔥🔥');
});
