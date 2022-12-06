import express from "express";
import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

function getRoutes() {
  const router = express.Router();

  router.get("/test", (req, res) => {
    res.json("Hi this is working");
  });

  router.get("/yo", (req, res) => {
    res.json("hello");
  })
 

  return router;
}

export { getRoutes };