import Roact, { Element, Tree } from "@rbxts/roact";
import { Players, StarterGui } from "@rbxts/services";
import { InputBox } from "./RoactComponents/InputBox";
import { PlayerTag } from "./RoactComponents/PlayerTab";
import { GeneratePlayerTab } from "./RoactComponents/GeneratePlayerTabs";
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

const PlayerElements = new Array<Element>();
Players.GetPlayers().forEach((player) => {
    //([<PlayerTag rank="Developer" player={player} exp={100} blacklisted={false} permLevel={"Developer"} />])

})
//PlayerElements.push(<PlayerTag rank="UR MOM" exp={-1} blacklisted={true} permLevel={"Guest"} />)
//PlayerElements.push(<PlayerTag rank="Commander" exp={999999999999999} blacklisted={false} permLevel={"HICOM"} />)

const PlayersView = <screengui>
    <frame BackgroundColor3={Color3.fromRGB(38, 38, 43)} ZIndex={-1} Size={UDim2.fromScale(.7, .7)} Position={UDim2.fromScale(.5, .5)} AnchorPoint={new Vector2(.5, .5)}>
        <frame Key={"TopBar"} ZIndex={1} BackgroundColor3={Color3.fromRGB(44, 46, 51)} Size={UDim2.fromScale(1, .15)} Position={UDim2.fromScale(0, 0)} BorderSizePixel={0}>
            <uicorner CornerRadius={new UDim(.3, 0)} />
            <uilistlayout FillDirection={"Horizontal"} HorizontalAlignment={"Left"} VerticalAlignment={"Center"} HorizontalFlex={"SpaceBetween"} SortOrder={"LayoutOrder"} Padding={new UDim(.01, 0)} />
            <imagelabel Key={"ClannyLogo"} LayoutOrder={1} Image={"rbxassetid://15688871384"} Size={UDim2.fromScale(.063, .8)} Position={UDim2.fromScale(.02, .5)} ZIndex={2} BackgroundTransparency={1} AnchorPoint={new Vector2(0, .5)} />
            <textlabel Text={"Clanny Systems"} LayoutOrder={2} TextColor3={Color3.fromRGB(255, 255, 255)} TextScaled={true} Size={UDim2.fromScale(.3, .7)} Position={UDim2.fromScale(.2, .5)} AnchorPoint={new Vector2(0, .5)} BackgroundTransparency={0} />
            <frame Key={"Navigation"} Size={UDim2.fromScale(.3, .5)} LayoutOrder={3}>
                <uilistlayout FillDirection={"Horizontal"} SortOrder={"LayoutOrder"} Padding={new UDim(.05, 0)} HorizontalAlignment={Enum.HorizontalAlignment.Right} />
                <uitextsizeconstraint MinTextSize={10} MaxTextSize={90} />
                <textbutton Text={"HOME"} Size={UDim2.fromScale(0, 1)} TextScaled={true} LayoutOrder={1} AutomaticSize={"X"}>
                    <uicorner CornerRadius={new UDim(.3, 0)} />
                </textbutton>
                <textbutton Text={"PLAYERS"} Size={UDim2.fromScale(0, 1)} TextScaled={true} LayoutOrder={1} AutomaticSize={"X"}>
                    <uicorner CornerRadius={new UDim(.3, 0)} />
                </textbutton>
            </frame>
            <InputBox Key={"PlayerSearch"} text={"SearchPlayer"} image={"rbxassetid://15828619341"} size={UDim2.fromScale(.15, .5)} layoutOrder={4} />
            <InputBox Key={"ExpInput"} text={"EXP"} image={"rbxassetid://15828619457"} size={UDim2.fromScale(.07, .5)} layoutOrder={5} />
            <imagebutton Key={"CloseButton"} Image={"rbxassetid://15828632743"} Size={UDim2.fromScale(.05, .5)} LayoutOrder={6}/* BackgroundColor3={Color3.fromRGB(44, 46, 51)}*/>
                <uicorner CornerRadius={new UDim(.3, 0)} />
            </imagebutton >
        </frame>
        <frame Key={"TopBarBacking"} ZIndex={0} BackgroundColor3={Color3.fromRGB(44, 46, 51)} Size={UDim2.fromScale(1, .1)} Position={UDim2.fromScale(0, .05)} BorderSizePixel={0} />
        <uicorner CornerRadius={new UDim(.04, 0)} />
        <GeneratePlayerTab />
    </frame>
</screengui>

let handle = Roact.mount(PlayersView, Players.LocalPlayer.PlayerGui, "PlayersView")
