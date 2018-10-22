import Mock from 'mockjs'

export const navList = options => {
  const template = {
    "code": 1,
    "data": {
      "list|4": [
        {
          "page_id": "@id",
          "name": "@order('推荐', '食品','数码','运动')"
        }
      ]
    }
  }
  return Mock.mock(template)
}

export const recommend = options => {
  const template = {
    "code": 1,
    "data": {
      "bannerList|4": [
        {
          "img": "@image(750x320,@color,#fff,hello)",
          "id|10000-99999": 1
        }
      ],
      "recommendList|20": [
        {
          "id|10000-99999": 1,
          "price|1-1000": 1,
          "img": "@image(200x130,@color,#fff,like)",
          "name": "@string(\"upper\", 4, 12)",
          "desc": "@string(\"lower\", 12, 36)"
        }
      ]
    }
  }
  return Mock.mock(template)
}
