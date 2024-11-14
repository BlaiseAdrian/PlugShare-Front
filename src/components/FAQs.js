import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FAQCard from './FAQCard';

const faqs = [
  {
    question: "How does the platform work?",
    answer: "The platform uses community effort to brainstorm and research service providers for the most common community issues."
  },
  {
    question: "How do I get stars?",
    answer: "You can earn stars by actively participating in the community and contributing valuable insights."
  },
  {
    question: "How do I get badges?",
    answer: "Badges are awarded based on your contributions, milestones, and engagement within the platform."
  },
  {
    question: "Why are my personal needs modified?",
    answer: "Personal needs may be modified to better match available resources and align with the community's goals."
  },
  {
    question: "What use are stars?",
    answer: "Stars help to establish trust and credibility within the community, making your recommendations more influential."
  }
];

function FAQ() {
  return (
    <div className="container mt-4">
      <h2>Frequently Asked Questions</h2>
      <FAQCard faqs={faqs} />
    </div>
  );
}

export default FAQ;
