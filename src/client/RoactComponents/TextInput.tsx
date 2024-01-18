import Roact from "@rbxts/roact";

interface props {
    text: string,
    image: string,
    color1?: Color3,
    color2?: Color3,
    size?: UDim2,
    position?: UDim2
    layoutOrder?: number
    imageSize?: UDim2
}
interface state { }

export class TextInput extends Roact.Component<props, state>{
    public render(): Roact.Element | undefined {
        return <frame Size={this.props.size || UDim2.fromScale(1, 1)} Position={this.props.position || UDim2.fromScale(0, 0)} LayoutOrder={this.props.layoutOrder || 0} BackgroundColor3={this.props.color1 || Color3.fromRGB(55, 58, 64)} BorderSizePixel={0}>
            <uicorner CornerRadius={new UDim(.2, 0)} />
            <uistroke Color={this.props.color2 || Color3.fromRGB(92, 95, 102)} Thickness={2} />
            <imagelabel Image={this.props.image} Size={this.props.imageSize || UDim2.fromScale(.2, 1)} BackgroundTransparency={1}
                Position={UDim2.fromScale(0, .5)} AnchorPoint={new Vector2(0, .5)} />
            <textbox PlaceholderText={this.props.text} PlaceholderColor3={Color3.fromRGB(193, 194, 197)} Text={""} TextScaled={true}
                Size={UDim2.fromScale(.8, 1)} Position={UDim2.fromScale(.2, 0)} BackgroundTransparency={1} TextColor3={Color3.fromRGB(255, 255, 255)}
                TextDirection={"LeftToRight"}
                TextXAlignment={"Left"}
            />
        </frame>
    }
}