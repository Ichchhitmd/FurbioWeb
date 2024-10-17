// src/routes/userRoutes.ts

import { Router, Request, Response } from "express";
import { AppDataSource } from "../db/data-source";
import { User } from "../entity/User";

const router = Router();

// Get all users
router.get("/", async (req: Request, res: Response) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
});

// Create a new user
router.post("/", async (req: Request, res: Response) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const newUser = userRepository.create(req.body);
    const result = await userRepository.save(newUser);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
});

export default router;
