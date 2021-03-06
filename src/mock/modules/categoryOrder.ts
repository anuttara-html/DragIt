import customer from "mock/views/customer";
import customers from "mock/views/customers";
import order from "mock/views/order";
import orders from "mock/views/orders";
import supplier from "mock/views/supplier";
import suppliers from "mock/views/suppliers";

export default[
  {
    id:11,
    name:'订单管理',
    slug:'order',
    indexPageId:111,
    pages:[
      {
        id:111,
        name:'订单列表',
        slug:'orders',
        jsonSchema: orders,
      },
      {
        id:112,
        name:'订单编辑',
        slug:'order-edit',
        jsonSchema: order,
      },
    ],
    auths:[
      {
        id:111,
        slug:"orders-all",
        name:'订单模块',
      },
      {
        id:112,
        slug:"edit-order",
        name:'编辑产品',        
      },
      {
        id:113,
        slug:"delete-order",
        name:"删除订单"
      },
      {
        id:114,
        slug:"finished-order",
        name:"完结订单"
      },      
    ]
  },
  {
    id:12,
    name:'客户管理',
    slug:'customer',
    indexPageId:121,
    pages:[
      {
        id:121,
        name:'客户列表',
        slug:'customers',
        jsonSchema: customers,
      },
      {
        id:122,
        name:'客户编辑',
        slug:'customer-edit',
        jsonSchema: customer,
      },
    ],
    auths:[
     
    ]
  },
  {
    id:13,
    name:'供应商管理',
    slug:'supplier',
    indexPageId:131,
    pages:[
      {
        id:131,
        name:'客户列表',
        slug:'suppliers',
        jsonSchema: suppliers,
      },
      {
        id:132,
        name:'客户编辑',
        slug:'supplier-edit',
        jsonSchema: supplier,
      },
    ],
    auths:[
     
    ]
  },

]