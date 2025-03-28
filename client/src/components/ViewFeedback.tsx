import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { categoryColors, formatDate, getCategoryDisplayName } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Inbox, Calendar, ChevronUp, ChevronDown, User, Trash2 } from "lucide-react";
import type { Feedback } from "@shared/schema";

export default function ViewFeedback() {
  const [filter, setFilter] = useState<string>("all");
  const [sortField, setSortField] = useState<"date" | "name">("date");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: feedbacks, isLoading } = useQuery<Feedback[]>({
    queryKey: ["/api/feedbacks"],
  });

  const clearMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("DELETE", "/api/feedbacks");
      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/feedbacks"] });
      toast({
        title: "Success",
        description: "All feedback has been cleared",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to clear feedback: ${error.message}`,
        variant: "destructive",
      });
    },
  });

  const handleClearFeedback = () => {
    clearMutation.mutate();
  };

  const handleFilterChange = (value: string) => {
    setFilter(value);
  };

  const handleSort = (field: "date" | "name") => {
    if (sortField === field) {
      // Toggle sort direction if the same field is clicked
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc"); // Default to desc when switching fields
    }
  };

  // Filter and sort the feedback data
  const filteredAndSortedFeedback = feedbacks
    ? feedbacks
        .filter((item) => filter === "all" || item.category === filter)
        .sort((a, b) => {
          if (sortField === "date") {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return sortDirection === "asc" ? dateA - dateB : dateB - dateA;
          } else {
            return sortDirection === "asc"
              ? a.name.localeCompare(b.name)
              : b.name.localeCompare(a.name);
          }
        })
    : [];

  return (
    <div className="py-12 mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Community <span className="text-primary">Feedback</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Check out what other players are saying about our server and the experiences they've shared.
        </p>
      </div>
      
      <Card className="bg-dark-lighter border-gray-700 shadow-lg">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Filter by:</span>
              <Select 
                onValueChange={handleFilterChange} 
                defaultValue="all"
              >
                <SelectTrigger className="bg-dark-darker border-gray-700 w-auto">
                  <SelectValue placeholder="All Feedback" />
                </SelectTrigger>
                <SelectContent className="bg-dark-darker border-gray-700">
                  <SelectItem value="all">All Feedback</SelectItem>
                  <SelectItem value="general">General</SelectItem>
                  <SelectItem value="performance">Performance</SelectItem>
                  <SelectItem value="bug">Bug Reports</SelectItem>
                  <SelectItem value="suggestion">Suggestions</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                  disabled={isLoading || !feedbacks || feedbacks.length === 0}
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Clear All
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-dark-lighter border-gray-700">
                <AlertDialogHeader>
                  <AlertDialogTitle>Clear All Feedback</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently delete all feedback submissions. This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="bg-dark-darker border-gray-700 hover:bg-gray-700">Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleClearFeedback}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    Delete All
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          
          {isLoading ? (
            <div className="py-12 flex justify-center">
              <svg className="animate-spin h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          ) : (
            <>
              {(!feedbacks || feedbacks.length === 0 || filteredAndSortedFeedback.length === 0) ? (
                <div className="py-12 text-center">
                  <Inbox className="h-16 w-16 mx-auto text-gray-500 mb-4" />
                  <p className="text-xl font-medium text-gray-400">No feedback submissions yet</p>
                  <p className="mt-2 text-gray-500">Be the first to submit your thoughts about our server!</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                      <tr>
                        <th 
                          className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer"
                          onClick={() => handleSort("date")}
                        >
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            Date
                            {sortField === "date" && (
                              sortDirection === "asc" ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />
                            )}
                          </div>
                        </th>
                        <th 
                          className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider cursor-pointer"
                          onClick={() => handleSort("name")}
                        >
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            Name
                            {sortField === "name" && (
                              sortDirection === "asc" ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />
                            )}
                          </div>
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Category
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Feedback
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700 bg-dark-lighter">
                      {filteredAndSortedFeedback.map((item, index) => (
                        <tr key={index} className="hover:bg-dark-darker transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            {formatDate(item.date)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                            {item.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span className={`px-2 py-1 rounded-full text-xs ${categoryColors[item.category as keyof typeof categoryColors]}`}>
                              {getCategoryDisplayName(item.category)}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-300">
                            <p className="line-clamp-2">{item.message}</p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
