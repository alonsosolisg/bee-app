import { Card, CardContent } from "./ui/card";
import { AlertTriangle, CircleX } from "lucide-react";

import { Button } from "./ui/button";

const Message = () => {
  return (
    <Card>
      <CardContent className="flex gap-4 py-4 justify-between items-center">
        <div className="lg:flex-row flex flex-col  gap-4 lg:items-center items-start">
          <AlertTriangle className="w-6 h-6 text-red-500" />
          <div className="flex flex-col lg:flex-row gap-2 lg:items-center">
            <p className="text-sm font-medium">
              There is a storm incoming in Apiary 1. Check the AI suggestions
              for more information.
            </p>
            <a href="#windspeed-chart">
              <Button variant="link" className="underline p-0 pb-0.5">
                View AI Suggestions
              </Button>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Message;
