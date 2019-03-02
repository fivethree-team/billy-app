import { App, Lane } from "@fivethree/billy-core";
import { Plugins } from "./plugins";

@App()
export class ExampleApplication extends Plugins {

    @Lane('This is an example lane.\nThe only thing it really does is output Hello World! 👾')
    async hello_world() {
        this.print('Hello World!')
    }

}
