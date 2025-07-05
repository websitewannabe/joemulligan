import { GraduationCap, Briefcase } from "lucide-react";
import joeBusinessImg from "/assets/About_Joe_Mulligan.png";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-campaign-blue mb-6">
            Getting to Know Joe Mulligan
          </h2>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            A practicing attorney and experienced leader with a deep commitment to the Middletown community. 
            With decades of public service, legal expertise, and community involvement, Joe brings the experience and dedication Middletown needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div className="relative order-2 md:order-1">
            <img
              src={joeBusinessImg}
              alt="Joe Mulligan Professional Business Photo"
              className="w-full rounded-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-campaign-yellow p-6 rounded-xl shadow-xl transform rotate-3">
              <div className="text-campaign-blue font-bold text-center">
                <div className="text-3xl">25+</div>
                <div className="text-lg">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="space-y-8">
              <div className="bg-campaign-light p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-campaign-blue mb-6 flex items-center">
                  <GraduationCap className="text-campaign-yellow mr-4" size={32} />
                  Education Excellence
                </h3>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-campaign-yellow rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span><strong>University of Dayton School of Law</strong><br />JD, magna cum laude, Top 3% of class</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-3 h-3 bg-campaign-yellow rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span><strong>University of Notre Dame</strong><br />BBA, cum laude</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white border-l-4 border-campaign-yellow p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-campaign-blue mb-6 flex items-center">
                  <Briefcase className="text-campaign-yellow mr-4" size={32} />
                  Professional Experience
                </h3>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li>
                    <strong>Singer & McCausland Co., LPA</strong><br />
                    <span className="text-gray-600">Estate Planning, Probate, Elder Law</span>
                  </li>
                  <li>
                    <strong>Kaup Mulligan Law Group</strong><br />
                    <span className="text-gray-600">Managing Attorney for collections and real estate</span>
                  </li>
                  <li>
                    <strong>Media Sales Leadership</strong><br />
                    <span className="text-gray-600">11 years managing teams across Columbus, Pittsburgh, Dayton</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-campaign-blue text-white p-12 rounded-2xl">
          <h3 className="text-3xl font-bold mb-4">Why Joe's Experience Matters</h3>
          <p className="text-xl max-w-4xl mx-auto">
            Joe's unique combination of legal expertise, business leadership, and public service experience gives him the 
            skills to tackle Middletown's challenges and drive real results for our community.
          </p>
        </div>
      </div>
    </section>
  );
}
