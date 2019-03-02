import { IDataItem } from "src/interface/iDataItem";

export async function fetchData(condition: any): Promise<IDataItem[]> {
  return [{ id: 1, name: "11" }, { id: 2, name: "22" }];
}
