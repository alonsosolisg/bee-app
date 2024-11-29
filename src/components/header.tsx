import { Bell, CircleUser } from "lucide-react";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "./ui/select";

const Header = () => (
  <div className="h-fit w-full z-10 sticky top-0 px-[50px] py-[15px] bg-white border-b border-[#E2E8F0]/80 justify-between items-center inline-flex">
    <div className="w-[140px] h-[30px] justify-start items-center gap-0.5 flex">
      <div className="text-right text-foreground text-xl font-gilroy font-semibold">
        Bee App
      </div>
    </div>
    <Select>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select an Apiary" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apiary1">Apiary 1</SelectItem>
        <SelectItem value="apiary2">Apiary 2</SelectItem>
        <SelectItem value="apiary3">Apiary 3</SelectItem>
      </SelectContent>
    </Select>
    <div className="w-[140px] h-5 justify-end items-center gap-3 flex">
      <div className="text-right text-[#333333] text-xl font-black cursor-pointer hover:scale-105 transition-all">
        <Bell />
      </div>
      <div className="text-right text-[#333333] text-xl font-black cursor-pointer hover:scale-105 transition-all">
        <CircleUser />
      </div>
    </div>
  </div>
);

export default Header;
