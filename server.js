import express from 'express';
import nunjucks from 'nunjucks';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  noCache: true
});

app.use(express.static(path.join(__dirname, 'public')));




app.get('/', (req, res) => {
  res.render('pages/index.njk');
}); 

app.get('/meal-ideas', (req, res) => {
  res.render('pages/meal-ideas.njk');
}); 

app.get('/splash-page', (req, res) => {
  res.render('pages/splash-page.njk');
});

app.get('/breakfast', (req, res) => {
  res.render('pages/breakfast.njk');
});

app.get('/lunch', (req, res) => {
  res.render('pages/lunch.njk');
});

app.get('/evening-meals', (req, res) => {
  res.render('pages/evening-meals.njk');
}); 

app.get('/evening-meal', (req, res) => {
  res.render('pages/evening-meal.njk');
}); 

app.get('/meal-details', (req, res) => {
  res.render('pages/meal-details.njk');
}); 

app.get('/meal-details2', (req, res) => {
  res.render('pages/meals-details2.njk');
}); 

app.get('/component-style-guide', (req, res) => {
  res.render('pages/component-style-guide.njk');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
  