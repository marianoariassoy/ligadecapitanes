import { FieldError } from "react-hook-form";

type ErrorProps = {
  error?: FieldError;
};

const Error = ({ error }: ErrorProps) => {
  if (!error) return null;

  return (
    <div className="text-sm mb-2">
      <span className="font-medium">{error.message} 👆🏻</span>
    </div>
  );
};

export default Error;
