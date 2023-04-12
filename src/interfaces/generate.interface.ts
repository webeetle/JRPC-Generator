// eslint-disable-next-line node/no-missing-import
import {JSONSchema4} from 'json-schema'

interface RpcMethodParam {
    name: string;
    description: string;
    schema: JSONSchema4;
}

interface RpcMethodResult {
    name: string;
    description: string;
    schema: JSONSchema4;
}

interface RpcMethod {
    name: string;
    description: string;
    params: RpcMethodParam[];
    result: RpcMethodResult;
}

interface RpcServerInfo {
    name: string;
    description: string;
    version: string;
}

export interface RpcServer {
    version: string;
    info: RpcServerInfo;
    methods: RpcMethod[];
}
