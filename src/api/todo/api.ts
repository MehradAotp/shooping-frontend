/* tslint:disable */
/* eslint-disable */
/**
 * Shopping API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface CreateShopping
 */
export interface CreateShopping {
    /**
     * 
     * @type {string}
     * @memberof CreateShopping
     */
    'name': string;
    /**
     * 
     * @type {number}
     * @memberof CreateShopping
     */
    'price': number;
    /**
     * 
     * @type {string}
     * @memberof CreateShopping
     */
    'image': string;
}
/**
 * 
 * @export
 * @interface CreateUserInputDto
 */
export interface CreateUserInputDto {
    /**
     * 
     * @type {string}
     * @memberof CreateUserInputDto
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserInputDto
     */
    'password': string;
}
/**
 * 
 * @export
 * @interface CreateUserOutputDto
 */
export interface CreateUserOutputDto {
    /**
     * 
     * @type {string}
     * @memberof CreateUserOutputDto
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserOutputDto
     */
    'id': string;
}
/**
 * 
 * @export
 * @interface LoginInputDto
 */
export interface LoginInputDto {
    /**
     * 
     * @type {string}
     * @memberof LoginInputDto
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof LoginInputDto
     */
    'password': string;
}
/**
 * 
 * @export
 * @interface LoginUserOutputDto
 */
export interface LoginUserOutputDto {
    /**
     * 
     * @type {string}
     * @memberof LoginUserOutputDto
     */
    'message': string;
    /**
     * 
     * @type {string}
     * @memberof LoginUserOutputDto
     */
    'access_token': string;
}
/**
 * 
 * @export
 * @interface ShoppingOutput
 */
export interface ShoppingOutput {
    /**
     * 
     * @type {string}
     * @memberof ShoppingOutput
     */
    '_id': string;
    /**
     * 
     * @type {string}
     * @memberof ShoppingOutput
     */
    'name': string;
    /**
     * 
     * @type {number}
     * @memberof ShoppingOutput
     */
    'price': number;
    /**
     * 
     * @type {string}
     * @memberof ShoppingOutput
     */
    'image': string;
}
/**
 * 
 * @export
 * @interface UpdateShopping
 */
export interface UpdateShopping {
    /**
     * 
     * @type {string}
     * @memberof UpdateShopping
     */
    'name'?: string;
    /**
     * 
     * @type {number}
     * @memberof UpdateShopping
     */
    'price'?: number;
    /**
     * 
     * @type {string}
     * @memberof UpdateShopping
     */
    'image'?: string;
}

/**
 * AuthenticationApi - axios parameter creator
 * @export
 */
