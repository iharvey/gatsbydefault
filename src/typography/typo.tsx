import * as React from "react"

import Typography, { TypographyProps } from "@material-ui/core/Typography"

interface TypoProps extends TypographyProps {
  children: JSX.Element | string
  className?: string
}

const typeMaker = (props: TypoProps): JSX.Element => {
  const { className, children, variant, ...restProps } = props
  return (
    <Typography className={className} variant={variant} {...restProps}>
      {children}
    </Typography>
  )
}

interface TypeElementProps {
  children: JSX.Element | string
  className?: string
}

export const Body1 = (props: TypeElementProps) =>
  typeMaker({ variant: "body1", children: props.children, className: props.className })

export const Body2 = (props: TypeElementProps) =>
  typeMaker({ variant: "body2", children: props.children, className: props.className })

export const Caption = (props: TypeElementProps) =>
  typeMaker({ variant: "caption", children: props.children, className: props.className })

export const Button = (props: TypeElementProps) =>
  typeMaker({ variant: "button", children: props.children, className: props.className })

export const Sub1 = (props: TypeElementProps) =>
  typeMaker({ variant: "subtitle1", children: props.children, className: props.className })

export const Sub2 = (props: TypeElementProps) =>
  typeMaker({ variant: "subtitle2", children: props.children, className: props.className })

export const Over = (props: TypeElementProps) =>
  typeMaker({ variant: "overline", children: props.children, className: props.className })

export const H1 = (props: TypeElementProps) =>
  typeMaker({ variant: "h1", children: props.children, className: props.className })

export const H2 = (props: TypeElementProps) =>
  typeMaker({ variant: "h2", children: props.children, className: props.className })

export const H3 = (props: TypeElementProps) =>
  typeMaker({ variant: "h3", children: props.children, className: props.className })

export const H4 = (props: TypeElementProps) =>
  typeMaker({ variant: "h4", children: props.children, className: props.className })

export const H5 = (props: TypeElementProps) =>
  typeMaker({ variant: "h5", children: props.children, className: props.className })

export const H6 = (props: TypeElementProps) =>
  typeMaker({ variant: "h6", children: props.children, className: props.className })
