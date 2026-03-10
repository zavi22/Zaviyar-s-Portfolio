import { Code, Braces } from 'lucide-react';
import profileImage from '../../assets/zaviyar.jpeg';

function ProfileCard() {
  return (
    <div className="relative w-full flex justify-center items-center min-h-[400px] p-4 sm:p-8">
      <div className="relative">
        <div className="absolute -top-6 sm:-top-8 -left-6 sm:-left-8 w-12 sm:w-16 h-12 sm:h-16 bg-slate-700/50 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-float">
          <Code className="w-6 sm:w-8 h-6 sm:h-8 text-slate-300" />
        </div>

        <div className="absolute -top-6 sm:-top-8 -right-6 sm:-right-8 w-12 sm:w-16 h-12 sm:h-16 bg-slate-700/50 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-float-delayed">
          <Braces className="w-6 sm:w-8 h-6 sm:h-8 text-slate-300" />
        </div>

        <div className="relative group">
          <div className="w-40 sm:w-56 md:w-72 lg:w-96 aspect-square rounded-full p-0.5 sm:p-1 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-float-slow transition-transform duration-300 group-hover:scale-110">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-green-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-2 shadow-lg animate-pulse-subtle">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full"></div>
            <span className="font-semibold text-xs sm:text-sm">Available</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
