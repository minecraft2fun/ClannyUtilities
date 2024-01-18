import Roact from "@rbxts/roact";
import { TextInput } from "../RoactComponents/TextInput";
import { NavigationButton } from "../RoactComponents/NavigationButton";

export class TopBar extends Roact.Component<{}, {}>{
    public render(): Roact.Element | undefined {
        return <frame Key={"TopBar"} ZIndex={1} BackgroundColor3={Color3.fromRGB(37, 38, 43)} Size={UDim2.fromScale(1, .12)} Position={UDim2.fromScale(0, 0)} BorderSizePixel={0}>
            <uicorner CornerRadius={new UDim(.3, 0)} />
            <uilistlayout FillDirection={"Horizontal"} HorizontalAlignment={"Left"} VerticalAlignment={"Center"} HorizontalFlex={"SpaceAround"} SortOrder={"LayoutOrder"} Padding={new UDim(.01, 0)} />
            <imagelabel Key={"ClannyLogo"} LayoutOrder={1} Image={"rbxassetid://15688871384"} Size={UDim2.fromScale(.055, .8)} Position={UDim2.fromScale(.02, .5)} ZIndex={2} BackgroundTransparency={1} AnchorPoint={new Vector2(0, .5)} />
            <textlabel Text={"Clanny Systems"} LayoutOrder={2} TextXAlignment={"Left"} Font={Enum.Font.SourceSansBold} TextColor3={Color3.fromRGB(255, 255, 255)} TextScaled={true} Size={UDim2.fromScale(.3, .7)} Position={UDim2.fromScale(.2, .5)} AnchorPoint={new Vector2(0, .5)} BackgroundTransparency={1} />
            <frame Key={"Navigation"} Size={UDim2.fromScale(.2, .42)} LayoutOrder={3} BackgroundTransparency={1}>
                <NavigationButton name={"Home"} default={true} xSize={.4} position={UDim2.fromScale(.2, .5)} />
                <NavigationButton name={"Players"} xSize={.5} position={UDim2.fromScale(.7, .5)} />
            </frame>
            <TextInput Key={"PlayerSearch"} text={"Search Username"} image={"rbxassetid://15828619341"} size={UDim2.fromScale(.25, .5)} layoutOrder={4} imageSize={UDim2.fromScale(.15, .8)} />
            <TextInput Key={"ExpInput"} text={"EXP"} image={"rbxassetid://15828619457"} size={UDim2.fromScale(.09, .5)} layoutOrder={5} imageSize={UDim2.fromScale(.3, 1)} />
            <textbutton Key={"CloseButton"} Size={UDim2.fromScale(.03, .4)} LayoutOrder={6} Text={"X"} AutoButtonColor={false} BackgroundColor3={Color3.fromRGB(32, 44, 62)} TextColor3={Color3.fromRGB(193, 194, 197)} TextScaled={true}>
                <uiscale Key={"Scale"} />
                <uicorner CornerRadius={new UDim(.3, 0)} />
            </textbutton >
        </frame>
    }
}