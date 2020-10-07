import React, { useState, useRef, useEffect } from 'react';
import "./style.css"
import PropTypes from 'prop-types';

const Paragraph = ({
  children,
  lineNum,
  isUnfold,
  style,
  unfoldColor,
  unfoldText,
  foldText,
  suffix
}) => {
  if (suffix.length > 3) throw new Error("Please limit the number of suffixes to 3 characters")
  const [foldType, setFoldType] = useState({ node: unfoldText, value: 0 })
  const couterRef = useRef();
  const pxToNum = (px) => {
    return +px.slice(0, -2)
  }
  const thinContent = (node) => {
    let text = children
    const originStyle = window.getComputedStyle(node);
    const baseWidth = originStyle.width
    const baseFontSize = pxToNum(originStyle.fontSize)
    const lineWidth = pxToNum(baseWidth)
    const strNum = Math.floor(lineWidth / baseFontSize);
    const totalStrNum = Math.floor(strNum * lineNum);
    const lastIndex = totalStrNum - children.length;
    let content = '';
    if (children.length > totalStrNum) {
      content = text.slice(0, lastIndex - 3).concat(suffix);
    } else {
      content = text;
    }
    return content
  }
  useEffect(() => {
    couterRef.current.textContent = thinContent(couterRef.current)
  }, []);
  const handleFold = () => {
    if (!foldType.value) {
      couterRef.current.textContent = children
      setFoldType({ node: foldText, value: 1 })
    } else {
      couterRef.current.textContent = thinContent(couterRef.current)
      setFoldType({ node: unfoldText, value: 0 })
    }
  }
  return (
    <div
      className="Paragraph-container"
    >
      <div
        ref={couterRef}
        className="Paragraph-text"
        style={style} />
      {isUnfold && <span
        style={{ color: unfoldColor, width: "3em" }}
        className="Paragraph-fold"
        onClick={handleFold}>
        {foldType.node}
      </span>}
    </div>
  )
}
Paragraph.defaultProps = {
  lineNum: 1,   //支持多行溢出的行数  默认(1行)
  isUnfold: true, //是否支持展开  默认(true)
  style: {},  //文本内容的样式
  unfoldColor: "rgb(152, 216, 131)",  //展开收起的颜色  默认(驿氪绿)
  children: "请添加文本(string格式)",   //文本  默认(请添加文本(string格式))
  suffix: "...",    //后缀  默认("...")
  foldText: "收起",   //收起文案 ，默认(收起)
  unfoldText: "展开"  //展开文案 ，默认(展开)
}
Paragraph.propTypes = {
  lineNum: PropTypes.number,
  isUnfold: PropTypes.bool,
  style: PropTypes.object,
  unfoldColor: PropTypes.string,
  children: PropTypes.string,
  foldText: PropTypes.node,
  unfoldText: PropTypes.node,
  suffix: PropTypes.string
}
export default Paragraph
