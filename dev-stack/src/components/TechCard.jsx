function TechCard({ tech, isAdded, onAdd }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col">
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={tech.name} className="w-9 h-9" />
        <span className="text-xs px-3 py-1 rounded-full bg-pink-50 text-pink-600">
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-semibold">{tech.name}</h3>
      <p className="mt-2 text-sm text-gray-500 flex-1">{tech.description}</p>

      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
        <span className="bg-gray-100 rounded px-2 py-1">{tech.category}</span>
        <span>{tech.difficulty}</span>
        <span className="text-gray-700">
          <span className="text-yellow-400">★</span> {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className="mt-4 w-full rounded-lg py-2.5 text-sm text-white bg-gray-900 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechCard;