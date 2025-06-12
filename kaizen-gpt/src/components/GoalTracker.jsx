import React, { useEffect, useState } from 'react';

function GoalTracker() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch('/api/goals')
      .then(res => res.json())
      .then(setGoals);
  }, []);

  return (
    <div className="mt-6 p-4 bg-gray-800 border border-gray-700 rounded">
      <h2 className="text-xl font-semibold">Goal Tracker</h2>
      <ul className="mt-2 space-y-1">
        {goals.map((g, i) => (
          <li key={i} className="text-sm">{g.goal_text} — <span className="italic text-green-400">{g.status}</span></li>
        ))}
      </ul>
    </div>
  );
}

export default GoalTracker;
