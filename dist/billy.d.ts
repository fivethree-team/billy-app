import { LaneContext } from "@fivethree/billy-core";
export declare class ExampleApplication {
    hello_world({ print }: LaneContext): Promise<void>;
    log({ print, exec, app }: {
        print: any;
        exec: any;
        app: any;
    }): Promise<void>;
}
