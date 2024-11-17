import { Label } from "@radix-ui/react-label";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Item, Select } from "@radix-ui/react-select";
import { SelectTrigger } from "../ui/select";

const type = {
  INPUT: "input",
  SELECT: "slect",
  TEXTAREA: "textarea",
};

const CommonForm = ({
  formData,
  setFormData,
  buttonText,
  formControl,
  onSubmit,
}) => {
  const renderInputsByComponentType = (getControlItem) => {
    let element = null;
    const value = formData[getControlItem.name] || "";

    switch (getControlItem.componentType) {
      case type.INPUT:
        element = (
          <Input
            type={getControlItem.type}
            placeholder={getControlItem.placeholder}
            name={getControlItem.name}
            value={value}
            onChange={(e) => {
              setFormData({
                ...formData,
                [getControlItem.name]: e.target.value,
              });
            }}
          />
        );
        break;
      case type.SELECT:
        element = (
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControlItem.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {getControlItem?.options.map((item) => (
                <SelectItem value={item?.label} key={item.id}>
                  {item?.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case type.TEXTAREA:
        element = (
          <Input
            type={getControlItem.type}
            placeholder={getControlItem.placeholder}
            name={getControlItem.name}
            value={value}
            onChange={(e) => {
              setFormData({
                ...formData,
                [getControlItem.name]: e.target.value,
              });
            }}
          />
        );

      default:
        element = (
          <Input
            type={getControlItem.type}
            placeholder={getControlItem.placeholder}
            name={getControlItem.name}
          />
        );
        break;
    }

    return element;
  };

  return (
    <form className="w-full space-y-4" onSubmit={onSubmit}>
      {formControl.map((controlItem) => (
        <div className="" key={controlItem.name}>
          <Label className="font-semibold">{controlItem.label}</Label>
          {renderInputsByComponentType(controlItem)}
        </div>
      ))}

      <Button className="w-full bg-blue-500 hover:bg-blue-900">
        {buttonText || "submit"}
      </Button>
    </form>
  );
};

export default CommonForm;
