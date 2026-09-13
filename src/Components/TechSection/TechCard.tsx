import type { TStackData } from '../../Types/technology';

interface TechCardProps {
  tech: TStackData;
  isAdded: boolean;
  onAddToStack: (tech: TStackData) => void;
}

const TechCard = ({ tech, isAdded, onAddToStack }: TechCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-gray-50 p-2.5 flex items-center justify-center border border-gray-100">
            <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
          </div>
          <span className="text-xs font-semibold text-pink-600 bg-pink-50 border border-pink-100 px-3 py-1 rounded-full">
            {tech.badge}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
          {tech.description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs mb-5 pt-4 border-t border-gray-50">
          <span className="font-semibold text-gray-700 bg-gray-100 px-2.5 py-1 rounded-md">
            {tech.category}
          </span>
          <span className="text-gray-500 font-medium">{tech.difficulty}</span>
          <div className="flex items-center gap-1 font-bold text-gray-800">
            <span className="text-amber-400">★</span>
            <span>{tech.rating}</span>
          </div>
        </div>

        <button
          onClick={() => onAddToStack(tech)}
          disabled={isAdded}
          className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
            isAdded
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
              : 'bg-slate-900 text-white hover:bg-slate-800 active:scale-[0.99]'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
};

export default TechCard;