import { ID } from "./graphqlTypes";

export type MaxWidth = 'lg' | 'md' | 'sm' | 'xl' | 'xs' | 'false';

export interface IQuery{
  name:string;
  variables:{
    [key:string]:any;
  }
}

export interface IPageSchema{
  layout?:Array<any>,
  auths?:string[],
  query?:string, 
}

export interface IRxPage{
  id:ID,
  rxSlug?:string,
  name?:string, 
  maxWidth?: MaxWidth;
  inTabIndex?:boolean;
  width?:number;
  schema?:IPageSchema,
}