import { CorePlugin } from '@fivethree/billy-plugin-core';
import { use } from '@fivethree/billy-core';

export interface Application extends CorePlugin {

}

export class Application {
    @use(CorePlugin) this;
}