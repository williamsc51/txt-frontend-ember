import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import ENV from 'txt-frontend-ember/config/environment';


let purchase = {
  intent: 'CAPTURE',
  // application_context: {
  //   brand_name: 'TXTTIDE LLC',
  // },
  purchase_units: [
    {
  //     reference_id: 'PUHF',
  //     description: 'Sporting Goods',

  //     custom_id: 'CUST-HighFashions',
  //     soft_descriptor: 'HighFashions',
      amount: {
        currency_code: 'USD',
        value: '230.00'
        // breakdown: {
        //   item_total: {
        //     currency_code: 'USD',
        //     value: '180.00'
        //   },
        //   shipping: {
        //     currency_code: 'USD',
        //     value: '30.00'
        //   },
        //   tax_total: {
        //     currency_code: 'USD',
        //     value: '20.00'
        //   }
        // }
      },
      // items: [
      //   {
      //     name: 'T-Shirt',
      //     description: 'Green XL',
      //     sku: 'sku01',
      //     unit_amount: {
      //       currency_code: 'USD',
      //       value: '90.00'
      //     },
      //     tax: {
      //       currency_code: 'USD',
      //       value: '10.00'
      //     },
      //     quantity: '1',
      //     category: 'PHYSICAL_GOODS'
      //   },
      //   {
      //     name: 'Shoes',
      //     description: 'Running, Size 10.5',
      //     sku: 'sku02',
      //     unit_amount: {
      //       currency_code: 'USD',
      //       value: '45.00'
      //     },
      //     tax: {
      //       currency_code: 'USD',
      //       value: '5.00'
      //     },
      //     quantity: '2',
      //     category: 'PHYSICAL_GOODS'
      //   }
      // ],
      // shipping: {
      //   method: 'United States Postal Service',
      //   address: {
      //     name: {
      //       full_name: 'John',
      //       surname: 'Doe'
      //     },
      //     address_line_1: '123 Townsend St',
      //     address_line_2: 'Floor 6',
      //     admin_area_2: 'San Francisco',
      //     admin_area_1: 'CA',
      //     postal_code: '94107',
      //     country_code: 'US'
      //   }
      // }
    }
  ]
}

export default Controller.extend({
    cart: service(),
    session: service(),
    ajax: service(),

  actions: {

    async createPayPalOrder() {
      const res = await fetch(`${ENV.host}/api/v1/purchase/create_order`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          purchase
        })
      });
      const data = await res.json();
      return data.id;
    },

    async approvePayPalOrder(ordID) {
      const res = await fetch(`${ENV.host}/api/v1/purchase/capture_order`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          oID: ordID
        })
      });
      const details = await res.json();
      alert('Transaction funds captured from ' + details.payer.name.given_name);
    },

    removeItem(bookId){
      this.cart.remove(bookId);
    },

    clear(){
      this.cart.clear();
    },


  },

});
