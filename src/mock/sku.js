const buy_option = [
  {
    name: '鞋码',
    cfg_id: 100,
    list: [
      {
        name: '41',
        value_id: 10000
      },
      {
        name: '41.5',
        value_id: 10001
      },
      {
        name: '42',
        value_id: 10002
      },
      {
        name: '42.5',
        value_id: 10003
      },
      {
        name: '43',
        value_id: 10004
      },
      {
        name: '44',
        value_id: 10005
      },
    ]
  },
  {
    name: '颜色',
    cfg_id: 200,
    list: [
      {
        name: '黑红',
        value_id: 20000
      },
      {
        name: '墨绿',
        value_id: 20001
      }
    ]
  }
]

const goods_info = [
  {
    name: '黑红编织 41码',
    buy_limit: 5,
    goods_id: 800000,
    price: 1099,
    img_url: 'https://juplus.cn/glf/gelanfu-view/images/donger/aj-black1.jpg',
    prop_list: [
      {
        cfg_id: 100, // 鞋码
        value_id: 10000 // 41
      },
      {
        cfg_id: 200, // 颜色
        value_id: 20000 // 黑红
      }
    ]
  },
  {
    name: '黑红编织 41.5码',
    buy_limit: 5,
    goods_id: 800001,
    price: 1099,
    img_url: 'https://juplus.cn/glf/gelanfu-view/images/donger/aj-black1.jpg',
    prop_list: [
      {
        cfg_id: 100, // 鞋码
        value_id: 10001 // 41.5
      },
      {
        cfg_id: 200, // 颜色
        value_id: 20000 // 黑红
      }
    ]
  },
  {
    name: '黑红编织 42码',
    buy_limit: 5,
    goods_id: 800002,
    price: 1299,
    img_url: 'https://juplus.cn/glf/gelanfu-view/images/donger/aj-black1.jpg',
    prop_list: [
      {
        cfg_id: 100, // 鞋码
        value_id: 10002 // 42
      },
      {
        cfg_id: 200, // 颜色
        value_id: 20000 // 黑红
      }
    ]
  },
  {
    name: '黑红编织 42.5码',
    buy_limit: 5,
    goods_id: 800003,
    price: 1299,
    img_url: 'https://juplus.cn/glf/gelanfu-view/images/donger/aj-black1.jpg',
    prop_list: [
      {
        cfg_id: 100, // 鞋码
        value_id: 10003 // 42.5
      },
      {
        cfg_id: 200, // 颜色
        value_id: 20000 // 黑红
      }
    ]
  },
  {
    name: '黑红编织 43码',
    buy_limit: 5,
    goods_id: 800004,
    price: 1299,
    img_url: 'https://juplus.cn/glf/gelanfu-view/images/donger/aj-black1.jpg',
    prop_list: [
      {
        cfg_id: 100, // 鞋码
        value_id: 10004 // 43
      },
      {
        cfg_id: 200, // 颜色
        value_id: 20000 // 黑红
      }
    ]
  },
  {
    name: '黑红编织 44码',
    buy_limit: 5,
    goods_id: 800005,
    price: 1099,
    img_url: 'https://juplus.cn/glf/gelanfu-view/images/donger/aj-black1.jpg',
    prop_list: [
      {
        cfg_id: 100, // 鞋码
        value_id: 10005 // 44
      },
      {
        cfg_id: 200, // 颜色
        value_id: 20000 // 黑红
      }
    ]
  },
  {
    name: '墨绿编织 41码',
    buy_limit: 5,
    goods_id: 800006,
    price: 999,
    img_url: 'https://juplus.cn/glf/gelanfu-view/images/donger/aj-green1.jpg',
    prop_list: [
      {
        cfg_id: 100, // 鞋码
        value_id: 10000 // 41
      },
      {
        cfg_id: 200, // 颜色
        value_id: 20001 // 墨绿
      }
    ]
  },
  {
    name: '墨绿编织 41.5码',
    buy_limit: 5,
    goods_id: 800007,
    price: 999,
    img_url: 'https://juplus.cn/glf/gelanfu-view/images/donger/aj-green1.jpg',
    prop_list: [
      {
        cfg_id: 100, // 鞋码
        value_id: 10001 // 41.5
      },
      {
        cfg_id: 200, // 颜色
        value_id: 20001 // 墨绿
      }
    ]
  },
  {
    name: '墨绿编织 42码',
    buy_limit: 5,
    goods_id: 800008,
    price: 1199,
    img_url: 'https://juplus.cn/glf/gelanfu-view/images/donger/aj-green1.jpg',
    prop_list: [
      {
        cfg_id: 100, // 鞋码
        value_id: 10002 // 42
      },
      {
        cfg_id: 200, // 颜色
        value_id: 20001 // 墨绿
      }
    ]
  },
  {
    name: '墨绿编织 42.5码',
    buy_limit: 5,
    goods_id: 800009,
    price: 1199,
    img_url: 'https://juplus.cn/glf/gelanfu-view/images/donger/aj-green1.jpg',
    prop_list: [
      {
        cfg_id: 100, // 鞋码
        value_id: 10003 // 42.5
      },
      {
        cfg_id: 200, // 颜色
        value_id: 20001 // 墨绿
      }
    ]
  },
  {
    name: '墨绿编织 43码',
    buy_limit: 5,
    goods_id: 8000010,
    price: 1199,
    img_url: 'https://juplus.cn/glf/gelanfu-view/images/donger/aj-green1.jpg',
    prop_list: [
      {
        cfg_id: 100, // 鞋码
        value_id: 10004 // 43
      },
      {
        cfg_id: 200, // 颜色
        value_id: 20001 // 墨绿
      }
    ]
  },
  {
    name: '墨绿编织 44码',
    buy_limit: 5,
    goods_id: 8000011,
    price: 999,
    img_url: 'https://juplus.cn/glf/gelanfu-view/images/donger/aj-green1.jpg',
    prop_list: [
      {
        cfg_id: 100, // 鞋码
        value_id: 10005 // 44
      },
      {
        cfg_id: 200, // 颜色
        value_id: 20001 // 墨绿
      }
    ]
  },
]

export {
  buy_option,
  goods_info
}
