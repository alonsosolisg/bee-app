import { Card, CardContent } from "./ui/card";
import { AlertTriangle, CircleX } from "lucide-react";

const Message = () => {
  return (
    <Card>
      <CardContent className="flex gap-4 py-4 justify-between items-center">
        <div className="flex gap-4 items-center">
          <AlertTriangle className="w-6 h-6 text-red-500" />
          <p className="text-sm font-medium">
            There has been an emergency alert in ... Your hive can be
            potentially impacted.
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          <CircleX className="w-4 h-4 cursor-pointer hover:scale-105 transition-all" />
        </p>
      </CardContent>
    </Card>
  );
};

export default Message;
