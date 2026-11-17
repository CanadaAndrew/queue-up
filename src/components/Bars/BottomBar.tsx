import { Home, Schedule, Friend, Group } from "../Icons";
import BottomBarButton, {type BottomBarButtonProps} from "../Buttons/BottomBarButton";

const DEFAULT_TABS: BottomBarButtonProps[] = [
  { title: "Home", icon: <Home />, navLocation: "/dashboard" },
  { title: "Schedule", icon: <Schedule/>, navLocation: "/schedule" },
  { title: "Friends", icon: <Friend/>, navLocation: "/friends" },
  { title: "Groups", icon: <Group/>, navLocation: "/groups" },
];

interface BottomBarProps{
    tabs?: BottomBarButtonProps[];
}

export default function BottomBar({tabs = DEFAULT_TABS} : BottomBarProps){
    return(
        <nav aria-label="Bottom Navigtion" className = "sticky bottom-0 grid w-full grid-flow-col auto-cols-fr gap-1.5 sm:gap-4 bg-background lg:hidden">
            {tabs.map((button:BottomBarButtonProps) => (
                <BottomBarButton key={button.navLocation} title={button.title} icon ={button.icon} navLocation={button.navLocation} onClick={button.onClick}/>
            ))}
        </nav>
    );
}