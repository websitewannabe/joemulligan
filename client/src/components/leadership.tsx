import { Check, Award, Users } from "lucide-react";
import joeCommunityImg from "@assets/imgi_23_Liz_Kelly_Photos_007-2048x1539_1751732730505.jpg";

export default function Leadership() {
  const boardPositions = [
    "Hospice Care of Middletown – Board Member",
    "Middletown Rotary Club",
    "YMCA, Performing Arts, Whopla Boards",
    "Middletown Area Neediest Youth Board",
    "Abilities First Board of Trustees"
  ];

  return (
    <section id="leadership" className="section-padding bg-campaign-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-campaign-blue mb-4">Community Leadership</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            For decades, Joe has been a passionate advocate for Middletown—generously giving his time, talent, and resources to support local nonprofits and improve the lives of others.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-2xl font-bold text-campaign-blue mb-6">Board Positions & Leadership</h3>
            <div className="space-y-4">
              {boardPositions.map((position, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-8 h-8 bg-campaign-yellow rounded-full flex items-center justify-center mr-4">
                    <Check className="text-campaign-blue" size={16} />
                  </div>
                  <span className="text-gray-700">{position}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <img
              src={joeCommunityImg}
              alt="Joe Mulligan Community Engagement"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-campaign-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-campaign-blue" size={32} />
              </div>
              <h4 className="text-xl font-bold text-campaign-blue mb-2">Volunteer of the Year</h4>
              <p className="text-gray-700">YMCA, Middletown Foundation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-campaign-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-campaign-blue" size={32} />
              </div>
              <h4 className="text-xl font-bold text-campaign-blue mb-2">Community Service</h4>
              <p className="text-gray-700">Decades of dedicated service to Middletown organizations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
