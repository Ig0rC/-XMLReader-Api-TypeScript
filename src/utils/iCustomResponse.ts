type GenericObject = { [key: string]: unknown };

export interface iCustomResponse<T = string | string[] | GenericObject> {
  error?: string;
  statusCode: number;
  data?: T[];
}
