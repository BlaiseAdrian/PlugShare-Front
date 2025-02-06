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
    answer: "Members can see the all the requirements, i.e what qualities the suppliers or services people are looking for should have, under the Community List. Any one can share a Plug, i.e a place they know where others can get those products or services. In this way, a database of great plugs is built."
  },  
  {
    question: "What is the Personal List?",
    answer: "This is where you add your specific needs/requirements under a specific subcategory. When others are sharing their Plugs, they'll read through them so that they share the places with the stuff you actually want, the way you want them. You can add needs directly in your personal list page, or by upvoting a need in the Community list, which you can then edit and add  to your list. As of now, every member is limited to a maximum of three personal needs. An example of a pesronal requirement/need under the 'Affordable Daycare Services' subcategory is 'I want a place with a van to pick up and return the children.'."
    }, 
  {
    question: "What are Community Needs?",
    answer: "All personal needs/requirements appear here, arranged under their respective subcategories. Members can see the requirements and then share their Plugs that meet most (Not necessarily all) of a person's requirements. You can share your Plug even if it doesn't meet any requirements, but you risk getting no appreciation, or even negative reviews."
  },   
  {
    question: "Why Share Plugs?",
    answer: "Members are encouraged to share their plugs in responce to others' needs. Most helpful submissions receive apreciation (handshakes), which go to the Plug providers. Members with more handshakes rank higher on the leaderboards, and place themselves in good position to reap rewards in the future."  
  },
  {
    question: "How are Plugs Ranked?",
    answer: "After members submit plugs, others can check them out and appreciate them by clicking the handshake icon (akin to liking a social media post), or by going further to endorse it. Endorsing is more serious than appreciating because the endorser has placed their Community reputation on the line. Any negative reviews affect both the Plug provider and the endorsers. Therefore endorsed Plugs appear even higher than the most appreciated Plugs, though you can choose to sort them any way you want. You can see all the endorsers of a Plug, and how they rank (The number of handshakes they have).The most endorsed solutions or the most appreciated solutions appear higher in the list, giving them more visibility, and therefore more opportunity to be appreciated."
  },
  {
    question: "Why Endorse a solution?",
    answer: "Well, it is your way of letting others know you are confident in a Plug. This is because there are consequences for false endorsements. Any red flags given against a Plug not only go on the record of the provider, but also that of the endorsers. That said, it is a way for members to promote businesses with whom they have a partnership, financial or otherwise. The more handshakes you have, the more the Plugs you endorse appear on top."
  },
  {
    question: "How do I get Handshakes?",
    answer: "Whenever you submit a shop or service provider as a Plug, other members can click on the handshake icon to show their appreciation. If you use a certain shop and you provide some helpful comments and insights for others, they can show their appreciation the same way. It works similary to YouTube, how viewers can like a video, and then like comments under those videos."
  },
  {
    question: "How do I get Stars?",
    answer: "Members get one star for each member they invite to the platform, and for other contributions to the operation of the platform. These other contributions will be made clearer with time."
  },
  {
    question: "What use are stars, or handshakes? What is in it for me to share great Plugs?",
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
