// Tipos para las entidades de la base de datos

export interface Relation {
  id: number;
  name: string;
  description?: string;
}

export interface Attribute {
  id: number;
  name: string;
  relation_id: number;
}

export interface FdSet {
  id: number;
  name?: string;
  relation_id: number;
}

export interface FunctionalDependency {
  id: number;
  fd_set_id: number;
}

export interface DependencyLeft {
  dependency_id: number;
  attribute_id: number;
}

export interface DependencyRight {
  dependency_id: number;
  attribute_id: number;
}

// Tipos extendidos para manejar datos compuestos
export interface FullFunctionalDependency {
  id: number;
  fd_set_id: number;
  lhs: Attribute[];
  rhs: Attribute[];
}

export interface FullFdSet {
  id: number;
  name?: string;
  relation_id: number;
  dependencies: FullFunctionalDependency[];
}

export interface FullRelation {
  id: number;
  name: string;
  description?: string;
  attributes: Attribute[];
  fdSets: FullFdSet[];
}
