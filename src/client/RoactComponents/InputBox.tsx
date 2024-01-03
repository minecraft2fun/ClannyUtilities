import Roact from "@rbxts/roact";

interface props {
    text: string,
    image: string,
    color1?: Color3,
    color2?: Color3,
    size?: UDim2,
    position?: UDim2
    layoutOrder?: number
}
interface state { }

export class InputBox extends Roact.Component<props, state>{
    //Image sizes need fixed
    public render(): Roact.Element | undefined {
        return <frame Key={"PlayerSearch"} Size={this.props.size || UDim2.fromScale(1, 1)} Position={this.props.position || UDim2.fromScale(0, 0)} LayoutOrder={this.props.layoutOrder || 0} BackgroundColor3={this.props.color1 || Color3.fromRGB(55, 58, 64)} BorderSizePixel={0}>
            <uicorner CornerRadius={new UDim(.3, 0)} />
            <uistroke Color={this.props.color2 || Color3.fromRGB(92, 95, 102)} Thickness={2} />
            <imagelabel Image={this.props.image} Size={UDim2.fromScale(.2, 1)} BackgroundTransparency={1} />
            <textbox PlaceholderText={this.props.text} PlaceholderColor3={Color3.fromRGB(193, 194, 197)} Text={""} TextScaled={true} Size={UDim2.fromScale(.8, 1)} Position={UDim2.fromScale(.2, 0)} BackgroundTransparency={1} />
        </frame>
    }
}