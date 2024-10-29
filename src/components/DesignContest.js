import {
  Clock,
  User,
  MessageSquare,
  Calendar,
  Lock,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";


const cardDetails = [
  {
    title: "Hold It with PM Jen",
    type: "Branding & Identity / Logo",
    postedDate: "Posted 6 days ago",
    description: "This is an Invitation Only Contest and is only open to those Creatives who have achieved a Tier A status.",
    prize: "$225",
    username: "@jen",
    entries: 122,
    timeLeft: "4d, 9h"
  },
  {
    title: "Modern Logo for Tech Startup",
    type: "Logo Design",
    postedDate: "Posted 2 days ago",
    description: "Looking for a minimalist, modern logo that captures our innovative spirit in the AI space.",
    prize: "$350",
    username: "@techvision",
    entries: 89,
    timeLeft: "5d, 12h"
  },
  {
    title: "Eco-Friendly Brand Identity",
    type: "Branding & Identity",
    postedDate: "Posted 4 days ago",
    description: "Sustainable product company seeking nature-inspired brand identity. Green focus essential.",
    prize: "$500",
    username: "@greenlife",
    entries: 167,
    timeLeft: "3d, 6h"
  },
  {
    title: "Gaming Channel Logo",
    type: "Logo / Gaming",
    postedDate: "Posted 1 day ago",
    description: "Twitch streamer needs eye-catching logo. Must be bold and dynamic.",
    prize: "$275",
    username: "@gamerpro",
    entries: 45,
    timeLeft: "6d, 18h"
  },
  {
    title: "Luxury Spa Rebrand",
    type: "Branding & Identity",
    postedDate: "Posted 3 days ago",
    description: "High-end spa requires sophisticated new brand identity. Elegant and serene aesthetic.",
    prize: "$450",
    username: "@spaheaven",
    entries: 134,
    timeLeft: "4d, 3h"
  },
  {
    title: "Food Truck Logo Design",
    type: "Logo / Food",
    postedDate: "Posted 5 days ago",
    description: "Mexican fusion food truck needs playful, memorable logo. Must pop on social media.",
    prize: "$300",
    username: "@foodiefusion",
    entries: 98,
    timeLeft: "2d, 15h"
  },
];

export default function DesignContests() {
  return (
    <div className="bg-[#FFFF] px-16 py-25 font-product-sans">
      <div className="pt-[100px] pb-[100px]">
        <h1 className="text-4xl font-bold mb-[58px] text-center text-[#212529] font-product-sans">8+ Active Logo Design Contests</h1>
        <div className="grid grid-cols-2 gap-4 max-w-6xl w-full mx-auto mb-8" style={{ gridAutoFlow: 'row' }}>
          {cardDetails.map((card, index) => (
            <Card key={index} className="bg-white text-black border border-gray-200 p-6 overflow-hidden relative font-product-sans">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6855] opacity-10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#FF6855] opacity-10 rounded-full -mr-16 -mb-16"></div>
              <h3 className="font-bold text-xl mb-2 relative z-10">{card.title}</h3>
              <Badge variant="secondary" className="mb-4 relative z-10">
                {card.type}
              </Badge>
              <div className="flex justify-between items-center mb-4 relative z-10">
                <div className="text-[25px] font-bold flex items-center font-product-sans">
                  <DollarSign className="mr-.5 h-7 w-7" />
                  {card.prize.replace('$', '')}
                </div>
                <Badge variant="outline" className="border-black text-black">
                  <Clock className="mr-2 h-4 w-4" />
                  {card.timeLeft} left
                </Badge>
              </div>
              <p className="text-sm mb-4 relative z-10">{card.description}</p>
              <div className="grid grid-cols-2 gap-2 text-sm relative z-10">
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  {card.username}
                </div>
                <div className="flex items-center">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  {card.entries} Entries
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  {card.postedDate}
                </div>
                <div className="flex items-center">
                  <Lock className="mr-2 h-4 w-4" />
                  NDA Protected
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex justify-center w-full">
          <Button 
            className="bg-[#FF6855] hover:bg-[#FF6855]/90 text-white font-product-sans text-lg px-6 py-3 h-auto"
            onClick={() => window.location.href = 'https://www.atom.com/start-contest'}
          >
            Start Your Contest
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
