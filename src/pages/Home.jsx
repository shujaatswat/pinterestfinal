import React from "react";

import Carousel from "../components/Carousel";
import CarouselImages from "../components/CarouselImages";
import { DownAngleIcon, SearchIcon } from "../assets/SvgIcons";
import Explore from "../common/Explore";
import HomeCard from "../common/HomeCard";
import SignUpForm from "../common/Form";
import Footer from "../layout/Footer";
import { useNavigate } from "react-router-dom";

const Home = ({ onClick }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" w-[80%] mx-auto h-[93vh]" id="#toTop">
        <Carousel />
      </div>
      <CarouselImages />
      {/* hero Section */}
      <section className="bg-yellow-200 h-screen  ">
        <div className="text-center flex justify-center items-center font-semibold text-base py-6 ">
          Here's how it works{}
          <DownAngleIcon className="text-black  h-[14px]" />
        </div>
        <div
          id="down"
          className="w-full h-full grid grid-cols-2  items-center text-center"
        >
          <div className="w-[537px] h-[611px] mx-auto  relative ">
            <div className="w-[200px] h-[200px] absolute top-40 left-0">
              <img src="/images/dinner/dinnerImg1.png" alt="" />
            </div>
            <div className="w-[160px] h-[180px] absolute top-0 right-0">
              <img src="/images/dinner/dinnerImg2.png" alt="" />
            </div>
            <div className="w-[160px] h-[180px] absolute bottom-20 right-0">
              <img src="/images/dinner/dinnerImg3.png" alt="" />
            </div>
            <div className="w-[300px] h-[335px] absolute top-20 left-36">
              <img src="/images/dinner/dinnerImg4.png" alt="" />
            </div>
            <div className="bg-white rounded-full w-[316px] h-[100px] absolute top-[231px] left-[103px] flex justify-center items-center">
              <div className="flex justify-center items-center text-2xl font-semibold">
                <SearchIcon />
                <span className="ml-2 text-red-900">easy chicken dinner</span>
              </div>
            </div>
          </div>
          <div>
            <Explore
              textColor="text-red-600"
              title={`Search for an idea `}
              description={`What do you want to try next? Think of something you're into—like “easy chicken dinner”—and see what you find.`}
              btnText="Explore"
              discStyle="max-w-[400px]"
            />
          </div>
        </div>
      </section>
      {/* collect your  favorites*/}
      <section className="bg-cyan-100 h-screen flex items-center">
        <div className="grid grid-cols-2  w-full ">
          <div className="grid-cols-1 ">
            <Explore
              textColor="text-teal-700"
              title="Save ideas you like "
              description="Collect your favorites so you can get back to them later."
              btnText="Explore"
            />
          </div>
          <div className="w-full h-full grid-cols-1 relative -mt-48">
            <div className="relative ">
              <HomeCard
                containerSize="w-[330px] relative"
                cardText="Fern future home vibes"
                TextSize="text-5xl left-10"
                imagePath="/images/favorite/future-home.png"
              />
              <div className="h-42 w-64  absolute left-8 z-10 bottom-1 grid grid-cols-3 gap-2">
                <img
                  src="/images/favorite/future-home1.png"
                  alt=""
                  onClick={onClick}
                />
                <img
                  src="/images/favorite/future-home2.png"
                  alt=""
                  onClick={onClick}
                />
                <img
                  src="/images/favorite/future-home3.png"
                  alt=""
                  onClick={onClick}
                />
              </div>
            </div>
            <HomeCard
              containerSize="w-[200px] absolute top-[380PX] left-28"
              cardText="Serve my drinks in style"
              TextSize="text-2xl font-medium w-[150px] left-10"
              imagePath="/images/favorite/serve-my-drinks.png"
            />
            <HomeCard
              containerSize="w-[200px] absolute top-0 right-[380px]"
              cardText="My Scandinavian bedroom"
              TextSize="text-2xl font-medium w-[80px]  left-10"
              imagePath="/images/favorite/scandinavian-bedroom.png"
            />
            <HomeCard
              containerSize="w-[150px] absolute top-56 right-[420px]"
              cardText="The deck of my dreams"
              TextSize="text-[16px] left-8"
              imagePath="/images/favorite/deck-of-dreams.png"
            />
            <HomeCard
              containerSize="w-[180px] absolute top-[430PX] right-[400px]"
              cardText="Our bathroom upgrade"
              TextSize="text-2xl left-8"
              imagePath="/images/favorite/bathroom-upgrade.png"
            />
          </div>
        </div>
      </section>
      {/*<<<<<<------ Discover Section ----------->>>>>> */}
      <section className="flex justify-between ">
        <div class="discoverBg h-screen w-full relative">
          <div className="w-[200px] h-[250px] absolute bottom-56 left-20 rounded-full ">
            <img
              src="/images/discover/discover2.png"
              alt=""
              className="rounded-2xl"
            />
            <img
              src="/images/discover/discover3.png"
              alt=""
              className="w-20 h-20 absolute -bottom-32 -left-10 "
            />
            <p className="text-white text-center text-md font-semibold">
              Scout the City
            </p>
            <p className="text-white text-center text-base font-sm">
              56.7k followers
            </p>
          </div>
        </div>
        <div className="h-screen w-full flex justify-center items-center bg-rose-100">
          <div>
            <Explore
              textColor="text-red-600"
              title="See it, make it, try it, do it "
              description="The best part of Pinterest is discovering new things and ideas from people around the world."
              btnText="Explore"
              className="w-[420px] leading-snug"
              discStyle="w-[420px]"
            />
          </div>
        </div>
      </section>
      {/*<<<<<<------ Halloween Section ----------->>>>>> */}
      <section className="bg-amber-100 h-screen flex items-center">
        <div className="grid grid-cols-2  w-full ">
          <Explore
            textColor="text-red-600"
            title="Dive into trends"
            description="Unleash your creativity this Halloween with a collection of spooktacular ideas."
            btnText="Explore"
            discStyle="w-[406px]"
          />
          <div className="w-full h-full grid-cols-1 relative -mt-48">
            <div className="relative ">
              <HomeCard
                containerSize="w-[330px] relative"
                cardText="Fern future home vibes"
                TextSize="text-5xl left-10"
                imagePath="/images/favorite/future-home.png"
              />
            </div>
            <HomeCard
              containerSize="w-[200px] absolute top-[380PX] left-28"
              cardText="Serve my drinks in style"
              TextSize="text-2xl font-medium w-[150px] left-10"
              imagePath="/images/favorite/serve-my-drinks.png"
            />
            <HomeCard
              containerSize="w-[200px] absolute top-0 right-[380px]"
              cardText="My Scandinavian bedroom"
              TextSize="text-2xl font-medium w-[80px]  left-10"
              imagePath="/images/favorite/scandinavian-bedroom.png"
            />
            <HomeCard
              containerSize="w-[150px] absolute top-56 right-[420px]"
              cardText="The deck of my dreams"
              TextSize="text-[16px] left-8"
              imagePath="/images/favorite/deck-of-dreams.png"
            />
            <HomeCard
              containerSize="w-[180px] absolute top-[430PX] right-[400px]"
              cardText="Our bathroom upgrade"
              TextSize="text-2xl left-8"
              imagePath="/images/favorite/bathroom-upgrade.png"
            />
          </div>
        </div>
      </section>

      {/*<<<<<<------ Contact Section ----------->>>>>> */}

      <section className="contactBg h-screen relative">
        <div className="grid grid-cols-2 items-center  h-full ">
          <div className="text-6xl  font-bold text-blue-700 w-[350px] leading-tight mx-auto">
            Sign up to get your ideas
          </div>
          <div className="w-full flex justify-center">
            <SignUpForm />
          </div>
        </div>
        <div
          className="rounded-full absolute top-4 left-1/2 transform  bg-black rotate-x-1/2 p-3  cursor-pointer"
          onClick={() => navigate("toTop")}
        >
          <DownAngleIcon className="text-white" />
        </div>
      </section>

      {/*<<<<<<------ footer Section ----------->>>>>> */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
