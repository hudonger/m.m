import Mock from 'mockjs'

export const cart = options => {
  const template = {
    "code": 1,
    "list|4": [
      {
        "name": "间歇性踌躇满志，持续性混吃等死",
        "price": "@integer(100, 999)",
        "img": "@image(210x140,@color,#fff,hello)",
        "count": 1
      }
    ]
  }
  return Mock.mock(template)
}
