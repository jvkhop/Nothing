import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to render the EJS template
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

/*
Nothing/
├── node_modules/
├── views/
│   ├── partials/
│   │   ├── footer.ejs
│   │   ├── header.ejs
│   ├── index.ejs
├── public/
│   ├── styles/
│   │   ├── main.css
├── index.js
├── package.json
├── package-lock.json
*/