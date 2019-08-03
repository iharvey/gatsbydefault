import React from "react"
import PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"

const typeMaker = props => {
  const { className, children, ...restProps } = props
  return (
    <Typography className={className} variant={restProps.variant} {...restProps}>
      {children}
    </Typography>
  )
}

export const Body1 = props => typeMaker({ variant: "body1", children: props.children, className: props.className })

export const Body2 = props => typeMaker({ variant: "body2", children: props.children, className: props.className })

export const Caption = props => typeMaker({ variant: "caption", children: props.children, className: props.className })

export const Button = props => typeMaker({ variant: "button", children: props.children, className: props.className })

export const Sub1 = props => typeMaker({ variant: "subtitle1", children: props.children, className: props.className })

export const Sub2 = props => typeMaker({ variant: "subtitle2", children: props.children, className: props.className })

export const Over = props => typeMaker({ variant: "overline", children: props.children, className: props.className })

export const H1 = props => typeMaker({ variant: "h1", children: props.children, className: props.className })

export const H2 = props => typeMaker({ variant: "h2", children: props.children, className: props.className })

export const H3 = props => typeMaker({ variant: "h3", children: props.children, className: props.className })

export const H4 = props => typeMaker({ variant: "h4", children: props.children, className: props.className })

export const H5 = props => typeMaker({ variant: "h5", children: props.children, className: props.className })

export const H6 = props => typeMaker({ variant: "h6", children: props.children, className: props.className })

typeMaker.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}
