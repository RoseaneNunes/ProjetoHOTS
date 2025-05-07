
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Microarea
 * 
 */
export type Microarea = $Result.DefaultSelection<Prisma.$MicroareaPayload>
/**
 * Model Agente
 * 
 */
export type Agente = $Result.DefaultSelection<Prisma.$AgentePayload>
/**
 * Model Paciente
 * 
 */
export type Paciente = $Result.DefaultSelection<Prisma.$PacientePayload>
/**
 * Model Tarefa
 * 
 */
export type Tarefa = $Result.DefaultSelection<Prisma.$TarefaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Microareas
 * const microareas = await prisma.microarea.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Microareas
   * const microareas = await prisma.microarea.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.microarea`: Exposes CRUD operations for the **Microarea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Microareas
    * const microareas = await prisma.microarea.findMany()
    * ```
    */
  get microarea(): Prisma.MicroareaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agente`: Exposes CRUD operations for the **Agente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agentes
    * const agentes = await prisma.agente.findMany()
    * ```
    */
  get agente(): Prisma.AgenteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paciente`: Exposes CRUD operations for the **Paciente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacientes
    * const pacientes = await prisma.paciente.findMany()
    * ```
    */
  get paciente(): Prisma.PacienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tarefa`: Exposes CRUD operations for the **Tarefa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tarefas
    * const tarefas = await prisma.tarefa.findMany()
    * ```
    */
  get tarefa(): Prisma.TarefaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Microarea: 'Microarea',
    Agente: 'Agente',
    Paciente: 'Paciente',
    Tarefa: 'Tarefa'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "microarea" | "agente" | "paciente" | "tarefa"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Microarea: {
        payload: Prisma.$MicroareaPayload<ExtArgs>
        fields: Prisma.MicroareaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MicroareaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicroareaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MicroareaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicroareaPayload>
          }
          findFirst: {
            args: Prisma.MicroareaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicroareaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MicroareaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicroareaPayload>
          }
          findMany: {
            args: Prisma.MicroareaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicroareaPayload>[]
          }
          create: {
            args: Prisma.MicroareaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicroareaPayload>
          }
          createMany: {
            args: Prisma.MicroareaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MicroareaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicroareaPayload>[]
          }
          delete: {
            args: Prisma.MicroareaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicroareaPayload>
          }
          update: {
            args: Prisma.MicroareaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicroareaPayload>
          }
          deleteMany: {
            args: Prisma.MicroareaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MicroareaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MicroareaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicroareaPayload>[]
          }
          upsert: {
            args: Prisma.MicroareaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MicroareaPayload>
          }
          aggregate: {
            args: Prisma.MicroareaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMicroarea>
          }
          groupBy: {
            args: Prisma.MicroareaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MicroareaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MicroareaCountArgs<ExtArgs>
            result: $Utils.Optional<MicroareaCountAggregateOutputType> | number
          }
        }
      }
      Agente: {
        payload: Prisma.$AgentePayload<ExtArgs>
        fields: Prisma.AgenteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgenteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgenteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentePayload>
          }
          findFirst: {
            args: Prisma.AgenteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgenteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentePayload>
          }
          findMany: {
            args: Prisma.AgenteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentePayload>[]
          }
          create: {
            args: Prisma.AgenteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentePayload>
          }
          createMany: {
            args: Prisma.AgenteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgenteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentePayload>[]
          }
          delete: {
            args: Prisma.AgenteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentePayload>
          }
          update: {
            args: Prisma.AgenteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentePayload>
          }
          deleteMany: {
            args: Prisma.AgenteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgenteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgenteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentePayload>[]
          }
          upsert: {
            args: Prisma.AgenteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentePayload>
          }
          aggregate: {
            args: Prisma.AgenteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgente>
          }
          groupBy: {
            args: Prisma.AgenteGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgenteGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgenteCountArgs<ExtArgs>
            result: $Utils.Optional<AgenteCountAggregateOutputType> | number
          }
        }
      }
      Paciente: {
        payload: Prisma.$PacientePayload<ExtArgs>
        fields: Prisma.PacienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findFirst: {
            args: Prisma.PacienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findMany: {
            args: Prisma.PacienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          create: {
            args: Prisma.PacienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          createMany: {
            args: Prisma.PacienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PacienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          delete: {
            args: Prisma.PacienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          update: {
            args: Prisma.PacienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          deleteMany: {
            args: Prisma.PacienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PacienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PacienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          upsert: {
            args: Prisma.PacienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          aggregate: {
            args: Prisma.PacienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaciente>
          }
          groupBy: {
            args: Prisma.PacienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacienteCountArgs<ExtArgs>
            result: $Utils.Optional<PacienteCountAggregateOutputType> | number
          }
        }
      }
      Tarefa: {
        payload: Prisma.$TarefaPayload<ExtArgs>
        fields: Prisma.TarefaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TarefaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TarefaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          findFirst: {
            args: Prisma.TarefaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TarefaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          findMany: {
            args: Prisma.TarefaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>[]
          }
          create: {
            args: Prisma.TarefaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          createMany: {
            args: Prisma.TarefaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TarefaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>[]
          }
          delete: {
            args: Prisma.TarefaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          update: {
            args: Prisma.TarefaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          deleteMany: {
            args: Prisma.TarefaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TarefaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TarefaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>[]
          }
          upsert: {
            args: Prisma.TarefaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TarefaPayload>
          }
          aggregate: {
            args: Prisma.TarefaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTarefa>
          }
          groupBy: {
            args: Prisma.TarefaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TarefaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TarefaCountArgs<ExtArgs>
            result: $Utils.Optional<TarefaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    microarea?: MicroareaOmit
    agente?: AgenteOmit
    paciente?: PacienteOmit
    tarefa?: TarefaOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type MicroareaCountOutputType
   */

  export type MicroareaCountOutputType = {
    agentes: number
    pacientes: number
  }

  export type MicroareaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agentes?: boolean | MicroareaCountOutputTypeCountAgentesArgs
    pacientes?: boolean | MicroareaCountOutputTypeCountPacientesArgs
  }

  // Custom InputTypes
  /**
   * MicroareaCountOutputType without action
   */
  export type MicroareaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MicroareaCountOutputType
     */
    select?: MicroareaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MicroareaCountOutputType without action
   */
  export type MicroareaCountOutputTypeCountAgentesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgenteWhereInput
  }

  /**
   * MicroareaCountOutputType without action
   */
  export type MicroareaCountOutputTypeCountPacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
  }


  /**
   * Count Type AgenteCountOutputType
   */

  export type AgenteCountOutputType = {
    tarefas: number
    pacientes: number
  }

  export type AgenteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tarefas?: boolean | AgenteCountOutputTypeCountTarefasArgs
    pacientes?: boolean | AgenteCountOutputTypeCountPacientesArgs
  }

  // Custom InputTypes
  /**
   * AgenteCountOutputType without action
   */
  export type AgenteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgenteCountOutputType
     */
    select?: AgenteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgenteCountOutputType without action
   */
  export type AgenteCountOutputTypeCountTarefasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TarefaWhereInput
  }

  /**
   * AgenteCountOutputType without action
   */
  export type AgenteCountOutputTypeCountPacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
  }


  /**
   * Count Type PacienteCountOutputType
   */

  export type PacienteCountOutputType = {
    tarefas: number
  }

  export type PacienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tarefas?: boolean | PacienteCountOutputTypeCountTarefasArgs
  }

  // Custom InputTypes
  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteCountOutputType
     */
    select?: PacienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountTarefasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TarefaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Microarea
   */

  export type AggregateMicroarea = {
    _count: MicroareaCountAggregateOutputType | null
    _avg: MicroareaAvgAggregateOutputType | null
    _sum: MicroareaSumAggregateOutputType | null
    _min: MicroareaMinAggregateOutputType | null
    _max: MicroareaMaxAggregateOutputType | null
  }

  export type MicroareaAvgAggregateOutputType = {
    id: number | null
  }

  export type MicroareaSumAggregateOutputType = {
    id: number | null
  }

  export type MicroareaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type MicroareaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
  }

  export type MicroareaCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    _all: number
  }


  export type MicroareaAvgAggregateInputType = {
    id?: true
  }

  export type MicroareaSumAggregateInputType = {
    id?: true
  }

  export type MicroareaMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type MicroareaMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
  }

  export type MicroareaCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    _all?: true
  }

  export type MicroareaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Microarea to aggregate.
     */
    where?: MicroareaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Microareas to fetch.
     */
    orderBy?: MicroareaOrderByWithRelationInput | MicroareaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MicroareaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Microareas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Microareas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Microareas
    **/
    _count?: true | MicroareaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MicroareaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MicroareaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MicroareaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MicroareaMaxAggregateInputType
  }

  export type GetMicroareaAggregateType<T extends MicroareaAggregateArgs> = {
        [P in keyof T & keyof AggregateMicroarea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMicroarea[P]>
      : GetScalarType<T[P], AggregateMicroarea[P]>
  }




  export type MicroareaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MicroareaWhereInput
    orderBy?: MicroareaOrderByWithAggregationInput | MicroareaOrderByWithAggregationInput[]
    by: MicroareaScalarFieldEnum[] | MicroareaScalarFieldEnum
    having?: MicroareaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MicroareaCountAggregateInputType | true
    _avg?: MicroareaAvgAggregateInputType
    _sum?: MicroareaSumAggregateInputType
    _min?: MicroareaMinAggregateInputType
    _max?: MicroareaMaxAggregateInputType
  }

  export type MicroareaGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    _count: MicroareaCountAggregateOutputType | null
    _avg: MicroareaAvgAggregateOutputType | null
    _sum: MicroareaSumAggregateOutputType | null
    _min: MicroareaMinAggregateOutputType | null
    _max: MicroareaMaxAggregateOutputType | null
  }

  type GetMicroareaGroupByPayload<T extends MicroareaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MicroareaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MicroareaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MicroareaGroupByOutputType[P]>
            : GetScalarType<T[P], MicroareaGroupByOutputType[P]>
        }
      >
    >


  export type MicroareaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    agentes?: boolean | Microarea$agentesArgs<ExtArgs>
    pacientes?: boolean | Microarea$pacientesArgs<ExtArgs>
    _count?: boolean | MicroareaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["microarea"]>

  export type MicroareaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["microarea"]>

  export type MicroareaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["microarea"]>

  export type MicroareaSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
  }

  export type MicroareaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao", ExtArgs["result"]["microarea"]>
  export type MicroareaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agentes?: boolean | Microarea$agentesArgs<ExtArgs>
    pacientes?: boolean | Microarea$pacientesArgs<ExtArgs>
    _count?: boolean | MicroareaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MicroareaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MicroareaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MicroareaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Microarea"
    objects: {
      agentes: Prisma.$AgentePayload<ExtArgs>[]
      pacientes: Prisma.$PacientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
    }, ExtArgs["result"]["microarea"]>
    composites: {}
  }

  type MicroareaGetPayload<S extends boolean | null | undefined | MicroareaDefaultArgs> = $Result.GetResult<Prisma.$MicroareaPayload, S>

  type MicroareaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MicroareaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MicroareaCountAggregateInputType | true
    }

  export interface MicroareaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Microarea'], meta: { name: 'Microarea' } }
    /**
     * Find zero or one Microarea that matches the filter.
     * @param {MicroareaFindUniqueArgs} args - Arguments to find a Microarea
     * @example
     * // Get one Microarea
     * const microarea = await prisma.microarea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MicroareaFindUniqueArgs>(args: SelectSubset<T, MicroareaFindUniqueArgs<ExtArgs>>): Prisma__MicroareaClient<$Result.GetResult<Prisma.$MicroareaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Microarea that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MicroareaFindUniqueOrThrowArgs} args - Arguments to find a Microarea
     * @example
     * // Get one Microarea
     * const microarea = await prisma.microarea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MicroareaFindUniqueOrThrowArgs>(args: SelectSubset<T, MicroareaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MicroareaClient<$Result.GetResult<Prisma.$MicroareaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Microarea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicroareaFindFirstArgs} args - Arguments to find a Microarea
     * @example
     * // Get one Microarea
     * const microarea = await prisma.microarea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MicroareaFindFirstArgs>(args?: SelectSubset<T, MicroareaFindFirstArgs<ExtArgs>>): Prisma__MicroareaClient<$Result.GetResult<Prisma.$MicroareaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Microarea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicroareaFindFirstOrThrowArgs} args - Arguments to find a Microarea
     * @example
     * // Get one Microarea
     * const microarea = await prisma.microarea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MicroareaFindFirstOrThrowArgs>(args?: SelectSubset<T, MicroareaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MicroareaClient<$Result.GetResult<Prisma.$MicroareaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Microareas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicroareaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Microareas
     * const microareas = await prisma.microarea.findMany()
     * 
     * // Get first 10 Microareas
     * const microareas = await prisma.microarea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const microareaWithIdOnly = await prisma.microarea.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MicroareaFindManyArgs>(args?: SelectSubset<T, MicroareaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MicroareaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Microarea.
     * @param {MicroareaCreateArgs} args - Arguments to create a Microarea.
     * @example
     * // Create one Microarea
     * const Microarea = await prisma.microarea.create({
     *   data: {
     *     // ... data to create a Microarea
     *   }
     * })
     * 
     */
    create<T extends MicroareaCreateArgs>(args: SelectSubset<T, MicroareaCreateArgs<ExtArgs>>): Prisma__MicroareaClient<$Result.GetResult<Prisma.$MicroareaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Microareas.
     * @param {MicroareaCreateManyArgs} args - Arguments to create many Microareas.
     * @example
     * // Create many Microareas
     * const microarea = await prisma.microarea.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MicroareaCreateManyArgs>(args?: SelectSubset<T, MicroareaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Microareas and returns the data saved in the database.
     * @param {MicroareaCreateManyAndReturnArgs} args - Arguments to create many Microareas.
     * @example
     * // Create many Microareas
     * const microarea = await prisma.microarea.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Microareas and only return the `id`
     * const microareaWithIdOnly = await prisma.microarea.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MicroareaCreateManyAndReturnArgs>(args?: SelectSubset<T, MicroareaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MicroareaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Microarea.
     * @param {MicroareaDeleteArgs} args - Arguments to delete one Microarea.
     * @example
     * // Delete one Microarea
     * const Microarea = await prisma.microarea.delete({
     *   where: {
     *     // ... filter to delete one Microarea
     *   }
     * })
     * 
     */
    delete<T extends MicroareaDeleteArgs>(args: SelectSubset<T, MicroareaDeleteArgs<ExtArgs>>): Prisma__MicroareaClient<$Result.GetResult<Prisma.$MicroareaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Microarea.
     * @param {MicroareaUpdateArgs} args - Arguments to update one Microarea.
     * @example
     * // Update one Microarea
     * const microarea = await prisma.microarea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MicroareaUpdateArgs>(args: SelectSubset<T, MicroareaUpdateArgs<ExtArgs>>): Prisma__MicroareaClient<$Result.GetResult<Prisma.$MicroareaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Microareas.
     * @param {MicroareaDeleteManyArgs} args - Arguments to filter Microareas to delete.
     * @example
     * // Delete a few Microareas
     * const { count } = await prisma.microarea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MicroareaDeleteManyArgs>(args?: SelectSubset<T, MicroareaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Microareas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicroareaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Microareas
     * const microarea = await prisma.microarea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MicroareaUpdateManyArgs>(args: SelectSubset<T, MicroareaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Microareas and returns the data updated in the database.
     * @param {MicroareaUpdateManyAndReturnArgs} args - Arguments to update many Microareas.
     * @example
     * // Update many Microareas
     * const microarea = await prisma.microarea.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Microareas and only return the `id`
     * const microareaWithIdOnly = await prisma.microarea.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MicroareaUpdateManyAndReturnArgs>(args: SelectSubset<T, MicroareaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MicroareaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Microarea.
     * @param {MicroareaUpsertArgs} args - Arguments to update or create a Microarea.
     * @example
     * // Update or create a Microarea
     * const microarea = await prisma.microarea.upsert({
     *   create: {
     *     // ... data to create a Microarea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Microarea we want to update
     *   }
     * })
     */
    upsert<T extends MicroareaUpsertArgs>(args: SelectSubset<T, MicroareaUpsertArgs<ExtArgs>>): Prisma__MicroareaClient<$Result.GetResult<Prisma.$MicroareaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Microareas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicroareaCountArgs} args - Arguments to filter Microareas to count.
     * @example
     * // Count the number of Microareas
     * const count = await prisma.microarea.count({
     *   where: {
     *     // ... the filter for the Microareas we want to count
     *   }
     * })
    **/
    count<T extends MicroareaCountArgs>(
      args?: Subset<T, MicroareaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MicroareaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Microarea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicroareaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MicroareaAggregateArgs>(args: Subset<T, MicroareaAggregateArgs>): Prisma.PrismaPromise<GetMicroareaAggregateType<T>>

    /**
     * Group by Microarea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MicroareaGroupByArgs} args - Group by arguments.
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
      T extends MicroareaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MicroareaGroupByArgs['orderBy'] }
        : { orderBy?: MicroareaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MicroareaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMicroareaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Microarea model
   */
  readonly fields: MicroareaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Microarea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MicroareaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agentes<T extends Microarea$agentesArgs<ExtArgs> = {}>(args?: Subset<T, Microarea$agentesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pacientes<T extends Microarea$pacientesArgs<ExtArgs> = {}>(args?: Subset<T, Microarea$pacientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Microarea model
   */
  interface MicroareaFieldRefs {
    readonly id: FieldRef<"Microarea", 'Int'>
    readonly nome: FieldRef<"Microarea", 'String'>
    readonly descricao: FieldRef<"Microarea", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Microarea findUnique
   */
  export type MicroareaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Microarea
     */
    select?: MicroareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Microarea
     */
    omit?: MicroareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicroareaInclude<ExtArgs> | null
    /**
     * Filter, which Microarea to fetch.
     */
    where: MicroareaWhereUniqueInput
  }

  /**
   * Microarea findUniqueOrThrow
   */
  export type MicroareaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Microarea
     */
    select?: MicroareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Microarea
     */
    omit?: MicroareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicroareaInclude<ExtArgs> | null
    /**
     * Filter, which Microarea to fetch.
     */
    where: MicroareaWhereUniqueInput
  }

  /**
   * Microarea findFirst
   */
  export type MicroareaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Microarea
     */
    select?: MicroareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Microarea
     */
    omit?: MicroareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicroareaInclude<ExtArgs> | null
    /**
     * Filter, which Microarea to fetch.
     */
    where?: MicroareaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Microareas to fetch.
     */
    orderBy?: MicroareaOrderByWithRelationInput | MicroareaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Microareas.
     */
    cursor?: MicroareaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Microareas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Microareas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Microareas.
     */
    distinct?: MicroareaScalarFieldEnum | MicroareaScalarFieldEnum[]
  }

  /**
   * Microarea findFirstOrThrow
   */
  export type MicroareaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Microarea
     */
    select?: MicroareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Microarea
     */
    omit?: MicroareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicroareaInclude<ExtArgs> | null
    /**
     * Filter, which Microarea to fetch.
     */
    where?: MicroareaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Microareas to fetch.
     */
    orderBy?: MicroareaOrderByWithRelationInput | MicroareaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Microareas.
     */
    cursor?: MicroareaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Microareas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Microareas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Microareas.
     */
    distinct?: MicroareaScalarFieldEnum | MicroareaScalarFieldEnum[]
  }

  /**
   * Microarea findMany
   */
  export type MicroareaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Microarea
     */
    select?: MicroareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Microarea
     */
    omit?: MicroareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicroareaInclude<ExtArgs> | null
    /**
     * Filter, which Microareas to fetch.
     */
    where?: MicroareaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Microareas to fetch.
     */
    orderBy?: MicroareaOrderByWithRelationInput | MicroareaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Microareas.
     */
    cursor?: MicroareaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Microareas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Microareas.
     */
    skip?: number
    distinct?: MicroareaScalarFieldEnum | MicroareaScalarFieldEnum[]
  }

  /**
   * Microarea create
   */
  export type MicroareaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Microarea
     */
    select?: MicroareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Microarea
     */
    omit?: MicroareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicroareaInclude<ExtArgs> | null
    /**
     * The data needed to create a Microarea.
     */
    data: XOR<MicroareaCreateInput, MicroareaUncheckedCreateInput>
  }

  /**
   * Microarea createMany
   */
  export type MicroareaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Microareas.
     */
    data: MicroareaCreateManyInput | MicroareaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Microarea createManyAndReturn
   */
  export type MicroareaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Microarea
     */
    select?: MicroareaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Microarea
     */
    omit?: MicroareaOmit<ExtArgs> | null
    /**
     * The data used to create many Microareas.
     */
    data: MicroareaCreateManyInput | MicroareaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Microarea update
   */
  export type MicroareaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Microarea
     */
    select?: MicroareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Microarea
     */
    omit?: MicroareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicroareaInclude<ExtArgs> | null
    /**
     * The data needed to update a Microarea.
     */
    data: XOR<MicroareaUpdateInput, MicroareaUncheckedUpdateInput>
    /**
     * Choose, which Microarea to update.
     */
    where: MicroareaWhereUniqueInput
  }

  /**
   * Microarea updateMany
   */
  export type MicroareaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Microareas.
     */
    data: XOR<MicroareaUpdateManyMutationInput, MicroareaUncheckedUpdateManyInput>
    /**
     * Filter which Microareas to update
     */
    where?: MicroareaWhereInput
    /**
     * Limit how many Microareas to update.
     */
    limit?: number
  }

  /**
   * Microarea updateManyAndReturn
   */
  export type MicroareaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Microarea
     */
    select?: MicroareaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Microarea
     */
    omit?: MicroareaOmit<ExtArgs> | null
    /**
     * The data used to update Microareas.
     */
    data: XOR<MicroareaUpdateManyMutationInput, MicroareaUncheckedUpdateManyInput>
    /**
     * Filter which Microareas to update
     */
    where?: MicroareaWhereInput
    /**
     * Limit how many Microareas to update.
     */
    limit?: number
  }

  /**
   * Microarea upsert
   */
  export type MicroareaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Microarea
     */
    select?: MicroareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Microarea
     */
    omit?: MicroareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicroareaInclude<ExtArgs> | null
    /**
     * The filter to search for the Microarea to update in case it exists.
     */
    where: MicroareaWhereUniqueInput
    /**
     * In case the Microarea found by the `where` argument doesn't exist, create a new Microarea with this data.
     */
    create: XOR<MicroareaCreateInput, MicroareaUncheckedCreateInput>
    /**
     * In case the Microarea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MicroareaUpdateInput, MicroareaUncheckedUpdateInput>
  }

  /**
   * Microarea delete
   */
  export type MicroareaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Microarea
     */
    select?: MicroareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Microarea
     */
    omit?: MicroareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicroareaInclude<ExtArgs> | null
    /**
     * Filter which Microarea to delete.
     */
    where: MicroareaWhereUniqueInput
  }

  /**
   * Microarea deleteMany
   */
  export type MicroareaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Microareas to delete
     */
    where?: MicroareaWhereInput
    /**
     * Limit how many Microareas to delete.
     */
    limit?: number
  }

  /**
   * Microarea.agentes
   */
  export type Microarea$agentesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agente
     */
    select?: AgenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agente
     */
    omit?: AgenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgenteInclude<ExtArgs> | null
    where?: AgenteWhereInput
    orderBy?: AgenteOrderByWithRelationInput | AgenteOrderByWithRelationInput[]
    cursor?: AgenteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgenteScalarFieldEnum | AgenteScalarFieldEnum[]
  }

  /**
   * Microarea.pacientes
   */
  export type Microarea$pacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    cursor?: PacienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Microarea without action
   */
  export type MicroareaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Microarea
     */
    select?: MicroareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Microarea
     */
    omit?: MicroareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicroareaInclude<ExtArgs> | null
  }


  /**
   * Model Agente
   */

  export type AggregateAgente = {
    _count: AgenteCountAggregateOutputType | null
    _avg: AgenteAvgAggregateOutputType | null
    _sum: AgenteSumAggregateOutputType | null
    _min: AgenteMinAggregateOutputType | null
    _max: AgenteMaxAggregateOutputType | null
  }

  export type AgenteAvgAggregateOutputType = {
    id: number | null
    microarea_id: number | null
  }

  export type AgenteSumAggregateOutputType = {
    id: number | null
    microarea_id: number | null
  }

  export type AgenteMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    cargo: string | null
    microarea_id: number | null
  }

  export type AgenteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    cargo: string | null
    microarea_id: number | null
  }

  export type AgenteCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    cargo: number
    microarea_id: number
    _all: number
  }


  export type AgenteAvgAggregateInputType = {
    id?: true
    microarea_id?: true
  }

  export type AgenteSumAggregateInputType = {
    id?: true
    microarea_id?: true
  }

  export type AgenteMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    cargo?: true
    microarea_id?: true
  }

  export type AgenteMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    cargo?: true
    microarea_id?: true
  }

  export type AgenteCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    cargo?: true
    microarea_id?: true
    _all?: true
  }

  export type AgenteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agente to aggregate.
     */
    where?: AgenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agentes to fetch.
     */
    orderBy?: AgenteOrderByWithRelationInput | AgenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agentes
    **/
    _count?: true | AgenteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgenteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgenteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgenteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgenteMaxAggregateInputType
  }

  export type GetAgenteAggregateType<T extends AgenteAggregateArgs> = {
        [P in keyof T & keyof AggregateAgente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgente[P]>
      : GetScalarType<T[P], AggregateAgente[P]>
  }




  export type AgenteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgenteWhereInput
    orderBy?: AgenteOrderByWithAggregationInput | AgenteOrderByWithAggregationInput[]
    by: AgenteScalarFieldEnum[] | AgenteScalarFieldEnum
    having?: AgenteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgenteCountAggregateInputType | true
    _avg?: AgenteAvgAggregateInputType
    _sum?: AgenteSumAggregateInputType
    _min?: AgenteMinAggregateInputType
    _max?: AgenteMaxAggregateInputType
  }

  export type AgenteGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    cargo: string | null
    microarea_id: number | null
    _count: AgenteCountAggregateOutputType | null
    _avg: AgenteAvgAggregateOutputType | null
    _sum: AgenteSumAggregateOutputType | null
    _min: AgenteMinAggregateOutputType | null
    _max: AgenteMaxAggregateOutputType | null
  }

  type GetAgenteGroupByPayload<T extends AgenteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgenteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgenteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgenteGroupByOutputType[P]>
            : GetScalarType<T[P], AgenteGroupByOutputType[P]>
        }
      >
    >


  export type AgenteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    cargo?: boolean
    microarea_id?: boolean
    microarea?: boolean | Agente$microareaArgs<ExtArgs>
    tarefas?: boolean | Agente$tarefasArgs<ExtArgs>
    pacientes?: boolean | Agente$pacientesArgs<ExtArgs>
    _count?: boolean | AgenteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agente"]>

  export type AgenteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    cargo?: boolean
    microarea_id?: boolean
    microarea?: boolean | Agente$microareaArgs<ExtArgs>
  }, ExtArgs["result"]["agente"]>

  export type AgenteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    cargo?: boolean
    microarea_id?: boolean
    microarea?: boolean | Agente$microareaArgs<ExtArgs>
  }, ExtArgs["result"]["agente"]>

  export type AgenteSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    cargo?: boolean
    microarea_id?: boolean
  }

  export type AgenteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "cargo" | "microarea_id", ExtArgs["result"]["agente"]>
  export type AgenteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    microarea?: boolean | Agente$microareaArgs<ExtArgs>
    tarefas?: boolean | Agente$tarefasArgs<ExtArgs>
    pacientes?: boolean | Agente$pacientesArgs<ExtArgs>
    _count?: boolean | AgenteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgenteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    microarea?: boolean | Agente$microareaArgs<ExtArgs>
  }
  export type AgenteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    microarea?: boolean | Agente$microareaArgs<ExtArgs>
  }

  export type $AgentePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agente"
    objects: {
      microarea: Prisma.$MicroareaPayload<ExtArgs> | null
      tarefas: Prisma.$TarefaPayload<ExtArgs>[]
      pacientes: Prisma.$PacientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      cargo: string | null
      microarea_id: number | null
    }, ExtArgs["result"]["agente"]>
    composites: {}
  }

  type AgenteGetPayload<S extends boolean | null | undefined | AgenteDefaultArgs> = $Result.GetResult<Prisma.$AgentePayload, S>

  type AgenteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgenteCountAggregateInputType | true
    }

  export interface AgenteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agente'], meta: { name: 'Agente' } }
    /**
     * Find zero or one Agente that matches the filter.
     * @param {AgenteFindUniqueArgs} args - Arguments to find a Agente
     * @example
     * // Get one Agente
     * const agente = await prisma.agente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgenteFindUniqueArgs>(args: SelectSubset<T, AgenteFindUniqueArgs<ExtArgs>>): Prisma__AgenteClient<$Result.GetResult<Prisma.$AgentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgenteFindUniqueOrThrowArgs} args - Arguments to find a Agente
     * @example
     * // Get one Agente
     * const agente = await prisma.agente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgenteFindUniqueOrThrowArgs>(args: SelectSubset<T, AgenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgenteClient<$Result.GetResult<Prisma.$AgentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgenteFindFirstArgs} args - Arguments to find a Agente
     * @example
     * // Get one Agente
     * const agente = await prisma.agente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgenteFindFirstArgs>(args?: SelectSubset<T, AgenteFindFirstArgs<ExtArgs>>): Prisma__AgenteClient<$Result.GetResult<Prisma.$AgentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgenteFindFirstOrThrowArgs} args - Arguments to find a Agente
     * @example
     * // Get one Agente
     * const agente = await prisma.agente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgenteFindFirstOrThrowArgs>(args?: SelectSubset<T, AgenteFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgenteClient<$Result.GetResult<Prisma.$AgentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agentes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgenteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agentes
     * const agentes = await prisma.agente.findMany()
     * 
     * // Get first 10 Agentes
     * const agentes = await prisma.agente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agenteWithIdOnly = await prisma.agente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgenteFindManyArgs>(args?: SelectSubset<T, AgenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agente.
     * @param {AgenteCreateArgs} args - Arguments to create a Agente.
     * @example
     * // Create one Agente
     * const Agente = await prisma.agente.create({
     *   data: {
     *     // ... data to create a Agente
     *   }
     * })
     * 
     */
    create<T extends AgenteCreateArgs>(args: SelectSubset<T, AgenteCreateArgs<ExtArgs>>): Prisma__AgenteClient<$Result.GetResult<Prisma.$AgentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agentes.
     * @param {AgenteCreateManyArgs} args - Arguments to create many Agentes.
     * @example
     * // Create many Agentes
     * const agente = await prisma.agente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgenteCreateManyArgs>(args?: SelectSubset<T, AgenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agentes and returns the data saved in the database.
     * @param {AgenteCreateManyAndReturnArgs} args - Arguments to create many Agentes.
     * @example
     * // Create many Agentes
     * const agente = await prisma.agente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agentes and only return the `id`
     * const agenteWithIdOnly = await prisma.agente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgenteCreateManyAndReturnArgs>(args?: SelectSubset<T, AgenteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agente.
     * @param {AgenteDeleteArgs} args - Arguments to delete one Agente.
     * @example
     * // Delete one Agente
     * const Agente = await prisma.agente.delete({
     *   where: {
     *     // ... filter to delete one Agente
     *   }
     * })
     * 
     */
    delete<T extends AgenteDeleteArgs>(args: SelectSubset<T, AgenteDeleteArgs<ExtArgs>>): Prisma__AgenteClient<$Result.GetResult<Prisma.$AgentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agente.
     * @param {AgenteUpdateArgs} args - Arguments to update one Agente.
     * @example
     * // Update one Agente
     * const agente = await prisma.agente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgenteUpdateArgs>(args: SelectSubset<T, AgenteUpdateArgs<ExtArgs>>): Prisma__AgenteClient<$Result.GetResult<Prisma.$AgentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agentes.
     * @param {AgenteDeleteManyArgs} args - Arguments to filter Agentes to delete.
     * @example
     * // Delete a few Agentes
     * const { count } = await prisma.agente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgenteDeleteManyArgs>(args?: SelectSubset<T, AgenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgenteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agentes
     * const agente = await prisma.agente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgenteUpdateManyArgs>(args: SelectSubset<T, AgenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agentes and returns the data updated in the database.
     * @param {AgenteUpdateManyAndReturnArgs} args - Arguments to update many Agentes.
     * @example
     * // Update many Agentes
     * const agente = await prisma.agente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agentes and only return the `id`
     * const agenteWithIdOnly = await prisma.agente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AgenteUpdateManyAndReturnArgs>(args: SelectSubset<T, AgenteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agente.
     * @param {AgenteUpsertArgs} args - Arguments to update or create a Agente.
     * @example
     * // Update or create a Agente
     * const agente = await prisma.agente.upsert({
     *   create: {
     *     // ... data to create a Agente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agente we want to update
     *   }
     * })
     */
    upsert<T extends AgenteUpsertArgs>(args: SelectSubset<T, AgenteUpsertArgs<ExtArgs>>): Prisma__AgenteClient<$Result.GetResult<Prisma.$AgentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agentes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgenteCountArgs} args - Arguments to filter Agentes to count.
     * @example
     * // Count the number of Agentes
     * const count = await prisma.agente.count({
     *   where: {
     *     // ... the filter for the Agentes we want to count
     *   }
     * })
    **/
    count<T extends AgenteCountArgs>(
      args?: Subset<T, AgenteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgenteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgenteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgenteAggregateArgs>(args: Subset<T, AgenteAggregateArgs>): Prisma.PrismaPromise<GetAgenteAggregateType<T>>

    /**
     * Group by Agente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgenteGroupByArgs} args - Group by arguments.
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
      T extends AgenteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgenteGroupByArgs['orderBy'] }
        : { orderBy?: AgenteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agente model
   */
  readonly fields: AgenteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgenteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    microarea<T extends Agente$microareaArgs<ExtArgs> = {}>(args?: Subset<T, Agente$microareaArgs<ExtArgs>>): Prisma__MicroareaClient<$Result.GetResult<Prisma.$MicroareaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tarefas<T extends Agente$tarefasArgs<ExtArgs> = {}>(args?: Subset<T, Agente$tarefasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pacientes<T extends Agente$pacientesArgs<ExtArgs> = {}>(args?: Subset<T, Agente$pacientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Agente model
   */
  interface AgenteFieldRefs {
    readonly id: FieldRef<"Agente", 'Int'>
    readonly nome: FieldRef<"Agente", 'String'>
    readonly email: FieldRef<"Agente", 'String'>
    readonly senha: FieldRef<"Agente", 'String'>
    readonly cargo: FieldRef<"Agente", 'String'>
    readonly microarea_id: FieldRef<"Agente", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Agente findUnique
   */
  export type AgenteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agente
     */
    select?: AgenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agente
     */
    omit?: AgenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgenteInclude<ExtArgs> | null
    /**
     * Filter, which Agente to fetch.
     */
    where: AgenteWhereUniqueInput
  }

  /**
   * Agente findUniqueOrThrow
   */
  export type AgenteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agente
     */
    select?: AgenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agente
     */
    omit?: AgenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgenteInclude<ExtArgs> | null
    /**
     * Filter, which Agente to fetch.
     */
    where: AgenteWhereUniqueInput
  }

  /**
   * Agente findFirst
   */
  export type AgenteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agente
     */
    select?: AgenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agente
     */
    omit?: AgenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgenteInclude<ExtArgs> | null
    /**
     * Filter, which Agente to fetch.
     */
    where?: AgenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agentes to fetch.
     */
    orderBy?: AgenteOrderByWithRelationInput | AgenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agentes.
     */
    cursor?: AgenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agentes.
     */
    distinct?: AgenteScalarFieldEnum | AgenteScalarFieldEnum[]
  }

  /**
   * Agente findFirstOrThrow
   */
  export type AgenteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agente
     */
    select?: AgenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agente
     */
    omit?: AgenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgenteInclude<ExtArgs> | null
    /**
     * Filter, which Agente to fetch.
     */
    where?: AgenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agentes to fetch.
     */
    orderBy?: AgenteOrderByWithRelationInput | AgenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agentes.
     */
    cursor?: AgenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agentes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agentes.
     */
    distinct?: AgenteScalarFieldEnum | AgenteScalarFieldEnum[]
  }

  /**
   * Agente findMany
   */
  export type AgenteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agente
     */
    select?: AgenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agente
     */
    omit?: AgenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgenteInclude<ExtArgs> | null
    /**
     * Filter, which Agentes to fetch.
     */
    where?: AgenteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agentes to fetch.
     */
    orderBy?: AgenteOrderByWithRelationInput | AgenteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agentes.
     */
    cursor?: AgenteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agentes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agentes.
     */
    skip?: number
    distinct?: AgenteScalarFieldEnum | AgenteScalarFieldEnum[]
  }

  /**
   * Agente create
   */
  export type AgenteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agente
     */
    select?: AgenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agente
     */
    omit?: AgenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgenteInclude<ExtArgs> | null
    /**
     * The data needed to create a Agente.
     */
    data: XOR<AgenteCreateInput, AgenteUncheckedCreateInput>
  }

  /**
   * Agente createMany
   */
  export type AgenteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agentes.
     */
    data: AgenteCreateManyInput | AgenteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agente createManyAndReturn
   */
  export type AgenteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agente
     */
    select?: AgenteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agente
     */
    omit?: AgenteOmit<ExtArgs> | null
    /**
     * The data used to create many Agentes.
     */
    data: AgenteCreateManyInput | AgenteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgenteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agente update
   */
  export type AgenteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agente
     */
    select?: AgenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agente
     */
    omit?: AgenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgenteInclude<ExtArgs> | null
    /**
     * The data needed to update a Agente.
     */
    data: XOR<AgenteUpdateInput, AgenteUncheckedUpdateInput>
    /**
     * Choose, which Agente to update.
     */
    where: AgenteWhereUniqueInput
  }

  /**
   * Agente updateMany
   */
  export type AgenteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agentes.
     */
    data: XOR<AgenteUpdateManyMutationInput, AgenteUncheckedUpdateManyInput>
    /**
     * Filter which Agentes to update
     */
    where?: AgenteWhereInput
    /**
     * Limit how many Agentes to update.
     */
    limit?: number
  }

  /**
   * Agente updateManyAndReturn
   */
  export type AgenteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agente
     */
    select?: AgenteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agente
     */
    omit?: AgenteOmit<ExtArgs> | null
    /**
     * The data used to update Agentes.
     */
    data: XOR<AgenteUpdateManyMutationInput, AgenteUncheckedUpdateManyInput>
    /**
     * Filter which Agentes to update
     */
    where?: AgenteWhereInput
    /**
     * Limit how many Agentes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgenteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agente upsert
   */
  export type AgenteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agente
     */
    select?: AgenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agente
     */
    omit?: AgenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgenteInclude<ExtArgs> | null
    /**
     * The filter to search for the Agente to update in case it exists.
     */
    where: AgenteWhereUniqueInput
    /**
     * In case the Agente found by the `where` argument doesn't exist, create a new Agente with this data.
     */
    create: XOR<AgenteCreateInput, AgenteUncheckedCreateInput>
    /**
     * In case the Agente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgenteUpdateInput, AgenteUncheckedUpdateInput>
  }

  /**
   * Agente delete
   */
  export type AgenteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agente
     */
    select?: AgenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agente
     */
    omit?: AgenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgenteInclude<ExtArgs> | null
    /**
     * Filter which Agente to delete.
     */
    where: AgenteWhereUniqueInput
  }

  /**
   * Agente deleteMany
   */
  export type AgenteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agentes to delete
     */
    where?: AgenteWhereInput
    /**
     * Limit how many Agentes to delete.
     */
    limit?: number
  }

  /**
   * Agente.microarea
   */
  export type Agente$microareaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Microarea
     */
    select?: MicroareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Microarea
     */
    omit?: MicroareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicroareaInclude<ExtArgs> | null
    where?: MicroareaWhereInput
  }

  /**
   * Agente.tarefas
   */
  export type Agente$tarefasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    where?: TarefaWhereInput
    orderBy?: TarefaOrderByWithRelationInput | TarefaOrderByWithRelationInput[]
    cursor?: TarefaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TarefaScalarFieldEnum | TarefaScalarFieldEnum[]
  }

  /**
   * Agente.pacientes
   */
  export type Agente$pacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    cursor?: PacienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Agente without action
   */
  export type AgenteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agente
     */
    select?: AgenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agente
     */
    omit?: AgenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgenteInclude<ExtArgs> | null
  }


  /**
   * Model Paciente
   */

  export type AggregatePaciente = {
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  export type PacienteAvgAggregateOutputType = {
    agente_id: number | null
    microarea_id: number | null
  }

  export type PacienteSumAggregateOutputType = {
    agente_id: number | null
    microarea_id: number | null
  }

  export type PacienteMinAggregateOutputType = {
    cpf: string | null
    nome: string | null
    endereco: string | null
    comorbidades: string | null
    situacao: string | null
    agente_id: number | null
    microarea_id: number | null
  }

  export type PacienteMaxAggregateOutputType = {
    cpf: string | null
    nome: string | null
    endereco: string | null
    comorbidades: string | null
    situacao: string | null
    agente_id: number | null
    microarea_id: number | null
  }

  export type PacienteCountAggregateOutputType = {
    cpf: number
    nome: number
    endereco: number
    comorbidades: number
    situacao: number
    agente_id: number
    microarea_id: number
    _all: number
  }


  export type PacienteAvgAggregateInputType = {
    agente_id?: true
    microarea_id?: true
  }

  export type PacienteSumAggregateInputType = {
    agente_id?: true
    microarea_id?: true
  }

  export type PacienteMinAggregateInputType = {
    cpf?: true
    nome?: true
    endereco?: true
    comorbidades?: true
    situacao?: true
    agente_id?: true
    microarea_id?: true
  }

  export type PacienteMaxAggregateInputType = {
    cpf?: true
    nome?: true
    endereco?: true
    comorbidades?: true
    situacao?: true
    agente_id?: true
    microarea_id?: true
  }

  export type PacienteCountAggregateInputType = {
    cpf?: true
    nome?: true
    endereco?: true
    comorbidades?: true
    situacao?: true
    agente_id?: true
    microarea_id?: true
    _all?: true
  }

  export type PacienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paciente to aggregate.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pacientes
    **/
    _count?: true | PacienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PacienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PacienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacienteMaxAggregateInputType
  }

  export type GetPacienteAggregateType<T extends PacienteAggregateArgs> = {
        [P in keyof T & keyof AggregatePaciente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaciente[P]>
      : GetScalarType<T[P], AggregatePaciente[P]>
  }




  export type PacienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithAggregationInput | PacienteOrderByWithAggregationInput[]
    by: PacienteScalarFieldEnum[] | PacienteScalarFieldEnum
    having?: PacienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacienteCountAggregateInputType | true
    _avg?: PacienteAvgAggregateInputType
    _sum?: PacienteSumAggregateInputType
    _min?: PacienteMinAggregateInputType
    _max?: PacienteMaxAggregateInputType
  }

  export type PacienteGroupByOutputType = {
    cpf: string
    nome: string
    endereco: string | null
    comorbidades: string | null
    situacao: string | null
    agente_id: number | null
    microarea_id: number | null
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  type GetPacienteGroupByPayload<T extends PacienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacienteGroupByOutputType[P]>
            : GetScalarType<T[P], PacienteGroupByOutputType[P]>
        }
      >
    >


  export type PacienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cpf?: boolean
    nome?: boolean
    endereco?: boolean
    comorbidades?: boolean
    situacao?: boolean
    agente_id?: boolean
    microarea_id?: boolean
    agente?: boolean | Paciente$agenteArgs<ExtArgs>
    microarea?: boolean | Paciente$microareaArgs<ExtArgs>
    tarefas?: boolean | Paciente$tarefasArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cpf?: boolean
    nome?: boolean
    endereco?: boolean
    comorbidades?: boolean
    situacao?: boolean
    agente_id?: boolean
    microarea_id?: boolean
    agente?: boolean | Paciente$agenteArgs<ExtArgs>
    microarea?: boolean | Paciente$microareaArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cpf?: boolean
    nome?: boolean
    endereco?: boolean
    comorbidades?: boolean
    situacao?: boolean
    agente_id?: boolean
    microarea_id?: boolean
    agente?: boolean | Paciente$agenteArgs<ExtArgs>
    microarea?: boolean | Paciente$microareaArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectScalar = {
    cpf?: boolean
    nome?: boolean
    endereco?: boolean
    comorbidades?: boolean
    situacao?: boolean
    agente_id?: boolean
    microarea_id?: boolean
  }

  export type PacienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cpf" | "nome" | "endereco" | "comorbidades" | "situacao" | "agente_id" | "microarea_id", ExtArgs["result"]["paciente"]>
  export type PacienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agente?: boolean | Paciente$agenteArgs<ExtArgs>
    microarea?: boolean | Paciente$microareaArgs<ExtArgs>
    tarefas?: boolean | Paciente$tarefasArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PacienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agente?: boolean | Paciente$agenteArgs<ExtArgs>
    microarea?: boolean | Paciente$microareaArgs<ExtArgs>
  }
  export type PacienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agente?: boolean | Paciente$agenteArgs<ExtArgs>
    microarea?: boolean | Paciente$microareaArgs<ExtArgs>
  }

  export type $PacientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paciente"
    objects: {
      agente: Prisma.$AgentePayload<ExtArgs> | null
      microarea: Prisma.$MicroareaPayload<ExtArgs> | null
      tarefas: Prisma.$TarefaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cpf: string
      nome: string
      endereco: string | null
      comorbidades: string | null
      situacao: string | null
      agente_id: number | null
      microarea_id: number | null
    }, ExtArgs["result"]["paciente"]>
    composites: {}
  }

  type PacienteGetPayload<S extends boolean | null | undefined | PacienteDefaultArgs> = $Result.GetResult<Prisma.$PacientePayload, S>

  type PacienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PacienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacienteCountAggregateInputType | true
    }

  export interface PacienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paciente'], meta: { name: 'Paciente' } }
    /**
     * Find zero or one Paciente that matches the filter.
     * @param {PacienteFindUniqueArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PacienteFindUniqueArgs>(args: SelectSubset<T, PacienteFindUniqueArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paciente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PacienteFindUniqueOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PacienteFindUniqueOrThrowArgs>(args: SelectSubset<T, PacienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PacienteFindFirstArgs>(args?: SelectSubset<T, PacienteFindFirstArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PacienteFindFirstOrThrowArgs>(args?: SelectSubset<T, PacienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacientes
     * const pacientes = await prisma.paciente.findMany()
     * 
     * // Get first 10 Pacientes
     * const pacientes = await prisma.paciente.findMany({ take: 10 })
     * 
     * // Only select the `cpf`
     * const pacienteWithCpfOnly = await prisma.paciente.findMany({ select: { cpf: true } })
     * 
     */
    findMany<T extends PacienteFindManyArgs>(args?: SelectSubset<T, PacienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paciente.
     * @param {PacienteCreateArgs} args - Arguments to create a Paciente.
     * @example
     * // Create one Paciente
     * const Paciente = await prisma.paciente.create({
     *   data: {
     *     // ... data to create a Paciente
     *   }
     * })
     * 
     */
    create<T extends PacienteCreateArgs>(args: SelectSubset<T, PacienteCreateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pacientes.
     * @param {PacienteCreateManyArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PacienteCreateManyArgs>(args?: SelectSubset<T, PacienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pacientes and returns the data saved in the database.
     * @param {PacienteCreateManyAndReturnArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pacientes and only return the `cpf`
     * const pacienteWithCpfOnly = await prisma.paciente.createManyAndReturn({
     *   select: { cpf: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PacienteCreateManyAndReturnArgs>(args?: SelectSubset<T, PacienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Paciente.
     * @param {PacienteDeleteArgs} args - Arguments to delete one Paciente.
     * @example
     * // Delete one Paciente
     * const Paciente = await prisma.paciente.delete({
     *   where: {
     *     // ... filter to delete one Paciente
     *   }
     * })
     * 
     */
    delete<T extends PacienteDeleteArgs>(args: SelectSubset<T, PacienteDeleteArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paciente.
     * @param {PacienteUpdateArgs} args - Arguments to update one Paciente.
     * @example
     * // Update one Paciente
     * const paciente = await prisma.paciente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PacienteUpdateArgs>(args: SelectSubset<T, PacienteUpdateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pacientes.
     * @param {PacienteDeleteManyArgs} args - Arguments to filter Pacientes to delete.
     * @example
     * // Delete a few Pacientes
     * const { count } = await prisma.paciente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PacienteDeleteManyArgs>(args?: SelectSubset<T, PacienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PacienteUpdateManyArgs>(args: SelectSubset<T, PacienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes and returns the data updated in the database.
     * @param {PacienteUpdateManyAndReturnArgs} args - Arguments to update many Pacientes.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pacientes and only return the `cpf`
     * const pacienteWithCpfOnly = await prisma.paciente.updateManyAndReturn({
     *   select: { cpf: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PacienteUpdateManyAndReturnArgs>(args: SelectSubset<T, PacienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Paciente.
     * @param {PacienteUpsertArgs} args - Arguments to update or create a Paciente.
     * @example
     * // Update or create a Paciente
     * const paciente = await prisma.paciente.upsert({
     *   create: {
     *     // ... data to create a Paciente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paciente we want to update
     *   }
     * })
     */
    upsert<T extends PacienteUpsertArgs>(args: SelectSubset<T, PacienteUpsertArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteCountArgs} args - Arguments to filter Pacientes to count.
     * @example
     * // Count the number of Pacientes
     * const count = await prisma.paciente.count({
     *   where: {
     *     // ... the filter for the Pacientes we want to count
     *   }
     * })
    **/
    count<T extends PacienteCountArgs>(
      args?: Subset<T, PacienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PacienteAggregateArgs>(args: Subset<T, PacienteAggregateArgs>): Prisma.PrismaPromise<GetPacienteAggregateType<T>>

    /**
     * Group by Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteGroupByArgs} args - Group by arguments.
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
      T extends PacienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacienteGroupByArgs['orderBy'] }
        : { orderBy?: PacienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PacienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paciente model
   */
  readonly fields: PacienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paciente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agente<T extends Paciente$agenteArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$agenteArgs<ExtArgs>>): Prisma__AgenteClient<$Result.GetResult<Prisma.$AgentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    microarea<T extends Paciente$microareaArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$microareaArgs<ExtArgs>>): Prisma__MicroareaClient<$Result.GetResult<Prisma.$MicroareaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tarefas<T extends Paciente$tarefasArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$tarefasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Paciente model
   */
  interface PacienteFieldRefs {
    readonly cpf: FieldRef<"Paciente", 'String'>
    readonly nome: FieldRef<"Paciente", 'String'>
    readonly endereco: FieldRef<"Paciente", 'String'>
    readonly comorbidades: FieldRef<"Paciente", 'String'>
    readonly situacao: FieldRef<"Paciente", 'String'>
    readonly agente_id: FieldRef<"Paciente", 'Int'>
    readonly microarea_id: FieldRef<"Paciente", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Paciente findUnique
   */
  export type PacienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findUniqueOrThrow
   */
  export type PacienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findFirst
   */
  export type PacienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findFirstOrThrow
   */
  export type PacienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findMany
   */
  export type PacienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Pacientes to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente create
   */
  export type PacienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Paciente.
     */
    data: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
  }

  /**
   * Paciente createMany
   */
  export type PacienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paciente createManyAndReturn
   */
  export type PacienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Paciente update
   */
  export type PacienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Paciente.
     */
    data: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
    /**
     * Choose, which Paciente to update.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente updateMany
   */
  export type PacienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
  }

  /**
   * Paciente updateManyAndReturn
   */
  export type PacienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Paciente upsert
   */
  export type PacienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Paciente to update in case it exists.
     */
    where: PacienteWhereUniqueInput
    /**
     * In case the Paciente found by the `where` argument doesn't exist, create a new Paciente with this data.
     */
    create: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
    /**
     * In case the Paciente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
  }

  /**
   * Paciente delete
   */
  export type PacienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter which Paciente to delete.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente deleteMany
   */
  export type PacienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pacientes to delete
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to delete.
     */
    limit?: number
  }

  /**
   * Paciente.agente
   */
  export type Paciente$agenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agente
     */
    select?: AgenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agente
     */
    omit?: AgenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgenteInclude<ExtArgs> | null
    where?: AgenteWhereInput
  }

  /**
   * Paciente.microarea
   */
  export type Paciente$microareaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Microarea
     */
    select?: MicroareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Microarea
     */
    omit?: MicroareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MicroareaInclude<ExtArgs> | null
    where?: MicroareaWhereInput
  }

  /**
   * Paciente.tarefas
   */
  export type Paciente$tarefasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    where?: TarefaWhereInput
    orderBy?: TarefaOrderByWithRelationInput | TarefaOrderByWithRelationInput[]
    cursor?: TarefaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TarefaScalarFieldEnum | TarefaScalarFieldEnum[]
  }

  /**
   * Paciente without action
   */
  export type PacienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
  }


  /**
   * Model Tarefa
   */

  export type AggregateTarefa = {
    _count: TarefaCountAggregateOutputType | null
    _avg: TarefaAvgAggregateOutputType | null
    _sum: TarefaSumAggregateOutputType | null
    _min: TarefaMinAggregateOutputType | null
    _max: TarefaMaxAggregateOutputType | null
  }

  export type TarefaAvgAggregateOutputType = {
    id: number | null
    agente_id: number | null
  }

  export type TarefaSumAggregateOutputType = {
    id: number | null
    agente_id: number | null
  }

  export type TarefaMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    status: string | null
    prioridade: string | null
    data_criacao: Date | null
    data_limite: Date | null
    data_conclusao: Date | null
    tipo: string | null
    agente_id: number | null
    paciente_cpf: string | null
  }

  export type TarefaMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    status: string | null
    prioridade: string | null
    data_criacao: Date | null
    data_limite: Date | null
    data_conclusao: Date | null
    tipo: string | null
    agente_id: number | null
    paciente_cpf: string | null
  }

  export type TarefaCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    status: number
    prioridade: number
    data_criacao: number
    data_limite: number
    data_conclusao: number
    tipo: number
    agente_id: number
    paciente_cpf: number
    _all: number
  }


  export type TarefaAvgAggregateInputType = {
    id?: true
    agente_id?: true
  }

  export type TarefaSumAggregateInputType = {
    id?: true
    agente_id?: true
  }

  export type TarefaMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    status?: true
    prioridade?: true
    data_criacao?: true
    data_limite?: true
    data_conclusao?: true
    tipo?: true
    agente_id?: true
    paciente_cpf?: true
  }

  export type TarefaMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    status?: true
    prioridade?: true
    data_criacao?: true
    data_limite?: true
    data_conclusao?: true
    tipo?: true
    agente_id?: true
    paciente_cpf?: true
  }

  export type TarefaCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    status?: true
    prioridade?: true
    data_criacao?: true
    data_limite?: true
    data_conclusao?: true
    tipo?: true
    agente_id?: true
    paciente_cpf?: true
    _all?: true
  }

  export type TarefaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tarefa to aggregate.
     */
    where?: TarefaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tarefas to fetch.
     */
    orderBy?: TarefaOrderByWithRelationInput | TarefaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TarefaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tarefas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tarefas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tarefas
    **/
    _count?: true | TarefaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TarefaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TarefaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TarefaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TarefaMaxAggregateInputType
  }

  export type GetTarefaAggregateType<T extends TarefaAggregateArgs> = {
        [P in keyof T & keyof AggregateTarefa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTarefa[P]>
      : GetScalarType<T[P], AggregateTarefa[P]>
  }




  export type TarefaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TarefaWhereInput
    orderBy?: TarefaOrderByWithAggregationInput | TarefaOrderByWithAggregationInput[]
    by: TarefaScalarFieldEnum[] | TarefaScalarFieldEnum
    having?: TarefaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TarefaCountAggregateInputType | true
    _avg?: TarefaAvgAggregateInputType
    _sum?: TarefaSumAggregateInputType
    _min?: TarefaMinAggregateInputType
    _max?: TarefaMaxAggregateInputType
  }

  export type TarefaGroupByOutputType = {
    id: number
    titulo: string
    descricao: string | null
    status: string
    prioridade: string
    data_criacao: Date
    data_limite: Date | null
    data_conclusao: Date | null
    tipo: string | null
    agente_id: number | null
    paciente_cpf: string | null
    _count: TarefaCountAggregateOutputType | null
    _avg: TarefaAvgAggregateOutputType | null
    _sum: TarefaSumAggregateOutputType | null
    _min: TarefaMinAggregateOutputType | null
    _max: TarefaMaxAggregateOutputType | null
  }

  type GetTarefaGroupByPayload<T extends TarefaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TarefaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TarefaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TarefaGroupByOutputType[P]>
            : GetScalarType<T[P], TarefaGroupByOutputType[P]>
        }
      >
    >


  export type TarefaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    status?: boolean
    prioridade?: boolean
    data_criacao?: boolean
    data_limite?: boolean
    data_conclusao?: boolean
    tipo?: boolean
    agente_id?: boolean
    paciente_cpf?: boolean
    agente?: boolean | Tarefa$agenteArgs<ExtArgs>
    paciente?: boolean | Tarefa$pacienteArgs<ExtArgs>
  }, ExtArgs["result"]["tarefa"]>

  export type TarefaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    status?: boolean
    prioridade?: boolean
    data_criacao?: boolean
    data_limite?: boolean
    data_conclusao?: boolean
    tipo?: boolean
    agente_id?: boolean
    paciente_cpf?: boolean
    agente?: boolean | Tarefa$agenteArgs<ExtArgs>
    paciente?: boolean | Tarefa$pacienteArgs<ExtArgs>
  }, ExtArgs["result"]["tarefa"]>

  export type TarefaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    status?: boolean
    prioridade?: boolean
    data_criacao?: boolean
    data_limite?: boolean
    data_conclusao?: boolean
    tipo?: boolean
    agente_id?: boolean
    paciente_cpf?: boolean
    agente?: boolean | Tarefa$agenteArgs<ExtArgs>
    paciente?: boolean | Tarefa$pacienteArgs<ExtArgs>
  }, ExtArgs["result"]["tarefa"]>

  export type TarefaSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    status?: boolean
    prioridade?: boolean
    data_criacao?: boolean
    data_limite?: boolean
    data_conclusao?: boolean
    tipo?: boolean
    agente_id?: boolean
    paciente_cpf?: boolean
  }

  export type TarefaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "status" | "prioridade" | "data_criacao" | "data_limite" | "data_conclusao" | "tipo" | "agente_id" | "paciente_cpf", ExtArgs["result"]["tarefa"]>
  export type TarefaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agente?: boolean | Tarefa$agenteArgs<ExtArgs>
    paciente?: boolean | Tarefa$pacienteArgs<ExtArgs>
  }
  export type TarefaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agente?: boolean | Tarefa$agenteArgs<ExtArgs>
    paciente?: boolean | Tarefa$pacienteArgs<ExtArgs>
  }
  export type TarefaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agente?: boolean | Tarefa$agenteArgs<ExtArgs>
    paciente?: boolean | Tarefa$pacienteArgs<ExtArgs>
  }

  export type $TarefaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tarefa"
    objects: {
      agente: Prisma.$AgentePayload<ExtArgs> | null
      paciente: Prisma.$PacientePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      descricao: string | null
      status: string
      prioridade: string
      data_criacao: Date
      data_limite: Date | null
      data_conclusao: Date | null
      tipo: string | null
      agente_id: number | null
      paciente_cpf: string | null
    }, ExtArgs["result"]["tarefa"]>
    composites: {}
  }

  type TarefaGetPayload<S extends boolean | null | undefined | TarefaDefaultArgs> = $Result.GetResult<Prisma.$TarefaPayload, S>

  type TarefaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TarefaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TarefaCountAggregateInputType | true
    }

  export interface TarefaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tarefa'], meta: { name: 'Tarefa' } }
    /**
     * Find zero or one Tarefa that matches the filter.
     * @param {TarefaFindUniqueArgs} args - Arguments to find a Tarefa
     * @example
     * // Get one Tarefa
     * const tarefa = await prisma.tarefa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TarefaFindUniqueArgs>(args: SelectSubset<T, TarefaFindUniqueArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tarefa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TarefaFindUniqueOrThrowArgs} args - Arguments to find a Tarefa
     * @example
     * // Get one Tarefa
     * const tarefa = await prisma.tarefa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TarefaFindUniqueOrThrowArgs>(args: SelectSubset<T, TarefaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tarefa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaFindFirstArgs} args - Arguments to find a Tarefa
     * @example
     * // Get one Tarefa
     * const tarefa = await prisma.tarefa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TarefaFindFirstArgs>(args?: SelectSubset<T, TarefaFindFirstArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tarefa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaFindFirstOrThrowArgs} args - Arguments to find a Tarefa
     * @example
     * // Get one Tarefa
     * const tarefa = await prisma.tarefa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TarefaFindFirstOrThrowArgs>(args?: SelectSubset<T, TarefaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tarefas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tarefas
     * const tarefas = await prisma.tarefa.findMany()
     * 
     * // Get first 10 Tarefas
     * const tarefas = await prisma.tarefa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tarefaWithIdOnly = await prisma.tarefa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TarefaFindManyArgs>(args?: SelectSubset<T, TarefaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tarefa.
     * @param {TarefaCreateArgs} args - Arguments to create a Tarefa.
     * @example
     * // Create one Tarefa
     * const Tarefa = await prisma.tarefa.create({
     *   data: {
     *     // ... data to create a Tarefa
     *   }
     * })
     * 
     */
    create<T extends TarefaCreateArgs>(args: SelectSubset<T, TarefaCreateArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tarefas.
     * @param {TarefaCreateManyArgs} args - Arguments to create many Tarefas.
     * @example
     * // Create many Tarefas
     * const tarefa = await prisma.tarefa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TarefaCreateManyArgs>(args?: SelectSubset<T, TarefaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tarefas and returns the data saved in the database.
     * @param {TarefaCreateManyAndReturnArgs} args - Arguments to create many Tarefas.
     * @example
     * // Create many Tarefas
     * const tarefa = await prisma.tarefa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tarefas and only return the `id`
     * const tarefaWithIdOnly = await prisma.tarefa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TarefaCreateManyAndReturnArgs>(args?: SelectSubset<T, TarefaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tarefa.
     * @param {TarefaDeleteArgs} args - Arguments to delete one Tarefa.
     * @example
     * // Delete one Tarefa
     * const Tarefa = await prisma.tarefa.delete({
     *   where: {
     *     // ... filter to delete one Tarefa
     *   }
     * })
     * 
     */
    delete<T extends TarefaDeleteArgs>(args: SelectSubset<T, TarefaDeleteArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tarefa.
     * @param {TarefaUpdateArgs} args - Arguments to update one Tarefa.
     * @example
     * // Update one Tarefa
     * const tarefa = await prisma.tarefa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TarefaUpdateArgs>(args: SelectSubset<T, TarefaUpdateArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tarefas.
     * @param {TarefaDeleteManyArgs} args - Arguments to filter Tarefas to delete.
     * @example
     * // Delete a few Tarefas
     * const { count } = await prisma.tarefa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TarefaDeleteManyArgs>(args?: SelectSubset<T, TarefaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tarefas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tarefas
     * const tarefa = await prisma.tarefa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TarefaUpdateManyArgs>(args: SelectSubset<T, TarefaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tarefas and returns the data updated in the database.
     * @param {TarefaUpdateManyAndReturnArgs} args - Arguments to update many Tarefas.
     * @example
     * // Update many Tarefas
     * const tarefa = await prisma.tarefa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tarefas and only return the `id`
     * const tarefaWithIdOnly = await prisma.tarefa.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TarefaUpdateManyAndReturnArgs>(args: SelectSubset<T, TarefaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tarefa.
     * @param {TarefaUpsertArgs} args - Arguments to update or create a Tarefa.
     * @example
     * // Update or create a Tarefa
     * const tarefa = await prisma.tarefa.upsert({
     *   create: {
     *     // ... data to create a Tarefa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tarefa we want to update
     *   }
     * })
     */
    upsert<T extends TarefaUpsertArgs>(args: SelectSubset<T, TarefaUpsertArgs<ExtArgs>>): Prisma__TarefaClient<$Result.GetResult<Prisma.$TarefaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tarefas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaCountArgs} args - Arguments to filter Tarefas to count.
     * @example
     * // Count the number of Tarefas
     * const count = await prisma.tarefa.count({
     *   where: {
     *     // ... the filter for the Tarefas we want to count
     *   }
     * })
    **/
    count<T extends TarefaCountArgs>(
      args?: Subset<T, TarefaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TarefaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tarefa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TarefaAggregateArgs>(args: Subset<T, TarefaAggregateArgs>): Prisma.PrismaPromise<GetTarefaAggregateType<T>>

    /**
     * Group by Tarefa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TarefaGroupByArgs} args - Group by arguments.
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
      T extends TarefaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TarefaGroupByArgs['orderBy'] }
        : { orderBy?: TarefaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TarefaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTarefaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tarefa model
   */
  readonly fields: TarefaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tarefa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TarefaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agente<T extends Tarefa$agenteArgs<ExtArgs> = {}>(args?: Subset<T, Tarefa$agenteArgs<ExtArgs>>): Prisma__AgenteClient<$Result.GetResult<Prisma.$AgentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    paciente<T extends Tarefa$pacienteArgs<ExtArgs> = {}>(args?: Subset<T, Tarefa$pacienteArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tarefa model
   */
  interface TarefaFieldRefs {
    readonly id: FieldRef<"Tarefa", 'Int'>
    readonly titulo: FieldRef<"Tarefa", 'String'>
    readonly descricao: FieldRef<"Tarefa", 'String'>
    readonly status: FieldRef<"Tarefa", 'String'>
    readonly prioridade: FieldRef<"Tarefa", 'String'>
    readonly data_criacao: FieldRef<"Tarefa", 'DateTime'>
    readonly data_limite: FieldRef<"Tarefa", 'DateTime'>
    readonly data_conclusao: FieldRef<"Tarefa", 'DateTime'>
    readonly tipo: FieldRef<"Tarefa", 'String'>
    readonly agente_id: FieldRef<"Tarefa", 'Int'>
    readonly paciente_cpf: FieldRef<"Tarefa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tarefa findUnique
   */
  export type TarefaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter, which Tarefa to fetch.
     */
    where: TarefaWhereUniqueInput
  }

  /**
   * Tarefa findUniqueOrThrow
   */
  export type TarefaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter, which Tarefa to fetch.
     */
    where: TarefaWhereUniqueInput
  }

  /**
   * Tarefa findFirst
   */
  export type TarefaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter, which Tarefa to fetch.
     */
    where?: TarefaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tarefas to fetch.
     */
    orderBy?: TarefaOrderByWithRelationInput | TarefaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tarefas.
     */
    cursor?: TarefaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tarefas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tarefas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tarefas.
     */
    distinct?: TarefaScalarFieldEnum | TarefaScalarFieldEnum[]
  }

  /**
   * Tarefa findFirstOrThrow
   */
  export type TarefaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter, which Tarefa to fetch.
     */
    where?: TarefaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tarefas to fetch.
     */
    orderBy?: TarefaOrderByWithRelationInput | TarefaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tarefas.
     */
    cursor?: TarefaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tarefas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tarefas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tarefas.
     */
    distinct?: TarefaScalarFieldEnum | TarefaScalarFieldEnum[]
  }

  /**
   * Tarefa findMany
   */
  export type TarefaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter, which Tarefas to fetch.
     */
    where?: TarefaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tarefas to fetch.
     */
    orderBy?: TarefaOrderByWithRelationInput | TarefaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tarefas.
     */
    cursor?: TarefaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tarefas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tarefas.
     */
    skip?: number
    distinct?: TarefaScalarFieldEnum | TarefaScalarFieldEnum[]
  }

  /**
   * Tarefa create
   */
  export type TarefaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * The data needed to create a Tarefa.
     */
    data: XOR<TarefaCreateInput, TarefaUncheckedCreateInput>
  }

  /**
   * Tarefa createMany
   */
  export type TarefaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tarefas.
     */
    data: TarefaCreateManyInput | TarefaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tarefa createManyAndReturn
   */
  export type TarefaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * The data used to create many Tarefas.
     */
    data: TarefaCreateManyInput | TarefaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tarefa update
   */
  export type TarefaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * The data needed to update a Tarefa.
     */
    data: XOR<TarefaUpdateInput, TarefaUncheckedUpdateInput>
    /**
     * Choose, which Tarefa to update.
     */
    where: TarefaWhereUniqueInput
  }

  /**
   * Tarefa updateMany
   */
  export type TarefaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tarefas.
     */
    data: XOR<TarefaUpdateManyMutationInput, TarefaUncheckedUpdateManyInput>
    /**
     * Filter which Tarefas to update
     */
    where?: TarefaWhereInput
    /**
     * Limit how many Tarefas to update.
     */
    limit?: number
  }

  /**
   * Tarefa updateManyAndReturn
   */
  export type TarefaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * The data used to update Tarefas.
     */
    data: XOR<TarefaUpdateManyMutationInput, TarefaUncheckedUpdateManyInput>
    /**
     * Filter which Tarefas to update
     */
    where?: TarefaWhereInput
    /**
     * Limit how many Tarefas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tarefa upsert
   */
  export type TarefaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * The filter to search for the Tarefa to update in case it exists.
     */
    where: TarefaWhereUniqueInput
    /**
     * In case the Tarefa found by the `where` argument doesn't exist, create a new Tarefa with this data.
     */
    create: XOR<TarefaCreateInput, TarefaUncheckedCreateInput>
    /**
     * In case the Tarefa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TarefaUpdateInput, TarefaUncheckedUpdateInput>
  }

  /**
   * Tarefa delete
   */
  export type TarefaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
    /**
     * Filter which Tarefa to delete.
     */
    where: TarefaWhereUniqueInput
  }

  /**
   * Tarefa deleteMany
   */
  export type TarefaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tarefas to delete
     */
    where?: TarefaWhereInput
    /**
     * Limit how many Tarefas to delete.
     */
    limit?: number
  }

  /**
   * Tarefa.agente
   */
  export type Tarefa$agenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agente
     */
    select?: AgenteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agente
     */
    omit?: AgenteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgenteInclude<ExtArgs> | null
    where?: AgenteWhereInput
  }

  /**
   * Tarefa.paciente
   */
  export type Tarefa$pacienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    where?: PacienteWhereInput
  }

  /**
   * Tarefa without action
   */
  export type TarefaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarefa
     */
    select?: TarefaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarefa
     */
    omit?: TarefaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TarefaInclude<ExtArgs> | null
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


  export const MicroareaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao'
  };

  export type MicroareaScalarFieldEnum = (typeof MicroareaScalarFieldEnum)[keyof typeof MicroareaScalarFieldEnum]


  export const AgenteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    cargo: 'cargo',
    microarea_id: 'microarea_id'
  };

  export type AgenteScalarFieldEnum = (typeof AgenteScalarFieldEnum)[keyof typeof AgenteScalarFieldEnum]


  export const PacienteScalarFieldEnum: {
    cpf: 'cpf',
    nome: 'nome',
    endereco: 'endereco',
    comorbidades: 'comorbidades',
    situacao: 'situacao',
    agente_id: 'agente_id',
    microarea_id: 'microarea_id'
  };

  export type PacienteScalarFieldEnum = (typeof PacienteScalarFieldEnum)[keyof typeof PacienteScalarFieldEnum]


  export const TarefaScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    status: 'status',
    prioridade: 'prioridade',
    data_criacao: 'data_criacao',
    data_limite: 'data_limite',
    data_conclusao: 'data_conclusao',
    tipo: 'tipo',
    agente_id: 'agente_id',
    paciente_cpf: 'paciente_cpf'
  };

  export type TarefaScalarFieldEnum = (typeof TarefaScalarFieldEnum)[keyof typeof TarefaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type MicroareaWhereInput = {
    AND?: MicroareaWhereInput | MicroareaWhereInput[]
    OR?: MicroareaWhereInput[]
    NOT?: MicroareaWhereInput | MicroareaWhereInput[]
    id?: IntFilter<"Microarea"> | number
    nome?: StringFilter<"Microarea"> | string
    descricao?: StringNullableFilter<"Microarea"> | string | null
    agentes?: AgenteListRelationFilter
    pacientes?: PacienteListRelationFilter
  }

  export type MicroareaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    agentes?: AgenteOrderByRelationAggregateInput
    pacientes?: PacienteOrderByRelationAggregateInput
  }

  export type MicroareaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: MicroareaWhereInput | MicroareaWhereInput[]
    OR?: MicroareaWhereInput[]
    NOT?: MicroareaWhereInput | MicroareaWhereInput[]
    descricao?: StringNullableFilter<"Microarea"> | string | null
    agentes?: AgenteListRelationFilter
    pacientes?: PacienteListRelationFilter
  }, "id" | "nome">

  export type MicroareaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    _count?: MicroareaCountOrderByAggregateInput
    _avg?: MicroareaAvgOrderByAggregateInput
    _max?: MicroareaMaxOrderByAggregateInput
    _min?: MicroareaMinOrderByAggregateInput
    _sum?: MicroareaSumOrderByAggregateInput
  }

  export type MicroareaScalarWhereWithAggregatesInput = {
    AND?: MicroareaScalarWhereWithAggregatesInput | MicroareaScalarWhereWithAggregatesInput[]
    OR?: MicroareaScalarWhereWithAggregatesInput[]
    NOT?: MicroareaScalarWhereWithAggregatesInput | MicroareaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Microarea"> | number
    nome?: StringWithAggregatesFilter<"Microarea"> | string
    descricao?: StringNullableWithAggregatesFilter<"Microarea"> | string | null
  }

  export type AgenteWhereInput = {
    AND?: AgenteWhereInput | AgenteWhereInput[]
    OR?: AgenteWhereInput[]
    NOT?: AgenteWhereInput | AgenteWhereInput[]
    id?: IntFilter<"Agente"> | number
    nome?: StringFilter<"Agente"> | string
    email?: StringFilter<"Agente"> | string
    senha?: StringFilter<"Agente"> | string
    cargo?: StringNullableFilter<"Agente"> | string | null
    microarea_id?: IntNullableFilter<"Agente"> | number | null
    microarea?: XOR<MicroareaNullableScalarRelationFilter, MicroareaWhereInput> | null
    tarefas?: TarefaListRelationFilter
    pacientes?: PacienteListRelationFilter
  }

  export type AgenteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cargo?: SortOrderInput | SortOrder
    microarea_id?: SortOrderInput | SortOrder
    microarea?: MicroareaOrderByWithRelationInput
    tarefas?: TarefaOrderByRelationAggregateInput
    pacientes?: PacienteOrderByRelationAggregateInput
  }

  export type AgenteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AgenteWhereInput | AgenteWhereInput[]
    OR?: AgenteWhereInput[]
    NOT?: AgenteWhereInput | AgenteWhereInput[]
    nome?: StringFilter<"Agente"> | string
    senha?: StringFilter<"Agente"> | string
    cargo?: StringNullableFilter<"Agente"> | string | null
    microarea_id?: IntNullableFilter<"Agente"> | number | null
    microarea?: XOR<MicroareaNullableScalarRelationFilter, MicroareaWhereInput> | null
    tarefas?: TarefaListRelationFilter
    pacientes?: PacienteListRelationFilter
  }, "id" | "email">

  export type AgenteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cargo?: SortOrderInput | SortOrder
    microarea_id?: SortOrderInput | SortOrder
    _count?: AgenteCountOrderByAggregateInput
    _avg?: AgenteAvgOrderByAggregateInput
    _max?: AgenteMaxOrderByAggregateInput
    _min?: AgenteMinOrderByAggregateInput
    _sum?: AgenteSumOrderByAggregateInput
  }

  export type AgenteScalarWhereWithAggregatesInput = {
    AND?: AgenteScalarWhereWithAggregatesInput | AgenteScalarWhereWithAggregatesInput[]
    OR?: AgenteScalarWhereWithAggregatesInput[]
    NOT?: AgenteScalarWhereWithAggregatesInput | AgenteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Agente"> | number
    nome?: StringWithAggregatesFilter<"Agente"> | string
    email?: StringWithAggregatesFilter<"Agente"> | string
    senha?: StringWithAggregatesFilter<"Agente"> | string
    cargo?: StringNullableWithAggregatesFilter<"Agente"> | string | null
    microarea_id?: IntNullableWithAggregatesFilter<"Agente"> | number | null
  }

  export type PacienteWhereInput = {
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    cpf?: StringFilter<"Paciente"> | string
    nome?: StringFilter<"Paciente"> | string
    endereco?: StringNullableFilter<"Paciente"> | string | null
    comorbidades?: StringNullableFilter<"Paciente"> | string | null
    situacao?: StringNullableFilter<"Paciente"> | string | null
    agente_id?: IntNullableFilter<"Paciente"> | number | null
    microarea_id?: IntNullableFilter<"Paciente"> | number | null
    agente?: XOR<AgenteNullableScalarRelationFilter, AgenteWhereInput> | null
    microarea?: XOR<MicroareaNullableScalarRelationFilter, MicroareaWhereInput> | null
    tarefas?: TarefaListRelationFilter
  }

  export type PacienteOrderByWithRelationInput = {
    cpf?: SortOrder
    nome?: SortOrder
    endereco?: SortOrderInput | SortOrder
    comorbidades?: SortOrderInput | SortOrder
    situacao?: SortOrderInput | SortOrder
    agente_id?: SortOrderInput | SortOrder
    microarea_id?: SortOrderInput | SortOrder
    agente?: AgenteOrderByWithRelationInput
    microarea?: MicroareaOrderByWithRelationInput
    tarefas?: TarefaOrderByRelationAggregateInput
  }

  export type PacienteWhereUniqueInput = Prisma.AtLeast<{
    cpf?: string
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    nome?: StringFilter<"Paciente"> | string
    endereco?: StringNullableFilter<"Paciente"> | string | null
    comorbidades?: StringNullableFilter<"Paciente"> | string | null
    situacao?: StringNullableFilter<"Paciente"> | string | null
    agente_id?: IntNullableFilter<"Paciente"> | number | null
    microarea_id?: IntNullableFilter<"Paciente"> | number | null
    agente?: XOR<AgenteNullableScalarRelationFilter, AgenteWhereInput> | null
    microarea?: XOR<MicroareaNullableScalarRelationFilter, MicroareaWhereInput> | null
    tarefas?: TarefaListRelationFilter
  }, "cpf">

  export type PacienteOrderByWithAggregationInput = {
    cpf?: SortOrder
    nome?: SortOrder
    endereco?: SortOrderInput | SortOrder
    comorbidades?: SortOrderInput | SortOrder
    situacao?: SortOrderInput | SortOrder
    agente_id?: SortOrderInput | SortOrder
    microarea_id?: SortOrderInput | SortOrder
    _count?: PacienteCountOrderByAggregateInput
    _avg?: PacienteAvgOrderByAggregateInput
    _max?: PacienteMaxOrderByAggregateInput
    _min?: PacienteMinOrderByAggregateInput
    _sum?: PacienteSumOrderByAggregateInput
  }

  export type PacienteScalarWhereWithAggregatesInput = {
    AND?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    OR?: PacienteScalarWhereWithAggregatesInput[]
    NOT?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    cpf?: StringWithAggregatesFilter<"Paciente"> | string
    nome?: StringWithAggregatesFilter<"Paciente"> | string
    endereco?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    comorbidades?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    situacao?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    agente_id?: IntNullableWithAggregatesFilter<"Paciente"> | number | null
    microarea_id?: IntNullableWithAggregatesFilter<"Paciente"> | number | null
  }

  export type TarefaWhereInput = {
    AND?: TarefaWhereInput | TarefaWhereInput[]
    OR?: TarefaWhereInput[]
    NOT?: TarefaWhereInput | TarefaWhereInput[]
    id?: IntFilter<"Tarefa"> | number
    titulo?: StringFilter<"Tarefa"> | string
    descricao?: StringNullableFilter<"Tarefa"> | string | null
    status?: StringFilter<"Tarefa"> | string
    prioridade?: StringFilter<"Tarefa"> | string
    data_criacao?: DateTimeFilter<"Tarefa"> | Date | string
    data_limite?: DateTimeNullableFilter<"Tarefa"> | Date | string | null
    data_conclusao?: DateTimeNullableFilter<"Tarefa"> | Date | string | null
    tipo?: StringNullableFilter<"Tarefa"> | string | null
    agente_id?: IntNullableFilter<"Tarefa"> | number | null
    paciente_cpf?: StringNullableFilter<"Tarefa"> | string | null
    agente?: XOR<AgenteNullableScalarRelationFilter, AgenteWhereInput> | null
    paciente?: XOR<PacienteNullableScalarRelationFilter, PacienteWhereInput> | null
  }

  export type TarefaOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    status?: SortOrder
    prioridade?: SortOrder
    data_criacao?: SortOrder
    data_limite?: SortOrderInput | SortOrder
    data_conclusao?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    agente_id?: SortOrderInput | SortOrder
    paciente_cpf?: SortOrderInput | SortOrder
    agente?: AgenteOrderByWithRelationInput
    paciente?: PacienteOrderByWithRelationInput
  }

  export type TarefaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TarefaWhereInput | TarefaWhereInput[]
    OR?: TarefaWhereInput[]
    NOT?: TarefaWhereInput | TarefaWhereInput[]
    titulo?: StringFilter<"Tarefa"> | string
    descricao?: StringNullableFilter<"Tarefa"> | string | null
    status?: StringFilter<"Tarefa"> | string
    prioridade?: StringFilter<"Tarefa"> | string
    data_criacao?: DateTimeFilter<"Tarefa"> | Date | string
    data_limite?: DateTimeNullableFilter<"Tarefa"> | Date | string | null
    data_conclusao?: DateTimeNullableFilter<"Tarefa"> | Date | string | null
    tipo?: StringNullableFilter<"Tarefa"> | string | null
    agente_id?: IntNullableFilter<"Tarefa"> | number | null
    paciente_cpf?: StringNullableFilter<"Tarefa"> | string | null
    agente?: XOR<AgenteNullableScalarRelationFilter, AgenteWhereInput> | null
    paciente?: XOR<PacienteNullableScalarRelationFilter, PacienteWhereInput> | null
  }, "id">

  export type TarefaOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    status?: SortOrder
    prioridade?: SortOrder
    data_criacao?: SortOrder
    data_limite?: SortOrderInput | SortOrder
    data_conclusao?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    agente_id?: SortOrderInput | SortOrder
    paciente_cpf?: SortOrderInput | SortOrder
    _count?: TarefaCountOrderByAggregateInput
    _avg?: TarefaAvgOrderByAggregateInput
    _max?: TarefaMaxOrderByAggregateInput
    _min?: TarefaMinOrderByAggregateInput
    _sum?: TarefaSumOrderByAggregateInput
  }

  export type TarefaScalarWhereWithAggregatesInput = {
    AND?: TarefaScalarWhereWithAggregatesInput | TarefaScalarWhereWithAggregatesInput[]
    OR?: TarefaScalarWhereWithAggregatesInput[]
    NOT?: TarefaScalarWhereWithAggregatesInput | TarefaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tarefa"> | number
    titulo?: StringWithAggregatesFilter<"Tarefa"> | string
    descricao?: StringNullableWithAggregatesFilter<"Tarefa"> | string | null
    status?: StringWithAggregatesFilter<"Tarefa"> | string
    prioridade?: StringWithAggregatesFilter<"Tarefa"> | string
    data_criacao?: DateTimeWithAggregatesFilter<"Tarefa"> | Date | string
    data_limite?: DateTimeNullableWithAggregatesFilter<"Tarefa"> | Date | string | null
    data_conclusao?: DateTimeNullableWithAggregatesFilter<"Tarefa"> | Date | string | null
    tipo?: StringNullableWithAggregatesFilter<"Tarefa"> | string | null
    agente_id?: IntNullableWithAggregatesFilter<"Tarefa"> | number | null
    paciente_cpf?: StringNullableWithAggregatesFilter<"Tarefa"> | string | null
  }

  export type MicroareaCreateInput = {
    nome: string
    descricao?: string | null
    agentes?: AgenteCreateNestedManyWithoutMicroareaInput
    pacientes?: PacienteCreateNestedManyWithoutMicroareaInput
  }

  export type MicroareaUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    agentes?: AgenteUncheckedCreateNestedManyWithoutMicroareaInput
    pacientes?: PacienteUncheckedCreateNestedManyWithoutMicroareaInput
  }

  export type MicroareaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    agentes?: AgenteUpdateManyWithoutMicroareaNestedInput
    pacientes?: PacienteUpdateManyWithoutMicroareaNestedInput
  }

  export type MicroareaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    agentes?: AgenteUncheckedUpdateManyWithoutMicroareaNestedInput
    pacientes?: PacienteUncheckedUpdateManyWithoutMicroareaNestedInput
  }

  export type MicroareaCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
  }

  export type MicroareaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MicroareaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgenteCreateInput = {
    nome: string
    email: string
    senha: string
    cargo?: string | null
    microarea?: MicroareaCreateNestedOneWithoutAgentesInput
    tarefas?: TarefaCreateNestedManyWithoutAgenteInput
    pacientes?: PacienteCreateNestedManyWithoutAgenteInput
  }

  export type AgenteUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    cargo?: string | null
    microarea_id?: number | null
    tarefas?: TarefaUncheckedCreateNestedManyWithoutAgenteInput
    pacientes?: PacienteUncheckedCreateNestedManyWithoutAgenteInput
  }

  export type AgenteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    microarea?: MicroareaUpdateOneWithoutAgentesNestedInput
    tarefas?: TarefaUpdateManyWithoutAgenteNestedInput
    pacientes?: PacienteUpdateManyWithoutAgenteNestedInput
  }

  export type AgenteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    microarea_id?: NullableIntFieldUpdateOperationsInput | number | null
    tarefas?: TarefaUncheckedUpdateManyWithoutAgenteNestedInput
    pacientes?: PacienteUncheckedUpdateManyWithoutAgenteNestedInput
  }

  export type AgenteCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    cargo?: string | null
    microarea_id?: number | null
  }

  export type AgenteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgenteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    microarea_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PacienteCreateInput = {
    cpf: string
    nome: string
    endereco?: string | null
    comorbidades?: string | null
    situacao?: string | null
    agente?: AgenteCreateNestedOneWithoutPacientesInput
    microarea?: MicroareaCreateNestedOneWithoutPacientesInput
    tarefas?: TarefaCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateInput = {
    cpf: string
    nome: string
    endereco?: string | null
    comorbidades?: string | null
    situacao?: string | null
    agente_id?: number | null
    microarea_id?: number | null
    tarefas?: TarefaUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUpdateInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    comorbidades?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    agente?: AgenteUpdateOneWithoutPacientesNestedInput
    microarea?: MicroareaUpdateOneWithoutPacientesNestedInput
    tarefas?: TarefaUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    comorbidades?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    agente_id?: NullableIntFieldUpdateOperationsInput | number | null
    microarea_id?: NullableIntFieldUpdateOperationsInput | number | null
    tarefas?: TarefaUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteCreateManyInput = {
    cpf: string
    nome: string
    endereco?: string | null
    comorbidades?: string | null
    situacao?: string | null
    agente_id?: number | null
    microarea_id?: number | null
  }

  export type PacienteUpdateManyMutationInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    comorbidades?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PacienteUncheckedUpdateManyInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    comorbidades?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    agente_id?: NullableIntFieldUpdateOperationsInput | number | null
    microarea_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TarefaCreateInput = {
    titulo: string
    descricao?: string | null
    status?: string
    prioridade?: string
    data_criacao?: Date | string
    data_limite?: Date | string | null
    data_conclusao?: Date | string | null
    tipo?: string | null
    agente?: AgenteCreateNestedOneWithoutTarefasInput
    paciente?: PacienteCreateNestedOneWithoutTarefasInput
  }

  export type TarefaUncheckedCreateInput = {
    id?: number
    titulo: string
    descricao?: string | null
    status?: string
    prioridade?: string
    data_criacao?: Date | string
    data_limite?: Date | string | null
    data_conclusao?: Date | string | null
    tipo?: string | null
    agente_id?: number | null
    paciente_cpf?: string | null
  }

  export type TarefaUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    prioridade?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_limite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_conclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    agente?: AgenteUpdateOneWithoutTarefasNestedInput
    paciente?: PacienteUpdateOneWithoutTarefasNestedInput
  }

  export type TarefaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    prioridade?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_limite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_conclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    agente_id?: NullableIntFieldUpdateOperationsInput | number | null
    paciente_cpf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TarefaCreateManyInput = {
    id?: number
    titulo: string
    descricao?: string | null
    status?: string
    prioridade?: string
    data_criacao?: Date | string
    data_limite?: Date | string | null
    data_conclusao?: Date | string | null
    tipo?: string | null
    agente_id?: number | null
    paciente_cpf?: string | null
  }

  export type TarefaUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    prioridade?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_limite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_conclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TarefaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    prioridade?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_limite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_conclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    agente_id?: NullableIntFieldUpdateOperationsInput | number | null
    paciente_cpf?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type AgenteListRelationFilter = {
    every?: AgenteWhereInput
    some?: AgenteWhereInput
    none?: AgenteWhereInput
  }

  export type PacienteListRelationFilter = {
    every?: PacienteWhereInput
    some?: PacienteWhereInput
    none?: PacienteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AgenteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PacienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MicroareaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type MicroareaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MicroareaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type MicroareaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
  }

  export type MicroareaSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type MicroareaNullableScalarRelationFilter = {
    is?: MicroareaWhereInput | null
    isNot?: MicroareaWhereInput | null
  }

  export type TarefaListRelationFilter = {
    every?: TarefaWhereInput
    some?: TarefaWhereInput
    none?: TarefaWhereInput
  }

  export type TarefaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgenteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cargo?: SortOrder
    microarea_id?: SortOrder
  }

  export type AgenteAvgOrderByAggregateInput = {
    id?: SortOrder
    microarea_id?: SortOrder
  }

  export type AgenteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cargo?: SortOrder
    microarea_id?: SortOrder
  }

  export type AgenteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    cargo?: SortOrder
    microarea_id?: SortOrder
  }

  export type AgenteSumOrderByAggregateInput = {
    id?: SortOrder
    microarea_id?: SortOrder
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

  export type AgenteNullableScalarRelationFilter = {
    is?: AgenteWhereInput | null
    isNot?: AgenteWhereInput | null
  }

  export type PacienteCountOrderByAggregateInput = {
    cpf?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    comorbidades?: SortOrder
    situacao?: SortOrder
    agente_id?: SortOrder
    microarea_id?: SortOrder
  }

  export type PacienteAvgOrderByAggregateInput = {
    agente_id?: SortOrder
    microarea_id?: SortOrder
  }

  export type PacienteMaxOrderByAggregateInput = {
    cpf?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    comorbidades?: SortOrder
    situacao?: SortOrder
    agente_id?: SortOrder
    microarea_id?: SortOrder
  }

  export type PacienteMinOrderByAggregateInput = {
    cpf?: SortOrder
    nome?: SortOrder
    endereco?: SortOrder
    comorbidades?: SortOrder
    situacao?: SortOrder
    agente_id?: SortOrder
    microarea_id?: SortOrder
  }

  export type PacienteSumOrderByAggregateInput = {
    agente_id?: SortOrder
    microarea_id?: SortOrder
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

  export type PacienteNullableScalarRelationFilter = {
    is?: PacienteWhereInput | null
    isNot?: PacienteWhereInput | null
  }

  export type TarefaCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    prioridade?: SortOrder
    data_criacao?: SortOrder
    data_limite?: SortOrder
    data_conclusao?: SortOrder
    tipo?: SortOrder
    agente_id?: SortOrder
    paciente_cpf?: SortOrder
  }

  export type TarefaAvgOrderByAggregateInput = {
    id?: SortOrder
    agente_id?: SortOrder
  }

  export type TarefaMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    prioridade?: SortOrder
    data_criacao?: SortOrder
    data_limite?: SortOrder
    data_conclusao?: SortOrder
    tipo?: SortOrder
    agente_id?: SortOrder
    paciente_cpf?: SortOrder
  }

  export type TarefaMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    status?: SortOrder
    prioridade?: SortOrder
    data_criacao?: SortOrder
    data_limite?: SortOrder
    data_conclusao?: SortOrder
    tipo?: SortOrder
    agente_id?: SortOrder
    paciente_cpf?: SortOrder
  }

  export type TarefaSumOrderByAggregateInput = {
    id?: SortOrder
    agente_id?: SortOrder
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

  export type AgenteCreateNestedManyWithoutMicroareaInput = {
    create?: XOR<AgenteCreateWithoutMicroareaInput, AgenteUncheckedCreateWithoutMicroareaInput> | AgenteCreateWithoutMicroareaInput[] | AgenteUncheckedCreateWithoutMicroareaInput[]
    connectOrCreate?: AgenteCreateOrConnectWithoutMicroareaInput | AgenteCreateOrConnectWithoutMicroareaInput[]
    createMany?: AgenteCreateManyMicroareaInputEnvelope
    connect?: AgenteWhereUniqueInput | AgenteWhereUniqueInput[]
  }

  export type PacienteCreateNestedManyWithoutMicroareaInput = {
    create?: XOR<PacienteCreateWithoutMicroareaInput, PacienteUncheckedCreateWithoutMicroareaInput> | PacienteCreateWithoutMicroareaInput[] | PacienteUncheckedCreateWithoutMicroareaInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutMicroareaInput | PacienteCreateOrConnectWithoutMicroareaInput[]
    createMany?: PacienteCreateManyMicroareaInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type AgenteUncheckedCreateNestedManyWithoutMicroareaInput = {
    create?: XOR<AgenteCreateWithoutMicroareaInput, AgenteUncheckedCreateWithoutMicroareaInput> | AgenteCreateWithoutMicroareaInput[] | AgenteUncheckedCreateWithoutMicroareaInput[]
    connectOrCreate?: AgenteCreateOrConnectWithoutMicroareaInput | AgenteCreateOrConnectWithoutMicroareaInput[]
    createMany?: AgenteCreateManyMicroareaInputEnvelope
    connect?: AgenteWhereUniqueInput | AgenteWhereUniqueInput[]
  }

  export type PacienteUncheckedCreateNestedManyWithoutMicroareaInput = {
    create?: XOR<PacienteCreateWithoutMicroareaInput, PacienteUncheckedCreateWithoutMicroareaInput> | PacienteCreateWithoutMicroareaInput[] | PacienteUncheckedCreateWithoutMicroareaInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutMicroareaInput | PacienteCreateOrConnectWithoutMicroareaInput[]
    createMany?: PacienteCreateManyMicroareaInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AgenteUpdateManyWithoutMicroareaNestedInput = {
    create?: XOR<AgenteCreateWithoutMicroareaInput, AgenteUncheckedCreateWithoutMicroareaInput> | AgenteCreateWithoutMicroareaInput[] | AgenteUncheckedCreateWithoutMicroareaInput[]
    connectOrCreate?: AgenteCreateOrConnectWithoutMicroareaInput | AgenteCreateOrConnectWithoutMicroareaInput[]
    upsert?: AgenteUpsertWithWhereUniqueWithoutMicroareaInput | AgenteUpsertWithWhereUniqueWithoutMicroareaInput[]
    createMany?: AgenteCreateManyMicroareaInputEnvelope
    set?: AgenteWhereUniqueInput | AgenteWhereUniqueInput[]
    disconnect?: AgenteWhereUniqueInput | AgenteWhereUniqueInput[]
    delete?: AgenteWhereUniqueInput | AgenteWhereUniqueInput[]
    connect?: AgenteWhereUniqueInput | AgenteWhereUniqueInput[]
    update?: AgenteUpdateWithWhereUniqueWithoutMicroareaInput | AgenteUpdateWithWhereUniqueWithoutMicroareaInput[]
    updateMany?: AgenteUpdateManyWithWhereWithoutMicroareaInput | AgenteUpdateManyWithWhereWithoutMicroareaInput[]
    deleteMany?: AgenteScalarWhereInput | AgenteScalarWhereInput[]
  }

  export type PacienteUpdateManyWithoutMicroareaNestedInput = {
    create?: XOR<PacienteCreateWithoutMicroareaInput, PacienteUncheckedCreateWithoutMicroareaInput> | PacienteCreateWithoutMicroareaInput[] | PacienteUncheckedCreateWithoutMicroareaInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutMicroareaInput | PacienteCreateOrConnectWithoutMicroareaInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutMicroareaInput | PacienteUpsertWithWhereUniqueWithoutMicroareaInput[]
    createMany?: PacienteCreateManyMicroareaInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutMicroareaInput | PacienteUpdateWithWhereUniqueWithoutMicroareaInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutMicroareaInput | PacienteUpdateManyWithWhereWithoutMicroareaInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AgenteUncheckedUpdateManyWithoutMicroareaNestedInput = {
    create?: XOR<AgenteCreateWithoutMicroareaInput, AgenteUncheckedCreateWithoutMicroareaInput> | AgenteCreateWithoutMicroareaInput[] | AgenteUncheckedCreateWithoutMicroareaInput[]
    connectOrCreate?: AgenteCreateOrConnectWithoutMicroareaInput | AgenteCreateOrConnectWithoutMicroareaInput[]
    upsert?: AgenteUpsertWithWhereUniqueWithoutMicroareaInput | AgenteUpsertWithWhereUniqueWithoutMicroareaInput[]
    createMany?: AgenteCreateManyMicroareaInputEnvelope
    set?: AgenteWhereUniqueInput | AgenteWhereUniqueInput[]
    disconnect?: AgenteWhereUniqueInput | AgenteWhereUniqueInput[]
    delete?: AgenteWhereUniqueInput | AgenteWhereUniqueInput[]
    connect?: AgenteWhereUniqueInput | AgenteWhereUniqueInput[]
    update?: AgenteUpdateWithWhereUniqueWithoutMicroareaInput | AgenteUpdateWithWhereUniqueWithoutMicroareaInput[]
    updateMany?: AgenteUpdateManyWithWhereWithoutMicroareaInput | AgenteUpdateManyWithWhereWithoutMicroareaInput[]
    deleteMany?: AgenteScalarWhereInput | AgenteScalarWhereInput[]
  }

  export type PacienteUncheckedUpdateManyWithoutMicroareaNestedInput = {
    create?: XOR<PacienteCreateWithoutMicroareaInput, PacienteUncheckedCreateWithoutMicroareaInput> | PacienteCreateWithoutMicroareaInput[] | PacienteUncheckedCreateWithoutMicroareaInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutMicroareaInput | PacienteCreateOrConnectWithoutMicroareaInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutMicroareaInput | PacienteUpsertWithWhereUniqueWithoutMicroareaInput[]
    createMany?: PacienteCreateManyMicroareaInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutMicroareaInput | PacienteUpdateWithWhereUniqueWithoutMicroareaInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutMicroareaInput | PacienteUpdateManyWithWhereWithoutMicroareaInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type MicroareaCreateNestedOneWithoutAgentesInput = {
    create?: XOR<MicroareaCreateWithoutAgentesInput, MicroareaUncheckedCreateWithoutAgentesInput>
    connectOrCreate?: MicroareaCreateOrConnectWithoutAgentesInput
    connect?: MicroareaWhereUniqueInput
  }

  export type TarefaCreateNestedManyWithoutAgenteInput = {
    create?: XOR<TarefaCreateWithoutAgenteInput, TarefaUncheckedCreateWithoutAgenteInput> | TarefaCreateWithoutAgenteInput[] | TarefaUncheckedCreateWithoutAgenteInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutAgenteInput | TarefaCreateOrConnectWithoutAgenteInput[]
    createMany?: TarefaCreateManyAgenteInputEnvelope
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
  }

  export type PacienteCreateNestedManyWithoutAgenteInput = {
    create?: XOR<PacienteCreateWithoutAgenteInput, PacienteUncheckedCreateWithoutAgenteInput> | PacienteCreateWithoutAgenteInput[] | PacienteUncheckedCreateWithoutAgenteInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutAgenteInput | PacienteCreateOrConnectWithoutAgenteInput[]
    createMany?: PacienteCreateManyAgenteInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type TarefaUncheckedCreateNestedManyWithoutAgenteInput = {
    create?: XOR<TarefaCreateWithoutAgenteInput, TarefaUncheckedCreateWithoutAgenteInput> | TarefaCreateWithoutAgenteInput[] | TarefaUncheckedCreateWithoutAgenteInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutAgenteInput | TarefaCreateOrConnectWithoutAgenteInput[]
    createMany?: TarefaCreateManyAgenteInputEnvelope
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
  }

  export type PacienteUncheckedCreateNestedManyWithoutAgenteInput = {
    create?: XOR<PacienteCreateWithoutAgenteInput, PacienteUncheckedCreateWithoutAgenteInput> | PacienteCreateWithoutAgenteInput[] | PacienteUncheckedCreateWithoutAgenteInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutAgenteInput | PacienteCreateOrConnectWithoutAgenteInput[]
    createMany?: PacienteCreateManyAgenteInputEnvelope
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type MicroareaUpdateOneWithoutAgentesNestedInput = {
    create?: XOR<MicroareaCreateWithoutAgentesInput, MicroareaUncheckedCreateWithoutAgentesInput>
    connectOrCreate?: MicroareaCreateOrConnectWithoutAgentesInput
    upsert?: MicroareaUpsertWithoutAgentesInput
    disconnect?: MicroareaWhereInput | boolean
    delete?: MicroareaWhereInput | boolean
    connect?: MicroareaWhereUniqueInput
    update?: XOR<XOR<MicroareaUpdateToOneWithWhereWithoutAgentesInput, MicroareaUpdateWithoutAgentesInput>, MicroareaUncheckedUpdateWithoutAgentesInput>
  }

  export type TarefaUpdateManyWithoutAgenteNestedInput = {
    create?: XOR<TarefaCreateWithoutAgenteInput, TarefaUncheckedCreateWithoutAgenteInput> | TarefaCreateWithoutAgenteInput[] | TarefaUncheckedCreateWithoutAgenteInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutAgenteInput | TarefaCreateOrConnectWithoutAgenteInput[]
    upsert?: TarefaUpsertWithWhereUniqueWithoutAgenteInput | TarefaUpsertWithWhereUniqueWithoutAgenteInput[]
    createMany?: TarefaCreateManyAgenteInputEnvelope
    set?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    disconnect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    delete?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    update?: TarefaUpdateWithWhereUniqueWithoutAgenteInput | TarefaUpdateWithWhereUniqueWithoutAgenteInput[]
    updateMany?: TarefaUpdateManyWithWhereWithoutAgenteInput | TarefaUpdateManyWithWhereWithoutAgenteInput[]
    deleteMany?: TarefaScalarWhereInput | TarefaScalarWhereInput[]
  }

  export type PacienteUpdateManyWithoutAgenteNestedInput = {
    create?: XOR<PacienteCreateWithoutAgenteInput, PacienteUncheckedCreateWithoutAgenteInput> | PacienteCreateWithoutAgenteInput[] | PacienteUncheckedCreateWithoutAgenteInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutAgenteInput | PacienteCreateOrConnectWithoutAgenteInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutAgenteInput | PacienteUpsertWithWhereUniqueWithoutAgenteInput[]
    createMany?: PacienteCreateManyAgenteInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutAgenteInput | PacienteUpdateWithWhereUniqueWithoutAgenteInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutAgenteInput | PacienteUpdateManyWithWhereWithoutAgenteInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TarefaUncheckedUpdateManyWithoutAgenteNestedInput = {
    create?: XOR<TarefaCreateWithoutAgenteInput, TarefaUncheckedCreateWithoutAgenteInput> | TarefaCreateWithoutAgenteInput[] | TarefaUncheckedCreateWithoutAgenteInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutAgenteInput | TarefaCreateOrConnectWithoutAgenteInput[]
    upsert?: TarefaUpsertWithWhereUniqueWithoutAgenteInput | TarefaUpsertWithWhereUniqueWithoutAgenteInput[]
    createMany?: TarefaCreateManyAgenteInputEnvelope
    set?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    disconnect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    delete?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    update?: TarefaUpdateWithWhereUniqueWithoutAgenteInput | TarefaUpdateWithWhereUniqueWithoutAgenteInput[]
    updateMany?: TarefaUpdateManyWithWhereWithoutAgenteInput | TarefaUpdateManyWithWhereWithoutAgenteInput[]
    deleteMany?: TarefaScalarWhereInput | TarefaScalarWhereInput[]
  }

  export type PacienteUncheckedUpdateManyWithoutAgenteNestedInput = {
    create?: XOR<PacienteCreateWithoutAgenteInput, PacienteUncheckedCreateWithoutAgenteInput> | PacienteCreateWithoutAgenteInput[] | PacienteUncheckedCreateWithoutAgenteInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutAgenteInput | PacienteCreateOrConnectWithoutAgenteInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutAgenteInput | PacienteUpsertWithWhereUniqueWithoutAgenteInput[]
    createMany?: PacienteCreateManyAgenteInputEnvelope
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutAgenteInput | PacienteUpdateWithWhereUniqueWithoutAgenteInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutAgenteInput | PacienteUpdateManyWithWhereWithoutAgenteInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type AgenteCreateNestedOneWithoutPacientesInput = {
    create?: XOR<AgenteCreateWithoutPacientesInput, AgenteUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: AgenteCreateOrConnectWithoutPacientesInput
    connect?: AgenteWhereUniqueInput
  }

  export type MicroareaCreateNestedOneWithoutPacientesInput = {
    create?: XOR<MicroareaCreateWithoutPacientesInput, MicroareaUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: MicroareaCreateOrConnectWithoutPacientesInput
    connect?: MicroareaWhereUniqueInput
  }

  export type TarefaCreateNestedManyWithoutPacienteInput = {
    create?: XOR<TarefaCreateWithoutPacienteInput, TarefaUncheckedCreateWithoutPacienteInput> | TarefaCreateWithoutPacienteInput[] | TarefaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutPacienteInput | TarefaCreateOrConnectWithoutPacienteInput[]
    createMany?: TarefaCreateManyPacienteInputEnvelope
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
  }

  export type TarefaUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<TarefaCreateWithoutPacienteInput, TarefaUncheckedCreateWithoutPacienteInput> | TarefaCreateWithoutPacienteInput[] | TarefaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutPacienteInput | TarefaCreateOrConnectWithoutPacienteInput[]
    createMany?: TarefaCreateManyPacienteInputEnvelope
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
  }

  export type AgenteUpdateOneWithoutPacientesNestedInput = {
    create?: XOR<AgenteCreateWithoutPacientesInput, AgenteUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: AgenteCreateOrConnectWithoutPacientesInput
    upsert?: AgenteUpsertWithoutPacientesInput
    disconnect?: AgenteWhereInput | boolean
    delete?: AgenteWhereInput | boolean
    connect?: AgenteWhereUniqueInput
    update?: XOR<XOR<AgenteUpdateToOneWithWhereWithoutPacientesInput, AgenteUpdateWithoutPacientesInput>, AgenteUncheckedUpdateWithoutPacientesInput>
  }

  export type MicroareaUpdateOneWithoutPacientesNestedInput = {
    create?: XOR<MicroareaCreateWithoutPacientesInput, MicroareaUncheckedCreateWithoutPacientesInput>
    connectOrCreate?: MicroareaCreateOrConnectWithoutPacientesInput
    upsert?: MicroareaUpsertWithoutPacientesInput
    disconnect?: MicroareaWhereInput | boolean
    delete?: MicroareaWhereInput | boolean
    connect?: MicroareaWhereUniqueInput
    update?: XOR<XOR<MicroareaUpdateToOneWithWhereWithoutPacientesInput, MicroareaUpdateWithoutPacientesInput>, MicroareaUncheckedUpdateWithoutPacientesInput>
  }

  export type TarefaUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<TarefaCreateWithoutPacienteInput, TarefaUncheckedCreateWithoutPacienteInput> | TarefaCreateWithoutPacienteInput[] | TarefaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutPacienteInput | TarefaCreateOrConnectWithoutPacienteInput[]
    upsert?: TarefaUpsertWithWhereUniqueWithoutPacienteInput | TarefaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: TarefaCreateManyPacienteInputEnvelope
    set?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    disconnect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    delete?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    update?: TarefaUpdateWithWhereUniqueWithoutPacienteInput | TarefaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: TarefaUpdateManyWithWhereWithoutPacienteInput | TarefaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: TarefaScalarWhereInput | TarefaScalarWhereInput[]
  }

  export type TarefaUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<TarefaCreateWithoutPacienteInput, TarefaUncheckedCreateWithoutPacienteInput> | TarefaCreateWithoutPacienteInput[] | TarefaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: TarefaCreateOrConnectWithoutPacienteInput | TarefaCreateOrConnectWithoutPacienteInput[]
    upsert?: TarefaUpsertWithWhereUniqueWithoutPacienteInput | TarefaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: TarefaCreateManyPacienteInputEnvelope
    set?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    disconnect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    delete?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    connect?: TarefaWhereUniqueInput | TarefaWhereUniqueInput[]
    update?: TarefaUpdateWithWhereUniqueWithoutPacienteInput | TarefaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: TarefaUpdateManyWithWhereWithoutPacienteInput | TarefaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: TarefaScalarWhereInput | TarefaScalarWhereInput[]
  }

  export type AgenteCreateNestedOneWithoutTarefasInput = {
    create?: XOR<AgenteCreateWithoutTarefasInput, AgenteUncheckedCreateWithoutTarefasInput>
    connectOrCreate?: AgenteCreateOrConnectWithoutTarefasInput
    connect?: AgenteWhereUniqueInput
  }

  export type PacienteCreateNestedOneWithoutTarefasInput = {
    create?: XOR<PacienteCreateWithoutTarefasInput, PacienteUncheckedCreateWithoutTarefasInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutTarefasInput
    connect?: PacienteWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AgenteUpdateOneWithoutTarefasNestedInput = {
    create?: XOR<AgenteCreateWithoutTarefasInput, AgenteUncheckedCreateWithoutTarefasInput>
    connectOrCreate?: AgenteCreateOrConnectWithoutTarefasInput
    upsert?: AgenteUpsertWithoutTarefasInput
    disconnect?: AgenteWhereInput | boolean
    delete?: AgenteWhereInput | boolean
    connect?: AgenteWhereUniqueInput
    update?: XOR<XOR<AgenteUpdateToOneWithWhereWithoutTarefasInput, AgenteUpdateWithoutTarefasInput>, AgenteUncheckedUpdateWithoutTarefasInput>
  }

  export type PacienteUpdateOneWithoutTarefasNestedInput = {
    create?: XOR<PacienteCreateWithoutTarefasInput, PacienteUncheckedCreateWithoutTarefasInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutTarefasInput
    upsert?: PacienteUpsertWithoutTarefasInput
    disconnect?: PacienteWhereInput | boolean
    delete?: PacienteWhereInput | boolean
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutTarefasInput, PacienteUpdateWithoutTarefasInput>, PacienteUncheckedUpdateWithoutTarefasInput>
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

  export type AgenteCreateWithoutMicroareaInput = {
    nome: string
    email: string
    senha: string
    cargo?: string | null
    tarefas?: TarefaCreateNestedManyWithoutAgenteInput
    pacientes?: PacienteCreateNestedManyWithoutAgenteInput
  }

  export type AgenteUncheckedCreateWithoutMicroareaInput = {
    id?: number
    nome: string
    email: string
    senha: string
    cargo?: string | null
    tarefas?: TarefaUncheckedCreateNestedManyWithoutAgenteInput
    pacientes?: PacienteUncheckedCreateNestedManyWithoutAgenteInput
  }

  export type AgenteCreateOrConnectWithoutMicroareaInput = {
    where: AgenteWhereUniqueInput
    create: XOR<AgenteCreateWithoutMicroareaInput, AgenteUncheckedCreateWithoutMicroareaInput>
  }

  export type AgenteCreateManyMicroareaInputEnvelope = {
    data: AgenteCreateManyMicroareaInput | AgenteCreateManyMicroareaInput[]
    skipDuplicates?: boolean
  }

  export type PacienteCreateWithoutMicroareaInput = {
    cpf: string
    nome: string
    endereco?: string | null
    comorbidades?: string | null
    situacao?: string | null
    agente?: AgenteCreateNestedOneWithoutPacientesInput
    tarefas?: TarefaCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutMicroareaInput = {
    cpf: string
    nome: string
    endereco?: string | null
    comorbidades?: string | null
    situacao?: string | null
    agente_id?: number | null
    tarefas?: TarefaUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutMicroareaInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutMicroareaInput, PacienteUncheckedCreateWithoutMicroareaInput>
  }

  export type PacienteCreateManyMicroareaInputEnvelope = {
    data: PacienteCreateManyMicroareaInput | PacienteCreateManyMicroareaInput[]
    skipDuplicates?: boolean
  }

  export type AgenteUpsertWithWhereUniqueWithoutMicroareaInput = {
    where: AgenteWhereUniqueInput
    update: XOR<AgenteUpdateWithoutMicroareaInput, AgenteUncheckedUpdateWithoutMicroareaInput>
    create: XOR<AgenteCreateWithoutMicroareaInput, AgenteUncheckedCreateWithoutMicroareaInput>
  }

  export type AgenteUpdateWithWhereUniqueWithoutMicroareaInput = {
    where: AgenteWhereUniqueInput
    data: XOR<AgenteUpdateWithoutMicroareaInput, AgenteUncheckedUpdateWithoutMicroareaInput>
  }

  export type AgenteUpdateManyWithWhereWithoutMicroareaInput = {
    where: AgenteScalarWhereInput
    data: XOR<AgenteUpdateManyMutationInput, AgenteUncheckedUpdateManyWithoutMicroareaInput>
  }

  export type AgenteScalarWhereInput = {
    AND?: AgenteScalarWhereInput | AgenteScalarWhereInput[]
    OR?: AgenteScalarWhereInput[]
    NOT?: AgenteScalarWhereInput | AgenteScalarWhereInput[]
    id?: IntFilter<"Agente"> | number
    nome?: StringFilter<"Agente"> | string
    email?: StringFilter<"Agente"> | string
    senha?: StringFilter<"Agente"> | string
    cargo?: StringNullableFilter<"Agente"> | string | null
    microarea_id?: IntNullableFilter<"Agente"> | number | null
  }

  export type PacienteUpsertWithWhereUniqueWithoutMicroareaInput = {
    where: PacienteWhereUniqueInput
    update: XOR<PacienteUpdateWithoutMicroareaInput, PacienteUncheckedUpdateWithoutMicroareaInput>
    create: XOR<PacienteCreateWithoutMicroareaInput, PacienteUncheckedCreateWithoutMicroareaInput>
  }

  export type PacienteUpdateWithWhereUniqueWithoutMicroareaInput = {
    where: PacienteWhereUniqueInput
    data: XOR<PacienteUpdateWithoutMicroareaInput, PacienteUncheckedUpdateWithoutMicroareaInput>
  }

  export type PacienteUpdateManyWithWhereWithoutMicroareaInput = {
    where: PacienteScalarWhereInput
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyWithoutMicroareaInput>
  }

  export type PacienteScalarWhereInput = {
    AND?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
    OR?: PacienteScalarWhereInput[]
    NOT?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
    cpf?: StringFilter<"Paciente"> | string
    nome?: StringFilter<"Paciente"> | string
    endereco?: StringNullableFilter<"Paciente"> | string | null
    comorbidades?: StringNullableFilter<"Paciente"> | string | null
    situacao?: StringNullableFilter<"Paciente"> | string | null
    agente_id?: IntNullableFilter<"Paciente"> | number | null
    microarea_id?: IntNullableFilter<"Paciente"> | number | null
  }

  export type MicroareaCreateWithoutAgentesInput = {
    nome: string
    descricao?: string | null
    pacientes?: PacienteCreateNestedManyWithoutMicroareaInput
  }

  export type MicroareaUncheckedCreateWithoutAgentesInput = {
    id?: number
    nome: string
    descricao?: string | null
    pacientes?: PacienteUncheckedCreateNestedManyWithoutMicroareaInput
  }

  export type MicroareaCreateOrConnectWithoutAgentesInput = {
    where: MicroareaWhereUniqueInput
    create: XOR<MicroareaCreateWithoutAgentesInput, MicroareaUncheckedCreateWithoutAgentesInput>
  }

  export type TarefaCreateWithoutAgenteInput = {
    titulo: string
    descricao?: string | null
    status?: string
    prioridade?: string
    data_criacao?: Date | string
    data_limite?: Date | string | null
    data_conclusao?: Date | string | null
    tipo?: string | null
    paciente?: PacienteCreateNestedOneWithoutTarefasInput
  }

  export type TarefaUncheckedCreateWithoutAgenteInput = {
    id?: number
    titulo: string
    descricao?: string | null
    status?: string
    prioridade?: string
    data_criacao?: Date | string
    data_limite?: Date | string | null
    data_conclusao?: Date | string | null
    tipo?: string | null
    paciente_cpf?: string | null
  }

  export type TarefaCreateOrConnectWithoutAgenteInput = {
    where: TarefaWhereUniqueInput
    create: XOR<TarefaCreateWithoutAgenteInput, TarefaUncheckedCreateWithoutAgenteInput>
  }

  export type TarefaCreateManyAgenteInputEnvelope = {
    data: TarefaCreateManyAgenteInput | TarefaCreateManyAgenteInput[]
    skipDuplicates?: boolean
  }

  export type PacienteCreateWithoutAgenteInput = {
    cpf: string
    nome: string
    endereco?: string | null
    comorbidades?: string | null
    situacao?: string | null
    microarea?: MicroareaCreateNestedOneWithoutPacientesInput
    tarefas?: TarefaCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutAgenteInput = {
    cpf: string
    nome: string
    endereco?: string | null
    comorbidades?: string | null
    situacao?: string | null
    microarea_id?: number | null
    tarefas?: TarefaUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutAgenteInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutAgenteInput, PacienteUncheckedCreateWithoutAgenteInput>
  }

  export type PacienteCreateManyAgenteInputEnvelope = {
    data: PacienteCreateManyAgenteInput | PacienteCreateManyAgenteInput[]
    skipDuplicates?: boolean
  }

  export type MicroareaUpsertWithoutAgentesInput = {
    update: XOR<MicroareaUpdateWithoutAgentesInput, MicroareaUncheckedUpdateWithoutAgentesInput>
    create: XOR<MicroareaCreateWithoutAgentesInput, MicroareaUncheckedCreateWithoutAgentesInput>
    where?: MicroareaWhereInput
  }

  export type MicroareaUpdateToOneWithWhereWithoutAgentesInput = {
    where?: MicroareaWhereInput
    data: XOR<MicroareaUpdateWithoutAgentesInput, MicroareaUncheckedUpdateWithoutAgentesInput>
  }

  export type MicroareaUpdateWithoutAgentesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    pacientes?: PacienteUpdateManyWithoutMicroareaNestedInput
  }

  export type MicroareaUncheckedUpdateWithoutAgentesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    pacientes?: PacienteUncheckedUpdateManyWithoutMicroareaNestedInput
  }

  export type TarefaUpsertWithWhereUniqueWithoutAgenteInput = {
    where: TarefaWhereUniqueInput
    update: XOR<TarefaUpdateWithoutAgenteInput, TarefaUncheckedUpdateWithoutAgenteInput>
    create: XOR<TarefaCreateWithoutAgenteInput, TarefaUncheckedCreateWithoutAgenteInput>
  }

  export type TarefaUpdateWithWhereUniqueWithoutAgenteInput = {
    where: TarefaWhereUniqueInput
    data: XOR<TarefaUpdateWithoutAgenteInput, TarefaUncheckedUpdateWithoutAgenteInput>
  }

  export type TarefaUpdateManyWithWhereWithoutAgenteInput = {
    where: TarefaScalarWhereInput
    data: XOR<TarefaUpdateManyMutationInput, TarefaUncheckedUpdateManyWithoutAgenteInput>
  }

  export type TarefaScalarWhereInput = {
    AND?: TarefaScalarWhereInput | TarefaScalarWhereInput[]
    OR?: TarefaScalarWhereInput[]
    NOT?: TarefaScalarWhereInput | TarefaScalarWhereInput[]
    id?: IntFilter<"Tarefa"> | number
    titulo?: StringFilter<"Tarefa"> | string
    descricao?: StringNullableFilter<"Tarefa"> | string | null
    status?: StringFilter<"Tarefa"> | string
    prioridade?: StringFilter<"Tarefa"> | string
    data_criacao?: DateTimeFilter<"Tarefa"> | Date | string
    data_limite?: DateTimeNullableFilter<"Tarefa"> | Date | string | null
    data_conclusao?: DateTimeNullableFilter<"Tarefa"> | Date | string | null
    tipo?: StringNullableFilter<"Tarefa"> | string | null
    agente_id?: IntNullableFilter<"Tarefa"> | number | null
    paciente_cpf?: StringNullableFilter<"Tarefa"> | string | null
  }

  export type PacienteUpsertWithWhereUniqueWithoutAgenteInput = {
    where: PacienteWhereUniqueInput
    update: XOR<PacienteUpdateWithoutAgenteInput, PacienteUncheckedUpdateWithoutAgenteInput>
    create: XOR<PacienteCreateWithoutAgenteInput, PacienteUncheckedCreateWithoutAgenteInput>
  }

  export type PacienteUpdateWithWhereUniqueWithoutAgenteInput = {
    where: PacienteWhereUniqueInput
    data: XOR<PacienteUpdateWithoutAgenteInput, PacienteUncheckedUpdateWithoutAgenteInput>
  }

  export type PacienteUpdateManyWithWhereWithoutAgenteInput = {
    where: PacienteScalarWhereInput
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyWithoutAgenteInput>
  }

  export type AgenteCreateWithoutPacientesInput = {
    nome: string
    email: string
    senha: string
    cargo?: string | null
    microarea?: MicroareaCreateNestedOneWithoutAgentesInput
    tarefas?: TarefaCreateNestedManyWithoutAgenteInput
  }

  export type AgenteUncheckedCreateWithoutPacientesInput = {
    id?: number
    nome: string
    email: string
    senha: string
    cargo?: string | null
    microarea_id?: number | null
    tarefas?: TarefaUncheckedCreateNestedManyWithoutAgenteInput
  }

  export type AgenteCreateOrConnectWithoutPacientesInput = {
    where: AgenteWhereUniqueInput
    create: XOR<AgenteCreateWithoutPacientesInput, AgenteUncheckedCreateWithoutPacientesInput>
  }

  export type MicroareaCreateWithoutPacientesInput = {
    nome: string
    descricao?: string | null
    agentes?: AgenteCreateNestedManyWithoutMicroareaInput
  }

  export type MicroareaUncheckedCreateWithoutPacientesInput = {
    id?: number
    nome: string
    descricao?: string | null
    agentes?: AgenteUncheckedCreateNestedManyWithoutMicroareaInput
  }

  export type MicroareaCreateOrConnectWithoutPacientesInput = {
    where: MicroareaWhereUniqueInput
    create: XOR<MicroareaCreateWithoutPacientesInput, MicroareaUncheckedCreateWithoutPacientesInput>
  }

  export type TarefaCreateWithoutPacienteInput = {
    titulo: string
    descricao?: string | null
    status?: string
    prioridade?: string
    data_criacao?: Date | string
    data_limite?: Date | string | null
    data_conclusao?: Date | string | null
    tipo?: string | null
    agente?: AgenteCreateNestedOneWithoutTarefasInput
  }

  export type TarefaUncheckedCreateWithoutPacienteInput = {
    id?: number
    titulo: string
    descricao?: string | null
    status?: string
    prioridade?: string
    data_criacao?: Date | string
    data_limite?: Date | string | null
    data_conclusao?: Date | string | null
    tipo?: string | null
    agente_id?: number | null
  }

  export type TarefaCreateOrConnectWithoutPacienteInput = {
    where: TarefaWhereUniqueInput
    create: XOR<TarefaCreateWithoutPacienteInput, TarefaUncheckedCreateWithoutPacienteInput>
  }

  export type TarefaCreateManyPacienteInputEnvelope = {
    data: TarefaCreateManyPacienteInput | TarefaCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type AgenteUpsertWithoutPacientesInput = {
    update: XOR<AgenteUpdateWithoutPacientesInput, AgenteUncheckedUpdateWithoutPacientesInput>
    create: XOR<AgenteCreateWithoutPacientesInput, AgenteUncheckedCreateWithoutPacientesInput>
    where?: AgenteWhereInput
  }

  export type AgenteUpdateToOneWithWhereWithoutPacientesInput = {
    where?: AgenteWhereInput
    data: XOR<AgenteUpdateWithoutPacientesInput, AgenteUncheckedUpdateWithoutPacientesInput>
  }

  export type AgenteUpdateWithoutPacientesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    microarea?: MicroareaUpdateOneWithoutAgentesNestedInput
    tarefas?: TarefaUpdateManyWithoutAgenteNestedInput
  }

  export type AgenteUncheckedUpdateWithoutPacientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    microarea_id?: NullableIntFieldUpdateOperationsInput | number | null
    tarefas?: TarefaUncheckedUpdateManyWithoutAgenteNestedInput
  }

  export type MicroareaUpsertWithoutPacientesInput = {
    update: XOR<MicroareaUpdateWithoutPacientesInput, MicroareaUncheckedUpdateWithoutPacientesInput>
    create: XOR<MicroareaCreateWithoutPacientesInput, MicroareaUncheckedCreateWithoutPacientesInput>
    where?: MicroareaWhereInput
  }

  export type MicroareaUpdateToOneWithWhereWithoutPacientesInput = {
    where?: MicroareaWhereInput
    data: XOR<MicroareaUpdateWithoutPacientesInput, MicroareaUncheckedUpdateWithoutPacientesInput>
  }

  export type MicroareaUpdateWithoutPacientesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    agentes?: AgenteUpdateManyWithoutMicroareaNestedInput
  }

  export type MicroareaUncheckedUpdateWithoutPacientesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    agentes?: AgenteUncheckedUpdateManyWithoutMicroareaNestedInput
  }

  export type TarefaUpsertWithWhereUniqueWithoutPacienteInput = {
    where: TarefaWhereUniqueInput
    update: XOR<TarefaUpdateWithoutPacienteInput, TarefaUncheckedUpdateWithoutPacienteInput>
    create: XOR<TarefaCreateWithoutPacienteInput, TarefaUncheckedCreateWithoutPacienteInput>
  }

  export type TarefaUpdateWithWhereUniqueWithoutPacienteInput = {
    where: TarefaWhereUniqueInput
    data: XOR<TarefaUpdateWithoutPacienteInput, TarefaUncheckedUpdateWithoutPacienteInput>
  }

  export type TarefaUpdateManyWithWhereWithoutPacienteInput = {
    where: TarefaScalarWhereInput
    data: XOR<TarefaUpdateManyMutationInput, TarefaUncheckedUpdateManyWithoutPacienteInput>
  }

  export type AgenteCreateWithoutTarefasInput = {
    nome: string
    email: string
    senha: string
    cargo?: string | null
    microarea?: MicroareaCreateNestedOneWithoutAgentesInput
    pacientes?: PacienteCreateNestedManyWithoutAgenteInput
  }

  export type AgenteUncheckedCreateWithoutTarefasInput = {
    id?: number
    nome: string
    email: string
    senha: string
    cargo?: string | null
    microarea_id?: number | null
    pacientes?: PacienteUncheckedCreateNestedManyWithoutAgenteInput
  }

  export type AgenteCreateOrConnectWithoutTarefasInput = {
    where: AgenteWhereUniqueInput
    create: XOR<AgenteCreateWithoutTarefasInput, AgenteUncheckedCreateWithoutTarefasInput>
  }

  export type PacienteCreateWithoutTarefasInput = {
    cpf: string
    nome: string
    endereco?: string | null
    comorbidades?: string | null
    situacao?: string | null
    agente?: AgenteCreateNestedOneWithoutPacientesInput
    microarea?: MicroareaCreateNestedOneWithoutPacientesInput
  }

  export type PacienteUncheckedCreateWithoutTarefasInput = {
    cpf: string
    nome: string
    endereco?: string | null
    comorbidades?: string | null
    situacao?: string | null
    agente_id?: number | null
    microarea_id?: number | null
  }

  export type PacienteCreateOrConnectWithoutTarefasInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutTarefasInput, PacienteUncheckedCreateWithoutTarefasInput>
  }

  export type AgenteUpsertWithoutTarefasInput = {
    update: XOR<AgenteUpdateWithoutTarefasInput, AgenteUncheckedUpdateWithoutTarefasInput>
    create: XOR<AgenteCreateWithoutTarefasInput, AgenteUncheckedCreateWithoutTarefasInput>
    where?: AgenteWhereInput
  }

  export type AgenteUpdateToOneWithWhereWithoutTarefasInput = {
    where?: AgenteWhereInput
    data: XOR<AgenteUpdateWithoutTarefasInput, AgenteUncheckedUpdateWithoutTarefasInput>
  }

  export type AgenteUpdateWithoutTarefasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    microarea?: MicroareaUpdateOneWithoutAgentesNestedInput
    pacientes?: PacienteUpdateManyWithoutAgenteNestedInput
  }

  export type AgenteUncheckedUpdateWithoutTarefasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    microarea_id?: NullableIntFieldUpdateOperationsInput | number | null
    pacientes?: PacienteUncheckedUpdateManyWithoutAgenteNestedInput
  }

  export type PacienteUpsertWithoutTarefasInput = {
    update: XOR<PacienteUpdateWithoutTarefasInput, PacienteUncheckedUpdateWithoutTarefasInput>
    create: XOR<PacienteCreateWithoutTarefasInput, PacienteUncheckedCreateWithoutTarefasInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutTarefasInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutTarefasInput, PacienteUncheckedUpdateWithoutTarefasInput>
  }

  export type PacienteUpdateWithoutTarefasInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    comorbidades?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    agente?: AgenteUpdateOneWithoutPacientesNestedInput
    microarea?: MicroareaUpdateOneWithoutPacientesNestedInput
  }

  export type PacienteUncheckedUpdateWithoutTarefasInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    comorbidades?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    agente_id?: NullableIntFieldUpdateOperationsInput | number | null
    microarea_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AgenteCreateManyMicroareaInput = {
    id?: number
    nome: string
    email: string
    senha: string
    cargo?: string | null
  }

  export type PacienteCreateManyMicroareaInput = {
    cpf: string
    nome: string
    endereco?: string | null
    comorbidades?: string | null
    situacao?: string | null
    agente_id?: number | null
  }

  export type AgenteUpdateWithoutMicroareaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    tarefas?: TarefaUpdateManyWithoutAgenteNestedInput
    pacientes?: PacienteUpdateManyWithoutAgenteNestedInput
  }

  export type AgenteUncheckedUpdateWithoutMicroareaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    tarefas?: TarefaUncheckedUpdateManyWithoutAgenteNestedInput
    pacientes?: PacienteUncheckedUpdateManyWithoutAgenteNestedInput
  }

  export type AgenteUncheckedUpdateManyWithoutMicroareaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PacienteUpdateWithoutMicroareaInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    comorbidades?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    agente?: AgenteUpdateOneWithoutPacientesNestedInput
    tarefas?: TarefaUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutMicroareaInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    comorbidades?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    agente_id?: NullableIntFieldUpdateOperationsInput | number | null
    tarefas?: TarefaUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateManyWithoutMicroareaInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    comorbidades?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    agente_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TarefaCreateManyAgenteInput = {
    id?: number
    titulo: string
    descricao?: string | null
    status?: string
    prioridade?: string
    data_criacao?: Date | string
    data_limite?: Date | string | null
    data_conclusao?: Date | string | null
    tipo?: string | null
    paciente_cpf?: string | null
  }

  export type PacienteCreateManyAgenteInput = {
    cpf: string
    nome: string
    endereco?: string | null
    comorbidades?: string | null
    situacao?: string | null
    microarea_id?: number | null
  }

  export type TarefaUpdateWithoutAgenteInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    prioridade?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_limite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_conclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    paciente?: PacienteUpdateOneWithoutTarefasNestedInput
  }

  export type TarefaUncheckedUpdateWithoutAgenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    prioridade?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_limite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_conclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    paciente_cpf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TarefaUncheckedUpdateManyWithoutAgenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    prioridade?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_limite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_conclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    paciente_cpf?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PacienteUpdateWithoutAgenteInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    comorbidades?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    microarea?: MicroareaUpdateOneWithoutPacientesNestedInput
    tarefas?: TarefaUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutAgenteInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    comorbidades?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    microarea_id?: NullableIntFieldUpdateOperationsInput | number | null
    tarefas?: TarefaUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateManyWithoutAgenteInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    endereco?: NullableStringFieldUpdateOperationsInput | string | null
    comorbidades?: NullableStringFieldUpdateOperationsInput | string | null
    situacao?: NullableStringFieldUpdateOperationsInput | string | null
    microarea_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TarefaCreateManyPacienteInput = {
    id?: number
    titulo: string
    descricao?: string | null
    status?: string
    prioridade?: string
    data_criacao?: Date | string
    data_limite?: Date | string | null
    data_conclusao?: Date | string | null
    tipo?: string | null
    agente_id?: number | null
  }

  export type TarefaUpdateWithoutPacienteInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    prioridade?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_limite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_conclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    agente?: AgenteUpdateOneWithoutTarefasNestedInput
  }

  export type TarefaUncheckedUpdateWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    prioridade?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_limite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_conclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    agente_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TarefaUncheckedUpdateManyWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    prioridade?: StringFieldUpdateOperationsInput | string
    data_criacao?: DateTimeFieldUpdateOperationsInput | Date | string
    data_limite?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_conclusao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    agente_id?: NullableIntFieldUpdateOperationsInput | number | null
  }



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