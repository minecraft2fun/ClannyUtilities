import Roact from "@rbxts/roact";
import { Players, StarterGui } from "@rbxts/services";
import * as RoactComponents from "./RoactComponents"
StarterGui.SetCoreGuiEnabled(Enum.CoreGuiType.All, false)
/*
const element = (
    <screengui>
        <frame Size={new UDim2(1, 0, 1, 0)}>
            <frame Key="Child" Size={new UDim2(1, 0, 1, 0)} />
        </frame>
    </screengui>

);
let handle = Roact.mount(element, Players.LocalPlayer.PlayerGui)
wait(3)
const newElement = (
    <screengui>
        <frame Size={new UDim2(1, 0, 1, 0)}>
            <frame Key="Child" Size={new UDim2(1, 0, 1, 0)} BackgroundColor3={new Color3(1, 1, 1)} />
        </frame>
    </screengui>

); 

Roact.update(handle, newElement)*/
/*
const A = <screengui>
    <RoactComponents.PermTag perm="hello" size={UDim2.fromScale(.3, 0.1)} />
</screengui>
let handle = Roact.mount(A, Players.LocalPlayer.PlayerGui)
*/
const PlayerElements = new Array<Roact.Element>();

Players.GetPlayers().forEach((player) => {
    PlayerElements.push(<RoactComponents.PlayerTag rank="Developer" player={player} exp={100} blacklisted={false} permLevel={"Developer"} />)
})
PlayerElements.push(<RoactComponents.PlayerTag rank="UR MOM" exp={-1} blacklisted={true} permLevel={"Guest"} />)
PlayerElements.push(<RoactComponents.PlayerTag rank="Commander" exp={999999999999999} blacklisted={false} permLevel={"HICOM"} />)


const PlayersView = <screengui>
    <frame BackgroundColor3={Color3.fromRGB(38, 38, 43)} Size={UDim2.fromScale(.8, .8)} Position={UDim2.fromScale(.5, .5)} AnchorPoint={new Vector2(.5, .5)}>
        <frame Key={"NavBar"} /*ZIndex={2}*/ BackgroundColor3={Color3.fromRGB(44, 46, 51)} Size={UDim2.fromScale(1, .15)} Position={UDim2.fromScale(0, 0)} BorderSizePixel={0}>
            <uicorner CornerRadius={new UDim(.3, 0)} />
            <imagelabel Key={"ClannyLogo"} Image={"rbxassetid://15688871384"} Size={UDim2.fromScale(.05, .9)} Position={UDim2.fromScale(.05, .1)} ZIndex={2} BackgroundTransparency={1} />
            <frame Key={"Background"} BackgroundColor3={Color3.fromRGB(44, 46, 51)} Size={UDim2.fromScale(1, .5)} Position={UDim2.fromScale(0, .5)} BorderSizePixel={0} />
        </frame>
        <uicorner CornerRadius={new UDim(.04, 0)} />
        <scrollingframe Key={"PlayerFrame"} Size={UDim2.fromScale(1, .8)} Position={UDim2.fromScale(0, .2)} ScrollBarThickness={0} AutomaticCanvasSize={"Y"} CanvasSize={UDim2.fromScale(1, 1)} BackgroundTransparency={1}>
            <uigridlayout CellPadding={UDim2.fromScale(0, .025)} CellSize={UDim2.fromScale(.97, .2)} FillDirectionMaxCells={1} HorizontalAlignment={Enum.HorizontalAlignment.Center} />
            {...PlayerElements}
        </scrollingframe>
    </frame>
</screengui>

let handle = Roact.mount(PlayersView, Players.LocalPlayer.PlayerGui, "PlayersView")