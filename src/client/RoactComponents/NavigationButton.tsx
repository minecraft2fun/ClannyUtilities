import Roact, { Event } from "@rbxts/roact";
import { TweenService } from "@rbxts/services";

interface state {
    enabled: boolean,
    hovering: boolean
}

interface props {
    name: string,
    default?: boolean,
    xSize: number
    position: UDim2
}

export class NavigationButton extends Roact.Component<props, state>{
    constructor(props: props) {
        super(props)
        this.setState({
            enabled: props.default || false,
            hovering: false
        })
    }
    public render(): Roact.Element | undefined {
        return <textbutton Text={this.props.name} Size={UDim2.fromScale(this.props.xSize, 1)} AnchorPoint={new Vector2(.5, .5)}
            TextScaled={true} LayoutOrder={1}/* AutomaticSize={"X"}*/ BackgroundTransparency={this.state.enabled || this.state.hovering ? 0 : 1}
            BackgroundColor3={this.state.enabled ? Color3.fromRGB(32, 44, 62) : Color3.fromRGB(44, 46, 51)}
            TextColor3={this.state.enabled ? Color3.fromRGB(165, 216, 255) : Color3.fromRGB(193, 194, 197)} AutoButtonColor={false}
            Position={this.props.position}
            Event={{
                MouseButton1Up: (button) => {
                    //    this.props.onClick(this)
                    this.setState({
                        enabled: !this.state.enabled,
                        hovering: false

                    })
                    const scale = button!.FindFirstChild("Scale")
                    if (!scale || !scale.IsA("UIScale")) return
                    TweenService.Create(scale, new TweenInfo(.2, Enum.EasingStyle.Quart, Enum.EasingDirection.Out), { Scale: 1 }).Play();
                },
                MouseButton1Down: (button) => {
                    const scale = button!.FindFirstChild("Scale")
                    if (!scale || !scale.IsA("UIScale")) return
                    TweenService.Create(scale, new TweenInfo(.2, Enum.EasingStyle.Quart, Enum.EasingDirection.Out), { Scale: .9 }).Play();
                },
                MouseEnter: (button) => {
                    this.setState({
                        hovering: true
                    })
                },
                MouseLeave: (button) => {
                    this.setState({
                        hovering: false
                    })
                    const scale = button!.FindFirstChild("Scale")
                    if (!scale || !scale.IsA("UIScale")) return
                    TweenService.Create(scale, new TweenInfo(.2, Enum.EasingStyle.Quart, Enum.EasingDirection.Out), { Scale: 1 }).Play();
                }
            }}
        >
            <uicorner CornerRadius={new UDim(.25, 0)} />
            <uiscale Key={"Scale"} Scale={1} />
        </textbutton>
    }
}

//hover, normal text 193, 194, 197
//hover back 44, 46, 51
//pressed back 32, 44, 62
//pressed text 165, 216, 255