import { Gavel, TrendingUp, Construction, Users, Building2, MapPin, Home } from "lucide-react";
import joeCouncilImg from "/assets/Joe_Mulligan_firefighter_cropped.jpg";
import joeConstructionImg from "/assets/imgi_28_Construction-2048x1689_1751732730505.jpg";

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-campaign-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-campaign-blue mb-6">Proven Results for Middletown</h2>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Joe has served as a Middletown City Council Member from 2012–2015 and 2018–2021, twice as Vice Mayor. 
            His leadership has helped drive more than <span className="text-campaign-blue font-bold">$1 billion in investment</span> and transformative local policy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <img
              src={joeCouncilImg}
              alt="Joe Mulligan in Council Chamber"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <img
              src={joeConstructionImg}
              alt="Joe Mulligan at Construction Site"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-xl hover-transform border-l-4 border-campaign-yellow">
            <div className="w-16 h-16 bg-campaign-blue rounded-xl flex items-center justify-center mb-6">
              <Gavel className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-campaign-blue mb-4">City Council Leadership</h3>
            <div className="text-campaign-yellow font-bold text-xl mb-2">2012-2015 & 2018-2021</div>
            <p className="text-gray-700 text-lg">Twice elected as Vice Mayor, leading key initiatives for fiscal responsibility and community development across multiple terms.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl hover-transform border-l-4 border-campaign-yellow">
            <div className="w-16 h-16 bg-campaign-blue rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-campaign-blue mb-4">Economic Growth</h3>
            <div className="text-campaign-yellow font-bold text-xl mb-2">$1+ Billion Investment</div>
            <p className="text-gray-700 text-lg">Led strategic efforts that attracted over $1 billion in new investment to Middletown, creating jobs and opportunities.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl hover-transform border-l-4 border-campaign-yellow">
            <div className="w-16 h-16 bg-campaign-blue rounded-xl flex items-center justify-center mb-6">
              <Construction className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-campaign-blue mb-4">Infrastructure Investment</h3>
            <div className="text-campaign-yellow font-bold text-xl mb-2">$51 Million Plan</div>
            <p className="text-gray-700 text-lg">Championed comprehensive road repaving covering 200 lane miles and one-third of all city streets.</p>
          </div>
        </div>

        <div className="bg-campaign-blue text-white p-12 rounded-2xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Home className="text-campaign-yellow mx-auto mb-4" size={48} />
              <div className="text-3xl font-bold mb-2">300+</div>
              <div className="text-xl">Blighted Homes Demolished</div>
              <p className="text-white/90 mt-2">Partnered with Butler County Land Bank to stabilize neighborhoods</p>
            </div>
            <div>
              <Building2 className="text-campaign-yellow mx-auto mb-4" size={48} />
              <div className="text-3xl font-bold mb-2">2x</div>
              <div className="text-xl">Vice Mayor</div>
              <p className="text-white/90 mt-2">Elected twice by fellow council members to leadership role</p>
            </div>
            <div>
              <img 
                src="/assets/noun-road-7933758-F9DC05.svg" 
                alt="Road icon" 
                className="w-12 h-12 mx-auto mb-4 filter brightness-0 invert"
                style={{ filter: 'brightness(0) saturate(100%) invert(77%) sepia(96%) saturate(370%) hue-rotate(4deg) brightness(106%) contrast(101%)' }}
              />
              <div className="text-3xl font-bold mb-2">200</div>
              <div className="text-xl">Lane Miles Improved</div>
              <p className="text-white/90 mt-2">Major infrastructure investment approved by taxpayers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
