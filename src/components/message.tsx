import { Card, CardContent } from "./ui/card";
import { AlertTriangle, CircleX } from "lucide-react";

import { Button } from "./ui/button";

const Message = () => {
  return (
    <Card>
      <CardContent className="flex gap-4 py-4 justify-between items-center">
        <div className="flex gap-4 items-center">
          <AlertTriangle className="w-6 h-6 text-red-500" />
          <div className="flex gap-2 items-center">
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
        <p className="text-sm text-muted-foreground">
          <CircleX className="w-4 h-4 cursor-pointer hover:scale-105 transition-all" />
        </p>
      </CardContent>
    </Card>
  );
};

export default Message;
