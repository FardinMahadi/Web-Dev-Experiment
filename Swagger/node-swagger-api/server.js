const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const app = express();
const PORT = 5000;

app.use(express.json());

let items = [
  { id: 1, name: "Item 1", description: "This is Item 1" },
  { id: 2, name: "Item 2", description: "This is Item 2" },
];

const swaggerDocument = YAML.load("./docs/swagger.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/api/items", (req, res) => {
  res.json(items);
});

app.get("/api/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.json(item);
});

app.post("/api/items", (req, res) => {
  const { name, description } = req.body;
  const newItem = {
    id: items.length + 1,
    name,
    description,
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.put("/api/items/:id", (req, res) => {
  const { name, description } = req.body;
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }
  item.name = name || item.name;
  item.description = description || item.description;
  res.json(item);
});

app.patch("/api/items/:id", (req, res) => {
  const { name, description } = req.body;
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }
  item.name = name || item.name;
  item.description = description || item.description;
  res.json(item);
});

app.delete("/api/items/:id", (req, res) => {
  const index = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: "Item not found" });
  }
  items.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`📘 Swagger docs available at http://localhost:${PORT}/api-docs`);
});
