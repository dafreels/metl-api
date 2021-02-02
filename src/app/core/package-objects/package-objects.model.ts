import {Project} from "../../shared/models/users.models";

export interface PackageObjectsResponse {
  'package-objects': PackageObject[];
}

export interface PackageObject {
  id: string;
  project: Project;
  schema: string;
  template: string;
}

export interface PackageObjectResponse {
  pkgObjs: PackageObject[];
}
