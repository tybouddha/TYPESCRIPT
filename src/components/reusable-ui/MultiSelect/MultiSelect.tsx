import { ComponentProps } from "react";
import Select from "react-select";

type MultiSelectProps = ComponentProps<Select>;

export default function MultiSelect(props: MultiSelectProps) {
  return <Select {...props} />;
}
