import React from "react";
import TypedLine from "../../widgets/TypedLine";
import Mssg from "../../widgets/Mssg";
import Buttons from "../../widgets/Buttons";
import SubTitle from "../../widgets/SubTitle";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="homeContent flex flex-col ">
      <div className="homeContent-first flex justify-between  ">
        <div className=" mt">
          <Mssg cls="homeTitle text-indigo-500" mssg="Be The Best," />
          <Mssg cls="homeTitle" mssg="Coder with Right" />
          <Mssg cls="homeTitle" mssg="DSA Doc's" />
          <p className="typedline flex">
            &lt;&gt;{<TypedLine></TypedLine>}&lt;/&gt;
          </p>
          <div className="flex">
            <Link to="/study">
              <Buttons txt="Start DSA" cls="hometopbtn"></Buttons>
            </Link>
            <Link to="/course">
              <Buttons txt="Choose a Course" cls="hometopbtn"></Buttons>
            </Link>
          </div>
        </div>
        <div className="homeImage"></div>
      </div>
      <div className="homeContent-second flex  justify-between ">
        <div>
          {" "}
          <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/2ZLl8GAk1X4?si=-M5Ee5RuUEBBky1-"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="home2txt">
          <Mssg
            cls="homeTitle text-indigo-500"
            mssg=" Tutorial with animated Video's "
          />
          <SubTitle txt="Amazing free content on youtube!" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            atque veniam molestiae voluptatibus aut molestias.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            consectetur a maxime totam ipsum tenetur numquam odit delectus omnis
            velit!
          </p>
        </div>
      </div>
      <div className="homeContent-third flex flex-col justify-around  items-center">
        <span>
          <Mssg
            mssg="Why Learn From Us!"
            cls="homeTitle text-purple-800 under"
          ></Mssg>
        </span>
        <div className="flex justify-evenly w-full">
          <div className="flex flex-col justify-center items-center wt scale">
            <i className="fa-solid fa-globe text-purple-600 text-7xl"></i>
            <SubTitle txt="Best Content" />
            <h5 className="text-center">Collection Of Documents around the globe</h5>
          </div>
          <div className="flex flex-col justify-center items-center wt scale">
            <i className="fa-regular fa-face-smile text-purple-600 text-7xl"></i>
            <SubTitle txt="Easy to Digest" />
            <h5 className="text-center">Collection Of Documents around the globe</h5>
          </div>
          <div className="flex flex-col justify-center items-center wt scale">
            <i className="fa-solid fa-code text-purple-600 text-7xl"></i>
            <SubTitle txt="Code Centric" />
            <h5 className="text-center">Collection Of Documents around the globe</h5>
          </div>
          <div className="flex flex-col justify-center items-center wt scale">
            <i className="fa-solid fa-user text-purple-600 text-7xl"></i>
            <SubTitle txt="User Friendly" />
            <h5 className="text-center">Collection Of Documents around the globe</h5>
          </div>
        </div>
        
      </div>
      <div className="homeContent-forth">
        
      </div>
    </div>
  );
};

export default Home;
