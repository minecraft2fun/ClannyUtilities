import Roact, { createBinding } from "@rbxts/roact";
import { BlacklistTag } from "./BlacklistTag";
import { PermTag } from "./PermTag";
import { Players } from "@rbxts/services";
import { Button } from "./Button";
import { PlayerScenePlayerData } from "../Scenes/PlayerScene";

export class PlayerTag extends Roact.Component<PlayerScenePlayerData> {
    public render(): Roact.Element | undefined {
        const dName = this.props.player && this.props.player.DisplayName || "OnlyTwentyTwoCharacters"
        const name = this.props.player && this.props.player.Name || "OnlyTwentyTwoCharacters"
        let [ExpLabelText, ExpLabelTextUpdate] = createBinding(`EXP: ${this.props.exp}`)
        const ExpLabel = <textlabel Key={"ExpLabel"} Text={ExpLabelText.map(value => value)} Size={UDim2.fromScale(.3, .35)} Position={UDim2.fromScale(.68, .05)} TextXAlignment={Enum.TextXAlignment.Right} TextWrap={false} TextScaled={true} BackgroundTransparency={1} TextColor3={Color3.fromRGB(255, 255, 255)} />
        let ActionButtons: { [name: string]: Button } = {}

        const ConfirmButton = <Button
            text={"Yes, I'm sure"}
            color={Color3.fromRGB(47, 158, 68)}
            onClick={(button) => {
                ActionButtons["setXp"].SetVisibility(true)
                ActionButtons["addXp"].SetVisibility(true)
                ActionButtons["removeXp"].SetVisibility(true)
                ActionButtons["confirm"].SetVisibility(false)
                ActionButtons["cancel"].SetVisibility(false)
                ExpLabelTextUpdate(`EXP: ${this.props.exp}`)
            }}
            onLoad={(button) => {
                ActionButtons["confirm"] = button
            }}
            size={UDim2.fromScale(.3, 1)}
            visible={false}
        />;
        const DenyButton = <Button
            text={"No, cancel"}
            color={Color3.fromRGB(240, 62, 62)}
            onClick={(button) => {
                ActionButtons["setXp"].SetVisibility(true)
                ActionButtons["addXp"].SetVisibility(true)
                ActionButtons["removeXp"].SetVisibility(true)
                ActionButtons["confirm"].SetVisibility(false)
                ActionButtons["cancel"].SetVisibility(false)
                ExpLabelTextUpdate(`EXP: ${this.props.exp}`)
            }}
            onLoad={(button) => {
                ActionButtons["cancel"] = button
            }}
            size={UDim2.fromScale(.3, 1)}
            visible={false}
        />;

        function ActionPressed(actionName: string) {
            //print(ActionButtons)
            ActionButtons["setXp"].SetVisibility(false)
            ActionButtons["addXp"].SetVisibility(false)
            ActionButtons["removeXp"].SetVisibility(false)
            ActionButtons["confirm"].SetVisibility(true)
            ActionButtons["cancel"].SetVisibility(true)
            ExpLabelTextUpdate("Are you sure?")
        }
        const SetXpButton = <Button
            text={"Set XP"}
            color={Color3.fromRGB(28, 126, 214)}
            onClick={(button) => {
                ActionPressed("set");
            }}
            onLoad={(button) => {
                ActionButtons["setXp"] = button
            }}
            size={UDim2.fromScale(.25, 1)}
        />;
        const AddXpButton = <Button
            text={"Add XP"}
            color={Color3.fromRGB(47, 158, 68)}
            onClick={(button) => {
                ActionPressed("add");
            }}
            onLoad={(button) => {
                ActionButtons["addXp"] = button
            }}
            size={UDim2.fromScale(.25, 1)}
        />;
        const RemoveXpButton = <Button
            text={"Remove XP"}
            color={Color3.fromRGB(240, 62, 62)}
            onClick={(button) => {
                ActionPressed("remove");
            }}
            onLoad={(button) => {
                ActionButtons["removeXp"] = button
            }}
            size={UDim2.fromScale(.35, 1)}
        />;
        return <frame BackgroundColor3={Color3.fromRGB(37, 38, 43)
        }>
            <uicorner CornerRadius={new UDim(.1, 0)} />
            <imagelabel Key={"PlayerLogo"} BackgroundTransparency={0} Image={`${Players.GetUserThumbnailAsync(this.props.player && this.props.player.UserId || 1, Enum.ThumbnailType.HeadShot, Enum.ThumbnailSize.Size352x352)[0]}`} Size={UDim2.fromScale(.1, .9)} Position={UDim2.fromScale(.08, .5)} AnchorPoint={new Vector2(.5, .5)}>
                <uicorner CornerRadius={new UDim(.1, 0)} />
            </imagelabel>
            <textlabel Key={"PlayerName"} Text={`${name} (@${dName})`} Size={UDim2.fromScale(.3, .35)} Position={UDim2.fromScale(.15, .05)} TextScaled={true} Font={Enum.Font.SourceSansBold} TextXAlignment={Enum.TextXAlignment.Left} TextWrap={false} BackgroundTransparency={1} TextColor3={Color3.fromRGB(255, 255, 255)} />
            <BlacklistTag Blacklisted={this.props.blacklisted} Size={UDim2.fromScale(.2, .3)} Position={UDim2.fromScale(.15, .5)} />
            <textlabel Key={"PlayerRank"} Text={`Rank: ${this.props.rank}`} Size={UDim2.fromScale(.3, .35)} Position={UDim2.fromScale(.47, .05)} TextScaled={true} Font={Enum.Font.SourceSans} TextXAlignment={Enum.TextXAlignment.Left} TextWrap={false} BackgroundTransparency={1} TextColor3={Color3.fromRGB(255, 255, 255)} />
            <PermTag perm={this.props.permLevel} size={UDim2.fromScale(.15, .3)} position={UDim2.fromScale(.47, .5)} />
            {ExpLabel}
            <frame Key={"ActionRow"} Size={UDim2.fromScale(.3, .4)} Position={UDim2.fromScale(.68, .43)} BackgroundTransparency={1}>
                <uilistlayout HorizontalAlignment={"Right"} Padding={new UDim(.03, 0)} FillDirection={Enum.FillDirection.Horizontal} VerticalAlignment={"Center"} />
                {SetXpButton}
                {AddXpButton}
                {RemoveXpButton}
                {ConfirmButton}
                {DenyButton}
            </frame>
        </frame >
    }
}