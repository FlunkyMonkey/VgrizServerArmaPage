import { 
  users, 
  type User, 
  type InsertUser, 
  feedbacks, 
  type Feedback, 
  type InsertFeedback 
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Feedback methods
  createFeedback(feedback: InsertFeedback): Promise<Feedback>;
  getFeedbacks(): Promise<Feedback[]>;
  getFeedbackById(id: number): Promise<Feedback | undefined>;
  getFeedbacksByCategory(category: string): Promise<Feedback[]>;
  clearFeedbacks(): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private feedbackItems: Map<number, Feedback>;
  private userCurrentId: number;
  private feedbackCurrentId: number;

  constructor() {
    this.users = new Map();
    this.feedbackItems = new Map();
    this.userCurrentId = 1;
    this.feedbackCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createFeedback(insertFeedback: InsertFeedback): Promise<Feedback> {
    const id = this.feedbackCurrentId++;
    const date = new Date();
    const feedback: Feedback = { ...insertFeedback, id, date };
    this.feedbackItems.set(id, feedback);
    return feedback;
  }

  async getFeedbacks(): Promise<Feedback[]> {
    return Array.from(this.feedbackItems.values());
  }

  async getFeedbackById(id: number): Promise<Feedback | undefined> {
    return this.feedbackItems.get(id);
  }

  async getFeedbacksByCategory(category: string): Promise<Feedback[]> {
    return Array.from(this.feedbackItems.values()).filter(
      (feedback) => feedback.category === category
    );
  }

  async clearFeedbacks(): Promise<void> {
    this.feedbackItems.clear();
    return;
  }
}

export const storage = new MemStorage();
