import React from 'react'

const upcomingEvents = (props) => {
   const { img, title, content } = props;
   const tr = (title) => {
      console.log(title);
   }
   return (
      <div class="timeline">
       <h1> Events By MSC</h1>
        <section class="timeline">
            <ul>
              <li>
                <div class="content">
                    <div class="timeline-content-info">
                        <span class="timeline-content-info-title">
                            <i class="fa fa-certificate" aria-hidden="true"></i>
                            Insider 2
                        </span>
                        <span class="timeline-content-info-date">
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                            23rd July,2023
                        </span>
                    </div>
                    <div class="timeline-content">
                        Episode 2: The second episode of the Insider Series was an inspiring session with the talented Ms. Bhawna, one of the MLH Fellowship Top 50 achievers. She shared her exceptional journey and insights, motivating our audience to excel in the dynamic realm of tech.
                    </div>
                    <div class="timeline-image">
                        <img src="../assets/insider2.jpeg" class="img"/>
                    </div>
                    <div class="content-skills">
                        <span>Bhawna Chauhan</span>
                        <span>Online</span>
                    </div>

                </div>
              </li>
              <li>
                <div class="content">
                    <div class="timeline-content-info">
                        <span class="timeline-content-info-title">
                            <i class="fa fa-certificate" aria-hidden="true"></i>
                            Insider 1
                        </span>
                        <span class="timeline-content-info-date">
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                            20th June,2023
                        </span>
                    </div>
                    <div class="timeline-image-left">
                        <img src="../assets/insider1.jpeg" class="img"/>
                    </div>
                    <div class="timeline-content">
                        Episode 1: In this captivating episode of our Insider Series, we delved into the world of the Flipkart GRiD Hackathon with the amazing Ms. Pooja Gera. She shared her remarkable journey and winning strategies to ace hackathons and her experience that led to triumph.
                    </div>
                    
                    <div class="content-skills-left">
                        <span>Pooja Gera</span>
                        <span>Online</span>
                    </div>

                </div>
              </li>
              <li>
                <div class="content">
                    <div class="timeline-content-info">
                        <span class="timeline-content-info-title">
                            <i class="fa fa-certificate" aria-hidden="true"></i>
                            BootCamp
                        </span>
                        <span class="timeline-content-info-date">
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                            5th June- 8th July
                        </span>
                    </div>
                    <div class="timeline-content">
                        MSC IGDTUW's cutting-edge Tech Summer Bootcamp with a unique blend of Mentorship in diverse domains! Delve into the realms of AI/ML, Web Development, App Development, AR/VR and Cybersecurity, guided by industry experts. Embrace innovation, gain practical skills, and ignite your tech journey in an immersive and dynamic learning environment. Unleash your potential and be future-ready at our exclusive summer program!
                    </div>
                    <div class="timeline-image">
                        <img src="../assets/bootcamp modal.jpg" class="img"/>

                    </div>
                    <div class="content-skills">
                        <span>Online</span>
                    </div>

                </div>
              </li>             
            </ul>
          </section>
      </div>
   )
}

export default upcomingEvents