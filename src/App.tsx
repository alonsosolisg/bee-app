import Header from "./components/header";
import Message from "./components/message";
import { TemperatureChart } from "./components/temperature-chart";
import { Card } from "./components/ui/card";
import { WindspeedChart } from "./components/windspeed-chart";
import { BeeChart } from "./components/bee-chart";
import { WeightChart } from "./components/weight-chart";
function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="px-[20px] sm:px-[50px] lg:px-[150px] flex flex-col gap-4 py-[20px]">
        <Message />
        <Card>
          <img
            src="https://motor.elpais.com/wp-content/uploads/2022/01/google-maps-22.jpg"
            alt="map"
            className="w-full object-cover h-[300px] rounded-lg"
          />
        </Card>
        <div className="w-full flex gap-4">
          <TemperatureChart />
          <WindspeedChart />
        </div>
        <div className="w-full flex gap-4 pb-4">
          <BeeChart />
          <WeightChart />
        </div>
      </div>
    </div>
  );
}

export default App;
