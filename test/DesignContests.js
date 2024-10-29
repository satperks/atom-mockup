import {
  Clock,
  User,
  MessageSquare,
  Calendar,
  Lock,
  DollarSign,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const defaultCard = {
  title: "Hold It with PM Jen",
  type: "Branding & identity / Logo",
  postedDate: "Posted 6 days ago",
  description:
    "This is an Invitation Only Contest and is only open to those Creatives who have achieved a Tier A status.",
  prize: "$225",
  username: "@jen",
  entries: 122,
  timeLeft: "4d, 9h",
};

export default function Component({ cards = Array(6).fill(defaultCard) }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-[1920px] max-w-full mx-auto">
        <div className="px-16 pt-[100px] pb-[100px]">
          <h1 className="text-[40px] text-center text-[#212529] font-bold mb-[58px]">
            8+ Active Logo Design Contests
          </h1>
          <div className="grid grid-cols-2 grid-rows-3 gap-4 w-full">
            {cards.map((card, index) => (
              <Card
                key={index}
                className="bg-white text-black border border-gray-200 p-6 overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-black opacity-5 rounded-full -mr-16 -mt-16"></div>
                <h3 className="font-bold text-xl mb-2 relative z-10">
                  {card.title}
                </h3>
                <Badge
                  variant="secondary"
                  className="bg-gray-200 text-gray-800 mb-4 relative z-10"
                >
                  {card.type}
                </Badge>
                <div className="flex justify-between items-center mb-4 relative z-10">
                  <div className="text-4xl font-bold flex items-center">
                    <DollarSign className="mr-1 h-6 w-6" />
                    {card.prize.replace("$", "")}
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
          <div className="flex justify-center mt-8">
            <Button className="bg-[#FF6855] hover:bg-[#FF6855]/90 text-white">
              Start a contest
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
