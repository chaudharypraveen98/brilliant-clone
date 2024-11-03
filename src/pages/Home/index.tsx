import { Star } from "lucide-react";
import { ReactSVG } from "react-svg";
import { subjects } from "../../utils/constants";
import { useEffect } from "react";
import { UserState } from "../../../types";
import { useAppSelector } from "../../redux/hook";
import { useNavigate } from "react-router-dom";
import { getAssetPath } from "../../utils/commonFunction";

export default function HomePage() {
  const user: UserState = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.uid) {
      navigate("/home");
    }
  }, []);

  return (
    <div>
      <div className="bg-white px-36">
        <nav className="flex justify-between items-center px-10 py-8">
          <div className="text-[48px] font-bold text-black">Brilliant</div>
          <a
            href="#/signup"
            className="px-8 py-4 rounded-full border border-gray-200 bg-transparent text-black mr-8 text-lg"
          >
            Log in
          </a>
        </nav>

        <main className="mx-auto px-10 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-12">
              <h1 className="text-[80px] font-serif text-black">
                Learn by <span className="text-blue-500">doing</span>
              </h1>
              <h3 className="text-3xl text-gray-600 w-[90%]">
                Guided interactive problem solving that's effective and fun.
                Master concepts in 15 minutes a day.
              </h3>
              <button className="px-32 py-6 bg-emerald-500 text-white rounded-full text-lg hover:bg-emerald-600 transition-colors w-fit">
                Get started
              </button>
            </div>
            <img
              src={getAssetPath("/images/banner.png")}
              alt="Interactive math visualization"
              className="w-full rounded-xl ml-[-10px]"
            />
          </div>

          <div className="mt-18">
            <div className="flex flex-row justify-between gap-[0.5rem]">
              {subjects.map((subject) => (
                <div
                  key={subject.title}
                  className="flex items-center space-x-2 p-3 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <ReactSVG
                    src={getAssetPath(subject.icon)}
                    style={{
                      height: 24,
                      width: 24,
                    }}
                  />
                  <span className="text-2xl font-medium text-black">
                    {subject.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      <div className="pt-[120px] mt-[30px] bg-[#F6F6F6] px-24">
        <h2 className="text-[32px] font-bold mb-12 text-center text-black">
          Join over 10 million people learning on Brilliant
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-3">
          <div className="flex flex-row items-center gap-8">
            <img
              src="https://brilliant.org/images/paywall/new-york-times.png"
              alt="New York"
              style={{
                height: 42,
              }}
            />
            <img
              src="https://brilliant.org/images/paywall/the-atlantic-long.png"
              alt="New York"
              style={{
                height: 24,
              }}
            />
          </div>

          <div className="flex flex-col items-start space-x-1">
            <div className="flex flex-row">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="ml-2 text-lg text-gray-600">
              Over 50,000 5-star reviews on
            </p>
          </div>
          <img
            src={getAssetPath("/images/trust.png")}
            alt="Trustpilot"
            style={{
              height: 54,
            }}
          />
          <div className="flex flex-row items-center gap-8">
            <img
              src="https://brilliant.org/images/homepage/app-of-the-day.png"
              alt="Trustpilot"
              style={{
                height: 54,
              }}
            />
            <img
              src={getAssetPath("/icons/best_app.svg")}
              alt="Trustpilot"
              style={{
                height: 54,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
