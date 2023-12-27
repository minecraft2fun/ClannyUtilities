import Roact from "@rbxts/roact";

interface state {
    pos: number
}

export class TestButton extends Roact.Component<{}, state> {
    constructor() {
        super({})
        this.setState({
            pos: 1
        })
    }
    public render(): Roact.Element | undefined {
        return <textbutton Size={UDim2.fromScale(1, 1)} Text={tostring(this.state.pos)} Event={{ MouseButton1Click: () => print("CLICKED!") }} />
    }
    protected didMount(): void {
        spawn(() => {
            while (wait(1)) {
                this.setState(state => {
                    return { pos: state.pos + 1 }
                })
            }
        })
    }
}