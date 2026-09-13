import type { TStackData } from '../../Types/technology';
import TechCard from './TechCard.tsx';

interface TechGridProps {
  technologies: TStackData[];
  selectedStack: TStackData[];
  onAddToStack: (tech: TStackData) => void;
}

const TechGrid = ({ technologies, selectedStack, onAddToStack }: TechGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {technologies.map((tech: TStackData) => (
        <TechCard
          key={tech.id}
          tech={tech}
          isAdded={selectedStack.some((item) => item.id === tech.id)}
          onAddToStack={onAddToStack}
        />
      ))}
    </div>
  );
};

export default TechGrid;