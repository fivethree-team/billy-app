import { App, Lane } from "@fivethree/billy-core";
import { Application } from "./generated/application";

@App()
export class ExampleApplication extends Application {

    @Lane('This is an example lane.\nThe only thing it really does is output Hello World! 👾')
    async hello_world() {
        this.print('Hello World!')
    }

}
