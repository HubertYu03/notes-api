// Creating our error types
export interface NotFoundError {
  type: "NotFoundError";
  message: string;
  resource: string;
  id?: string | undefined;
}

export interface ValidationError {
  type: "ValidationError";
  message: string;
}

// Error type validation helper functions
export const isNotFoundError = (err: any): err is NotFoundError => {
  return err?.type === "NotFoundError";
};

export const isValidationError = (err: any): err is ValidationError => {
  return err?.type === "ValidationError";
};

// Factory function to create new error instances
export const createNotFoundError = (
  resource: string,
  id?: string
): NotFoundError => {
  return {
    type: "NotFoundError",
    message: id
      ? `${resource} with id ${id} not found.`
      : `${resource} not found.`,
    resource: resource,
    id: id,
  };
};

export const createValidationError = (message: string): ValidationError => {
  return {
    type: "ValidationError",
    message: message,
  };
};
