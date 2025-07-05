import { Calculator, Building, Home, Shield, Construction, Trees } from "lucide-react";

export default function Priorities() {
  const priorities = [
    {
      icon: Calculator,
      title: "Fiscal Responsibility",
      description: "Fiscally responsible budgeting and deficit control to ensure sustainable growth."
    },
    {
      icon: Building,
      title: "Economic Development",
      description: "Stimulating economic development and job creation for long-term prosperity."
    },
    {
      icon: Home,
      title: "Housing Stability",
      description: "Neighborhood revitalization and housing stability initiatives."
    },
    {
      icon: Shield,
      title: "Public Safety",
      description: "Investment in Fire and Police departments to keep our community safe."
    },
    {
      icon: Construction,
      title: "Infrastructure",
      description: "Roads repaving and infrastructure improvements ($51M plan)."
    },
    {
      icon: Trees,
      title: "Parks & Recreation",
      description: "Parks and recreation improvements for families and community enjoyment."
    }
  ];

  return (
    <section id="priorities" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-campaign-blue mb-4">Joe's Priorities</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Focused on practical solutions that make a real difference for Middletown families and businesses.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {priorities.map((priority, index) => (
            <div key={index} className="bg-campaign-light p-6 rounded-lg">
              <div className="w-12 h-12 bg-campaign-yellow rounded-lg flex items-center justify-center mb-4">
                <priority.icon className="text-campaign-blue" size={24} />
              </div>
              <h3 className="text-xl font-bold text-campaign-blue mb-3">{priority.title}</h3>
              <p className="text-gray-700">{priority.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
