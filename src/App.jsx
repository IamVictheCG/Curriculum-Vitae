// import React, { useEffect } from 'react';
// import {Link} from 'react';
// import { Helmet } from 'react-helmet';'
// import "./index.css"
import { FontAwesomeIcon } from "./fontawesome.jsx";
import {
  faGlobe,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import personal_image from "./images/profile3.png";

function App() {
  return (
    <div className="armor w-full relative">
      <div
        id="intro_section"
        className="introduction h-fit bg-none border-0 border-solid border-random2"
      >
        <div className="first border-0 border-solid border-random4 relative h-full">
          <div id="white" className="white_ab bg-antiquewhite absolute left-0 block"></div>
          <div id="black" className="black_ab bg-grayishBlack absolute right-0 block"></div>
          <div>
            <img
              className="border-black bg-brightOrange border-8 rounded-full left-32 top-2 absolute"
              id="personalImage"
              src={personal_image}
              alt="profile_image"
            />
          </div>

          <div className="spname">
            <p id="name" className="name text-xl text-thickSkyBlue font-bold">
              Victor Okechukwu
            </p>
            <p className="position text-xl text-thickSkyBlue">
              Mechatronic Engineer/Web developer
            </p>
          </div>
        </div>
      </div>

      <div className="blocks border-0 border-solid border-random2" id="blocks">
        <div className="blackblock bg-grayishBlack relative text-sm">
          <main className="pb-1">
            <div
              className="education_section my-5 w-11/12"
              id="education_section"
            >
              <header className="education_heading bg-darkOrange text-right">
                <strong id="education_heading" className="mr-8">
                  EDUCATION
                </strong>
              </header>

              <div className="exp mt-5">
                <div className="year">
                  <div className="bullet"></div>
                  <div className="paragraph text-sm">
                    <p className="text-center">2006 - 2011</p>
                    <p className="text-center">NCEE</p>
                  </div>
                </div>

                <div className="detail text-start w-7/12 text-sm h-fit">
                  <p>Rhama Nusery and Primary School</p>
                </div>
              </div>
              <div className="exp">
                <div className="year">
                  <div className="bullet"></div>
                  <div className="paragraph text-sm">
                    <p className="text-center">2011 - 2012</p>
                    <p className="text-center">Secondary</p>
                  </div>
                </div>
                <div className="detail text-start w-7/12 text-sm h-fit">
                  <p>Capital Science Academy(CSA)</p>
                </div>
              </div>
              <div className="exp">
                <div className="year">
                  <div className="bullet"></div>
                  <div className="paragraph text-sm">
                    <p className="text-center">2012 - 2015</p>
                    <p className="text-center">Junior WAEC</p>
                  </div>
                </div>
                <div className="detail text-start w-7/12 text-sm h-fit">
                  <p>Bishop James Yisa Memorial School(BJY)</p>
                </div>
              </div>
              <div className="exp">
                <div className="year">
                  <div className="bullet"></div>
                  <div className="paragraph text-sm">
                    <p className="text-center">2015 - 2018</p>
                    <p className="text-center">WAEC</p>
                  </div>
                </div>
                <div className="detail text-start w-7/12 text-sm h-fit">
                  <p>Bishop James Yisa Memorial School(BJY)</p>
                </div>
              </div>
              <div className="exp">
                <div className="year">
                  <div className="bullet"></div>
                  <div className="paragraph text-sm">
                    <p className="text-center">2018 - 2023</p>
                    <p className="text-center">B.Eng</p>
                  </div>
                </div>
                <div className="detail text-start w-7/12 text-sm h-fit">
                  <p>Bells University of Technology</p>
                </div>
              </div>
            </div>

            <div
              className="experience_section my-5 w-11/12"
              id="experience_section"
            >
              <header
                className="header  bg-darkOrange text-right"
                id="experience_heading"
              >
                <strong className="mr-8">EXPERIENCE</strong>
              </header>

              <table className="table mt-4">
                <tbody>
                  <tr className="table_row">
                    <th className="experience_table_heading font-bold">
                      Company
                    </th>
                    <th className="experience_table_heading font-bold w-20">
                      Time
                    </th>
                    <th className="experience_table_heading font-bold">
                      {" "}
                      Description
                    </th>
                  </tr>

                  <tr className="table_row">
                    <td className="experience_table_data text-xs">
                      SevenUP Bottling Company(SBC), Nigeria
                    </td>
                    <td className="experience_table_data text-xs">
                      2021 - 2022
                    </td>
                    <td className="experience_table_data text-xs">
                      Internship: I learnt the entire process of filling a RGB and PET, and the working principles of various machines such as; the Packer, the Bottle Labeller, Shrink Wrapper machine. As an operator, I was mostly stationed at the Bottle Filler Machine and EBI(Empty Bottle Inspection) Machine on RGB(Returnable Glass Bottle) line.
                    </td>
                  </tr>
                  <tr className="table_row">
                    <td className="experience_table_data text-xs">
                      Industrial Training Fund(ITF)
                    </td>
                    <td className="experience_table_data text-xs">
                      2022 - 2023
                    </td>
                    <td className="experience_table_data text-xs">
                      Internship: Learnt the basic principles and how to operate a pneumatic machine and I also learnt how to
                      operate and code the Mitsubishi PLC.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>

        <div className="whiteblock text-thickSkyBlue bg-antiquewhite">
          <div id="projects_section" className="projects_section mt-0 pt-3">
            <header
              id="projects_title"
              className="py-2 px-8 border-darkOrange border-2 w-56 text-center m-auto"
            >
              <strong className="text-thickSkyBlue">PROJECTS</strong>
            </header>

            <ul
              id="projects_list"
              className="text-black px-2 text-center m-auto mt-3 w-56"
            >
              <li className="bg-grayishBlack">
                <a target="_blank" href="https://tribute-page-victorcg.netlify.app/">
                  Tribute Page
                </a>
              </li>
              <li className="bg-grayishBlack">
                <a target="_blank" href="https://html-canva-victorcg.netlify.app/">
                  HTML canva
                </a>
              </li>
              <li className="bg-grayishBlack">
                <a target="_blank" href="https://drumkit-victorcg.netlify.app/">Drum Kit</a>
              </li>
              <li className="bg-grayishBlack">
                <a target="_blank" href="https://what-says-the-time-victorcg.netlify.app/">
                  What says the time
                </a>
              </li>
              <li className="bg-grayishBlack">
                <a target="_blank" href="https://grocery-store-victorcg.netlify.app/">
                  Grocery Store
                </a>
              </li>
              <li className="bg-grayishBlack">
                <a target="_blank" href="https://photogallery-victorcg.netlify.app/">
                  Photo Gallery
                </a>
              </li>
              <li className="bg-grayishBlack">
                <a target="_blank" href="https://photogallery-victorcg.netlify.app/">
                  Photo Gallery
                </a>
              </li>
            </ul>
          </div>

          <div className="contactme mt-10">
            <header className="py-2 px-8 border-darkOrange border-2 w-fit text-center m-auto">
              <strong className="text-thickSkyBlue">CONTACT</strong>
            </header>

            <div className="addressblock w-52 flex m-auto mt-5 justify-between">
              <div className="icon  text-2xl text-brightOrange  flex flex-col justify-center">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div className="address text-sm">
                <p className="header">ADDRESS</p>
                <p className="info">
                  Abuja state, Nigeria.
                </p>
              </div>
            </div>

            <div
              className="addressblock w-52 flex m-auto mt-5 justify-between "
              id="web"
            >
              <div className="icon text-xl text-brightOrange  flex flex-col justify-center">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <div className="address text-sm">
                <p className="header">WEB</p>
                <p className="info" id="email">
                  vicoke360@gmail.com
                </p>
              </div>
            </div>

            <div className="addressblock w-52 flex m-auto mt-5 justify-between ">
              <div className="icon text-2xl text-brightOrange  flex flex-col justify-center">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="address text-sm">
                <p className="header">PHONE</p>
                {/* <p className="info">08083140554</p> */}
                <p className="info">08036276872</p>
              </div>
            </div>

            {/* <h2><a target="_blank" href={contact}>Leave a maessage</a></h2> */}
          </div>

          <div className="skills mt-10 border-0 border-random1 border-solid w-80 m-auto">
            <header className="py-2 px-8 border-darkOrange border-2 w-fit text-center m-auto">
              <strong className="text-thickSkyBlue">PRO SKILLS</strong>
            </header>
            <div className="skillset">
              <p className="header text-center">HTML</p>
              <div className="outer border-2 border-brightOrange w-8/12 m-auto">
                <div
                  className="inner h-2 w-12/12 bg-brightOrange"
                  id="html"
                ></div>
              </div>
            </div>

            <div className="skillset">
              <p className="header text-center">CSS</p>
              <div className="outer border-2 border-brightOrange w-8/12 m-auto">
                <div
                  className="inner h-2 w-11/12 bg-brightOrange"
                  id="css"
                ></div>
              </div>
            </div>

            <div className="skillset">
              <div className="skill">
                <p className="header text-center">JAVASCRIPT</p>
                <div className="outer border-2 border-brightOrange w-8/12 m-auto">
                  <div
                    className="inner h-2 w-10/12 bg-brightOrange"
                    id="js"
                  ></div>
                </div>
              </div>
            </div>

            <div className="skillset">
              <div className="skill">
                <p className="header text-center">REACT</p>
                <div className="outer border-2 border-brightOrange w-8/12 m-auto">
                  <div
                    className="inner h-2 w-9/12 bg-brightOrange"
                    id="react"
                  ></div>
                </div>
              </div>
            </div>
            <div className="skillset">
              <div className="skill">
                <p className="header text-center">PLC</p>
                <div className="outer border-2 border-brightOrange w-8/12 m-auto">
                  <div
                    className="inner h-2 w-10/12 bg-brightOrange"
                    id="react"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="freespace h-16"></div>

          <div className="social">
            <hr className="m-auto border-2 border-solid border-hrColor w-7/12" />
            <div className="socialicon w-8/12 m-auto flex justify-around">
              <a target="_blank" href="https://instagram.com/the__cg143">
                <FontAwesomeIcon
                  className="text-3xl py-3"
                  icon={faInstagram}
                  id="instagram"
                />
              </a>
              <a target="_blank" href="https://twitter.com/IamVICtheCG">
                <FontAwesomeIcon
                  className="text-3xl py-3"
                  icon={faTwitter}
                  id="twitter"
                />
              </a>
              <a target="_blank" href="https://github.com/IamVictheCG">
                <FontAwesomeIcon
                  className="text-3xl py-3"
                  icon={faGithub}
                  id="github"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <footer id='footer' className='hidden'>
        <p>VictorCG©2023</p>
      </footer> */}
    </div>
  );
}

export default App;
