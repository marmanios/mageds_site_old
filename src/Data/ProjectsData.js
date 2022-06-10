import DrawOfSter1 from "./Pictures/DrawingOfSterilization1.png";
import DrawOfSter2 from "./Pictures/DrawingOfSterilization2.png";
import CadOfSter from "./Pictures/CadOfSterilization.png";
import ExDevice from "./Pictures/ExtendedDevice.png";
import UnexDevice from "./Pictures/UnextendedDevice.png";
import DecisionMatrix from "./Pictures/Decision Matrix.png"
import P4Design1 from "./Pictures/p4Design1.png"
import P4Design2 from "./Pictures/p4Design2.png"
import P4CadModel from "./Pictures/p4CadModel.png"
import Layout from "./Pictures/RecyclingPlantLayout.png"
import TPAnalysis from "./Pictures/Throughput Analysis.png"
import RAMANSpectrum from "./Pictures/RAMANSpectrum.png"
import SortingResults from "./Pictures/SortingResults.png"


const EngProjects = [{
     name: "Design an Autonomous Sterilization Process",

     key: 0,
     popUpContent:
          <div>
               <h1>Project Name - Get a Grip</h1>
               <h3 >Engineer 1P13</h3>
               <p >
                    The lack of sufficient and reliable healthcare across Canada is an all too familiar problem that shortens the country’s life expectancy.
                    This deficiency comes from the small number of surgeons, mostly in rural and northern areas that restrict access to primed healthcare.
                    To achieve reliable healthcare, the utilization of remote surgery is a viable solution.
                    It would allow these areas with limited healthcare to have an increased number of surgeries because of the decreased amount of travel needed to be done.
                    An initial first step in this direction can be achieved by implementing automation of certain processes such as sterilization.
               </p>
               <p>Below are some diagrams showing the container designed. The Container is to be moved into the sterilzation tank using a Quanser Arm controlled using python</p>
               <img alt="Drawing Of Sterlization Container 1" src={DrawOfSter1}></img>
               <img alt="Drawing Of Sterlization Container 2" src={DrawOfSter2}></img>
               <img alt="Cad of Sterlization Container" src={CadOfSter}></img>
          </div>
}, {
     name: "Automated Bottle Transport for a Recycling Facility",

     key: 1,
     popUpContent:
          <div>
               <h1>Project Name - There Is a Recyclable Among Us</h1>
               <h3>Engineer 1P13</h3>
               <p>
                    Sustainability has become a vital conversation today, urging businesses and consumers to make environmentally friendly decisions. Today, countless innovative measures are implemented by computer programs to help decrease individuals’ carbon footprint.
                    For Design Project three, we needed to design a system to identify and sort recycling. This included both a computer program to identify and sort the recycling in Quanser Labs, as well as a hopper system to carry and deposit the recycling into different containers.
                    The rationale behind this project was to better sort and classify recycling and garbage to decrease the number of recyclables in landfills. Different materials such as paper, or plastics and whether the material is contaminated effect the recyclability of a material.
                    Thus, a system is required to classify, and sort different recyclables is required in order to properly recycle materials.
               </p>
               <p>Using various sensors, a roomba like device, and a hand designed container bottles can be dispensed to the appropriate bins automatically</p>
               <img alt="Unextended Device" src={UnexDevice}></img>
               <img alt="Extended Device" src={ExDevice}></img>

          </div>
}, {
     name: "Assisted Painting Device",

     key: 2,
     popUpContent:
          <div>
               <h1>Project Name - Power in Community</h1>
               <h3>Engineer 1P13</h3>
               <p>
                    In this project we were introduced a client and their problems.
                    Our client showed us their painting studio and told us about how they're unable to go through their tasks for long periods of time due to fatigue from their medical complications.
                    Thus, the team is tasked with creating a device that would allow the client to enjoy their hobbies for long periods of time without any worries. </p>
               <p>
                    Firstly we brainstormed primitive solutions and weighted them on a decision matrix.
                    The decision matrix helped us decide what we really wanted to focus on in our solution and which design should be further improved upon
               </p>
               <img alt="Decision Matrix" src={DecisionMatrix}></img>
               <p>After we continued improving our design of a cushioned pad with a joint. The idea was the client could prop their arm on the device to prevent fatigue from continuously raising their arm</p>
               <img alt="P4Design1" src={P4Design1}></img>
               <img alt="P4Design2" src={P4Design2}></img>
               <p>Finally We created a refined model in cad</p>
               <img alt="P4CadModel" src={P4CadModel}></img>

          </div>
}, {
     name: "McMaster Semi-Autonomous Waste Recovery Facility",
     key: 3,
     popUpContent:
          <div>
               <h1>McMaster Recycling Plant Project</h1>
               <h3>Engineer 2PX3</h3>
               <p>
                    The McMaster campus generates over 145 tones of plastic annually and has focused exclusively on adaptation strategies to reduce this number, such as implementing new water filling stations to promote reusable water bottle usage.
                    Moreover, about 40% of the waste generated at McMaster is non-recyclable, with a current waste diversion rate from landfills at 52% McMaster falls behind Ontario's 60% objective.
                    The introduction of a new recycling plant helps transition McMaster into mitigation-based strategies to help combat current waste management issues.
               </p>
               <p>Our team was tasked with two objectives. One, design a layout for a waste recovery facility and secondly, design software to sort containers based on INFRARED/RAMAN signals.</p>
               <img alt="Recycling Plant Layout" src={Layout}></img>
               <p>This layout features branching coveyor belts to prevent a signle process from bottlenecking and multiple bins to collect every type of recyclable.
                    Analyzing various machine specifications lead us to determine the maximum throughput in metres cubed the machine could operate in.
                    After completing a throughput analysis we determined that the plant can theoretically process over 24 times the amount required.
               </p>
               <img alt="Throughput Analysis of the recycling plant" src={TPAnalysis}></img>
               <p>The sorting software, designed in python, received signals from a singular RAMAN sensor and outputted a ENUM type of Plastic to be sorted by the machine
                    The difficulty arose from how similar the spectrums of various plastics were, particularly HDPE and LDPE as well as PET and Polyesters.
               </p>
               <img alt="RAMAN Spectrums of all 9 types of plastic" src={RAMANSpectrum}></img>
               <p>After designing a simple algorithm using basic if statements and mathematics, we were able to bring the sorting accuracy to around 85%</p>
               <img alt="Screenshots of IDE" src={SortingResults}></img>

          </div>
}];

