
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Alternative
 * 
 */
export type Alternative = $Result.DefaultSelection<Prisma.$AlternativePayload>
/**
 * Model Material
 * 
 */
export type Material = $Result.DefaultSelection<Prisma.$MaterialPayload>
/**
 * Model Preset
 * 
 */
export type Preset = $Result.DefaultSelection<Prisma.$PresetPayload>
/**
 * Model UserQuestion
 * 
 */
export type UserQuestion = $Result.DefaultSelection<Prisma.$UserQuestionPayload>
/**
 * Model UserMaterial
 * 
 */
export type UserMaterial = $Result.DefaultSelection<Prisma.$UserMaterialPayload>
/**
 * Model QuestionHasMaterial
 * 
 */
export type QuestionHasMaterial = $Result.DefaultSelection<Prisma.$QuestionHasMaterialPayload>
/**
 * Model MaterialHasImage
 * 
 */
export type MaterialHasImage = $Result.DefaultSelection<Prisma.$MaterialHasImagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
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
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alternative`: Exposes CRUD operations for the **Alternative** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alternatives
    * const alternatives = await prisma.alternative.findMany()
    * ```
    */
  get alternative(): Prisma.AlternativeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.material`: Exposes CRUD operations for the **Material** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materials
    * const materials = await prisma.material.findMany()
    * ```
    */
  get material(): Prisma.MaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.preset`: Exposes CRUD operations for the **Preset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Presets
    * const presets = await prisma.preset.findMany()
    * ```
    */
  get preset(): Prisma.PresetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userQuestion`: Exposes CRUD operations for the **UserQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserQuestions
    * const userQuestions = await prisma.userQuestion.findMany()
    * ```
    */
  get userQuestion(): Prisma.UserQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userMaterial`: Exposes CRUD operations for the **UserMaterial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserMaterials
    * const userMaterials = await prisma.userMaterial.findMany()
    * ```
    */
  get userMaterial(): Prisma.UserMaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questionHasMaterial`: Exposes CRUD operations for the **QuestionHasMaterial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionHasMaterials
    * const questionHasMaterials = await prisma.questionHasMaterial.findMany()
    * ```
    */
  get questionHasMaterial(): Prisma.QuestionHasMaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.materialHasImage`: Exposes CRUD operations for the **MaterialHasImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaterialHasImages
    * const materialHasImages = await prisma.materialHasImage.findMany()
    * ```
    */
  get materialHasImage(): Prisma.MaterialHasImageDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    Account: 'Account',
    User: 'User',
    VerificationToken: 'VerificationToken',
    Image: 'Image',
    Question: 'Question',
    Alternative: 'Alternative',
    Material: 'Material',
    Preset: 'Preset',
    UserQuestion: 'UserQuestion',
    UserMaterial: 'UserMaterial',
    QuestionHasMaterial: 'QuestionHasMaterial',
    MaterialHasImage: 'MaterialHasImage'
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
      modelProps: "account" | "user" | "verificationToken" | "image" | "question" | "alternative" | "material" | "preset" | "userQuestion" | "userMaterial" | "questionHasMaterial" | "materialHasImage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Alternative: {
        payload: Prisma.$AlternativePayload<ExtArgs>
        fields: Prisma.AlternativeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlternativeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlternativeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          findFirst: {
            args: Prisma.AlternativeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlternativeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          findMany: {
            args: Prisma.AlternativeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>[]
          }
          create: {
            args: Prisma.AlternativeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          createMany: {
            args: Prisma.AlternativeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AlternativeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          update: {
            args: Prisma.AlternativeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          deleteMany: {
            args: Prisma.AlternativeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlternativeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlternativeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlternativePayload>
          }
          aggregate: {
            args: Prisma.AlternativeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlternative>
          }
          groupBy: {
            args: Prisma.AlternativeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlternativeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlternativeCountArgs<ExtArgs>
            result: $Utils.Optional<AlternativeCountAggregateOutputType> | number
          }
        }
      }
      Material: {
        payload: Prisma.$MaterialPayload<ExtArgs>
        fields: Prisma.MaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findFirst: {
            args: Prisma.MaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findMany: {
            args: Prisma.MaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          create: {
            args: Prisma.MaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          createMany: {
            args: Prisma.MaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          update: {
            args: Prisma.MaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          deleteMany: {
            args: Prisma.MaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          aggregate: {
            args: Prisma.MaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterial>
          }
          groupBy: {
            args: Prisma.MaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialCountAggregateOutputType> | number
          }
        }
      }
      Preset: {
        payload: Prisma.$PresetPayload<ExtArgs>
        fields: Prisma.PresetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PresetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PresetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresetPayload>
          }
          findFirst: {
            args: Prisma.PresetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PresetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresetPayload>
          }
          findMany: {
            args: Prisma.PresetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresetPayload>[]
          }
          create: {
            args: Prisma.PresetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresetPayload>
          }
          createMany: {
            args: Prisma.PresetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PresetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresetPayload>
          }
          update: {
            args: Prisma.PresetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresetPayload>
          }
          deleteMany: {
            args: Prisma.PresetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PresetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PresetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresetPayload>
          }
          aggregate: {
            args: Prisma.PresetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreset>
          }
          groupBy: {
            args: Prisma.PresetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PresetGroupByOutputType>[]
          }
          count: {
            args: Prisma.PresetCountArgs<ExtArgs>
            result: $Utils.Optional<PresetCountAggregateOutputType> | number
          }
        }
      }
      UserQuestion: {
        payload: Prisma.$UserQuestionPayload<ExtArgs>
        fields: Prisma.UserQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionPayload>
          }
          findFirst: {
            args: Prisma.UserQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionPayload>
          }
          findMany: {
            args: Prisma.UserQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionPayload>[]
          }
          create: {
            args: Prisma.UserQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionPayload>
          }
          createMany: {
            args: Prisma.UserQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionPayload>
          }
          update: {
            args: Prisma.UserQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionPayload>
          }
          deleteMany: {
            args: Prisma.UserQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserQuestionPayload>
          }
          aggregate: {
            args: Prisma.UserQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserQuestion>
          }
          groupBy: {
            args: Prisma.UserQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<UserQuestionCountAggregateOutputType> | number
          }
        }
      }
      UserMaterial: {
        payload: Prisma.$UserMaterialPayload<ExtArgs>
        fields: Prisma.UserMaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserMaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserMaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMaterialPayload>
          }
          findFirst: {
            args: Prisma.UserMaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserMaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMaterialPayload>
          }
          findMany: {
            args: Prisma.UserMaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMaterialPayload>[]
          }
          create: {
            args: Prisma.UserMaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMaterialPayload>
          }
          createMany: {
            args: Prisma.UserMaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserMaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMaterialPayload>
          }
          update: {
            args: Prisma.UserMaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMaterialPayload>
          }
          deleteMany: {
            args: Prisma.UserMaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserMaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserMaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMaterialPayload>
          }
          aggregate: {
            args: Prisma.UserMaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserMaterial>
          }
          groupBy: {
            args: Prisma.UserMaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserMaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserMaterialCountArgs<ExtArgs>
            result: $Utils.Optional<UserMaterialCountAggregateOutputType> | number
          }
        }
      }
      QuestionHasMaterial: {
        payload: Prisma.$QuestionHasMaterialPayload<ExtArgs>
        fields: Prisma.QuestionHasMaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionHasMaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionHasMaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionHasMaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionHasMaterialPayload>
          }
          findFirst: {
            args: Prisma.QuestionHasMaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionHasMaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionHasMaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionHasMaterialPayload>
          }
          findMany: {
            args: Prisma.QuestionHasMaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionHasMaterialPayload>[]
          }
          create: {
            args: Prisma.QuestionHasMaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionHasMaterialPayload>
          }
          createMany: {
            args: Prisma.QuestionHasMaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuestionHasMaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionHasMaterialPayload>
          }
          update: {
            args: Prisma.QuestionHasMaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionHasMaterialPayload>
          }
          deleteMany: {
            args: Prisma.QuestionHasMaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionHasMaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionHasMaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionHasMaterialPayload>
          }
          aggregate: {
            args: Prisma.QuestionHasMaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionHasMaterial>
          }
          groupBy: {
            args: Prisma.QuestionHasMaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionHasMaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionHasMaterialCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionHasMaterialCountAggregateOutputType> | number
          }
        }
      }
      MaterialHasImage: {
        payload: Prisma.$MaterialHasImagePayload<ExtArgs>
        fields: Prisma.MaterialHasImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialHasImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialHasImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialHasImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialHasImagePayload>
          }
          findFirst: {
            args: Prisma.MaterialHasImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialHasImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialHasImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialHasImagePayload>
          }
          findMany: {
            args: Prisma.MaterialHasImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialHasImagePayload>[]
          }
          create: {
            args: Prisma.MaterialHasImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialHasImagePayload>
          }
          createMany: {
            args: Prisma.MaterialHasImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MaterialHasImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialHasImagePayload>
          }
          update: {
            args: Prisma.MaterialHasImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialHasImagePayload>
          }
          deleteMany: {
            args: Prisma.MaterialHasImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialHasImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MaterialHasImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialHasImagePayload>
          }
          aggregate: {
            args: Prisma.MaterialHasImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterialHasImage>
          }
          groupBy: {
            args: Prisma.MaterialHasImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialHasImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialHasImageCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialHasImageCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    account?: AccountOmit
    user?: UserOmit
    verificationToken?: VerificationTokenOmit
    image?: ImageOmit
    question?: QuestionOmit
    alternative?: AlternativeOmit
    material?: MaterialOmit
    preset?: PresetOmit
    userQuestion?: UserQuestionOmit
    userMaterial?: UserMaterialOmit
    questionHasMaterial?: QuestionHasMaterialOmit
    materialHasImage?: MaterialHasImageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    userQuestions: number
    userMaterials: number
    presets: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    userQuestions?: boolean | UserCountOutputTypeCountUserQuestionsArgs
    userMaterials?: boolean | UserCountOutputTypeCountUserMaterialsArgs
    presets?: boolean | UserCountOutputTypeCountPresetsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuestionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMaterialWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPresetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresetWhereInput
  }


  /**
   * Count Type ImageCountOutputType
   */

  export type ImageCountOutputType = {
    questions: number
    materials: number
  }

  export type ImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | ImageCountOutputTypeCountQuestionsArgs
    materials?: boolean | ImageCountOutputTypeCountMaterialsArgs
  }

  // Custom InputTypes
  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     */
    select?: ImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialHasImageWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    alternatives: number
    userQuestions: number
    questionMaterials: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alternatives?: boolean | QuestionCountOutputTypeCountAlternativesArgs
    userQuestions?: boolean | QuestionCountOutputTypeCountUserQuestionsArgs
    questionMaterials?: boolean | QuestionCountOutputTypeCountQuestionMaterialsArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountAlternativesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlternativeWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountUserQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuestionWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountQuestionMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionHasMaterialWhereInput
  }


  /**
   * Count Type MaterialCountOutputType
   */

  export type MaterialCountOutputType = {
    userMaterials: number
    questionMaterials: number
    materialImages: number
  }

  export type MaterialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userMaterials?: boolean | MaterialCountOutputTypeCountUserMaterialsArgs
    questionMaterials?: boolean | MaterialCountOutputTypeCountQuestionMaterialsArgs
    materialImages?: boolean | MaterialCountOutputTypeCountMaterialImagesArgs
  }

  // Custom InputTypes
  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCountOutputType
     */
    select?: MaterialCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountUserMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMaterialWhereInput
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountQuestionMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionHasMaterialWhereInput
  }

  /**
   * MaterialCountOutputType without action
   */
  export type MaterialCountOutputTypeCountMaterialImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialHasImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>



  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    role: $Enums.Role | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    role: $Enums.Role | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    password: number
    role: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    role?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    role?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    role?: true
    image?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    role: $Enums.Role
    image: string | null
    _count: UserCountAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    role?: boolean
    image?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    userQuestions?: boolean | User$userQuestionsArgs<ExtArgs>
    userMaterials?: boolean | User$userMaterialsArgs<ExtArgs>
    presets?: boolean | User$presetsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    role?: boolean
    image?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "password" | "role" | "image", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    userQuestions?: boolean | User$userQuestionsArgs<ExtArgs>
    userMaterials?: boolean | User$userMaterialsArgs<ExtArgs>
    presets?: boolean | User$presetsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      userQuestions: Prisma.$UserQuestionPayload<ExtArgs>[]
      userMaterials: Prisma.$UserMaterialPayload<ExtArgs>[]
      presets: Prisma.$PresetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      password: string | null
      role: $Enums.Role
      image: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userQuestions<T extends User$userQuestionsArgs<ExtArgs> = {}>(args?: Subset<T, User$userQuestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userMaterials<T extends User$userMaterialsArgs<ExtArgs> = {}>(args?: Subset<T, User$userMaterialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    presets<T extends User$presetsArgs<ExtArgs> = {}>(args?: Subset<T, User$presetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly image: FieldRef<"User", 'String'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.userQuestions
   */
  export type User$userQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestion
     */
    select?: UserQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestion
     */
    omit?: UserQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionInclude<ExtArgs> | null
    where?: UserQuestionWhereInput
    orderBy?: UserQuestionOrderByWithRelationInput | UserQuestionOrderByWithRelationInput[]
    cursor?: UserQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserQuestionScalarFieldEnum | UserQuestionScalarFieldEnum[]
  }

  /**
   * User.userMaterials
   */
  export type User$userMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMaterial
     */
    select?: UserMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMaterial
     */
    omit?: UserMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMaterialInclude<ExtArgs> | null
    where?: UserMaterialWhereInput
    orderBy?: UserMaterialOrderByWithRelationInput | UserMaterialOrderByWithRelationInput[]
    cursor?: UserMaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMaterialScalarFieldEnum | UserMaterialScalarFieldEnum[]
  }

  /**
   * User.presets
   */
  export type User$presetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preset
     */
    select?: PresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preset
     */
    omit?: PresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresetInclude<ExtArgs> | null
    where?: PresetWhereInput
    orderBy?: PresetOrderByWithRelationInput | PresetOrderByWithRelationInput[]
    cursor?: PresetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PresetScalarFieldEnum | PresetScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>



  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    image: Uint8Array | null
    name: string | null
    created_at: Date | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    image: Uint8Array | null
    name: string | null
    created_at: Date | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    image: number
    name: number
    created_at: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    image?: true
    name?: true
    created_at?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    image?: true
    name?: true
    created_at?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    image?: true
    name?: true
    created_at?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: number
    image: Uint8Array
    name: string
    created_at: Date
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    name?: boolean
    created_at?: boolean
    questions?: boolean | Image$questionsArgs<ExtArgs>
    materials?: boolean | Image$materialsArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>



  export type ImageSelectScalar = {
    id?: boolean
    image?: boolean
    name?: boolean
    created_at?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image" | "name" | "created_at", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | Image$questionsArgs<ExtArgs>
    materials?: boolean | Image$materialsArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      materials: Prisma.$MaterialHasImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image: Uint8Array
      name: string
      created_at: Date
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends Image$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Image$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    materials<T extends Image$materialsArgs<ExtArgs> = {}>(args?: Subset<T, Image$materialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialHasImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'Int'>
    readonly image: FieldRef<"Image", 'Bytes'>
    readonly name: FieldRef<"Image", 'String'>
    readonly created_at: FieldRef<"Image", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image.questions
   */
  export type Image$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Image.materials
   */
  export type Image$materialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialHasImage
     */
    select?: MaterialHasImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialHasImage
     */
    omit?: MaterialHasImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialHasImageInclude<ExtArgs> | null
    where?: MaterialHasImageWhereInput
    orderBy?: MaterialHasImageOrderByWithRelationInput | MaterialHasImageOrderByWithRelationInput[]
    cursor?: MaterialHasImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialHasImageScalarFieldEnum | MaterialHasImageScalarFieldEnum[]
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    id: number | null
    imageId: number | null
  }

  export type QuestionSumAggregateOutputType = {
    id: number | null
    imageId: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    imageId: number | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    imageId: number | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    title: number
    content: number
    imageId: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    id?: true
    imageId?: true
  }

  export type QuestionSumAggregateInputType = {
    id?: true
    imageId?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageId?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageId?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageId?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: number
    title: string
    content: string
    imageId: number | null
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    imageId?: boolean
    image?: boolean | Question$imageArgs<ExtArgs>
    alternatives?: boolean | Question$alternativesArgs<ExtArgs>
    userQuestions?: boolean | Question$userQuestionsArgs<ExtArgs>
    questionMaterials?: boolean | Question$questionMaterialsArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>



  export type QuestionSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    imageId?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "imageId", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | Question$imageArgs<ExtArgs>
    alternatives?: boolean | Question$alternativesArgs<ExtArgs>
    userQuestions?: boolean | Question$userQuestionsArgs<ExtArgs>
    questionMaterials?: boolean | Question$questionMaterialsArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      image: Prisma.$ImagePayload<ExtArgs> | null
      alternatives: Prisma.$AlternativePayload<ExtArgs>[]
      userQuestions: Prisma.$UserQuestionPayload<ExtArgs>[]
      questionMaterials: Prisma.$QuestionHasMaterialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      imageId: number | null
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    image<T extends Question$imageArgs<ExtArgs> = {}>(args?: Subset<T, Question$imageArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    alternatives<T extends Question$alternativesArgs<ExtArgs> = {}>(args?: Subset<T, Question$alternativesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userQuestions<T extends Question$userQuestionsArgs<ExtArgs> = {}>(args?: Subset<T, Question$userQuestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questionMaterials<T extends Question$questionMaterialsArgs<ExtArgs> = {}>(args?: Subset<T, Question$questionMaterialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionHasMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'Int'>
    readonly title: FieldRef<"Question", 'String'>
    readonly content: FieldRef<"Question", 'String'>
    readonly imageId: FieldRef<"Question", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.image
   */
  export type Question$imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
  }

  /**
   * Question.alternatives
   */
  export type Question$alternativesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    where?: AlternativeWhereInput
    orderBy?: AlternativeOrderByWithRelationInput | AlternativeOrderByWithRelationInput[]
    cursor?: AlternativeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlternativeScalarFieldEnum | AlternativeScalarFieldEnum[]
  }

  /**
   * Question.userQuestions
   */
  export type Question$userQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestion
     */
    select?: UserQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestion
     */
    omit?: UserQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionInclude<ExtArgs> | null
    where?: UserQuestionWhereInput
    orderBy?: UserQuestionOrderByWithRelationInput | UserQuestionOrderByWithRelationInput[]
    cursor?: UserQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserQuestionScalarFieldEnum | UserQuestionScalarFieldEnum[]
  }

  /**
   * Question.questionMaterials
   */
  export type Question$questionMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionHasMaterial
     */
    select?: QuestionHasMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionHasMaterial
     */
    omit?: QuestionHasMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionHasMaterialInclude<ExtArgs> | null
    where?: QuestionHasMaterialWhereInput
    orderBy?: QuestionHasMaterialOrderByWithRelationInput | QuestionHasMaterialOrderByWithRelationInput[]
    cursor?: QuestionHasMaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionHasMaterialScalarFieldEnum | QuestionHasMaterialScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Alternative
   */

  export type AggregateAlternative = {
    _count: AlternativeCountAggregateOutputType | null
    _avg: AlternativeAvgAggregateOutputType | null
    _sum: AlternativeSumAggregateOutputType | null
    _min: AlternativeMinAggregateOutputType | null
    _max: AlternativeMaxAggregateOutputType | null
  }

  export type AlternativeAvgAggregateOutputType = {
    id: number | null
    questionsId: number | null
  }

  export type AlternativeSumAggregateOutputType = {
    id: number | null
    questionsId: number | null
  }

  export type AlternativeMinAggregateOutputType = {
    id: number | null
    content: string | null
    is_correct: boolean | null
    questionsId: number | null
  }

  export type AlternativeMaxAggregateOutputType = {
    id: number | null
    content: string | null
    is_correct: boolean | null
    questionsId: number | null
  }

  export type AlternativeCountAggregateOutputType = {
    id: number
    content: number
    is_correct: number
    questionsId: number
    _all: number
  }


  export type AlternativeAvgAggregateInputType = {
    id?: true
    questionsId?: true
  }

  export type AlternativeSumAggregateInputType = {
    id?: true
    questionsId?: true
  }

  export type AlternativeMinAggregateInputType = {
    id?: true
    content?: true
    is_correct?: true
    questionsId?: true
  }

  export type AlternativeMaxAggregateInputType = {
    id?: true
    content?: true
    is_correct?: true
    questionsId?: true
  }

  export type AlternativeCountAggregateInputType = {
    id?: true
    content?: true
    is_correct?: true
    questionsId?: true
    _all?: true
  }

  export type AlternativeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alternative to aggregate.
     */
    where?: AlternativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alternatives to fetch.
     */
    orderBy?: AlternativeOrderByWithRelationInput | AlternativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlternativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alternatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alternatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alternatives
    **/
    _count?: true | AlternativeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlternativeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlternativeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlternativeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlternativeMaxAggregateInputType
  }

  export type GetAlternativeAggregateType<T extends AlternativeAggregateArgs> = {
        [P in keyof T & keyof AggregateAlternative]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlternative[P]>
      : GetScalarType<T[P], AggregateAlternative[P]>
  }




  export type AlternativeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlternativeWhereInput
    orderBy?: AlternativeOrderByWithAggregationInput | AlternativeOrderByWithAggregationInput[]
    by: AlternativeScalarFieldEnum[] | AlternativeScalarFieldEnum
    having?: AlternativeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlternativeCountAggregateInputType | true
    _avg?: AlternativeAvgAggregateInputType
    _sum?: AlternativeSumAggregateInputType
    _min?: AlternativeMinAggregateInputType
    _max?: AlternativeMaxAggregateInputType
  }

  export type AlternativeGroupByOutputType = {
    id: number
    content: string
    is_correct: boolean
    questionsId: number
    _count: AlternativeCountAggregateOutputType | null
    _avg: AlternativeAvgAggregateOutputType | null
    _sum: AlternativeSumAggregateOutputType | null
    _min: AlternativeMinAggregateOutputType | null
    _max: AlternativeMaxAggregateOutputType | null
  }

  type GetAlternativeGroupByPayload<T extends AlternativeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlternativeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlternativeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlternativeGroupByOutputType[P]>
            : GetScalarType<T[P], AlternativeGroupByOutputType[P]>
        }
      >
    >


  export type AlternativeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    is_correct?: boolean
    questionsId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alternative"]>



  export type AlternativeSelectScalar = {
    id?: boolean
    content?: boolean
    is_correct?: boolean
    questionsId?: boolean
  }

  export type AlternativeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "is_correct" | "questionsId", ExtArgs["result"]["alternative"]>
  export type AlternativeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $AlternativePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alternative"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      is_correct: boolean
      questionsId: number
    }, ExtArgs["result"]["alternative"]>
    composites: {}
  }

  type AlternativeGetPayload<S extends boolean | null | undefined | AlternativeDefaultArgs> = $Result.GetResult<Prisma.$AlternativePayload, S>

  type AlternativeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlternativeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlternativeCountAggregateInputType | true
    }

  export interface AlternativeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alternative'], meta: { name: 'Alternative' } }
    /**
     * Find zero or one Alternative that matches the filter.
     * @param {AlternativeFindUniqueArgs} args - Arguments to find a Alternative
     * @example
     * // Get one Alternative
     * const alternative = await prisma.alternative.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlternativeFindUniqueArgs>(args: SelectSubset<T, AlternativeFindUniqueArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alternative that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlternativeFindUniqueOrThrowArgs} args - Arguments to find a Alternative
     * @example
     * // Get one Alternative
     * const alternative = await prisma.alternative.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlternativeFindUniqueOrThrowArgs>(args: SelectSubset<T, AlternativeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alternative that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeFindFirstArgs} args - Arguments to find a Alternative
     * @example
     * // Get one Alternative
     * const alternative = await prisma.alternative.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlternativeFindFirstArgs>(args?: SelectSubset<T, AlternativeFindFirstArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alternative that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeFindFirstOrThrowArgs} args - Arguments to find a Alternative
     * @example
     * // Get one Alternative
     * const alternative = await prisma.alternative.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlternativeFindFirstOrThrowArgs>(args?: SelectSubset<T, AlternativeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alternatives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alternatives
     * const alternatives = await prisma.alternative.findMany()
     * 
     * // Get first 10 Alternatives
     * const alternatives = await prisma.alternative.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alternativeWithIdOnly = await prisma.alternative.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlternativeFindManyArgs>(args?: SelectSubset<T, AlternativeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alternative.
     * @param {AlternativeCreateArgs} args - Arguments to create a Alternative.
     * @example
     * // Create one Alternative
     * const Alternative = await prisma.alternative.create({
     *   data: {
     *     // ... data to create a Alternative
     *   }
     * })
     * 
     */
    create<T extends AlternativeCreateArgs>(args: SelectSubset<T, AlternativeCreateArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alternatives.
     * @param {AlternativeCreateManyArgs} args - Arguments to create many Alternatives.
     * @example
     * // Create many Alternatives
     * const alternative = await prisma.alternative.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlternativeCreateManyArgs>(args?: SelectSubset<T, AlternativeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Alternative.
     * @param {AlternativeDeleteArgs} args - Arguments to delete one Alternative.
     * @example
     * // Delete one Alternative
     * const Alternative = await prisma.alternative.delete({
     *   where: {
     *     // ... filter to delete one Alternative
     *   }
     * })
     * 
     */
    delete<T extends AlternativeDeleteArgs>(args: SelectSubset<T, AlternativeDeleteArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alternative.
     * @param {AlternativeUpdateArgs} args - Arguments to update one Alternative.
     * @example
     * // Update one Alternative
     * const alternative = await prisma.alternative.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlternativeUpdateArgs>(args: SelectSubset<T, AlternativeUpdateArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alternatives.
     * @param {AlternativeDeleteManyArgs} args - Arguments to filter Alternatives to delete.
     * @example
     * // Delete a few Alternatives
     * const { count } = await prisma.alternative.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlternativeDeleteManyArgs>(args?: SelectSubset<T, AlternativeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alternatives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alternatives
     * const alternative = await prisma.alternative.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlternativeUpdateManyArgs>(args: SelectSubset<T, AlternativeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alternative.
     * @param {AlternativeUpsertArgs} args - Arguments to update or create a Alternative.
     * @example
     * // Update or create a Alternative
     * const alternative = await prisma.alternative.upsert({
     *   create: {
     *     // ... data to create a Alternative
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alternative we want to update
     *   }
     * })
     */
    upsert<T extends AlternativeUpsertArgs>(args: SelectSubset<T, AlternativeUpsertArgs<ExtArgs>>): Prisma__AlternativeClient<$Result.GetResult<Prisma.$AlternativePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alternatives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeCountArgs} args - Arguments to filter Alternatives to count.
     * @example
     * // Count the number of Alternatives
     * const count = await prisma.alternative.count({
     *   where: {
     *     // ... the filter for the Alternatives we want to count
     *   }
     * })
    **/
    count<T extends AlternativeCountArgs>(
      args?: Subset<T, AlternativeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlternativeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alternative.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlternativeAggregateArgs>(args: Subset<T, AlternativeAggregateArgs>): Prisma.PrismaPromise<GetAlternativeAggregateType<T>>

    /**
     * Group by Alternative.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlternativeGroupByArgs} args - Group by arguments.
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
      T extends AlternativeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlternativeGroupByArgs['orderBy'] }
        : { orderBy?: AlternativeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlternativeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlternativeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alternative model
   */
  readonly fields: AlternativeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alternative.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlternativeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Alternative model
   */
  interface AlternativeFieldRefs {
    readonly id: FieldRef<"Alternative", 'Int'>
    readonly content: FieldRef<"Alternative", 'String'>
    readonly is_correct: FieldRef<"Alternative", 'Boolean'>
    readonly questionsId: FieldRef<"Alternative", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Alternative findUnique
   */
  export type AlternativeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter, which Alternative to fetch.
     */
    where: AlternativeWhereUniqueInput
  }

  /**
   * Alternative findUniqueOrThrow
   */
  export type AlternativeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter, which Alternative to fetch.
     */
    where: AlternativeWhereUniqueInput
  }

  /**
   * Alternative findFirst
   */
  export type AlternativeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter, which Alternative to fetch.
     */
    where?: AlternativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alternatives to fetch.
     */
    orderBy?: AlternativeOrderByWithRelationInput | AlternativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alternatives.
     */
    cursor?: AlternativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alternatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alternatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alternatives.
     */
    distinct?: AlternativeScalarFieldEnum | AlternativeScalarFieldEnum[]
  }

  /**
   * Alternative findFirstOrThrow
   */
  export type AlternativeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter, which Alternative to fetch.
     */
    where?: AlternativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alternatives to fetch.
     */
    orderBy?: AlternativeOrderByWithRelationInput | AlternativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alternatives.
     */
    cursor?: AlternativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alternatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alternatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alternatives.
     */
    distinct?: AlternativeScalarFieldEnum | AlternativeScalarFieldEnum[]
  }

  /**
   * Alternative findMany
   */
  export type AlternativeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter, which Alternatives to fetch.
     */
    where?: AlternativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alternatives to fetch.
     */
    orderBy?: AlternativeOrderByWithRelationInput | AlternativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alternatives.
     */
    cursor?: AlternativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alternatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alternatives.
     */
    skip?: number
    distinct?: AlternativeScalarFieldEnum | AlternativeScalarFieldEnum[]
  }

  /**
   * Alternative create
   */
  export type AlternativeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * The data needed to create a Alternative.
     */
    data: XOR<AlternativeCreateInput, AlternativeUncheckedCreateInput>
  }

  /**
   * Alternative createMany
   */
  export type AlternativeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alternatives.
     */
    data: AlternativeCreateManyInput | AlternativeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alternative update
   */
  export type AlternativeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * The data needed to update a Alternative.
     */
    data: XOR<AlternativeUpdateInput, AlternativeUncheckedUpdateInput>
    /**
     * Choose, which Alternative to update.
     */
    where: AlternativeWhereUniqueInput
  }

  /**
   * Alternative updateMany
   */
  export type AlternativeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alternatives.
     */
    data: XOR<AlternativeUpdateManyMutationInput, AlternativeUncheckedUpdateManyInput>
    /**
     * Filter which Alternatives to update
     */
    where?: AlternativeWhereInput
    /**
     * Limit how many Alternatives to update.
     */
    limit?: number
  }

  /**
   * Alternative upsert
   */
  export type AlternativeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * The filter to search for the Alternative to update in case it exists.
     */
    where: AlternativeWhereUniqueInput
    /**
     * In case the Alternative found by the `where` argument doesn't exist, create a new Alternative with this data.
     */
    create: XOR<AlternativeCreateInput, AlternativeUncheckedCreateInput>
    /**
     * In case the Alternative was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlternativeUpdateInput, AlternativeUncheckedUpdateInput>
  }

  /**
   * Alternative delete
   */
  export type AlternativeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
    /**
     * Filter which Alternative to delete.
     */
    where: AlternativeWhereUniqueInput
  }

  /**
   * Alternative deleteMany
   */
  export type AlternativeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alternatives to delete
     */
    where?: AlternativeWhereInput
    /**
     * Limit how many Alternatives to delete.
     */
    limit?: number
  }

  /**
   * Alternative without action
   */
  export type AlternativeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alternative
     */
    select?: AlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alternative
     */
    omit?: AlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlternativeInclude<ExtArgs> | null
  }


  /**
   * Model Material
   */

  export type AggregateMaterial = {
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  export type MaterialAvgAggregateOutputType = {
    id: number | null
  }

  export type MaterialSumAggregateOutputType = {
    id: number | null
  }

  export type MaterialMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    created_at: Date | null
  }

  export type MaterialMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    created_at: Date | null
  }

  export type MaterialCountAggregateOutputType = {
    id: number
    title: number
    content: number
    created_at: number
    _all: number
  }


  export type MaterialAvgAggregateInputType = {
    id?: true
  }

  export type MaterialSumAggregateInputType = {
    id?: true
  }

  export type MaterialMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    created_at?: true
  }

  export type MaterialMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    created_at?: true
  }

  export type MaterialCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    created_at?: true
    _all?: true
  }

  export type MaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Material to aggregate.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materials
    **/
    _count?: true | MaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaterialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaterialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialMaxAggregateInputType
  }

  export type GetMaterialAggregateType<T extends MaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterial[P]>
      : GetScalarType<T[P], AggregateMaterial[P]>
  }




  export type MaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithAggregationInput | MaterialOrderByWithAggregationInput[]
    by: MaterialScalarFieldEnum[] | MaterialScalarFieldEnum
    having?: MaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialCountAggregateInputType | true
    _avg?: MaterialAvgAggregateInputType
    _sum?: MaterialSumAggregateInputType
    _min?: MaterialMinAggregateInputType
    _max?: MaterialMaxAggregateInputType
  }

  export type MaterialGroupByOutputType = {
    id: number
    title: string
    content: string
    created_at: Date
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  type GetMaterialGroupByPayload<T extends MaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialGroupByOutputType[P]>
        }
      >
    >


  export type MaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
    userMaterials?: boolean | Material$userMaterialsArgs<ExtArgs>
    questionMaterials?: boolean | Material$questionMaterialsArgs<ExtArgs>
    materialImages?: boolean | Material$materialImagesArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>



  export type MaterialSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
  }

  export type MaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "created_at", ExtArgs["result"]["material"]>
  export type MaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userMaterials?: boolean | Material$userMaterialsArgs<ExtArgs>
    questionMaterials?: boolean | Material$questionMaterialsArgs<ExtArgs>
    materialImages?: boolean | Material$materialImagesArgs<ExtArgs>
    _count?: boolean | MaterialCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Material"
    objects: {
      userMaterials: Prisma.$UserMaterialPayload<ExtArgs>[]
      questionMaterials: Prisma.$QuestionHasMaterialPayload<ExtArgs>[]
      materialImages: Prisma.$MaterialHasImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      created_at: Date
    }, ExtArgs["result"]["material"]>
    composites: {}
  }

  type MaterialGetPayload<S extends boolean | null | undefined | MaterialDefaultArgs> = $Result.GetResult<Prisma.$MaterialPayload, S>

  type MaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialCountAggregateInputType | true
    }

  export interface MaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Material'], meta: { name: 'Material' } }
    /**
     * Find zero or one Material that matches the filter.
     * @param {MaterialFindUniqueArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialFindUniqueArgs>(args: SelectSubset<T, MaterialFindUniqueArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Material that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialFindUniqueOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialFindFirstArgs>(args?: SelectSubset<T, MaterialFindFirstArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Material that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.material.findMany()
     * 
     * // Get first 10 Materials
     * const materials = await prisma.material.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialWithIdOnly = await prisma.material.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialFindManyArgs>(args?: SelectSubset<T, MaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Material.
     * @param {MaterialCreateArgs} args - Arguments to create a Material.
     * @example
     * // Create one Material
     * const Material = await prisma.material.create({
     *   data: {
     *     // ... data to create a Material
     *   }
     * })
     * 
     */
    create<T extends MaterialCreateArgs>(args: SelectSubset<T, MaterialCreateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Materials.
     * @param {MaterialCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialCreateManyArgs>(args?: SelectSubset<T, MaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Material.
     * @param {MaterialDeleteArgs} args - Arguments to delete one Material.
     * @example
     * // Delete one Material
     * const Material = await prisma.material.delete({
     *   where: {
     *     // ... filter to delete one Material
     *   }
     * })
     * 
     */
    delete<T extends MaterialDeleteArgs>(args: SelectSubset<T, MaterialDeleteArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Material.
     * @param {MaterialUpdateArgs} args - Arguments to update one Material.
     * @example
     * // Update one Material
     * const material = await prisma.material.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialUpdateArgs>(args: SelectSubset<T, MaterialUpdateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Materials.
     * @param {MaterialDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.material.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialDeleteManyArgs>(args?: SelectSubset<T, MaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialUpdateManyArgs>(args: SelectSubset<T, MaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Material.
     * @param {MaterialUpsertArgs} args - Arguments to update or create a Material.
     * @example
     * // Update or create a Material
     * const material = await prisma.material.upsert({
     *   create: {
     *     // ... data to create a Material
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material we want to update
     *   }
     * })
     */
    upsert<T extends MaterialUpsertArgs>(args: SelectSubset<T, MaterialUpsertArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.material.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends MaterialCountArgs>(
      args?: Subset<T, MaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialAggregateArgs>(args: Subset<T, MaterialAggregateArgs>): Prisma.PrismaPromise<GetMaterialAggregateType<T>>

    /**
     * Group by Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialGroupByArgs} args - Group by arguments.
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
      T extends MaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialGroupByArgs['orderBy'] }
        : { orderBy?: MaterialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Material model
   */
  readonly fields: MaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Material.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userMaterials<T extends Material$userMaterialsArgs<ExtArgs> = {}>(args?: Subset<T, Material$userMaterialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questionMaterials<T extends Material$questionMaterialsArgs<ExtArgs> = {}>(args?: Subset<T, Material$questionMaterialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionHasMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    materialImages<T extends Material$materialImagesArgs<ExtArgs> = {}>(args?: Subset<T, Material$materialImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialHasImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Material model
   */
  interface MaterialFieldRefs {
    readonly id: FieldRef<"Material", 'Int'>
    readonly title: FieldRef<"Material", 'String'>
    readonly content: FieldRef<"Material", 'String'>
    readonly created_at: FieldRef<"Material", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Material findUnique
   */
  export type MaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findUniqueOrThrow
   */
  export type MaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findFirst
   */
  export type MaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findFirstOrThrow
   */
  export type MaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findMany
   */
  export type MaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material create
   */
  export type MaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a Material.
     */
    data: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
  }

  /**
   * Material createMany
   */
  export type MaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Material update
   */
  export type MaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a Material.
     */
    data: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
    /**
     * Choose, which Material to update.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material updateMany
   */
  export type MaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to update.
     */
    limit?: number
  }

  /**
   * Material upsert
   */
  export type MaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the Material to update in case it exists.
     */
    where: MaterialWhereUniqueInput
    /**
     * In case the Material found by the `where` argument doesn't exist, create a new Material with this data.
     */
    create: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
    /**
     * In case the Material was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
  }

  /**
   * Material delete
   */
  export type MaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter which Material to delete.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material deleteMany
   */
  export type MaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materials to delete
     */
    where?: MaterialWhereInput
    /**
     * Limit how many Materials to delete.
     */
    limit?: number
  }

  /**
   * Material.userMaterials
   */
  export type Material$userMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMaterial
     */
    select?: UserMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMaterial
     */
    omit?: UserMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMaterialInclude<ExtArgs> | null
    where?: UserMaterialWhereInput
    orderBy?: UserMaterialOrderByWithRelationInput | UserMaterialOrderByWithRelationInput[]
    cursor?: UserMaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMaterialScalarFieldEnum | UserMaterialScalarFieldEnum[]
  }

  /**
   * Material.questionMaterials
   */
  export type Material$questionMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionHasMaterial
     */
    select?: QuestionHasMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionHasMaterial
     */
    omit?: QuestionHasMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionHasMaterialInclude<ExtArgs> | null
    where?: QuestionHasMaterialWhereInput
    orderBy?: QuestionHasMaterialOrderByWithRelationInput | QuestionHasMaterialOrderByWithRelationInput[]
    cursor?: QuestionHasMaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionHasMaterialScalarFieldEnum | QuestionHasMaterialScalarFieldEnum[]
  }

  /**
   * Material.materialImages
   */
  export type Material$materialImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialHasImage
     */
    select?: MaterialHasImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialHasImage
     */
    omit?: MaterialHasImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialHasImageInclude<ExtArgs> | null
    where?: MaterialHasImageWhereInput
    orderBy?: MaterialHasImageOrderByWithRelationInput | MaterialHasImageOrderByWithRelationInput[]
    cursor?: MaterialHasImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialHasImageScalarFieldEnum | MaterialHasImageScalarFieldEnum[]
  }

  /**
   * Material without action
   */
  export type MaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Material
     */
    omit?: MaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
  }


  /**
   * Model Preset
   */

  export type AggregatePreset = {
    _count: PresetCountAggregateOutputType | null
    _avg: PresetAvgAggregateOutputType | null
    _sum: PresetSumAggregateOutputType | null
    _min: PresetMinAggregateOutputType | null
    _max: PresetMaxAggregateOutputType | null
  }

  export type PresetAvgAggregateOutputType = {
    id: number | null
  }

  export type PresetSumAggregateOutputType = {
    id: number | null
  }

  export type PresetMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    userId: string | null
  }

  export type PresetMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    userId: string | null
  }

  export type PresetCountAggregateOutputType = {
    id: number
    content: number
    created_at: number
    userId: number
    _all: number
  }


  export type PresetAvgAggregateInputType = {
    id?: true
  }

  export type PresetSumAggregateInputType = {
    id?: true
  }

  export type PresetMinAggregateInputType = {
    id?: true
    created_at?: true
    userId?: true
  }

  export type PresetMaxAggregateInputType = {
    id?: true
    created_at?: true
    userId?: true
  }

  export type PresetCountAggregateInputType = {
    id?: true
    content?: true
    created_at?: true
    userId?: true
    _all?: true
  }

  export type PresetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Preset to aggregate.
     */
    where?: PresetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presets to fetch.
     */
    orderBy?: PresetOrderByWithRelationInput | PresetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PresetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Presets
    **/
    _count?: true | PresetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PresetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PresetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PresetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PresetMaxAggregateInputType
  }

  export type GetPresetAggregateType<T extends PresetAggregateArgs> = {
        [P in keyof T & keyof AggregatePreset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreset[P]>
      : GetScalarType<T[P], AggregatePreset[P]>
  }




  export type PresetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresetWhereInput
    orderBy?: PresetOrderByWithAggregationInput | PresetOrderByWithAggregationInput[]
    by: PresetScalarFieldEnum[] | PresetScalarFieldEnum
    having?: PresetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PresetCountAggregateInputType | true
    _avg?: PresetAvgAggregateInputType
    _sum?: PresetSumAggregateInputType
    _min?: PresetMinAggregateInputType
    _max?: PresetMaxAggregateInputType
  }

  export type PresetGroupByOutputType = {
    id: number
    content: JsonValue
    created_at: Date
    userId: string
    _count: PresetCountAggregateOutputType | null
    _avg: PresetAvgAggregateOutputType | null
    _sum: PresetSumAggregateOutputType | null
    _min: PresetMinAggregateOutputType | null
    _max: PresetMaxAggregateOutputType | null
  }

  type GetPresetGroupByPayload<T extends PresetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PresetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PresetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PresetGroupByOutputType[P]>
            : GetScalarType<T[P], PresetGroupByOutputType[P]>
        }
      >
    >


  export type PresetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    created_at?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preset"]>



  export type PresetSelectScalar = {
    id?: boolean
    content?: boolean
    created_at?: boolean
    userId?: boolean
  }

  export type PresetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "created_at" | "userId", ExtArgs["result"]["preset"]>
  export type PresetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PresetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Preset"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: Prisma.JsonValue
      created_at: Date
      userId: string
    }, ExtArgs["result"]["preset"]>
    composites: {}
  }

  type PresetGetPayload<S extends boolean | null | undefined | PresetDefaultArgs> = $Result.GetResult<Prisma.$PresetPayload, S>

  type PresetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PresetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PresetCountAggregateInputType | true
    }

  export interface PresetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Preset'], meta: { name: 'Preset' } }
    /**
     * Find zero or one Preset that matches the filter.
     * @param {PresetFindUniqueArgs} args - Arguments to find a Preset
     * @example
     * // Get one Preset
     * const preset = await prisma.preset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PresetFindUniqueArgs>(args: SelectSubset<T, PresetFindUniqueArgs<ExtArgs>>): Prisma__PresetClient<$Result.GetResult<Prisma.$PresetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Preset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PresetFindUniqueOrThrowArgs} args - Arguments to find a Preset
     * @example
     * // Get one Preset
     * const preset = await prisma.preset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PresetFindUniqueOrThrowArgs>(args: SelectSubset<T, PresetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PresetClient<$Result.GetResult<Prisma.$PresetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresetFindFirstArgs} args - Arguments to find a Preset
     * @example
     * // Get one Preset
     * const preset = await prisma.preset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PresetFindFirstArgs>(args?: SelectSubset<T, PresetFindFirstArgs<ExtArgs>>): Prisma__PresetClient<$Result.GetResult<Prisma.$PresetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresetFindFirstOrThrowArgs} args - Arguments to find a Preset
     * @example
     * // Get one Preset
     * const preset = await prisma.preset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PresetFindFirstOrThrowArgs>(args?: SelectSubset<T, PresetFindFirstOrThrowArgs<ExtArgs>>): Prisma__PresetClient<$Result.GetResult<Prisma.$PresetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Presets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Presets
     * const presets = await prisma.preset.findMany()
     * 
     * // Get first 10 Presets
     * const presets = await prisma.preset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const presetWithIdOnly = await prisma.preset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PresetFindManyArgs>(args?: SelectSubset<T, PresetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Preset.
     * @param {PresetCreateArgs} args - Arguments to create a Preset.
     * @example
     * // Create one Preset
     * const Preset = await prisma.preset.create({
     *   data: {
     *     // ... data to create a Preset
     *   }
     * })
     * 
     */
    create<T extends PresetCreateArgs>(args: SelectSubset<T, PresetCreateArgs<ExtArgs>>): Prisma__PresetClient<$Result.GetResult<Prisma.$PresetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Presets.
     * @param {PresetCreateManyArgs} args - Arguments to create many Presets.
     * @example
     * // Create many Presets
     * const preset = await prisma.preset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PresetCreateManyArgs>(args?: SelectSubset<T, PresetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Preset.
     * @param {PresetDeleteArgs} args - Arguments to delete one Preset.
     * @example
     * // Delete one Preset
     * const Preset = await prisma.preset.delete({
     *   where: {
     *     // ... filter to delete one Preset
     *   }
     * })
     * 
     */
    delete<T extends PresetDeleteArgs>(args: SelectSubset<T, PresetDeleteArgs<ExtArgs>>): Prisma__PresetClient<$Result.GetResult<Prisma.$PresetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Preset.
     * @param {PresetUpdateArgs} args - Arguments to update one Preset.
     * @example
     * // Update one Preset
     * const preset = await prisma.preset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PresetUpdateArgs>(args: SelectSubset<T, PresetUpdateArgs<ExtArgs>>): Prisma__PresetClient<$Result.GetResult<Prisma.$PresetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Presets.
     * @param {PresetDeleteManyArgs} args - Arguments to filter Presets to delete.
     * @example
     * // Delete a few Presets
     * const { count } = await prisma.preset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PresetDeleteManyArgs>(args?: SelectSubset<T, PresetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Presets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Presets
     * const preset = await prisma.preset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PresetUpdateManyArgs>(args: SelectSubset<T, PresetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Preset.
     * @param {PresetUpsertArgs} args - Arguments to update or create a Preset.
     * @example
     * // Update or create a Preset
     * const preset = await prisma.preset.upsert({
     *   create: {
     *     // ... data to create a Preset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Preset we want to update
     *   }
     * })
     */
    upsert<T extends PresetUpsertArgs>(args: SelectSubset<T, PresetUpsertArgs<ExtArgs>>): Prisma__PresetClient<$Result.GetResult<Prisma.$PresetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Presets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresetCountArgs} args - Arguments to filter Presets to count.
     * @example
     * // Count the number of Presets
     * const count = await prisma.preset.count({
     *   where: {
     *     // ... the filter for the Presets we want to count
     *   }
     * })
    **/
    count<T extends PresetCountArgs>(
      args?: Subset<T, PresetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PresetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Preset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PresetAggregateArgs>(args: Subset<T, PresetAggregateArgs>): Prisma.PrismaPromise<GetPresetAggregateType<T>>

    /**
     * Group by Preset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresetGroupByArgs} args - Group by arguments.
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
      T extends PresetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PresetGroupByArgs['orderBy'] }
        : { orderBy?: PresetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PresetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPresetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Preset model
   */
  readonly fields: PresetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Preset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PresetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Preset model
   */
  interface PresetFieldRefs {
    readonly id: FieldRef<"Preset", 'Int'>
    readonly content: FieldRef<"Preset", 'Json'>
    readonly created_at: FieldRef<"Preset", 'DateTime'>
    readonly userId: FieldRef<"Preset", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Preset findUnique
   */
  export type PresetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preset
     */
    select?: PresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preset
     */
    omit?: PresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresetInclude<ExtArgs> | null
    /**
     * Filter, which Preset to fetch.
     */
    where: PresetWhereUniqueInput
  }

  /**
   * Preset findUniqueOrThrow
   */
  export type PresetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preset
     */
    select?: PresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preset
     */
    omit?: PresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresetInclude<ExtArgs> | null
    /**
     * Filter, which Preset to fetch.
     */
    where: PresetWhereUniqueInput
  }

  /**
   * Preset findFirst
   */
  export type PresetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preset
     */
    select?: PresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preset
     */
    omit?: PresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresetInclude<ExtArgs> | null
    /**
     * Filter, which Preset to fetch.
     */
    where?: PresetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presets to fetch.
     */
    orderBy?: PresetOrderByWithRelationInput | PresetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Presets.
     */
    cursor?: PresetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Presets.
     */
    distinct?: PresetScalarFieldEnum | PresetScalarFieldEnum[]
  }

  /**
   * Preset findFirstOrThrow
   */
  export type PresetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preset
     */
    select?: PresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preset
     */
    omit?: PresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresetInclude<ExtArgs> | null
    /**
     * Filter, which Preset to fetch.
     */
    where?: PresetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presets to fetch.
     */
    orderBy?: PresetOrderByWithRelationInput | PresetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Presets.
     */
    cursor?: PresetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Presets.
     */
    distinct?: PresetScalarFieldEnum | PresetScalarFieldEnum[]
  }

  /**
   * Preset findMany
   */
  export type PresetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preset
     */
    select?: PresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preset
     */
    omit?: PresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresetInclude<ExtArgs> | null
    /**
     * Filter, which Presets to fetch.
     */
    where?: PresetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Presets to fetch.
     */
    orderBy?: PresetOrderByWithRelationInput | PresetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Presets.
     */
    cursor?: PresetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Presets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Presets.
     */
    skip?: number
    distinct?: PresetScalarFieldEnum | PresetScalarFieldEnum[]
  }

  /**
   * Preset create
   */
  export type PresetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preset
     */
    select?: PresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preset
     */
    omit?: PresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresetInclude<ExtArgs> | null
    /**
     * The data needed to create a Preset.
     */
    data: XOR<PresetCreateInput, PresetUncheckedCreateInput>
  }

  /**
   * Preset createMany
   */
  export type PresetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Presets.
     */
    data: PresetCreateManyInput | PresetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Preset update
   */
  export type PresetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preset
     */
    select?: PresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preset
     */
    omit?: PresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresetInclude<ExtArgs> | null
    /**
     * The data needed to update a Preset.
     */
    data: XOR<PresetUpdateInput, PresetUncheckedUpdateInput>
    /**
     * Choose, which Preset to update.
     */
    where: PresetWhereUniqueInput
  }

  /**
   * Preset updateMany
   */
  export type PresetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Presets.
     */
    data: XOR<PresetUpdateManyMutationInput, PresetUncheckedUpdateManyInput>
    /**
     * Filter which Presets to update
     */
    where?: PresetWhereInput
    /**
     * Limit how many Presets to update.
     */
    limit?: number
  }

  /**
   * Preset upsert
   */
  export type PresetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preset
     */
    select?: PresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preset
     */
    omit?: PresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresetInclude<ExtArgs> | null
    /**
     * The filter to search for the Preset to update in case it exists.
     */
    where: PresetWhereUniqueInput
    /**
     * In case the Preset found by the `where` argument doesn't exist, create a new Preset with this data.
     */
    create: XOR<PresetCreateInput, PresetUncheckedCreateInput>
    /**
     * In case the Preset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PresetUpdateInput, PresetUncheckedUpdateInput>
  }

  /**
   * Preset delete
   */
  export type PresetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preset
     */
    select?: PresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preset
     */
    omit?: PresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresetInclude<ExtArgs> | null
    /**
     * Filter which Preset to delete.
     */
    where: PresetWhereUniqueInput
  }

  /**
   * Preset deleteMany
   */
  export type PresetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Presets to delete
     */
    where?: PresetWhereInput
    /**
     * Limit how many Presets to delete.
     */
    limit?: number
  }

  /**
   * Preset without action
   */
  export type PresetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preset
     */
    select?: PresetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preset
     */
    omit?: PresetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PresetInclude<ExtArgs> | null
  }


  /**
   * Model UserQuestion
   */

  export type AggregateUserQuestion = {
    _count: UserQuestionCountAggregateOutputType | null
    _avg: UserQuestionAvgAggregateOutputType | null
    _sum: UserQuestionSumAggregateOutputType | null
    _min: UserQuestionMinAggregateOutputType | null
    _max: UserQuestionMaxAggregateOutputType | null
  }

  export type UserQuestionAvgAggregateOutputType = {
    id: number | null
    questionsId: number | null
  }

  export type UserQuestionSumAggregateOutputType = {
    id: number | null
    questionsId: number | null
  }

  export type UserQuestionMinAggregateOutputType = {
    id: number | null
    completed: boolean | null
    userId: string | null
    questionsId: number | null
  }

  export type UserQuestionMaxAggregateOutputType = {
    id: number | null
    completed: boolean | null
    userId: string | null
    questionsId: number | null
  }

  export type UserQuestionCountAggregateOutputType = {
    id: number
    completed: number
    userId: number
    questionsId: number
    _all: number
  }


  export type UserQuestionAvgAggregateInputType = {
    id?: true
    questionsId?: true
  }

  export type UserQuestionSumAggregateInputType = {
    id?: true
    questionsId?: true
  }

  export type UserQuestionMinAggregateInputType = {
    id?: true
    completed?: true
    userId?: true
    questionsId?: true
  }

  export type UserQuestionMaxAggregateInputType = {
    id?: true
    completed?: true
    userId?: true
    questionsId?: true
  }

  export type UserQuestionCountAggregateInputType = {
    id?: true
    completed?: true
    userId?: true
    questionsId?: true
    _all?: true
  }

  export type UserQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserQuestion to aggregate.
     */
    where?: UserQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuestions to fetch.
     */
    orderBy?: UserQuestionOrderByWithRelationInput | UserQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserQuestions
    **/
    _count?: true | UserQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserQuestionMaxAggregateInputType
  }

  export type GetUserQuestionAggregateType<T extends UserQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserQuestion[P]>
      : GetScalarType<T[P], AggregateUserQuestion[P]>
  }




  export type UserQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserQuestionWhereInput
    orderBy?: UserQuestionOrderByWithAggregationInput | UserQuestionOrderByWithAggregationInput[]
    by: UserQuestionScalarFieldEnum[] | UserQuestionScalarFieldEnum
    having?: UserQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserQuestionCountAggregateInputType | true
    _avg?: UserQuestionAvgAggregateInputType
    _sum?: UserQuestionSumAggregateInputType
    _min?: UserQuestionMinAggregateInputType
    _max?: UserQuestionMaxAggregateInputType
  }

  export type UserQuestionGroupByOutputType = {
    id: number
    completed: boolean
    userId: string
    questionsId: number
    _count: UserQuestionCountAggregateOutputType | null
    _avg: UserQuestionAvgAggregateOutputType | null
    _sum: UserQuestionSumAggregateOutputType | null
    _min: UserQuestionMinAggregateOutputType | null
    _max: UserQuestionMaxAggregateOutputType | null
  }

  type GetUserQuestionGroupByPayload<T extends UserQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], UserQuestionGroupByOutputType[P]>
        }
      >
    >


  export type UserQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    completed?: boolean
    userId?: boolean
    questionsId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userQuestion"]>



  export type UserQuestionSelectScalar = {
    id?: boolean
    completed?: boolean
    userId?: boolean
    questionsId?: boolean
  }

  export type UserQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "completed" | "userId" | "questionsId", ExtArgs["result"]["userQuestion"]>
  export type UserQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $UserQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserQuestion"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      completed: boolean
      userId: string
      questionsId: number
    }, ExtArgs["result"]["userQuestion"]>
    composites: {}
  }

  type UserQuestionGetPayload<S extends boolean | null | undefined | UserQuestionDefaultArgs> = $Result.GetResult<Prisma.$UserQuestionPayload, S>

  type UserQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserQuestionCountAggregateInputType | true
    }

  export interface UserQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserQuestion'], meta: { name: 'UserQuestion' } }
    /**
     * Find zero or one UserQuestion that matches the filter.
     * @param {UserQuestionFindUniqueArgs} args - Arguments to find a UserQuestion
     * @example
     * // Get one UserQuestion
     * const userQuestion = await prisma.userQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserQuestionFindUniqueArgs>(args: SelectSubset<T, UserQuestionFindUniqueArgs<ExtArgs>>): Prisma__UserQuestionClient<$Result.GetResult<Prisma.$UserQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserQuestionFindUniqueOrThrowArgs} args - Arguments to find a UserQuestion
     * @example
     * // Get one UserQuestion
     * const userQuestion = await prisma.userQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserQuestionClient<$Result.GetResult<Prisma.$UserQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestionFindFirstArgs} args - Arguments to find a UserQuestion
     * @example
     * // Get one UserQuestion
     * const userQuestion = await prisma.userQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserQuestionFindFirstArgs>(args?: SelectSubset<T, UserQuestionFindFirstArgs<ExtArgs>>): Prisma__UserQuestionClient<$Result.GetResult<Prisma.$UserQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestionFindFirstOrThrowArgs} args - Arguments to find a UserQuestion
     * @example
     * // Get one UserQuestion
     * const userQuestion = await prisma.userQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserQuestionClient<$Result.GetResult<Prisma.$UserQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserQuestions
     * const userQuestions = await prisma.userQuestion.findMany()
     * 
     * // Get first 10 UserQuestions
     * const userQuestions = await prisma.userQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userQuestionWithIdOnly = await prisma.userQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserQuestionFindManyArgs>(args?: SelectSubset<T, UserQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserQuestion.
     * @param {UserQuestionCreateArgs} args - Arguments to create a UserQuestion.
     * @example
     * // Create one UserQuestion
     * const UserQuestion = await prisma.userQuestion.create({
     *   data: {
     *     // ... data to create a UserQuestion
     *   }
     * })
     * 
     */
    create<T extends UserQuestionCreateArgs>(args: SelectSubset<T, UserQuestionCreateArgs<ExtArgs>>): Prisma__UserQuestionClient<$Result.GetResult<Prisma.$UserQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserQuestions.
     * @param {UserQuestionCreateManyArgs} args - Arguments to create many UserQuestions.
     * @example
     * // Create many UserQuestions
     * const userQuestion = await prisma.userQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserQuestionCreateManyArgs>(args?: SelectSubset<T, UserQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserQuestion.
     * @param {UserQuestionDeleteArgs} args - Arguments to delete one UserQuestion.
     * @example
     * // Delete one UserQuestion
     * const UserQuestion = await prisma.userQuestion.delete({
     *   where: {
     *     // ... filter to delete one UserQuestion
     *   }
     * })
     * 
     */
    delete<T extends UserQuestionDeleteArgs>(args: SelectSubset<T, UserQuestionDeleteArgs<ExtArgs>>): Prisma__UserQuestionClient<$Result.GetResult<Prisma.$UserQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserQuestion.
     * @param {UserQuestionUpdateArgs} args - Arguments to update one UserQuestion.
     * @example
     * // Update one UserQuestion
     * const userQuestion = await prisma.userQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserQuestionUpdateArgs>(args: SelectSubset<T, UserQuestionUpdateArgs<ExtArgs>>): Prisma__UserQuestionClient<$Result.GetResult<Prisma.$UserQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserQuestions.
     * @param {UserQuestionDeleteManyArgs} args - Arguments to filter UserQuestions to delete.
     * @example
     * // Delete a few UserQuestions
     * const { count } = await prisma.userQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserQuestionDeleteManyArgs>(args?: SelectSubset<T, UserQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserQuestions
     * const userQuestion = await prisma.userQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserQuestionUpdateManyArgs>(args: SelectSubset<T, UserQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserQuestion.
     * @param {UserQuestionUpsertArgs} args - Arguments to update or create a UserQuestion.
     * @example
     * // Update or create a UserQuestion
     * const userQuestion = await prisma.userQuestion.upsert({
     *   create: {
     *     // ... data to create a UserQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserQuestion we want to update
     *   }
     * })
     */
    upsert<T extends UserQuestionUpsertArgs>(args: SelectSubset<T, UserQuestionUpsertArgs<ExtArgs>>): Prisma__UserQuestionClient<$Result.GetResult<Prisma.$UserQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestionCountArgs} args - Arguments to filter UserQuestions to count.
     * @example
     * // Count the number of UserQuestions
     * const count = await prisma.userQuestion.count({
     *   where: {
     *     // ... the filter for the UserQuestions we want to count
     *   }
     * })
    **/
    count<T extends UserQuestionCountArgs>(
      args?: Subset<T, UserQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserQuestionAggregateArgs>(args: Subset<T, UserQuestionAggregateArgs>): Prisma.PrismaPromise<GetUserQuestionAggregateType<T>>

    /**
     * Group by UserQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserQuestionGroupByArgs} args - Group by arguments.
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
      T extends UserQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserQuestionGroupByArgs['orderBy'] }
        : { orderBy?: UserQuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserQuestion model
   */
  readonly fields: UserQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserQuestion model
   */
  interface UserQuestionFieldRefs {
    readonly id: FieldRef<"UserQuestion", 'Int'>
    readonly completed: FieldRef<"UserQuestion", 'Boolean'>
    readonly userId: FieldRef<"UserQuestion", 'String'>
    readonly questionsId: FieldRef<"UserQuestion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserQuestion findUnique
   */
  export type UserQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestion
     */
    select?: UserQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestion
     */
    omit?: UserQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionInclude<ExtArgs> | null
    /**
     * Filter, which UserQuestion to fetch.
     */
    where: UserQuestionWhereUniqueInput
  }

  /**
   * UserQuestion findUniqueOrThrow
   */
  export type UserQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestion
     */
    select?: UserQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestion
     */
    omit?: UserQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionInclude<ExtArgs> | null
    /**
     * Filter, which UserQuestion to fetch.
     */
    where: UserQuestionWhereUniqueInput
  }

  /**
   * UserQuestion findFirst
   */
  export type UserQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestion
     */
    select?: UserQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestion
     */
    omit?: UserQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionInclude<ExtArgs> | null
    /**
     * Filter, which UserQuestion to fetch.
     */
    where?: UserQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuestions to fetch.
     */
    orderBy?: UserQuestionOrderByWithRelationInput | UserQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserQuestions.
     */
    cursor?: UserQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserQuestions.
     */
    distinct?: UserQuestionScalarFieldEnum | UserQuestionScalarFieldEnum[]
  }

  /**
   * UserQuestion findFirstOrThrow
   */
  export type UserQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestion
     */
    select?: UserQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestion
     */
    omit?: UserQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionInclude<ExtArgs> | null
    /**
     * Filter, which UserQuestion to fetch.
     */
    where?: UserQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuestions to fetch.
     */
    orderBy?: UserQuestionOrderByWithRelationInput | UserQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserQuestions.
     */
    cursor?: UserQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserQuestions.
     */
    distinct?: UserQuestionScalarFieldEnum | UserQuestionScalarFieldEnum[]
  }

  /**
   * UserQuestion findMany
   */
  export type UserQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestion
     */
    select?: UserQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestion
     */
    omit?: UserQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionInclude<ExtArgs> | null
    /**
     * Filter, which UserQuestions to fetch.
     */
    where?: UserQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserQuestions to fetch.
     */
    orderBy?: UserQuestionOrderByWithRelationInput | UserQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserQuestions.
     */
    cursor?: UserQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserQuestions.
     */
    skip?: number
    distinct?: UserQuestionScalarFieldEnum | UserQuestionScalarFieldEnum[]
  }

  /**
   * UserQuestion create
   */
  export type UserQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestion
     */
    select?: UserQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestion
     */
    omit?: UserQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserQuestion.
     */
    data: XOR<UserQuestionCreateInput, UserQuestionUncheckedCreateInput>
  }

  /**
   * UserQuestion createMany
   */
  export type UserQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserQuestions.
     */
    data: UserQuestionCreateManyInput | UserQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserQuestion update
   */
  export type UserQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestion
     */
    select?: UserQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestion
     */
    omit?: UserQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserQuestion.
     */
    data: XOR<UserQuestionUpdateInput, UserQuestionUncheckedUpdateInput>
    /**
     * Choose, which UserQuestion to update.
     */
    where: UserQuestionWhereUniqueInput
  }

  /**
   * UserQuestion updateMany
   */
  export type UserQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserQuestions.
     */
    data: XOR<UserQuestionUpdateManyMutationInput, UserQuestionUncheckedUpdateManyInput>
    /**
     * Filter which UserQuestions to update
     */
    where?: UserQuestionWhereInput
    /**
     * Limit how many UserQuestions to update.
     */
    limit?: number
  }

  /**
   * UserQuestion upsert
   */
  export type UserQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestion
     */
    select?: UserQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestion
     */
    omit?: UserQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserQuestion to update in case it exists.
     */
    where: UserQuestionWhereUniqueInput
    /**
     * In case the UserQuestion found by the `where` argument doesn't exist, create a new UserQuestion with this data.
     */
    create: XOR<UserQuestionCreateInput, UserQuestionUncheckedCreateInput>
    /**
     * In case the UserQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserQuestionUpdateInput, UserQuestionUncheckedUpdateInput>
  }

  /**
   * UserQuestion delete
   */
  export type UserQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestion
     */
    select?: UserQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestion
     */
    omit?: UserQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionInclude<ExtArgs> | null
    /**
     * Filter which UserQuestion to delete.
     */
    where: UserQuestionWhereUniqueInput
  }

  /**
   * UserQuestion deleteMany
   */
  export type UserQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserQuestions to delete
     */
    where?: UserQuestionWhereInput
    /**
     * Limit how many UserQuestions to delete.
     */
    limit?: number
  }

  /**
   * UserQuestion without action
   */
  export type UserQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserQuestion
     */
    select?: UserQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserQuestion
     */
    omit?: UserQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserQuestionInclude<ExtArgs> | null
  }


  /**
   * Model UserMaterial
   */

  export type AggregateUserMaterial = {
    _count: UserMaterialCountAggregateOutputType | null
    _avg: UserMaterialAvgAggregateOutputType | null
    _sum: UserMaterialSumAggregateOutputType | null
    _min: UserMaterialMinAggregateOutputType | null
    _max: UserMaterialMaxAggregateOutputType | null
  }

  export type UserMaterialAvgAggregateOutputType = {
    id: number | null
    materialsId: number | null
  }

  export type UserMaterialSumAggregateOutputType = {
    id: number | null
    materialsId: number | null
  }

  export type UserMaterialMinAggregateOutputType = {
    id: number | null
    completed: boolean | null
    userId: string | null
    materialsId: number | null
  }

  export type UserMaterialMaxAggregateOutputType = {
    id: number | null
    completed: boolean | null
    userId: string | null
    materialsId: number | null
  }

  export type UserMaterialCountAggregateOutputType = {
    id: number
    completed: number
    userId: number
    materialsId: number
    _all: number
  }


  export type UserMaterialAvgAggregateInputType = {
    id?: true
    materialsId?: true
  }

  export type UserMaterialSumAggregateInputType = {
    id?: true
    materialsId?: true
  }

  export type UserMaterialMinAggregateInputType = {
    id?: true
    completed?: true
    userId?: true
    materialsId?: true
  }

  export type UserMaterialMaxAggregateInputType = {
    id?: true
    completed?: true
    userId?: true
    materialsId?: true
  }

  export type UserMaterialCountAggregateInputType = {
    id?: true
    completed?: true
    userId?: true
    materialsId?: true
    _all?: true
  }

  export type UserMaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMaterial to aggregate.
     */
    where?: UserMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMaterials to fetch.
     */
    orderBy?: UserMaterialOrderByWithRelationInput | UserMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserMaterials
    **/
    _count?: true | UserMaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserMaterialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserMaterialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaterialMaxAggregateInputType
  }

  export type GetUserMaterialAggregateType<T extends UserMaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateUserMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserMaterial[P]>
      : GetScalarType<T[P], AggregateUserMaterial[P]>
  }




  export type UserMaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMaterialWhereInput
    orderBy?: UserMaterialOrderByWithAggregationInput | UserMaterialOrderByWithAggregationInput[]
    by: UserMaterialScalarFieldEnum[] | UserMaterialScalarFieldEnum
    having?: UserMaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserMaterialCountAggregateInputType | true
    _avg?: UserMaterialAvgAggregateInputType
    _sum?: UserMaterialSumAggregateInputType
    _min?: UserMaterialMinAggregateInputType
    _max?: UserMaterialMaxAggregateInputType
  }

  export type UserMaterialGroupByOutputType = {
    id: number
    completed: boolean
    userId: string
    materialsId: number
    _count: UserMaterialCountAggregateOutputType | null
    _avg: UserMaterialAvgAggregateOutputType | null
    _sum: UserMaterialSumAggregateOutputType | null
    _min: UserMaterialMinAggregateOutputType | null
    _max: UserMaterialMaxAggregateOutputType | null
  }

  type GetUserMaterialGroupByPayload<T extends UserMaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserMaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserMaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserMaterialGroupByOutputType[P]>
            : GetScalarType<T[P], UserMaterialGroupByOutputType[P]>
        }
      >
    >


  export type UserMaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    completed?: boolean
    userId?: boolean
    materialsId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMaterial"]>



  export type UserMaterialSelectScalar = {
    id?: boolean
    completed?: boolean
    userId?: boolean
    materialsId?: boolean
  }

  export type UserMaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "completed" | "userId" | "materialsId", ExtArgs["result"]["userMaterial"]>
  export type UserMaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }

  export type $UserMaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserMaterial"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      material: Prisma.$MaterialPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      completed: boolean
      userId: string
      materialsId: number
    }, ExtArgs["result"]["userMaterial"]>
    composites: {}
  }

  type UserMaterialGetPayload<S extends boolean | null | undefined | UserMaterialDefaultArgs> = $Result.GetResult<Prisma.$UserMaterialPayload, S>

  type UserMaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserMaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserMaterialCountAggregateInputType | true
    }

  export interface UserMaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserMaterial'], meta: { name: 'UserMaterial' } }
    /**
     * Find zero or one UserMaterial that matches the filter.
     * @param {UserMaterialFindUniqueArgs} args - Arguments to find a UserMaterial
     * @example
     * // Get one UserMaterial
     * const userMaterial = await prisma.userMaterial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserMaterialFindUniqueArgs>(args: SelectSubset<T, UserMaterialFindUniqueArgs<ExtArgs>>): Prisma__UserMaterialClient<$Result.GetResult<Prisma.$UserMaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserMaterial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserMaterialFindUniqueOrThrowArgs} args - Arguments to find a UserMaterial
     * @example
     * // Get one UserMaterial
     * const userMaterial = await prisma.userMaterial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserMaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, UserMaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserMaterialClient<$Result.GetResult<Prisma.$UserMaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserMaterial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMaterialFindFirstArgs} args - Arguments to find a UserMaterial
     * @example
     * // Get one UserMaterial
     * const userMaterial = await prisma.userMaterial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserMaterialFindFirstArgs>(args?: SelectSubset<T, UserMaterialFindFirstArgs<ExtArgs>>): Prisma__UserMaterialClient<$Result.GetResult<Prisma.$UserMaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserMaterial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMaterialFindFirstOrThrowArgs} args - Arguments to find a UserMaterial
     * @example
     * // Get one UserMaterial
     * const userMaterial = await prisma.userMaterial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserMaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, UserMaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserMaterialClient<$Result.GetResult<Prisma.$UserMaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserMaterials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserMaterials
     * const userMaterials = await prisma.userMaterial.findMany()
     * 
     * // Get first 10 UserMaterials
     * const userMaterials = await prisma.userMaterial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userMaterialWithIdOnly = await prisma.userMaterial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserMaterialFindManyArgs>(args?: SelectSubset<T, UserMaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserMaterial.
     * @param {UserMaterialCreateArgs} args - Arguments to create a UserMaterial.
     * @example
     * // Create one UserMaterial
     * const UserMaterial = await prisma.userMaterial.create({
     *   data: {
     *     // ... data to create a UserMaterial
     *   }
     * })
     * 
     */
    create<T extends UserMaterialCreateArgs>(args: SelectSubset<T, UserMaterialCreateArgs<ExtArgs>>): Prisma__UserMaterialClient<$Result.GetResult<Prisma.$UserMaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserMaterials.
     * @param {UserMaterialCreateManyArgs} args - Arguments to create many UserMaterials.
     * @example
     * // Create many UserMaterials
     * const userMaterial = await prisma.userMaterial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserMaterialCreateManyArgs>(args?: SelectSubset<T, UserMaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserMaterial.
     * @param {UserMaterialDeleteArgs} args - Arguments to delete one UserMaterial.
     * @example
     * // Delete one UserMaterial
     * const UserMaterial = await prisma.userMaterial.delete({
     *   where: {
     *     // ... filter to delete one UserMaterial
     *   }
     * })
     * 
     */
    delete<T extends UserMaterialDeleteArgs>(args: SelectSubset<T, UserMaterialDeleteArgs<ExtArgs>>): Prisma__UserMaterialClient<$Result.GetResult<Prisma.$UserMaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserMaterial.
     * @param {UserMaterialUpdateArgs} args - Arguments to update one UserMaterial.
     * @example
     * // Update one UserMaterial
     * const userMaterial = await prisma.userMaterial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserMaterialUpdateArgs>(args: SelectSubset<T, UserMaterialUpdateArgs<ExtArgs>>): Prisma__UserMaterialClient<$Result.GetResult<Prisma.$UserMaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserMaterials.
     * @param {UserMaterialDeleteManyArgs} args - Arguments to filter UserMaterials to delete.
     * @example
     * // Delete a few UserMaterials
     * const { count } = await prisma.userMaterial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserMaterialDeleteManyArgs>(args?: SelectSubset<T, UserMaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserMaterials
     * const userMaterial = await prisma.userMaterial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserMaterialUpdateManyArgs>(args: SelectSubset<T, UserMaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserMaterial.
     * @param {UserMaterialUpsertArgs} args - Arguments to update or create a UserMaterial.
     * @example
     * // Update or create a UserMaterial
     * const userMaterial = await prisma.userMaterial.upsert({
     *   create: {
     *     // ... data to create a UserMaterial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserMaterial we want to update
     *   }
     * })
     */
    upsert<T extends UserMaterialUpsertArgs>(args: SelectSubset<T, UserMaterialUpsertArgs<ExtArgs>>): Prisma__UserMaterialClient<$Result.GetResult<Prisma.$UserMaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMaterialCountArgs} args - Arguments to filter UserMaterials to count.
     * @example
     * // Count the number of UserMaterials
     * const count = await prisma.userMaterial.count({
     *   where: {
     *     // ... the filter for the UserMaterials we want to count
     *   }
     * })
    **/
    count<T extends UserMaterialCountArgs>(
      args?: Subset<T, UserMaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserMaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserMaterialAggregateArgs>(args: Subset<T, UserMaterialAggregateArgs>): Prisma.PrismaPromise<GetUserMaterialAggregateType<T>>

    /**
     * Group by UserMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMaterialGroupByArgs} args - Group by arguments.
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
      T extends UserMaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserMaterialGroupByArgs['orderBy'] }
        : { orderBy?: UserMaterialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserMaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserMaterial model
   */
  readonly fields: UserMaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserMaterial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserMaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    material<T extends MaterialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialDefaultArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserMaterial model
   */
  interface UserMaterialFieldRefs {
    readonly id: FieldRef<"UserMaterial", 'Int'>
    readonly completed: FieldRef<"UserMaterial", 'Boolean'>
    readonly userId: FieldRef<"UserMaterial", 'String'>
    readonly materialsId: FieldRef<"UserMaterial", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserMaterial findUnique
   */
  export type UserMaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMaterial
     */
    select?: UserMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMaterial
     */
    omit?: UserMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMaterialInclude<ExtArgs> | null
    /**
     * Filter, which UserMaterial to fetch.
     */
    where: UserMaterialWhereUniqueInput
  }

  /**
   * UserMaterial findUniqueOrThrow
   */
  export type UserMaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMaterial
     */
    select?: UserMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMaterial
     */
    omit?: UserMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMaterialInclude<ExtArgs> | null
    /**
     * Filter, which UserMaterial to fetch.
     */
    where: UserMaterialWhereUniqueInput
  }

  /**
   * UserMaterial findFirst
   */
  export type UserMaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMaterial
     */
    select?: UserMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMaterial
     */
    omit?: UserMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMaterialInclude<ExtArgs> | null
    /**
     * Filter, which UserMaterial to fetch.
     */
    where?: UserMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMaterials to fetch.
     */
    orderBy?: UserMaterialOrderByWithRelationInput | UserMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMaterials.
     */
    cursor?: UserMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMaterials.
     */
    distinct?: UserMaterialScalarFieldEnum | UserMaterialScalarFieldEnum[]
  }

  /**
   * UserMaterial findFirstOrThrow
   */
  export type UserMaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMaterial
     */
    select?: UserMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMaterial
     */
    omit?: UserMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMaterialInclude<ExtArgs> | null
    /**
     * Filter, which UserMaterial to fetch.
     */
    where?: UserMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMaterials to fetch.
     */
    orderBy?: UserMaterialOrderByWithRelationInput | UserMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMaterials.
     */
    cursor?: UserMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMaterials.
     */
    distinct?: UserMaterialScalarFieldEnum | UserMaterialScalarFieldEnum[]
  }

  /**
   * UserMaterial findMany
   */
  export type UserMaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMaterial
     */
    select?: UserMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMaterial
     */
    omit?: UserMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMaterialInclude<ExtArgs> | null
    /**
     * Filter, which UserMaterials to fetch.
     */
    where?: UserMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMaterials to fetch.
     */
    orderBy?: UserMaterialOrderByWithRelationInput | UserMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserMaterials.
     */
    cursor?: UserMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMaterials.
     */
    skip?: number
    distinct?: UserMaterialScalarFieldEnum | UserMaterialScalarFieldEnum[]
  }

  /**
   * UserMaterial create
   */
  export type UserMaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMaterial
     */
    select?: UserMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMaterial
     */
    omit?: UserMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a UserMaterial.
     */
    data: XOR<UserMaterialCreateInput, UserMaterialUncheckedCreateInput>
  }

  /**
   * UserMaterial createMany
   */
  export type UserMaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserMaterials.
     */
    data: UserMaterialCreateManyInput | UserMaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserMaterial update
   */
  export type UserMaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMaterial
     */
    select?: UserMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMaterial
     */
    omit?: UserMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a UserMaterial.
     */
    data: XOR<UserMaterialUpdateInput, UserMaterialUncheckedUpdateInput>
    /**
     * Choose, which UserMaterial to update.
     */
    where: UserMaterialWhereUniqueInput
  }

  /**
   * UserMaterial updateMany
   */
  export type UserMaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserMaterials.
     */
    data: XOR<UserMaterialUpdateManyMutationInput, UserMaterialUncheckedUpdateManyInput>
    /**
     * Filter which UserMaterials to update
     */
    where?: UserMaterialWhereInput
    /**
     * Limit how many UserMaterials to update.
     */
    limit?: number
  }

  /**
   * UserMaterial upsert
   */
  export type UserMaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMaterial
     */
    select?: UserMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMaterial
     */
    omit?: UserMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the UserMaterial to update in case it exists.
     */
    where: UserMaterialWhereUniqueInput
    /**
     * In case the UserMaterial found by the `where` argument doesn't exist, create a new UserMaterial with this data.
     */
    create: XOR<UserMaterialCreateInput, UserMaterialUncheckedCreateInput>
    /**
     * In case the UserMaterial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserMaterialUpdateInput, UserMaterialUncheckedUpdateInput>
  }

  /**
   * UserMaterial delete
   */
  export type UserMaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMaterial
     */
    select?: UserMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMaterial
     */
    omit?: UserMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMaterialInclude<ExtArgs> | null
    /**
     * Filter which UserMaterial to delete.
     */
    where: UserMaterialWhereUniqueInput
  }

  /**
   * UserMaterial deleteMany
   */
  export type UserMaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMaterials to delete
     */
    where?: UserMaterialWhereInput
    /**
     * Limit how many UserMaterials to delete.
     */
    limit?: number
  }

  /**
   * UserMaterial without action
   */
  export type UserMaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMaterial
     */
    select?: UserMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMaterial
     */
    omit?: UserMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMaterialInclude<ExtArgs> | null
  }


  /**
   * Model QuestionHasMaterial
   */

  export type AggregateQuestionHasMaterial = {
    _count: QuestionHasMaterialCountAggregateOutputType | null
    _avg: QuestionHasMaterialAvgAggregateOutputType | null
    _sum: QuestionHasMaterialSumAggregateOutputType | null
    _min: QuestionHasMaterialMinAggregateOutputType | null
    _max: QuestionHasMaterialMaxAggregateOutputType | null
  }

  export type QuestionHasMaterialAvgAggregateOutputType = {
    questionId: number | null
    materialId: number | null
  }

  export type QuestionHasMaterialSumAggregateOutputType = {
    questionId: number | null
    materialId: number | null
  }

  export type QuestionHasMaterialMinAggregateOutputType = {
    questionId: number | null
    materialId: number | null
  }

  export type QuestionHasMaterialMaxAggregateOutputType = {
    questionId: number | null
    materialId: number | null
  }

  export type QuestionHasMaterialCountAggregateOutputType = {
    questionId: number
    materialId: number
    _all: number
  }


  export type QuestionHasMaterialAvgAggregateInputType = {
    questionId?: true
    materialId?: true
  }

  export type QuestionHasMaterialSumAggregateInputType = {
    questionId?: true
    materialId?: true
  }

  export type QuestionHasMaterialMinAggregateInputType = {
    questionId?: true
    materialId?: true
  }

  export type QuestionHasMaterialMaxAggregateInputType = {
    questionId?: true
    materialId?: true
  }

  export type QuestionHasMaterialCountAggregateInputType = {
    questionId?: true
    materialId?: true
    _all?: true
  }

  export type QuestionHasMaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionHasMaterial to aggregate.
     */
    where?: QuestionHasMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionHasMaterials to fetch.
     */
    orderBy?: QuestionHasMaterialOrderByWithRelationInput | QuestionHasMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionHasMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionHasMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionHasMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionHasMaterials
    **/
    _count?: true | QuestionHasMaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionHasMaterialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionHasMaterialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionHasMaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionHasMaterialMaxAggregateInputType
  }

  export type GetQuestionHasMaterialAggregateType<T extends QuestionHasMaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionHasMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionHasMaterial[P]>
      : GetScalarType<T[P], AggregateQuestionHasMaterial[P]>
  }




  export type QuestionHasMaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionHasMaterialWhereInput
    orderBy?: QuestionHasMaterialOrderByWithAggregationInput | QuestionHasMaterialOrderByWithAggregationInput[]
    by: QuestionHasMaterialScalarFieldEnum[] | QuestionHasMaterialScalarFieldEnum
    having?: QuestionHasMaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionHasMaterialCountAggregateInputType | true
    _avg?: QuestionHasMaterialAvgAggregateInputType
    _sum?: QuestionHasMaterialSumAggregateInputType
    _min?: QuestionHasMaterialMinAggregateInputType
    _max?: QuestionHasMaterialMaxAggregateInputType
  }

  export type QuestionHasMaterialGroupByOutputType = {
    questionId: number
    materialId: number
    _count: QuestionHasMaterialCountAggregateOutputType | null
    _avg: QuestionHasMaterialAvgAggregateOutputType | null
    _sum: QuestionHasMaterialSumAggregateOutputType | null
    _min: QuestionHasMaterialMinAggregateOutputType | null
    _max: QuestionHasMaterialMaxAggregateOutputType | null
  }

  type GetQuestionHasMaterialGroupByPayload<T extends QuestionHasMaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionHasMaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionHasMaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionHasMaterialGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionHasMaterialGroupByOutputType[P]>
        }
      >
    >


  export type QuestionHasMaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    questionId?: boolean
    materialId?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionHasMaterial"]>



  export type QuestionHasMaterialSelectScalar = {
    questionId?: boolean
    materialId?: boolean
  }

  export type QuestionHasMaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"questionId" | "materialId", ExtArgs["result"]["questionHasMaterial"]>
  export type QuestionHasMaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    material?: boolean | MaterialDefaultArgs<ExtArgs>
  }

  export type $QuestionHasMaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestionHasMaterial"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      material: Prisma.$MaterialPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      questionId: number
      materialId: number
    }, ExtArgs["result"]["questionHasMaterial"]>
    composites: {}
  }

  type QuestionHasMaterialGetPayload<S extends boolean | null | undefined | QuestionHasMaterialDefaultArgs> = $Result.GetResult<Prisma.$QuestionHasMaterialPayload, S>

  type QuestionHasMaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionHasMaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionHasMaterialCountAggregateInputType | true
    }

  export interface QuestionHasMaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestionHasMaterial'], meta: { name: 'QuestionHasMaterial' } }
    /**
     * Find zero or one QuestionHasMaterial that matches the filter.
     * @param {QuestionHasMaterialFindUniqueArgs} args - Arguments to find a QuestionHasMaterial
     * @example
     * // Get one QuestionHasMaterial
     * const questionHasMaterial = await prisma.questionHasMaterial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionHasMaterialFindUniqueArgs>(args: SelectSubset<T, QuestionHasMaterialFindUniqueArgs<ExtArgs>>): Prisma__QuestionHasMaterialClient<$Result.GetResult<Prisma.$QuestionHasMaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuestionHasMaterial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionHasMaterialFindUniqueOrThrowArgs} args - Arguments to find a QuestionHasMaterial
     * @example
     * // Get one QuestionHasMaterial
     * const questionHasMaterial = await prisma.questionHasMaterial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionHasMaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionHasMaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionHasMaterialClient<$Result.GetResult<Prisma.$QuestionHasMaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionHasMaterial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionHasMaterialFindFirstArgs} args - Arguments to find a QuestionHasMaterial
     * @example
     * // Get one QuestionHasMaterial
     * const questionHasMaterial = await prisma.questionHasMaterial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionHasMaterialFindFirstArgs>(args?: SelectSubset<T, QuestionHasMaterialFindFirstArgs<ExtArgs>>): Prisma__QuestionHasMaterialClient<$Result.GetResult<Prisma.$QuestionHasMaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionHasMaterial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionHasMaterialFindFirstOrThrowArgs} args - Arguments to find a QuestionHasMaterial
     * @example
     * // Get one QuestionHasMaterial
     * const questionHasMaterial = await prisma.questionHasMaterial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionHasMaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionHasMaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionHasMaterialClient<$Result.GetResult<Prisma.$QuestionHasMaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuestionHasMaterials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionHasMaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionHasMaterials
     * const questionHasMaterials = await prisma.questionHasMaterial.findMany()
     * 
     * // Get first 10 QuestionHasMaterials
     * const questionHasMaterials = await prisma.questionHasMaterial.findMany({ take: 10 })
     * 
     * // Only select the `questionId`
     * const questionHasMaterialWithQuestionIdOnly = await prisma.questionHasMaterial.findMany({ select: { questionId: true } })
     * 
     */
    findMany<T extends QuestionHasMaterialFindManyArgs>(args?: SelectSubset<T, QuestionHasMaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionHasMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuestionHasMaterial.
     * @param {QuestionHasMaterialCreateArgs} args - Arguments to create a QuestionHasMaterial.
     * @example
     * // Create one QuestionHasMaterial
     * const QuestionHasMaterial = await prisma.questionHasMaterial.create({
     *   data: {
     *     // ... data to create a QuestionHasMaterial
     *   }
     * })
     * 
     */
    create<T extends QuestionHasMaterialCreateArgs>(args: SelectSubset<T, QuestionHasMaterialCreateArgs<ExtArgs>>): Prisma__QuestionHasMaterialClient<$Result.GetResult<Prisma.$QuestionHasMaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuestionHasMaterials.
     * @param {QuestionHasMaterialCreateManyArgs} args - Arguments to create many QuestionHasMaterials.
     * @example
     * // Create many QuestionHasMaterials
     * const questionHasMaterial = await prisma.questionHasMaterial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionHasMaterialCreateManyArgs>(args?: SelectSubset<T, QuestionHasMaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QuestionHasMaterial.
     * @param {QuestionHasMaterialDeleteArgs} args - Arguments to delete one QuestionHasMaterial.
     * @example
     * // Delete one QuestionHasMaterial
     * const QuestionHasMaterial = await prisma.questionHasMaterial.delete({
     *   where: {
     *     // ... filter to delete one QuestionHasMaterial
     *   }
     * })
     * 
     */
    delete<T extends QuestionHasMaterialDeleteArgs>(args: SelectSubset<T, QuestionHasMaterialDeleteArgs<ExtArgs>>): Prisma__QuestionHasMaterialClient<$Result.GetResult<Prisma.$QuestionHasMaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuestionHasMaterial.
     * @param {QuestionHasMaterialUpdateArgs} args - Arguments to update one QuestionHasMaterial.
     * @example
     * // Update one QuestionHasMaterial
     * const questionHasMaterial = await prisma.questionHasMaterial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionHasMaterialUpdateArgs>(args: SelectSubset<T, QuestionHasMaterialUpdateArgs<ExtArgs>>): Prisma__QuestionHasMaterialClient<$Result.GetResult<Prisma.$QuestionHasMaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuestionHasMaterials.
     * @param {QuestionHasMaterialDeleteManyArgs} args - Arguments to filter QuestionHasMaterials to delete.
     * @example
     * // Delete a few QuestionHasMaterials
     * const { count } = await prisma.questionHasMaterial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionHasMaterialDeleteManyArgs>(args?: SelectSubset<T, QuestionHasMaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionHasMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionHasMaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionHasMaterials
     * const questionHasMaterial = await prisma.questionHasMaterial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionHasMaterialUpdateManyArgs>(args: SelectSubset<T, QuestionHasMaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuestionHasMaterial.
     * @param {QuestionHasMaterialUpsertArgs} args - Arguments to update or create a QuestionHasMaterial.
     * @example
     * // Update or create a QuestionHasMaterial
     * const questionHasMaterial = await prisma.questionHasMaterial.upsert({
     *   create: {
     *     // ... data to create a QuestionHasMaterial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionHasMaterial we want to update
     *   }
     * })
     */
    upsert<T extends QuestionHasMaterialUpsertArgs>(args: SelectSubset<T, QuestionHasMaterialUpsertArgs<ExtArgs>>): Prisma__QuestionHasMaterialClient<$Result.GetResult<Prisma.$QuestionHasMaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuestionHasMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionHasMaterialCountArgs} args - Arguments to filter QuestionHasMaterials to count.
     * @example
     * // Count the number of QuestionHasMaterials
     * const count = await prisma.questionHasMaterial.count({
     *   where: {
     *     // ... the filter for the QuestionHasMaterials we want to count
     *   }
     * })
    **/
    count<T extends QuestionHasMaterialCountArgs>(
      args?: Subset<T, QuestionHasMaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionHasMaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionHasMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionHasMaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionHasMaterialAggregateArgs>(args: Subset<T, QuestionHasMaterialAggregateArgs>): Prisma.PrismaPromise<GetQuestionHasMaterialAggregateType<T>>

    /**
     * Group by QuestionHasMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionHasMaterialGroupByArgs} args - Group by arguments.
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
      T extends QuestionHasMaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionHasMaterialGroupByArgs['orderBy'] }
        : { orderBy?: QuestionHasMaterialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionHasMaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionHasMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestionHasMaterial model
   */
  readonly fields: QuestionHasMaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionHasMaterial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionHasMaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    material<T extends MaterialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialDefaultArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QuestionHasMaterial model
   */
  interface QuestionHasMaterialFieldRefs {
    readonly questionId: FieldRef<"QuestionHasMaterial", 'Int'>
    readonly materialId: FieldRef<"QuestionHasMaterial", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * QuestionHasMaterial findUnique
   */
  export type QuestionHasMaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionHasMaterial
     */
    select?: QuestionHasMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionHasMaterial
     */
    omit?: QuestionHasMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionHasMaterialInclude<ExtArgs> | null
    /**
     * Filter, which QuestionHasMaterial to fetch.
     */
    where: QuestionHasMaterialWhereUniqueInput
  }

  /**
   * QuestionHasMaterial findUniqueOrThrow
   */
  export type QuestionHasMaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionHasMaterial
     */
    select?: QuestionHasMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionHasMaterial
     */
    omit?: QuestionHasMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionHasMaterialInclude<ExtArgs> | null
    /**
     * Filter, which QuestionHasMaterial to fetch.
     */
    where: QuestionHasMaterialWhereUniqueInput
  }

  /**
   * QuestionHasMaterial findFirst
   */
  export type QuestionHasMaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionHasMaterial
     */
    select?: QuestionHasMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionHasMaterial
     */
    omit?: QuestionHasMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionHasMaterialInclude<ExtArgs> | null
    /**
     * Filter, which QuestionHasMaterial to fetch.
     */
    where?: QuestionHasMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionHasMaterials to fetch.
     */
    orderBy?: QuestionHasMaterialOrderByWithRelationInput | QuestionHasMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionHasMaterials.
     */
    cursor?: QuestionHasMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionHasMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionHasMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionHasMaterials.
     */
    distinct?: QuestionHasMaterialScalarFieldEnum | QuestionHasMaterialScalarFieldEnum[]
  }

  /**
   * QuestionHasMaterial findFirstOrThrow
   */
  export type QuestionHasMaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionHasMaterial
     */
    select?: QuestionHasMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionHasMaterial
     */
    omit?: QuestionHasMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionHasMaterialInclude<ExtArgs> | null
    /**
     * Filter, which QuestionHasMaterial to fetch.
     */
    where?: QuestionHasMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionHasMaterials to fetch.
     */
    orderBy?: QuestionHasMaterialOrderByWithRelationInput | QuestionHasMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionHasMaterials.
     */
    cursor?: QuestionHasMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionHasMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionHasMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionHasMaterials.
     */
    distinct?: QuestionHasMaterialScalarFieldEnum | QuestionHasMaterialScalarFieldEnum[]
  }

  /**
   * QuestionHasMaterial findMany
   */
  export type QuestionHasMaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionHasMaterial
     */
    select?: QuestionHasMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionHasMaterial
     */
    omit?: QuestionHasMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionHasMaterialInclude<ExtArgs> | null
    /**
     * Filter, which QuestionHasMaterials to fetch.
     */
    where?: QuestionHasMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionHasMaterials to fetch.
     */
    orderBy?: QuestionHasMaterialOrderByWithRelationInput | QuestionHasMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionHasMaterials.
     */
    cursor?: QuestionHasMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionHasMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionHasMaterials.
     */
    skip?: number
    distinct?: QuestionHasMaterialScalarFieldEnum | QuestionHasMaterialScalarFieldEnum[]
  }

  /**
   * QuestionHasMaterial create
   */
  export type QuestionHasMaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionHasMaterial
     */
    select?: QuestionHasMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionHasMaterial
     */
    omit?: QuestionHasMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionHasMaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestionHasMaterial.
     */
    data: XOR<QuestionHasMaterialCreateInput, QuestionHasMaterialUncheckedCreateInput>
  }

  /**
   * QuestionHasMaterial createMany
   */
  export type QuestionHasMaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestionHasMaterials.
     */
    data: QuestionHasMaterialCreateManyInput | QuestionHasMaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestionHasMaterial update
   */
  export type QuestionHasMaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionHasMaterial
     */
    select?: QuestionHasMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionHasMaterial
     */
    omit?: QuestionHasMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionHasMaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestionHasMaterial.
     */
    data: XOR<QuestionHasMaterialUpdateInput, QuestionHasMaterialUncheckedUpdateInput>
    /**
     * Choose, which QuestionHasMaterial to update.
     */
    where: QuestionHasMaterialWhereUniqueInput
  }

  /**
   * QuestionHasMaterial updateMany
   */
  export type QuestionHasMaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestionHasMaterials.
     */
    data: XOR<QuestionHasMaterialUpdateManyMutationInput, QuestionHasMaterialUncheckedUpdateManyInput>
    /**
     * Filter which QuestionHasMaterials to update
     */
    where?: QuestionHasMaterialWhereInput
    /**
     * Limit how many QuestionHasMaterials to update.
     */
    limit?: number
  }

  /**
   * QuestionHasMaterial upsert
   */
  export type QuestionHasMaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionHasMaterial
     */
    select?: QuestionHasMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionHasMaterial
     */
    omit?: QuestionHasMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionHasMaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestionHasMaterial to update in case it exists.
     */
    where: QuestionHasMaterialWhereUniqueInput
    /**
     * In case the QuestionHasMaterial found by the `where` argument doesn't exist, create a new QuestionHasMaterial with this data.
     */
    create: XOR<QuestionHasMaterialCreateInput, QuestionHasMaterialUncheckedCreateInput>
    /**
     * In case the QuestionHasMaterial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionHasMaterialUpdateInput, QuestionHasMaterialUncheckedUpdateInput>
  }

  /**
   * QuestionHasMaterial delete
   */
  export type QuestionHasMaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionHasMaterial
     */
    select?: QuestionHasMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionHasMaterial
     */
    omit?: QuestionHasMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionHasMaterialInclude<ExtArgs> | null
    /**
     * Filter which QuestionHasMaterial to delete.
     */
    where: QuestionHasMaterialWhereUniqueInput
  }

  /**
   * QuestionHasMaterial deleteMany
   */
  export type QuestionHasMaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionHasMaterials to delete
     */
    where?: QuestionHasMaterialWhereInput
    /**
     * Limit how many QuestionHasMaterials to delete.
     */
    limit?: number
  }

  /**
   * QuestionHasMaterial without action
   */
  export type QuestionHasMaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionHasMaterial
     */
    select?: QuestionHasMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionHasMaterial
     */
    omit?: QuestionHasMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionHasMaterialInclude<ExtArgs> | null
  }


  /**
   * Model MaterialHasImage
   */

  export type AggregateMaterialHasImage = {
    _count: MaterialHasImageCountAggregateOutputType | null
    _avg: MaterialHasImageAvgAggregateOutputType | null
    _sum: MaterialHasImageSumAggregateOutputType | null
    _min: MaterialHasImageMinAggregateOutputType | null
    _max: MaterialHasImageMaxAggregateOutputType | null
  }

  export type MaterialHasImageAvgAggregateOutputType = {
    materialId: number | null
    imageId: number | null
  }

  export type MaterialHasImageSumAggregateOutputType = {
    materialId: number | null
    imageId: number | null
  }

  export type MaterialHasImageMinAggregateOutputType = {
    materialId: number | null
    imageId: number | null
  }

  export type MaterialHasImageMaxAggregateOutputType = {
    materialId: number | null
    imageId: number | null
  }

  export type MaterialHasImageCountAggregateOutputType = {
    materialId: number
    imageId: number
    _all: number
  }


  export type MaterialHasImageAvgAggregateInputType = {
    materialId?: true
    imageId?: true
  }

  export type MaterialHasImageSumAggregateInputType = {
    materialId?: true
    imageId?: true
  }

  export type MaterialHasImageMinAggregateInputType = {
    materialId?: true
    imageId?: true
  }

  export type MaterialHasImageMaxAggregateInputType = {
    materialId?: true
    imageId?: true
  }

  export type MaterialHasImageCountAggregateInputType = {
    materialId?: true
    imageId?: true
    _all?: true
  }

  export type MaterialHasImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaterialHasImage to aggregate.
     */
    where?: MaterialHasImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialHasImages to fetch.
     */
    orderBy?: MaterialHasImageOrderByWithRelationInput | MaterialHasImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialHasImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialHasImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialHasImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaterialHasImages
    **/
    _count?: true | MaterialHasImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaterialHasImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaterialHasImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialHasImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialHasImageMaxAggregateInputType
  }

  export type GetMaterialHasImageAggregateType<T extends MaterialHasImageAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterialHasImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterialHasImage[P]>
      : GetScalarType<T[P], AggregateMaterialHasImage[P]>
  }




  export type MaterialHasImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialHasImageWhereInput
    orderBy?: MaterialHasImageOrderByWithAggregationInput | MaterialHasImageOrderByWithAggregationInput[]
    by: MaterialHasImageScalarFieldEnum[] | MaterialHasImageScalarFieldEnum
    having?: MaterialHasImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialHasImageCountAggregateInputType | true
    _avg?: MaterialHasImageAvgAggregateInputType
    _sum?: MaterialHasImageSumAggregateInputType
    _min?: MaterialHasImageMinAggregateInputType
    _max?: MaterialHasImageMaxAggregateInputType
  }

  export type MaterialHasImageGroupByOutputType = {
    materialId: number
    imageId: number
    _count: MaterialHasImageCountAggregateOutputType | null
    _avg: MaterialHasImageAvgAggregateOutputType | null
    _sum: MaterialHasImageSumAggregateOutputType | null
    _min: MaterialHasImageMinAggregateOutputType | null
    _max: MaterialHasImageMaxAggregateOutputType | null
  }

  type GetMaterialHasImageGroupByPayload<T extends MaterialHasImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialHasImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialHasImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialHasImageGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialHasImageGroupByOutputType[P]>
        }
      >
    >


  export type MaterialHasImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    materialId?: boolean
    imageId?: boolean
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["materialHasImage"]>



  export type MaterialHasImageSelectScalar = {
    materialId?: boolean
    imageId?: boolean
  }

  export type MaterialHasImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"materialId" | "imageId", ExtArgs["result"]["materialHasImage"]>
  export type MaterialHasImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    material?: boolean | MaterialDefaultArgs<ExtArgs>
    image?: boolean | ImageDefaultArgs<ExtArgs>
  }

  export type $MaterialHasImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaterialHasImage"
    objects: {
      material: Prisma.$MaterialPayload<ExtArgs>
      image: Prisma.$ImagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      materialId: number
      imageId: number
    }, ExtArgs["result"]["materialHasImage"]>
    composites: {}
  }

  type MaterialHasImageGetPayload<S extends boolean | null | undefined | MaterialHasImageDefaultArgs> = $Result.GetResult<Prisma.$MaterialHasImagePayload, S>

  type MaterialHasImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaterialHasImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaterialHasImageCountAggregateInputType | true
    }

  export interface MaterialHasImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaterialHasImage'], meta: { name: 'MaterialHasImage' } }
    /**
     * Find zero or one MaterialHasImage that matches the filter.
     * @param {MaterialHasImageFindUniqueArgs} args - Arguments to find a MaterialHasImage
     * @example
     * // Get one MaterialHasImage
     * const materialHasImage = await prisma.materialHasImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialHasImageFindUniqueArgs>(args: SelectSubset<T, MaterialHasImageFindUniqueArgs<ExtArgs>>): Prisma__MaterialHasImageClient<$Result.GetResult<Prisma.$MaterialHasImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MaterialHasImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialHasImageFindUniqueOrThrowArgs} args - Arguments to find a MaterialHasImage
     * @example
     * // Get one MaterialHasImage
     * const materialHasImage = await prisma.materialHasImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialHasImageFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialHasImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialHasImageClient<$Result.GetResult<Prisma.$MaterialHasImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaterialHasImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialHasImageFindFirstArgs} args - Arguments to find a MaterialHasImage
     * @example
     * // Get one MaterialHasImage
     * const materialHasImage = await prisma.materialHasImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialHasImageFindFirstArgs>(args?: SelectSubset<T, MaterialHasImageFindFirstArgs<ExtArgs>>): Prisma__MaterialHasImageClient<$Result.GetResult<Prisma.$MaterialHasImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaterialHasImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialHasImageFindFirstOrThrowArgs} args - Arguments to find a MaterialHasImage
     * @example
     * // Get one MaterialHasImage
     * const materialHasImage = await prisma.materialHasImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialHasImageFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialHasImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialHasImageClient<$Result.GetResult<Prisma.$MaterialHasImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaterialHasImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialHasImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaterialHasImages
     * const materialHasImages = await prisma.materialHasImage.findMany()
     * 
     * // Get first 10 MaterialHasImages
     * const materialHasImages = await prisma.materialHasImage.findMany({ take: 10 })
     * 
     * // Only select the `materialId`
     * const materialHasImageWithMaterialIdOnly = await prisma.materialHasImage.findMany({ select: { materialId: true } })
     * 
     */
    findMany<T extends MaterialHasImageFindManyArgs>(args?: SelectSubset<T, MaterialHasImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialHasImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MaterialHasImage.
     * @param {MaterialHasImageCreateArgs} args - Arguments to create a MaterialHasImage.
     * @example
     * // Create one MaterialHasImage
     * const MaterialHasImage = await prisma.materialHasImage.create({
     *   data: {
     *     // ... data to create a MaterialHasImage
     *   }
     * })
     * 
     */
    create<T extends MaterialHasImageCreateArgs>(args: SelectSubset<T, MaterialHasImageCreateArgs<ExtArgs>>): Prisma__MaterialHasImageClient<$Result.GetResult<Prisma.$MaterialHasImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MaterialHasImages.
     * @param {MaterialHasImageCreateManyArgs} args - Arguments to create many MaterialHasImages.
     * @example
     * // Create many MaterialHasImages
     * const materialHasImage = await prisma.materialHasImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialHasImageCreateManyArgs>(args?: SelectSubset<T, MaterialHasImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MaterialHasImage.
     * @param {MaterialHasImageDeleteArgs} args - Arguments to delete one MaterialHasImage.
     * @example
     * // Delete one MaterialHasImage
     * const MaterialHasImage = await prisma.materialHasImage.delete({
     *   where: {
     *     // ... filter to delete one MaterialHasImage
     *   }
     * })
     * 
     */
    delete<T extends MaterialHasImageDeleteArgs>(args: SelectSubset<T, MaterialHasImageDeleteArgs<ExtArgs>>): Prisma__MaterialHasImageClient<$Result.GetResult<Prisma.$MaterialHasImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MaterialHasImage.
     * @param {MaterialHasImageUpdateArgs} args - Arguments to update one MaterialHasImage.
     * @example
     * // Update one MaterialHasImage
     * const materialHasImage = await prisma.materialHasImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialHasImageUpdateArgs>(args: SelectSubset<T, MaterialHasImageUpdateArgs<ExtArgs>>): Prisma__MaterialHasImageClient<$Result.GetResult<Prisma.$MaterialHasImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MaterialHasImages.
     * @param {MaterialHasImageDeleteManyArgs} args - Arguments to filter MaterialHasImages to delete.
     * @example
     * // Delete a few MaterialHasImages
     * const { count } = await prisma.materialHasImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialHasImageDeleteManyArgs>(args?: SelectSubset<T, MaterialHasImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaterialHasImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialHasImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaterialHasImages
     * const materialHasImage = await prisma.materialHasImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialHasImageUpdateManyArgs>(args: SelectSubset<T, MaterialHasImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MaterialHasImage.
     * @param {MaterialHasImageUpsertArgs} args - Arguments to update or create a MaterialHasImage.
     * @example
     * // Update or create a MaterialHasImage
     * const materialHasImage = await prisma.materialHasImage.upsert({
     *   create: {
     *     // ... data to create a MaterialHasImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaterialHasImage we want to update
     *   }
     * })
     */
    upsert<T extends MaterialHasImageUpsertArgs>(args: SelectSubset<T, MaterialHasImageUpsertArgs<ExtArgs>>): Prisma__MaterialHasImageClient<$Result.GetResult<Prisma.$MaterialHasImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MaterialHasImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialHasImageCountArgs} args - Arguments to filter MaterialHasImages to count.
     * @example
     * // Count the number of MaterialHasImages
     * const count = await prisma.materialHasImage.count({
     *   where: {
     *     // ... the filter for the MaterialHasImages we want to count
     *   }
     * })
    **/
    count<T extends MaterialHasImageCountArgs>(
      args?: Subset<T, MaterialHasImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialHasImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaterialHasImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialHasImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialHasImageAggregateArgs>(args: Subset<T, MaterialHasImageAggregateArgs>): Prisma.PrismaPromise<GetMaterialHasImageAggregateType<T>>

    /**
     * Group by MaterialHasImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialHasImageGroupByArgs} args - Group by arguments.
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
      T extends MaterialHasImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialHasImageGroupByArgs['orderBy'] }
        : { orderBy?: MaterialHasImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaterialHasImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialHasImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaterialHasImage model
   */
  readonly fields: MaterialHasImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaterialHasImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialHasImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    material<T extends MaterialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MaterialDefaultArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    image<T extends ImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ImageDefaultArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MaterialHasImage model
   */
  interface MaterialHasImageFieldRefs {
    readonly materialId: FieldRef<"MaterialHasImage", 'Int'>
    readonly imageId: FieldRef<"MaterialHasImage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MaterialHasImage findUnique
   */
  export type MaterialHasImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialHasImage
     */
    select?: MaterialHasImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialHasImage
     */
    omit?: MaterialHasImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialHasImageInclude<ExtArgs> | null
    /**
     * Filter, which MaterialHasImage to fetch.
     */
    where: MaterialHasImageWhereUniqueInput
  }

  /**
   * MaterialHasImage findUniqueOrThrow
   */
  export type MaterialHasImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialHasImage
     */
    select?: MaterialHasImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialHasImage
     */
    omit?: MaterialHasImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialHasImageInclude<ExtArgs> | null
    /**
     * Filter, which MaterialHasImage to fetch.
     */
    where: MaterialHasImageWhereUniqueInput
  }

  /**
   * MaterialHasImage findFirst
   */
  export type MaterialHasImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialHasImage
     */
    select?: MaterialHasImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialHasImage
     */
    omit?: MaterialHasImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialHasImageInclude<ExtArgs> | null
    /**
     * Filter, which MaterialHasImage to fetch.
     */
    where?: MaterialHasImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialHasImages to fetch.
     */
    orderBy?: MaterialHasImageOrderByWithRelationInput | MaterialHasImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaterialHasImages.
     */
    cursor?: MaterialHasImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialHasImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialHasImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaterialHasImages.
     */
    distinct?: MaterialHasImageScalarFieldEnum | MaterialHasImageScalarFieldEnum[]
  }

  /**
   * MaterialHasImage findFirstOrThrow
   */
  export type MaterialHasImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialHasImage
     */
    select?: MaterialHasImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialHasImage
     */
    omit?: MaterialHasImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialHasImageInclude<ExtArgs> | null
    /**
     * Filter, which MaterialHasImage to fetch.
     */
    where?: MaterialHasImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialHasImages to fetch.
     */
    orderBy?: MaterialHasImageOrderByWithRelationInput | MaterialHasImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaterialHasImages.
     */
    cursor?: MaterialHasImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialHasImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialHasImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaterialHasImages.
     */
    distinct?: MaterialHasImageScalarFieldEnum | MaterialHasImageScalarFieldEnum[]
  }

  /**
   * MaterialHasImage findMany
   */
  export type MaterialHasImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialHasImage
     */
    select?: MaterialHasImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialHasImage
     */
    omit?: MaterialHasImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialHasImageInclude<ExtArgs> | null
    /**
     * Filter, which MaterialHasImages to fetch.
     */
    where?: MaterialHasImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaterialHasImages to fetch.
     */
    orderBy?: MaterialHasImageOrderByWithRelationInput | MaterialHasImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaterialHasImages.
     */
    cursor?: MaterialHasImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaterialHasImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaterialHasImages.
     */
    skip?: number
    distinct?: MaterialHasImageScalarFieldEnum | MaterialHasImageScalarFieldEnum[]
  }

  /**
   * MaterialHasImage create
   */
  export type MaterialHasImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialHasImage
     */
    select?: MaterialHasImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialHasImage
     */
    omit?: MaterialHasImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialHasImageInclude<ExtArgs> | null
    /**
     * The data needed to create a MaterialHasImage.
     */
    data: XOR<MaterialHasImageCreateInput, MaterialHasImageUncheckedCreateInput>
  }

  /**
   * MaterialHasImage createMany
   */
  export type MaterialHasImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaterialHasImages.
     */
    data: MaterialHasImageCreateManyInput | MaterialHasImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaterialHasImage update
   */
  export type MaterialHasImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialHasImage
     */
    select?: MaterialHasImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialHasImage
     */
    omit?: MaterialHasImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialHasImageInclude<ExtArgs> | null
    /**
     * The data needed to update a MaterialHasImage.
     */
    data: XOR<MaterialHasImageUpdateInput, MaterialHasImageUncheckedUpdateInput>
    /**
     * Choose, which MaterialHasImage to update.
     */
    where: MaterialHasImageWhereUniqueInput
  }

  /**
   * MaterialHasImage updateMany
   */
  export type MaterialHasImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaterialHasImages.
     */
    data: XOR<MaterialHasImageUpdateManyMutationInput, MaterialHasImageUncheckedUpdateManyInput>
    /**
     * Filter which MaterialHasImages to update
     */
    where?: MaterialHasImageWhereInput
    /**
     * Limit how many MaterialHasImages to update.
     */
    limit?: number
  }

  /**
   * MaterialHasImage upsert
   */
  export type MaterialHasImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialHasImage
     */
    select?: MaterialHasImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialHasImage
     */
    omit?: MaterialHasImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialHasImageInclude<ExtArgs> | null
    /**
     * The filter to search for the MaterialHasImage to update in case it exists.
     */
    where: MaterialHasImageWhereUniqueInput
    /**
     * In case the MaterialHasImage found by the `where` argument doesn't exist, create a new MaterialHasImage with this data.
     */
    create: XOR<MaterialHasImageCreateInput, MaterialHasImageUncheckedCreateInput>
    /**
     * In case the MaterialHasImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialHasImageUpdateInput, MaterialHasImageUncheckedUpdateInput>
  }

  /**
   * MaterialHasImage delete
   */
  export type MaterialHasImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialHasImage
     */
    select?: MaterialHasImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialHasImage
     */
    omit?: MaterialHasImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialHasImageInclude<ExtArgs> | null
    /**
     * Filter which MaterialHasImage to delete.
     */
    where: MaterialHasImageWhereUniqueInput
  }

  /**
   * MaterialHasImage deleteMany
   */
  export type MaterialHasImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaterialHasImages to delete
     */
    where?: MaterialHasImageWhereInput
    /**
     * Limit how many MaterialHasImages to delete.
     */
    limit?: number
  }

  /**
   * MaterialHasImage without action
   */
  export type MaterialHasImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialHasImage
     */
    select?: MaterialHasImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaterialHasImage
     */
    omit?: MaterialHasImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialHasImageInclude<ExtArgs> | null
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


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    password: 'password',
    role: 'role',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    image: 'image',
    name: 'name',
    created_at: 'created_at'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    imageId: 'imageId'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const AlternativeScalarFieldEnum: {
    id: 'id',
    content: 'content',
    is_correct: 'is_correct',
    questionsId: 'questionsId'
  };

  export type AlternativeScalarFieldEnum = (typeof AlternativeScalarFieldEnum)[keyof typeof AlternativeScalarFieldEnum]


  export const MaterialScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    created_at: 'created_at'
  };

  export type MaterialScalarFieldEnum = (typeof MaterialScalarFieldEnum)[keyof typeof MaterialScalarFieldEnum]


  export const PresetScalarFieldEnum: {
    id: 'id',
    content: 'content',
    created_at: 'created_at',
    userId: 'userId'
  };

  export type PresetScalarFieldEnum = (typeof PresetScalarFieldEnum)[keyof typeof PresetScalarFieldEnum]


  export const UserQuestionScalarFieldEnum: {
    id: 'id',
    completed: 'completed',
    userId: 'userId',
    questionsId: 'questionsId'
  };

  export type UserQuestionScalarFieldEnum = (typeof UserQuestionScalarFieldEnum)[keyof typeof UserQuestionScalarFieldEnum]


  export const UserMaterialScalarFieldEnum: {
    id: 'id',
    completed: 'completed',
    userId: 'userId',
    materialsId: 'materialsId'
  };

  export type UserMaterialScalarFieldEnum = (typeof UserMaterialScalarFieldEnum)[keyof typeof UserMaterialScalarFieldEnum]


  export const QuestionHasMaterialScalarFieldEnum: {
    questionId: 'questionId',
    materialId: 'materialId'
  };

  export type QuestionHasMaterialScalarFieldEnum = (typeof QuestionHasMaterialScalarFieldEnum)[keyof typeof QuestionHasMaterialScalarFieldEnum]


  export const MaterialHasImageScalarFieldEnum: {
    materialId: 'materialId',
    imageId: 'imageId'
  };

  export type MaterialHasImageScalarFieldEnum = (typeof MaterialHasImageScalarFieldEnum)[keyof typeof MaterialHasImageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AccountOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountOrderByRelevanceFieldEnum = (typeof AccountOrderByRelevanceFieldEnum)[keyof typeof AccountOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    image: 'image'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const VerificationTokenOrderByRelevanceFieldEnum: {
    identifier: 'identifier',
    token: 'token'
  };

  export type VerificationTokenOrderByRelevanceFieldEnum = (typeof VerificationTokenOrderByRelevanceFieldEnum)[keyof typeof VerificationTokenOrderByRelevanceFieldEnum]


  export const ImageOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type ImageOrderByRelevanceFieldEnum = (typeof ImageOrderByRelevanceFieldEnum)[keyof typeof ImageOrderByRelevanceFieldEnum]


  export const QuestionOrderByRelevanceFieldEnum: {
    title: 'title',
    content: 'content'
  };

  export type QuestionOrderByRelevanceFieldEnum = (typeof QuestionOrderByRelevanceFieldEnum)[keyof typeof QuestionOrderByRelevanceFieldEnum]


  export const AlternativeOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type AlternativeOrderByRelevanceFieldEnum = (typeof AlternativeOrderByRelevanceFieldEnum)[keyof typeof AlternativeOrderByRelevanceFieldEnum]


  export const MaterialOrderByRelevanceFieldEnum: {
    title: 'title',
    content: 'content'
  };

  export type MaterialOrderByRelevanceFieldEnum = (typeof MaterialOrderByRelevanceFieldEnum)[keyof typeof MaterialOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const PresetOrderByRelevanceFieldEnum: {
    userId: 'userId'
  };

  export type PresetOrderByRelevanceFieldEnum = (typeof PresetOrderByRelevanceFieldEnum)[keyof typeof PresetOrderByRelevanceFieldEnum]


  export const UserQuestionOrderByRelevanceFieldEnum: {
    userId: 'userId'
  };

  export type UserQuestionOrderByRelevanceFieldEnum = (typeof UserQuestionOrderByRelevanceFieldEnum)[keyof typeof UserQuestionOrderByRelevanceFieldEnum]


  export const UserMaterialOrderByRelevanceFieldEnum: {
    userId: 'userId'
  };

  export type UserMaterialOrderByRelevanceFieldEnum = (typeof UserMaterialOrderByRelevanceFieldEnum)[keyof typeof UserMaterialOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: AccountOrderByRelevanceInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    userQuestions?: UserQuestionListRelationFilter
    userMaterials?: UserMaterialListRelationFilter
    presets?: PresetListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    image?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    userQuestions?: UserQuestionOrderByRelationAggregateInput
    userMaterials?: UserMaterialOrderByRelationAggregateInput
    presets?: PresetOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    image?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    userQuestions?: UserQuestionListRelationFilter
    userMaterials?: UserMaterialListRelationFilter
    presets?: PresetListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    image?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _relevance?: VerificationTokenOrderByRelevanceInput
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: IntFilter<"Image"> | number
    image?: BytesFilter<"Image"> | Uint8Array
    name?: StringFilter<"Image"> | string
    created_at?: DateTimeFilter<"Image"> | Date | string
    questions?: QuestionListRelationFilter
    materials?: MaterialHasImageListRelationFilter
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    questions?: QuestionOrderByRelationAggregateInput
    materials?: MaterialHasImageOrderByRelationAggregateInput
    _relevance?: ImageOrderByRelevanceInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    image?: BytesFilter<"Image"> | Uint8Array
    name?: StringFilter<"Image"> | string
    created_at?: DateTimeFilter<"Image"> | Date | string
    questions?: QuestionListRelationFilter
    materials?: MaterialHasImageListRelationFilter
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Image"> | number
    image?: BytesWithAggregatesFilter<"Image"> | Uint8Array
    name?: StringWithAggregatesFilter<"Image"> | string
    created_at?: DateTimeWithAggregatesFilter<"Image"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: IntFilter<"Question"> | number
    title?: StringFilter<"Question"> | string
    content?: StringFilter<"Question"> | string
    imageId?: IntNullableFilter<"Question"> | number | null
    image?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
    alternatives?: AlternativeListRelationFilter
    userQuestions?: UserQuestionListRelationFilter
    questionMaterials?: QuestionHasMaterialListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageId?: SortOrderInput | SortOrder
    image?: ImageOrderByWithRelationInput
    alternatives?: AlternativeOrderByRelationAggregateInput
    userQuestions?: UserQuestionOrderByRelationAggregateInput
    questionMaterials?: QuestionHasMaterialOrderByRelationAggregateInput
    _relevance?: QuestionOrderByRelevanceInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    title?: StringFilter<"Question"> | string
    content?: StringFilter<"Question"> | string
    imageId?: IntNullableFilter<"Question"> | number | null
    image?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
    alternatives?: AlternativeListRelationFilter
    userQuestions?: UserQuestionListRelationFilter
    questionMaterials?: QuestionHasMaterialListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageId?: SortOrderInput | SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Question"> | number
    title?: StringWithAggregatesFilter<"Question"> | string
    content?: StringWithAggregatesFilter<"Question"> | string
    imageId?: IntNullableWithAggregatesFilter<"Question"> | number | null
  }

  export type AlternativeWhereInput = {
    AND?: AlternativeWhereInput | AlternativeWhereInput[]
    OR?: AlternativeWhereInput[]
    NOT?: AlternativeWhereInput | AlternativeWhereInput[]
    id?: IntFilter<"Alternative"> | number
    content?: StringFilter<"Alternative"> | string
    is_correct?: BoolFilter<"Alternative"> | boolean
    questionsId?: IntFilter<"Alternative"> | number
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type AlternativeOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    is_correct?: SortOrder
    questionsId?: SortOrder
    question?: QuestionOrderByWithRelationInput
    _relevance?: AlternativeOrderByRelevanceInput
  }

  export type AlternativeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlternativeWhereInput | AlternativeWhereInput[]
    OR?: AlternativeWhereInput[]
    NOT?: AlternativeWhereInput | AlternativeWhereInput[]
    content?: StringFilter<"Alternative"> | string
    is_correct?: BoolFilter<"Alternative"> | boolean
    questionsId?: IntFilter<"Alternative"> | number
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id">

  export type AlternativeOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    is_correct?: SortOrder
    questionsId?: SortOrder
    _count?: AlternativeCountOrderByAggregateInput
    _avg?: AlternativeAvgOrderByAggregateInput
    _max?: AlternativeMaxOrderByAggregateInput
    _min?: AlternativeMinOrderByAggregateInput
    _sum?: AlternativeSumOrderByAggregateInput
  }

  export type AlternativeScalarWhereWithAggregatesInput = {
    AND?: AlternativeScalarWhereWithAggregatesInput | AlternativeScalarWhereWithAggregatesInput[]
    OR?: AlternativeScalarWhereWithAggregatesInput[]
    NOT?: AlternativeScalarWhereWithAggregatesInput | AlternativeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Alternative"> | number
    content?: StringWithAggregatesFilter<"Alternative"> | string
    is_correct?: BoolWithAggregatesFilter<"Alternative"> | boolean
    questionsId?: IntWithAggregatesFilter<"Alternative"> | number
  }

  export type MaterialWhereInput = {
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    id?: IntFilter<"Material"> | number
    title?: StringFilter<"Material"> | string
    content?: StringFilter<"Material"> | string
    created_at?: DateTimeFilter<"Material"> | Date | string
    userMaterials?: UserMaterialListRelationFilter
    questionMaterials?: QuestionHasMaterialListRelationFilter
    materialImages?: MaterialHasImageListRelationFilter
  }

  export type MaterialOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    userMaterials?: UserMaterialOrderByRelationAggregateInput
    questionMaterials?: QuestionHasMaterialOrderByRelationAggregateInput
    materialImages?: MaterialHasImageOrderByRelationAggregateInput
    _relevance?: MaterialOrderByRelevanceInput
  }

  export type MaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    title?: StringFilter<"Material"> | string
    content?: StringFilter<"Material"> | string
    created_at?: DateTimeFilter<"Material"> | Date | string
    userMaterials?: UserMaterialListRelationFilter
    questionMaterials?: QuestionHasMaterialListRelationFilter
    materialImages?: MaterialHasImageListRelationFilter
  }, "id">

  export type MaterialOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    _count?: MaterialCountOrderByAggregateInput
    _avg?: MaterialAvgOrderByAggregateInput
    _max?: MaterialMaxOrderByAggregateInput
    _min?: MaterialMinOrderByAggregateInput
    _sum?: MaterialSumOrderByAggregateInput
  }

  export type MaterialScalarWhereWithAggregatesInput = {
    AND?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    OR?: MaterialScalarWhereWithAggregatesInput[]
    NOT?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Material"> | number
    title?: StringWithAggregatesFilter<"Material"> | string
    content?: StringWithAggregatesFilter<"Material"> | string
    created_at?: DateTimeWithAggregatesFilter<"Material"> | Date | string
  }

  export type PresetWhereInput = {
    AND?: PresetWhereInput | PresetWhereInput[]
    OR?: PresetWhereInput[]
    NOT?: PresetWhereInput | PresetWhereInput[]
    id?: IntFilter<"Preset"> | number
    content?: JsonFilter<"Preset">
    created_at?: DateTimeFilter<"Preset"> | Date | string
    userId?: StringFilter<"Preset"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PresetOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: PresetOrderByRelevanceInput
  }

  export type PresetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PresetWhereInput | PresetWhereInput[]
    OR?: PresetWhereInput[]
    NOT?: PresetWhereInput | PresetWhereInput[]
    content?: JsonFilter<"Preset">
    created_at?: DateTimeFilter<"Preset"> | Date | string
    userId?: StringFilter<"Preset"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PresetOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    userId?: SortOrder
    _count?: PresetCountOrderByAggregateInput
    _avg?: PresetAvgOrderByAggregateInput
    _max?: PresetMaxOrderByAggregateInput
    _min?: PresetMinOrderByAggregateInput
    _sum?: PresetSumOrderByAggregateInput
  }

  export type PresetScalarWhereWithAggregatesInput = {
    AND?: PresetScalarWhereWithAggregatesInput | PresetScalarWhereWithAggregatesInput[]
    OR?: PresetScalarWhereWithAggregatesInput[]
    NOT?: PresetScalarWhereWithAggregatesInput | PresetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Preset"> | number
    content?: JsonWithAggregatesFilter<"Preset">
    created_at?: DateTimeWithAggregatesFilter<"Preset"> | Date | string
    userId?: StringWithAggregatesFilter<"Preset"> | string
  }

  export type UserQuestionWhereInput = {
    AND?: UserQuestionWhereInput | UserQuestionWhereInput[]
    OR?: UserQuestionWhereInput[]
    NOT?: UserQuestionWhereInput | UserQuestionWhereInput[]
    id?: IntFilter<"UserQuestion"> | number
    completed?: BoolFilter<"UserQuestion"> | boolean
    userId?: StringFilter<"UserQuestion"> | string
    questionsId?: IntFilter<"UserQuestion"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }

  export type UserQuestionOrderByWithRelationInput = {
    id?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
    questionsId?: SortOrder
    user?: UserOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
    _relevance?: UserQuestionOrderByRelevanceInput
  }

  export type UserQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserQuestionWhereInput | UserQuestionWhereInput[]
    OR?: UserQuestionWhereInput[]
    NOT?: UserQuestionWhereInput | UserQuestionWhereInput[]
    completed?: BoolFilter<"UserQuestion"> | boolean
    userId?: StringFilter<"UserQuestion"> | string
    questionsId?: IntFilter<"UserQuestion"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
  }, "id">

  export type UserQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
    questionsId?: SortOrder
    _count?: UserQuestionCountOrderByAggregateInput
    _avg?: UserQuestionAvgOrderByAggregateInput
    _max?: UserQuestionMaxOrderByAggregateInput
    _min?: UserQuestionMinOrderByAggregateInput
    _sum?: UserQuestionSumOrderByAggregateInput
  }

  export type UserQuestionScalarWhereWithAggregatesInput = {
    AND?: UserQuestionScalarWhereWithAggregatesInput | UserQuestionScalarWhereWithAggregatesInput[]
    OR?: UserQuestionScalarWhereWithAggregatesInput[]
    NOT?: UserQuestionScalarWhereWithAggregatesInput | UserQuestionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserQuestion"> | number
    completed?: BoolWithAggregatesFilter<"UserQuestion"> | boolean
    userId?: StringWithAggregatesFilter<"UserQuestion"> | string
    questionsId?: IntWithAggregatesFilter<"UserQuestion"> | number
  }

  export type UserMaterialWhereInput = {
    AND?: UserMaterialWhereInput | UserMaterialWhereInput[]
    OR?: UserMaterialWhereInput[]
    NOT?: UserMaterialWhereInput | UserMaterialWhereInput[]
    id?: IntFilter<"UserMaterial"> | number
    completed?: BoolFilter<"UserMaterial"> | boolean
    userId?: StringFilter<"UserMaterial"> | string
    materialsId?: IntFilter<"UserMaterial"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
  }

  export type UserMaterialOrderByWithRelationInput = {
    id?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
    materialsId?: SortOrder
    user?: UserOrderByWithRelationInput
    material?: MaterialOrderByWithRelationInput
    _relevance?: UserMaterialOrderByRelevanceInput
  }

  export type UserMaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserMaterialWhereInput | UserMaterialWhereInput[]
    OR?: UserMaterialWhereInput[]
    NOT?: UserMaterialWhereInput | UserMaterialWhereInput[]
    completed?: BoolFilter<"UserMaterial"> | boolean
    userId?: StringFilter<"UserMaterial"> | string
    materialsId?: IntFilter<"UserMaterial"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
  }, "id">

  export type UserMaterialOrderByWithAggregationInput = {
    id?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
    materialsId?: SortOrder
    _count?: UserMaterialCountOrderByAggregateInput
    _avg?: UserMaterialAvgOrderByAggregateInput
    _max?: UserMaterialMaxOrderByAggregateInput
    _min?: UserMaterialMinOrderByAggregateInput
    _sum?: UserMaterialSumOrderByAggregateInput
  }

  export type UserMaterialScalarWhereWithAggregatesInput = {
    AND?: UserMaterialScalarWhereWithAggregatesInput | UserMaterialScalarWhereWithAggregatesInput[]
    OR?: UserMaterialScalarWhereWithAggregatesInput[]
    NOT?: UserMaterialScalarWhereWithAggregatesInput | UserMaterialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserMaterial"> | number
    completed?: BoolWithAggregatesFilter<"UserMaterial"> | boolean
    userId?: StringWithAggregatesFilter<"UserMaterial"> | string
    materialsId?: IntWithAggregatesFilter<"UserMaterial"> | number
  }

  export type QuestionHasMaterialWhereInput = {
    AND?: QuestionHasMaterialWhereInput | QuestionHasMaterialWhereInput[]
    OR?: QuestionHasMaterialWhereInput[]
    NOT?: QuestionHasMaterialWhereInput | QuestionHasMaterialWhereInput[]
    questionId?: IntFilter<"QuestionHasMaterial"> | number
    materialId?: IntFilter<"QuestionHasMaterial"> | number
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
  }

  export type QuestionHasMaterialOrderByWithRelationInput = {
    questionId?: SortOrder
    materialId?: SortOrder
    question?: QuestionOrderByWithRelationInput
    material?: MaterialOrderByWithRelationInput
  }

  export type QuestionHasMaterialWhereUniqueInput = Prisma.AtLeast<{
    questionId_materialId?: QuestionHasMaterialQuestionIdMaterialIdCompoundUniqueInput
    AND?: QuestionHasMaterialWhereInput | QuestionHasMaterialWhereInput[]
    OR?: QuestionHasMaterialWhereInput[]
    NOT?: QuestionHasMaterialWhereInput | QuestionHasMaterialWhereInput[]
    questionId?: IntFilter<"QuestionHasMaterial"> | number
    materialId?: IntFilter<"QuestionHasMaterial"> | number
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
  }, "questionId_materialId">

  export type QuestionHasMaterialOrderByWithAggregationInput = {
    questionId?: SortOrder
    materialId?: SortOrder
    _count?: QuestionHasMaterialCountOrderByAggregateInput
    _avg?: QuestionHasMaterialAvgOrderByAggregateInput
    _max?: QuestionHasMaterialMaxOrderByAggregateInput
    _min?: QuestionHasMaterialMinOrderByAggregateInput
    _sum?: QuestionHasMaterialSumOrderByAggregateInput
  }

  export type QuestionHasMaterialScalarWhereWithAggregatesInput = {
    AND?: QuestionHasMaterialScalarWhereWithAggregatesInput | QuestionHasMaterialScalarWhereWithAggregatesInput[]
    OR?: QuestionHasMaterialScalarWhereWithAggregatesInput[]
    NOT?: QuestionHasMaterialScalarWhereWithAggregatesInput | QuestionHasMaterialScalarWhereWithAggregatesInput[]
    questionId?: IntWithAggregatesFilter<"QuestionHasMaterial"> | number
    materialId?: IntWithAggregatesFilter<"QuestionHasMaterial"> | number
  }

  export type MaterialHasImageWhereInput = {
    AND?: MaterialHasImageWhereInput | MaterialHasImageWhereInput[]
    OR?: MaterialHasImageWhereInput[]
    NOT?: MaterialHasImageWhereInput | MaterialHasImageWhereInput[]
    materialId?: IntFilter<"MaterialHasImage"> | number
    imageId?: IntFilter<"MaterialHasImage"> | number
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
  }

  export type MaterialHasImageOrderByWithRelationInput = {
    materialId?: SortOrder
    imageId?: SortOrder
    material?: MaterialOrderByWithRelationInput
    image?: ImageOrderByWithRelationInput
  }

  export type MaterialHasImageWhereUniqueInput = Prisma.AtLeast<{
    materialId_imageId?: MaterialHasImageMaterialIdImageIdCompoundUniqueInput
    AND?: MaterialHasImageWhereInput | MaterialHasImageWhereInput[]
    OR?: MaterialHasImageWhereInput[]
    NOT?: MaterialHasImageWhereInput | MaterialHasImageWhereInput[]
    materialId?: IntFilter<"MaterialHasImage"> | number
    imageId?: IntFilter<"MaterialHasImage"> | number
    material?: XOR<MaterialScalarRelationFilter, MaterialWhereInput>
    image?: XOR<ImageScalarRelationFilter, ImageWhereInput>
  }, "materialId_imageId">

  export type MaterialHasImageOrderByWithAggregationInput = {
    materialId?: SortOrder
    imageId?: SortOrder
    _count?: MaterialHasImageCountOrderByAggregateInput
    _avg?: MaterialHasImageAvgOrderByAggregateInput
    _max?: MaterialHasImageMaxOrderByAggregateInput
    _min?: MaterialHasImageMinOrderByAggregateInput
    _sum?: MaterialHasImageSumOrderByAggregateInput
  }

  export type MaterialHasImageScalarWhereWithAggregatesInput = {
    AND?: MaterialHasImageScalarWhereWithAggregatesInput | MaterialHasImageScalarWhereWithAggregatesInput[]
    OR?: MaterialHasImageScalarWhereWithAggregatesInput[]
    NOT?: MaterialHasImageScalarWhereWithAggregatesInput | MaterialHasImageScalarWhereWithAggregatesInput[]
    materialId?: IntWithAggregatesFilter<"MaterialHasImage"> | number
    imageId?: IntWithAggregatesFilter<"MaterialHasImage"> | number
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    role?: $Enums.Role
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    userQuestions?: UserQuestionCreateNestedManyWithoutUserInput
    userMaterials?: UserMaterialCreateNestedManyWithoutUserInput
    presets?: PresetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    role?: $Enums.Role
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    userQuestions?: UserQuestionUncheckedCreateNestedManyWithoutUserInput
    userMaterials?: UserMaterialUncheckedCreateNestedManyWithoutUserInput
    presets?: PresetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    userQuestions?: UserQuestionUpdateManyWithoutUserNestedInput
    userMaterials?: UserMaterialUpdateManyWithoutUserNestedInput
    presets?: PresetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    userQuestions?: UserQuestionUncheckedUpdateManyWithoutUserNestedInput
    userMaterials?: UserMaterialUncheckedUpdateManyWithoutUserNestedInput
    presets?: PresetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    role?: $Enums.Role
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    image: Uint8Array
    name: string
    created_at: Date | string
    questions?: QuestionCreateNestedManyWithoutImageInput
    materials?: MaterialHasImageCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateInput = {
    id?: number
    image: Uint8Array
    name: string
    created_at: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutImageInput
    materials?: MaterialHasImageUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageUpdateInput = {
    image?: BytesFieldUpdateOperationsInput | Uint8Array
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutImageNestedInput
    materials?: MaterialHasImageUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: BytesFieldUpdateOperationsInput | Uint8Array
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutImageNestedInput
    materials?: MaterialHasImageUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImageCreateManyInput = {
    id?: number
    image: Uint8Array
    name: string
    created_at: Date | string
  }

  export type ImageUpdateManyMutationInput = {
    image?: BytesFieldUpdateOperationsInput | Uint8Array
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: BytesFieldUpdateOperationsInput | Uint8Array
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    title?: string
    content: string
    image?: ImageCreateNestedOneWithoutQuestionsInput
    alternatives?: AlternativeCreateNestedManyWithoutQuestionInput
    userQuestions?: UserQuestionCreateNestedManyWithoutQuestionInput
    questionMaterials?: QuestionHasMaterialCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: number
    title?: string
    content: string
    imageId?: number | null
    alternatives?: AlternativeUncheckedCreateNestedManyWithoutQuestionInput
    userQuestions?: UserQuestionUncheckedCreateNestedManyWithoutQuestionInput
    questionMaterials?: QuestionHasMaterialUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: ImageUpdateOneWithoutQuestionsNestedInput
    alternatives?: AlternativeUpdateManyWithoutQuestionNestedInput
    userQuestions?: UserQuestionUpdateManyWithoutQuestionNestedInput
    questionMaterials?: QuestionHasMaterialUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    alternatives?: AlternativeUncheckedUpdateManyWithoutQuestionNestedInput
    userQuestions?: UserQuestionUncheckedUpdateManyWithoutQuestionNestedInput
    questionMaterials?: QuestionHasMaterialUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: number
    title?: string
    content: string
    imageId?: number | null
  }

  export type QuestionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AlternativeCreateInput = {
    content: string
    is_correct: boolean
    question: QuestionCreateNestedOneWithoutAlternativesInput
  }

  export type AlternativeUncheckedCreateInput = {
    id?: number
    content: string
    is_correct: boolean
    questionsId: number
  }

  export type AlternativeUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    question?: QuestionUpdateOneRequiredWithoutAlternativesNestedInput
  }

  export type AlternativeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    questionsId?: IntFieldUpdateOperationsInput | number
  }

  export type AlternativeCreateManyInput = {
    id?: number
    content: string
    is_correct: boolean
    questionsId: number
  }

  export type AlternativeUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AlternativeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    questionsId?: IntFieldUpdateOperationsInput | number
  }

  export type MaterialCreateInput = {
    title?: string
    content: string
    created_at: Date | string
    userMaterials?: UserMaterialCreateNestedManyWithoutMaterialInput
    questionMaterials?: QuestionHasMaterialCreateNestedManyWithoutMaterialInput
    materialImages?: MaterialHasImageCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateInput = {
    id?: number
    title?: string
    content: string
    created_at: Date | string
    userMaterials?: UserMaterialUncheckedCreateNestedManyWithoutMaterialInput
    questionMaterials?: QuestionHasMaterialUncheckedCreateNestedManyWithoutMaterialInput
    materialImages?: MaterialHasImageUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userMaterials?: UserMaterialUpdateManyWithoutMaterialNestedInput
    questionMaterials?: QuestionHasMaterialUpdateManyWithoutMaterialNestedInput
    materialImages?: MaterialHasImageUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userMaterials?: UserMaterialUncheckedUpdateManyWithoutMaterialNestedInput
    questionMaterials?: QuestionHasMaterialUncheckedUpdateManyWithoutMaterialNestedInput
    materialImages?: MaterialHasImageUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialCreateManyInput = {
    id?: number
    title?: string
    content: string
    created_at: Date | string
  }

  export type MaterialUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresetCreateInput = {
    content: JsonNullValueInput | InputJsonValue
    created_at: Date | string
    user: UserCreateNestedOneWithoutPresetsInput
  }

  export type PresetUncheckedCreateInput = {
    id?: number
    content: JsonNullValueInput | InputJsonValue
    created_at: Date | string
    userId: string
  }

  export type PresetUpdateInput = {
    content?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPresetsNestedInput
  }

  export type PresetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PresetCreateManyInput = {
    id?: number
    content: JsonNullValueInput | InputJsonValue
    created_at: Date | string
    userId: string
  }

  export type PresetUpdateManyMutationInput = {
    content?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserQuestionCreateInput = {
    completed: boolean
    user: UserCreateNestedOneWithoutUserQuestionsInput
    question: QuestionCreateNestedOneWithoutUserQuestionsInput
  }

  export type UserQuestionUncheckedCreateInput = {
    id?: number
    completed: boolean
    userId: string
    questionsId: number
  }

  export type UserQuestionUpdateInput = {
    completed?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUserQuestionsNestedInput
    question?: QuestionUpdateOneRequiredWithoutUserQuestionsNestedInput
  }

  export type UserQuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    questionsId?: IntFieldUpdateOperationsInput | number
  }

  export type UserQuestionCreateManyInput = {
    id?: number
    completed: boolean
    userId: string
    questionsId: number
  }

  export type UserQuestionUpdateManyMutationInput = {
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserQuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    questionsId?: IntFieldUpdateOperationsInput | number
  }

  export type UserMaterialCreateInput = {
    completed: boolean
    user: UserCreateNestedOneWithoutUserMaterialsInput
    material: MaterialCreateNestedOneWithoutUserMaterialsInput
  }

  export type UserMaterialUncheckedCreateInput = {
    id?: number
    completed: boolean
    userId: string
    materialsId: number
  }

  export type UserMaterialUpdateInput = {
    completed?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUserMaterialsNestedInput
    material?: MaterialUpdateOneRequiredWithoutUserMaterialsNestedInput
  }

  export type UserMaterialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    materialsId?: IntFieldUpdateOperationsInput | number
  }

  export type UserMaterialCreateManyInput = {
    id?: number
    completed: boolean
    userId: string
    materialsId: number
  }

  export type UserMaterialUpdateManyMutationInput = {
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserMaterialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    materialsId?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionHasMaterialCreateInput = {
    question: QuestionCreateNestedOneWithoutQuestionMaterialsInput
    material: MaterialCreateNestedOneWithoutQuestionMaterialsInput
  }

  export type QuestionHasMaterialUncheckedCreateInput = {
    questionId: number
    materialId: number
  }

  export type QuestionHasMaterialUpdateInput = {
    question?: QuestionUpdateOneRequiredWithoutQuestionMaterialsNestedInput
    material?: MaterialUpdateOneRequiredWithoutQuestionMaterialsNestedInput
  }

  export type QuestionHasMaterialUncheckedUpdateInput = {
    questionId?: IntFieldUpdateOperationsInput | number
    materialId?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionHasMaterialCreateManyInput = {
    questionId: number
    materialId: number
  }

  export type QuestionHasMaterialUpdateManyMutationInput = {

  }

  export type QuestionHasMaterialUncheckedUpdateManyInput = {
    questionId?: IntFieldUpdateOperationsInput | number
    materialId?: IntFieldUpdateOperationsInput | number
  }

  export type MaterialHasImageCreateInput = {
    material: MaterialCreateNestedOneWithoutMaterialImagesInput
    image: ImageCreateNestedOneWithoutMaterialsInput
  }

  export type MaterialHasImageUncheckedCreateInput = {
    materialId: number
    imageId: number
  }

  export type MaterialHasImageUpdateInput = {
    material?: MaterialUpdateOneRequiredWithoutMaterialImagesNestedInput
    image?: ImageUpdateOneRequiredWithoutMaterialsNestedInput
  }

  export type MaterialHasImageUncheckedUpdateInput = {
    materialId?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
  }

  export type MaterialHasImageCreateManyInput = {
    materialId: number
    imageId: number
  }

  export type MaterialHasImageUpdateManyMutationInput = {

  }

  export type MaterialHasImageUncheckedUpdateManyInput = {
    materialId?: IntFieldUpdateOperationsInput | number
    imageId?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelevanceInput = {
    fields: AccountOrderByRelevanceFieldEnum | AccountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type UserQuestionListRelationFilter = {
    every?: UserQuestionWhereInput
    some?: UserQuestionWhereInput
    none?: UserQuestionWhereInput
  }

  export type UserMaterialListRelationFilter = {
    every?: UserMaterialWhereInput
    some?: UserMaterialWhereInput
    none?: UserMaterialWhereInput
  }

  export type PresetListRelationFilter = {
    every?: PresetWhereInput
    some?: PresetWhereInput
    none?: PresetWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserMaterialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PresetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    role?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    role?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    role?: SortOrder
    image?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VerificationTokenOrderByRelevanceInput = {
    fields: VerificationTokenOrderByRelevanceFieldEnum | VerificationTokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[]
    notIn?: Uint8Array[]
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type MaterialHasImageListRelationFilter = {
    every?: MaterialHasImageWhereInput
    some?: MaterialHasImageWhereInput
    none?: MaterialHasImageWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaterialHasImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImageOrderByRelevanceInput = {
    fields: ImageOrderByRelevanceFieldEnum | ImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[]
    notIn?: Uint8Array[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type ImageNullableScalarRelationFilter = {
    is?: ImageWhereInput | null
    isNot?: ImageWhereInput | null
  }

  export type AlternativeListRelationFilter = {
    every?: AlternativeWhereInput
    some?: AlternativeWhereInput
    none?: AlternativeWhereInput
  }

  export type QuestionHasMaterialListRelationFilter = {
    every?: QuestionHasMaterialWhereInput
    some?: QuestionHasMaterialWhereInput
    none?: QuestionHasMaterialWhereInput
  }

  export type AlternativeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionHasMaterialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionOrderByRelevanceInput = {
    fields: QuestionOrderByRelevanceFieldEnum | QuestionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageId?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageId?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageId?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    id?: SortOrder
    imageId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type AlternativeOrderByRelevanceInput = {
    fields: AlternativeOrderByRelevanceFieldEnum | AlternativeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AlternativeCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    is_correct?: SortOrder
    questionsId?: SortOrder
  }

  export type AlternativeAvgOrderByAggregateInput = {
    id?: SortOrder
    questionsId?: SortOrder
  }

  export type AlternativeMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    is_correct?: SortOrder
    questionsId?: SortOrder
  }

  export type AlternativeMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    is_correct?: SortOrder
    questionsId?: SortOrder
  }

  export type AlternativeSumOrderByAggregateInput = {
    id?: SortOrder
    questionsId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MaterialOrderByRelevanceInput = {
    fields: MaterialOrderByRelevanceFieldEnum | MaterialOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MaterialCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type MaterialAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type MaterialMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
  }

  export type MaterialSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PresetOrderByRelevanceInput = {
    fields: PresetOrderByRelevanceFieldEnum | PresetOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PresetCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    userId?: SortOrder
  }

  export type PresetAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PresetMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    userId?: SortOrder
  }

  export type PresetMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    userId?: SortOrder
  }

  export type PresetSumOrderByAggregateInput = {
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
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type UserQuestionOrderByRelevanceInput = {
    fields: UserQuestionOrderByRelevanceFieldEnum | UserQuestionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
    questionsId?: SortOrder
  }

  export type UserQuestionAvgOrderByAggregateInput = {
    id?: SortOrder
    questionsId?: SortOrder
  }

  export type UserQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
    questionsId?: SortOrder
  }

  export type UserQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
    questionsId?: SortOrder
  }

  export type UserQuestionSumOrderByAggregateInput = {
    id?: SortOrder
    questionsId?: SortOrder
  }

  export type MaterialScalarRelationFilter = {
    is?: MaterialWhereInput
    isNot?: MaterialWhereInput
  }

  export type UserMaterialOrderByRelevanceInput = {
    fields: UserMaterialOrderByRelevanceFieldEnum | UserMaterialOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserMaterialCountOrderByAggregateInput = {
    id?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
    materialsId?: SortOrder
  }

  export type UserMaterialAvgOrderByAggregateInput = {
    id?: SortOrder
    materialsId?: SortOrder
  }

  export type UserMaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
    materialsId?: SortOrder
  }

  export type UserMaterialMinOrderByAggregateInput = {
    id?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
    materialsId?: SortOrder
  }

  export type UserMaterialSumOrderByAggregateInput = {
    id?: SortOrder
    materialsId?: SortOrder
  }

  export type QuestionHasMaterialQuestionIdMaterialIdCompoundUniqueInput = {
    questionId: number
    materialId: number
  }

  export type QuestionHasMaterialCountOrderByAggregateInput = {
    questionId?: SortOrder
    materialId?: SortOrder
  }

  export type QuestionHasMaterialAvgOrderByAggregateInput = {
    questionId?: SortOrder
    materialId?: SortOrder
  }

  export type QuestionHasMaterialMaxOrderByAggregateInput = {
    questionId?: SortOrder
    materialId?: SortOrder
  }

  export type QuestionHasMaterialMinOrderByAggregateInput = {
    questionId?: SortOrder
    materialId?: SortOrder
  }

  export type QuestionHasMaterialSumOrderByAggregateInput = {
    questionId?: SortOrder
    materialId?: SortOrder
  }

  export type ImageScalarRelationFilter = {
    is?: ImageWhereInput
    isNot?: ImageWhereInput
  }

  export type MaterialHasImageMaterialIdImageIdCompoundUniqueInput = {
    materialId: number
    imageId: number
  }

  export type MaterialHasImageCountOrderByAggregateInput = {
    materialId?: SortOrder
    imageId?: SortOrder
  }

  export type MaterialHasImageAvgOrderByAggregateInput = {
    materialId?: SortOrder
    imageId?: SortOrder
  }

  export type MaterialHasImageMaxOrderByAggregateInput = {
    materialId?: SortOrder
    imageId?: SortOrder
  }

  export type MaterialHasImageMinOrderByAggregateInput = {
    materialId?: SortOrder
    imageId?: SortOrder
  }

  export type MaterialHasImageSumOrderByAggregateInput = {
    materialId?: SortOrder
    imageId?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type UserQuestionCreateNestedManyWithoutUserInput = {
    create?: XOR<UserQuestionCreateWithoutUserInput, UserQuestionUncheckedCreateWithoutUserInput> | UserQuestionCreateWithoutUserInput[] | UserQuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuestionCreateOrConnectWithoutUserInput | UserQuestionCreateOrConnectWithoutUserInput[]
    createMany?: UserQuestionCreateManyUserInputEnvelope
    connect?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
  }

  export type UserMaterialCreateNestedManyWithoutUserInput = {
    create?: XOR<UserMaterialCreateWithoutUserInput, UserMaterialUncheckedCreateWithoutUserInput> | UserMaterialCreateWithoutUserInput[] | UserMaterialUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMaterialCreateOrConnectWithoutUserInput | UserMaterialCreateOrConnectWithoutUserInput[]
    createMany?: UserMaterialCreateManyUserInputEnvelope
    connect?: UserMaterialWhereUniqueInput | UserMaterialWhereUniqueInput[]
  }

  export type PresetCreateNestedManyWithoutUserInput = {
    create?: XOR<PresetCreateWithoutUserInput, PresetUncheckedCreateWithoutUserInput> | PresetCreateWithoutUserInput[] | PresetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PresetCreateOrConnectWithoutUserInput | PresetCreateOrConnectWithoutUserInput[]
    createMany?: PresetCreateManyUserInputEnvelope
    connect?: PresetWhereUniqueInput | PresetWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type UserQuestionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserQuestionCreateWithoutUserInput, UserQuestionUncheckedCreateWithoutUserInput> | UserQuestionCreateWithoutUserInput[] | UserQuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuestionCreateOrConnectWithoutUserInput | UserQuestionCreateOrConnectWithoutUserInput[]
    createMany?: UserQuestionCreateManyUserInputEnvelope
    connect?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
  }

  export type UserMaterialUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserMaterialCreateWithoutUserInput, UserMaterialUncheckedCreateWithoutUserInput> | UserMaterialCreateWithoutUserInput[] | UserMaterialUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMaterialCreateOrConnectWithoutUserInput | UserMaterialCreateOrConnectWithoutUserInput[]
    createMany?: UserMaterialCreateManyUserInputEnvelope
    connect?: UserMaterialWhereUniqueInput | UserMaterialWhereUniqueInput[]
  }

  export type PresetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PresetCreateWithoutUserInput, PresetUncheckedCreateWithoutUserInput> | PresetCreateWithoutUserInput[] | PresetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PresetCreateOrConnectWithoutUserInput | PresetCreateOrConnectWithoutUserInput[]
    createMany?: PresetCreateManyUserInputEnvelope
    connect?: PresetWhereUniqueInput | PresetWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type UserQuestionUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserQuestionCreateWithoutUserInput, UserQuestionUncheckedCreateWithoutUserInput> | UserQuestionCreateWithoutUserInput[] | UserQuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuestionCreateOrConnectWithoutUserInput | UserQuestionCreateOrConnectWithoutUserInput[]
    upsert?: UserQuestionUpsertWithWhereUniqueWithoutUserInput | UserQuestionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserQuestionCreateManyUserInputEnvelope
    set?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    disconnect?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    delete?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    connect?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    update?: UserQuestionUpdateWithWhereUniqueWithoutUserInput | UserQuestionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserQuestionUpdateManyWithWhereWithoutUserInput | UserQuestionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserQuestionScalarWhereInput | UserQuestionScalarWhereInput[]
  }

  export type UserMaterialUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserMaterialCreateWithoutUserInput, UserMaterialUncheckedCreateWithoutUserInput> | UserMaterialCreateWithoutUserInput[] | UserMaterialUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMaterialCreateOrConnectWithoutUserInput | UserMaterialCreateOrConnectWithoutUserInput[]
    upsert?: UserMaterialUpsertWithWhereUniqueWithoutUserInput | UserMaterialUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserMaterialCreateManyUserInputEnvelope
    set?: UserMaterialWhereUniqueInput | UserMaterialWhereUniqueInput[]
    disconnect?: UserMaterialWhereUniqueInput | UserMaterialWhereUniqueInput[]
    delete?: UserMaterialWhereUniqueInput | UserMaterialWhereUniqueInput[]
    connect?: UserMaterialWhereUniqueInput | UserMaterialWhereUniqueInput[]
    update?: UserMaterialUpdateWithWhereUniqueWithoutUserInput | UserMaterialUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserMaterialUpdateManyWithWhereWithoutUserInput | UserMaterialUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserMaterialScalarWhereInput | UserMaterialScalarWhereInput[]
  }

  export type PresetUpdateManyWithoutUserNestedInput = {
    create?: XOR<PresetCreateWithoutUserInput, PresetUncheckedCreateWithoutUserInput> | PresetCreateWithoutUserInput[] | PresetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PresetCreateOrConnectWithoutUserInput | PresetCreateOrConnectWithoutUserInput[]
    upsert?: PresetUpsertWithWhereUniqueWithoutUserInput | PresetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PresetCreateManyUserInputEnvelope
    set?: PresetWhereUniqueInput | PresetWhereUniqueInput[]
    disconnect?: PresetWhereUniqueInput | PresetWhereUniqueInput[]
    delete?: PresetWhereUniqueInput | PresetWhereUniqueInput[]
    connect?: PresetWhereUniqueInput | PresetWhereUniqueInput[]
    update?: PresetUpdateWithWhereUniqueWithoutUserInput | PresetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PresetUpdateManyWithWhereWithoutUserInput | PresetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PresetScalarWhereInput | PresetScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type UserQuestionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserQuestionCreateWithoutUserInput, UserQuestionUncheckedCreateWithoutUserInput> | UserQuestionCreateWithoutUserInput[] | UserQuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserQuestionCreateOrConnectWithoutUserInput | UserQuestionCreateOrConnectWithoutUserInput[]
    upsert?: UserQuestionUpsertWithWhereUniqueWithoutUserInput | UserQuestionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserQuestionCreateManyUserInputEnvelope
    set?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    disconnect?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    delete?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    connect?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    update?: UserQuestionUpdateWithWhereUniqueWithoutUserInput | UserQuestionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserQuestionUpdateManyWithWhereWithoutUserInput | UserQuestionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserQuestionScalarWhereInput | UserQuestionScalarWhereInput[]
  }

  export type UserMaterialUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserMaterialCreateWithoutUserInput, UserMaterialUncheckedCreateWithoutUserInput> | UserMaterialCreateWithoutUserInput[] | UserMaterialUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMaterialCreateOrConnectWithoutUserInput | UserMaterialCreateOrConnectWithoutUserInput[]
    upsert?: UserMaterialUpsertWithWhereUniqueWithoutUserInput | UserMaterialUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserMaterialCreateManyUserInputEnvelope
    set?: UserMaterialWhereUniqueInput | UserMaterialWhereUniqueInput[]
    disconnect?: UserMaterialWhereUniqueInput | UserMaterialWhereUniqueInput[]
    delete?: UserMaterialWhereUniqueInput | UserMaterialWhereUniqueInput[]
    connect?: UserMaterialWhereUniqueInput | UserMaterialWhereUniqueInput[]
    update?: UserMaterialUpdateWithWhereUniqueWithoutUserInput | UserMaterialUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserMaterialUpdateManyWithWhereWithoutUserInput | UserMaterialUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserMaterialScalarWhereInput | UserMaterialScalarWhereInput[]
  }

  export type PresetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PresetCreateWithoutUserInput, PresetUncheckedCreateWithoutUserInput> | PresetCreateWithoutUserInput[] | PresetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PresetCreateOrConnectWithoutUserInput | PresetCreateOrConnectWithoutUserInput[]
    upsert?: PresetUpsertWithWhereUniqueWithoutUserInput | PresetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PresetCreateManyUserInputEnvelope
    set?: PresetWhereUniqueInput | PresetWhereUniqueInput[]
    disconnect?: PresetWhereUniqueInput | PresetWhereUniqueInput[]
    delete?: PresetWhereUniqueInput | PresetWhereUniqueInput[]
    connect?: PresetWhereUniqueInput | PresetWhereUniqueInput[]
    update?: PresetUpdateWithWhereUniqueWithoutUserInput | PresetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PresetUpdateManyWithWhereWithoutUserInput | PresetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PresetScalarWhereInput | PresetScalarWhereInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type QuestionCreateNestedManyWithoutImageInput = {
    create?: XOR<QuestionCreateWithoutImageInput, QuestionUncheckedCreateWithoutImageInput> | QuestionCreateWithoutImageInput[] | QuestionUncheckedCreateWithoutImageInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutImageInput | QuestionCreateOrConnectWithoutImageInput[]
    createMany?: QuestionCreateManyImageInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type MaterialHasImageCreateNestedManyWithoutImageInput = {
    create?: XOR<MaterialHasImageCreateWithoutImageInput, MaterialHasImageUncheckedCreateWithoutImageInput> | MaterialHasImageCreateWithoutImageInput[] | MaterialHasImageUncheckedCreateWithoutImageInput[]
    connectOrCreate?: MaterialHasImageCreateOrConnectWithoutImageInput | MaterialHasImageCreateOrConnectWithoutImageInput[]
    createMany?: MaterialHasImageCreateManyImageInputEnvelope
    connect?: MaterialHasImageWhereUniqueInput | MaterialHasImageWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<QuestionCreateWithoutImageInput, QuestionUncheckedCreateWithoutImageInput> | QuestionCreateWithoutImageInput[] | QuestionUncheckedCreateWithoutImageInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutImageInput | QuestionCreateOrConnectWithoutImageInput[]
    createMany?: QuestionCreateManyImageInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type MaterialHasImageUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<MaterialHasImageCreateWithoutImageInput, MaterialHasImageUncheckedCreateWithoutImageInput> | MaterialHasImageCreateWithoutImageInput[] | MaterialHasImageUncheckedCreateWithoutImageInput[]
    connectOrCreate?: MaterialHasImageCreateOrConnectWithoutImageInput | MaterialHasImageCreateOrConnectWithoutImageInput[]
    createMany?: MaterialHasImageCreateManyImageInputEnvelope
    connect?: MaterialHasImageWhereUniqueInput | MaterialHasImageWhereUniqueInput[]
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Uint8Array
  }

  export type QuestionUpdateManyWithoutImageNestedInput = {
    create?: XOR<QuestionCreateWithoutImageInput, QuestionUncheckedCreateWithoutImageInput> | QuestionCreateWithoutImageInput[] | QuestionUncheckedCreateWithoutImageInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutImageInput | QuestionCreateOrConnectWithoutImageInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutImageInput | QuestionUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: QuestionCreateManyImageInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutImageInput | QuestionUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutImageInput | QuestionUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type MaterialHasImageUpdateManyWithoutImageNestedInput = {
    create?: XOR<MaterialHasImageCreateWithoutImageInput, MaterialHasImageUncheckedCreateWithoutImageInput> | MaterialHasImageCreateWithoutImageInput[] | MaterialHasImageUncheckedCreateWithoutImageInput[]
    connectOrCreate?: MaterialHasImageCreateOrConnectWithoutImageInput | MaterialHasImageCreateOrConnectWithoutImageInput[]
    upsert?: MaterialHasImageUpsertWithWhereUniqueWithoutImageInput | MaterialHasImageUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: MaterialHasImageCreateManyImageInputEnvelope
    set?: MaterialHasImageWhereUniqueInput | MaterialHasImageWhereUniqueInput[]
    disconnect?: MaterialHasImageWhereUniqueInput | MaterialHasImageWhereUniqueInput[]
    delete?: MaterialHasImageWhereUniqueInput | MaterialHasImageWhereUniqueInput[]
    connect?: MaterialHasImageWhereUniqueInput | MaterialHasImageWhereUniqueInput[]
    update?: MaterialHasImageUpdateWithWhereUniqueWithoutImageInput | MaterialHasImageUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: MaterialHasImageUpdateManyWithWhereWithoutImageInput | MaterialHasImageUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: MaterialHasImageScalarWhereInput | MaterialHasImageScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuestionUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<QuestionCreateWithoutImageInput, QuestionUncheckedCreateWithoutImageInput> | QuestionCreateWithoutImageInput[] | QuestionUncheckedCreateWithoutImageInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutImageInput | QuestionCreateOrConnectWithoutImageInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutImageInput | QuestionUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: QuestionCreateManyImageInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutImageInput | QuestionUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutImageInput | QuestionUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type MaterialHasImageUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<MaterialHasImageCreateWithoutImageInput, MaterialHasImageUncheckedCreateWithoutImageInput> | MaterialHasImageCreateWithoutImageInput[] | MaterialHasImageUncheckedCreateWithoutImageInput[]
    connectOrCreate?: MaterialHasImageCreateOrConnectWithoutImageInput | MaterialHasImageCreateOrConnectWithoutImageInput[]
    upsert?: MaterialHasImageUpsertWithWhereUniqueWithoutImageInput | MaterialHasImageUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: MaterialHasImageCreateManyImageInputEnvelope
    set?: MaterialHasImageWhereUniqueInput | MaterialHasImageWhereUniqueInput[]
    disconnect?: MaterialHasImageWhereUniqueInput | MaterialHasImageWhereUniqueInput[]
    delete?: MaterialHasImageWhereUniqueInput | MaterialHasImageWhereUniqueInput[]
    connect?: MaterialHasImageWhereUniqueInput | MaterialHasImageWhereUniqueInput[]
    update?: MaterialHasImageUpdateWithWhereUniqueWithoutImageInput | MaterialHasImageUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: MaterialHasImageUpdateManyWithWhereWithoutImageInput | MaterialHasImageUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: MaterialHasImageScalarWhereInput | MaterialHasImageScalarWhereInput[]
  }

  export type ImageCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<ImageCreateWithoutQuestionsInput, ImageUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ImageCreateOrConnectWithoutQuestionsInput
    connect?: ImageWhereUniqueInput
  }

  export type AlternativeCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AlternativeCreateWithoutQuestionInput, AlternativeUncheckedCreateWithoutQuestionInput> | AlternativeCreateWithoutQuestionInput[] | AlternativeUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AlternativeCreateOrConnectWithoutQuestionInput | AlternativeCreateOrConnectWithoutQuestionInput[]
    createMany?: AlternativeCreateManyQuestionInputEnvelope
    connect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
  }

  export type UserQuestionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<UserQuestionCreateWithoutQuestionInput, UserQuestionUncheckedCreateWithoutQuestionInput> | UserQuestionCreateWithoutQuestionInput[] | UserQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserQuestionCreateOrConnectWithoutQuestionInput | UserQuestionCreateOrConnectWithoutQuestionInput[]
    createMany?: UserQuestionCreateManyQuestionInputEnvelope
    connect?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
  }

  export type QuestionHasMaterialCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionHasMaterialCreateWithoutQuestionInput, QuestionHasMaterialUncheckedCreateWithoutQuestionInput> | QuestionHasMaterialCreateWithoutQuestionInput[] | QuestionHasMaterialUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionHasMaterialCreateOrConnectWithoutQuestionInput | QuestionHasMaterialCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionHasMaterialCreateManyQuestionInputEnvelope
    connect?: QuestionHasMaterialWhereUniqueInput | QuestionHasMaterialWhereUniqueInput[]
  }

  export type AlternativeUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<AlternativeCreateWithoutQuestionInput, AlternativeUncheckedCreateWithoutQuestionInput> | AlternativeCreateWithoutQuestionInput[] | AlternativeUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AlternativeCreateOrConnectWithoutQuestionInput | AlternativeCreateOrConnectWithoutQuestionInput[]
    createMany?: AlternativeCreateManyQuestionInputEnvelope
    connect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
  }

  export type UserQuestionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<UserQuestionCreateWithoutQuestionInput, UserQuestionUncheckedCreateWithoutQuestionInput> | UserQuestionCreateWithoutQuestionInput[] | UserQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserQuestionCreateOrConnectWithoutQuestionInput | UserQuestionCreateOrConnectWithoutQuestionInput[]
    createMany?: UserQuestionCreateManyQuestionInputEnvelope
    connect?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
  }

  export type QuestionHasMaterialUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionHasMaterialCreateWithoutQuestionInput, QuestionHasMaterialUncheckedCreateWithoutQuestionInput> | QuestionHasMaterialCreateWithoutQuestionInput[] | QuestionHasMaterialUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionHasMaterialCreateOrConnectWithoutQuestionInput | QuestionHasMaterialCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionHasMaterialCreateManyQuestionInputEnvelope
    connect?: QuestionHasMaterialWhereUniqueInput | QuestionHasMaterialWhereUniqueInput[]
  }

  export type ImageUpdateOneWithoutQuestionsNestedInput = {
    create?: XOR<ImageCreateWithoutQuestionsInput, ImageUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ImageCreateOrConnectWithoutQuestionsInput
    upsert?: ImageUpsertWithoutQuestionsInput
    disconnect?: ImageWhereInput | boolean
    delete?: ImageWhereInput | boolean
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutQuestionsInput, ImageUpdateWithoutQuestionsInput>, ImageUncheckedUpdateWithoutQuestionsInput>
  }

  export type AlternativeUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AlternativeCreateWithoutQuestionInput, AlternativeUncheckedCreateWithoutQuestionInput> | AlternativeCreateWithoutQuestionInput[] | AlternativeUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AlternativeCreateOrConnectWithoutQuestionInput | AlternativeCreateOrConnectWithoutQuestionInput[]
    upsert?: AlternativeUpsertWithWhereUniqueWithoutQuestionInput | AlternativeUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AlternativeCreateManyQuestionInputEnvelope
    set?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    disconnect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    delete?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    connect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    update?: AlternativeUpdateWithWhereUniqueWithoutQuestionInput | AlternativeUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AlternativeUpdateManyWithWhereWithoutQuestionInput | AlternativeUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AlternativeScalarWhereInput | AlternativeScalarWhereInput[]
  }

  export type UserQuestionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<UserQuestionCreateWithoutQuestionInput, UserQuestionUncheckedCreateWithoutQuestionInput> | UserQuestionCreateWithoutQuestionInput[] | UserQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserQuestionCreateOrConnectWithoutQuestionInput | UserQuestionCreateOrConnectWithoutQuestionInput[]
    upsert?: UserQuestionUpsertWithWhereUniqueWithoutQuestionInput | UserQuestionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: UserQuestionCreateManyQuestionInputEnvelope
    set?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    disconnect?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    delete?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    connect?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    update?: UserQuestionUpdateWithWhereUniqueWithoutQuestionInput | UserQuestionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: UserQuestionUpdateManyWithWhereWithoutQuestionInput | UserQuestionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: UserQuestionScalarWhereInput | UserQuestionScalarWhereInput[]
  }

  export type QuestionHasMaterialUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionHasMaterialCreateWithoutQuestionInput, QuestionHasMaterialUncheckedCreateWithoutQuestionInput> | QuestionHasMaterialCreateWithoutQuestionInput[] | QuestionHasMaterialUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionHasMaterialCreateOrConnectWithoutQuestionInput | QuestionHasMaterialCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionHasMaterialUpsertWithWhereUniqueWithoutQuestionInput | QuestionHasMaterialUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionHasMaterialCreateManyQuestionInputEnvelope
    set?: QuestionHasMaterialWhereUniqueInput | QuestionHasMaterialWhereUniqueInput[]
    disconnect?: QuestionHasMaterialWhereUniqueInput | QuestionHasMaterialWhereUniqueInput[]
    delete?: QuestionHasMaterialWhereUniqueInput | QuestionHasMaterialWhereUniqueInput[]
    connect?: QuestionHasMaterialWhereUniqueInput | QuestionHasMaterialWhereUniqueInput[]
    update?: QuestionHasMaterialUpdateWithWhereUniqueWithoutQuestionInput | QuestionHasMaterialUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionHasMaterialUpdateManyWithWhereWithoutQuestionInput | QuestionHasMaterialUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionHasMaterialScalarWhereInput | QuestionHasMaterialScalarWhereInput[]
  }

  export type AlternativeUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<AlternativeCreateWithoutQuestionInput, AlternativeUncheckedCreateWithoutQuestionInput> | AlternativeCreateWithoutQuestionInput[] | AlternativeUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: AlternativeCreateOrConnectWithoutQuestionInput | AlternativeCreateOrConnectWithoutQuestionInput[]
    upsert?: AlternativeUpsertWithWhereUniqueWithoutQuestionInput | AlternativeUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: AlternativeCreateManyQuestionInputEnvelope
    set?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    disconnect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    delete?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    connect?: AlternativeWhereUniqueInput | AlternativeWhereUniqueInput[]
    update?: AlternativeUpdateWithWhereUniqueWithoutQuestionInput | AlternativeUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: AlternativeUpdateManyWithWhereWithoutQuestionInput | AlternativeUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: AlternativeScalarWhereInput | AlternativeScalarWhereInput[]
  }

  export type UserQuestionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<UserQuestionCreateWithoutQuestionInput, UserQuestionUncheckedCreateWithoutQuestionInput> | UserQuestionCreateWithoutQuestionInput[] | UserQuestionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserQuestionCreateOrConnectWithoutQuestionInput | UserQuestionCreateOrConnectWithoutQuestionInput[]
    upsert?: UserQuestionUpsertWithWhereUniqueWithoutQuestionInput | UserQuestionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: UserQuestionCreateManyQuestionInputEnvelope
    set?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    disconnect?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    delete?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    connect?: UserQuestionWhereUniqueInput | UserQuestionWhereUniqueInput[]
    update?: UserQuestionUpdateWithWhereUniqueWithoutQuestionInput | UserQuestionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: UserQuestionUpdateManyWithWhereWithoutQuestionInput | UserQuestionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: UserQuestionScalarWhereInput | UserQuestionScalarWhereInput[]
  }

  export type QuestionHasMaterialUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionHasMaterialCreateWithoutQuestionInput, QuestionHasMaterialUncheckedCreateWithoutQuestionInput> | QuestionHasMaterialCreateWithoutQuestionInput[] | QuestionHasMaterialUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionHasMaterialCreateOrConnectWithoutQuestionInput | QuestionHasMaterialCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionHasMaterialUpsertWithWhereUniqueWithoutQuestionInput | QuestionHasMaterialUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionHasMaterialCreateManyQuestionInputEnvelope
    set?: QuestionHasMaterialWhereUniqueInput | QuestionHasMaterialWhereUniqueInput[]
    disconnect?: QuestionHasMaterialWhereUniqueInput | QuestionHasMaterialWhereUniqueInput[]
    delete?: QuestionHasMaterialWhereUniqueInput | QuestionHasMaterialWhereUniqueInput[]
    connect?: QuestionHasMaterialWhereUniqueInput | QuestionHasMaterialWhereUniqueInput[]
    update?: QuestionHasMaterialUpdateWithWhereUniqueWithoutQuestionInput | QuestionHasMaterialUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionHasMaterialUpdateManyWithWhereWithoutQuestionInput | QuestionHasMaterialUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionHasMaterialScalarWhereInput | QuestionHasMaterialScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutAlternativesInput = {
    create?: XOR<QuestionCreateWithoutAlternativesInput, QuestionUncheckedCreateWithoutAlternativesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAlternativesInput
    connect?: QuestionWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type QuestionUpdateOneRequiredWithoutAlternativesNestedInput = {
    create?: XOR<QuestionCreateWithoutAlternativesInput, QuestionUncheckedCreateWithoutAlternativesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutAlternativesInput
    upsert?: QuestionUpsertWithoutAlternativesInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutAlternativesInput, QuestionUpdateWithoutAlternativesInput>, QuestionUncheckedUpdateWithoutAlternativesInput>
  }

  export type UserMaterialCreateNestedManyWithoutMaterialInput = {
    create?: XOR<UserMaterialCreateWithoutMaterialInput, UserMaterialUncheckedCreateWithoutMaterialInput> | UserMaterialCreateWithoutMaterialInput[] | UserMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: UserMaterialCreateOrConnectWithoutMaterialInput | UserMaterialCreateOrConnectWithoutMaterialInput[]
    createMany?: UserMaterialCreateManyMaterialInputEnvelope
    connect?: UserMaterialWhereUniqueInput | UserMaterialWhereUniqueInput[]
  }

  export type QuestionHasMaterialCreateNestedManyWithoutMaterialInput = {
    create?: XOR<QuestionHasMaterialCreateWithoutMaterialInput, QuestionHasMaterialUncheckedCreateWithoutMaterialInput> | QuestionHasMaterialCreateWithoutMaterialInput[] | QuestionHasMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: QuestionHasMaterialCreateOrConnectWithoutMaterialInput | QuestionHasMaterialCreateOrConnectWithoutMaterialInput[]
    createMany?: QuestionHasMaterialCreateManyMaterialInputEnvelope
    connect?: QuestionHasMaterialWhereUniqueInput | QuestionHasMaterialWhereUniqueInput[]
  }

  export type MaterialHasImageCreateNestedManyWithoutMaterialInput = {
    create?: XOR<MaterialHasImageCreateWithoutMaterialInput, MaterialHasImageUncheckedCreateWithoutMaterialInput> | MaterialHasImageCreateWithoutMaterialInput[] | MaterialHasImageUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MaterialHasImageCreateOrConnectWithoutMaterialInput | MaterialHasImageCreateOrConnectWithoutMaterialInput[]
    createMany?: MaterialHasImageCreateManyMaterialInputEnvelope
    connect?: MaterialHasImageWhereUniqueInput | MaterialHasImageWhereUniqueInput[]
  }

  export type UserMaterialUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<UserMaterialCreateWithoutMaterialInput, UserMaterialUncheckedCreateWithoutMaterialInput> | UserMaterialCreateWithoutMaterialInput[] | UserMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: UserMaterialCreateOrConnectWithoutMaterialInput | UserMaterialCreateOrConnectWithoutMaterialInput[]
    createMany?: UserMaterialCreateManyMaterialInputEnvelope
    connect?: UserMaterialWhereUniqueInput | UserMaterialWhereUniqueInput[]
  }

  export type QuestionHasMaterialUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<QuestionHasMaterialCreateWithoutMaterialInput, QuestionHasMaterialUncheckedCreateWithoutMaterialInput> | QuestionHasMaterialCreateWithoutMaterialInput[] | QuestionHasMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: QuestionHasMaterialCreateOrConnectWithoutMaterialInput | QuestionHasMaterialCreateOrConnectWithoutMaterialInput[]
    createMany?: QuestionHasMaterialCreateManyMaterialInputEnvelope
    connect?: QuestionHasMaterialWhereUniqueInput | QuestionHasMaterialWhereUniqueInput[]
  }

  export type MaterialHasImageUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: XOR<MaterialHasImageCreateWithoutMaterialInput, MaterialHasImageUncheckedCreateWithoutMaterialInput> | MaterialHasImageCreateWithoutMaterialInput[] | MaterialHasImageUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MaterialHasImageCreateOrConnectWithoutMaterialInput | MaterialHasImageCreateOrConnectWithoutMaterialInput[]
    createMany?: MaterialHasImageCreateManyMaterialInputEnvelope
    connect?: MaterialHasImageWhereUniqueInput | MaterialHasImageWhereUniqueInput[]
  }

  export type UserMaterialUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<UserMaterialCreateWithoutMaterialInput, UserMaterialUncheckedCreateWithoutMaterialInput> | UserMaterialCreateWithoutMaterialInput[] | UserMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: UserMaterialCreateOrConnectWithoutMaterialInput | UserMaterialCreateOrConnectWithoutMaterialInput[]
    upsert?: UserMaterialUpsertWithWhereUniqueWithoutMaterialInput | UserMaterialUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: UserMaterialCreateManyMaterialInputEnvelope
    set?: UserMaterialWhereUniqueInput | UserMaterialWhereUniqueInput[]
    disconnect?: UserMaterialWhereUniqueInput | UserMaterialWhereUniqueInput[]
    delete?: UserMaterialWhereUniqueInput | UserMaterialWhereUniqueInput[]
    connect?: UserMaterialWhereUniqueInput | UserMaterialWhereUniqueInput[]
    update?: UserMaterialUpdateWithWhereUniqueWithoutMaterialInput | UserMaterialUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: UserMaterialUpdateManyWithWhereWithoutMaterialInput | UserMaterialUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: UserMaterialScalarWhereInput | UserMaterialScalarWhereInput[]
  }

  export type QuestionHasMaterialUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<QuestionHasMaterialCreateWithoutMaterialInput, QuestionHasMaterialUncheckedCreateWithoutMaterialInput> | QuestionHasMaterialCreateWithoutMaterialInput[] | QuestionHasMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: QuestionHasMaterialCreateOrConnectWithoutMaterialInput | QuestionHasMaterialCreateOrConnectWithoutMaterialInput[]
    upsert?: QuestionHasMaterialUpsertWithWhereUniqueWithoutMaterialInput | QuestionHasMaterialUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: QuestionHasMaterialCreateManyMaterialInputEnvelope
    set?: QuestionHasMaterialWhereUniqueInput | QuestionHasMaterialWhereUniqueInput[]
    disconnect?: QuestionHasMaterialWhereUniqueInput | QuestionHasMaterialWhereUniqueInput[]
    delete?: QuestionHasMaterialWhereUniqueInput | QuestionHasMaterialWhereUniqueInput[]
    connect?: QuestionHasMaterialWhereUniqueInput | QuestionHasMaterialWhereUniqueInput[]
    update?: QuestionHasMaterialUpdateWithWhereUniqueWithoutMaterialInput | QuestionHasMaterialUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: QuestionHasMaterialUpdateManyWithWhereWithoutMaterialInput | QuestionHasMaterialUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: QuestionHasMaterialScalarWhereInput | QuestionHasMaterialScalarWhereInput[]
  }

  export type MaterialHasImageUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<MaterialHasImageCreateWithoutMaterialInput, MaterialHasImageUncheckedCreateWithoutMaterialInput> | MaterialHasImageCreateWithoutMaterialInput[] | MaterialHasImageUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MaterialHasImageCreateOrConnectWithoutMaterialInput | MaterialHasImageCreateOrConnectWithoutMaterialInput[]
    upsert?: MaterialHasImageUpsertWithWhereUniqueWithoutMaterialInput | MaterialHasImageUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: MaterialHasImageCreateManyMaterialInputEnvelope
    set?: MaterialHasImageWhereUniqueInput | MaterialHasImageWhereUniqueInput[]
    disconnect?: MaterialHasImageWhereUniqueInput | MaterialHasImageWhereUniqueInput[]
    delete?: MaterialHasImageWhereUniqueInput | MaterialHasImageWhereUniqueInput[]
    connect?: MaterialHasImageWhereUniqueInput | MaterialHasImageWhereUniqueInput[]
    update?: MaterialHasImageUpdateWithWhereUniqueWithoutMaterialInput | MaterialHasImageUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: MaterialHasImageUpdateManyWithWhereWithoutMaterialInput | MaterialHasImageUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: MaterialHasImageScalarWhereInput | MaterialHasImageScalarWhereInput[]
  }

  export type UserMaterialUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<UserMaterialCreateWithoutMaterialInput, UserMaterialUncheckedCreateWithoutMaterialInput> | UserMaterialCreateWithoutMaterialInput[] | UserMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: UserMaterialCreateOrConnectWithoutMaterialInput | UserMaterialCreateOrConnectWithoutMaterialInput[]
    upsert?: UserMaterialUpsertWithWhereUniqueWithoutMaterialInput | UserMaterialUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: UserMaterialCreateManyMaterialInputEnvelope
    set?: UserMaterialWhereUniqueInput | UserMaterialWhereUniqueInput[]
    disconnect?: UserMaterialWhereUniqueInput | UserMaterialWhereUniqueInput[]
    delete?: UserMaterialWhereUniqueInput | UserMaterialWhereUniqueInput[]
    connect?: UserMaterialWhereUniqueInput | UserMaterialWhereUniqueInput[]
    update?: UserMaterialUpdateWithWhereUniqueWithoutMaterialInput | UserMaterialUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: UserMaterialUpdateManyWithWhereWithoutMaterialInput | UserMaterialUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: UserMaterialScalarWhereInput | UserMaterialScalarWhereInput[]
  }

  export type QuestionHasMaterialUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<QuestionHasMaterialCreateWithoutMaterialInput, QuestionHasMaterialUncheckedCreateWithoutMaterialInput> | QuestionHasMaterialCreateWithoutMaterialInput[] | QuestionHasMaterialUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: QuestionHasMaterialCreateOrConnectWithoutMaterialInput | QuestionHasMaterialCreateOrConnectWithoutMaterialInput[]
    upsert?: QuestionHasMaterialUpsertWithWhereUniqueWithoutMaterialInput | QuestionHasMaterialUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: QuestionHasMaterialCreateManyMaterialInputEnvelope
    set?: QuestionHasMaterialWhereUniqueInput | QuestionHasMaterialWhereUniqueInput[]
    disconnect?: QuestionHasMaterialWhereUniqueInput | QuestionHasMaterialWhereUniqueInput[]
    delete?: QuestionHasMaterialWhereUniqueInput | QuestionHasMaterialWhereUniqueInput[]
    connect?: QuestionHasMaterialWhereUniqueInput | QuestionHasMaterialWhereUniqueInput[]
    update?: QuestionHasMaterialUpdateWithWhereUniqueWithoutMaterialInput | QuestionHasMaterialUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: QuestionHasMaterialUpdateManyWithWhereWithoutMaterialInput | QuestionHasMaterialUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: QuestionHasMaterialScalarWhereInput | QuestionHasMaterialScalarWhereInput[]
  }

  export type MaterialHasImageUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: XOR<MaterialHasImageCreateWithoutMaterialInput, MaterialHasImageUncheckedCreateWithoutMaterialInput> | MaterialHasImageCreateWithoutMaterialInput[] | MaterialHasImageUncheckedCreateWithoutMaterialInput[]
    connectOrCreate?: MaterialHasImageCreateOrConnectWithoutMaterialInput | MaterialHasImageCreateOrConnectWithoutMaterialInput[]
    upsert?: MaterialHasImageUpsertWithWhereUniqueWithoutMaterialInput | MaterialHasImageUpsertWithWhereUniqueWithoutMaterialInput[]
    createMany?: MaterialHasImageCreateManyMaterialInputEnvelope
    set?: MaterialHasImageWhereUniqueInput | MaterialHasImageWhereUniqueInput[]
    disconnect?: MaterialHasImageWhereUniqueInput | MaterialHasImageWhereUniqueInput[]
    delete?: MaterialHasImageWhereUniqueInput | MaterialHasImageWhereUniqueInput[]
    connect?: MaterialHasImageWhereUniqueInput | MaterialHasImageWhereUniqueInput[]
    update?: MaterialHasImageUpdateWithWhereUniqueWithoutMaterialInput | MaterialHasImageUpdateWithWhereUniqueWithoutMaterialInput[]
    updateMany?: MaterialHasImageUpdateManyWithWhereWithoutMaterialInput | MaterialHasImageUpdateManyWithWhereWithoutMaterialInput[]
    deleteMany?: MaterialHasImageScalarWhereInput | MaterialHasImageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPresetsInput = {
    create?: XOR<UserCreateWithoutPresetsInput, UserUncheckedCreateWithoutPresetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPresetsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPresetsNestedInput = {
    create?: XOR<UserCreateWithoutPresetsInput, UserUncheckedCreateWithoutPresetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPresetsInput
    upsert?: UserUpsertWithoutPresetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPresetsInput, UserUpdateWithoutPresetsInput>, UserUncheckedUpdateWithoutPresetsInput>
  }

  export type UserCreateNestedOneWithoutUserQuestionsInput = {
    create?: XOR<UserCreateWithoutUserQuestionsInput, UserUncheckedCreateWithoutUserQuestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserQuestionsInput
    connect?: UserWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutUserQuestionsInput = {
    create?: XOR<QuestionCreateWithoutUserQuestionsInput, QuestionUncheckedCreateWithoutUserQuestionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutUserQuestionsInput
    connect?: QuestionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserQuestionsNestedInput = {
    create?: XOR<UserCreateWithoutUserQuestionsInput, UserUncheckedCreateWithoutUserQuestionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserQuestionsInput
    upsert?: UserUpsertWithoutUserQuestionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserQuestionsInput, UserUpdateWithoutUserQuestionsInput>, UserUncheckedUpdateWithoutUserQuestionsInput>
  }

  export type QuestionUpdateOneRequiredWithoutUserQuestionsNestedInput = {
    create?: XOR<QuestionCreateWithoutUserQuestionsInput, QuestionUncheckedCreateWithoutUserQuestionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutUserQuestionsInput
    upsert?: QuestionUpsertWithoutUserQuestionsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutUserQuestionsInput, QuestionUpdateWithoutUserQuestionsInput>, QuestionUncheckedUpdateWithoutUserQuestionsInput>
  }

  export type UserCreateNestedOneWithoutUserMaterialsInput = {
    create?: XOR<UserCreateWithoutUserMaterialsInput, UserUncheckedCreateWithoutUserMaterialsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserMaterialsInput
    connect?: UserWhereUniqueInput
  }

  export type MaterialCreateNestedOneWithoutUserMaterialsInput = {
    create?: XOR<MaterialCreateWithoutUserMaterialsInput, MaterialUncheckedCreateWithoutUserMaterialsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutUserMaterialsInput
    connect?: MaterialWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserMaterialsNestedInput = {
    create?: XOR<UserCreateWithoutUserMaterialsInput, UserUncheckedCreateWithoutUserMaterialsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserMaterialsInput
    upsert?: UserUpsertWithoutUserMaterialsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserMaterialsInput, UserUpdateWithoutUserMaterialsInput>, UserUncheckedUpdateWithoutUserMaterialsInput>
  }

  export type MaterialUpdateOneRequiredWithoutUserMaterialsNestedInput = {
    create?: XOR<MaterialCreateWithoutUserMaterialsInput, MaterialUncheckedCreateWithoutUserMaterialsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutUserMaterialsInput
    upsert?: MaterialUpsertWithoutUserMaterialsInput
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutUserMaterialsInput, MaterialUpdateWithoutUserMaterialsInput>, MaterialUncheckedUpdateWithoutUserMaterialsInput>
  }

  export type QuestionCreateNestedOneWithoutQuestionMaterialsInput = {
    create?: XOR<QuestionCreateWithoutQuestionMaterialsInput, QuestionUncheckedCreateWithoutQuestionMaterialsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutQuestionMaterialsInput
    connect?: QuestionWhereUniqueInput
  }

  export type MaterialCreateNestedOneWithoutQuestionMaterialsInput = {
    create?: XOR<MaterialCreateWithoutQuestionMaterialsInput, MaterialUncheckedCreateWithoutQuestionMaterialsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutQuestionMaterialsInput
    connect?: MaterialWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutQuestionMaterialsNestedInput = {
    create?: XOR<QuestionCreateWithoutQuestionMaterialsInput, QuestionUncheckedCreateWithoutQuestionMaterialsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutQuestionMaterialsInput
    upsert?: QuestionUpsertWithoutQuestionMaterialsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutQuestionMaterialsInput, QuestionUpdateWithoutQuestionMaterialsInput>, QuestionUncheckedUpdateWithoutQuestionMaterialsInput>
  }

  export type MaterialUpdateOneRequiredWithoutQuestionMaterialsNestedInput = {
    create?: XOR<MaterialCreateWithoutQuestionMaterialsInput, MaterialUncheckedCreateWithoutQuestionMaterialsInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutQuestionMaterialsInput
    upsert?: MaterialUpsertWithoutQuestionMaterialsInput
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutQuestionMaterialsInput, MaterialUpdateWithoutQuestionMaterialsInput>, MaterialUncheckedUpdateWithoutQuestionMaterialsInput>
  }

  export type MaterialCreateNestedOneWithoutMaterialImagesInput = {
    create?: XOR<MaterialCreateWithoutMaterialImagesInput, MaterialUncheckedCreateWithoutMaterialImagesInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutMaterialImagesInput
    connect?: MaterialWhereUniqueInput
  }

  export type ImageCreateNestedOneWithoutMaterialsInput = {
    create?: XOR<ImageCreateWithoutMaterialsInput, ImageUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: ImageCreateOrConnectWithoutMaterialsInput
    connect?: ImageWhereUniqueInput
  }

  export type MaterialUpdateOneRequiredWithoutMaterialImagesNestedInput = {
    create?: XOR<MaterialCreateWithoutMaterialImagesInput, MaterialUncheckedCreateWithoutMaterialImagesInput>
    connectOrCreate?: MaterialCreateOrConnectWithoutMaterialImagesInput
    upsert?: MaterialUpsertWithoutMaterialImagesInput
    connect?: MaterialWhereUniqueInput
    update?: XOR<XOR<MaterialUpdateToOneWithWhereWithoutMaterialImagesInput, MaterialUpdateWithoutMaterialImagesInput>, MaterialUncheckedUpdateWithoutMaterialImagesInput>
  }

  export type ImageUpdateOneRequiredWithoutMaterialsNestedInput = {
    create?: XOR<ImageCreateWithoutMaterialsInput, ImageUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: ImageCreateOrConnectWithoutMaterialsInput
    upsert?: ImageUpsertWithoutMaterialsInput
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutMaterialsInput, ImageUpdateWithoutMaterialsInput>, ImageUncheckedUpdateWithoutMaterialsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[]
    notIn?: Uint8Array[]
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[]
    notIn?: Uint8Array[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    role?: $Enums.Role
    image?: string | null
    userQuestions?: UserQuestionCreateNestedManyWithoutUserInput
    userMaterials?: UserMaterialCreateNestedManyWithoutUserInput
    presets?: PresetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    role?: $Enums.Role
    image?: string | null
    userQuestions?: UserQuestionUncheckedCreateNestedManyWithoutUserInput
    userMaterials?: UserMaterialUncheckedCreateNestedManyWithoutUserInput
    presets?: PresetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userQuestions?: UserQuestionUpdateManyWithoutUserNestedInput
    userMaterials?: UserMaterialUpdateManyWithoutUserNestedInput
    presets?: PresetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userQuestions?: UserQuestionUncheckedUpdateManyWithoutUserNestedInput
    userMaterials?: UserMaterialUncheckedUpdateManyWithoutUserNestedInput
    presets?: PresetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserQuestionCreateWithoutUserInput = {
    completed: boolean
    question: QuestionCreateNestedOneWithoutUserQuestionsInput
  }

  export type UserQuestionUncheckedCreateWithoutUserInput = {
    id?: number
    completed: boolean
    questionsId: number
  }

  export type UserQuestionCreateOrConnectWithoutUserInput = {
    where: UserQuestionWhereUniqueInput
    create: XOR<UserQuestionCreateWithoutUserInput, UserQuestionUncheckedCreateWithoutUserInput>
  }

  export type UserQuestionCreateManyUserInputEnvelope = {
    data: UserQuestionCreateManyUserInput | UserQuestionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserMaterialCreateWithoutUserInput = {
    completed: boolean
    material: MaterialCreateNestedOneWithoutUserMaterialsInput
  }

  export type UserMaterialUncheckedCreateWithoutUserInput = {
    id?: number
    completed: boolean
    materialsId: number
  }

  export type UserMaterialCreateOrConnectWithoutUserInput = {
    where: UserMaterialWhereUniqueInput
    create: XOR<UserMaterialCreateWithoutUserInput, UserMaterialUncheckedCreateWithoutUserInput>
  }

  export type UserMaterialCreateManyUserInputEnvelope = {
    data: UserMaterialCreateManyUserInput | UserMaterialCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PresetCreateWithoutUserInput = {
    content: JsonNullValueInput | InputJsonValue
    created_at: Date | string
  }

  export type PresetUncheckedCreateWithoutUserInput = {
    id?: number
    content: JsonNullValueInput | InputJsonValue
    created_at: Date | string
  }

  export type PresetCreateOrConnectWithoutUserInput = {
    where: PresetWhereUniqueInput
    create: XOR<PresetCreateWithoutUserInput, PresetUncheckedCreateWithoutUserInput>
  }

  export type PresetCreateManyUserInputEnvelope = {
    data: PresetCreateManyUserInput | PresetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type UserQuestionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserQuestionWhereUniqueInput
    update: XOR<UserQuestionUpdateWithoutUserInput, UserQuestionUncheckedUpdateWithoutUserInput>
    create: XOR<UserQuestionCreateWithoutUserInput, UserQuestionUncheckedCreateWithoutUserInput>
  }

  export type UserQuestionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserQuestionWhereUniqueInput
    data: XOR<UserQuestionUpdateWithoutUserInput, UserQuestionUncheckedUpdateWithoutUserInput>
  }

  export type UserQuestionUpdateManyWithWhereWithoutUserInput = {
    where: UserQuestionScalarWhereInput
    data: XOR<UserQuestionUpdateManyMutationInput, UserQuestionUncheckedUpdateManyWithoutUserInput>
  }

  export type UserQuestionScalarWhereInput = {
    AND?: UserQuestionScalarWhereInput | UserQuestionScalarWhereInput[]
    OR?: UserQuestionScalarWhereInput[]
    NOT?: UserQuestionScalarWhereInput | UserQuestionScalarWhereInput[]
    id?: IntFilter<"UserQuestion"> | number
    completed?: BoolFilter<"UserQuestion"> | boolean
    userId?: StringFilter<"UserQuestion"> | string
    questionsId?: IntFilter<"UserQuestion"> | number
  }

  export type UserMaterialUpsertWithWhereUniqueWithoutUserInput = {
    where: UserMaterialWhereUniqueInput
    update: XOR<UserMaterialUpdateWithoutUserInput, UserMaterialUncheckedUpdateWithoutUserInput>
    create: XOR<UserMaterialCreateWithoutUserInput, UserMaterialUncheckedCreateWithoutUserInput>
  }

  export type UserMaterialUpdateWithWhereUniqueWithoutUserInput = {
    where: UserMaterialWhereUniqueInput
    data: XOR<UserMaterialUpdateWithoutUserInput, UserMaterialUncheckedUpdateWithoutUserInput>
  }

  export type UserMaterialUpdateManyWithWhereWithoutUserInput = {
    where: UserMaterialScalarWhereInput
    data: XOR<UserMaterialUpdateManyMutationInput, UserMaterialUncheckedUpdateManyWithoutUserInput>
  }

  export type UserMaterialScalarWhereInput = {
    AND?: UserMaterialScalarWhereInput | UserMaterialScalarWhereInput[]
    OR?: UserMaterialScalarWhereInput[]
    NOT?: UserMaterialScalarWhereInput | UserMaterialScalarWhereInput[]
    id?: IntFilter<"UserMaterial"> | number
    completed?: BoolFilter<"UserMaterial"> | boolean
    userId?: StringFilter<"UserMaterial"> | string
    materialsId?: IntFilter<"UserMaterial"> | number
  }

  export type PresetUpsertWithWhereUniqueWithoutUserInput = {
    where: PresetWhereUniqueInput
    update: XOR<PresetUpdateWithoutUserInput, PresetUncheckedUpdateWithoutUserInput>
    create: XOR<PresetCreateWithoutUserInput, PresetUncheckedCreateWithoutUserInput>
  }

  export type PresetUpdateWithWhereUniqueWithoutUserInput = {
    where: PresetWhereUniqueInput
    data: XOR<PresetUpdateWithoutUserInput, PresetUncheckedUpdateWithoutUserInput>
  }

  export type PresetUpdateManyWithWhereWithoutUserInput = {
    where: PresetScalarWhereInput
    data: XOR<PresetUpdateManyMutationInput, PresetUncheckedUpdateManyWithoutUserInput>
  }

  export type PresetScalarWhereInput = {
    AND?: PresetScalarWhereInput | PresetScalarWhereInput[]
    OR?: PresetScalarWhereInput[]
    NOT?: PresetScalarWhereInput | PresetScalarWhereInput[]
    id?: IntFilter<"Preset"> | number
    content?: JsonFilter<"Preset">
    created_at?: DateTimeFilter<"Preset"> | Date | string
    userId?: StringFilter<"Preset"> | string
  }

  export type QuestionCreateWithoutImageInput = {
    title?: string
    content: string
    alternatives?: AlternativeCreateNestedManyWithoutQuestionInput
    userQuestions?: UserQuestionCreateNestedManyWithoutQuestionInput
    questionMaterials?: QuestionHasMaterialCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutImageInput = {
    id?: number
    title?: string
    content: string
    alternatives?: AlternativeUncheckedCreateNestedManyWithoutQuestionInput
    userQuestions?: UserQuestionUncheckedCreateNestedManyWithoutQuestionInput
    questionMaterials?: QuestionHasMaterialUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutImageInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutImageInput, QuestionUncheckedCreateWithoutImageInput>
  }

  export type QuestionCreateManyImageInputEnvelope = {
    data: QuestionCreateManyImageInput | QuestionCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type MaterialHasImageCreateWithoutImageInput = {
    material: MaterialCreateNestedOneWithoutMaterialImagesInput
  }

  export type MaterialHasImageUncheckedCreateWithoutImageInput = {
    materialId: number
  }

  export type MaterialHasImageCreateOrConnectWithoutImageInput = {
    where: MaterialHasImageWhereUniqueInput
    create: XOR<MaterialHasImageCreateWithoutImageInput, MaterialHasImageUncheckedCreateWithoutImageInput>
  }

  export type MaterialHasImageCreateManyImageInputEnvelope = {
    data: MaterialHasImageCreateManyImageInput | MaterialHasImageCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithWhereUniqueWithoutImageInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutImageInput, QuestionUncheckedUpdateWithoutImageInput>
    create: XOR<QuestionCreateWithoutImageInput, QuestionUncheckedCreateWithoutImageInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutImageInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutImageInput, QuestionUncheckedUpdateWithoutImageInput>
  }

  export type QuestionUpdateManyWithWhereWithoutImageInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutImageInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: IntFilter<"Question"> | number
    title?: StringFilter<"Question"> | string
    content?: StringFilter<"Question"> | string
    imageId?: IntNullableFilter<"Question"> | number | null
  }

  export type MaterialHasImageUpsertWithWhereUniqueWithoutImageInput = {
    where: MaterialHasImageWhereUniqueInput
    update: XOR<MaterialHasImageUpdateWithoutImageInput, MaterialHasImageUncheckedUpdateWithoutImageInput>
    create: XOR<MaterialHasImageCreateWithoutImageInput, MaterialHasImageUncheckedCreateWithoutImageInput>
  }

  export type MaterialHasImageUpdateWithWhereUniqueWithoutImageInput = {
    where: MaterialHasImageWhereUniqueInput
    data: XOR<MaterialHasImageUpdateWithoutImageInput, MaterialHasImageUncheckedUpdateWithoutImageInput>
  }

  export type MaterialHasImageUpdateManyWithWhereWithoutImageInput = {
    where: MaterialHasImageScalarWhereInput
    data: XOR<MaterialHasImageUpdateManyMutationInput, MaterialHasImageUncheckedUpdateManyWithoutImageInput>
  }

  export type MaterialHasImageScalarWhereInput = {
    AND?: MaterialHasImageScalarWhereInput | MaterialHasImageScalarWhereInput[]
    OR?: MaterialHasImageScalarWhereInput[]
    NOT?: MaterialHasImageScalarWhereInput | MaterialHasImageScalarWhereInput[]
    materialId?: IntFilter<"MaterialHasImage"> | number
    imageId?: IntFilter<"MaterialHasImage"> | number
  }

  export type ImageCreateWithoutQuestionsInput = {
    image: Uint8Array
    name: string
    created_at: Date | string
    materials?: MaterialHasImageCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutQuestionsInput = {
    id?: number
    image: Uint8Array
    name: string
    created_at: Date | string
    materials?: MaterialHasImageUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutQuestionsInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutQuestionsInput, ImageUncheckedCreateWithoutQuestionsInput>
  }

  export type AlternativeCreateWithoutQuestionInput = {
    content: string
    is_correct: boolean
  }

  export type AlternativeUncheckedCreateWithoutQuestionInput = {
    id?: number
    content: string
    is_correct: boolean
  }

  export type AlternativeCreateOrConnectWithoutQuestionInput = {
    where: AlternativeWhereUniqueInput
    create: XOR<AlternativeCreateWithoutQuestionInput, AlternativeUncheckedCreateWithoutQuestionInput>
  }

  export type AlternativeCreateManyQuestionInputEnvelope = {
    data: AlternativeCreateManyQuestionInput | AlternativeCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type UserQuestionCreateWithoutQuestionInput = {
    completed: boolean
    user: UserCreateNestedOneWithoutUserQuestionsInput
  }

  export type UserQuestionUncheckedCreateWithoutQuestionInput = {
    id?: number
    completed: boolean
    userId: string
  }

  export type UserQuestionCreateOrConnectWithoutQuestionInput = {
    where: UserQuestionWhereUniqueInput
    create: XOR<UserQuestionCreateWithoutQuestionInput, UserQuestionUncheckedCreateWithoutQuestionInput>
  }

  export type UserQuestionCreateManyQuestionInputEnvelope = {
    data: UserQuestionCreateManyQuestionInput | UserQuestionCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type QuestionHasMaterialCreateWithoutQuestionInput = {
    material: MaterialCreateNestedOneWithoutQuestionMaterialsInput
  }

  export type QuestionHasMaterialUncheckedCreateWithoutQuestionInput = {
    materialId: number
  }

  export type QuestionHasMaterialCreateOrConnectWithoutQuestionInput = {
    where: QuestionHasMaterialWhereUniqueInput
    create: XOR<QuestionHasMaterialCreateWithoutQuestionInput, QuestionHasMaterialUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionHasMaterialCreateManyQuestionInputEnvelope = {
    data: QuestionHasMaterialCreateManyQuestionInput | QuestionHasMaterialCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type ImageUpsertWithoutQuestionsInput = {
    update: XOR<ImageUpdateWithoutQuestionsInput, ImageUncheckedUpdateWithoutQuestionsInput>
    create: XOR<ImageCreateWithoutQuestionsInput, ImageUncheckedCreateWithoutQuestionsInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutQuestionsInput, ImageUncheckedUpdateWithoutQuestionsInput>
  }

  export type ImageUpdateWithoutQuestionsInput = {
    image?: BytesFieldUpdateOperationsInput | Uint8Array
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: MaterialHasImageUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: BytesFieldUpdateOperationsInput | Uint8Array
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    materials?: MaterialHasImageUncheckedUpdateManyWithoutImageNestedInput
  }

  export type AlternativeUpsertWithWhereUniqueWithoutQuestionInput = {
    where: AlternativeWhereUniqueInput
    update: XOR<AlternativeUpdateWithoutQuestionInput, AlternativeUncheckedUpdateWithoutQuestionInput>
    create: XOR<AlternativeCreateWithoutQuestionInput, AlternativeUncheckedCreateWithoutQuestionInput>
  }

  export type AlternativeUpdateWithWhereUniqueWithoutQuestionInput = {
    where: AlternativeWhereUniqueInput
    data: XOR<AlternativeUpdateWithoutQuestionInput, AlternativeUncheckedUpdateWithoutQuestionInput>
  }

  export type AlternativeUpdateManyWithWhereWithoutQuestionInput = {
    where: AlternativeScalarWhereInput
    data: XOR<AlternativeUpdateManyMutationInput, AlternativeUncheckedUpdateManyWithoutQuestionInput>
  }

  export type AlternativeScalarWhereInput = {
    AND?: AlternativeScalarWhereInput | AlternativeScalarWhereInput[]
    OR?: AlternativeScalarWhereInput[]
    NOT?: AlternativeScalarWhereInput | AlternativeScalarWhereInput[]
    id?: IntFilter<"Alternative"> | number
    content?: StringFilter<"Alternative"> | string
    is_correct?: BoolFilter<"Alternative"> | boolean
    questionsId?: IntFilter<"Alternative"> | number
  }

  export type UserQuestionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: UserQuestionWhereUniqueInput
    update: XOR<UserQuestionUpdateWithoutQuestionInput, UserQuestionUncheckedUpdateWithoutQuestionInput>
    create: XOR<UserQuestionCreateWithoutQuestionInput, UserQuestionUncheckedCreateWithoutQuestionInput>
  }

  export type UserQuestionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: UserQuestionWhereUniqueInput
    data: XOR<UserQuestionUpdateWithoutQuestionInput, UserQuestionUncheckedUpdateWithoutQuestionInput>
  }

  export type UserQuestionUpdateManyWithWhereWithoutQuestionInput = {
    where: UserQuestionScalarWhereInput
    data: XOR<UserQuestionUpdateManyMutationInput, UserQuestionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuestionHasMaterialUpsertWithWhereUniqueWithoutQuestionInput = {
    where: QuestionHasMaterialWhereUniqueInput
    update: XOR<QuestionHasMaterialUpdateWithoutQuestionInput, QuestionHasMaterialUncheckedUpdateWithoutQuestionInput>
    create: XOR<QuestionHasMaterialCreateWithoutQuestionInput, QuestionHasMaterialUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionHasMaterialUpdateWithWhereUniqueWithoutQuestionInput = {
    where: QuestionHasMaterialWhereUniqueInput
    data: XOR<QuestionHasMaterialUpdateWithoutQuestionInput, QuestionHasMaterialUncheckedUpdateWithoutQuestionInput>
  }

  export type QuestionHasMaterialUpdateManyWithWhereWithoutQuestionInput = {
    where: QuestionHasMaterialScalarWhereInput
    data: XOR<QuestionHasMaterialUpdateManyMutationInput, QuestionHasMaterialUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuestionHasMaterialScalarWhereInput = {
    AND?: QuestionHasMaterialScalarWhereInput | QuestionHasMaterialScalarWhereInput[]
    OR?: QuestionHasMaterialScalarWhereInput[]
    NOT?: QuestionHasMaterialScalarWhereInput | QuestionHasMaterialScalarWhereInput[]
    questionId?: IntFilter<"QuestionHasMaterial"> | number
    materialId?: IntFilter<"QuestionHasMaterial"> | number
  }

  export type QuestionCreateWithoutAlternativesInput = {
    title?: string
    content: string
    image?: ImageCreateNestedOneWithoutQuestionsInput
    userQuestions?: UserQuestionCreateNestedManyWithoutQuestionInput
    questionMaterials?: QuestionHasMaterialCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutAlternativesInput = {
    id?: number
    title?: string
    content: string
    imageId?: number | null
    userQuestions?: UserQuestionUncheckedCreateNestedManyWithoutQuestionInput
    questionMaterials?: QuestionHasMaterialUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutAlternativesInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutAlternativesInput, QuestionUncheckedCreateWithoutAlternativesInput>
  }

  export type QuestionUpsertWithoutAlternativesInput = {
    update: XOR<QuestionUpdateWithoutAlternativesInput, QuestionUncheckedUpdateWithoutAlternativesInput>
    create: XOR<QuestionCreateWithoutAlternativesInput, QuestionUncheckedCreateWithoutAlternativesInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutAlternativesInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutAlternativesInput, QuestionUncheckedUpdateWithoutAlternativesInput>
  }

  export type QuestionUpdateWithoutAlternativesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: ImageUpdateOneWithoutQuestionsNestedInput
    userQuestions?: UserQuestionUpdateManyWithoutQuestionNestedInput
    questionMaterials?: QuestionHasMaterialUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutAlternativesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    userQuestions?: UserQuestionUncheckedUpdateManyWithoutQuestionNestedInput
    questionMaterials?: QuestionHasMaterialUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type UserMaterialCreateWithoutMaterialInput = {
    completed: boolean
    user: UserCreateNestedOneWithoutUserMaterialsInput
  }

  export type UserMaterialUncheckedCreateWithoutMaterialInput = {
    id?: number
    completed: boolean
    userId: string
  }

  export type UserMaterialCreateOrConnectWithoutMaterialInput = {
    where: UserMaterialWhereUniqueInput
    create: XOR<UserMaterialCreateWithoutMaterialInput, UserMaterialUncheckedCreateWithoutMaterialInput>
  }

  export type UserMaterialCreateManyMaterialInputEnvelope = {
    data: UserMaterialCreateManyMaterialInput | UserMaterialCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type QuestionHasMaterialCreateWithoutMaterialInput = {
    question: QuestionCreateNestedOneWithoutQuestionMaterialsInput
  }

  export type QuestionHasMaterialUncheckedCreateWithoutMaterialInput = {
    questionId: number
  }

  export type QuestionHasMaterialCreateOrConnectWithoutMaterialInput = {
    where: QuestionHasMaterialWhereUniqueInput
    create: XOR<QuestionHasMaterialCreateWithoutMaterialInput, QuestionHasMaterialUncheckedCreateWithoutMaterialInput>
  }

  export type QuestionHasMaterialCreateManyMaterialInputEnvelope = {
    data: QuestionHasMaterialCreateManyMaterialInput | QuestionHasMaterialCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type MaterialHasImageCreateWithoutMaterialInput = {
    image: ImageCreateNestedOneWithoutMaterialsInput
  }

  export type MaterialHasImageUncheckedCreateWithoutMaterialInput = {
    imageId: number
  }

  export type MaterialHasImageCreateOrConnectWithoutMaterialInput = {
    where: MaterialHasImageWhereUniqueInput
    create: XOR<MaterialHasImageCreateWithoutMaterialInput, MaterialHasImageUncheckedCreateWithoutMaterialInput>
  }

  export type MaterialHasImageCreateManyMaterialInputEnvelope = {
    data: MaterialHasImageCreateManyMaterialInput | MaterialHasImageCreateManyMaterialInput[]
    skipDuplicates?: boolean
  }

  export type UserMaterialUpsertWithWhereUniqueWithoutMaterialInput = {
    where: UserMaterialWhereUniqueInput
    update: XOR<UserMaterialUpdateWithoutMaterialInput, UserMaterialUncheckedUpdateWithoutMaterialInput>
    create: XOR<UserMaterialCreateWithoutMaterialInput, UserMaterialUncheckedCreateWithoutMaterialInput>
  }

  export type UserMaterialUpdateWithWhereUniqueWithoutMaterialInput = {
    where: UserMaterialWhereUniqueInput
    data: XOR<UserMaterialUpdateWithoutMaterialInput, UserMaterialUncheckedUpdateWithoutMaterialInput>
  }

  export type UserMaterialUpdateManyWithWhereWithoutMaterialInput = {
    where: UserMaterialScalarWhereInput
    data: XOR<UserMaterialUpdateManyMutationInput, UserMaterialUncheckedUpdateManyWithoutMaterialInput>
  }

  export type QuestionHasMaterialUpsertWithWhereUniqueWithoutMaterialInput = {
    where: QuestionHasMaterialWhereUniqueInput
    update: XOR<QuestionHasMaterialUpdateWithoutMaterialInput, QuestionHasMaterialUncheckedUpdateWithoutMaterialInput>
    create: XOR<QuestionHasMaterialCreateWithoutMaterialInput, QuestionHasMaterialUncheckedCreateWithoutMaterialInput>
  }

  export type QuestionHasMaterialUpdateWithWhereUniqueWithoutMaterialInput = {
    where: QuestionHasMaterialWhereUniqueInput
    data: XOR<QuestionHasMaterialUpdateWithoutMaterialInput, QuestionHasMaterialUncheckedUpdateWithoutMaterialInput>
  }

  export type QuestionHasMaterialUpdateManyWithWhereWithoutMaterialInput = {
    where: QuestionHasMaterialScalarWhereInput
    data: XOR<QuestionHasMaterialUpdateManyMutationInput, QuestionHasMaterialUncheckedUpdateManyWithoutMaterialInput>
  }

  export type MaterialHasImageUpsertWithWhereUniqueWithoutMaterialInput = {
    where: MaterialHasImageWhereUniqueInput
    update: XOR<MaterialHasImageUpdateWithoutMaterialInput, MaterialHasImageUncheckedUpdateWithoutMaterialInput>
    create: XOR<MaterialHasImageCreateWithoutMaterialInput, MaterialHasImageUncheckedCreateWithoutMaterialInput>
  }

  export type MaterialHasImageUpdateWithWhereUniqueWithoutMaterialInput = {
    where: MaterialHasImageWhereUniqueInput
    data: XOR<MaterialHasImageUpdateWithoutMaterialInput, MaterialHasImageUncheckedUpdateWithoutMaterialInput>
  }

  export type MaterialHasImageUpdateManyWithWhereWithoutMaterialInput = {
    where: MaterialHasImageScalarWhereInput
    data: XOR<MaterialHasImageUpdateManyMutationInput, MaterialHasImageUncheckedUpdateManyWithoutMaterialInput>
  }

  export type UserCreateWithoutPresetsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    role?: $Enums.Role
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    userQuestions?: UserQuestionCreateNestedManyWithoutUserInput
    userMaterials?: UserMaterialCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPresetsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    role?: $Enums.Role
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    userQuestions?: UserQuestionUncheckedCreateNestedManyWithoutUserInput
    userMaterials?: UserMaterialUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPresetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPresetsInput, UserUncheckedCreateWithoutPresetsInput>
  }

  export type UserUpsertWithoutPresetsInput = {
    update: XOR<UserUpdateWithoutPresetsInput, UserUncheckedUpdateWithoutPresetsInput>
    create: XOR<UserCreateWithoutPresetsInput, UserUncheckedCreateWithoutPresetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPresetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPresetsInput, UserUncheckedUpdateWithoutPresetsInput>
  }

  export type UserUpdateWithoutPresetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    userQuestions?: UserQuestionUpdateManyWithoutUserNestedInput
    userMaterials?: UserMaterialUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPresetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    userQuestions?: UserQuestionUncheckedUpdateManyWithoutUserNestedInput
    userMaterials?: UserMaterialUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUserQuestionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    role?: $Enums.Role
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    userMaterials?: UserMaterialCreateNestedManyWithoutUserInput
    presets?: PresetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserQuestionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    role?: $Enums.Role
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    userMaterials?: UserMaterialUncheckedCreateNestedManyWithoutUserInput
    presets?: PresetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserQuestionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserQuestionsInput, UserUncheckedCreateWithoutUserQuestionsInput>
  }

  export type QuestionCreateWithoutUserQuestionsInput = {
    title?: string
    content: string
    image?: ImageCreateNestedOneWithoutQuestionsInput
    alternatives?: AlternativeCreateNestedManyWithoutQuestionInput
    questionMaterials?: QuestionHasMaterialCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutUserQuestionsInput = {
    id?: number
    title?: string
    content: string
    imageId?: number | null
    alternatives?: AlternativeUncheckedCreateNestedManyWithoutQuestionInput
    questionMaterials?: QuestionHasMaterialUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutUserQuestionsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutUserQuestionsInput, QuestionUncheckedCreateWithoutUserQuestionsInput>
  }

  export type UserUpsertWithoutUserQuestionsInput = {
    update: XOR<UserUpdateWithoutUserQuestionsInput, UserUncheckedUpdateWithoutUserQuestionsInput>
    create: XOR<UserCreateWithoutUserQuestionsInput, UserUncheckedCreateWithoutUserQuestionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserQuestionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserQuestionsInput, UserUncheckedUpdateWithoutUserQuestionsInput>
  }

  export type UserUpdateWithoutUserQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    userMaterials?: UserMaterialUpdateManyWithoutUserNestedInput
    presets?: PresetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    userMaterials?: UserMaterialUncheckedUpdateManyWithoutUserNestedInput
    presets?: PresetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuestionUpsertWithoutUserQuestionsInput = {
    update: XOR<QuestionUpdateWithoutUserQuestionsInput, QuestionUncheckedUpdateWithoutUserQuestionsInput>
    create: XOR<QuestionCreateWithoutUserQuestionsInput, QuestionUncheckedCreateWithoutUserQuestionsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutUserQuestionsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutUserQuestionsInput, QuestionUncheckedUpdateWithoutUserQuestionsInput>
  }

  export type QuestionUpdateWithoutUserQuestionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: ImageUpdateOneWithoutQuestionsNestedInput
    alternatives?: AlternativeUpdateManyWithoutQuestionNestedInput
    questionMaterials?: QuestionHasMaterialUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutUserQuestionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    alternatives?: AlternativeUncheckedUpdateManyWithoutQuestionNestedInput
    questionMaterials?: QuestionHasMaterialUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type UserCreateWithoutUserMaterialsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    role?: $Enums.Role
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    userQuestions?: UserQuestionCreateNestedManyWithoutUserInput
    presets?: PresetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserMaterialsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    password?: string | null
    role?: $Enums.Role
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    userQuestions?: UserQuestionUncheckedCreateNestedManyWithoutUserInput
    presets?: PresetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserMaterialsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserMaterialsInput, UserUncheckedCreateWithoutUserMaterialsInput>
  }

  export type MaterialCreateWithoutUserMaterialsInput = {
    title?: string
    content: string
    created_at: Date | string
    questionMaterials?: QuestionHasMaterialCreateNestedManyWithoutMaterialInput
    materialImages?: MaterialHasImageCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateWithoutUserMaterialsInput = {
    id?: number
    title?: string
    content: string
    created_at: Date | string
    questionMaterials?: QuestionHasMaterialUncheckedCreateNestedManyWithoutMaterialInput
    materialImages?: MaterialHasImageUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialCreateOrConnectWithoutUserMaterialsInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutUserMaterialsInput, MaterialUncheckedCreateWithoutUserMaterialsInput>
  }

  export type UserUpsertWithoutUserMaterialsInput = {
    update: XOR<UserUpdateWithoutUserMaterialsInput, UserUncheckedUpdateWithoutUserMaterialsInput>
    create: XOR<UserCreateWithoutUserMaterialsInput, UserUncheckedCreateWithoutUserMaterialsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserMaterialsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserMaterialsInput, UserUncheckedUpdateWithoutUserMaterialsInput>
  }

  export type UserUpdateWithoutUserMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    userQuestions?: UserQuestionUpdateManyWithoutUserNestedInput
    presets?: PresetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserMaterialsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    userQuestions?: UserQuestionUncheckedUpdateManyWithoutUserNestedInput
    presets?: PresetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MaterialUpsertWithoutUserMaterialsInput = {
    update: XOR<MaterialUpdateWithoutUserMaterialsInput, MaterialUncheckedUpdateWithoutUserMaterialsInput>
    create: XOR<MaterialCreateWithoutUserMaterialsInput, MaterialUncheckedCreateWithoutUserMaterialsInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutUserMaterialsInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutUserMaterialsInput, MaterialUncheckedUpdateWithoutUserMaterialsInput>
  }

  export type MaterialUpdateWithoutUserMaterialsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    questionMaterials?: QuestionHasMaterialUpdateManyWithoutMaterialNestedInput
    materialImages?: MaterialHasImageUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateWithoutUserMaterialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    questionMaterials?: QuestionHasMaterialUncheckedUpdateManyWithoutMaterialNestedInput
    materialImages?: MaterialHasImageUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type QuestionCreateWithoutQuestionMaterialsInput = {
    title?: string
    content: string
    image?: ImageCreateNestedOneWithoutQuestionsInput
    alternatives?: AlternativeCreateNestedManyWithoutQuestionInput
    userQuestions?: UserQuestionCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutQuestionMaterialsInput = {
    id?: number
    title?: string
    content: string
    imageId?: number | null
    alternatives?: AlternativeUncheckedCreateNestedManyWithoutQuestionInput
    userQuestions?: UserQuestionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutQuestionMaterialsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutQuestionMaterialsInput, QuestionUncheckedCreateWithoutQuestionMaterialsInput>
  }

  export type MaterialCreateWithoutQuestionMaterialsInput = {
    title?: string
    content: string
    created_at: Date | string
    userMaterials?: UserMaterialCreateNestedManyWithoutMaterialInput
    materialImages?: MaterialHasImageCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateWithoutQuestionMaterialsInput = {
    id?: number
    title?: string
    content: string
    created_at: Date | string
    userMaterials?: UserMaterialUncheckedCreateNestedManyWithoutMaterialInput
    materialImages?: MaterialHasImageUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialCreateOrConnectWithoutQuestionMaterialsInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutQuestionMaterialsInput, MaterialUncheckedCreateWithoutQuestionMaterialsInput>
  }

  export type QuestionUpsertWithoutQuestionMaterialsInput = {
    update: XOR<QuestionUpdateWithoutQuestionMaterialsInput, QuestionUncheckedUpdateWithoutQuestionMaterialsInput>
    create: XOR<QuestionCreateWithoutQuestionMaterialsInput, QuestionUncheckedCreateWithoutQuestionMaterialsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutQuestionMaterialsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutQuestionMaterialsInput, QuestionUncheckedUpdateWithoutQuestionMaterialsInput>
  }

  export type QuestionUpdateWithoutQuestionMaterialsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: ImageUpdateOneWithoutQuestionsNestedInput
    alternatives?: AlternativeUpdateManyWithoutQuestionNestedInput
    userQuestions?: UserQuestionUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutQuestionMaterialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageId?: NullableIntFieldUpdateOperationsInput | number | null
    alternatives?: AlternativeUncheckedUpdateManyWithoutQuestionNestedInput
    userQuestions?: UserQuestionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type MaterialUpsertWithoutQuestionMaterialsInput = {
    update: XOR<MaterialUpdateWithoutQuestionMaterialsInput, MaterialUncheckedUpdateWithoutQuestionMaterialsInput>
    create: XOR<MaterialCreateWithoutQuestionMaterialsInput, MaterialUncheckedCreateWithoutQuestionMaterialsInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutQuestionMaterialsInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutQuestionMaterialsInput, MaterialUncheckedUpdateWithoutQuestionMaterialsInput>
  }

  export type MaterialUpdateWithoutQuestionMaterialsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userMaterials?: UserMaterialUpdateManyWithoutMaterialNestedInput
    materialImages?: MaterialHasImageUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateWithoutQuestionMaterialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userMaterials?: UserMaterialUncheckedUpdateManyWithoutMaterialNestedInput
    materialImages?: MaterialHasImageUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialCreateWithoutMaterialImagesInput = {
    title?: string
    content: string
    created_at: Date | string
    userMaterials?: UserMaterialCreateNestedManyWithoutMaterialInput
    questionMaterials?: QuestionHasMaterialCreateNestedManyWithoutMaterialInput
  }

  export type MaterialUncheckedCreateWithoutMaterialImagesInput = {
    id?: number
    title?: string
    content: string
    created_at: Date | string
    userMaterials?: UserMaterialUncheckedCreateNestedManyWithoutMaterialInput
    questionMaterials?: QuestionHasMaterialUncheckedCreateNestedManyWithoutMaterialInput
  }

  export type MaterialCreateOrConnectWithoutMaterialImagesInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutMaterialImagesInput, MaterialUncheckedCreateWithoutMaterialImagesInput>
  }

  export type ImageCreateWithoutMaterialsInput = {
    image: Uint8Array
    name: string
    created_at: Date | string
    questions?: QuestionCreateNestedManyWithoutImageInput
  }

  export type ImageUncheckedCreateWithoutMaterialsInput = {
    id?: number
    image: Uint8Array
    name: string
    created_at: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImageCreateOrConnectWithoutMaterialsInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutMaterialsInput, ImageUncheckedCreateWithoutMaterialsInput>
  }

  export type MaterialUpsertWithoutMaterialImagesInput = {
    update: XOR<MaterialUpdateWithoutMaterialImagesInput, MaterialUncheckedUpdateWithoutMaterialImagesInput>
    create: XOR<MaterialCreateWithoutMaterialImagesInput, MaterialUncheckedCreateWithoutMaterialImagesInput>
    where?: MaterialWhereInput
  }

  export type MaterialUpdateToOneWithWhereWithoutMaterialImagesInput = {
    where?: MaterialWhereInput
    data: XOR<MaterialUpdateWithoutMaterialImagesInput, MaterialUncheckedUpdateWithoutMaterialImagesInput>
  }

  export type MaterialUpdateWithoutMaterialImagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userMaterials?: UserMaterialUpdateManyWithoutMaterialNestedInput
    questionMaterials?: QuestionHasMaterialUpdateManyWithoutMaterialNestedInput
  }

  export type MaterialUncheckedUpdateWithoutMaterialImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userMaterials?: UserMaterialUncheckedUpdateManyWithoutMaterialNestedInput
    questionMaterials?: QuestionHasMaterialUncheckedUpdateManyWithoutMaterialNestedInput
  }

  export type ImageUpsertWithoutMaterialsInput = {
    update: XOR<ImageUpdateWithoutMaterialsInput, ImageUncheckedUpdateWithoutMaterialsInput>
    create: XOR<ImageCreateWithoutMaterialsInput, ImageUncheckedCreateWithoutMaterialsInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutMaterialsInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutMaterialsInput, ImageUncheckedUpdateWithoutMaterialsInput>
  }

  export type ImageUpdateWithoutMaterialsInput = {
    image?: BytesFieldUpdateOperationsInput | Uint8Array
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutImageNestedInput
  }

  export type ImageUncheckedUpdateWithoutMaterialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: BytesFieldUpdateOperationsInput | Uint8Array
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutImageNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type UserQuestionCreateManyUserInput = {
    id?: number
    completed: boolean
    questionsId: number
  }

  export type UserMaterialCreateManyUserInput = {
    id?: number
    completed: boolean
    materialsId: number
  }

  export type PresetCreateManyUserInput = {
    id?: number
    content: JsonNullValueInput | InputJsonValue
    created_at: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserQuestionUpdateWithoutUserInput = {
    completed?: BoolFieldUpdateOperationsInput | boolean
    question?: QuestionUpdateOneRequiredWithoutUserQuestionsNestedInput
  }

  export type UserQuestionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    questionsId?: IntFieldUpdateOperationsInput | number
  }

  export type UserQuestionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    questionsId?: IntFieldUpdateOperationsInput | number
  }

  export type UserMaterialUpdateWithoutUserInput = {
    completed?: BoolFieldUpdateOperationsInput | boolean
    material?: MaterialUpdateOneRequiredWithoutUserMaterialsNestedInput
  }

  export type UserMaterialUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    materialsId?: IntFieldUpdateOperationsInput | number
  }

  export type UserMaterialUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    materialsId?: IntFieldUpdateOperationsInput | number
  }

  export type PresetUpdateWithoutUserInput = {
    content?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresetUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresetUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyImageInput = {
    id?: number
    title?: string
    content: string
  }

  export type MaterialHasImageCreateManyImageInput = {
    materialId: number
  }

  export type QuestionUpdateWithoutImageInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    alternatives?: AlternativeUpdateManyWithoutQuestionNestedInput
    userQuestions?: UserQuestionUpdateManyWithoutQuestionNestedInput
    questionMaterials?: QuestionHasMaterialUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    alternatives?: AlternativeUncheckedUpdateManyWithoutQuestionNestedInput
    userQuestions?: UserQuestionUncheckedUpdateManyWithoutQuestionNestedInput
    questionMaterials?: QuestionHasMaterialUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type MaterialHasImageUpdateWithoutImageInput = {
    material?: MaterialUpdateOneRequiredWithoutMaterialImagesNestedInput
  }

  export type MaterialHasImageUncheckedUpdateWithoutImageInput = {
    materialId?: IntFieldUpdateOperationsInput | number
  }

  export type MaterialHasImageUncheckedUpdateManyWithoutImageInput = {
    materialId?: IntFieldUpdateOperationsInput | number
  }

  export type AlternativeCreateManyQuestionInput = {
    id?: number
    content: string
    is_correct: boolean
  }

  export type UserQuestionCreateManyQuestionInput = {
    id?: number
    completed: boolean
    userId: string
  }

  export type QuestionHasMaterialCreateManyQuestionInput = {
    materialId: number
  }

  export type AlternativeUpdateWithoutQuestionInput = {
    content?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AlternativeUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AlternativeUncheckedUpdateManyWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    is_correct?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserQuestionUpdateWithoutQuestionInput = {
    completed?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUserQuestionsNestedInput
  }

  export type UserQuestionUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserQuestionUncheckedUpdateManyWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionHasMaterialUpdateWithoutQuestionInput = {
    material?: MaterialUpdateOneRequiredWithoutQuestionMaterialsNestedInput
  }

  export type QuestionHasMaterialUncheckedUpdateWithoutQuestionInput = {
    materialId?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionHasMaterialUncheckedUpdateManyWithoutQuestionInput = {
    materialId?: IntFieldUpdateOperationsInput | number
  }

  export type UserMaterialCreateManyMaterialInput = {
    id?: number
    completed: boolean
    userId: string
  }

  export type QuestionHasMaterialCreateManyMaterialInput = {
    questionId: number
  }

  export type MaterialHasImageCreateManyMaterialInput = {
    imageId: number
  }

  export type UserMaterialUpdateWithoutMaterialInput = {
    completed?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutUserMaterialsNestedInput
  }

  export type UserMaterialUncheckedUpdateWithoutMaterialInput = {
    id?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserMaterialUncheckedUpdateManyWithoutMaterialInput = {
    id?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionHasMaterialUpdateWithoutMaterialInput = {
    question?: QuestionUpdateOneRequiredWithoutQuestionMaterialsNestedInput
  }

  export type QuestionHasMaterialUncheckedUpdateWithoutMaterialInput = {
    questionId?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionHasMaterialUncheckedUpdateManyWithoutMaterialInput = {
    questionId?: IntFieldUpdateOperationsInput | number
  }

  export type MaterialHasImageUpdateWithoutMaterialInput = {
    image?: ImageUpdateOneRequiredWithoutMaterialsNestedInput
  }

  export type MaterialHasImageUncheckedUpdateWithoutMaterialInput = {
    imageId?: IntFieldUpdateOperationsInput | number
  }

  export type MaterialHasImageUncheckedUpdateManyWithoutMaterialInput = {
    imageId?: IntFieldUpdateOperationsInput | number
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