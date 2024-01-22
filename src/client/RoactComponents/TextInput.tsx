import Roact, { createRef } from "@rbxts/roact";

interface props {
    text: string,
    image: string,
    color1?: Color3,
    color2?: Color3,
    size?: UDim2,
    position?: UDim2
    layoutOrder?: number
    imageSize: UDim2,
    onLoad?: (TextInput: TextInput) => void
    textValidation?: (text: string) => void
}
interface state {
    text: string,
    integerOnly: boolean
}

export class TextInput extends Roact.Component<props, state>{
    private FuncBinds: { (newText: string): void }[] = []
    constructor(props: props) {
        super(props)
        this.setState({ text: "", integerOnly: false })
        if (this.props.onLoad) { this.props.onLoad(this) }
    }
    public render(): Roact.Element | undefined {
        return <frame Size={this.props.size || UDim2.fromScale(1, 1)} Position={this.props.position || UDim2.fromScale(0, 0)} LayoutOrder={this.props.layoutOrder || 0} BackgroundColor3={this.props.color1 || Color3.fromRGB(55, 58, 64)} BorderSizePixel={0}>
            <uicorner CornerRadius={new UDim(.2, 0)} />
            <uistroke Color={this.props.color2 || Color3.fromRGB(92, 95, 102)} Thickness={2} />
            <uilistlayout Padding={new UDim(0, 0)} SortOrder={"LayoutOrder"} HorizontalAlignment={"Left"} FillDirection={"Horizontal"} VerticalAlignment={"Center"} />
            <imagelabel LayoutOrder={1} Image={this.props.image} Size={this.props.imageSize} BackgroundTransparency={1}
                AnchorPoint={new Vector2(0, .5)} />
            <textbox LayoutOrder={2} PlaceholderText={this.props.text} PlaceholderColor3={Color3.fromRGB(193, 194, 197)} Text={this.state.text} TextScaled={true}
                Size={UDim2.fromScale(1 - this.props.imageSize.X.Scale, 1)} BackgroundTransparency={1} TextColor3={Color3.fromRGB(255, 255, 255)}
                TextXAlignment={"Left"} ClearTextOnFocus={false}
                Change={{
                    Text: (box) => {
                        let newString = box.Text
                        if (this.state.integerOnly) {
                            newString = ""
                            for (const i of box.Text) {
                                if (tonumber(i)) {
                                    newString += i
                                }
                            }
                        }
                        if (newString === this.state.text) return;
                        this.setState(state => {
                            return { integerOnly: state.integerOnly, text: newString }
                        })
                        this.FuncBinds.forEach(func => {
                            func(newString)
                        })
                    }
                }}
            />
        </frame>
    }
    public getText(): string {
        return this.state.text
    }
    public setText(text: string) {
        this.setState({ text: text })
    }
    public intOnly(value = true) {
        this.setState(state => {
            return { integerOnly: value, text: state.text }
        })
    }
    public onChange(func: (newText: string) => void) {
        this.FuncBinds.push(func)
    }
}