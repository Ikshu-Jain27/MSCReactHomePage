import React from "react";
import Card from "./Card";
import UpcomingEventsCard from "./UpcomingEventsCard";

const cardData = [
  {
    id: 1,
    title: "DECIDE",
    description:
      "We will help you decide the best way ahead by providing you the right information.",
    iconSrc:
      "https://img.freepik.com/free-vector/toggle-concept-illustration_114360-8900.jpg?w=2000",
  },
  {
    id: 2,
    title: "LEARN",
    description:
      "We will help you learn what you need to by exclusive events, sessions and webinars.",
    iconSrc:
      "https://stories.freepiklabs.com/api/vectors/online-learning/rafiki/render?color=7BBEF4FF&background=complete&hide=",
  },
  {
    id: 3,
    title: "APPLY",
    description:
      "Having skills is one thing and applying that at right place is another. We will bridge the gap.",
    iconSrc:
      "https://img.freepik.com/free-vector/forms-concept-illustration_114360-4957.jpg?w=740&t=st=1672240782~exp=1672241382~hmac=18c1cfdd71a792d5457abfd2abc53ec6ecc7b8e5bb61fa8645eef8a7a94f7f37",
  },
];

const upcomingEventsData = [
  {
    id: 4,
    title: "Insider 2",
    img: "insider2.jpeg",
    date: "23rd July,2023",
    content: "Episode 2: The second episode of the Insider Series was an inspiring session with the talented Ms. Bhawna, one of the MLH Fellowship Top 50 achievers. She shared her exceptional journey and insights, motivating our audience to excel in the dynamic realm of tech.",
    guest: "Bhawna Chauhan",
    mode: "Online"
  },
  {
    id: 5,
    title: "Insider 1",
    img: "insider1.jpeg",
    date: "20th June,2023",
    content: "Episode 1: In this captivating episode of our Insider Series, we delved into the world of the Flipkart GRiD Hackathon with the amazing Ms. Pooja Gera. She shared her remarkable journey and winning strategies to ace hackathons and her experience that led to triumph.",
    guest: "Pooja Gera",
    mode: "Online"
  },
  {
    id: 6,
    title: "BootCamp",
    img: "bootcamp modal.jpg",
    date: "5th June- 8th July",
    content: "MSC IGDTUW's cutting-edge Tech Summer Bootcamp with a unique blend of Mentorship in diverse domains! Delve into the realms of AI/ML, Web Development, App Development, AR/VR and Cybersecurity, guided by industry experts. Embrace innovation, gain practical skills, and ignite your tech journey in an immersive and dynamic learning environment. Unleash your potential and be future-ready at our exclusive summer program!",
    guest: "Various Mentors",
    mode: "Online"
  }
];

function CardContainer() {
  return (
    <section>
      <div className="flex min-h-screen items-center justify-center flex-col">
        <h2
          className="text-3xl font-semibold mb-4"
          style={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            color: "#317eac",
          }}
        >
          GOALS
        </h2>
        <div className="flex space-x-5">
          {cardData.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              iconSrc={card.iconSrc}
            />
          ))}
        </div>
      </div>
      <div className="flex min-h-screen items-center justify-center flex-col">
        <h2
          className="text-3xl font-semibold mb-4"
          style={{
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            color: "#317eac",
          }}
        >
          UPCOMING EVENTS
        </h2>
        <div className="flex space-x-5">
          {upcomingEventsData.map((upcomingEvent) => (
            <UpcomingEventsCard
              key={upcomingEvent.id}
              title={upcomingEvent.title}
              img={upcomingEvent.img}
              date={upcomingEvent.date}
              content={upcomingEvent.content}
              guest={upcomingEvent.guest}
              mode={upcomingEvent.mode}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardContainer;
