import Mock from 'mockjs'

export const category = options => {
  const template = {
    "code": 1,
    "data|6": [
      {
        "label": "@order('推荐','新品','居家','服装','电器','饮食')",
        "content": {
          "title": "@order('热门推荐','新品推荐','居家分类','服装分类','电器分类','饮食分类')",
          "list|2-12": [
            {
              "img": "@image(52x52,@color,#fff,item)",
              "name": "@string(\"lower\", 2, 6)",
              "category_id|1000-9999": 1
            }
          ]
        }
      }
    ]
  }
  return Mock.mock(template)
}

export const goodsList = options => {
  const template = {
    "code": 1,
    "goodsList|10": [
      {
        "title": "@order('眼镜厂 忍物语 忍野忍 西野维新大辞展景品手办 EXQ系列','GSC 工作细胞 白血球粘土人','GSC DARLING in the FRANXX 02 粘土人','RE：从零开始的异世界生活 蕾姆 白无垢 手办','角川 零之使魔 露易斯 Finale 婚纱Ver. 手办','Revolve 狼与香辛料 赫萝 10周年纪念Ver. 手办','Max Factory 为美好的世界献上祝福 惠惠 figma','GSC 刀剑神域 亚丝娜 血盟骑士团Ver. 手办 再版','眼镜厂 漩涡鸣人 GRANDISTA系列','万代 PG 机动战士高达SEED 强袭自由高达')",
        "price|10-100": 1,
        "img": "@image(345x345,@color,#fff,goods)",
        "id|10000-99999": 1,
        "label": "@order('热销','新品','','','特惠')",
        "type": "@order('clothing','model')"
      }
    ]
  }
  return Mock.mock(template)
}

export const modelDetail = options => {
  const template = {
    "code": 1,
    "data": {
      "imgList": [
        "https://juplus.cn/glf/gelanfu-view/images/donger/aj-black1.jpg",
        "https://juplus.cn/glf/gelanfu-view/images/donger/aj-black2.jpg",
        "https://juplus.cn/glf/gelanfu-view/images/donger/aj-green1.jpg",
        "https://juplus.cn/glf/gelanfu-view/images/donger/aj-green2.jpg"
      ],
      "title": "Air Jordan 1 Flyknit",
      "desc": "买买买~",
      "price": "999-1299",
      "brand": "Jordan",
      "detail|3": [
        {
          "title": "@order('性别','鞋帮','款号')",
          "info": "@order('男子','高帮','919704')"
        }
      ],
      "detailImg": [
        "https://juplus.cn/glf/gelanfu-view/images/donger/aj-black1.jpg",
        "https://juplus.cn/glf/gelanfu-view/images/donger/aj-black2.jpg",
        "https://juplus.cn/glf/gelanfu-view/images/donger/aj-black3.jpg",
        "https://juplus.cn/glf/gelanfu-view/images/donger/aj-black4.jpg",
        "https://juplus.cn/glf/gelanfu-view/images/donger/aj-green1.jpg",
        "https://juplus.cn/glf/gelanfu-view/images/donger/aj-green2.jpg",
        "https://juplus.cn/glf/gelanfu-view/images/donger/aj-green3.jpg",
        "https://juplus.cn/glf/gelanfu-view/images/donger/aj-green4.jpg"
      ]
    }
  }
  return Mock.mock(template)
}
