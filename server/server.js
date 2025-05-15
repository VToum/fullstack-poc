require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

const MOCK_WORLD_NAMES = [
  "Alyria",
  "Brightvale",
  "Celestia",
  "Duskmoor",
  "Eldoria",
  "Frostwind",
  "Glimmerfall",
  "Harbinger",
  "Ironforge",
  "Jadecrest"
];

app.get('/api/tibia/worlds/names', (_req, res) => {
  res.json({ names: MOCK_WORLD_NAMES });
});

app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
});
