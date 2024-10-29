import { Check } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../components/ui/card"
import { Button } from "../components/ui/button"
export default function Component() {
  const plans = [
    {
      name: "Bronze",
      description: "Branding on a budget",
      price: "$299",
      features: ["Basic branding package", "Logo design", "Business card design"],
      color: "bg-amber-500",
    },
    {
      name: "Gold",
      description: "More privacy and Trademark support",
      price: "$449",
      features: ["Everything in Bronze", "Trademark search", "Brand guidelines"],
      color: "bg-yellow-400",
    },
    {
      name: "Platinum",
      description: "Work with top-level creatives, plus agency-style brand validation",
      price: "$749",
      features: ["Everything in Gold", "Premium design team", "Brand strategy session"],
      color: "bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300",
      highlight: true,
    },
    {
      name: "Managed",
      description: "A full agency experience without the agency price tag",
      price: "$1,499",
      features: ["Everything in Platinum", "Dedicated brand manager", "Ongoing brand support"],
      color: "bg-blue-500",
    },
  ]

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-[58px]">Contest Pricing</h2>
      <div className="w-full max-w-[1200px] mx-auto px-4 relative">
        <div className="flex justify-center space-x-6">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`flex flex-col w-72 relative z-10 ${
                plan.highlight 
                  ? "border-primary shadow-lg relative overflow-hidden platinum-card" 
                  : ""
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-10 right-0 -mr-20 pr-24 pt-1 pb-1 pl-8 bg-[#FF6855] text-white font-semibold text-sm transform rotate-45 z-10 shadow-md">
                  Best Value
                </div>
              )}
              <CardHeader>
                <div className={`w-16 h-1 ${plan.color} mb-4 rounded`} />
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-sm">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold mb-4">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full border-black text-black hover:bg-black hover:text-white transition-colors"
                  onClick={() => window.location.href = 'https://www.atom.com/pricing'}
                >
                  Choose Plan
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <style jsx>{`
        .platinum-card {
          background: linear-gradient(145deg, #e6e6e6, #ffffff);
          box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
        }
      `}</style>
    </div>
  )
}