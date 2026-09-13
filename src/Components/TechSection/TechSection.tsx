import { use, useState } from 'react';
import type { TStackData } from '../../Types/technology';
import TechGrid from './TechGrid.tsx';
import StackSidebar from './StackSidebar.tsx';
import { toast } from 'react-toastify';

interface TechSectionProps {
  stackPromise: Promise<TStackData[]>;
}

const TechSection = ({ stackPromise }: TechSectionProps) => {
  const technologies = use(stackPromise);
  const [selectedStack, setSelectedStack] = useState<TStackData[]>([]);

  const handleAddToStack = (tech: TStackData) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);
    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setSelectedStack((prev) => [...prev, tech]);
    toast.success(`Added ${tech.name} to your stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
    const itemToRemove = selectedStack.find((item) => item.id === id);
    setSelectedStack((prev) => prev.filter((item) => item.id !== id));
    if (itemToRemove) {
      toast.info(`Removed ${itemToRemove.name} from your stack`);
    }
  };

  const handleClearAll = () => {
    setSelectedStack([]);
    toast.error('Cleared all technologies from stack');
  };

  return (
    <section id="technologies" className="max-w-7xl mx-auto px-6 py-12 w-full">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Explore <span className="brand-gradient-text">Technologies</span>
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Tech Cards (Left 2 Columns) */}
        <div className="lg:col-span-2">
          <TechGrid
            technologies={technologies}
            selectedStack={selectedStack}
            onAddToStack={handleAddToStack}
          />
        </div>

        {/* Your Stack Sidebar (Right 1 Column) */}
        <div className="lg:col-span-1">
          <StackSidebar
            stack={selectedStack}
            onRemove={handleRemoveFromStack}
            onClearAll={handleClearAll}
          />
        </div>
      </div>
    </section>
  );
};

export default TechSection;