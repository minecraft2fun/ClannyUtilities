import Roact from "@rbxts/roact";

interface props {
    text: string,
    checkColor?: Color3,
    color1?: Color3,
    color2?: Color3,
    size?: UDim2,
    position?: UDim2
    layoutOrder?: number
    checked?: boolean
}
interface state {
    Enabled: boolean
}

export class CheckBox extends Roact.Component<props, state>{
    constructor(props: props) {
        super(props);
        this.setState({
            Enabled: props.checked || false
        })
    }
    public render(): Roact.Element | undefined {
        return <frame Size={this.props.size || UDim2.fromScale(1, 1)} Position={this.props.position || UDim2.fromScale(0, 0)}
            LayoutOrder={this.props.layoutOrder || 0} BackgroundColor3={this.props.color1 || Color3.fromRGB(55, 58, 64)} BorderSizePixel={0}>
            <uicorner CornerRadius={new UDim(.2, 0)} />
            <uistroke Color={this.props.color2 || Color3.fromRGB(92, 95, 102)} Thickness={2} />
            <textlabel Text={this.props.text} TextScaled={true}
                Size={UDim2.fromScale(.8, 1)} Position={UDim2.fromScale(0, 0)} BackgroundTransparency={1} TextColor3={Color3.fromRGB(255, 255, 255)}
                TextXAlignment={"Left"}
            />
            <imagebutton Size={UDim2.fromScale(.09, .6)} Position={UDim2.fromScale(.85, .5)} BackgroundColor3={this.state.Enabled ? Color3.fromRGB(28, 126, 214) : Color3.fromRGB(44, 46, 51)}
                AnchorPoint={new Vector2(0, .5)} AutoButtonColor={false} Image={this.state.Enabled ? "rbxassetid://16011567812" : ""}
                Event={{
                    MouseButton1Up: (button) => {
                        this.setState({
                            Enabled: !this.state.Enabled
                        })
                    }
                }}
            >
                <uicorner CornerRadius={new UDim(.3, 0)} />
                <uistroke Color={this.props.color2 || Color3.fromRGB(92, 95, 102)} Thickness={2} />
            </imagebutton>
        </frame>
    }
}