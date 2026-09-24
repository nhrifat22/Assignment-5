function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="bg-white border border-gray-200 rounded-2xl p-5 lg:sticky lg:top-20">
      <h3 className="text-lg font-semibold">Your Stack</h3>
      <p className="text-sm text-gray-400">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="mt-4 border border-dashed border-gray-300 rounded-xl py-8 text-center text-sm text-gray-400">
          Your stack is empty.
        </div>
      ) : (
        <>
          <ul className="mt-4 space-y-2">
            {stack.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 border border-gray-200 rounded-lg p-2"
              >
                <img src={item.icon} alt={item.name} className="w-8 h-8" />
                <div className="flex-1">
                  <p className="text-sm font-medium leading-tight">{item.name}</p>
                  <p className="text-[10px] text-gray-400">{item.category}</p>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-gray-400 hover:text-red-500 px-2"
                  aria-label={`Remove ${item.name}`}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={onRemoveAll}
            className="mt-6 w-full rounded-lg border border-red-300 text-red-600 py-2 text-sm"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}

export default YourStack;