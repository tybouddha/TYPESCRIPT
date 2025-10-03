import { ComponentProps } from "react"
import Select from "react-select"

type MultiSelectProps<T> = ComponentProps<typeof Select<T, boolean>>

export default function MultiSelect<T>(props: MultiSelectProps<T>) {
  return <Select {...props} />
}
