import { Course } from "../../types";

interface PageProps {
  title: string;
  sectionKey: string;
  courses: Course[] | [];
}

export const CourseSection = ({ sectionKey, title, courses }: PageProps) => {
  return (
    <div className="flex flex-col gap-[3rem]" id={sectionKey}>
      <h2 className="text-2xl font-bold text-black">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {courses.map((course) => (
          <div
            key={course.id + "-course"}
            className="bg-white rounded-lg p-4 border hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="relative aspect-square rounded-lg mb-4 flex items-center justify-center text-4xl">
              {course.isNew && (
                <div className="absolute top-2 right-2">
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    NEW
                  </span>
                </div>
              )}
              <img src={course.image} style={{ height: 102, width: 102 }} />
            </div>
            <h3 className="text-sm font-medium text-black">{course.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
