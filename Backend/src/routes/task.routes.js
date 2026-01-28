import { Router } from "express";
import Task from "../models/Task.js";
import { auth } from "../middleware/auth.js";

const router = Router();

router.get("/", auth(), async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
});

router.post("/", auth(), async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    user: req.user.id
  });
  res.status(201).json(task);
});

router.put("/:id", auth(), async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(task);
});

router.delete("/:id", auth(), async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

export default router;
