import { useEffect } from "react";
import ImgOne from "../../assets/images/personal-gallery/imgOne.jpeg";
import ImgTwo from "../../assets/images/personal-gallery/imgTwo.jpeg";
import ImgThree from "../../assets/images/personal-gallery/imgThree.jpeg";
import ImgFour from "../../assets/images/personal-gallery/imgFour.jpeg";
import Footer from "../Footer/Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Martin Scarponi | Photography";
  });

  return (
    <>
      <article className="flex flex-col min-h-screen sm:col-span-5 md:col-span-4 items-center">
        <h2 className="text-4xl text-center uppercase text-black mt-36 p-4">
          About
        </h2>
        <section className="flex flex-col items-center mt-10 text-2xl gap-5 text-slate-600 px-12 pb-6">
          <p className="text-base  sm:text-lg">
            I am a photographer with a wide range of skills. My business
            provides various photography services, such as headshots,
            fashion/lifestyle shoots, portraits, and event photography, to meet
            diverse needs. This flexibility enables the capture of special
            moments and the creation of compelling visual stories across
            different genres. What distinguishes my photography business is my
            distinctive style and approach. My ability to pay attention to
            details, my creativity, and my knack for connecting with clients
            allow me to capture images that authentically mirror their
            personalities and aspirations. Whether it's conveying a professional
            vibe in headshots, highlighting the beauty and grace of fashion and
            lifestyle, or freezing genuine emotions in portraits and events, I
            excel at revealing the essence of every subject.{" "}
          </p>
          {/* <p className="text-base  sm:text-lg ">
            Besides programming, another great love of mine is photography. I
            don't carry any heavy cameras; instead, I rely on my trusty iPhone
            to capture the essence of every new place I visit. These photographs
            become precious memories, allowing me to cherish and relive those
            experiences whenever I want. Sharing these moments with others is
            equally fulfilling, as it lets me offer a unique perspective of the
            world to those around me.
          </p>
          <p className="text-base  sm:text-lg ">
            My wanderlust has taken me to various places in Georgia, Turkey,
            Azerbaijan, Armenia, and even as far as Germany. Though I haven't
            traveled to many countries, whenever I do, I make it a point to
            explore every corner, even if it means focusing on just one city. I
            believe that every place has its own charm and hidden treasures
            waiting to be discovered.{" "}
          </p>
          <p className="text-base  sm:text-lg ">
            The farthest I've journeyed is to the enchanting landscapes of South
            America, particularly Argentina, a trip that left me awe-inspired
            and hungry for more adventures. Exploring its diverse cities and
            natural wonders was an experience like no other, and it fueled my
            passion for capturing moments through my lens.
          </p>
          <p className="text-base  sm:text-lg ">
            To express my passions and share my travel experiences, I've created
            a YouTube channel. It's not just a hobby; it's a way for me to
            connect with fellow travelers and enthusiasts, inspiring their
            curiosity and igniting their desire to explore.{" "}
          </p>
          <p className="text-base  sm:text-lg ">
            In my heart, I am both a programmer and a photographer, and these
            passions continue to drive me towards exciting opportunities and
            discoveries. Whether I'm immersed in code or capturing mesmerizing
            sceneries, I know that these pursuits will always be an essential
            part of who I am.
          </p> */}
        </section>
        <section className="grid grid-cols-2 sm:flex-row gap-1 p-2 ">
          <section>
            <img
              className="max-w-full w-56 h-52 object-cover	"
              src={ImgOne}
              alt="Gudauri"
            />
            <p className="font-bold">Iguazu Falls, Argentina</p>
          </section>
          <section>
            <img
              className="max-w-full w-56 h-52 object-cover	"
              src={ImgTwo}
              alt="Sighnaghi"
            />
            <p className="font-bold">Baku, Azerbaijan</p>
          </section>
          <section>
            <img
              className="max-w-full w-56 h-52 object-cover	"
              src={ImgFour}
              alt="Stepantsminda"
            />
            <p className="font-bold">Kazbegi, Georgia</p>
          </section>
          <section>
            <img
              className="max-w-full w-56 h-52 object-cover	"
              src={ImgThree}
              alt="Batumi"
            />
            <p className="font-bold">Istanbul, Turkey</p>
          </section>
        </section>
      </article>
      <Footer />
    </>
  );
};

export default About;
