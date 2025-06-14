import { useScrollDirection } from '../hooks/useScrollDirection';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    text: "Ashik is an exceptional developer! His attention to detail and ability to deliver high-quality work on time is remarkable. The MERN stack expertise really shows in the final product. Will definitely hire again!",
    author: "Sarah Johnson",
    source: "via Upwork",
  },
  {
    text: "Outstanding work on our React application. Ashik's expertise in the MERN stack helped us launch our product ahead of schedule. Professional communication throughout the project. Highly recommended!",
    author: "Mike Chen",
    source: "via Fiverr",
  },
  {
    text: "Professional, skilled, and communicative. Ashik transformed our outdated website into a modern, responsive masterpiece using React and Node.js. Exceeded all expectations!",
    author: "Emily Rodriguez",
    source: "via Freelancer",
  },
  {
    text: "Incredible developer with deep knowledge of modern web technologies. Ashik delivered a complex full-stack application flawlessly. His MongoDB and Express.js skills are top-notch. A true professional!",
    author: "David Thompson",
    source: "via LinkedIn",
  },
  {
    text: "Working with Ashik was a game-changer for our startup. His technical skills in React and Node.js, combined with problem-solving abilities, are exceptional. Will work with him again!",
    author: "Lisa Park",
    source: "via Upwork",
  },
  {
    text: "Ashik's code quality is exceptional. Clean, well-documented, and scalable solutions using the full MERN stack. He's not just a developer, he's a true software architect!",
    author: "James Wilson",
    source: "via GitHub",
  }
];

const ClientReviews = () => {
  const scrollDirection = useScrollDirection();

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Client Reviews
        </h2>
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard
            key={idx}
            testimonial={testimonial}
            index={idx}
            scrollDirection={scrollDirection}
          />
        ))}
      </div>
    </section>
  );
};

export default ClientReviews; 