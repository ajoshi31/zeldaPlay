import { Inject, Injectable, Scope } from '@nestjs/common';
import { from, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Database } from 'sqlite3';

import { DATABASE_FEATURE } from 'apps/api/src/app/database/database.constants';
import {
  DatabaseFeatureOptions,
  DatabaseInterface,
  InsertParams,
  QueryParams,
  UpdateManyParams,
  UpdateParams,
} from 'apps/api/src/app/database/interfaces/database.interface';

@Injectable({
  scope: Scope.TRANSIENT,
})
export class DatabaseTestService<T> implements DatabaseInterface<T> {
  private pool: Database;

  tableName: string;

  constructor(
    @Inject(DATABASE_FEATURE)
    readonly feature: DatabaseFeatureOptions,
  ) {
    this.tableName = feature.tableName;
    this.pool = new Database(':memory:');
  }

  private sqLiteQuery(query: string, params: any[]): Promise<T[]> {
    return new Promise<T[]>((resolve, reject) => {
      this.pool.all(query, params, (err: Error, rows: T[]) => {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    });
  }

  private runQuery(query: string, params: any[]): Observable<T[]> {
    return from(this.sqLiteQuery(query, params)).pipe(
      catchError(() => {
        return of([]);
      }),
    );
  }

  query(params: QueryParams): Observable<T[]> {
    const query =
      'SELECT ' +
      params.query +
      ' ' +
      this.tableName +
      ' WHERE ' +
      params.where;
    return this.runQuery(query, params.variables);
  }

  insert(params: InsertParams): Observable<T[]> {
    const query =
      'INSERT INTO ' +
      this.tableName +
      ' (' +
      params.query +
      ') VALUES (' +
      params.where +
      ') RETURNING id;';
    return this.runQuery(query, params.variables);
  }

  // tslint:disable-next-line: no-identical-functions
  update(params: UpdateParams): Observable<T[]> {
    const query =
      'UPDATE ' +
      this.tableName +
      ' SET ' +
      params.query +
      ' WHERE ' +
      params.where +
      ' RETURNING id;';
    return this.runQuery(query, params.variables);
  }

  updateMany(params: UpdateManyParams): Observable<T[]> {
    const query =
      'UPDATE ' +
      this.tableName +
      ' AS ' +
      params.tableAlias +
      ' SET ' +
      params.query +
      ' FROM ' +
      params.tempTable +
      ' WHERE ' +
      params.where +
      ';';
    return this.runQuery(query, params.variables);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  delete(params: QueryParams): Observable<T[]> {
    return of([]);
  }
}
