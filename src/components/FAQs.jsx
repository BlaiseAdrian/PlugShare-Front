import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FAQCard from './FAQCard';
import FeedBackForm from './FeedBack';

const faqs = [
  {
    question: "What does the Platform aim to do?",
    answer: "The platform aims to consolidate individual knowledge about the best places to get stuff, by building a database of good places discovered by members. Under subcategories like 'Used Phones', 'Skilled Builder', 'Cheap Daycare Services', members can share the places they know."
  },  
  {
    question: "How does the platform work?",
    answer: "Members can see the all the needs, i.e what suppliers or services people are looking for under the Community List. Any one can submit a solution, i.e a place they know where others can get those products or services. In this way, a database of great plugs is built. This should be a place where others can go again, not a one-time stop. That is why even the needs of members are not one-time purchases, but rather repeatable purchases."
  },  
  {
    question: "What are Personal Needs?",
    answer: "These are products/services that a member has added to their list as being the most needful to find. A member can add needs directly in their personal list, or by upvoting a need in the Community list. This will add it to their Personal list. As of now, every member is limited to a maximum of three personal needs. Please note that these are not one-time needs, like 'I want to buy a second-hand laptop'. Rather, under each subcategory like second-hand phones, personal needs are descriptions of what those phones should be like, or what kind of service you want. So, a personal need could be; 'Only UK used'. Therefore the one who shares their plug shares only the place that sells UK used phones."
    }, 
  {
    question: "What are Community Needs?",
    answer: "All personal needs appear here, but aggregated and ranked based on popularity in their respective sub-category. If Used Phones subcategory is the most needed, it will appear on top above the rest. Under it, the specific needs of the members will be listed based on location. You can like any particular need and place it on your personal list."
  }, 
  {
    question: "How are Solutions Submitted?",
    answer: "Solutions are Service providers or shops where members can meet their needs. Members themselves submit solutions for the subcategories based on what they see people have written as their wants under that sub-category, to gauge what people need the most. Your place shouldn't satisfy every want, but the more needs it meets the better."  
  },  
  {
    question: "Why Submit Solutions?",
    answer: "Members are encouraged to share their plugs in responce to others' needs. Most helpful submissions receive apreciation (handshakes), which go to the solution providers. Members with more handshakes rank higher on the leaderboards, and place themselves in good position to reap rewards in the future."  
  },
  {
    question: "How are Solutions Ranked?",
    answer: "After members submit solutions, Endorsers evaluate them and see which ones they would like to endorse. The most endorsed solutions or the most appreciated solutions appear higher in the list, giving them more visibility, and therefore more opportunity to be appreciated."
  },
  {
    question: "Who are Endorsers?",
    answer: "These are like Celebrities or Influencers who promote a product or service. Anyone can endorse a solution, it all depends on the handshakes you have, which show the weight of your influence."
  },
  {
    question: "Why Endorse a solution?",
    answer: "Well, it is yor way of letting others know you are confident in a solution. This is because there are consequences for false endorsements. Any red flags given against a solution not only go on the record of the solution provider, but also that of the endorsers. That said, it is a way for members to promote businesses with whom they have a partnership, financial or otherwise. The more handshakes you have, the more the solutions you endorse appear on top."
  },
  {
    question: "How do I get Stars?",
    answer: "Members get one star for each member they invite to the platform, and for other contributions to the operation of the platform. These other contributions will be made clearer with time."
  },
  {
    question: "How do I get Handshakes?",
    answer: "Whenever you submit a shop or service provider as a solution, other members can click on the handshake icon to show their appreciation. If you use a certain shop and you provide some helpful comments and insights for others, they can show their appreciation the same way. It works similary to YouTube, how viewers can like a video, and like comments under those videos."
  },
  {
    question: "What use are stars, or handshakes? What is in it for you to share great Plugs?",
    answer: "Well, at the moment, we want to share knowledge and look out for each other. There are different ways to reward contributors in future. If a database of great plugs is built, it can become a paid-membership platform, and the revenue can be distributed to top contributors. Or, it can make money through paid sponsorships or advertisements if the  platform grows. One thing for sure is; it will all be based on the handshakes and stars you have. So, we'll keep good track of your efforts to help others!"
  }
];

function FAQ() {
  
  const [showFeedbackModal, setShowFeedbackModal] =useState(false);

  return (
    <div className="container">
            <button className="btn btn-primary ms-3 mb-3" onClick={() => setShowFeedbackModal(true)}>Talk to Us</button>
            <FeedBackForm
            show={showFeedbackModal}
            onClose={() => setShowFeedbackModal(false)}
            currentUser={ 'Current User'}
            />      
      <h2>Frequently Asked Questions</h2>
      <FAQCard faqs={faqs} />
    </div>
  );
}

export default FAQ;
