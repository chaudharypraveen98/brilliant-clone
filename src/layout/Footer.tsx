import { getAssetPath } from "../utils/commonFunction";

export const Footer = () => {
  return (
    <footer className="bg-[#2F2F2F] text-white py-2 px-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <img
            src={getAssetPath("/main_logo.jpg")}
            style={{
              height: 64,
            }}
          />
          <span className="font-bold text-4xl">Brilliant</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-6xl">curated by</span>
          <span className="font-bold text-6xl">Mobbin</span>
        </div>
      </div>
    </footer>
  );
};
