import React, { createElement, useState } from 'react';
import PropTypes from 'prop-types';
const MultiLineText = ({
  children,
  line,
  unfold,
  style,
  unfoldColor
}) => {
  const componentChildren = [];
  const [unfoldText, setUnfoldText] = useState("展开")
  const [defaultStyle, setDefaultStyle] = useState({
    overflow: "hidden",
    display: "-webkit-box",
    wordBreak: "break-all",
    webkitBoxOrient: "vertical",
    webkitLineClamp: line.toString(),
  })
  const unfoldStyle = {
    color: unfoldColor,
    cursor: "pointer"
  }
  const handleUnfold = () => {
    if (unfoldText === "展开") {
      setDefaultStyle({
        overflow: "hidden",
        display: "-webkit-box",
        wordBreak: "break-all",
      })
      setUnfoldText("收起")
    } else {
      setDefaultStyle({
        overflow: "hidden",
        display: "-webkit-box",
        wordBreak: "break-all",
        webkitBoxOrient: "vertical",
        webkitLineClamp: line.toString(),
      })
      setUnfoldText("展开")
    }
  }
  if (children.length > 0) {
    componentChildren.push(
      <>
        <div
          key="text"
          style={defaultStyle}>
          {children}
        </div>
        {unfold && <span
          style={unfoldStyle}
          onClick={handleUnfold}
          >
          {unfoldText}
        </span>}
      </>
    )
  }
  return createElement(
    'div',
    {
      style: Object.assign({}, style),
    },
    componentChildren
  )
}
MultiLineText.defaultProps = {
  line: 1,
  unfold: false,
  style: {},
  unfoldColor: "rgb(152, 216, 131)"
}
MultiLineText.propTypes = {
  Line: PropTypes.string,
  unfold: PropTypes.bool,
  style: PropTypes.object,
  unfoldColor: PropTypes.string
}
export default MultiLineText