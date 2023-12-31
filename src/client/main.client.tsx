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
    <frame BackgroundColor3={Color3.fromRGB(38, 38, 43)} ZIndex={-1} Size={UDim2.fromScale(.7, .7)} Position={UDim2.fromScale(.5, .5)} AnchorPoint={new Vector2(.5, .5)}>
        <frame Key={"TopBar"} ZIndex={1} BackgroundColor3={Color3.fromRGB(44, 46, 51)} Size={UDim2.fromScale(1, .15)} Position={UDim2.fromScale(0, 0)} BorderSizePixel={0}>
            <uicorner CornerRadius={new UDim(.3, 0)} />
            <uilistlayout FillDirection={"Horizontal"} HorizontalAlignment={"Left"} VerticalAlignment={"Center"} HorizontalFlex={"SpaceBetween"} SortOrder={"LayoutOrder"} Padding={new UDim(.01, 0)} />
            <imagelabel Key={"ClannyLogo"} LayoutOrder={1} Image={"rbxassetid://15688871384"} Size={UDim2.fromScale(.062, .8)} Position={UDim2.fromScale(.02, .5)} ZIndex={2} BackgroundTransparency={1} AnchorPoint={new Vector2(0, .5)} />
            <textlabel Text={"Clanny Systems"} LayoutOrder={2} TextColor3={Color3.fromRGB(255, 255, 255)} TextScaled={true} Size={UDim2.fromScale(.3, .7)} Position={UDim2.fromScale(.2, .5)} AnchorPoint={new Vector2(0, .5)} BackgroundTransparency={0} />
            <frame Key={"Navigation"} Size={UDim2.fromScale(.3, .5)} LayoutOrder={3}>
                <uilistlayout FillDirection={"Horizontal"} SortOrder={"LayoutOrder"} Padding={new UDim(.05, 0)} />
            </frame>
            <frame Key={"PlayerSearch"} Size={UDim2.fromScale(.3, .5)} LayoutOrder={4}>
            </frame>
            <frame Key={"ExpInput"} Size={UDim2.fromScale(.1, .5)} LayoutOrder={5}>
            </frame>
            <imagebutton />
        </frame>
        <frame Key={"TopBarBacking"} ZIndex={0} BackgroundColor3={Color3.fromRGB(44, 46, 51)} Size={UDim2.fromScale(1, .1)} Position={UDim2.fromScale(0, .05)} BorderSizePixel={0} />
        <uicorner CornerRadius={new UDim(.04, 0)} />
        <scrollingframe Key={"PlayerFrame"} Size={UDim2.fromScale(1, .8)} Position={UDim2.fromScale(0, .2)} ScrollBarThickness={0} AutomaticCanvasSize={"Y"} CanvasSize={UDim2.fromScale(1, 0)} BackgroundTransparency={1}>
            <uigridlayout CellPadding={UDim2.fromScale(0, .025)} CellSize={UDim2.fromScale(.97, .2)} FillDirectionMaxCells={1} HorizontalAlignment={Enum.HorizontalAlignment.Center} />
            {...PlayerElements}
        </scrollingframe>
    </frame>
</screengui>

let handle = Roact.mount(PlayersView, Players.LocalPlayer.PlayerGui, "PlayersView")