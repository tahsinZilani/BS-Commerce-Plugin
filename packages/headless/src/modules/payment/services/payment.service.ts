import { Injectable } from '@nestjs/common';
import pluginManager from 'src/includes/plugins/payment/manager';
import { PaymentContext } from 'src/includes/plugins/payment/payment-context';
import { PluggableEntities } from 'src/includes/pluggable';
import { PluginModel } from 'src/database/mongodb/plugin/plugin.model';

@Injectable()
export class PaymentService {
    async createPayment(data: any): Promise<any> {
        // check whether orderId exists in the database

        // check whether orderId of the user and requested user same

        // check whether order status is not cancelled
        const paymentOptions = pluginManager.getPluginList();
        const context = paymentOptions.find(paymentOption => paymentOption.name === data.paymentMethod);

        const paymentContext = new PaymentContext(context);
        paymentContext.executePayment();

        return "Demo plugin is working perfectly.";
    }

    async getPaymentMethods() {
        return await PluginModel.find({ extensibleFor: PluggableEntities.PAYMENT});
    }
}