export const AuthenticationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {LoginInputDto} loginInputDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login: async (loginInputDto: LoginInputDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'loginInputDto' is not null or undefined
            assertParamExists('login', 'loginInputDto', loginInputDto)
            const localVarPath = `/auth/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(loginInputDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthenticationApi - functional programming interface
 * @export
 */
export const AuthenticationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthenticationApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {LoginInputDto} loginInputDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async login(loginInputDto: LoginInputDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LoginUserOutputDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.login(loginInputDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthenticationApi.login']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AuthenticationApi - factory interface
 * @export
 */
export const AuthenticationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthenticationApiFp(configuration)
    return {
        /**
         * 
         * @param {AuthenticationApiLoginRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login(requestParameters: AuthenticationApiLoginRequest, options?: RawAxiosRequestConfig): AxiosPromise<LoginUserOutputDto> {
            return localVarFp.login(requestParameters.loginInputDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for login operation in AuthenticationApi.
 * @export
 * @interface AuthenticationApiLoginRequest
 */
export interface AuthenticationApiLoginRequest {
    /**
     * 
     * @type {LoginInputDto}
     * @memberof AuthenticationApiLogin
     */
    readonly loginInputDto: LoginInputDto
}

/**
 * AuthenticationApi - object-oriented interface
 * @export
 * @class AuthenticationApi
 * @extends {BaseAPI}
 */
export class AuthenticationApi extends BaseAPI {
    /**
     * 
     * @param {AuthenticationApiLoginRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public login(requestParameters: AuthenticationApiLoginRequest, options?: RawAxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).login(requestParameters.loginInputDto, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * ShoppingApi - axios parameter creator
 * @export
 */
export const ShoppingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        _delete: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('_delete', 'id', id)
            const localVarPath = `/shopping/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {CreateShopping} createShopping 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create: async (createShopping: CreateShopping, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createShopping' is not null or undefined
            assertParamExists('create', 'createShopping', createShopping)
            const localVarPath = `/shopping`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createShopping, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAll: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/shopping`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findOne: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('findOne', 'id', id)
            const localVarPath = `/shopping/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} id 
         * @param {UpdateShopping} updateShopping 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update: async (id: string, updateShopping: UpdateShopping, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('update', 'id', id)
            // verify required parameter 'updateShopping' is not null or undefined
            assertParamExists('update', 'updateShopping', updateShopping)
            const localVarPath = `/shopping/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateShopping, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ShoppingApi - functional programming interface
 * @export
 */
export const ShoppingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ShoppingApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async _delete(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator._delete(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ShoppingApi._delete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {CreateShopping} createShopping 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create(createShopping: CreateShopping, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShoppingOutput>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.create(createShopping, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ShoppingApi.create']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findAll(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<ShoppingOutput>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findAll(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ShoppingApi.findAll']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findOne(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShoppingOutput>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findOne(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ShoppingApi.findOne']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} id 
         * @param {UpdateShopping} updateShopping 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async update(id: string, updateShopping: UpdateShopping, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ShoppingOutput>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.update(id, updateShopping, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ShoppingApi.update']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ShoppingApi - factory interface
 * @export
 */
export const ShoppingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ShoppingApiFp(configuration)
    return {
        /**
         * 
         * @param {ShoppingApiDeleteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        _delete(requestParameters: ShoppingApiDeleteRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp._delete(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {ShoppingApiCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create(requestParameters: ShoppingApiCreateRequest, options?: RawAxiosRequestConfig): AxiosPromise<ShoppingOutput> {
            return localVarFp.create(requestParameters.createShopping, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAll(options?: RawAxiosRequestConfig): AxiosPromise<Array<ShoppingOutput>> {
            return localVarFp.findAll(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {ShoppingApiFindOneRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findOne(requestParameters: ShoppingApiFindOneRequest, options?: RawAxiosRequestConfig): AxiosPromise<ShoppingOutput> {
            return localVarFp.findOne(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {ShoppingApiUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        update(requestParameters: ShoppingApiUpdateRequest, options?: RawAxiosRequestConfig): AxiosPromise<ShoppingOutput> {
            return localVarFp.update(requestParameters.id, requestParameters.updateShopping, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for _delete operation in ShoppingApi.
 * @export
 * @interface ShoppingApiDeleteRequest
 */
export interface ShoppingApiDeleteRequest {
    /**
     * 
     * @type {string}
     * @memberof ShoppingApiDelete
     */
    readonly id: string
}

/**
 * Request parameters for create operation in ShoppingApi.
 * @export
 * @interface ShoppingApiCreateRequest
 */
export interface ShoppingApiCreateRequest {
    /**
     * 
     * @type {CreateShopping}
     * @memberof ShoppingApiCreate
     */
    readonly createShopping: CreateShopping
}

/**
 * Request parameters for findOne operation in ShoppingApi.
 * @export
 * @interface ShoppingApiFindOneRequest
 */
export interface ShoppingApiFindOneRequest {
    /**
     * 
     * @type {string}
     * @memberof ShoppingApiFindOne
     */
    readonly id: string
}

/**
 * Request parameters for update operation in ShoppingApi.
 * @export
 * @interface ShoppingApiUpdateRequest
 */
export interface ShoppingApiUpdateRequest {
    /**
     * 
     * @type {string}
     * @memberof ShoppingApiUpdate
     */
    readonly id: string

    /**
     * 
     * @type {UpdateShopping}
     * @memberof ShoppingApiUpdate
     */
    readonly updateShopping: UpdateShopping
}

/**
 * ShoppingApi - object-oriented interface
 * @export
 * @class ShoppingApi
 * @extends {BaseAPI}
 */
export class ShoppingApi extends BaseAPI {
    /**
     * 
     * @param {ShoppingApiDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShoppingApi
     */
    public _delete(requestParameters: ShoppingApiDeleteRequest, options?: RawAxiosRequestConfig) {
        return ShoppingApiFp(this.configuration)._delete(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {ShoppingApiCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShoppingApi
     */
    public create(requestParameters: ShoppingApiCreateRequest, options?: RawAxiosRequestConfig) {
        return ShoppingApiFp(this.configuration).create(requestParameters.createShopping, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShoppingApi
     */
    public findAll(options?: RawAxiosRequestConfig) {
        return ShoppingApiFp(this.configuration).findAll(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {ShoppingApiFindOneRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShoppingApi
     */
    public findOne(requestParameters: ShoppingApiFindOneRequest, options?: RawAxiosRequestConfig) {
        return ShoppingApiFp(this.configuration).findOne(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {ShoppingApiUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShoppingApi
     */
    public update(requestParameters: ShoppingApiUpdateRequest, options?: RawAxiosRequestConfig) {
        return ShoppingApiFp(this.configuration).update(requestParameters.id, requestParameters.updateShopping, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CreateUserInputDto} createUserInputDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        register: async (createUserInputDto: CreateUserInputDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createUserInputDto' is not null or undefined
            assertParamExists('register', 'createUserInputDto', createUserInputDto)
            const localVarPath = `/users/register`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createUserInputDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {CreateUserInputDto} createUserInputDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async register(createUserInputDto: CreateUserInputDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateUserOutputDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.register(createUserInputDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.register']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersApiFp(configuration)
    return {
        /**
         * 
         * @param {UsersApiRegisterRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        register(requestParameters: UsersApiRegisterRequest, options?: RawAxiosRequestConfig): AxiosPromise<CreateUserOutputDto> {
            return localVarFp.register(requestParameters.createUserInputDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for register operation in UsersApi.
 * @export
 * @interface UsersApiRegisterRequest
 */
export interface UsersApiRegisterRequest {
    /**
     * 
     * @type {CreateUserInputDto}
     * @memberof UsersApiRegister
     */
    readonly createUserInputDto: CreateUserInputDto
}

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * 
     * @param {UsersApiRegisterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public register(requestParameters: UsersApiRegisterRequest, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).register(requestParameters.createUserInputDto, options).then((request) => request(this.axios, this.basePath));
    }
}



