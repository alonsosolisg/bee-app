import Header from "./components/header";
import Message from "./components/message";
import { TemperatureChart } from "./components/temperature-chart";
import { WindspeedChart } from "./components/windspeed-chart";
import { BeeChart } from "./components/bee-chart";
import { WeightChart } from "./components/weight-chart";
import { Map } from "./components/map";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./components/ui/select";
function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="px-[20px] sm:px-[50px] lg:px-[150px] flex flex-col pb-16 gap-4 py-[20px]">
        <Select>
          <SelectTrigger className="w-full lg:hidden">
            <SelectValue placeholder="Select an Apiary" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apiary1">Apiary 1</SelectItem>
            <SelectItem value="apiary2">Apiary 2</SelectItem>
            <SelectItem value="apiary3">Apiary 3</SelectItem>
          </SelectContent>
        </Select>
        <Message />
        <Map />
        <div className="w-full flex flex-col lg:flex-row gap-4">
          <TemperatureChart />
          <WindspeedChart />
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-4">
          <BeeChart />
          <WeightChart />
        </div>
      </div>
    </div>
  );
}

export default App;
