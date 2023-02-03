import React from "react";
import { Box, DropZone, DropZoneProps, Label } from "@admin-bro/design-system";

const dropZoneForImport = (props) => {
  const { property, onChange } = props;

  const handleDropZoneChange: DropZoneProps["onChange"] = (files) => {
    onChange(property.name, files[0]);
  };

  return (
    <Box flex flexGrow={1} flexDirection="column">
      <Label>Импорт</Label>
      <DropZone onChange={handleDropZoneChange} />
    </Box>
  );
};

export default dropZoneForImport;
