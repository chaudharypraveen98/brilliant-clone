interface Course {
  id: string;
  title: string;
  category: "Math" | "Data" | "Computer Science" | "Science" | 'CS & PROGRAMMING' | 'FOUNDATIONAL MATH'|"";
  isNew: boolean;
  image: string;
  progress?: number;
  level?: number;
}
interface User {
  email: string;
  name?: string;
  currentCourse?: Course;
}
interface StreakDay {
  day: string;
  isComplete: boolean;
  isCurrent: boolean;
}

interface UserState {
  uid: string | null;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

interface ErrorState {
  location: string | null;
  errorMessage: string | null;
  loading: boolean
}
export type { Course, User, StreakDay,UserState,ErrorState };
