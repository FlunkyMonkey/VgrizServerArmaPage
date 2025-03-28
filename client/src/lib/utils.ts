import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const categoryColors = {
  general: "bg-blue-800 text-blue-200 border border-blue-400",
  performance: "bg-green-800 text-green-200 border border-green-400",
  bug: "bg-red-800 text-red-200 border border-red-400",
  suggestion: "bg-amber-800 text-amber-200 border border-amber-400"
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
  // Always return true to show server as online
  return true;
};

export const getRandomPlayerCount = (): number => {
  return Math.floor(Math.random() * 25); // Random number between 0-24
};
