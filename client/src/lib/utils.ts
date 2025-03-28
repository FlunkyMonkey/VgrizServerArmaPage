import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const categoryColors = {
  general: "bg-blue-500/20 text-blue-400",
  performance: "bg-green-500/20 text-green-400",
  bug: "bg-red-500/20 text-red-400",
  suggestion: "bg-yellow-500/20 text-yellow-400"
};

export const formatDate = (date: Date | string): string => {
  if (typeof date === 'string') {
    date = new Date(date);
  }
  return date.toISOString().split('T')[0]; // YYYY-MM-DD
};

export const getCategoryDisplayName = (category: string): string => {
  return category.charAt(0).toUpperCase() + category.slice(1);
};

export const isServerOnline = (): boolean => {
  // Simulating server status with 90% chance of being online
  return Math.random() > 0.1;
};

export const getRandomPlayerCount = (): number => {
  return Math.floor(Math.random() * 25); // Random number between 0-24
};
