import React from "react";
import formattedDateTime from "@/components/FormattedDateTime";
import { cn, formatDateTime } from "@/lib/utils";

export const FormattedDateTime = ({
  date,
  className,
}: {
  date: string;
  className?: string;
}) => {
  return (
    <p className={cn("body-1 text-light-100", className)}>
      {formatDateTime(date)}
    </p>
  );
};
export default FormattedDateTime;
