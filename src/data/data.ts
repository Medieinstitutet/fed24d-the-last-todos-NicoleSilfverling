import { Todo } from "../models/Todo";

export const data: Todo[] = [
  new Todo("Buy groceries", "Milk, eggs, and bread", false, new Date("2025-06-06"), 1),
  new Todo("Finish React assignment", "Complete the to-do list project", false, new Date("2025-06-07"), 2),
  new Todo("Call mom", "Weekly check-in", true, new Date("2025-06-01"), 3),
  new Todo("Workout", "Cardio and weights", false, new Date("2025-06-08"), 4),
  new Todo("Clean room", "Vacuum and dust", false, new Date("2025-06-09"), 5),
  new Todo("Pay bills", "Electricity and internet", true, new Date("2025-06-03"), 6),
  new Todo("Read book", "Read 30 pages of 'Atomic Habits'", false, new Date("2025-06-10"), 7),
  new Todo("Prepare lunch", "Cook chicken and rice", false, new Date("2025-06-06"), 8),
  new Todo("Email teacher", "Send project update", false, new Date("2025-06-04"), 9),
  new Todo("Practice TypeScript", "Follow tutorial and build sample app", false, new Date("2025-06-05"), 10),
];
