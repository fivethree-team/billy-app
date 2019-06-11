#!/usr/bin/env node
import { App, Command } from "@fivethree/billy-core";

@App()
export class ExampleApplication {

    @Command('The only thing it really does is output Hello World! 👾')
    async hello() {
        console.log('Hello World!')
    }

}
