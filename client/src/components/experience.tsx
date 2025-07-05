import { Gavel, TrendingUp, Construction } from "lucide-react";
import joeCouncilImg from "@assets/imgi_10_5_1751732730504.jpg";

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-campaign-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-campaign-blue mb-4">Public Service Experience</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Joe has served as a Middletown City Council Member from 2012–2015 and 2018–2021, twice as Vice Mayor. His leadership has helped drive more than $1 billion in investment and transformative local policy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover-transform">
            <div className="w-12 h-12 bg-campaign-blue rounded-lg flex items-center justify-center mb-4">
              <Gavel className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-campaign-blue mb-3">City Council Member</h3>
            <p className="text-gray-700">2012-2015 & 2018-2021</p>
            <p className="text-gray-700 mt-2">Twice elected as Vice Mayor, leading key initiatives for fiscal responsibility and community development.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg hover-transform">
            <div className="w-12 h-12 bg-campaign-blue rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-campaign-blue mb-3">Economic Development</h3>
            <p className="text-gray-700">$1+ Billion Investment</p>
            <p className="text-gray-700 mt-2">Led efforts that attracted over $1 billion in new investment to Middletown since 2011.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg hover-transform">
            <div className="w-12 h-12 bg-campaign-blue rounded-lg flex items-center justify-center mb-4">
              <Construction className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-campaign-blue mb-3">Infrastructure</h3>
            <p className="text-gray-700">$51 Million Investment</p>
            <p className="text-gray-700 mt-2">Championed road repaving plan covering 200 lane miles and one-third of city streets.</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <img
            src={joeCouncilImg}
            alt="Joe Mulligan in Council Chamber"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
