import { Check } from "lucide-react";
import { Button } from "./button";
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import { Badge } from "./badge";
import { motion } from "framer-motion";

interface PriceCardProps {
  title: string;
  price: number;
  features: string[];
  isPopular?: boolean;
}

export function PriceCard({ title, price, features, isPopular }: PriceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: isPopular ? 1.02 : 1.01 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className={`relative flex flex-col ${
        isPopular ? 'border-purple-500 shadow-lg shadow-purple-500/20' : ''
      } transition-all duration-300 hover:border-purple-500/50`}>
        {isPopular && (
          <div className="absolute -top-5 inset-x-0">
            <div className="px-3">
              <Badge
                className="w-full py-2.5 bg-purple-500 flex justify-center items-center text-sm font-medium rounded-t-none border-purple-500 hover:bg-purple-500 hover:text-white"
                variant="secondary"
              >
                Most Popular
              </Badge>
            </div>
          </div>
        )}
        <CardHeader className={isPopular ? "pt-8" : ""}>
          <motion.h3 
            className="text-2xl font-bold text-center"
            whileHover={{ scale: 1.05 }}
          >
            {title}
          </motion.h3>
        </CardHeader>
        <CardContent className="flex-1">
          <motion.div 
            className="text-center mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-4xl font-bold">${price}</span>
            <span className="text-muted-foreground">/one-time</span>
          </motion.div>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center"
              >
                <Check className="h-4 w-4 text-purple-500 mr-3 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            className={`w-full transition-all duration-300 ${
              isPopular ? 'bg-purple-500 hover:bg-purple-600 hover:scale-105' : 'hover:bg-purple-500'
            }`}
            variant={isPopular ? 'default' : 'outline'}
          >
            Upgrade Now
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}