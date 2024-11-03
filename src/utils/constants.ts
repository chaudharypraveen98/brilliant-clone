import { Course, StreakDay } from "../../types";

export const streakDays: StreakDay[] = [
  { day: "T", isComplete: true, isCurrent: true },
  { day: "W", isComplete: false, isCurrent: false },
  { day: "Th", isComplete: false, isCurrent: false },
  { day: "F", isComplete: false, isCurrent: false },
  { day: "S", isComplete: false, isCurrent: false },
];

export const subjects = [
  { icon: "/icons/math.svg", title: "Math" },
  { icon: "/icons/data.svg", title: "Data Analysis" },
  { icon: "/icons/computer.svg", title: "Computer Science" },
  { icon: "/icons/programming.svg", title: "Programming & AI" },
  { icon: "/icons/science.svg", title: "Science & Engineering" },
];

export const recommendedCourses: Course[] = [
  {
    title: "Logic",
    category: "",
    image:
      "https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-deduction-M7p41u.png",
    id: "1",
    isNew: false,
  },
  {
    title: "Computer Science Fundamentals",
    category: "CS & PROGRAMMING",
    level: 2,
    image:
      "https://ds055uzetaobb.cloudfront.net/category-images/computer-science-9mKBqy.png",
    id: "2",
    isNew: false,
  },
  {
    title: "Solving Equations",
    category: "FOUNDATIONAL MATH",
    level: 1,
    image:
      "https://ds055uzetaobb.cloudfront.net/category-images/foundational-math-lI90N2.png",
    id: "3",
    isNew: false,
  },
];
