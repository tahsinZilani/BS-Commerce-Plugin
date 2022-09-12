import { PaymentModule } from 'src/modules/payment/payment.rest.module';
import { pluginManager } from './plugin-modules-manager';
// import { DemoModule } from './plugins/demo/demo.module';
// import { PaymentModule } from './plugins/payment/payment.module';

// pluginManager.register({ module: DemoModule, isLoadable: true });
pluginManager.register({ module: PaymentModule, isLoadable: true });

export { pluginManager };
export const PluginModules = pluginManager.getPluginModuleList();

