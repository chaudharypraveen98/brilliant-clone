import { ChevronDown } from "lucide-react";
import { UserState } from "../../../types";
import { ReactSVG } from "react-svg";
import { useAppSelector } from "../../redux/hook";
import { useNavigate } from "react-router-dom";
import { recommendedCourses, streakDays } from "../../utils/constants";
import { getAssetPath } from "../../utils/commonFunction";

const DashboardPage = () => {
  const user: UserState = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-black">
              Welcome, {user.displayName?.split(" ")[0]}
            </h1>

            {/* Streak Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border-gray-500">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center flex-row space-x-2">
                  <div className="text-6xl font-bold text-black">1</div>
                  <ReactSVG
                    src={getAssetPath("/icons/electric.svg")}
                    style={{
                      width: 24,
                      height: "auto",
                    }}
                  />
                </div>
                <div className="rounded-full w-8 h-8 bg-gray-200 flex flex-row justify-center items-center">
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                Solve <span className="font-bold">3 problems</span> to continue
                your streak
              </p>

              <div className="flex justify-between items-center">
                <div className="flex flex-row gap-[0.5rem]">
                  {streakDays.map((day, index) => (
                    <div
                      key={index}
                      className={`flex flex-col items-center space-y-2 ${
                        day.isCurrent ? "text-black" : "text-gray-400"
                      }`}
                    >
                      <div>
                        <ReactSVG
                          src={getAssetPath("/icons/electric_progress.svg")}
                          className={`rounded-full w-[48px] h-[48px] ${
                            day.isComplete
                              ? "rect-fill-green"
                              : day.isCurrent
                              ? "rect-fill-current"
                              : "rect-fill-default"
                          }`}
                        />
                      </div>
                      <span className="text-sm">{day.day}</span>
                    </div>
                  ))}
                </div>
                <div className="w-4 h-8 bg-yellow-200 rounded-full" />
              </div>
            </div>

            {/* Leagues Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center space-x-4">
                <img
                  alt="Locked Leagues Badge"
                  loading="lazy"
                  width="64"
                  height="64"
                  decoding="async"
                  data-nimg="1"
                  src="https://ds055uzetaobb.cloudfront.net/leagues-icons/league-level-badge-1-hydrogen-4fT6hp.png"
                />
                <div>
                  <div className="font-bold text-black">UNLOCK LEAGUES</div>
                  <div className="text-gray-500 text-sm">70 of 175 XP</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <h2 className="text-xl font-bold text-black">Jump back in</h2>

            {/* Continue Learning Card */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-48 course-back flex flex-row items-center justify-center">
                <img
                  width="123"
                  height="137"
                  alt=""
                  src="https://ds055uzetaobb.cloudfront.net/category-images/science-WrzOSf.png"
                />
              </div>
              <div className="p-6  flex flex-col items-center justify-center">
                <div className="text-yellow-600 text-sm font-medium mb-2">
                  SCIENCE · LEVEL 1
                </div>
                <h3 className="text-xl font-bold mb-4 text-black">
                  Scientific Thinking
                </h3>
                <button
                  className="w-full bg-black text-white rounded-full py-3 font-medium"
                  onClick={() => navigate("/courses")}
                >
                  Continue path
                </button>
              </div>
            </div>

            {/* Recommended Section */}
            <div>
              <h2 className="text-xl font-bold mb-6 text-black">
                Recommended for you
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {recommendedCourses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="mb-4 flex flex-row justify-center">
                      <img
                        src={course.image}
                        style={{
                          height: 64,
                          width: 64,
                        }}
                      />
                    </div>
                    {course.category && (
                      <div className="text-xs text-gray-600 mb-1 text-center">
                        {course.category}
                        {course.level && ` · LEVEL ${course.level}`}
                      </div>
                    )}
                    <div className="font-bold text-sm text-black text-center">
                      {course.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
