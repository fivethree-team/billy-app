import { CorePlugin } from '@fivethree/billy-plugin-core';
import { usesPlugins } from '@fivethree/billy-core';

export interface Application extends CorePlugin {

}

export class Application {
    @usesPlugins(CorePlugin) this;
}