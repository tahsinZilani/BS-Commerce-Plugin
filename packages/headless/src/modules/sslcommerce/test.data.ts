import { InitiatePaymentEntity } from "./entity";
const store_id = 'bscom631b102b78189'
const store_passwd = 'bscom631b102b78189@ssl'
const is_live = false //true for live, false for sandbox
let post_body: any = {
    total_amount: 150.25,
    currency: "BDT",
    tran_id: "sdgdfsgereee",
    success_url: "http://localhost:3000/api/success-payment",
    fail_url: "http://localhost:3000/api/failure-payment",
    cancel_url: "http://localhost:3000/api/cancel-payment",
    ipn_url: "http://localhost:3000/api/cancel-payment",
    emi_option: 0,
    cus_name: "tahsin",
    cus_email: "safasadaf3@gmail.com",
    cus_phone: "01742593730",
    cus_add1: "Dhaka",
    cus_city: "Dhaka",
    cus_country: "bangladesh",
    shipping_method: "NO",
    multi_card_name: "",
    num_of_item: 1,
    product_name: "none",
    product_category: "none",
    product_profile: "general",
    store_id: 'bscom631b102b78189',
    store_passwd: 'bscom631b102b78189@ssl',
    is_live: false
};

// const data = 'store_id=testbox&store_passwd=qwerty&total_amount=100&currency=EURtran_id=REF123&success_url=http://yoursite.com/success.php&fail_url=http://yoursite.com/fail.php&cancel_url=http://yoursite.com/cancel.php&
// cus_name=Customer Name&
// cus_email=cust@yahoo.com&
// cus_add1=Dhaka&
// cus_add2=Dhaka&
// cus_city=Dhaka&
// cus_state=Dhaka&
// cus_postcode=1000&
// cus_country=Bangladesh&
// cus_phone=01711111111&
// cus_fax=01711111111&
// ship_name=Customer Name&
// ship_add1 =Dhaka&
// ship_add2=Dhaka&
// ship_city=Dhaka&
// ship_state=Dhaka&
// ship_postcode=1000&
// ship_country=Bangladesh&
// multi_card_name=mastercard,visacard,amexcard&
// value_a=ref001_A&
// value_b=ref002_B&
// value_c=ref003_C&
// value_d=ref004_D'

export {
    post_body,
    store_id,
    store_passwd,
    is_live
};