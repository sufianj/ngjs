export class MenuItem {
    // tslint:disable-next-line:no-inferrable-types
    private _display: string = '(none)';
    private _action: string = '';

    public get action(): string {
        return this._action;
    }
    public set action(value: string) {
        this._action = value;
    }

    public get display(): string {
        return this._display;
    }

    public set display(v : string) {
        this._display = v;
    }

    /*? == optionel */
    constructor (display?: string, action?: string) {
        if (display != undefined) {
            this._display = display;
        }
        if (action != undefined) {
            this._action = action;
        }
    }
}
