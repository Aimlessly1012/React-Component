# 文本溢出的组件
1. MultiLineText （css编写的文本溢出组件）
```
  Line: _propTypes["default"].string,
  unfold: _propTypes["default"].bool,
  style: _propTypes["default"].object,
  unfoldColor: _propTypes["default"].string
```
2. Paragraph (js编写的文本溢出组件)
```
  lineNum: 1,
  //支持多行溢出的行数  默认(1行)
  isUnfold: true,
  //是否支持展开  默认(true)
  style: {},
  //文本内容的样式
  unfoldColor: "rgb(152, 216, 131)",
  //展开收起的颜色  默认(驿氪绿)
  children: "请添加文本(string格式)",
  //文本  默认(请添加文本(string格式))
  suffix: "...",
  //后缀  默认("...")
  foldText: "收起",
  //收起文案 ，默认(收起)
  unfoldText: "展开" //展开文案 ，默认(展开)
```