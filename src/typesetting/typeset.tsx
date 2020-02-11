import Typography, { TypographyProps } from "@material-ui/core/Typography"
import * as React from "react"

const typeMaker: React.FC<TypographyProps> = (props) => {
  const { className, children, variant, ...restProps } = props
  return (
    <Typography className={className} variant={variant} {...restProps}>
      {children}
    </Typography>
  )
}

export const Body1 = (props: TypographyProps) => typeMaker({ variant: "body1", ...props })

export const Body2 = (props: TypographyProps) => typeMaker({ variant: "body2", ...props })

export const Caption = (props: TypographyProps) => typeMaker({ variant: "caption", ...props })

export const Button = (props: TypographyProps) => typeMaker({ variant: "button", ...props })

export const Sub1 = (props: TypographyProps) => typeMaker({ variant: "subtitle1", ...props })

export const Sub2 = (props: TypographyProps) => typeMaker({ variant: "subtitle2", ...props })

export const Over = (props: TypographyProps) => typeMaker({ variant: "overline", ...props })

export const H1 = (props: TypographyProps) => typeMaker({ variant: "h1", ...props })

export const H2 = (props: TypographyProps) => typeMaker({ variant: "h2", ...props })

export const H3 = (props: TypographyProps) => typeMaker({ variant: "h3", ...props })

export const H4 = (props: TypographyProps) => typeMaker({ variant: "h4", ...props })

export const H5 = (props: TypographyProps) => typeMaker({ variant: "h5", ...props })

export const H6 = (props: TypographyProps) => typeMaker({ variant: "h6", ...props })
