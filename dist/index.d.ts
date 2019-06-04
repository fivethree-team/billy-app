import { CorePlugin } from '@fivethree/billy-plugin-core';
export interface ExampleApplication extends CorePlugin {
}
export declare class ExampleApplication {
    hello(): Promise<void>;
}
