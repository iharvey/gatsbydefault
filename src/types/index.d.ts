declare module "JssProvider" {
  import * as React from "react"
  import { GenerateClassName } from "jss"
  import { SheetsRegistry } from "react-jss/lib/jss"

  interface JssProviderProps {
    registry: SheetsRegistry
    generateClassName: GenerateClassName
    foo: string
  }
  const JssProvider: React.ComponentType<JssProviderProps>
  export default JssProvider
}
