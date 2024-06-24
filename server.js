const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://admin3:1234@cluster0.6im3j7k.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

const adoptionSchema = new mongoose.Schema({
  petName: String,
  adopterName: String,
  adopterPhone: String,
});

const Adoption = mongoose.model('Adoption', adoptionSchema);

app.post('/api/store-value', (req, res) => {
  const { petName, adopterName, adopterPhone } = req.body;

  const newAdoption = new Adoption({ petName, adopterName, adopterPhone });
  newAdoption.save()
    .then(() => res.json({ message: 'Adoption info received and stored successfully!' }))
    .catch((error) => res.status(500).json({ error: 'An error occurred while storing the adoption info' }));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
