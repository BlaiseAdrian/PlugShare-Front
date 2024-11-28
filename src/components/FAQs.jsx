import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FAQCard from './FAQCard';

const faqs = [
  {
    question: "What does the Platform aim to do?",
    answer: "The platform aims to consolidate individual knowledge about the best places to get stuff, by building a database of good places discovered by members. This is to help one another avoid overpaying for stuff or being cheated just because of ignorance."
  },  
  {
    question: "How does the platform work?",
    answer: "Members can see the all the needs, i.e what products or services people are looking for under the Community List. Any one can submit a solution, i.e a place they know where others can get those products or services. In this way, a database of great plugs is built."
  },  
  {
    question: "What are Personal Needs?",
    answer: "The platform uses community effort to brainstorm and research service providers for the most common community issues."
  }, 
  {
    question: "What are Community Needs?",
    answer: "The platform uses community effort to brainstorm and research service providers for the most common community issues."
  }, 
  {
    question: "How are Solutions Submitted?",
    answer: "The platform uses community effort to brainstorm and research service providers for the most common community issues."
  },  
  {
    question: "Why Submit Solutions?",
    answer: "The platform uses community effort to brainstorm and research service providers for the most common community issues."
  },
  {
    question: "How are Solutions Ranked?",
    answer: "The platform uses community effort to brainstorm and research service providers for the most common community issues."
  },
  {
    question: "Who are Endorsers?",
    answer: "You can earn stars by actively participating in the community and contributing valuable insights."
  }, 
  {
    question: "How do I get Stars?",
    answer: "The platform uses community effort to brainstorm and research service providers for the most common community issues."
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
