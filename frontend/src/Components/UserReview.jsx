import React from 'react'

const UserReview = () => {
  return (
    <>
        <div className="mt-16 max-w-4xl w-full">
  <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">🌟 What Users Say</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition">
      <p className="text-gray-300 italic">"Super cool quiz app! Loved how it challenged me with real programming questions!"</p>
      <p className="text-blue-400 mt-2 font-semibold">– Manohar, Full Stack Dev</p>
    </div>
    <div className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition">
      <p className="text-gray-300 italic">"The timer adds real pressure. Great for interview prep. 10/10!"</p>
      <p className="text-blue-400 mt-2 font-semibold">– Amit, B.Tech CSE Student</p>
    </div>
    <div className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition">
      <p className="text-gray-300 italic">"It feels like a real-time coding challenge. Perfectly built and smooth UI."</p>
      <p className="text-blue-400 mt-2 font-semibold">– Anjali, React Developer</p>
    </div>
    <div className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition">
      <p className="text-gray-300 italic">"Love the instant feedback after each quiz! Helped me track my weak areas."</p>
      <p className="text-blue-400 mt-2 font-semibold">– Payal, Final Year Student</p>
    </div>
  </div>
</div>
    
    </>
  )
}

export default UserReview