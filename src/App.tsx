import Header from "./components/header";
import Message from "./components/message";
import { TemperatureChart } from "./components/temperature-chart";
import { Card } from "./components/ui/card";
import { WindspeedChart } from "./components/windspeed-chart";
import { BeeChart } from "./components/bee-chart";
import { WeightChart } from "./components/weight-chart";
import { Map } from "./components/map";
function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="px-[20px] sm:px-[50px] lg:px-[150px] flex flex-col gap-4 py-[20px]">
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
