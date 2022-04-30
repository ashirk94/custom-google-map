import express from "express";

const router = express.Router();

const Things = [
  {
    name: "Example",
    type: "Example",
    position: {
      lat: 37.9838,
      lng: 23.7275,
    },
  },
  {
    name: "Thing",
    type: "Example",
    position: {
      lat: 37.9838,
      lng: 28.7275,
    },
  },
];

router.get("/", (req, res) => res.json(Things));

export default router;
