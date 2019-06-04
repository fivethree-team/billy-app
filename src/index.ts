import { CorePlugin } from '@fivethree/billy-plugin-core';
import { App, Command, usesPlugins } from "@fivethree/billy-core";

export interface ExampleApplication extends CorePlugin { }
@App()
export class ExampleApplication {
    @usesPlugins(CorePlugin)

    @Command('This is an example lane.\nThe only thing it really does is output Hello World! 👾')
    async hello() {
        console.log('Hello World!')
    }

}
