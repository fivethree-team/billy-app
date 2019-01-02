import { App, Lane, LaneContext } from "@fivethree/billy-core";

@App()
export class ExampleApplication {

    @Lane('This is an example lane.\nThe only thing it really does is output Hello World! 👾')
    async hello_world({ print, bump, push_to_remote }: LaneContext) {
        print('Hello World!')
        await bump('0.3.6');
        await push_to_remote()
    }

}
