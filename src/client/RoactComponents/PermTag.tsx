import Roact from "@rbxts/roact";

interface props {
    perm: string,
    color?: Color3
    size?: UDim2
    position?: UDim2
}
const PermImages: { [key: string]: string } = {
    Guest: "rbxassetid://15688489132",
    Normal: "rbxassetid://15688489132",
    Officer: "rbxassetid://15688488999",
    HICOM: "rbxassetid://15688489304",
    Owner: "rbxassetid://15688488902",
    Developer: "rbxassetid://15686447814"
}

export class PermTag extends Roact.Component<props> {
    public render(): Roact.Element | undefined {
        return <frame BackgroundColor3={this.props.color || Color3.fromRGB(81, 207, 102)} Size={this.props.size || UDim2.fromScale(1, 1)} Position={this.props.position || UDim2.fromScale(.5, .5)}>
            <imagelabel BackgroundTransparency={1} Size={UDim2.fromScale(.15, 1)} Position={UDim2.fromScale(0, 0)} Image={PermImages[this.props.perm] || PermImages.Guest} ImageColor3={Color3.fromRGB(255, 255, 255)} />
            <textlabel BackgroundTransparency={1} Text={this.props.perm} TextScaled={true} Font={Enum.Font.SourceSans} Size={UDim2.fromScale(.8, 1)} Position={UDim2.fromScale(.2, 0)} TextXAlignment={Enum.TextXAlignment.Left} TextColor3={Color3.fromRGB(255, 255, 255)} />
            <uicorner CornerRadius={new UDim(.1, 0)} />
            <uistroke Color={Color3.fromRGB(64, 192, 87)} Thickness={2} />
        </frame>
    }
}