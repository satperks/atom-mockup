import React from 'react';
import { Heart, Calendar, Trophy, User, ArrowRight } from 'lucide-react';
import { Button } from "../components/ui/button";
import profile1 from "../assets/images/owl_pp.jpg";
import profile2 from "../assets/images/pikachuorange.jpg";
import profile3 from "../assets/images/greendesigner.jpg";

const HeartFilled = ({ className }) => (
  <Heart className={className} fill="#FF6855" stroke="#FF6855" />
);

export default function RecentWinners() {
  const cardData = [
    {
      companyName: "Meetoro",
      website: "Meetoro.com",
      dateCreated: "5th, Oct 2024",
      likes: 13,
      description: "Logo for a Tech Startup",
      prize: "$200",
      winner: "@BCOLAK",
      image: profile2
    },
    {
      companyName: "Zephyr",
      website: "Zephyr.io",
      dateCreated: "12th, Nov 2024",
      likes: 21,
      description: "Logo for an Eco-friendly Brand",
      prize: "$300",
      winner: "@GreenDesigner",
      image: profile3
    },
    {
      companyName: "NovaTech",
      website: "NovaTech.com",
      dateCreated: "3rd, Dec 2024",
      likes: 17,
      description: "Logo for an AI Company",
      prize: "$250",
      winner: "@AICreative",
      image: profile1
    }
  ];

  return (
    <div className="py-[100px] px-16 bg-gray-50">
      <h1 className="text-4xl font-bold mb-[58px] text-center text-gray-900">Recent Design Contest Winners</h1>
      <div className="flex gap-6 justify-center">
        {cardData.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex-1 max-w-sm flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{card.companyName}</h2>
                <a href="#" className="text-gray-700 text-lg">
                  {card.website}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <img 
                  src={card.image} 
                  alt={`${card.winner} profile`}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-gray-600 text-sm">{card.winner}</span>
              </div>
            </div>
            <div className="mb-4 flex items-center justify-center bg-[#FFF1EE] rounded-lg p-2">
              <Trophy className="w-5 h-5 text-[#FF533C] mr-2" />
              <span className="text-lg font-semibold text-[#FF533C]">{card.prize}</span>
            </div>
            <p className="text-gray-600 mb-4 flex-grow">{card.description}</p>
            <div className="mt-4 flex justify-between items-end text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {card.dateCreated}
              </div>
              <div className="flex items-center">
                <HeartFilled className="w-4 h-4 mr-1" />
                <span>{card.likes} Likes</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
          <Button 
            className="bg-[#FF6855] hover:bg-[#FF6855]/90 text-white font-product-sans text-lg px-6 py-3 h-auto"
            onClick={() => window.location.href = 'https://www.atom.com/logo-design-examples'}
          >
            View Our Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
      </div>
    </div>
    
  );
}
