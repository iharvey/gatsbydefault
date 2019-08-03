import React from "react"
import PropTypes from "prop-types"
import TopLayout from "./TopLayout"

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>
}

wrapRootElement.propTypes = {
  element: PropTypes.node,
}
