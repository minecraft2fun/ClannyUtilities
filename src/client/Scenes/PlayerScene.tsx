import Roact from "@rbxts/roact";
import { PlayerTag } from "../RoactComponents/PlayerTab";

export interface PlayerScenePlayerData {
    rank: string,
    player: Player
    exp: number,
    blacklisted: boolean,
    permLevel: string
}

interface props { }
interface state {
    elements: PlayerScenePlayerData[]
}

export class PlayerScene extends Roact.Component<props, state> {
    constructor(props: props) {
        super(props)
        this.setState({
            elements: []
        })
    }
    private addPlayer(data: PlayerScenePlayerData) {
        this.setState((original) => ({
            elements: [...original.elements, data]
        }))
    }
    private removePlayer(userId: number) {
        this.setState((original) => ({
            elements: original.elements.filter((element) => element.player && element.player.UserId !== userId)
        }))
    }
    public render(): Roact.Element | undefined {
        const current = this.state.elements.map((value) => (
            <PlayerTag rank={value.rank} exp={value.exp} blacklisted={value.blacklisted} permLevel={value.permLevel} player={value.player} />
        ))
        return (
            <scrollingframe Visible={false} Key={"PlayerScene"} Size={UDim2.fromScale(1, .8)} Position={UDim2.fromScale(0, .15)} ScrollBarThickness={0} AutomaticCanvasSize={"Y"} CanvasSize={UDim2.fromScale(1, 0)} BackgroundTransparency={1}>
                <uigridlayout CellPadding={UDim2.fromScale(0, .025)} CellSize={UDim2.fromScale(.97, .2)} FillDirectionMaxCells={1} HorizontalAlignment={Enum.HorizontalAlignment.Center} />
                {current}
            </scrollingframe>
        )
    }
}