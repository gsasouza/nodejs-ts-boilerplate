export interface ErrorTypes {
  MongoError: Function;
  NotFound: Function;
  [key: string]: Function;
}
