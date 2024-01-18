import Roact from "@rbxts/roact";
import { TweenService } from "@rbxts/services";

interface state {
    activated: Boolean
    visible: Boolean
}

interface props {
    text: string
    clickedTween?: boolean
    color: Color3
    position?: UDim2
    size?: UDim2
    visible?: boolean
    layoutOrder?: number
    //onClick: (SetVisibility: (value: Boolean) => void) => void
    onClick: (button: Button) => void,
    onLoad?: (button: Button) => void
}

export class Button extends Roact.Component<props, state> {
    constructor(a: props) {
        super(a)
        this.setState({
            activated: false,
            visible: a.visible !== undefined ? a.visible : true
        })
    }
    public render() {
        if (this.props.onLoad) { this.props.onLoad(this) }
        return this.state.visible && <textbutton Text={this.props.text} TextScaled={true} Font={Enum.Font.SourceSans} Size={this.props.size || UDim2.fromScale(.8, 1)}
            Position={this.props.position || UDim2.fromScale(.2, 0)} TextColor3={Color3.fromRGB(255, 255, 255)} BackgroundColor3={this.props.color}
            AnchorPoint={new Vector2(.5, .5)} LayoutOrder={this.props.layoutOrder}
            Event={{
                MouseButton1Up: (button) => {
                    this.props.onClick(this)
                    const scale = button!.FindFirstChild("Scale")
                    if (!scale || !scale.IsA("UIScale")) return
                    TweenService.Create(scale, new TweenInfo(.2), { Scale: 1 }).Play();
                },
                MouseButton1Down: (button) => {
                    const scale = button!.FindFirstChild("Scale")
                    if (!scale || !scale.IsA("UIScale")) return
                    TweenService.Create(scale, new TweenInfo(.2), { Scale: .85 }).Play();
                },
                MouseLeave: (button) => {
                    const scale = button!.FindFirstChild("Scale")
                    if (!scale || !scale.IsA("UIScale")) return
                    TweenService.Create(scale, new TweenInfo(.2), { Scale: 1 }).Play();
                }
            }}>
            <uicorner CornerRadius={new UDim(.2, 0)} />
            <uiscale Key={"Scale"} />
        </textbutton>
    }
    public SetVisibility(value: Boolean) {
        this.setState(state => {
            return { activated: state.activated, visible: value }
        })
    }
}