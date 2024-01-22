import { TextInput } from "./RoactComponents/TextInput";

export class BindTextInputs {
    private binds: TextInput[] = []
    constructor() { }
    public add(TextInput: TextInput) {
        this.binds.push(TextInput)
        TextInput.onChange((newText: string) => {
            this.binds.forEach(bind => {
                if (bind !== TextInput) {
                    bind.setText(newText)
                }
            })
        })
    }
}