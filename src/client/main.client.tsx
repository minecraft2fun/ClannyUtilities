import Roact, { Element } from "@rbxts/roact";
import { Players, StarterGui } from "@rbxts/services";
import { PlayerScene } from "./Scenes/PlayerScene";
import { TopBar } from "./Scenes/TopBar"
import { HomeScene } from "./Scenes/HomeScene";
StarterGui.SetCoreGuiEnabled(Enum.CoreGuiType.All, false)

const playerScene = <PlayerScene />
const homeScene = <HomeScene />
const topBar = <TopBar />

const Primary = <screengui Key={"ClannyUtilities"}>
    <frame BackgroundColor3={Color3.fromRGB(26, 27, 30)} ZIndex={-1} Size={UDim2.fromScale(.7, .7)} Position={UDim2.fromScale(.5, .5)} AnchorPoint={new Vector2(.5, .5)}>
        {topBar}
        <frame Key={"TopBarBacking"} ZIndex={0} BackgroundColor3={Color3.fromRGB(37, 38, 43)} Size={UDim2.fromScale(1, .1 - .03)} Position={UDim2.fromScale(0, .05)} BorderSizePixel={0} />
        <uicorner CornerRadius={new UDim(.04, 0)} />
        {playerScene}
        {homeScene}
    </frame>
</screengui>

let handle = Roact.mount(Primary, Players.LocalPlayer.PlayerGui, "ClannyUtilities")
