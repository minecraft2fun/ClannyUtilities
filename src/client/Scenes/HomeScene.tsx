import Roact, { createRef } from "@rbxts/roact";
import { Players } from "@rbxts/services";
import { BindTextInputs } from "client/BindTextInputs";
import { Button } from "client/RoactComponents/Button";
import { CheckBox } from "client/RoactComponents/CheckBox";
import { PermTag } from "client/RoactComponents/PermTag";
import { TextInput } from "client/RoactComponents/TextInput";

export interface HomeScenePlayerData {
    player?: Player
}

interface props { }

interface state {
    elements: HomeScenePlayerData[]
}

export const ExpBind = new BindTextInputs()

const expInput = <TextInput Key={"ExpInput"} text={"EXP"} image={"rbxassetid://15828619457"} size={UDim2.fromScale(.9, .08)}
    layoutOrder={1000} imageSize={UDim2.fromScale(.15, 1)}
    onLoad={(input) => {
        input.intOnly()
        ExpBind.add(input)
    }}
/>

export class HomeScene extends Roact.Component<props, state>{
    constructor(props: props) {
        super(props)
        this.setState({
            elements: []
        })
        this.addPlayer({})
        this.addPlayer({ player: Players.LocalPlayer })
        this.addPlayer({})

    }
    private addPlayer(data: HomeScenePlayerData) {
        this.setState((original) => ({
            elements: [...original.elements, data]
        }))
    }
    private removePlayer(userId: number) {
        this.setState((original) => ({
            elements: original.elements.filter((element) => element.player && element.player.UserId !== userId)
        }))
    }
    public render(): Roact.Element | undefined {
        const current = this.state.elements.map((value) => (
            <CheckBox text={`@${value.player && value.player.Name || "TwentyTwoCharacters"}`} size={UDim2.fromScale(.9, .08)} layoutOrder={1} />
        ))
        return <frame Visible={true} Key={"HomeScene"} Size={UDim2.fromScale(1, .8)} Position={UDim2.fromScale(0, .15)} BackgroundTransparency={1}>
            <frame Key={"PlayerInfo"} Size={UDim2.fromScale(.25, 1)} BackgroundTransparency={1}>
                <uilistlayout HorizontalAlignment={Enum.HorizontalAlignment.Center} SortOrder={"LayoutOrder"} Padding={new UDim(.03, 0)} />
                <imagelabel Key={"PlayerLogo"} LayoutOrder={0}
                    Image={`${Players.GetUserThumbnailAsync(Players.LocalPlayer.UserId, Enum.ThumbnailType.HeadShot, Enum.ThumbnailSize.Size352x352)[0]}`}
                    Size={UDim2.fromScale(.8, .4)} Position={UDim2.fromScale(.1, 0)} AnchorPoint={new Vector2(0, 0)}
                    BackgroundTransparency={0}>
                    <uicorner CornerRadius={new UDim(.1, 0)} />
                </imagelabel>
                <textlabel Key={"Username"} LayoutOrder={1} Text={`${Players.LocalPlayer.DisplayName}\n(@${Players.LocalPlayer.Name})`}
                    Size={UDim2.fromScale(.8, .15)} TextScaled={true} TextColor3={Color3.fromRGB(255, 255, 255)} BackgroundTransparency={1}
                    TextXAlignment={"Left"} TextYAlignment={"Top"} Font={"SourceSansBold"}
                />
                <PermTag perm={"String"} size={UDim2.fromScale(.8, .07)} layoutOrder={3} />
                <PermTag perm={"Developer"} size={UDim2.fromScale(.8, .07)} layoutOrder={4} />
            </frame>
            <scrollingframe Key={"PlayerList"} Size={UDim2.fromScale(.25, 1)} Position={UDim2.fromScale(.25, 0)}
                AutomaticCanvasSize={"Y"} BackgroundTransparency={1} BackgroundColor3={Color3.fromRGB(255, 0, 0)}
                ClipsDescendants={true} CanvasSize={UDim2.fromScale(0, 0)}
                ScrollBarThickness={0}>
                <uilistlayout Padding={new UDim(.03)} SortOrder={"LayoutOrder"} HorizontalAlignment={"Center"} />
                <frame Key={"Buffer"} Size={UDim2.fromScale(1, .001)} BackgroundTransparency={1} />
                {current}
                {expInput}
                <frame Key={"ButtonHolder"} Size={UDim2.fromScale(1, .08)} LayoutOrder={1001} BackgroundTransparency={1} >
                    <uilistlayout SortOrder={"LayoutOrder"} HorizontalAlignment={"Center"} FillDirection={"Horizontal"} HorizontalFlex={"SpaceEvenly"} />
                    <Button
                        Key={"RemoveButton"}
                        text={"Remove XP"}
                        color={Color3.fromRGB(240, 62, 62)}
                        layoutOrder={1}
                        onClick={(button) => {
                        }}
                        onLoad={(button) => {
                        }}
                        size={UDim2.fromScale(.4, 1)}
                    />
                    <Button
                        Key={"AddButton"}
                        text={"Add XP"}
                        color={Color3.fromRGB(47, 158, 68)}
                        layoutOrder={2}
                        onClick={(button) => {
                        }}
                        onLoad={(button) => {
                        }}
                        size={UDim2.fromScale(.4, 1)}
                    />
                </frame>
            </scrollingframe>
        </frame >
    }
}