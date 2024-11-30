import { Bell, CircleUser } from "lucide-react";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "./ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown";

const Header = () => (
  <div className="h-fit w-full z-50 sticky top-0 px-[50px] py-[15px] bg-white border-b border-[#E2E8F0]/80 justify-between items-center inline-flex">
    <div className="w-[140px] h-[30px] justify-start items-center gap-0.5 flex">
      <img
        className="text-right text-foreground text-xl font-gilroy font-semibold -mt-1"
        src="https://gratheon.com/img/logo_v7w.svg"
        alt="Bee App"
      />
    </div>
    <div className="hidden lg:block">
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
    </div>
    <div className="w-[140px] h-5 justify-end items-center gap-3 flex">
      <div className="relative">
        <DropdownMenu>
          <DropdownMenuTrigger className="text-right text-[#333333] cursor-pointer hover:scale-105 transition-all">
            <Bell className="h-6 w-6 -mb-1" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80">
            <DropdownMenuGroup>
              <DropdownMenuItem className="flex flex-col items-start gap-1">
                <span className="font-medium">Wind Alert</span>
                <span className="text-sm text-muted-foreground">
                  Wind speed is above normal in Apiary 1
                </span>
                <span className="text-xs text-muted-foreground">
                  2 minutes ago
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start gap-1">
                <span className="font-medium">Temperature Warning</span>
                <span className="text-sm text-muted-foreground">
                  Hive temperature above normal in Apiary 2
                </span>
                <span className="text-xs text-muted-foreground">
                  1 hour ago
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start gap-1">
                <span className="font-medium">Maintenance Due</span>
                <span className="text-sm text-muted-foreground">
                  Schedule maintenance for Apiary 3
                </span>
                <span className="text-xs text-muted-foreground">1 day ago</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="text-right text-[#333333] cursor-pointer hover:scale-105 transition-all">
        <CircleUser className="h-6 w-6" />
      </div>
    </div>
  </div>
);

export default Header;
