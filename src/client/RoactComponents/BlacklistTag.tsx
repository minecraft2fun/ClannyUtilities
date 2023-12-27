import Roact from "@rbxts/roact";

interface props {
    Blacklisted: Boolean
    Size?: UDim2
    Position?: UDim2
}

export class BlacklistTag extends Roact.Component<props> {
    public render(): Roact.Element | undefined {
        return <frame BackgroundColor3={this.props.Blacklisted ? Color3.fromRGB(250, 82, 82) : Color3.fromRGB(34, 139, 230)} Size={this.props.Size || UDim2.fromScale(1, 1)} Position={this.props.Position || UDim2.fromScale(.5, .5)}>
            <imagelabel BackgroundTransparency={1} Size={UDim2.fromScale(.15, 1)} Position={UDim2.fromScale(0, 0)} Image={this.props.Blacklisted ? "rbxassetid://15686308791" : "rbxassetid://15686308909"} />
            <textlabel BackgroundTransparency={1} Text={this.props.Blacklisted ? "Blacklisted" : "Not Blacklisted"} TextScaled={true} Font={Enum.Font.SourceSans} Size={UDim2.fromScale(.8, 1)} Position={UDim2.fromScale(.2, 0)} TextXAlignment={Enum.TextXAlignment.Left} TextColor3={Color3.fromRGB(255, 255, 255)} />
            <uicorner CornerRadius={new UDim(.1, 0)} />
            <uistroke Color={this.props.Blacklisted ? Color3.fromRGB(255, 107, 107) : Color3.fromRGB(51, 154, 240)} Thickness={2} />
        </frame>
    }
}