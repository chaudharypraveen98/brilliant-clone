import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Course } from "../../../types";
import { CourseSection } from "../../components/CourseSection";
import {
  groupCoursesByCategory,
  searchCoursesByTitle,
} from "../../utils/commonFunction";

interface CategoryButton {
  id: string;
  label: string;
  isActive: boolean;
}

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("new");
  const [filteredList, setFilteredList] = useState<Course[]|[]>([]);

  const categories: CategoryButton[] = [
    { id: "new", label: "New courses", isActive: true },
    { id: "math", label: "Math", isActive: false },
    { id: "data", label: "Data", isActive: false },
    { id: "cs", label: "Computer Science", isActive: false },
    { id: "science", label: "Science", isActive: false },
  ];

  const courses: Course[] = [
    {
      id: "1",
      title: "How LLMs Work",
      image:
        "https://ds055uzetaobb.cloudfront.net/brioche/chapter/how-llms-work-z7ovbF.png?width=204",
      isNew: true,
      category: "Computer Science",
    },
    {
      id: "2",
      title: "Designing Programs",
      image:
        "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Designing_Programs_Course_Card-Bkn4k5.png?width=204",
      isNew: true,
      category: "Computer Science",
    },
    {
      id: "3",
      title: "Introduction to Probability",
      image:
        "https://ds055uzetaobb.cloudfront.net/chapter/probability-fundamentals-9v92rY.png?width=204",
      isNew: true,
      category: "Data",
    },
    {
      id: "4",
      title: "Modeling with Multiple Variables",
      image:
        "https://ds055uzetaobb.cloudfront.net/chapter/explaining-variation-LbNO6h.png?width=204",
      isNew: true,
      category: "Data",
    },
    {
      id: "5",
      title: "Vectors",
      image:
        "https://ds055uzetaobb.cloudfront.net/brioche/chapter/vectors-Grpuo7.png?width=204",
      isNew: true,
      category: "Math",
    },
    {
      id: "6",
      title: "Applied Python",
      image:
        "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Text_Analysis_in_Python-rcga5J.png?width=204",
      isNew: true,
      category: "Computer Science",
    },
    {
      id: "7",
      title: "Case Study: Unlocking Rental Value on Airbnb",
      image:
        "https://ds055uzetaobb.cloudfront.net/brioche/chapter/capstone-making-money-witih-airbnb-NDlGk9.png?width=204",
      isNew: true,
      category: "Data",
    },
    {
      id: "8",
      title: "Case Study: Going Viral on X",
      image:
        "https://ds055uzetaobb.cloudfront.net/brioche/chapter/capstone-twitterx-viral-tracking-rt01GG.png?width=204",
      isNew: true,
      category: "Data",
    },
    {
      id: "9",
      title: "Case Study: Topping the Charts with Spotify",
      image:
        "https://ds055uzetaobb.cloudfront.net/brioche/chapter/capstone-spotify-L7f7vf.png?width=204",
      isNew: true,
      category: "Data",
    },
    {
      id: "10",
      title: "Case Study: Maximizing Electric Car Value",
      image:
        "https://ds055uzetaobb.cloudfront.net/brioche/chapter/capstone-pricing-electric-vehicles-5KzO8N.png?width=204",
      isNew: true,
      category: "Data",
    },
  ];

  useEffect(() => {
    const filData = searchCoursesByTitle(courses, searchQuery);
    setFilteredList(filData);
  }, [searchQuery]);

  const groppedData = useMemo(() => {
    return groupCoursesByCategory(courses);
  }, []);

  const scrollToSection = (key:string) => {
    const section = document.getElementById(key);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveTab(key);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-6 text-black">
          Browse all 70+ courses
        </h1>

        {/* Search Bar */}
        <div className="relative mb-6 bg-white">
          <input
            type="text"
            className="w-full rounded-full border-2 border-gray-200 pl-12 pr-4 py-3 bg-white text-black"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id + "-Tab"}
              className={`px-4 py-2 rounded-full text-sm ${
                category.id === activeTab
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => scrollToSection(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        {searchQuery ? (
          filteredList.length > 0 ? (
            <CourseSection
              title={"Search Results"}
              courses={filteredList}
              sectionKey={"filteredList"}
            />
          ) : (
            <h3 className="font-semibold text-black">No Result Found</h3>
          )
        ) : (
          <>
            <CourseSection
              title={"New courses"}
              courses={courses}
              sectionKey={"new"}
            />
            {categories.slice(1).map((category) => {
              if (category.label in groppedData) {
                return (
                  <CourseSection
                    title={category.label}
                    courses={groppedData[category.label]}
                    sectionKey={category.id}
                    key={category.id}
                  />
                );
              } else {
                return <></>;
              }
            })}
          </>
        )}
      </main>
    </div>
  );
};

export default CoursesPage;
