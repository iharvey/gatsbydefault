import React from "react"
import PropTypes from "prop-types"
import TopLayout from "./TopLayout"

export const wrapRootElement = props => {
  return <TopLayout>{props.element}</TopLayout>
}

wrapRootElement.propTypes = {
  element: PropTypes.node,
}
