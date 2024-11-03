import { Course } from "../../types";

export function groupCoursesByCategory(courses: Course[]) {
  return courses.reduce((acc, course) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {} as Record<string, Course[]>);
}

export function searchCoursesByTitle(courses: Course[], searchTerm: string) {
  return courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
export const getAssetPath = (path: string) => {
  return `${import.meta.env.BASE_URL}${path}`;
};
