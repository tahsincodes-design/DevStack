import type { TStackData } from '../../Types/technology';

interface StackSidebarProps {
  stack: TStackData[];
  onRemove: (id: string) => void;
  onClearAll: () => void;
}

const StackSidebar = ({ stack, onRemove, onClearAll }: StackSidebarProps) => {
  return (
    <aside className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs h-fit sticky top-24">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>
          <p className="text-xs text-gray-500 mt-0.5">
            {stack.length} {stack.length === 1 ? 'Technology' : 'Technologies'} Selected
          </p>
        </div>
        {stack.length > 0 && (
          <button
            onClick={onClearAll}
            className="text-xs font-semibold text-rose-500 hover:text-rose-600 hover:bg-rose-50 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
          >
            Remove All
          </button>
        )}
      </div>

      {stack.length === 0 ? (
        <div className="text-center py-10 px-4 space-y-3">
          <div className="w-16 h-16 bg-gray-50 text-gray-300 rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold border border-dashed border-gray-200">
            🧱
          </div>
          <h4 className="text-sm font-semibold text-gray-700">Your Stack is Empty</h4>
          <p className="text-xs text-gray-400 max-w-55 mx-auto leading-relaxed">
            Click "Add to Stack" on any technology card to start building your custom stack.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-white p-1.5 shrink-0 border border-gray-100">
                  <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <div className="truncate">
                  <h4 className="text-sm font-bold text-gray-800 truncate">{item.name}</h4>
                  <span className="text-[10px] font-semibold text-gray-500 bg-white px-1.5 py-0.5 rounded border border-gray-100">
                    {item.category}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onRemove(item.id)}
                className="text-gray-400 hover:text-rose-500 hover:bg-white w-7 h-7 rounded-lg flex items-center justify-center transition-colors cursor-pointer shrink-0"
                title="Remove technology"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
};

export default StackSidebar;
