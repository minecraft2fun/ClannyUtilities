import Roact from "@rbxts/roact";
import { PlayerTag } from "./PlayerTab";

export interface playerTabData {
    rank: string,
    player?: Player
    exp: number,
    blacklisted: boolean,
    permLevel: string
}

interface props { }
interface state {
    elements: playerTabData[]
}

export class GeneratePlayerTab extends Roact.Component<props, state> {
    constructor(props: props) {
        super(props)
        this.setState({
            elements: []
        })
        this.addPlayer({
            rank: "string",
            exp: 2,
            blacklisted: false,
            permLevel: "string"
        })
        this.addPlayer({
            rank: "string",
            exp: 1,
            blacklisted: true,
            permLevel: "string"
        })
        spawn(() => {
            wait(5)
            this.removePlayer()
        })

    }
    private addPlayer(data: playerTabData) {
        this.setState((original) => ({
            elements: [...original.elements, data]
        }))
    }
    private removePlayer() {
        this.setState((original) => ({
            elements: original.elements.filter((element) => element.exp !== 1)
        }))
    }
    public render(): Roact.Element | undefined {
        const current = this.state.elements.map((value) => (
            <PlayerTag rank={value.rank} exp={value.exp} blacklisted={value.blacklisted} permLevel={value.permLevel} player={value.player} />
        ))
        return (
            <scrollingframe Key={"PlayerFrame"} Size={UDim2.fromScale(1, .8)} Position={UDim2.fromScale(0, .2)} ScrollBarThickness={0} AutomaticCanvasSize={"Y"} CanvasSize={UDim2.fromScale(1, 0)} BackgroundTransparency={1}>
                <uigridlayout CellPadding={UDim2.fromScale(0, .025)} CellSize={UDim2.fromScale(.97, .2)} FillDirectionMaxCells={1} HorizontalAlignment={Enum.HorizontalAlignment.Center} />
                {current}
            </scrollingframe>
        )
    }
}