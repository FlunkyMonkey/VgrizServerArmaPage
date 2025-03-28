import express, { type Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertFeedbackSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  const apiRouter = express.Router();

  // Get all feedback
  apiRouter.get("/feedbacks", async (_req: Request, res: Response) => {
    try {
      const feedbacks = await storage.getFeedbacks();
      return res.json(feedbacks);
    } catch (error) {
      return res.status(500).json({ message: "Failed to retrieve feedback", error });
    }
  });

  // Get feedback by category
  apiRouter.get("/feedbacks/category/:category", async (req: Request, res: Response) => {
    try {
      const { category } = req.params;
      const feedbacks = await storage.getFeedbacksByCategory(category);
      return res.json(feedbacks);
    } catch (error) {
      return res.status(500).json({ message: "Failed to retrieve feedback by category", error });
    }
  });

  // Create new feedback
  apiRouter.post("/feedbacks", async (req: Request, res: Response) => {
    try {
      const validatedData = insertFeedbackSchema.safeParse(req.body);
      
      if (!validatedData.success) {
        const validationError = fromZodError(validatedData.error);
        return res.status(400).json({ message: validationError.message });
      }
      
      const feedback = await storage.createFeedback(validatedData.data);
      return res.status(201).json(feedback);
    } catch (error) {
      return res.status(500).json({ message: "Failed to create feedback", error });
    }
  });

  // Clear all feedback
  apiRouter.delete("/feedbacks", async (_req: Request, res: Response) => {
    try {
      await storage.clearFeedbacks();
      return res.status(200).json({ message: "All feedback cleared successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Failed to clear feedback", error });
    }
  });

  // Register the API router
  app.use("/api", apiRouter);

  const httpServer = createServer(app);
  return httpServer;
}
