import { useState } from "react";

const faqs = [
  {
    question: "How are the quiz questions generated?",
    answer: "Questions are dynamically generated using an AI API based on your selected topic and difficulty.",
  },
  {
    question: "Is there a time limit for each question?",
    answer: "Yes! You get 30 seconds for each question. If unanswered, it automatically moves to the next one.",
  },
  {
    question: "Can I review my answers after the quiz?",
    answer: "Yes. After the quiz ends, you’ll see a detailed result with your answers and the correct ones.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // close if already open
    } else {
      setActiveIndex(index); // open new one
    }
  };

  return (
    <div className="mt-16 max-w-4xl w-full">
      <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">🙋 Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-xl cursor-pointer transition hover:bg-gray-700"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h4 className="font-semibold text-lg text-white">{faq.question}</h4>
              <span className="text-blue-400 text-2xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <p className="text-gray-400 mt-2 transition-all duration-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
