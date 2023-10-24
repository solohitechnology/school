import React, {useState} from 'react';
import './faq.css'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; 


const Faq = () => {
  const faqsData = [
    {
      question: 'What is your return policy?',
      answer: 'Our return policy allows you to return items within 30 days of purchase for a full refund.',
    },
    {
      question: 'How do I reset my password?',
      answer: 'To reset your password, click on the "Forgot Password" link on the login page and follow the instructions.',
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel your subscription at any time by going to your account settings and selecting "Cancel Subscription."',
    },
    {
      question: 'How do I access my course materials?',
      answer: 'Once you have enrolled in a course, you can access your course materials by logging in to your account and navigating to "My Courses."',
    },
    {
      question: 'Are the courses self-paced or scheduled?',
      answer: 'Our courses are self-paced, allowing you to study at your own convenience. However, some courses may have scheduled live sessions or assignments with deadlines.',
    },
    {
      question: 'Do you offer financial aid or scholarships?',
      answer: 'Yes, we offer financial aid and scholarships for eligible students. You can apply for financial aid during the enrollment process.',
    },
    {
      question: 'How can I contact support?',
      answer: 'You can contact our support team by emailing support@example.com or using the live chat feature on our website.',
    },
    {
      question: 'Can I switch my enrolled course?',
      answer: 'Yes, you can switch to a different course within the first 7 days of enrollment. Contact our support team to assist you with the process.',
    },
    {
      question: 'Is there a mobile app for the academy?',
      answer: 'Yes, we have a mobile app available for both iOS and Android devices. You can download it from the respective app stores.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept payments through credit/debit cards, PayPal, and other popular payment gateways.',
    },
    {
      question: 'Can I download course materials for offline use?',
      answer: 'Yes, some courses offer downloadable materials for offline use. Look for the download option on the course page.',
    },
    {
      question: 'How do I become an instructor?',
      answer: 'If you are interested in becoming an instructor, you can apply on our website under the "Become an Instructor" section.',
    },
    {
      question: 'Are there any prerequisites for enrolling in a course?',
      answer: 'Prerequisites vary depending on the course. Check the course details for specific requirements.',
    },
    {
      question: 'What should I do if I encounter technical issues?',
      answer: 'If you face any technical issues, try clearing your browser cache or contact our support team for assistance.',
    },
    {
      question: 'How do I request a refund?',
      answer: 'To request a refund, contact our support team with your order details and reason for the refund.',
    },
    {
      question: 'Do you offer corporate training programs?',
      answer: 'Yes, we offer corporate training programs tailored to the needs of your organization. Contact our corporate sales team for more information.',
    },
    {
      question: 'How do I track my progress in a course?',
      answer: 'You can track your progress by visiting the course dashboard, where you will find your completed and in-progress lessons.',
    },
    {
      question: 'Can I access the course materials after the course ends?',
      answer: 'Yes, you will have access to the course materials even after the course ends, allowing you to review the content at your convenience.',
    },
    {
      question: 'What is the average course completion time?',
      answer: 'The course completion time varies depending on the course. Check the estimated completion time on the course page.',
    },
    {
      question: 'How do I leave feedback for a course?',
      answer: 'You can leave feedback for a course by going to the course page and clicking on the "Leave Feedback" button.',
    },
    {
      question: 'Do you provide certificates of completion?',
      answer: 'Yes, upon successfully completing a course, you will receive a certificate of completion that you can download and share.',
    },
    {
      question: 'Is the payment process secure?',
      answer: 'Yes, we use industry-standard encryption to ensure that your payment information is secure.',
    },
    {
      question: 'Can I enroll in multiple courses simultaneously?',
      answer: 'Yes, you can enroll in multiple courses at the same time. Your progress will be tracked separately for each course.',
    },
    {
      question: 'Is there a free trial available for courses?',
      answer: 'Some courses may offer a free trial. Check the course details to see if a free trial is available.',
    },
    {
      question: 'Can I share my course progress with others?',
      answer: 'Yes, you can share your course progress and achievements on social media platforms directly from your course dashboard.',
    },
    {
      question: 'How do I update my account information?',
      answer: 'You can update your account information, such as email address and password, in the account settings section.',
    },
    {
      question: 'What do I do if I forget my username or email?',
      answer: 'If you forget your username or email, contact our support team with your account details for assistance.',
    },
    {
      question: 'How do I provide feedback on an instructor?',
      answer: 'You can provide feedback on an instructor by rating the course and leaving comments in the course review section.',
    },
    {
      question: 'Are there any discounts available for multiple course enrollments?',
      answer: 'Yes, we offer discounts for enrolling in multiple courses together. Look for bundle offers on our website.',
    },
    {
      question: 'How do I share my course completion certificate on LinkedIn?',
      answer: 'To share your course completion certificate on LinkedIn, go to your LinkedIn profile, click on "Add profile section," and select "Certification." Follow the instructions to add your certificate.',
    },
   
  ];
 
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question === selectedQuestion ? null : question);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <ul>
        {faqsData.map((faq, index) => (
          <li
            key={index}
            className={`faq-item ${selectedQuestion === faq.question ? 'active' : ''}`}
            onClick={() => handleQuestionClick(faq.question)}
          >
            <strong>
              {faq.question}{' '}
              {selectedQuestion === faq.question ? <FaChevronUp /> : <FaChevronDown />}
            </strong>
            {selectedQuestion === faq.question && <p>{faq.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Faq;