const SoftwareProjects = [{
     name: "Twetter",
     url: "https://github.com/marmanios/Twetter",
     key: 0,
     popUpContent:
          <div>
               <h1>Design an Autonomous Sterilization Process4</h1>
               <h3>Engineer 1P13</h3>
               <p>
                    The lack of sufficient and reliable healthcare across Canada is an all too familiar problem that shortens the country’s life expectancy.
                    This deficiency comes from the small number of surgeons, mostly in rural and northern areas that restrict access to primed healthcare [1].
                    To achieve reliable healthcare, the utilization of remote surgery is a viable solution.
                    It would allow these areas with limited healthcare to have an increased number of surgeries because of the decreased amount of travel needed to be done.
                    An initial first step in this direction can be achieved by implementing automation of certain processes such as sterilization.
               </p>
          </div>
}, {
     name: "McMaster Unity Developers Bot",
     url: "https://github.com/marmanios/Unity-Developers-Bot",
     key: 1,
     popUpContent:
          <div>
               <h1>Design an Autonomous Sterilization Process4</h1>
               <h3>Team Tues-274</h3>
               <p>
                    The lack of sufficient and reliable healthcare across Canada is an all too familiar problem that shortens the country’s life expectancy.
                    This deficiency comes from the small number of surgeons, mostly in rural and northern areas that restrict access to primed healthcare [1].
                    To achieve reliable healthcare, the utilization of remote surgery is a viable solution.
                    It would allow these areas with limited healthcare to have an increased number of surgeries because of the decreased amount of travel needed to be done.
                    An initial first step in this direction can be achieved by implementing automation of certain processes such as sterilization.
               </p>
          </div>
}, {
     name: "PRISM Game",
     url: "https://sites.google.com/view/foogames",
     key: 2,
     popUpContent:
          <div>
               <h1>Design an Autonomous Sterilization Process4</h1>
               <h3>Team Tues-274</h3>
               <p>
                    The lack of sufficient and reliable healthcare across Canada is an all too familiar problem that shortens the country’s life expectancy.
                    This deficiency comes from the small number of surgeons, mostly in rural and northern areas that restrict access to primed healthcare [1].
                    To achieve reliable healthcare, the utilization of remote surgery is a viable solution.
                    It would allow these areas with limited healthcare to have an increased number of surgeries because of the decreased amount of travel needed to be done.
                    An initial first step in this direction can be achieved by implementing automation of certain processes such as sterilization.
               </p>
          </div>
},
{
     name: "YELP CAMP",
     key: 3,
     popUpContent:
          <div>
               Coming Soon
          </div>
}];

const ProjectsData = [EngProjects, SoftwareProjects]
export default ProjectsData