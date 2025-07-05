import { GraduationCap, Briefcase } from "lucide-react";
import joeBusinessImg from "@assets/imgi_14_DSC06398-2048x1365_1751732730505.jpg";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-campaign-blue mb-6">About Joe</h2>
            <p className="text-lg text-gray-700 mb-6">
              Joe Mulligan is a practicing attorney and experienced leader with a deep commitment to the Middletown community. With decades of public service, legal expertise, and community involvement, Joe brings the experience and dedication Middletown needs.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-campaign-blue mb-3">Education</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <GraduationCap className="text-campaign-yellow mt-1 mr-3 flex-shrink-0" size={20} />
                  <span>University of Dayton School of Law, JD, magna cum laude, Top 3%</span>
                </li>
                <li className="flex items-start">
                  <GraduationCap className="text-campaign-yellow mt-1 mr-3 flex-shrink-0" size={20} />
                  <span>University of Notre Dame, BBA, cum laude</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-campaign-blue mb-3">Professional Experience</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Briefcase className="text-campaign-yellow mt-1 mr-3 flex-shrink-0" size={20} />
                  <span>Singer & McCausland Co., LPA – Estate Planning, Probate, Elder Law</span>
                </li>
                <li className="flex items-start">
                  <Briefcase className="text-campaign-yellow mt-1 mr-3 flex-shrink-0" size={20} />
                  <span>Kaup Mulligan Law Group – Managing Attorney</span>
                </li>
                <li className="flex items-start">
                  <Briefcase className="text-campaign-yellow mt-1 mr-3 flex-shrink-0" size={20} />
                  <span>Former Media Sales Manager – Columbus, Pittsburgh, Dayton</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="relative">
            <img
              src={joeBusinessImg}
              alt="Joe Mulligan Professional Business Photo"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 bg-campaign-yellow p-4 rounded-lg shadow-lg">
              <div className="text-campaign-blue font-bold text-center">
                <div className="text-2xl">25+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
