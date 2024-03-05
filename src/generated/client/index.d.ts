
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Otp
 * 
 */
export type Otp = $Result.DefaultSelection<Prisma.$OtpPayload>
/**
 * Model Interest
 * 
 */
export type Interest = $Result.DefaultSelection<Prisma.$InterestPayload>
/**
 * Model Roles
 * 
 */
export type Roles = $Result.DefaultSelection<Prisma.$RolesPayload>
/**
 * Model ActivityTypes
 * 
 */
export type ActivityTypes = $Result.DefaultSelection<Prisma.$ActivityTypesPayload>
/**
 * Model Activities
 * 
 */
export type Activities = $Result.DefaultSelection<Prisma.$ActivitiesPayload>
/**
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.otp`: Exposes CRUD operations for the **Otp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Otps
    * const otps = await prisma.otp.findMany()
    * ```
    */
  get otp(): Prisma.OtpDelegate<ExtArgs>;

  /**
   * `prisma.interest`: Exposes CRUD operations for the **Interest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interests
    * const interests = await prisma.interest.findMany()
    * ```
    */
  get interest(): Prisma.InterestDelegate<ExtArgs>;

  /**
   * `prisma.roles`: Exposes CRUD operations for the **Roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.RolesDelegate<ExtArgs>;

  /**
   * `prisma.activityTypes`: Exposes CRUD operations for the **ActivityTypes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityTypes
    * const activityTypes = await prisma.activityTypes.findMany()
    * ```
    */
  get activityTypes(): Prisma.ActivityTypesDelegate<ExtArgs>;

  /**
   * `prisma.activities`: Exposes CRUD operations for the **Activities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activities.findMany()
    * ```
    */
  get activities(): Prisma.ActivitiesDelegate<ExtArgs>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.7.0
   * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Otp: 'Otp',
    Interest: 'Interest',
    Roles: 'Roles',
    ActivityTypes: 'ActivityTypes',
    Activities: 'Activities',
    Categories: 'Categories'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'otp' | 'interest' | 'roles' | 'activityTypes' | 'activities' | 'categories'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Otp: {
        payload: Prisma.$OtpPayload<ExtArgs>
        fields: Prisma.OtpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findFirst: {
            args: Prisma.OtpFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findMany: {
            args: Prisma.OtpFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          create: {
            args: Prisma.OtpCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          createMany: {
            args: Prisma.OtpCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OtpDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          update: {
            args: Prisma.OtpUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          deleteMany: {
            args: Prisma.OtpDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OtpUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OtpUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          aggregate: {
            args: Prisma.OtpAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOtp>
          }
          groupBy: {
            args: Prisma.OtpGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpCountArgs<ExtArgs>,
            result: $Utils.Optional<OtpCountAggregateOutputType> | number
          }
        }
      }
      Interest: {
        payload: Prisma.$InterestPayload<ExtArgs>
        fields: Prisma.InterestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InterestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InterestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InterestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          findFirst: {
            args: Prisma.InterestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InterestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InterestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          findMany: {
            args: Prisma.InterestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>[]
          }
          create: {
            args: Prisma.InterestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          createMany: {
            args: Prisma.InterestCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.InterestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          update: {
            args: Prisma.InterestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          deleteMany: {
            args: Prisma.InterestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.InterestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.InterestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InterestPayload>
          }
          aggregate: {
            args: Prisma.InterestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInterest>
          }
          groupBy: {
            args: Prisma.InterestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InterestGroupByOutputType>[]
          }
          count: {
            args: Prisma.InterestCountArgs<ExtArgs>,
            result: $Utils.Optional<InterestCountAggregateOutputType> | number
          }
        }
      }
      Roles: {
        payload: Prisma.$RolesPayload<ExtArgs>
        fields: Prisma.RolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findFirst: {
            args: Prisma.RolesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          findMany: {
            args: Prisma.RolesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>[]
          }
          create: {
            args: Prisma.RolesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          createMany: {
            args: Prisma.RolesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RolesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          update: {
            args: Prisma.RolesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          deleteMany: {
            args: Prisma.RolesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RolesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RolesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.RolesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolesCountArgs<ExtArgs>,
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      ActivityTypes: {
        payload: Prisma.$ActivityTypesPayload<ExtArgs>
        fields: Prisma.ActivityTypesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityTypesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityTypesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityTypesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityTypesPayload>
          }
          findFirst: {
            args: Prisma.ActivityTypesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityTypesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityTypesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityTypesPayload>
          }
          findMany: {
            args: Prisma.ActivityTypesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityTypesPayload>[]
          }
          create: {
            args: Prisma.ActivityTypesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityTypesPayload>
          }
          createMany: {
            args: Prisma.ActivityTypesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ActivityTypesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityTypesPayload>
          }
          update: {
            args: Prisma.ActivityTypesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityTypesPayload>
          }
          deleteMany: {
            args: Prisma.ActivityTypesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityTypesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ActivityTypesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivityTypesPayload>
          }
          aggregate: {
            args: Prisma.ActivityTypesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateActivityTypes>
          }
          groupBy: {
            args: Prisma.ActivityTypesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ActivityTypesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityTypesCountArgs<ExtArgs>,
            result: $Utils.Optional<ActivityTypesCountAggregateOutputType> | number
          }
        }
      }
      Activities: {
        payload: Prisma.$ActivitiesPayload<ExtArgs>
        fields: Prisma.ActivitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivitiesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivitiesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivitiesPayload>
          }
          findFirst: {
            args: Prisma.ActivitiesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivitiesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivitiesPayload>
          }
          findMany: {
            args: Prisma.ActivitiesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivitiesPayload>[]
          }
          create: {
            args: Prisma.ActivitiesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivitiesPayload>
          }
          createMany: {
            args: Prisma.ActivitiesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ActivitiesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivitiesPayload>
          }
          update: {
            args: Prisma.ActivitiesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivitiesPayload>
          }
          deleteMany: {
            args: Prisma.ActivitiesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ActivitiesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ActivitiesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActivitiesPayload>
          }
          aggregate: {
            args: Prisma.ActivitiesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateActivities>
          }
          groupBy: {
            args: Prisma.ActivitiesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ActivitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivitiesCountArgs<ExtArgs>,
            result: $Utils.Optional<ActivitiesCountAggregateOutputType> | number
          }
        }
      }
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    user: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | RolesCountOutputTypeCountUserArgs
  }

  // Custom InputTypes

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }



  /**
   * Count Type ActivitiesCountOutputType
   */

  export type ActivitiesCountOutputType = {
    categories: number
  }

  export type ActivitiesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | ActivitiesCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes

  /**
   * ActivitiesCountOutputType without action
   */
  export type ActivitiesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivitiesCountOutputType
     */
    select?: ActivitiesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ActivitiesCountOutputType without action
   */
  export type ActivitiesCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    type: string | null
    fullname: string | null
    phoneNumber: string | null
    profilePic: string | null
    roleId: number | null
    dob: Date | null
    gender: string | null
    aboutMe: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    type: string | null
    fullname: string | null
    phoneNumber: string | null
    profilePic: string | null
    roleId: number | null
    dob: Date | null
    gender: string | null
    aboutMe: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    type: number
    fullname: number
    interests: number
    phoneNumber: number
    profilePic: number
    roleId: number
    dob: number
    gender: number
    aboutMe: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    type?: true
    fullname?: true
    phoneNumber?: true
    profilePic?: true
    roleId?: true
    dob?: true
    gender?: true
    aboutMe?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    type?: true
    fullname?: true
    phoneNumber?: true
    profilePic?: true
    roleId?: true
    dob?: true
    gender?: true
    aboutMe?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    type?: true
    fullname?: true
    interests?: true
    phoneNumber?: true
    profilePic?: true
    roleId?: true
    dob?: true
    gender?: true
    aboutMe?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string | null
    type: string | null
    fullname: string | null
    interests: JsonValue | null
    phoneNumber: string | null
    profilePic: string | null
    roleId: number
    dob: Date | null
    gender: string | null
    aboutMe: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    type?: boolean
    fullname?: boolean
    interests?: boolean
    phoneNumber?: boolean
    profilePic?: boolean
    roleId?: boolean
    dob?: boolean
    gender?: boolean
    aboutMe?: boolean
    role?: boolean | RolesDefaultArgs<ExtArgs>
    otp?: boolean | User$otpArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    type?: boolean
    fullname?: boolean
    interests?: boolean
    phoneNumber?: boolean
    profilePic?: boolean
    roleId?: boolean
    dob?: boolean
    gender?: boolean
    aboutMe?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RolesDefaultArgs<ExtArgs>
    otp?: boolean | User$otpArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolesPayload<ExtArgs>
      otp: Prisma.$OtpPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string | null
      type: string | null
      fullname: string | null
      interests: Prisma.JsonValue | null
      phoneNumber: string | null
      profilePic: string | null
      roleId: number
      dob: Date | null
      gender: string | null
      aboutMe: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    role<T extends RolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolesDefaultArgs<ExtArgs>>): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    otp<T extends User$otpArgs<ExtArgs> = {}>(args?: Subset<T, User$otpArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly type: FieldRef<"User", 'String'>
    readonly fullname: FieldRef<"User", 'String'>
    readonly interests: FieldRef<"User", 'Json'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly profilePic: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'Int'>
    readonly dob: FieldRef<"User", 'DateTime'>
    readonly gender: FieldRef<"User", 'String'>
    readonly aboutMe: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.otp
   */
  export type User$otpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OtpInclude<ExtArgs> | null
    where?: OtpWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Otp
   */

  export type AggregateOtp = {
    _count: OtpCountAggregateOutputType | null
    _avg: OtpAvgAggregateOutputType | null
    _sum: OtpSumAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  export type OtpAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    otp: number | null
  }

  export type OtpSumAggregateOutputType = {
    id: number | null
    userId: number | null
    otp: number | null
  }

  export type OtpMinAggregateOutputType = {
    id: number | null
    userId: number | null
    otp: number | null
    otpExpiry: Date | null
    used: boolean | null
  }

  export type OtpMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    otp: number | null
    otpExpiry: Date | null
    used: boolean | null
  }

  export type OtpCountAggregateOutputType = {
    id: number
    userId: number
    otp: number
    otpExpiry: number
    used: number
    _all: number
  }


  export type OtpAvgAggregateInputType = {
    id?: true
    userId?: true
    otp?: true
  }

  export type OtpSumAggregateInputType = {
    id?: true
    userId?: true
    otp?: true
  }

  export type OtpMinAggregateInputType = {
    id?: true
    userId?: true
    otp?: true
    otpExpiry?: true
    used?: true
  }

  export type OtpMaxAggregateInputType = {
    id?: true
    userId?: true
    otp?: true
    otpExpiry?: true
    used?: true
  }

  export type OtpCountAggregateInputType = {
    id?: true
    userId?: true
    otp?: true
    otpExpiry?: true
    used?: true
    _all?: true
  }

  export type OtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otp to aggregate.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Otps
    **/
    _count?: true | OtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OtpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OtpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpMaxAggregateInputType
  }

  export type GetOtpAggregateType<T extends OtpAggregateArgs> = {
        [P in keyof T & keyof AggregateOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtp[P]>
      : GetScalarType<T[P], AggregateOtp[P]>
  }




  export type OtpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpWhereInput
    orderBy?: OtpOrderByWithAggregationInput | OtpOrderByWithAggregationInput[]
    by: OtpScalarFieldEnum[] | OtpScalarFieldEnum
    having?: OtpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpCountAggregateInputType | true
    _avg?: OtpAvgAggregateInputType
    _sum?: OtpSumAggregateInputType
    _min?: OtpMinAggregateInputType
    _max?: OtpMaxAggregateInputType
  }

  export type OtpGroupByOutputType = {
    id: number
    userId: number
    otp: number | null
    otpExpiry: Date | null
    used: boolean
    _count: OtpCountAggregateOutputType | null
    _avg: OtpAvgAggregateOutputType | null
    _sum: OtpSumAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  type GetOtpGroupByPayload<T extends OtpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpGroupByOutputType[P]>
            : GetScalarType<T[P], OtpGroupByOutputType[P]>
        }
      >
    >


  export type OtpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    otp?: boolean
    otpExpiry?: boolean
    used?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectScalar = {
    id?: boolean
    userId?: boolean
    otp?: boolean
    otpExpiry?: boolean
    used?: boolean
  }

  export type OtpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $OtpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Otp"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      otp: number | null
      otpExpiry: Date | null
      used: boolean
    }, ExtArgs["result"]["otp"]>
    composites: {}
  }


  type OtpGetPayload<S extends boolean | null | undefined | OtpDefaultArgs> = $Result.GetResult<Prisma.$OtpPayload, S>

  type OtpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OtpFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: OtpCountAggregateInputType | true
    }

  export interface OtpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Otp'], meta: { name: 'Otp' } }
    /**
     * Find zero or one Otp that matches the filter.
     * @param {OtpFindUniqueArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OtpFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OtpFindUniqueArgs<ExtArgs>>
    ): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Otp that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OtpFindUniqueOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OtpFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OtpFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Otp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OtpFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OtpFindFirstArgs<ExtArgs>>
    ): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Otp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OtpFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OtpFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Otps
     * const otps = await prisma.otp.findMany()
     * 
     * // Get first 10 Otps
     * const otps = await prisma.otp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpWithIdOnly = await prisma.otp.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OtpFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OtpFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Otp.
     * @param {OtpCreateArgs} args - Arguments to create a Otp.
     * @example
     * // Create one Otp
     * const Otp = await prisma.otp.create({
     *   data: {
     *     // ... data to create a Otp
     *   }
     * })
     * 
    **/
    create<T extends OtpCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OtpCreateArgs<ExtArgs>>
    ): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Otps.
     *     @param {OtpCreateManyArgs} args - Arguments to create many Otps.
     *     @example
     *     // Create many Otps
     *     const otp = await prisma.otp.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OtpCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OtpCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Otp.
     * @param {OtpDeleteArgs} args - Arguments to delete one Otp.
     * @example
     * // Delete one Otp
     * const Otp = await prisma.otp.delete({
     *   where: {
     *     // ... filter to delete one Otp
     *   }
     * })
     * 
    **/
    delete<T extends OtpDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OtpDeleteArgs<ExtArgs>>
    ): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Otp.
     * @param {OtpUpdateArgs} args - Arguments to update one Otp.
     * @example
     * // Update one Otp
     * const otp = await prisma.otp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OtpUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OtpUpdateArgs<ExtArgs>>
    ): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Otps.
     * @param {OtpDeleteManyArgs} args - Arguments to filter Otps to delete.
     * @example
     * // Delete a few Otps
     * const { count } = await prisma.otp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OtpDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OtpDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OtpUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OtpUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Otp.
     * @param {OtpUpsertArgs} args - Arguments to update or create a Otp.
     * @example
     * // Update or create a Otp
     * const otp = await prisma.otp.upsert({
     *   create: {
     *     // ... data to create a Otp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Otp we want to update
     *   }
     * })
    **/
    upsert<T extends OtpUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OtpUpsertArgs<ExtArgs>>
    ): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCountArgs} args - Arguments to filter Otps to count.
     * @example
     * // Count the number of Otps
     * const count = await prisma.otp.count({
     *   where: {
     *     // ... the filter for the Otps we want to count
     *   }
     * })
    **/
    count<T extends OtpCountArgs>(
      args?: Subset<T, OtpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OtpAggregateArgs>(args: Subset<T, OtpAggregateArgs>): Prisma.PrismaPromise<GetOtpAggregateType<T>>

    /**
     * Group by Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OtpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpGroupByArgs['orderBy'] }
        : { orderBy?: OtpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OtpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Otp model
   */
  readonly fields: OtpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Otp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Otp model
   */ 
  interface OtpFieldRefs {
    readonly id: FieldRef<"Otp", 'Int'>
    readonly userId: FieldRef<"Otp", 'Int'>
    readonly otp: FieldRef<"Otp", 'Int'>
    readonly otpExpiry: FieldRef<"Otp", 'DateTime'>
    readonly used: FieldRef<"Otp", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Otp findUnique
   */
  export type OtpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }


  /**
   * Otp findUniqueOrThrow
   */
  export type OtpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }


  /**
   * Otp findFirst
   */
  export type OtpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }


  /**
   * Otp findFirstOrThrow
   */
  export type OtpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }


  /**
   * Otp findMany
   */
  export type OtpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otps to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }


  /**
   * Otp create
   */
  export type OtpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * The data needed to create a Otp.
     */
    data: XOR<OtpCreateInput, OtpUncheckedCreateInput>
  }


  /**
   * Otp createMany
   */
  export type OtpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Otp update
   */
  export type OtpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * The data needed to update a Otp.
     */
    data: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
    /**
     * Choose, which Otp to update.
     */
    where: OtpWhereUniqueInput
  }


  /**
   * Otp updateMany
   */
  export type OtpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput
  }


  /**
   * Otp upsert
   */
  export type OtpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * The filter to search for the Otp to update in case it exists.
     */
    where: OtpWhereUniqueInput
    /**
     * In case the Otp found by the `where` argument doesn't exist, create a new Otp with this data.
     */
    create: XOR<OtpCreateInput, OtpUncheckedCreateInput>
    /**
     * In case the Otp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
  }


  /**
   * Otp delete
   */
  export type OtpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter which Otp to delete.
     */
    where: OtpWhereUniqueInput
  }


  /**
   * Otp deleteMany
   */
  export type OtpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otps to delete
     */
    where?: OtpWhereInput
  }


  /**
   * Otp without action
   */
  export type OtpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OtpInclude<ExtArgs> | null
  }



  /**
   * Model Interest
   */

  export type AggregateInterest = {
    _count: InterestCountAggregateOutputType | null
    _avg: InterestAvgAggregateOutputType | null
    _sum: InterestSumAggregateOutputType | null
    _min: InterestMinAggregateOutputType | null
    _max: InterestMaxAggregateOutputType | null
  }

  export type InterestAvgAggregateOutputType = {
    id: number | null
  }

  export type InterestSumAggregateOutputType = {
    id: number | null
  }

  export type InterestMinAggregateOutputType = {
    id: number | null
    interest: string | null
  }

  export type InterestMaxAggregateOutputType = {
    id: number | null
    interest: string | null
  }

  export type InterestCountAggregateOutputType = {
    id: number
    interest: number
    level: number
    _all: number
  }


  export type InterestAvgAggregateInputType = {
    id?: true
  }

  export type InterestSumAggregateInputType = {
    id?: true
  }

  export type InterestMinAggregateInputType = {
    id?: true
    interest?: true
  }

  export type InterestMaxAggregateInputType = {
    id?: true
    interest?: true
  }

  export type InterestCountAggregateInputType = {
    id?: true
    interest?: true
    level?: true
    _all?: true
  }

  export type InterestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interest to aggregate.
     */
    where?: InterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Interests
    **/
    _count?: true | InterestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InterestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InterestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterestMaxAggregateInputType
  }

  export type GetInterestAggregateType<T extends InterestAggregateArgs> = {
        [P in keyof T & keyof AggregateInterest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterest[P]>
      : GetScalarType<T[P], AggregateInterest[P]>
  }




  export type InterestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InterestWhereInput
    orderBy?: InterestOrderByWithAggregationInput | InterestOrderByWithAggregationInput[]
    by: InterestScalarFieldEnum[] | InterestScalarFieldEnum
    having?: InterestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterestCountAggregateInputType | true
    _avg?: InterestAvgAggregateInputType
    _sum?: InterestSumAggregateInputType
    _min?: InterestMinAggregateInputType
    _max?: InterestMaxAggregateInputType
  }

  export type InterestGroupByOutputType = {
    id: number
    interest: string
    level: JsonValue
    _count: InterestCountAggregateOutputType | null
    _avg: InterestAvgAggregateOutputType | null
    _sum: InterestSumAggregateOutputType | null
    _min: InterestMinAggregateOutputType | null
    _max: InterestMaxAggregateOutputType | null
  }

  type GetInterestGroupByPayload<T extends InterestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterestGroupByOutputType[P]>
            : GetScalarType<T[P], InterestGroupByOutputType[P]>
        }
      >
    >


  export type InterestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    interest?: boolean
    level?: boolean
  }, ExtArgs["result"]["interest"]>

  export type InterestSelectScalar = {
    id?: boolean
    interest?: boolean
    level?: boolean
  }


  export type $InterestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Interest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      interest: string
      level: Prisma.JsonValue
    }, ExtArgs["result"]["interest"]>
    composites: {}
  }


  type InterestGetPayload<S extends boolean | null | undefined | InterestDefaultArgs> = $Result.GetResult<Prisma.$InterestPayload, S>

  type InterestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InterestFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: InterestCountAggregateInputType | true
    }

  export interface InterestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Interest'], meta: { name: 'Interest' } }
    /**
     * Find zero or one Interest that matches the filter.
     * @param {InterestFindUniqueArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InterestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, InterestFindUniqueArgs<ExtArgs>>
    ): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Interest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InterestFindUniqueOrThrowArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InterestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InterestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Interest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestFindFirstArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InterestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, InterestFindFirstArgs<ExtArgs>>
    ): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Interest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestFindFirstOrThrowArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InterestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InterestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Interests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interests
     * const interests = await prisma.interest.findMany()
     * 
     * // Get first 10 Interests
     * const interests = await prisma.interest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interestWithIdOnly = await prisma.interest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InterestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InterestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Interest.
     * @param {InterestCreateArgs} args - Arguments to create a Interest.
     * @example
     * // Create one Interest
     * const Interest = await prisma.interest.create({
     *   data: {
     *     // ... data to create a Interest
     *   }
     * })
     * 
    **/
    create<T extends InterestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, InterestCreateArgs<ExtArgs>>
    ): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Interests.
     *     @param {InterestCreateManyArgs} args - Arguments to create many Interests.
     *     @example
     *     // Create many Interests
     *     const interest = await prisma.interest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InterestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InterestCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Interest.
     * @param {InterestDeleteArgs} args - Arguments to delete one Interest.
     * @example
     * // Delete one Interest
     * const Interest = await prisma.interest.delete({
     *   where: {
     *     // ... filter to delete one Interest
     *   }
     * })
     * 
    **/
    delete<T extends InterestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, InterestDeleteArgs<ExtArgs>>
    ): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Interest.
     * @param {InterestUpdateArgs} args - Arguments to update one Interest.
     * @example
     * // Update one Interest
     * const interest = await prisma.interest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InterestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, InterestUpdateArgs<ExtArgs>>
    ): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Interests.
     * @param {InterestDeleteManyArgs} args - Arguments to filter Interests to delete.
     * @example
     * // Delete a few Interests
     * const { count } = await prisma.interest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InterestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InterestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interests
     * const interest = await prisma.interest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InterestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, InterestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Interest.
     * @param {InterestUpsertArgs} args - Arguments to update or create a Interest.
     * @example
     * // Update or create a Interest
     * const interest = await prisma.interest.upsert({
     *   create: {
     *     // ... data to create a Interest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interest we want to update
     *   }
     * })
    **/
    upsert<T extends InterestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, InterestUpsertArgs<ExtArgs>>
    ): Prisma__InterestClient<$Result.GetResult<Prisma.$InterestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestCountArgs} args - Arguments to filter Interests to count.
     * @example
     * // Count the number of Interests
     * const count = await prisma.interest.count({
     *   where: {
     *     // ... the filter for the Interests we want to count
     *   }
     * })
    **/
    count<T extends InterestCountArgs>(
      args?: Subset<T, InterestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InterestAggregateArgs>(args: Subset<T, InterestAggregateArgs>): Prisma.PrismaPromise<GetInterestAggregateType<T>>

    /**
     * Group by Interest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InterestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InterestGroupByArgs['orderBy'] }
        : { orderBy?: InterestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InterestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Interest model
   */
  readonly fields: InterestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Interest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InterestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Interest model
   */ 
  interface InterestFieldRefs {
    readonly id: FieldRef<"Interest", 'Int'>
    readonly interest: FieldRef<"Interest", 'String'>
    readonly level: FieldRef<"Interest", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * Interest findUnique
   */
  export type InterestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Filter, which Interest to fetch.
     */
    where: InterestWhereUniqueInput
  }


  /**
   * Interest findUniqueOrThrow
   */
  export type InterestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Filter, which Interest to fetch.
     */
    where: InterestWhereUniqueInput
  }


  /**
   * Interest findFirst
   */
  export type InterestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Filter, which Interest to fetch.
     */
    where?: InterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interests.
     */
    cursor?: InterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interests.
     */
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }


  /**
   * Interest findFirstOrThrow
   */
  export type InterestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Filter, which Interest to fetch.
     */
    where?: InterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Interests.
     */
    cursor?: InterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Interests.
     */
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }


  /**
   * Interest findMany
   */
  export type InterestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Filter, which Interests to fetch.
     */
    where?: InterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Interests to fetch.
     */
    orderBy?: InterestOrderByWithRelationInput | InterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Interests.
     */
    cursor?: InterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Interests.
     */
    skip?: number
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }


  /**
   * Interest create
   */
  export type InterestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * The data needed to create a Interest.
     */
    data: XOR<InterestCreateInput, InterestUncheckedCreateInput>
  }


  /**
   * Interest createMany
   */
  export type InterestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Interests.
     */
    data: InterestCreateManyInput | InterestCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Interest update
   */
  export type InterestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * The data needed to update a Interest.
     */
    data: XOR<InterestUpdateInput, InterestUncheckedUpdateInput>
    /**
     * Choose, which Interest to update.
     */
    where: InterestWhereUniqueInput
  }


  /**
   * Interest updateMany
   */
  export type InterestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Interests.
     */
    data: XOR<InterestUpdateManyMutationInput, InterestUncheckedUpdateManyInput>
    /**
     * Filter which Interests to update
     */
    where?: InterestWhereInput
  }


  /**
   * Interest upsert
   */
  export type InterestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * The filter to search for the Interest to update in case it exists.
     */
    where: InterestWhereUniqueInput
    /**
     * In case the Interest found by the `where` argument doesn't exist, create a new Interest with this data.
     */
    create: XOR<InterestCreateInput, InterestUncheckedCreateInput>
    /**
     * In case the Interest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InterestUpdateInput, InterestUncheckedUpdateInput>
  }


  /**
   * Interest delete
   */
  export type InterestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
    /**
     * Filter which Interest to delete.
     */
    where: InterestWhereUniqueInput
  }


  /**
   * Interest deleteMany
   */
  export type InterestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Interests to delete
     */
    where?: InterestWhereInput
  }


  /**
   * Interest without action
   */
  export type InterestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Interest
     */
    select?: InterestSelect<ExtArgs> | null
  }



  /**
   * Model Roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesAvgAggregateOutputType = {
    id: number | null
  }

  export type RolesSumAggregateOutputType = {
    id: number | null
  }

  export type RolesMinAggregateOutputType = {
    id: number | null
    role: string | null
  }

  export type RolesMaxAggregateOutputType = {
    id: number | null
    role: string | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    role: number
    _all: number
  }


  export type RolesAvgAggregateInputType = {
    id?: true
  }

  export type RolesSumAggregateInputType = {
    id?: true
  }

  export type RolesMinAggregateInputType = {
    id?: true
    role?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    role?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    role?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to aggregate.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type RolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolesWhereInput
    orderBy?: RolesOrderByWithAggregationInput | RolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: RolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: number
    role: string
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends RolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type RolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    user?: boolean | Roles$userArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>

  export type RolesSelectScalar = {
    id?: boolean
    role?: boolean
  }

  export type RolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Roles$userArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Roles"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role: string
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }


  type RolesGetPayload<S extends boolean | null | undefined | RolesDefaultArgs> = $Result.GetResult<Prisma.$RolesPayload, S>

  type RolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RolesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: RolesCountAggregateInputType | true
    }

  export interface RolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Roles'], meta: { name: 'Roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {RolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RolesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RolesFindUniqueArgs<ExtArgs>>
    ): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Roles that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RolesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RolesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RolesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RolesFindFirstArgs<ExtArgs>>
    ): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RolesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RolesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RolesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RolesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Roles.
     * @param {RolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
    **/
    create<T extends RolesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RolesCreateArgs<ExtArgs>>
    ): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Roles.
     *     @param {RolesCreateManyArgs} args - Arguments to create many Roles.
     *     @example
     *     // Create many Roles
     *     const roles = await prisma.roles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RolesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RolesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Roles.
     * @param {RolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
    **/
    delete<T extends RolesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RolesDeleteArgs<ExtArgs>>
    ): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Roles.
     * @param {RolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RolesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RolesUpdateArgs<ExtArgs>>
    ): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {RolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RolesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RolesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RolesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RolesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roles.
     * @param {RolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
    **/
    upsert<T extends RolesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RolesUpsertArgs<ExtArgs>>
    ): Prisma__RolesClient<$Result.GetResult<Prisma.$RolesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RolesCountArgs>(
      args?: Subset<T, RolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolesGroupByArgs['orderBy'] }
        : { orderBy?: RolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Roles model
   */
  readonly fields: RolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends Roles$userArgs<ExtArgs> = {}>(args?: Subset<T, Roles$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Roles model
   */ 
  interface RolesFieldRefs {
    readonly id: FieldRef<"Roles", 'Int'>
    readonly role: FieldRef<"Roles", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Roles findUnique
   */
  export type RolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }


  /**
   * Roles findUniqueOrThrow
   */
  export type RolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where: RolesWhereUniqueInput
  }


  /**
   * Roles findFirst
   */
  export type RolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }


  /**
   * Roles findFirstOrThrow
   */
  export type RolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }


  /**
   * Roles findMany
   */
  export type RolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RolesOrderByWithRelationInput | RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }


  /**
   * Roles create
   */
  export type RolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to create a Roles.
     */
    data: XOR<RolesCreateInput, RolesUncheckedCreateInput>
  }


  /**
   * Roles createMany
   */
  export type RolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RolesCreateManyInput | RolesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Roles update
   */
  export type RolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The data needed to update a Roles.
     */
    data: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
    /**
     * Choose, which Roles to update.
     */
    where: RolesWhereUniqueInput
  }


  /**
   * Roles updateMany
   */
  export type RolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RolesUpdateManyMutationInput, RolesUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RolesWhereInput
  }


  /**
   * Roles upsert
   */
  export type RolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * The filter to search for the Roles to update in case it exists.
     */
    where: RolesWhereUniqueInput
    /**
     * In case the Roles found by the `where` argument doesn't exist, create a new Roles with this data.
     */
    create: XOR<RolesCreateInput, RolesUncheckedCreateInput>
    /**
     * In case the Roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolesUpdateInput, RolesUncheckedUpdateInput>
  }


  /**
   * Roles delete
   */
  export type RolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
    /**
     * Filter which Roles to delete.
     */
    where: RolesWhereUniqueInput
  }


  /**
   * Roles deleteMany
   */
  export type RolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RolesWhereInput
  }


  /**
   * Roles.user
   */
  export type Roles$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * Roles without action
   */
  export type RolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles
     */
    select?: RolesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RolesInclude<ExtArgs> | null
  }



  /**
   * Model ActivityTypes
   */

  export type AggregateActivityTypes = {
    _count: ActivityTypesCountAggregateOutputType | null
    _avg: ActivityTypesAvgAggregateOutputType | null
    _sum: ActivityTypesSumAggregateOutputType | null
    _min: ActivityTypesMinAggregateOutputType | null
    _max: ActivityTypesMaxAggregateOutputType | null
  }

  export type ActivityTypesAvgAggregateOutputType = {
    id: number | null
  }

  export type ActivityTypesSumAggregateOutputType = {
    id: number | null
  }

  export type ActivityTypesMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ActivityTypesMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type ActivityTypesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ActivityTypesAvgAggregateInputType = {
    id?: true
  }

  export type ActivityTypesSumAggregateInputType = {
    id?: true
  }

  export type ActivityTypesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ActivityTypesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ActivityTypesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ActivityTypesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityTypes to aggregate.
     */
    where?: ActivityTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityTypes to fetch.
     */
    orderBy?: ActivityTypesOrderByWithRelationInput | ActivityTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityTypes
    **/
    _count?: true | ActivityTypesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityTypesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivityTypesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityTypesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityTypesMaxAggregateInputType
  }

  export type GetActivityTypesAggregateType<T extends ActivityTypesAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityTypes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityTypes[P]>
      : GetScalarType<T[P], AggregateActivityTypes[P]>
  }




  export type ActivityTypesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityTypesWhereInput
    orderBy?: ActivityTypesOrderByWithAggregationInput | ActivityTypesOrderByWithAggregationInput[]
    by: ActivityTypesScalarFieldEnum[] | ActivityTypesScalarFieldEnum
    having?: ActivityTypesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityTypesCountAggregateInputType | true
    _avg?: ActivityTypesAvgAggregateInputType
    _sum?: ActivityTypesSumAggregateInputType
    _min?: ActivityTypesMinAggregateInputType
    _max?: ActivityTypesMaxAggregateInputType
  }

  export type ActivityTypesGroupByOutputType = {
    id: number
    name: string
    _count: ActivityTypesCountAggregateOutputType | null
    _avg: ActivityTypesAvgAggregateOutputType | null
    _sum: ActivityTypesSumAggregateOutputType | null
    _min: ActivityTypesMinAggregateOutputType | null
    _max: ActivityTypesMaxAggregateOutputType | null
  }

  type GetActivityTypesGroupByPayload<T extends ActivityTypesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityTypesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityTypesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityTypesGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityTypesGroupByOutputType[P]>
        }
      >
    >


  export type ActivityTypesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    activity?: boolean | ActivityTypes$activityArgs<ExtArgs>
  }, ExtArgs["result"]["activityTypes"]>

  export type ActivityTypesSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ActivityTypesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | ActivityTypes$activityArgs<ExtArgs>
  }


  export type $ActivityTypesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityTypes"
    objects: {
      activity: Prisma.$ActivitiesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["activityTypes"]>
    composites: {}
  }


  type ActivityTypesGetPayload<S extends boolean | null | undefined | ActivityTypesDefaultArgs> = $Result.GetResult<Prisma.$ActivityTypesPayload, S>

  type ActivityTypesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ActivityTypesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ActivityTypesCountAggregateInputType | true
    }

  export interface ActivityTypesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityTypes'], meta: { name: 'ActivityTypes' } }
    /**
     * Find zero or one ActivityTypes that matches the filter.
     * @param {ActivityTypesFindUniqueArgs} args - Arguments to find a ActivityTypes
     * @example
     * // Get one ActivityTypes
     * const activityTypes = await prisma.activityTypes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ActivityTypesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityTypesFindUniqueArgs<ExtArgs>>
    ): Prisma__ActivityTypesClient<$Result.GetResult<Prisma.$ActivityTypesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ActivityTypes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ActivityTypesFindUniqueOrThrowArgs} args - Arguments to find a ActivityTypes
     * @example
     * // Get one ActivityTypes
     * const activityTypes = await prisma.activityTypes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ActivityTypesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityTypesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ActivityTypesClient<$Result.GetResult<Prisma.$ActivityTypesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ActivityTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityTypesFindFirstArgs} args - Arguments to find a ActivityTypes
     * @example
     * // Get one ActivityTypes
     * const activityTypes = await prisma.activityTypes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ActivityTypesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityTypesFindFirstArgs<ExtArgs>>
    ): Prisma__ActivityTypesClient<$Result.GetResult<Prisma.$ActivityTypesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ActivityTypes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityTypesFindFirstOrThrowArgs} args - Arguments to find a ActivityTypes
     * @example
     * // Get one ActivityTypes
     * const activityTypes = await prisma.activityTypes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ActivityTypesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityTypesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ActivityTypesClient<$Result.GetResult<Prisma.$ActivityTypesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ActivityTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityTypesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityTypes
     * const activityTypes = await prisma.activityTypes.findMany()
     * 
     * // Get first 10 ActivityTypes
     * const activityTypes = await prisma.activityTypes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityTypesWithIdOnly = await prisma.activityTypes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ActivityTypesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityTypesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityTypesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ActivityTypes.
     * @param {ActivityTypesCreateArgs} args - Arguments to create a ActivityTypes.
     * @example
     * // Create one ActivityTypes
     * const ActivityTypes = await prisma.activityTypes.create({
     *   data: {
     *     // ... data to create a ActivityTypes
     *   }
     * })
     * 
    **/
    create<T extends ActivityTypesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityTypesCreateArgs<ExtArgs>>
    ): Prisma__ActivityTypesClient<$Result.GetResult<Prisma.$ActivityTypesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ActivityTypes.
     *     @param {ActivityTypesCreateManyArgs} args - Arguments to create many ActivityTypes.
     *     @example
     *     // Create many ActivityTypes
     *     const activityTypes = await prisma.activityTypes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ActivityTypesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityTypesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ActivityTypes.
     * @param {ActivityTypesDeleteArgs} args - Arguments to delete one ActivityTypes.
     * @example
     * // Delete one ActivityTypes
     * const ActivityTypes = await prisma.activityTypes.delete({
     *   where: {
     *     // ... filter to delete one ActivityTypes
     *   }
     * })
     * 
    **/
    delete<T extends ActivityTypesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityTypesDeleteArgs<ExtArgs>>
    ): Prisma__ActivityTypesClient<$Result.GetResult<Prisma.$ActivityTypesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ActivityTypes.
     * @param {ActivityTypesUpdateArgs} args - Arguments to update one ActivityTypes.
     * @example
     * // Update one ActivityTypes
     * const activityTypes = await prisma.activityTypes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ActivityTypesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityTypesUpdateArgs<ExtArgs>>
    ): Prisma__ActivityTypesClient<$Result.GetResult<Prisma.$ActivityTypesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ActivityTypes.
     * @param {ActivityTypesDeleteManyArgs} args - Arguments to filter ActivityTypes to delete.
     * @example
     * // Delete a few ActivityTypes
     * const { count } = await prisma.activityTypes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ActivityTypesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivityTypesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityTypesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityTypes
     * const activityTypes = await prisma.activityTypes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ActivityTypesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityTypesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ActivityTypes.
     * @param {ActivityTypesUpsertArgs} args - Arguments to update or create a ActivityTypes.
     * @example
     * // Update or create a ActivityTypes
     * const activityTypes = await prisma.activityTypes.upsert({
     *   create: {
     *     // ... data to create a ActivityTypes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityTypes we want to update
     *   }
     * })
    **/
    upsert<T extends ActivityTypesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ActivityTypesUpsertArgs<ExtArgs>>
    ): Prisma__ActivityTypesClient<$Result.GetResult<Prisma.$ActivityTypesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ActivityTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityTypesCountArgs} args - Arguments to filter ActivityTypes to count.
     * @example
     * // Count the number of ActivityTypes
     * const count = await prisma.activityTypes.count({
     *   where: {
     *     // ... the filter for the ActivityTypes we want to count
     *   }
     * })
    **/
    count<T extends ActivityTypesCountArgs>(
      args?: Subset<T, ActivityTypesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityTypesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityTypesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityTypesAggregateArgs>(args: Subset<T, ActivityTypesAggregateArgs>): Prisma.PrismaPromise<GetActivityTypesAggregateType<T>>

    /**
     * Group by ActivityTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityTypesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityTypesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityTypesGroupByArgs['orderBy'] }
        : { orderBy?: ActivityTypesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityTypesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityTypesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityTypes model
   */
  readonly fields: ActivityTypesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityTypes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityTypesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    activity<T extends ActivityTypes$activityArgs<ExtArgs> = {}>(args?: Subset<T, ActivityTypes$activityArgs<ExtArgs>>): Prisma__ActivitiesClient<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ActivityTypes model
   */ 
  interface ActivityTypesFieldRefs {
    readonly id: FieldRef<"ActivityTypes", 'Int'>
    readonly name: FieldRef<"ActivityTypes", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ActivityTypes findUnique
   */
  export type ActivityTypesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityTypes
     */
    select?: ActivityTypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityTypesInclude<ExtArgs> | null
    /**
     * Filter, which ActivityTypes to fetch.
     */
    where: ActivityTypesWhereUniqueInput
  }


  /**
   * ActivityTypes findUniqueOrThrow
   */
  export type ActivityTypesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityTypes
     */
    select?: ActivityTypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityTypesInclude<ExtArgs> | null
    /**
     * Filter, which ActivityTypes to fetch.
     */
    where: ActivityTypesWhereUniqueInput
  }


  /**
   * ActivityTypes findFirst
   */
  export type ActivityTypesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityTypes
     */
    select?: ActivityTypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityTypesInclude<ExtArgs> | null
    /**
     * Filter, which ActivityTypes to fetch.
     */
    where?: ActivityTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityTypes to fetch.
     */
    orderBy?: ActivityTypesOrderByWithRelationInput | ActivityTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityTypes.
     */
    cursor?: ActivityTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityTypes.
     */
    distinct?: ActivityTypesScalarFieldEnum | ActivityTypesScalarFieldEnum[]
  }


  /**
   * ActivityTypes findFirstOrThrow
   */
  export type ActivityTypesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityTypes
     */
    select?: ActivityTypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityTypesInclude<ExtArgs> | null
    /**
     * Filter, which ActivityTypes to fetch.
     */
    where?: ActivityTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityTypes to fetch.
     */
    orderBy?: ActivityTypesOrderByWithRelationInput | ActivityTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityTypes.
     */
    cursor?: ActivityTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityTypes.
     */
    distinct?: ActivityTypesScalarFieldEnum | ActivityTypesScalarFieldEnum[]
  }


  /**
   * ActivityTypes findMany
   */
  export type ActivityTypesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityTypes
     */
    select?: ActivityTypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityTypesInclude<ExtArgs> | null
    /**
     * Filter, which ActivityTypes to fetch.
     */
    where?: ActivityTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityTypes to fetch.
     */
    orderBy?: ActivityTypesOrderByWithRelationInput | ActivityTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityTypes.
     */
    cursor?: ActivityTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityTypes.
     */
    skip?: number
    distinct?: ActivityTypesScalarFieldEnum | ActivityTypesScalarFieldEnum[]
  }


  /**
   * ActivityTypes create
   */
  export type ActivityTypesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityTypes
     */
    select?: ActivityTypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityTypesInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityTypes.
     */
    data: XOR<ActivityTypesCreateInput, ActivityTypesUncheckedCreateInput>
  }


  /**
   * ActivityTypes createMany
   */
  export type ActivityTypesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityTypes.
     */
    data: ActivityTypesCreateManyInput | ActivityTypesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ActivityTypes update
   */
  export type ActivityTypesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityTypes
     */
    select?: ActivityTypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityTypesInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityTypes.
     */
    data: XOR<ActivityTypesUpdateInput, ActivityTypesUncheckedUpdateInput>
    /**
     * Choose, which ActivityTypes to update.
     */
    where: ActivityTypesWhereUniqueInput
  }


  /**
   * ActivityTypes updateMany
   */
  export type ActivityTypesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityTypes.
     */
    data: XOR<ActivityTypesUpdateManyMutationInput, ActivityTypesUncheckedUpdateManyInput>
    /**
     * Filter which ActivityTypes to update
     */
    where?: ActivityTypesWhereInput
  }


  /**
   * ActivityTypes upsert
   */
  export type ActivityTypesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityTypes
     */
    select?: ActivityTypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityTypesInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityTypes to update in case it exists.
     */
    where: ActivityTypesWhereUniqueInput
    /**
     * In case the ActivityTypes found by the `where` argument doesn't exist, create a new ActivityTypes with this data.
     */
    create: XOR<ActivityTypesCreateInput, ActivityTypesUncheckedCreateInput>
    /**
     * In case the ActivityTypes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityTypesUpdateInput, ActivityTypesUncheckedUpdateInput>
  }


  /**
   * ActivityTypes delete
   */
  export type ActivityTypesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityTypes
     */
    select?: ActivityTypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityTypesInclude<ExtArgs> | null
    /**
     * Filter which ActivityTypes to delete.
     */
    where: ActivityTypesWhereUniqueInput
  }


  /**
   * ActivityTypes deleteMany
   */
  export type ActivityTypesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityTypes to delete
     */
    where?: ActivityTypesWhereInput
  }


  /**
   * ActivityTypes.activity
   */
  export type ActivityTypes$activityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivitiesInclude<ExtArgs> | null
    where?: ActivitiesWhereInput
  }


  /**
   * ActivityTypes without action
   */
  export type ActivityTypesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityTypes
     */
    select?: ActivityTypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivityTypesInclude<ExtArgs> | null
  }



  /**
   * Model Activities
   */

  export type AggregateActivities = {
    _count: ActivitiesCountAggregateOutputType | null
    _avg: ActivitiesAvgAggregateOutputType | null
    _sum: ActivitiesSumAggregateOutputType | null
    _min: ActivitiesMinAggregateOutputType | null
    _max: ActivitiesMaxAggregateOutputType | null
  }

  export type ActivitiesAvgAggregateOutputType = {
    id: number | null
    typeId: number | null
  }

  export type ActivitiesSumAggregateOutputType = {
    id: number | null
    typeId: number | null
  }

  export type ActivitiesMinAggregateOutputType = {
    id: number | null
    name: string | null
    typeId: number | null
  }

  export type ActivitiesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    typeId: number | null
  }

  export type ActivitiesCountAggregateOutputType = {
    id: number
    name: number
    typeId: number
    _all: number
  }


  export type ActivitiesAvgAggregateInputType = {
    id?: true
    typeId?: true
  }

  export type ActivitiesSumAggregateInputType = {
    id?: true
    typeId?: true
  }

  export type ActivitiesMinAggregateInputType = {
    id?: true
    name?: true
    typeId?: true
  }

  export type ActivitiesMaxAggregateInputType = {
    id?: true
    name?: true
    typeId?: true
  }

  export type ActivitiesCountAggregateInputType = {
    id?: true
    name?: true
    typeId?: true
    _all?: true
  }

  export type ActivitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to aggregate.
     */
    where?: ActivitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivitiesOrderByWithRelationInput | ActivitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivitiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivitiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivitiesMaxAggregateInputType
  }

  export type GetActivitiesAggregateType<T extends ActivitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateActivities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivities[P]>
      : GetScalarType<T[P], AggregateActivities[P]>
  }




  export type ActivitiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivitiesWhereInput
    orderBy?: ActivitiesOrderByWithAggregationInput | ActivitiesOrderByWithAggregationInput[]
    by: ActivitiesScalarFieldEnum[] | ActivitiesScalarFieldEnum
    having?: ActivitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivitiesCountAggregateInputType | true
    _avg?: ActivitiesAvgAggregateInputType
    _sum?: ActivitiesSumAggregateInputType
    _min?: ActivitiesMinAggregateInputType
    _max?: ActivitiesMaxAggregateInputType
  }

  export type ActivitiesGroupByOutputType = {
    id: number
    name: string
    typeId: number
    _count: ActivitiesCountAggregateOutputType | null
    _avg: ActivitiesAvgAggregateOutputType | null
    _sum: ActivitiesSumAggregateOutputType | null
    _min: ActivitiesMinAggregateOutputType | null
    _max: ActivitiesMaxAggregateOutputType | null
  }

  type GetActivitiesGroupByPayload<T extends ActivitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivitiesGroupByOutputType[P]>
            : GetScalarType<T[P], ActivitiesGroupByOutputType[P]>
        }
      >
    >


  export type ActivitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    typeId?: boolean
    type?: boolean | ActivityTypesDefaultArgs<ExtArgs>
    categories?: boolean | Activities$categoriesArgs<ExtArgs>
    _count?: boolean | ActivitiesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activities"]>

  export type ActivitiesSelectScalar = {
    id?: boolean
    name?: boolean
    typeId?: boolean
  }

  export type ActivitiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | ActivityTypesDefaultArgs<ExtArgs>
    categories?: boolean | Activities$categoriesArgs<ExtArgs>
    _count?: boolean | ActivitiesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ActivitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activities"
    objects: {
      type: Prisma.$ActivityTypesPayload<ExtArgs>
      categories: Prisma.$CategoriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      typeId: number
    }, ExtArgs["result"]["activities"]>
    composites: {}
  }


  type ActivitiesGetPayload<S extends boolean | null | undefined | ActivitiesDefaultArgs> = $Result.GetResult<Prisma.$ActivitiesPayload, S>

  type ActivitiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ActivitiesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ActivitiesCountAggregateInputType | true
    }

  export interface ActivitiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activities'], meta: { name: 'Activities' } }
    /**
     * Find zero or one Activities that matches the filter.
     * @param {ActivitiesFindUniqueArgs} args - Arguments to find a Activities
     * @example
     * // Get one Activities
     * const activities = await prisma.activities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ActivitiesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ActivitiesFindUniqueArgs<ExtArgs>>
    ): Prisma__ActivitiesClient<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Activities that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ActivitiesFindUniqueOrThrowArgs} args - Arguments to find a Activities
     * @example
     * // Get one Activities
     * const activities = await prisma.activities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ActivitiesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivitiesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ActivitiesClient<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesFindFirstArgs} args - Arguments to find a Activities
     * @example
     * // Get one Activities
     * const activities = await prisma.activities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ActivitiesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivitiesFindFirstArgs<ExtArgs>>
    ): Prisma__ActivitiesClient<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Activities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesFindFirstOrThrowArgs} args - Arguments to find a Activities
     * @example
     * // Get one Activities
     * const activities = await prisma.activities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ActivitiesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivitiesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ActivitiesClient<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activities.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activities.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activitiesWithIdOnly = await prisma.activities.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ActivitiesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivitiesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Activities.
     * @param {ActivitiesCreateArgs} args - Arguments to create a Activities.
     * @example
     * // Create one Activities
     * const Activities = await prisma.activities.create({
     *   data: {
     *     // ... data to create a Activities
     *   }
     * })
     * 
    **/
    create<T extends ActivitiesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ActivitiesCreateArgs<ExtArgs>>
    ): Prisma__ActivitiesClient<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Activities.
     *     @param {ActivitiesCreateManyArgs} args - Arguments to create many Activities.
     *     @example
     *     // Create many Activities
     *     const activities = await prisma.activities.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ActivitiesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivitiesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Activities.
     * @param {ActivitiesDeleteArgs} args - Arguments to delete one Activities.
     * @example
     * // Delete one Activities
     * const Activities = await prisma.activities.delete({
     *   where: {
     *     // ... filter to delete one Activities
     *   }
     * })
     * 
    **/
    delete<T extends ActivitiesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ActivitiesDeleteArgs<ExtArgs>>
    ): Prisma__ActivitiesClient<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Activities.
     * @param {ActivitiesUpdateArgs} args - Arguments to update one Activities.
     * @example
     * // Update one Activities
     * const activities = await prisma.activities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ActivitiesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ActivitiesUpdateArgs<ExtArgs>>
    ): Prisma__ActivitiesClient<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Activities.
     * @param {ActivitiesDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ActivitiesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActivitiesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activities = await prisma.activities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ActivitiesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ActivitiesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Activities.
     * @param {ActivitiesUpsertArgs} args - Arguments to update or create a Activities.
     * @example
     * // Update or create a Activities
     * const activities = await prisma.activities.upsert({
     *   create: {
     *     // ... data to create a Activities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activities we want to update
     *   }
     * })
    **/
    upsert<T extends ActivitiesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ActivitiesUpsertArgs<ExtArgs>>
    ): Prisma__ActivitiesClient<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activities.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivitiesCountArgs>(
      args?: Subset<T, ActivitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivitiesAggregateArgs>(args: Subset<T, ActivitiesAggregateArgs>): Prisma.PrismaPromise<GetActivitiesAggregateType<T>>

    /**
     * Group by Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivitiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivitiesGroupByArgs['orderBy'] }
        : { orderBy?: ActivitiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activities model
   */
  readonly fields: ActivitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivitiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    type<T extends ActivityTypesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActivityTypesDefaultArgs<ExtArgs>>): Prisma__ActivityTypesClient<$Result.GetResult<Prisma.$ActivityTypesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    categories<T extends Activities$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Activities$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Activities model
   */ 
  interface ActivitiesFieldRefs {
    readonly id: FieldRef<"Activities", 'Int'>
    readonly name: FieldRef<"Activities", 'String'>
    readonly typeId: FieldRef<"Activities", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Activities findUnique
   */
  export type ActivitiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivitiesInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where: ActivitiesWhereUniqueInput
  }


  /**
   * Activities findUniqueOrThrow
   */
  export type ActivitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivitiesInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where: ActivitiesWhereUniqueInput
  }


  /**
   * Activities findFirst
   */
  export type ActivitiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivitiesInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivitiesOrderByWithRelationInput | ActivitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivitiesScalarFieldEnum | ActivitiesScalarFieldEnum[]
  }


  /**
   * Activities findFirstOrThrow
   */
  export type ActivitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivitiesInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivitiesOrderByWithRelationInput | ActivitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivitiesScalarFieldEnum | ActivitiesScalarFieldEnum[]
  }


  /**
   * Activities findMany
   */
  export type ActivitiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivitiesInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivitiesOrderByWithRelationInput | ActivitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    distinct?: ActivitiesScalarFieldEnum | ActivitiesScalarFieldEnum[]
  }


  /**
   * Activities create
   */
  export type ActivitiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivitiesInclude<ExtArgs> | null
    /**
     * The data needed to create a Activities.
     */
    data: XOR<ActivitiesCreateInput, ActivitiesUncheckedCreateInput>
  }


  /**
   * Activities createMany
   */
  export type ActivitiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivitiesCreateManyInput | ActivitiesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Activities update
   */
  export type ActivitiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivitiesInclude<ExtArgs> | null
    /**
     * The data needed to update a Activities.
     */
    data: XOR<ActivitiesUpdateInput, ActivitiesUncheckedUpdateInput>
    /**
     * Choose, which Activities to update.
     */
    where: ActivitiesWhereUniqueInput
  }


  /**
   * Activities updateMany
   */
  export type ActivitiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivitiesUpdateManyMutationInput, ActivitiesUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivitiesWhereInput
  }


  /**
   * Activities upsert
   */
  export type ActivitiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivitiesInclude<ExtArgs> | null
    /**
     * The filter to search for the Activities to update in case it exists.
     */
    where: ActivitiesWhereUniqueInput
    /**
     * In case the Activities found by the `where` argument doesn't exist, create a new Activities with this data.
     */
    create: XOR<ActivitiesCreateInput, ActivitiesUncheckedCreateInput>
    /**
     * In case the Activities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivitiesUpdateInput, ActivitiesUncheckedUpdateInput>
  }


  /**
   * Activities delete
   */
  export type ActivitiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivitiesInclude<ExtArgs> | null
    /**
     * Filter which Activities to delete.
     */
    where: ActivitiesWhereUniqueInput
  }


  /**
   * Activities deleteMany
   */
  export type ActivitiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivitiesWhereInput
  }


  /**
   * Activities.categories
   */
  export type Activities$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    cursor?: CategoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }


  /**
   * Activities without action
   */
  export type ActivitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activities
     */
    select?: ActivitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ActivitiesInclude<ExtArgs> | null
  }



  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    capacity: number | null
    minThreshold: number | null
    activityId: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
    rating: number | null
    capacity: number | null
    minThreshold: number | null
    activityId: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    rating: number | null
    createdAt: Date | null
    availableAt: Date | null
    unavailableAt: Date | null
    capacity: number | null
    minThreshold: number | null
    active: boolean | null
    activityId: number | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    rating: number | null
    createdAt: Date | null
    availableAt: Date | null
    unavailableAt: Date | null
    capacity: number | null
    minThreshold: number | null
    active: boolean | null
    activityId: number | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    location: number
    rating: number
    createdAt: number
    availableAt: number
    unavailableAt: number
    capacity: number
    minThreshold: number
    active: number
    activityId: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
    rating?: true
    capacity?: true
    minThreshold?: true
    activityId?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
    rating?: true
    capacity?: true
    minThreshold?: true
    activityId?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    rating?: true
    createdAt?: true
    availableAt?: true
    unavailableAt?: true
    capacity?: true
    minThreshold?: true
    active?: true
    activityId?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    rating?: true
    createdAt?: true
    availableAt?: true
    unavailableAt?: true
    capacity?: true
    minThreshold?: true
    active?: true
    activityId?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    rating?: true
    createdAt?: true
    availableAt?: true
    unavailableAt?: true
    capacity?: true
    minThreshold?: true
    active?: true
    activityId?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    location: JsonValue
    rating: number
    createdAt: Date
    availableAt: Date
    unavailableAt: Date
    capacity: number
    minThreshold: number
    active: boolean
    activityId: number
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    rating?: boolean
    createdAt?: boolean
    availableAt?: boolean
    unavailableAt?: boolean
    capacity?: boolean
    minThreshold?: boolean
    active?: boolean
    activityId?: boolean
    activity?: boolean | ActivitiesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    rating?: boolean
    createdAt?: boolean
    availableAt?: boolean
    unavailableAt?: boolean
    capacity?: boolean
    minThreshold?: boolean
    active?: boolean
    activityId?: boolean
  }

  export type CategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    activity?: boolean | ActivitiesDefaultArgs<ExtArgs>
  }


  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      activity: Prisma.$ActivitiesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      location: Prisma.JsonValue
      rating: number
      createdAt: Date
      availableAt: Date
      unavailableAt: Date
      capacity: number
      minThreshold: number
      active: boolean
      activityId: number
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }


  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoriesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Categories that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoriesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoriesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
    **/
    create<T extends CategoriesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const categories = await prisma.categories.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoriesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
    **/
    delete<T extends CategoriesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoriesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoriesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoriesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
    **/
    upsert<T extends CategoriesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    activity<T extends ActivitiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActivitiesDefaultArgs<ExtArgs>>): Prisma__ActivitiesClient<$Result.GetResult<Prisma.$ActivitiesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Categories model
   */ 
  interface CategoriesFieldRefs {
    readonly id: FieldRef<"Categories", 'Int'>
    readonly name: FieldRef<"Categories", 'String'>
    readonly location: FieldRef<"Categories", 'Json'>
    readonly rating: FieldRef<"Categories", 'Float'>
    readonly createdAt: FieldRef<"Categories", 'DateTime'>
    readonly availableAt: FieldRef<"Categories", 'DateTime'>
    readonly unavailableAt: FieldRef<"Categories", 'DateTime'>
    readonly capacity: FieldRef<"Categories", 'Int'>
    readonly minThreshold: FieldRef<"Categories", 'Int'>
    readonly active: FieldRef<"Categories", 'Boolean'>
    readonly activityId: FieldRef<"Categories", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }


  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }


  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }


  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }


  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }


  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }


  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }


  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
  }


  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }


  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }


  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput
  }


  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    type: 'type',
    fullname: 'fullname',
    interests: 'interests',
    phoneNumber: 'phoneNumber',
    profilePic: 'profilePic',
    roleId: 'roleId',
    dob: 'dob',
    gender: 'gender',
    aboutMe: 'aboutMe'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OtpScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    otp: 'otp',
    otpExpiry: 'otpExpiry',
    used: 'used'
  };

  export type OtpScalarFieldEnum = (typeof OtpScalarFieldEnum)[keyof typeof OtpScalarFieldEnum]


  export const InterestScalarFieldEnum: {
    id: 'id',
    interest: 'interest',
    level: 'level'
  };

  export type InterestScalarFieldEnum = (typeof InterestScalarFieldEnum)[keyof typeof InterestScalarFieldEnum]


  export const RolesScalarFieldEnum: {
    id: 'id',
    role: 'role'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const ActivityTypesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ActivityTypesScalarFieldEnum = (typeof ActivityTypesScalarFieldEnum)[keyof typeof ActivityTypesScalarFieldEnum]


  export const ActivitiesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    typeId: 'typeId'
  };

  export type ActivitiesScalarFieldEnum = (typeof ActivitiesScalarFieldEnum)[keyof typeof ActivitiesScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    rating: 'rating',
    createdAt: 'createdAt',
    availableAt: 'availableAt',
    unavailableAt: 'unavailableAt',
    capacity: 'capacity',
    minThreshold: 'minThreshold',
    active: 'active',
    activityId: 'activityId'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    type?: StringNullableFilter<"User"> | string | null
    fullname?: StringNullableFilter<"User"> | string | null
    interests?: JsonNullableFilter<"User">
    phoneNumber?: StringNullableFilter<"User"> | string | null
    profilePic?: StringNullableFilter<"User"> | string | null
    roleId?: IntFilter<"User"> | number
    dob?: DateTimeNullableFilter<"User"> | Date | string | null
    gender?: StringNullableFilter<"User"> | string | null
    aboutMe?: StringNullableFilter<"User"> | string | null
    role?: XOR<RolesRelationFilter, RolesWhereInput>
    otp?: XOR<OtpNullableRelationFilter, OtpWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    fullname?: SortOrderInput | SortOrder
    interests?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    profilePic?: SortOrderInput | SortOrder
    roleId?: SortOrder
    dob?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    aboutMe?: SortOrderInput | SortOrder
    role?: RolesOrderByWithRelationInput
    otp?: OtpOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    type?: StringNullableFilter<"User"> | string | null
    fullname?: StringNullableFilter<"User"> | string | null
    interests?: JsonNullableFilter<"User">
    phoneNumber?: StringNullableFilter<"User"> | string | null
    profilePic?: StringNullableFilter<"User"> | string | null
    roleId?: IntFilter<"User"> | number
    dob?: DateTimeNullableFilter<"User"> | Date | string | null
    gender?: StringNullableFilter<"User"> | string | null
    aboutMe?: StringNullableFilter<"User"> | string | null
    role?: XOR<RolesRelationFilter, RolesWhereInput>
    otp?: XOR<OtpNullableRelationFilter, OtpWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    fullname?: SortOrderInput | SortOrder
    interests?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    profilePic?: SortOrderInput | SortOrder
    roleId?: SortOrder
    dob?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    aboutMe?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    type?: StringNullableWithAggregatesFilter<"User"> | string | null
    fullname?: StringNullableWithAggregatesFilter<"User"> | string | null
    interests?: JsonNullableWithAggregatesFilter<"User">
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    profilePic?: StringNullableWithAggregatesFilter<"User"> | string | null
    roleId?: IntWithAggregatesFilter<"User"> | number
    dob?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    gender?: StringNullableWithAggregatesFilter<"User"> | string | null
    aboutMe?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type OtpWhereInput = {
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    id?: IntFilter<"Otp"> | number
    userId?: IntFilter<"Otp"> | number
    otp?: IntNullableFilter<"Otp"> | number | null
    otpExpiry?: DateTimeNullableFilter<"Otp"> | Date | string | null
    used?: BoolFilter<"Otp"> | boolean
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type OtpOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiry?: SortOrderInput | SortOrder
    used?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OtpWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    otp?: number
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    otpExpiry?: DateTimeNullableFilter<"Otp"> | Date | string | null
    used?: BoolFilter<"Otp"> | boolean
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId" | "otp">

  export type OtpOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiry?: SortOrderInput | SortOrder
    used?: SortOrder
    _count?: OtpCountOrderByAggregateInput
    _avg?: OtpAvgOrderByAggregateInput
    _max?: OtpMaxOrderByAggregateInput
    _min?: OtpMinOrderByAggregateInput
    _sum?: OtpSumOrderByAggregateInput
  }

  export type OtpScalarWhereWithAggregatesInput = {
    AND?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    OR?: OtpScalarWhereWithAggregatesInput[]
    NOT?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Otp"> | number
    userId?: IntWithAggregatesFilter<"Otp"> | number
    otp?: IntNullableWithAggregatesFilter<"Otp"> | number | null
    otpExpiry?: DateTimeNullableWithAggregatesFilter<"Otp"> | Date | string | null
    used?: BoolWithAggregatesFilter<"Otp"> | boolean
  }

  export type InterestWhereInput = {
    AND?: InterestWhereInput | InterestWhereInput[]
    OR?: InterestWhereInput[]
    NOT?: InterestWhereInput | InterestWhereInput[]
    id?: IntFilter<"Interest"> | number
    interest?: StringFilter<"Interest"> | string
    level?: JsonFilter<"Interest">
  }

  export type InterestOrderByWithRelationInput = {
    id?: SortOrder
    interest?: SortOrder
    level?: SortOrder
  }

  export type InterestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    interest?: string
    AND?: InterestWhereInput | InterestWhereInput[]
    OR?: InterestWhereInput[]
    NOT?: InterestWhereInput | InterestWhereInput[]
    level?: JsonFilter<"Interest">
  }, "id" | "interest">

  export type InterestOrderByWithAggregationInput = {
    id?: SortOrder
    interest?: SortOrder
    level?: SortOrder
    _count?: InterestCountOrderByAggregateInput
    _avg?: InterestAvgOrderByAggregateInput
    _max?: InterestMaxOrderByAggregateInput
    _min?: InterestMinOrderByAggregateInput
    _sum?: InterestSumOrderByAggregateInput
  }

  export type InterestScalarWhereWithAggregatesInput = {
    AND?: InterestScalarWhereWithAggregatesInput | InterestScalarWhereWithAggregatesInput[]
    OR?: InterestScalarWhereWithAggregatesInput[]
    NOT?: InterestScalarWhereWithAggregatesInput | InterestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Interest"> | number
    interest?: StringWithAggregatesFilter<"Interest"> | string
    level?: JsonWithAggregatesFilter<"Interest">
  }

  export type RolesWhereInput = {
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    id?: IntFilter<"Roles"> | number
    role?: StringFilter<"Roles"> | string
    user?: UserListRelationFilter
  }

  export type RolesOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    user?: UserOrderByRelationAggregateInput
  }

  export type RolesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    role?: string
    AND?: RolesWhereInput | RolesWhereInput[]
    OR?: RolesWhereInput[]
    NOT?: RolesWhereInput | RolesWhereInput[]
    user?: UserListRelationFilter
  }, "id" | "role">

  export type RolesOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    _count?: RolesCountOrderByAggregateInput
    _avg?: RolesAvgOrderByAggregateInput
    _max?: RolesMaxOrderByAggregateInput
    _min?: RolesMinOrderByAggregateInput
    _sum?: RolesSumOrderByAggregateInput
  }

  export type RolesScalarWhereWithAggregatesInput = {
    AND?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    OR?: RolesScalarWhereWithAggregatesInput[]
    NOT?: RolesScalarWhereWithAggregatesInput | RolesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Roles"> | number
    role?: StringWithAggregatesFilter<"Roles"> | string
  }

  export type ActivityTypesWhereInput = {
    AND?: ActivityTypesWhereInput | ActivityTypesWhereInput[]
    OR?: ActivityTypesWhereInput[]
    NOT?: ActivityTypesWhereInput | ActivityTypesWhereInput[]
    id?: IntFilter<"ActivityTypes"> | number
    name?: StringFilter<"ActivityTypes"> | string
    activity?: XOR<ActivitiesNullableRelationFilter, ActivitiesWhereInput> | null
  }

  export type ActivityTypesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    activity?: ActivitiesOrderByWithRelationInput
  }

  export type ActivityTypesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ActivityTypesWhereInput | ActivityTypesWhereInput[]
    OR?: ActivityTypesWhereInput[]
    NOT?: ActivityTypesWhereInput | ActivityTypesWhereInput[]
    activity?: XOR<ActivitiesNullableRelationFilter, ActivitiesWhereInput> | null
  }, "id" | "name">

  export type ActivityTypesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ActivityTypesCountOrderByAggregateInput
    _avg?: ActivityTypesAvgOrderByAggregateInput
    _max?: ActivityTypesMaxOrderByAggregateInput
    _min?: ActivityTypesMinOrderByAggregateInput
    _sum?: ActivityTypesSumOrderByAggregateInput
  }

  export type ActivityTypesScalarWhereWithAggregatesInput = {
    AND?: ActivityTypesScalarWhereWithAggregatesInput | ActivityTypesScalarWhereWithAggregatesInput[]
    OR?: ActivityTypesScalarWhereWithAggregatesInput[]
    NOT?: ActivityTypesScalarWhereWithAggregatesInput | ActivityTypesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ActivityTypes"> | number
    name?: StringWithAggregatesFilter<"ActivityTypes"> | string
  }

  export type ActivitiesWhereInput = {
    AND?: ActivitiesWhereInput | ActivitiesWhereInput[]
    OR?: ActivitiesWhereInput[]
    NOT?: ActivitiesWhereInput | ActivitiesWhereInput[]
    id?: IntFilter<"Activities"> | number
    name?: StringFilter<"Activities"> | string
    typeId?: IntFilter<"Activities"> | number
    type?: XOR<ActivityTypesRelationFilter, ActivityTypesWhereInput>
    categories?: CategoriesListRelationFilter
  }

  export type ActivitiesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
    type?: ActivityTypesOrderByWithRelationInput
    categories?: CategoriesOrderByRelationAggregateInput
  }

  export type ActivitiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    typeId?: number
    AND?: ActivitiesWhereInput | ActivitiesWhereInput[]
    OR?: ActivitiesWhereInput[]
    NOT?: ActivitiesWhereInput | ActivitiesWhereInput[]
    type?: XOR<ActivityTypesRelationFilter, ActivityTypesWhereInput>
    categories?: CategoriesListRelationFilter
  }, "id" | "name" | "typeId">

  export type ActivitiesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
    _count?: ActivitiesCountOrderByAggregateInput
    _avg?: ActivitiesAvgOrderByAggregateInput
    _max?: ActivitiesMaxOrderByAggregateInput
    _min?: ActivitiesMinOrderByAggregateInput
    _sum?: ActivitiesSumOrderByAggregateInput
  }

  export type ActivitiesScalarWhereWithAggregatesInput = {
    AND?: ActivitiesScalarWhereWithAggregatesInput | ActivitiesScalarWhereWithAggregatesInput[]
    OR?: ActivitiesScalarWhereWithAggregatesInput[]
    NOT?: ActivitiesScalarWhereWithAggregatesInput | ActivitiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Activities"> | number
    name?: StringWithAggregatesFilter<"Activities"> | string
    typeId?: IntWithAggregatesFilter<"Activities"> | number
  }

  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    id?: IntFilter<"Categories"> | number
    name?: StringFilter<"Categories"> | string
    location?: JsonFilter<"Categories">
    rating?: FloatFilter<"Categories"> | number
    createdAt?: DateTimeFilter<"Categories"> | Date | string
    availableAt?: DateTimeFilter<"Categories"> | Date | string
    unavailableAt?: DateTimeFilter<"Categories"> | Date | string
    capacity?: IntFilter<"Categories"> | number
    minThreshold?: IntFilter<"Categories"> | number
    active?: BoolFilter<"Categories"> | boolean
    activityId?: IntFilter<"Categories"> | number
    activity?: XOR<ActivitiesRelationFilter, ActivitiesWhereInput>
  }

  export type CategoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    availableAt?: SortOrder
    unavailableAt?: SortOrder
    capacity?: SortOrder
    minThreshold?: SortOrder
    active?: SortOrder
    activityId?: SortOrder
    activity?: ActivitiesOrderByWithRelationInput
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    location?: JsonFilter<"Categories">
    rating?: FloatFilter<"Categories"> | number
    createdAt?: DateTimeFilter<"Categories"> | Date | string
    availableAt?: DateTimeFilter<"Categories"> | Date | string
    unavailableAt?: DateTimeFilter<"Categories"> | Date | string
    capacity?: IntFilter<"Categories"> | number
    minThreshold?: IntFilter<"Categories"> | number
    active?: BoolFilter<"Categories"> | boolean
    activityId?: IntFilter<"Categories"> | number
    activity?: XOR<ActivitiesRelationFilter, ActivitiesWhereInput>
  }, "id" | "name">

  export type CategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    availableAt?: SortOrder
    unavailableAt?: SortOrder
    capacity?: SortOrder
    minThreshold?: SortOrder
    active?: SortOrder
    activityId?: SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _avg?: CategoriesAvgOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
    _sum?: CategoriesSumOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    OR?: CategoriesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categories"> | number
    name?: StringWithAggregatesFilter<"Categories"> | string
    location?: JsonWithAggregatesFilter<"Categories">
    rating?: FloatWithAggregatesFilter<"Categories"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
    availableAt?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
    unavailableAt?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
    capacity?: IntWithAggregatesFilter<"Categories"> | number
    minThreshold?: IntWithAggregatesFilter<"Categories"> | number
    active?: BoolWithAggregatesFilter<"Categories"> | boolean
    activityId?: IntWithAggregatesFilter<"Categories"> | number
  }

  export type UserCreateInput = {
    email: string
    password?: string | null
    type?: string | null
    fullname?: string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    phoneNumber?: string | null
    profilePic?: string | null
    dob?: Date | string | null
    gender?: string | null
    aboutMe?: string | null
    role: RolesCreateNestedOneWithoutUserInput
    otp?: OtpCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password?: string | null
    type?: string | null
    fullname?: string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    phoneNumber?: string | null
    profilePic?: string | null
    roleId: number
    dob?: Date | string | null
    gender?: string | null
    aboutMe?: string | null
    otp?: OtpUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    aboutMe?: NullableStringFieldUpdateOperationsInput | string | null
    role?: RolesUpdateOneRequiredWithoutUserNestedInput
    otp?: OtpUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    aboutMe?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: OtpUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password?: string | null
    type?: string | null
    fullname?: string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    phoneNumber?: string | null
    profilePic?: string | null
    roleId: number
    dob?: Date | string | null
    gender?: string | null
    aboutMe?: string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    aboutMe?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    aboutMe?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OtpCreateInput = {
    otp?: number | null
    otpExpiry?: Date | string | null
    used?: boolean
    user: UserCreateNestedOneWithoutOtpInput
  }

  export type OtpUncheckedCreateInput = {
    id?: number
    userId: number
    otp?: number | null
    otpExpiry?: Date | string | null
    used?: boolean
  }

  export type OtpUpdateInput = {
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutOtpNestedInput
  }

  export type OtpUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OtpCreateManyInput = {
    id?: number
    userId: number
    otp?: number | null
    otpExpiry?: Date | string | null
    used?: boolean
  }

  export type OtpUpdateManyMutationInput = {
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OtpUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InterestCreateInput = {
    interest: string
    level: JsonNullValueInput | InputJsonValue
  }

  export type InterestUncheckedCreateInput = {
    id?: number
    interest: string
    level: JsonNullValueInput | InputJsonValue
  }

  export type InterestUpdateInput = {
    interest?: StringFieldUpdateOperationsInput | string
    level?: JsonNullValueInput | InputJsonValue
  }

  export type InterestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    interest?: StringFieldUpdateOperationsInput | string
    level?: JsonNullValueInput | InputJsonValue
  }

  export type InterestCreateManyInput = {
    id?: number
    interest: string
    level: JsonNullValueInput | InputJsonValue
  }

  export type InterestUpdateManyMutationInput = {
    interest?: StringFieldUpdateOperationsInput | string
    level?: JsonNullValueInput | InputJsonValue
  }

  export type InterestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    interest?: StringFieldUpdateOperationsInput | string
    level?: JsonNullValueInput | InputJsonValue
  }

  export type RolesCreateInput = {
    role: string
    user?: UserCreateNestedManyWithoutRoleInput
  }

  export type RolesUncheckedCreateInput = {
    id?: number
    role: string
    user?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RolesUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RolesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RolesCreateManyInput = {
    id?: number
    role: string
  }

  export type RolesUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
  }

  export type RolesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityTypesCreateInput = {
    name: string
    activity?: ActivitiesCreateNestedOneWithoutTypeInput
  }

  export type ActivityTypesUncheckedCreateInput = {
    id?: number
    name: string
    activity?: ActivitiesUncheckedCreateNestedOneWithoutTypeInput
  }

  export type ActivityTypesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    activity?: ActivitiesUpdateOneWithoutTypeNestedInput
  }

  export type ActivityTypesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    activity?: ActivitiesUncheckedUpdateOneWithoutTypeNestedInput
  }

  export type ActivityTypesCreateManyInput = {
    id?: number
    name: string
  }

  export type ActivityTypesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityTypesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ActivitiesCreateInput = {
    name: string
    type: ActivityTypesCreateNestedOneWithoutActivityInput
    categories?: CategoriesCreateNestedManyWithoutActivityInput
  }

  export type ActivitiesUncheckedCreateInput = {
    id?: number
    name: string
    typeId: number
    categories?: CategoriesUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivitiesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: ActivityTypesUpdateOneRequiredWithoutActivityNestedInput
    categories?: CategoriesUpdateManyWithoutActivityNestedInput
  }

  export type ActivitiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
    categories?: CategoriesUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivitiesCreateManyInput = {
    id?: number
    name: string
    typeId: number
  }

  export type ActivitiesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ActivitiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriesCreateInput = {
    name: string
    location: JsonNullValueInput | InputJsonValue
    rating?: number
    createdAt: Date | string
    availableAt: Date | string
    unavailableAt: Date | string
    capacity?: number
    minThreshold?: number
    active: boolean
    activity: ActivitiesCreateNestedOneWithoutCategoriesInput
  }

  export type CategoriesUncheckedCreateInput = {
    id?: number
    name: string
    location: JsonNullValueInput | InputJsonValue
    rating?: number
    createdAt: Date | string
    availableAt: Date | string
    unavailableAt: Date | string
    capacity?: number
    minThreshold?: number
    active: boolean
    activityId: number
  }

  export type CategoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availableAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unavailableAt?: DateTimeFieldUpdateOperationsInput | Date | string
    capacity?: IntFieldUpdateOperationsInput | number
    minThreshold?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    activity?: ActivitiesUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availableAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unavailableAt?: DateTimeFieldUpdateOperationsInput | Date | string
    capacity?: IntFieldUpdateOperationsInput | number
    minThreshold?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    activityId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriesCreateManyInput = {
    id?: number
    name: string
    location: JsonNullValueInput | InputJsonValue
    rating?: number
    createdAt: Date | string
    availableAt: Date | string
    unavailableAt: Date | string
    capacity?: number
    minThreshold?: number
    active: boolean
    activityId: number
  }

  export type CategoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availableAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unavailableAt?: DateTimeFieldUpdateOperationsInput | Date | string
    capacity?: IntFieldUpdateOperationsInput | number
    minThreshold?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availableAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unavailableAt?: DateTimeFieldUpdateOperationsInput | Date | string
    capacity?: IntFieldUpdateOperationsInput | number
    minThreshold?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    activityId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RolesRelationFilter = {
    is?: RolesWhereInput
    isNot?: RolesWhereInput
  }

  export type OtpNullableRelationFilter = {
    is?: OtpWhereInput | null
    isNot?: OtpWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    type?: SortOrder
    fullname?: SortOrder
    interests?: SortOrder
    phoneNumber?: SortOrder
    profilePic?: SortOrder
    roleId?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    aboutMe?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    type?: SortOrder
    fullname?: SortOrder
    phoneNumber?: SortOrder
    profilePic?: SortOrder
    roleId?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    aboutMe?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    type?: SortOrder
    fullname?: SortOrder
    phoneNumber?: SortOrder
    profilePic?: SortOrder
    roleId?: SortOrder
    dob?: SortOrder
    gender?: SortOrder
    aboutMe?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OtpCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    otp?: SortOrder
    otpExpiry?: SortOrder
    used?: SortOrder
  }

  export type OtpAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    otp?: SortOrder
  }

  export type OtpMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    otp?: SortOrder
    otpExpiry?: SortOrder
    used?: SortOrder
  }

  export type OtpMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    otp?: SortOrder
    otpExpiry?: SortOrder
    used?: SortOrder
  }

  export type OtpSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    otp?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type InterestCountOrderByAggregateInput = {
    id?: SortOrder
    interest?: SortOrder
    level?: SortOrder
  }

  export type InterestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InterestMaxOrderByAggregateInput = {
    id?: SortOrder
    interest?: SortOrder
  }

  export type InterestMinOrderByAggregateInput = {
    id?: SortOrder
    interest?: SortOrder
  }

  export type InterestSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolesCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type RolesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RolesMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type RolesMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type RolesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ActivitiesNullableRelationFilter = {
    is?: ActivitiesWhereInput | null
    isNot?: ActivitiesWhereInput | null
  }

  export type ActivityTypesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ActivityTypesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ActivityTypesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ActivityTypesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ActivityTypesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ActivityTypesRelationFilter = {
    is?: ActivityTypesWhereInput
    isNot?: ActivityTypesWhereInput
  }

  export type CategoriesListRelationFilter = {
    every?: CategoriesWhereInput
    some?: CategoriesWhereInput
    none?: CategoriesWhereInput
  }

  export type CategoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivitiesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
  }

  export type ActivitiesAvgOrderByAggregateInput = {
    id?: SortOrder
    typeId?: SortOrder
  }

  export type ActivitiesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
  }

  export type ActivitiesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    typeId?: SortOrder
  }

  export type ActivitiesSumOrderByAggregateInput = {
    id?: SortOrder
    typeId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ActivitiesRelationFilter = {
    is?: ActivitiesWhereInput
    isNot?: ActivitiesWhereInput
  }

  export type CategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    availableAt?: SortOrder
    unavailableAt?: SortOrder
    capacity?: SortOrder
    minThreshold?: SortOrder
    active?: SortOrder
    activityId?: SortOrder
  }

  export type CategoriesAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    capacity?: SortOrder
    minThreshold?: SortOrder
    activityId?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    availableAt?: SortOrder
    unavailableAt?: SortOrder
    capacity?: SortOrder
    minThreshold?: SortOrder
    active?: SortOrder
    activityId?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    availableAt?: SortOrder
    unavailableAt?: SortOrder
    capacity?: SortOrder
    minThreshold?: SortOrder
    active?: SortOrder
    activityId?: SortOrder
  }

  export type CategoriesSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    capacity?: SortOrder
    minThreshold?: SortOrder
    activityId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RolesCreateNestedOneWithoutUserInput = {
    create?: XOR<RolesCreateWithoutUserInput, RolesUncheckedCreateWithoutUserInput>
    connectOrCreate?: RolesCreateOrConnectWithoutUserInput
    connect?: RolesWhereUniqueInput
  }

  export type OtpCreateNestedOneWithoutUserInput = {
    create?: XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput>
    connectOrCreate?: OtpCreateOrConnectWithoutUserInput
    connect?: OtpWhereUniqueInput
  }

  export type OtpUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput>
    connectOrCreate?: OtpCreateOrConnectWithoutUserInput
    connect?: OtpWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RolesUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<RolesCreateWithoutUserInput, RolesUncheckedCreateWithoutUserInput>
    connectOrCreate?: RolesCreateOrConnectWithoutUserInput
    upsert?: RolesUpsertWithoutUserInput
    connect?: RolesWhereUniqueInput
    update?: XOR<XOR<RolesUpdateToOneWithWhereWithoutUserInput, RolesUpdateWithoutUserInput>, RolesUncheckedUpdateWithoutUserInput>
  }

  export type OtpUpdateOneWithoutUserNestedInput = {
    create?: XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput>
    connectOrCreate?: OtpCreateOrConnectWithoutUserInput
    upsert?: OtpUpsertWithoutUserInput
    disconnect?: OtpWhereInput | boolean
    delete?: OtpWhereInput | boolean
    connect?: OtpWhereUniqueInput
    update?: XOR<XOR<OtpUpdateToOneWithWhereWithoutUserInput, OtpUpdateWithoutUserInput>, OtpUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OtpUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput>
    connectOrCreate?: OtpCreateOrConnectWithoutUserInput
    upsert?: OtpUpsertWithoutUserInput
    disconnect?: OtpWhereInput | boolean
    delete?: OtpWhereInput | boolean
    connect?: OtpWhereUniqueInput
    update?: XOR<XOR<OtpUpdateToOneWithWhereWithoutUserInput, OtpUpdateWithoutUserInput>, OtpUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutOtpInput = {
    create?: XOR<UserCreateWithoutOtpInput, UserUncheckedCreateWithoutOtpInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtpInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutOtpNestedInput = {
    create?: XOR<UserCreateWithoutOtpInput, UserUncheckedCreateWithoutOtpInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtpInput
    upsert?: UserUpsertWithoutOtpInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOtpInput, UserUpdateWithoutOtpInput>, UserUncheckedUpdateWithoutOtpInput>
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ActivitiesCreateNestedOneWithoutTypeInput = {
    create?: XOR<ActivitiesCreateWithoutTypeInput, ActivitiesUncheckedCreateWithoutTypeInput>
    connectOrCreate?: ActivitiesCreateOrConnectWithoutTypeInput
    connect?: ActivitiesWhereUniqueInput
  }

  export type ActivitiesUncheckedCreateNestedOneWithoutTypeInput = {
    create?: XOR<ActivitiesCreateWithoutTypeInput, ActivitiesUncheckedCreateWithoutTypeInput>
    connectOrCreate?: ActivitiesCreateOrConnectWithoutTypeInput
    connect?: ActivitiesWhereUniqueInput
  }

  export type ActivitiesUpdateOneWithoutTypeNestedInput = {
    create?: XOR<ActivitiesCreateWithoutTypeInput, ActivitiesUncheckedCreateWithoutTypeInput>
    connectOrCreate?: ActivitiesCreateOrConnectWithoutTypeInput
    upsert?: ActivitiesUpsertWithoutTypeInput
    disconnect?: ActivitiesWhereInput | boolean
    delete?: ActivitiesWhereInput | boolean
    connect?: ActivitiesWhereUniqueInput
    update?: XOR<XOR<ActivitiesUpdateToOneWithWhereWithoutTypeInput, ActivitiesUpdateWithoutTypeInput>, ActivitiesUncheckedUpdateWithoutTypeInput>
  }

  export type ActivitiesUncheckedUpdateOneWithoutTypeNestedInput = {
    create?: XOR<ActivitiesCreateWithoutTypeInput, ActivitiesUncheckedCreateWithoutTypeInput>
    connectOrCreate?: ActivitiesCreateOrConnectWithoutTypeInput
    upsert?: ActivitiesUpsertWithoutTypeInput
    disconnect?: ActivitiesWhereInput | boolean
    delete?: ActivitiesWhereInput | boolean
    connect?: ActivitiesWhereUniqueInput
    update?: XOR<XOR<ActivitiesUpdateToOneWithWhereWithoutTypeInput, ActivitiesUpdateWithoutTypeInput>, ActivitiesUncheckedUpdateWithoutTypeInput>
  }

  export type ActivityTypesCreateNestedOneWithoutActivityInput = {
    create?: XOR<ActivityTypesCreateWithoutActivityInput, ActivityTypesUncheckedCreateWithoutActivityInput>
    connectOrCreate?: ActivityTypesCreateOrConnectWithoutActivityInput
    connect?: ActivityTypesWhereUniqueInput
  }

  export type CategoriesCreateNestedManyWithoutActivityInput = {
    create?: XOR<CategoriesCreateWithoutActivityInput, CategoriesUncheckedCreateWithoutActivityInput> | CategoriesCreateWithoutActivityInput[] | CategoriesUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: CategoriesCreateOrConnectWithoutActivityInput | CategoriesCreateOrConnectWithoutActivityInput[]
    createMany?: CategoriesCreateManyActivityInputEnvelope
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
  }

  export type CategoriesUncheckedCreateNestedManyWithoutActivityInput = {
    create?: XOR<CategoriesCreateWithoutActivityInput, CategoriesUncheckedCreateWithoutActivityInput> | CategoriesCreateWithoutActivityInput[] | CategoriesUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: CategoriesCreateOrConnectWithoutActivityInput | CategoriesCreateOrConnectWithoutActivityInput[]
    createMany?: CategoriesCreateManyActivityInputEnvelope
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
  }

  export type ActivityTypesUpdateOneRequiredWithoutActivityNestedInput = {
    create?: XOR<ActivityTypesCreateWithoutActivityInput, ActivityTypesUncheckedCreateWithoutActivityInput>
    connectOrCreate?: ActivityTypesCreateOrConnectWithoutActivityInput
    upsert?: ActivityTypesUpsertWithoutActivityInput
    connect?: ActivityTypesWhereUniqueInput
    update?: XOR<XOR<ActivityTypesUpdateToOneWithWhereWithoutActivityInput, ActivityTypesUpdateWithoutActivityInput>, ActivityTypesUncheckedUpdateWithoutActivityInput>
  }

  export type CategoriesUpdateManyWithoutActivityNestedInput = {
    create?: XOR<CategoriesCreateWithoutActivityInput, CategoriesUncheckedCreateWithoutActivityInput> | CategoriesCreateWithoutActivityInput[] | CategoriesUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: CategoriesCreateOrConnectWithoutActivityInput | CategoriesCreateOrConnectWithoutActivityInput[]
    upsert?: CategoriesUpsertWithWhereUniqueWithoutActivityInput | CategoriesUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: CategoriesCreateManyActivityInputEnvelope
    set?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    disconnect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    delete?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    update?: CategoriesUpdateWithWhereUniqueWithoutActivityInput | CategoriesUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: CategoriesUpdateManyWithWhereWithoutActivityInput | CategoriesUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[]
  }

  export type CategoriesUncheckedUpdateManyWithoutActivityNestedInput = {
    create?: XOR<CategoriesCreateWithoutActivityInput, CategoriesUncheckedCreateWithoutActivityInput> | CategoriesCreateWithoutActivityInput[] | CategoriesUncheckedCreateWithoutActivityInput[]
    connectOrCreate?: CategoriesCreateOrConnectWithoutActivityInput | CategoriesCreateOrConnectWithoutActivityInput[]
    upsert?: CategoriesUpsertWithWhereUniqueWithoutActivityInput | CategoriesUpsertWithWhereUniqueWithoutActivityInput[]
    createMany?: CategoriesCreateManyActivityInputEnvelope
    set?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    disconnect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    delete?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    connect?: CategoriesWhereUniqueInput | CategoriesWhereUniqueInput[]
    update?: CategoriesUpdateWithWhereUniqueWithoutActivityInput | CategoriesUpdateWithWhereUniqueWithoutActivityInput[]
    updateMany?: CategoriesUpdateManyWithWhereWithoutActivityInput | CategoriesUpdateManyWithWhereWithoutActivityInput[]
    deleteMany?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[]
  }

  export type ActivitiesCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<ActivitiesCreateWithoutCategoriesInput, ActivitiesUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: ActivitiesCreateOrConnectWithoutCategoriesInput
    connect?: ActivitiesWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ActivitiesUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<ActivitiesCreateWithoutCategoriesInput, ActivitiesUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: ActivitiesCreateOrConnectWithoutCategoriesInput
    upsert?: ActivitiesUpsertWithoutCategoriesInput
    connect?: ActivitiesWhereUniqueInput
    update?: XOR<XOR<ActivitiesUpdateToOneWithWhereWithoutCategoriesInput, ActivitiesUpdateWithoutCategoriesInput>, ActivitiesUncheckedUpdateWithoutCategoriesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RolesCreateWithoutUserInput = {
    role: string
  }

  export type RolesUncheckedCreateWithoutUserInput = {
    id?: number
    role: string
  }

  export type RolesCreateOrConnectWithoutUserInput = {
    where: RolesWhereUniqueInput
    create: XOR<RolesCreateWithoutUserInput, RolesUncheckedCreateWithoutUserInput>
  }

  export type OtpCreateWithoutUserInput = {
    otp?: number | null
    otpExpiry?: Date | string | null
    used?: boolean
  }

  export type OtpUncheckedCreateWithoutUserInput = {
    id?: number
    otp?: number | null
    otpExpiry?: Date | string | null
    used?: boolean
  }

  export type OtpCreateOrConnectWithoutUserInput = {
    where: OtpWhereUniqueInput
    create: XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput>
  }

  export type RolesUpsertWithoutUserInput = {
    update: XOR<RolesUpdateWithoutUserInput, RolesUncheckedUpdateWithoutUserInput>
    create: XOR<RolesCreateWithoutUserInput, RolesUncheckedCreateWithoutUserInput>
    where?: RolesWhereInput
  }

  export type RolesUpdateToOneWithWhereWithoutUserInput = {
    where?: RolesWhereInput
    data: XOR<RolesUpdateWithoutUserInput, RolesUncheckedUpdateWithoutUserInput>
  }

  export type RolesUpdateWithoutUserInput = {
    role?: StringFieldUpdateOperationsInput | string
  }

  export type RolesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type OtpUpsertWithoutUserInput = {
    update: XOR<OtpUpdateWithoutUserInput, OtpUncheckedUpdateWithoutUserInput>
    create: XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput>
    where?: OtpWhereInput
  }

  export type OtpUpdateToOneWithWhereWithoutUserInput = {
    where?: OtpWhereInput
    data: XOR<OtpUpdateWithoutUserInput, OtpUncheckedUpdateWithoutUserInput>
  }

  export type OtpUpdateWithoutUserInput = {
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OtpUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    otp?: NullableIntFieldUpdateOperationsInput | number | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateWithoutOtpInput = {
    email: string
    password?: string | null
    type?: string | null
    fullname?: string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    phoneNumber?: string | null
    profilePic?: string | null
    dob?: Date | string | null
    gender?: string | null
    aboutMe?: string | null
    role: RolesCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOtpInput = {
    id?: number
    email: string
    password?: string | null
    type?: string | null
    fullname?: string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    phoneNumber?: string | null
    profilePic?: string | null
    roleId: number
    dob?: Date | string | null
    gender?: string | null
    aboutMe?: string | null
  }

  export type UserCreateOrConnectWithoutOtpInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOtpInput, UserUncheckedCreateWithoutOtpInput>
  }

  export type UserUpsertWithoutOtpInput = {
    update: XOR<UserUpdateWithoutOtpInput, UserUncheckedUpdateWithoutOtpInput>
    create: XOR<UserCreateWithoutOtpInput, UserUncheckedCreateWithoutOtpInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOtpInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOtpInput, UserUncheckedUpdateWithoutOtpInput>
  }

  export type UserUpdateWithoutOtpInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    aboutMe?: NullableStringFieldUpdateOperationsInput | string | null
    role?: RolesUpdateOneRequiredWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOtpInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    aboutMe?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutRoleInput = {
    email: string
    password?: string | null
    type?: string | null
    fullname?: string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    phoneNumber?: string | null
    profilePic?: string | null
    dob?: Date | string | null
    gender?: string | null
    aboutMe?: string | null
    otp?: OtpCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: number
    email: string
    password?: string | null
    type?: string | null
    fullname?: string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    phoneNumber?: string | null
    profilePic?: string | null
    dob?: Date | string | null
    gender?: string | null
    aboutMe?: string | null
    otp?: OtpUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    type?: StringNullableFilter<"User"> | string | null
    fullname?: StringNullableFilter<"User"> | string | null
    interests?: JsonNullableFilter<"User">
    phoneNumber?: StringNullableFilter<"User"> | string | null
    profilePic?: StringNullableFilter<"User"> | string | null
    roleId?: IntFilter<"User"> | number
    dob?: DateTimeNullableFilter<"User"> | Date | string | null
    gender?: StringNullableFilter<"User"> | string | null
    aboutMe?: StringNullableFilter<"User"> | string | null
  }

  export type ActivitiesCreateWithoutTypeInput = {
    name: string
    categories?: CategoriesCreateNestedManyWithoutActivityInput
  }

  export type ActivitiesUncheckedCreateWithoutTypeInput = {
    id?: number
    name: string
    categories?: CategoriesUncheckedCreateNestedManyWithoutActivityInput
  }

  export type ActivitiesCreateOrConnectWithoutTypeInput = {
    where: ActivitiesWhereUniqueInput
    create: XOR<ActivitiesCreateWithoutTypeInput, ActivitiesUncheckedCreateWithoutTypeInput>
  }

  export type ActivitiesUpsertWithoutTypeInput = {
    update: XOR<ActivitiesUpdateWithoutTypeInput, ActivitiesUncheckedUpdateWithoutTypeInput>
    create: XOR<ActivitiesCreateWithoutTypeInput, ActivitiesUncheckedCreateWithoutTypeInput>
    where?: ActivitiesWhereInput
  }

  export type ActivitiesUpdateToOneWithWhereWithoutTypeInput = {
    where?: ActivitiesWhereInput
    data: XOR<ActivitiesUpdateWithoutTypeInput, ActivitiesUncheckedUpdateWithoutTypeInput>
  }

  export type ActivitiesUpdateWithoutTypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    categories?: CategoriesUpdateManyWithoutActivityNestedInput
  }

  export type ActivitiesUncheckedUpdateWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categories?: CategoriesUncheckedUpdateManyWithoutActivityNestedInput
  }

  export type ActivityTypesCreateWithoutActivityInput = {
    name: string
  }

  export type ActivityTypesUncheckedCreateWithoutActivityInput = {
    id?: number
    name: string
  }

  export type ActivityTypesCreateOrConnectWithoutActivityInput = {
    where: ActivityTypesWhereUniqueInput
    create: XOR<ActivityTypesCreateWithoutActivityInput, ActivityTypesUncheckedCreateWithoutActivityInput>
  }

  export type CategoriesCreateWithoutActivityInput = {
    name: string
    location: JsonNullValueInput | InputJsonValue
    rating?: number
    createdAt: Date | string
    availableAt: Date | string
    unavailableAt: Date | string
    capacity?: number
    minThreshold?: number
    active: boolean
  }

  export type CategoriesUncheckedCreateWithoutActivityInput = {
    id?: number
    name: string
    location: JsonNullValueInput | InputJsonValue
    rating?: number
    createdAt: Date | string
    availableAt: Date | string
    unavailableAt: Date | string
    capacity?: number
    minThreshold?: number
    active: boolean
  }

  export type CategoriesCreateOrConnectWithoutActivityInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutActivityInput, CategoriesUncheckedCreateWithoutActivityInput>
  }

  export type CategoriesCreateManyActivityInputEnvelope = {
    data: CategoriesCreateManyActivityInput | CategoriesCreateManyActivityInput[]
    skipDuplicates?: boolean
  }

  export type ActivityTypesUpsertWithoutActivityInput = {
    update: XOR<ActivityTypesUpdateWithoutActivityInput, ActivityTypesUncheckedUpdateWithoutActivityInput>
    create: XOR<ActivityTypesCreateWithoutActivityInput, ActivityTypesUncheckedCreateWithoutActivityInput>
    where?: ActivityTypesWhereInput
  }

  export type ActivityTypesUpdateToOneWithWhereWithoutActivityInput = {
    where?: ActivityTypesWhereInput
    data: XOR<ActivityTypesUpdateWithoutActivityInput, ActivityTypesUncheckedUpdateWithoutActivityInput>
  }

  export type ActivityTypesUpdateWithoutActivityInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ActivityTypesUncheckedUpdateWithoutActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriesUpsertWithWhereUniqueWithoutActivityInput = {
    where: CategoriesWhereUniqueInput
    update: XOR<CategoriesUpdateWithoutActivityInput, CategoriesUncheckedUpdateWithoutActivityInput>
    create: XOR<CategoriesCreateWithoutActivityInput, CategoriesUncheckedCreateWithoutActivityInput>
  }

  export type CategoriesUpdateWithWhereUniqueWithoutActivityInput = {
    where: CategoriesWhereUniqueInput
    data: XOR<CategoriesUpdateWithoutActivityInput, CategoriesUncheckedUpdateWithoutActivityInput>
  }

  export type CategoriesUpdateManyWithWhereWithoutActivityInput = {
    where: CategoriesScalarWhereInput
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyWithoutActivityInput>
  }

  export type CategoriesScalarWhereInput = {
    AND?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[]
    OR?: CategoriesScalarWhereInput[]
    NOT?: CategoriesScalarWhereInput | CategoriesScalarWhereInput[]
    id?: IntFilter<"Categories"> | number
    name?: StringFilter<"Categories"> | string
    location?: JsonFilter<"Categories">
    rating?: FloatFilter<"Categories"> | number
    createdAt?: DateTimeFilter<"Categories"> | Date | string
    availableAt?: DateTimeFilter<"Categories"> | Date | string
    unavailableAt?: DateTimeFilter<"Categories"> | Date | string
    capacity?: IntFilter<"Categories"> | number
    minThreshold?: IntFilter<"Categories"> | number
    active?: BoolFilter<"Categories"> | boolean
    activityId?: IntFilter<"Categories"> | number
  }

  export type ActivitiesCreateWithoutCategoriesInput = {
    name: string
    type: ActivityTypesCreateNestedOneWithoutActivityInput
  }

  export type ActivitiesUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name: string
    typeId: number
  }

  export type ActivitiesCreateOrConnectWithoutCategoriesInput = {
    where: ActivitiesWhereUniqueInput
    create: XOR<ActivitiesCreateWithoutCategoriesInput, ActivitiesUncheckedCreateWithoutCategoriesInput>
  }

  export type ActivitiesUpsertWithoutCategoriesInput = {
    update: XOR<ActivitiesUpdateWithoutCategoriesInput, ActivitiesUncheckedUpdateWithoutCategoriesInput>
    create: XOR<ActivitiesCreateWithoutCategoriesInput, ActivitiesUncheckedCreateWithoutCategoriesInput>
    where?: ActivitiesWhereInput
  }

  export type ActivitiesUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: ActivitiesWhereInput
    data: XOR<ActivitiesUpdateWithoutCategoriesInput, ActivitiesUncheckedUpdateWithoutCategoriesInput>
  }

  export type ActivitiesUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: ActivityTypesUpdateOneRequiredWithoutActivityNestedInput
  }

  export type ActivitiesUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateManyRoleInput = {
    id?: number
    email: string
    password?: string | null
    type?: string | null
    fullname?: string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    phoneNumber?: string | null
    profilePic?: string | null
    dob?: Date | string | null
    gender?: string | null
    aboutMe?: string | null
  }

  export type UserUpdateWithoutRoleInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    aboutMe?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: OtpUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    aboutMe?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: OtpUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableJsonNullValueInput | InputJsonValue
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    aboutMe?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoriesCreateManyActivityInput = {
    id?: number
    name: string
    location: JsonNullValueInput | InputJsonValue
    rating?: number
    createdAt: Date | string
    availableAt: Date | string
    unavailableAt: Date | string
    capacity?: number
    minThreshold?: number
    active: boolean
  }

  export type CategoriesUpdateWithoutActivityInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availableAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unavailableAt?: DateTimeFieldUpdateOperationsInput | Date | string
    capacity?: IntFieldUpdateOperationsInput | number
    minThreshold?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoriesUncheckedUpdateWithoutActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availableAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unavailableAt?: DateTimeFieldUpdateOperationsInput | Date | string
    capacity?: IntFieldUpdateOperationsInput | number
    minThreshold?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoriesUncheckedUpdateManyWithoutActivityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: JsonNullValueInput | InputJsonValue
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availableAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unavailableAt?: DateTimeFieldUpdateOperationsInput | Date | string
    capacity?: IntFieldUpdateOperationsInput | number
    minThreshold?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use RolesCountOutputTypeDefaultArgs instead
     */
    export type RolesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RolesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActivitiesCountOutputTypeDefaultArgs instead
     */
    export type ActivitiesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActivitiesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OtpDefaultArgs instead
     */
    export type OtpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OtpDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InterestDefaultArgs instead
     */
    export type InterestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InterestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RolesDefaultArgs instead
     */
    export type RolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RolesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActivityTypesDefaultArgs instead
     */
    export type ActivityTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActivityTypesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActivitiesDefaultArgs instead
     */
    export type ActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActivitiesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoriesDefaultArgs instead
     */
    export type CategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoriesDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}