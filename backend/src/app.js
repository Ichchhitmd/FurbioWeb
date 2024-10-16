import express from "express";

import { DataSource } from "typeorm";

const app = express();

app.use(express.json());

const PORT = 3000;

export const database = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "furbio",
  synchronize: true,
  logging: false,
  entities: ["src/entity/*.ts"],
  migrations: ["src/migration/*.ts"],
  subscribers: ["src/subscriber/*.ts"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
});

app.listen(PORT, () => {
  console.log("Server started on port 3000");
});
