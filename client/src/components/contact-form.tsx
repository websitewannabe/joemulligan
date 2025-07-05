import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, MapPin, Share2, Mail, Phone, MapPin as MapPinIcon, DollarSign } from "lucide-react";
import joeVolunteerImg from "/assets/imgi_18_IMG_1628-1536x2048_1751732730505.jpg";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "",
    wantYardSign: false,
    wantToVolunteer: false,
    wantToHostMeetGreet: false
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your interest. We'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        interest: "",
        wantYardSign: false,
        wantToVolunteer: false,
        wantToHostMeetGreet: false
      });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your name and email address.",
        variant: "destructive"
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof typeof formData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contact" className="section-padding bg-campaign-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Involved</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join our campaign and help make a difference in Middletown. Together, we can build a stronger, more prosperous community.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-campaign-blue">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your Full Name"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(555) 123-4567"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="interest" className="text-sm font-medium text-gray-700">I'd like to:</Label>
                  <Select value={formData.interest} onValueChange={(value) => handleInputChange("interest", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select how you'd like to help" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yard-sign">Request a yard sign</SelectItem>
                      <SelectItem value="volunteer">Volunteer for the campaign</SelectItem>
                      <SelectItem value="meet-greet">Host a meet & greet</SelectItem>
                      <SelectItem value="donate">Donate $</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Your message here..."
                    className="mt-1"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-campaign-yellow text-campaign-blue hover:bg-yellow-300 text-lg py-6"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="text-white space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Ways to Help</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-campaign-yellow rounded-lg flex items-center justify-center mr-4">
                    <Heart className="text-campaign-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Volunteer</h4>
                    <p className="text-white/90">Join our team and help spread the word</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-campaign-yellow rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="text-campaign-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Yard Signs</h4>
                    <p className="text-white/90">Display your support in your neighborhood</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-campaign-yellow rounded-lg flex items-center justify-center mr-4">
                    <Share2 className="text-campaign-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Spread the Word</h4>
                    <p className="text-white/90">Share with friends and family</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-campaign-yellow rounded-lg flex items-center justify-center mr-4">
                    <DollarSign className="text-campaign-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Donate</h4>
                    <p className="text-white/90">Support our campaign with a contribution</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Contact Information</h4>
              <div className="flex items-center">
                <Mail className="text-campaign-yellow mr-3" size={20} />
                <a href="mailto:joe@joemulligan.com" className="text-white/90 hover:text-campaign-yellow">
                  joe@joemulligan.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="text-campaign-yellow mr-3" size={20} />
                <a href="tel:+15134224638" className="text-white/90 hover:text-campaign-yellow">
                  (513) 422-4638
                </a>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="text-campaign-yellow mr-3" size={20} />
                <span className="text-white/90">1054 N University Blvd, Middletown, OH 45042</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
