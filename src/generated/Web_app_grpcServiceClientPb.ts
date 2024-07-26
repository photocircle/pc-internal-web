/**
 * @fileoverview gRPC-Web generated client stub for grpc_web
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as web_app_grpc_pb from './web_app_grpc_pb';


export class PhotoCircleWebClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorLoginWithEmailPassword = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/LoginWithEmailPassword',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.LoginWithEmailPasswordRequest,
    web_app_grpc_pb.AuthenticationResponse,
    (request: web_app_grpc_pb.LoginWithEmailPasswordRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.AuthenticationResponse.deserializeBinary
  );

  loginWithEmailPassword(
    request: web_app_grpc_pb.LoginWithEmailPasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.AuthenticationResponse>;

  loginWithEmailPassword(
    request: web_app_grpc_pb.LoginWithEmailPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.AuthenticationResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.AuthenticationResponse>;

  loginWithEmailPassword(
    request: web_app_grpc_pb.LoginWithEmailPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.AuthenticationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/LoginWithEmailPassword',
        request,
        metadata || {},
        this.methodDescriptorLoginWithEmailPassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/LoginWithEmailPassword',
    request,
    metadata || {},
    this.methodDescriptorLoginWithEmailPassword);
  }

  methodDescriptorLoginWithToken = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/LoginWithToken',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.LoginWithTokenRequest,
    web_app_grpc_pb.AuthenticationResponse,
    (request: web_app_grpc_pb.LoginWithTokenRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.AuthenticationResponse.deserializeBinary
  );

  loginWithToken(
    request: web_app_grpc_pb.LoginWithTokenRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.AuthenticationResponse>;

  loginWithToken(
    request: web_app_grpc_pb.LoginWithTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.AuthenticationResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.AuthenticationResponse>;

  loginWithToken(
    request: web_app_grpc_pb.LoginWithTokenRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.AuthenticationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/LoginWithToken',
        request,
        metadata || {},
        this.methodDescriptorLoginWithToken,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/LoginWithToken',
    request,
    metadata || {},
    this.methodDescriptorLoginWithToken);
  }

  methodDescriptorRegister = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/Register',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.RegisterRequest,
    web_app_grpc_pb.AuthenticationResponse,
    (request: web_app_grpc_pb.RegisterRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.AuthenticationResponse.deserializeBinary
  );

  register(
    request: web_app_grpc_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.AuthenticationResponse>;

  register(
    request: web_app_grpc_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.AuthenticationResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.AuthenticationResponse>;

  register(
    request: web_app_grpc_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.AuthenticationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/Register',
        request,
        metadata || {},
        this.methodDescriptorRegister,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/Register',
    request,
    metadata || {},
    this.methodDescriptorRegister);
  }

  methodDescriptorForgotPassword = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/ForgotPassword',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.ForgotPasswordRequest,
    web_app_grpc_pb.ForgotPasswordResponse,
    (request: web_app_grpc_pb.ForgotPasswordRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.ForgotPasswordResponse.deserializeBinary
  );

  forgotPassword(
    request: web_app_grpc_pb.ForgotPasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.ForgotPasswordResponse>;

  forgotPassword(
    request: web_app_grpc_pb.ForgotPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.ForgotPasswordResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.ForgotPasswordResponse>;

  forgotPassword(
    request: web_app_grpc_pb.ForgotPasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.ForgotPasswordResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/ForgotPassword',
        request,
        metadata || {},
        this.methodDescriptorForgotPassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/ForgotPassword',
    request,
    metadata || {},
    this.methodDescriptorForgotPassword);
  }

  methodDescriptorLogout = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/Logout',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.LogoutRequest,
    web_app_grpc_pb.LogoutResponse,
    (request: web_app_grpc_pb.LogoutRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.LogoutResponse.deserializeBinary
  );

  logout(
    request: web_app_grpc_pb.LogoutRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.LogoutResponse>;

  logout(
    request: web_app_grpc_pb.LogoutRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.LogoutResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.LogoutResponse>;

  logout(
    request: web_app_grpc_pb.LogoutRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.LogoutResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/Logout',
        request,
        metadata || {},
        this.methodDescriptorLogout,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/Logout',
    request,
    metadata || {},
    this.methodDescriptorLogout);
  }

  methodDescriptorGetJoinPageData = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/GetJoinPageData',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.GetJoinPageDataRequest,
    web_app_grpc_pb.GetJoinPageDataResponse,
    (request: web_app_grpc_pb.GetJoinPageDataRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.GetJoinPageDataResponse.deserializeBinary
  );

  getJoinPageData(
    request: web_app_grpc_pb.GetJoinPageDataRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.GetJoinPageDataResponse>;

  getJoinPageData(
    request: web_app_grpc_pb.GetJoinPageDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetJoinPageDataResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.GetJoinPageDataResponse>;

  getJoinPageData(
    request: web_app_grpc_pb.GetJoinPageDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetJoinPageDataResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/GetJoinPageData',
        request,
        metadata || {},
        this.methodDescriptorGetJoinPageData,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/GetJoinPageData',
    request,
    metadata || {},
    this.methodDescriptorGetJoinPageData);
  }

  methodDescriptorGetCurrentUserInfo = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/GetCurrentUserInfo',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.GetCurrentUserInfoRequest,
    web_app_grpc_pb.GetCurrentUserInfoResponse,
    (request: web_app_grpc_pb.GetCurrentUserInfoRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.GetCurrentUserInfoResponse.deserializeBinary
  );

  getCurrentUserInfo(
    request: web_app_grpc_pb.GetCurrentUserInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.GetCurrentUserInfoResponse>;

  getCurrentUserInfo(
    request: web_app_grpc_pb.GetCurrentUserInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetCurrentUserInfoResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.GetCurrentUserInfoResponse>;

  getCurrentUserInfo(
    request: web_app_grpc_pb.GetCurrentUserInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetCurrentUserInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/GetCurrentUserInfo',
        request,
        metadata || {},
        this.methodDescriptorGetCurrentUserInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/GetCurrentUserInfo',
    request,
    metadata || {},
    this.methodDescriptorGetCurrentUserInfo);
  }

  methodDescriptorGetCircles = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/GetCircles',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.GetCirclesRequest,
    web_app_grpc_pb.GetCirclesResponse,
    (request: web_app_grpc_pb.GetCirclesRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.GetCirclesResponse.deserializeBinary
  );

  getCircles(
    request: web_app_grpc_pb.GetCirclesRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.GetCirclesResponse>;

  getCircles(
    request: web_app_grpc_pb.GetCirclesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetCirclesResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.GetCirclesResponse>;

  getCircles(
    request: web_app_grpc_pb.GetCirclesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetCirclesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/GetCircles',
        request,
        metadata || {},
        this.methodDescriptorGetCircles,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/GetCircles',
    request,
    metadata || {},
    this.methodDescriptorGetCircles);
  }

  methodDescriptorGetCircleData = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/GetCircleData',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.GetCircleDataRequest,
    web_app_grpc_pb.GetCircleDataResponse,
    (request: web_app_grpc_pb.GetCircleDataRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.GetCircleDataResponse.deserializeBinary
  );

  getCircleData(
    request: web_app_grpc_pb.GetCircleDataRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.GetCircleDataResponse>;

  getCircleData(
    request: web_app_grpc_pb.GetCircleDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetCircleDataResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.GetCircleDataResponse>;

  getCircleData(
    request: web_app_grpc_pb.GetCircleDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetCircleDataResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/GetCircleData',
        request,
        metadata || {},
        this.methodDescriptorGetCircleData,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/GetCircleData',
    request,
    metadata || {},
    this.methodDescriptorGetCircleData);
  }

  methodDescriptorGetReactionsForMedia = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/GetReactionsForMedia',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.GetReactionsForMediaRequest,
    web_app_grpc_pb.GetReactionsForMediaResponse,
    (request: web_app_grpc_pb.GetReactionsForMediaRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.GetReactionsForMediaResponse.deserializeBinary
  );

  getReactionsForMedia(
    request: web_app_grpc_pb.GetReactionsForMediaRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.GetReactionsForMediaResponse>;

  getReactionsForMedia(
    request: web_app_grpc_pb.GetReactionsForMediaRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetReactionsForMediaResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.GetReactionsForMediaResponse>;

  getReactionsForMedia(
    request: web_app_grpc_pb.GetReactionsForMediaRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetReactionsForMediaResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/GetReactionsForMedia',
        request,
        metadata || {},
        this.methodDescriptorGetReactionsForMedia,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/GetReactionsForMedia',
    request,
    metadata || {},
    this.methodDescriptorGetReactionsForMedia);
  }

  methodDescriptorGetCommentsForMedia = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/GetCommentsForMedia',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.GetCommentsForMediaRequest,
    web_app_grpc_pb.GetCommentsForMediaResponse,
    (request: web_app_grpc_pb.GetCommentsForMediaRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.GetCommentsForMediaResponse.deserializeBinary
  );

  getCommentsForMedia(
    request: web_app_grpc_pb.GetCommentsForMediaRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.GetCommentsForMediaResponse>;

  getCommentsForMedia(
    request: web_app_grpc_pb.GetCommentsForMediaRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetCommentsForMediaResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.GetCommentsForMediaResponse>;

  getCommentsForMedia(
    request: web_app_grpc_pb.GetCommentsForMediaRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetCommentsForMediaResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/GetCommentsForMedia',
        request,
        metadata || {},
        this.methodDescriptorGetCommentsForMedia,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/GetCommentsForMedia',
    request,
    metadata || {},
    this.methodDescriptorGetCommentsForMedia);
  }

  methodDescriptorGetInvite = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/GetInvite',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.GetInviteRequest,
    web_app_grpc_pb.GetInviteResponse,
    (request: web_app_grpc_pb.GetInviteRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.GetInviteResponse.deserializeBinary
  );

  getInvite(
    request: web_app_grpc_pb.GetInviteRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.GetInviteResponse>;

  getInvite(
    request: web_app_grpc_pb.GetInviteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetInviteResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.GetInviteResponse>;

  getInvite(
    request: web_app_grpc_pb.GetInviteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetInviteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/GetInvite',
        request,
        metadata || {},
        this.methodDescriptorGetInvite,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/GetInvite',
    request,
    metadata || {},
    this.methodDescriptorGetInvite);
  }

  methodDescriptorGetInviteInformation = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/GetInviteInformation',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.GetInviteInformationRequest,
    web_app_grpc_pb.GetInviteInformationResponse,
    (request: web_app_grpc_pb.GetInviteInformationRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.GetInviteInformationResponse.deserializeBinary
  );

  getInviteInformation(
    request: web_app_grpc_pb.GetInviteInformationRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.GetInviteInformationResponse>;

  getInviteInformation(
    request: web_app_grpc_pb.GetInviteInformationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetInviteInformationResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.GetInviteInformationResponse>;

  getInviteInformation(
    request: web_app_grpc_pb.GetInviteInformationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetInviteInformationResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/GetInviteInformation',
        request,
        metadata || {},
        this.methodDescriptorGetInviteInformation,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/GetInviteInformation',
    request,
    metadata || {},
    this.methodDescriptorGetInviteInformation);
  }

  methodDescriptorGetCircleDownloadURL = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/GetCircleDownloadURL',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.GetCircleDownloadURLRequest,
    web_app_grpc_pb.GetCircleDownloadURLResponse,
    (request: web_app_grpc_pb.GetCircleDownloadURLRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.GetCircleDownloadURLResponse.deserializeBinary
  );

  getCircleDownloadURL(
    request: web_app_grpc_pb.GetCircleDownloadURLRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.GetCircleDownloadURLResponse>;

  getCircleDownloadURL(
    request: web_app_grpc_pb.GetCircleDownloadURLRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetCircleDownloadURLResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.GetCircleDownloadURLResponse>;

  getCircleDownloadURL(
    request: web_app_grpc_pb.GetCircleDownloadURLRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetCircleDownloadURLResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/GetCircleDownloadURL',
        request,
        metadata || {},
        this.methodDescriptorGetCircleDownloadURL,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/GetCircleDownloadURL',
    request,
    metadata || {},
    this.methodDescriptorGetCircleDownloadURL);
  }

  methodDescriptorGetGroupCircles = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/GetGroupCircles',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.GetGroupCirclesRequest,
    web_app_grpc_pb.GetGroupCirclesResponse,
    (request: web_app_grpc_pb.GetGroupCirclesRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.GetGroupCirclesResponse.deserializeBinary
  );

  getGroupCircles(
    request: web_app_grpc_pb.GetGroupCirclesRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.GetGroupCirclesResponse>;

  getGroupCircles(
    request: web_app_grpc_pb.GetGroupCirclesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetGroupCirclesResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.GetGroupCirclesResponse>;

  getGroupCircles(
    request: web_app_grpc_pb.GetGroupCirclesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetGroupCirclesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/GetGroupCircles',
        request,
        metadata || {},
        this.methodDescriptorGetGroupCircles,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/GetGroupCircles',
    request,
    metadata || {},
    this.methodDescriptorGetGroupCircles);
  }

  methodDescriptorGetViewableGroups = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/GetViewableGroups',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.GetViewableGroupsRequest,
    web_app_grpc_pb.GetViewableGroupsResponse,
    (request: web_app_grpc_pb.GetViewableGroupsRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.GetViewableGroupsResponse.deserializeBinary
  );

  getViewableGroups(
    request: web_app_grpc_pb.GetViewableGroupsRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.GetViewableGroupsResponse>;

  getViewableGroups(
    request: web_app_grpc_pb.GetViewableGroupsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetViewableGroupsResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.GetViewableGroupsResponse>;

  getViewableGroups(
    request: web_app_grpc_pb.GetViewableGroupsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetViewableGroupsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/GetViewableGroups',
        request,
        metadata || {},
        this.methodDescriptorGetViewableGroups,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/GetViewableGroups',
    request,
    metadata || {},
    this.methodDescriptorGetViewableGroups);
  }

  methodDescriptorCreateCircle = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/CreateCircle',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.CreateCircleRequest,
    web_app_grpc_pb.CreateCircleResponse,
    (request: web_app_grpc_pb.CreateCircleRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.CreateCircleResponse.deserializeBinary
  );

  createCircle(
    request: web_app_grpc_pb.CreateCircleRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.CreateCircleResponse>;

  createCircle(
    request: web_app_grpc_pb.CreateCircleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.CreateCircleResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.CreateCircleResponse>;

  createCircle(
    request: web_app_grpc_pb.CreateCircleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.CreateCircleResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/CreateCircle',
        request,
        metadata || {},
        this.methodDescriptorCreateCircle,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/CreateCircle',
    request,
    metadata || {},
    this.methodDescriptorCreateCircle);
  }

  methodDescriptorAddComment = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/AddComment',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.AddCommentRequest,
    web_app_grpc_pb.AddCommentResponse,
    (request: web_app_grpc_pb.AddCommentRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.AddCommentResponse.deserializeBinary
  );

  addComment(
    request: web_app_grpc_pb.AddCommentRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.AddCommentResponse>;

  addComment(
    request: web_app_grpc_pb.AddCommentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.AddCommentResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.AddCommentResponse>;

  addComment(
    request: web_app_grpc_pb.AddCommentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.AddCommentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/AddComment',
        request,
        metadata || {},
        this.methodDescriptorAddComment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/AddComment',
    request,
    metadata || {},
    this.methodDescriptorAddComment);
  }

  methodDescriptorRemoveComment = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/RemoveComment',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.RemoveCommentRequest,
    web_app_grpc_pb.RemoveCommentResponse,
    (request: web_app_grpc_pb.RemoveCommentRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.RemoveCommentResponse.deserializeBinary
  );

  removeComment(
    request: web_app_grpc_pb.RemoveCommentRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.RemoveCommentResponse>;

  removeComment(
    request: web_app_grpc_pb.RemoveCommentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.RemoveCommentResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.RemoveCommentResponse>;

  removeComment(
    request: web_app_grpc_pb.RemoveCommentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.RemoveCommentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/RemoveComment',
        request,
        metadata || {},
        this.methodDescriptorRemoveComment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/RemoveComment',
    request,
    metadata || {},
    this.methodDescriptorRemoveComment);
  }

  methodDescriptorRemoveMember = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/RemoveMember',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.RemoveMemberRequest,
    web_app_grpc_pb.RemoveMemberResponse,
    (request: web_app_grpc_pb.RemoveMemberRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.RemoveMemberResponse.deserializeBinary
  );

  removeMember(
    request: web_app_grpc_pb.RemoveMemberRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.RemoveMemberResponse>;

  removeMember(
    request: web_app_grpc_pb.RemoveMemberRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.RemoveMemberResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.RemoveMemberResponse>;

  removeMember(
    request: web_app_grpc_pb.RemoveMemberRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.RemoveMemberResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/RemoveMember',
        request,
        metadata || {},
        this.methodDescriptorRemoveMember,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/RemoveMember',
    request,
    metadata || {},
    this.methodDescriptorRemoveMember);
  }

  methodDescriptorUpdateCircleTitle = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/UpdateCircleTitle',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.UpdateCircleTitleRequest,
    web_app_grpc_pb.UpdateCircleTitleResponse,
    (request: web_app_grpc_pb.UpdateCircleTitleRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.UpdateCircleTitleResponse.deserializeBinary
  );

  updateCircleTitle(
    request: web_app_grpc_pb.UpdateCircleTitleRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.UpdateCircleTitleResponse>;

  updateCircleTitle(
    request: web_app_grpc_pb.UpdateCircleTitleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.UpdateCircleTitleResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.UpdateCircleTitleResponse>;

  updateCircleTitle(
    request: web_app_grpc_pb.UpdateCircleTitleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.UpdateCircleTitleResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/UpdateCircleTitle',
        request,
        metadata || {},
        this.methodDescriptorUpdateCircleTitle,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/UpdateCircleTitle',
    request,
    metadata || {},
    this.methodDescriptorUpdateCircleTitle);
  }

  methodDescriptorRemoveMedia = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/RemoveMedia',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.RemoveMediaRequest,
    web_app_grpc_pb.RemoveMediaResponse,
    (request: web_app_grpc_pb.RemoveMediaRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.RemoveMediaResponse.deserializeBinary
  );

  removeMedia(
    request: web_app_grpc_pb.RemoveMediaRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.RemoveMediaResponse>;

  removeMedia(
    request: web_app_grpc_pb.RemoveMediaRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.RemoveMediaResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.RemoveMediaResponse>;

  removeMedia(
    request: web_app_grpc_pb.RemoveMediaRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.RemoveMediaResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/RemoveMedia',
        request,
        metadata || {},
        this.methodDescriptorRemoveMedia,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/RemoveMedia',
    request,
    metadata || {},
    this.methodDescriptorRemoveMedia);
  }

  methodDescriptorRemoveMediaBatch = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/RemoveMediaBatch',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.RemoveMediaBatchRequest,
    web_app_grpc_pb.RemoveMediaBatchResponse,
    (request: web_app_grpc_pb.RemoveMediaBatchRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.RemoveMediaBatchResponse.deserializeBinary
  );

  removeMediaBatch(
    request: web_app_grpc_pb.RemoveMediaBatchRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.RemoveMediaBatchResponse>;

  removeMediaBatch(
    request: web_app_grpc_pb.RemoveMediaBatchRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.RemoveMediaBatchResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.RemoveMediaBatchResponse>;

  removeMediaBatch(
    request: web_app_grpc_pb.RemoveMediaBatchRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.RemoveMediaBatchResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/RemoveMediaBatch',
        request,
        metadata || {},
        this.methodDescriptorRemoveMediaBatch,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/RemoveMediaBatch',
    request,
    metadata || {},
    this.methodDescriptorRemoveMediaBatch);
  }

  methodDescriptorReorderCircleMedia = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/ReorderCircleMedia',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.ReorderCircleMediaRequest,
    web_app_grpc_pb.ReorderCircleMediaResponse,
    (request: web_app_grpc_pb.ReorderCircleMediaRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.ReorderCircleMediaResponse.deserializeBinary
  );

  reorderCircleMedia(
    request: web_app_grpc_pb.ReorderCircleMediaRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.ReorderCircleMediaResponse>;

  reorderCircleMedia(
    request: web_app_grpc_pb.ReorderCircleMediaRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.ReorderCircleMediaResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.ReorderCircleMediaResponse>;

  reorderCircleMedia(
    request: web_app_grpc_pb.ReorderCircleMediaRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.ReorderCircleMediaResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/ReorderCircleMedia',
        request,
        metadata || {},
        this.methodDescriptorReorderCircleMedia,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/ReorderCircleMedia',
    request,
    metadata || {},
    this.methodDescriptorReorderCircleMedia);
  }

  methodDescriptorUpdateMediaCaption = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/UpdateMediaCaption',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.UpdateMediaCaptionRequest,
    web_app_grpc_pb.UpdateMediaCaptionResponse,
    (request: web_app_grpc_pb.UpdateMediaCaptionRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.UpdateMediaCaptionResponse.deserializeBinary
  );

  updateMediaCaption(
    request: web_app_grpc_pb.UpdateMediaCaptionRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.UpdateMediaCaptionResponse>;

  updateMediaCaption(
    request: web_app_grpc_pb.UpdateMediaCaptionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.UpdateMediaCaptionResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.UpdateMediaCaptionResponse>;

  updateMediaCaption(
    request: web_app_grpc_pb.UpdateMediaCaptionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.UpdateMediaCaptionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/UpdateMediaCaption',
        request,
        metadata || {},
        this.methodDescriptorUpdateMediaCaption,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/UpdateMediaCaption',
    request,
    metadata || {},
    this.methodDescriptorUpdateMediaCaption);
  }

  methodDescriptorSetReaction = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/SetReaction',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.SetReactionRequest,
    web_app_grpc_pb.SetReactionResponse,
    (request: web_app_grpc_pb.SetReactionRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.SetReactionResponse.deserializeBinary
  );

  setReaction(
    request: web_app_grpc_pb.SetReactionRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.SetReactionResponse>;

  setReaction(
    request: web_app_grpc_pb.SetReactionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.SetReactionResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.SetReactionResponse>;

  setReaction(
    request: web_app_grpc_pb.SetReactionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.SetReactionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/SetReaction',
        request,
        metadata || {},
        this.methodDescriptorSetReaction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/SetReaction',
    request,
    metadata || {},
    this.methodDescriptorSetReaction);
  }

  methodDescriptorSetCircleCoverPhoto = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/SetCircleCoverPhoto',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.SetCircleCoverPhotoRequest,
    web_app_grpc_pb.SetCircleCoverPhotoResponse,
    (request: web_app_grpc_pb.SetCircleCoverPhotoRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.SetCircleCoverPhotoResponse.deserializeBinary
  );

  setCircleCoverPhoto(
    request: web_app_grpc_pb.SetCircleCoverPhotoRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.SetCircleCoverPhotoResponse>;

  setCircleCoverPhoto(
    request: web_app_grpc_pb.SetCircleCoverPhotoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.SetCircleCoverPhotoResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.SetCircleCoverPhotoResponse>;

  setCircleCoverPhoto(
    request: web_app_grpc_pb.SetCircleCoverPhotoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.SetCircleCoverPhotoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/SetCircleCoverPhoto',
        request,
        metadata || {},
        this.methodDescriptorSetCircleCoverPhoto,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/SetCircleCoverPhoto',
    request,
    metadata || {},
    this.methodDescriptorSetCircleCoverPhoto);
  }

  methodDescriptorSetCirclePushPreference = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/SetCirclePushPreference',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.SetCirclePushPreferenceRequest,
    web_app_grpc_pb.SetCirclePushPreferenceResponse,
    (request: web_app_grpc_pb.SetCirclePushPreferenceRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.SetCirclePushPreferenceResponse.deserializeBinary
  );

  setCirclePushPreference(
    request: web_app_grpc_pb.SetCirclePushPreferenceRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.SetCirclePushPreferenceResponse>;

  setCirclePushPreference(
    request: web_app_grpc_pb.SetCirclePushPreferenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.SetCirclePushPreferenceResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.SetCirclePushPreferenceResponse>;

  setCirclePushPreference(
    request: web_app_grpc_pb.SetCirclePushPreferenceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.SetCirclePushPreferenceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/SetCirclePushPreference',
        request,
        metadata || {},
        this.methodDescriptorSetCirclePushPreference,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/SetCirclePushPreference',
    request,
    metadata || {},
    this.methodDescriptorSetCirclePushPreference);
  }

  methodDescriptorJoinGroupCircle = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/JoinGroupCircle',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.JoinGroupCircleRequest,
    web_app_grpc_pb.JoinGroupCircleResponse,
    (request: web_app_grpc_pb.JoinGroupCircleRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.JoinGroupCircleResponse.deserializeBinary
  );

  joinGroupCircle(
    request: web_app_grpc_pb.JoinGroupCircleRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.JoinGroupCircleResponse>;

  joinGroupCircle(
    request: web_app_grpc_pb.JoinGroupCircleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.JoinGroupCircleResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.JoinGroupCircleResponse>;

  joinGroupCircle(
    request: web_app_grpc_pb.JoinGroupCircleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.JoinGroupCircleResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/JoinGroupCircle',
        request,
        metadata || {},
        this.methodDescriptorJoinGroupCircle,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/JoinGroupCircle',
    request,
    metadata || {},
    this.methodDescriptorJoinGroupCircle);
  }

  methodDescriptorJoinCircleByShareCode = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/JoinCircleByShareCode',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.JoinCircleByShareCodeRequest,
    web_app_grpc_pb.JoinCircleByShareCodeResponse,
    (request: web_app_grpc_pb.JoinCircleByShareCodeRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.JoinCircleByShareCodeResponse.deserializeBinary
  );

  joinCircleByShareCode(
    request: web_app_grpc_pb.JoinCircleByShareCodeRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.JoinCircleByShareCodeResponse>;

  joinCircleByShareCode(
    request: web_app_grpc_pb.JoinCircleByShareCodeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.JoinCircleByShareCodeResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.JoinCircleByShareCodeResponse>;

  joinCircleByShareCode(
    request: web_app_grpc_pb.JoinCircleByShareCodeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.JoinCircleByShareCodeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/JoinCircleByShareCode',
        request,
        metadata || {},
        this.methodDescriptorJoinCircleByShareCode,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/JoinCircleByShareCode',
    request,
    metadata || {},
    this.methodDescriptorJoinCircleByShareCode);
  }

  methodDescriptorJoinCircleByInviteCode = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/JoinCircleByInviteCode',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.JoinCircleByInviteCodeRequest,
    web_app_grpc_pb.JoinCircleByInviteCodeResponse,
    (request: web_app_grpc_pb.JoinCircleByInviteCodeRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.JoinCircleByInviteCodeResponse.deserializeBinary
  );

  joinCircleByInviteCode(
    request: web_app_grpc_pb.JoinCircleByInviteCodeRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.JoinCircleByInviteCodeResponse>;

  joinCircleByInviteCode(
    request: web_app_grpc_pb.JoinCircleByInviteCodeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.JoinCircleByInviteCodeResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.JoinCircleByInviteCodeResponse>;

  joinCircleByInviteCode(
    request: web_app_grpc_pb.JoinCircleByInviteCodeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.JoinCircleByInviteCodeResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/JoinCircleByInviteCode',
        request,
        metadata || {},
        this.methodDescriptorJoinCircleByInviteCode,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/JoinCircleByInviteCode',
    request,
    metadata || {},
    this.methodDescriptorJoinCircleByInviteCode);
  }

  methodDescriptorLeaveCircle = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/LeaveCircle',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.LeaveCircleRequest,
    web_app_grpc_pb.LeaveCircleResponse,
    (request: web_app_grpc_pb.LeaveCircleRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.LeaveCircleResponse.deserializeBinary
  );

  leaveCircle(
    request: web_app_grpc_pb.LeaveCircleRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.LeaveCircleResponse>;

  leaveCircle(
    request: web_app_grpc_pb.LeaveCircleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.LeaveCircleResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.LeaveCircleResponse>;

  leaveCircle(
    request: web_app_grpc_pb.LeaveCircleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.LeaveCircleResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/LeaveCircle',
        request,
        metadata || {},
        this.methodDescriptorLeaveCircle,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/LeaveCircle',
    request,
    metadata || {},
    this.methodDescriptorLeaveCircle);
  }

  methodDescriptorInactivateMembership = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/InactivateMembership',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.InactivateMembershipRequest,
    web_app_grpc_pb.InactivateMembershipResponse,
    (request: web_app_grpc_pb.InactivateMembershipRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.InactivateMembershipResponse.deserializeBinary
  );

  inactivateMembership(
    request: web_app_grpc_pb.InactivateMembershipRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.InactivateMembershipResponse>;

  inactivateMembership(
    request: web_app_grpc_pb.InactivateMembershipRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.InactivateMembershipResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.InactivateMembershipResponse>;

  inactivateMembership(
    request: web_app_grpc_pb.InactivateMembershipRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.InactivateMembershipResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/InactivateMembership',
        request,
        metadata || {},
        this.methodDescriptorInactivateMembership,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/InactivateMembership',
    request,
    metadata || {},
    this.methodDescriptorInactivateMembership);
  }

  methodDescriptorDeleteCircle = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/DeleteCircle',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.DeleteCircleRequest,
    web_app_grpc_pb.DeleteCircleResponse,
    (request: web_app_grpc_pb.DeleteCircleRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.DeleteCircleResponse.deserializeBinary
  );

  deleteCircle(
    request: web_app_grpc_pb.DeleteCircleRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.DeleteCircleResponse>;

  deleteCircle(
    request: web_app_grpc_pb.DeleteCircleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.DeleteCircleResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.DeleteCircleResponse>;

  deleteCircle(
    request: web_app_grpc_pb.DeleteCircleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.DeleteCircleResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/DeleteCircle',
        request,
        metadata || {},
        this.methodDescriptorDeleteCircle,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/DeleteCircle',
    request,
    metadata || {},
    this.methodDescriptorDeleteCircle);
  }

  methodDescriptorUpdateProfile = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/UpdateProfile',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.UpdateProfileRequest,
    web_app_grpc_pb.UpdateProfileResponse,
    (request: web_app_grpc_pb.UpdateProfileRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.UpdateProfileResponse.deserializeBinary
  );

  updateProfile(
    request: web_app_grpc_pb.UpdateProfileRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.UpdateProfileResponse>;

  updateProfile(
    request: web_app_grpc_pb.UpdateProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.UpdateProfileResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.UpdateProfileResponse>;

  updateProfile(
    request: web_app_grpc_pb.UpdateProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.UpdateProfileResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/UpdateProfile',
        request,
        metadata || {},
        this.methodDescriptorUpdateProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/UpdateProfile',
    request,
    metadata || {},
    this.methodDescriptorUpdateProfile);
  }

  methodDescriptorCreateGroup = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/CreateGroup',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.CreateGroupRequest,
    web_app_grpc_pb.CreateGroupResponse,
    (request: web_app_grpc_pb.CreateGroupRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.CreateGroupResponse.deserializeBinary
  );

  createGroup(
    request: web_app_grpc_pb.CreateGroupRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.CreateGroupResponse>;

  createGroup(
    request: web_app_grpc_pb.CreateGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.CreateGroupResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.CreateGroupResponse>;

  createGroup(
    request: web_app_grpc_pb.CreateGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.CreateGroupResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/CreateGroup',
        request,
        metadata || {},
        this.methodDescriptorCreateGroup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/CreateGroup',
    request,
    metadata || {},
    this.methodDescriptorCreateGroup);
  }

  methodDescriptorUpdateGroup = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/UpdateGroup',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.UpdateGroupRequest,
    web_app_grpc_pb.UpdateGroupResponse,
    (request: web_app_grpc_pb.UpdateGroupRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.UpdateGroupResponse.deserializeBinary
  );

  updateGroup(
    request: web_app_grpc_pb.UpdateGroupRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.UpdateGroupResponse>;

  updateGroup(
    request: web_app_grpc_pb.UpdateGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.UpdateGroupResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.UpdateGroupResponse>;

  updateGroup(
    request: web_app_grpc_pb.UpdateGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.UpdateGroupResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/UpdateGroup',
        request,
        metadata || {},
        this.methodDescriptorUpdateGroup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/UpdateGroup',
    request,
    metadata || {},
    this.methodDescriptorUpdateGroup);
  }

  methodDescriptorDeleteGroup = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/DeleteGroup',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.DeleteGroupRequest,
    web_app_grpc_pb.DeleteGroupResponse,
    (request: web_app_grpc_pb.DeleteGroupRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.DeleteGroupResponse.deserializeBinary
  );

  deleteGroup(
    request: web_app_grpc_pb.DeleteGroupRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.DeleteGroupResponse>;

  deleteGroup(
    request: web_app_grpc_pb.DeleteGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.DeleteGroupResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.DeleteGroupResponse>;

  deleteGroup(
    request: web_app_grpc_pb.DeleteGroupRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.DeleteGroupResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/DeleteGroup',
        request,
        metadata || {},
        this.methodDescriptorDeleteGroup,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/DeleteGroup',
    request,
    metadata || {},
    this.methodDescriptorDeleteGroup);
  }

  methodDescriptorAdminGetUser = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/AdminGetUser',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.AdminGetUserRequest,
    web_app_grpc_pb.AdminGetUserResponse,
    (request: web_app_grpc_pb.AdminGetUserRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.AdminGetUserResponse.deserializeBinary
  );

  adminGetUser(
    request: web_app_grpc_pb.AdminGetUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.AdminGetUserResponse>;

  adminGetUser(
    request: web_app_grpc_pb.AdminGetUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.AdminGetUserResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.AdminGetUserResponse>;

  adminGetUser(
    request: web_app_grpc_pb.AdminGetUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.AdminGetUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/AdminGetUser',
        request,
        metadata || {},
        this.methodDescriptorAdminGetUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/AdminGetUser',
    request,
    metadata || {},
    this.methodDescriptorAdminGetUser);
  }

  methodDescriptorAdminUpdateUser = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/AdminUpdateUser',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.AdminUpdateUserRequest,
    web_app_grpc_pb.AdminUpdateUserResponse,
    (request: web_app_grpc_pb.AdminUpdateUserRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.AdminUpdateUserResponse.deserializeBinary
  );

  adminUpdateUser(
    request: web_app_grpc_pb.AdminUpdateUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.AdminUpdateUserResponse>;

  adminUpdateUser(
    request: web_app_grpc_pb.AdminUpdateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.AdminUpdateUserResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.AdminUpdateUserResponse>;

  adminUpdateUser(
    request: web_app_grpc_pb.AdminUpdateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.AdminUpdateUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/AdminUpdateUser',
        request,
        metadata || {},
        this.methodDescriptorAdminUpdateUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/AdminUpdateUser',
    request,
    metadata || {},
    this.methodDescriptorAdminUpdateUser);
  }

  methodDescriptorDisableUser = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/DisableUser',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.DisableUserRequest,
    web_app_grpc_pb.DisableUserResponse,
    (request: web_app_grpc_pb.DisableUserRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.DisableUserResponse.deserializeBinary
  );

  disableUser(
    request: web_app_grpc_pb.DisableUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.DisableUserResponse>;

  disableUser(
    request: web_app_grpc_pb.DisableUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.DisableUserResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.DisableUserResponse>;

  disableUser(
    request: web_app_grpc_pb.DisableUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.DisableUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/DisableUser',
        request,
        metadata || {},
        this.methodDescriptorDisableUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/DisableUser',
    request,
    metadata || {},
    this.methodDescriptorDisableUser);
  }

  methodDescriptorEnableUser = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/EnableUser',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.EnableUserRequest,
    web_app_grpc_pb.EnableUserResponse,
    (request: web_app_grpc_pb.EnableUserRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.EnableUserResponse.deserializeBinary
  );

  enableUser(
    request: web_app_grpc_pb.EnableUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.EnableUserResponse>;

  enableUser(
    request: web_app_grpc_pb.EnableUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.EnableUserResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.EnableUserResponse>;

  enableUser(
    request: web_app_grpc_pb.EnableUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.EnableUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/EnableUser',
        request,
        metadata || {},
        this.methodDescriptorEnableUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/EnableUser',
    request,
    metadata || {},
    this.methodDescriptorEnableUser);
  }

  methodDescriptorPromoteAdmin = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/PromoteAdmin',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.PromoteAdminRequest,
    web_app_grpc_pb.PromoteAdminResponse,
    (request: web_app_grpc_pb.PromoteAdminRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.PromoteAdminResponse.deserializeBinary
  );

  promoteAdmin(
    request: web_app_grpc_pb.PromoteAdminRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.PromoteAdminResponse>;

  promoteAdmin(
    request: web_app_grpc_pb.PromoteAdminRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.PromoteAdminResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.PromoteAdminResponse>;

  promoteAdmin(
    request: web_app_grpc_pb.PromoteAdminRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.PromoteAdminResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/PromoteAdmin',
        request,
        metadata || {},
        this.methodDescriptorPromoteAdmin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/PromoteAdmin',
    request,
    metadata || {},
    this.methodDescriptorPromoteAdmin);
  }

  methodDescriptorDemoteAdmin = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/DemoteAdmin',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.DemoteAdminRequest,
    web_app_grpc_pb.DemoteAdminResponse,
    (request: web_app_grpc_pb.DemoteAdminRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.DemoteAdminResponse.deserializeBinary
  );

  demoteAdmin(
    request: web_app_grpc_pb.DemoteAdminRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.DemoteAdminResponse>;

  demoteAdmin(
    request: web_app_grpc_pb.DemoteAdminRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.DemoteAdminResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.DemoteAdminResponse>;

  demoteAdmin(
    request: web_app_grpc_pb.DemoteAdminRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.DemoteAdminResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/DemoteAdmin',
        request,
        metadata || {},
        this.methodDescriptorDemoteAdmin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/DemoteAdmin',
    request,
    metadata || {},
    this.methodDescriptorDemoteAdmin);
  }

  methodDescriptorChangeMemberRole = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/ChangeMemberRole',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.ChangeMemberRoleRequest,
    web_app_grpc_pb.ChangeMemberRoleResponse,
    (request: web_app_grpc_pb.ChangeMemberRoleRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.ChangeMemberRoleResponse.deserializeBinary
  );

  changeMemberRole(
    request: web_app_grpc_pb.ChangeMemberRoleRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.ChangeMemberRoleResponse>;

  changeMemberRole(
    request: web_app_grpc_pb.ChangeMemberRoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.ChangeMemberRoleResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.ChangeMemberRoleResponse>;

  changeMemberRole(
    request: web_app_grpc_pb.ChangeMemberRoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.ChangeMemberRoleResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/ChangeMemberRole',
        request,
        metadata || {},
        this.methodDescriptorChangeMemberRole,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/ChangeMemberRole',
    request,
    metadata || {},
    this.methodDescriptorChangeMemberRole);
  }

  methodDescriptorForceUserLogout = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/ForceUserLogout',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.ForceUserLogoutRequest,
    web_app_grpc_pb.ForceUserLogoutResponse,
    (request: web_app_grpc_pb.ForceUserLogoutRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.ForceUserLogoutResponse.deserializeBinary
  );

  forceUserLogout(
    request: web_app_grpc_pb.ForceUserLogoutRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.ForceUserLogoutResponse>;

  forceUserLogout(
    request: web_app_grpc_pb.ForceUserLogoutRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.ForceUserLogoutResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.ForceUserLogoutResponse>;

  forceUserLogout(
    request: web_app_grpc_pb.ForceUserLogoutRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.ForceUserLogoutResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/ForceUserLogout',
        request,
        metadata || {},
        this.methodDescriptorForceUserLogout,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/ForceUserLogout',
    request,
    metadata || {},
    this.methodDescriptorForceUserLogout);
  }

  methodDescriptorAdminGetCircle = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/AdminGetCircle',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.AdminGetCircleRequest,
    web_app_grpc_pb.AdminGetCircleResponse,
    (request: web_app_grpc_pb.AdminGetCircleRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.AdminGetCircleResponse.deserializeBinary
  );

  adminGetCircle(
    request: web_app_grpc_pb.AdminGetCircleRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.AdminGetCircleResponse>;

  adminGetCircle(
    request: web_app_grpc_pb.AdminGetCircleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.AdminGetCircleResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.AdminGetCircleResponse>;

  adminGetCircle(
    request: web_app_grpc_pb.AdminGetCircleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.AdminGetCircleResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/AdminGetCircle',
        request,
        metadata || {},
        this.methodDescriptorAdminGetCircle,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/AdminGetCircle',
    request,
    metadata || {},
    this.methodDescriptorAdminGetCircle);
  }

  methodDescriptorAdminUpdateCircle = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/AdminUpdateCircle',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.AdminUpdateCircleRequest,
    web_app_grpc_pb.AdminUpdateCircleResponse,
    (request: web_app_grpc_pb.AdminUpdateCircleRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.AdminUpdateCircleResponse.deserializeBinary
  );

  adminUpdateCircle(
    request: web_app_grpc_pb.AdminUpdateCircleRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.AdminUpdateCircleResponse>;

  adminUpdateCircle(
    request: web_app_grpc_pb.AdminUpdateCircleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.AdminUpdateCircleResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.AdminUpdateCircleResponse>;

  adminUpdateCircle(
    request: web_app_grpc_pb.AdminUpdateCircleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.AdminUpdateCircleResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/AdminUpdateCircle',
        request,
        metadata || {},
        this.methodDescriptorAdminUpdateCircle,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/AdminUpdateCircle',
    request,
    metadata || {},
    this.methodDescriptorAdminUpdateCircle);
  }

  methodDescriptorGetWorkspace = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/GetWorkspace',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.GetWorkspaceRequest,
    web_app_grpc_pb.GetWorkspaceResponse,
    (request: web_app_grpc_pb.GetWorkspaceRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.GetWorkspaceResponse.deserializeBinary
  );

  getWorkspace(
    request: web_app_grpc_pb.GetWorkspaceRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.GetWorkspaceResponse>;

  getWorkspace(
    request: web_app_grpc_pb.GetWorkspaceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetWorkspaceResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.GetWorkspaceResponse>;

  getWorkspace(
    request: web_app_grpc_pb.GetWorkspaceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetWorkspaceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/GetWorkspace',
        request,
        metadata || {},
        this.methodDescriptorGetWorkspace,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/GetWorkspace',
    request,
    metadata || {},
    this.methodDescriptorGetWorkspace);
  }

  methodDescriptorInviteToWorkspace = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/InviteToWorkspace',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.InviteToWorkspaceRequest,
    web_app_grpc_pb.InviteToWorkspaceResponse,
    (request: web_app_grpc_pb.InviteToWorkspaceRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.InviteToWorkspaceResponse.deserializeBinary
  );

  inviteToWorkspace(
    request: web_app_grpc_pb.InviteToWorkspaceRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.InviteToWorkspaceResponse>;

  inviteToWorkspace(
    request: web_app_grpc_pb.InviteToWorkspaceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.InviteToWorkspaceResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.InviteToWorkspaceResponse>;

  inviteToWorkspace(
    request: web_app_grpc_pb.InviteToWorkspaceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.InviteToWorkspaceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/InviteToWorkspace',
        request,
        metadata || {},
        this.methodDescriptorInviteToWorkspace,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/InviteToWorkspace',
    request,
    metadata || {},
    this.methodDescriptorInviteToWorkspace);
  }

  methodDescriptorGetWorkspaceSettings = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/GetWorkspaceSettings',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.GetWorkspaceSettingsRequest,
    web_app_grpc_pb.GetWorkspaceSettingsResponse,
    (request: web_app_grpc_pb.GetWorkspaceSettingsRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.GetWorkspaceSettingsResponse.deserializeBinary
  );

  getWorkspaceSettings(
    request: web_app_grpc_pb.GetWorkspaceSettingsRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.GetWorkspaceSettingsResponse>;

  getWorkspaceSettings(
    request: web_app_grpc_pb.GetWorkspaceSettingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetWorkspaceSettingsResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.GetWorkspaceSettingsResponse>;

  getWorkspaceSettings(
    request: web_app_grpc_pb.GetWorkspaceSettingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetWorkspaceSettingsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/GetWorkspaceSettings',
        request,
        metadata || {},
        this.methodDescriptorGetWorkspaceSettings,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/GetWorkspaceSettings',
    request,
    metadata || {},
    this.methodDescriptorGetWorkspaceSettings);
  }

  methodDescriptorGetStripeDashboardUrl = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/GetStripeDashboardUrl',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.GetStripeDashboardUrlRequest,
    web_app_grpc_pb.GetStripeDashboardUrlResponse,
    (request: web_app_grpc_pb.GetStripeDashboardUrlRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.GetStripeDashboardUrlResponse.deserializeBinary
  );

  getStripeDashboardUrl(
    request: web_app_grpc_pb.GetStripeDashboardUrlRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.GetStripeDashboardUrlResponse>;

  getStripeDashboardUrl(
    request: web_app_grpc_pb.GetStripeDashboardUrlRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetStripeDashboardUrlResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.GetStripeDashboardUrlResponse>;

  getStripeDashboardUrl(
    request: web_app_grpc_pb.GetStripeDashboardUrlRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetStripeDashboardUrlResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/GetStripeDashboardUrl',
        request,
        metadata || {},
        this.methodDescriptorGetStripeDashboardUrl,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/GetStripeDashboardUrl',
    request,
    metadata || {},
    this.methodDescriptorGetStripeDashboardUrl);
  }

  methodDescriptorUpdateWorkspaceSettings = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/UpdateWorkspaceSettings',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.UpdateWorkspaceSettingsRequest,
    web_app_grpc_pb.UpdateWorkspaceSettingsResponse,
    (request: web_app_grpc_pb.UpdateWorkspaceSettingsRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.UpdateWorkspaceSettingsResponse.deserializeBinary
  );

  updateWorkspaceSettings(
    request: web_app_grpc_pb.UpdateWorkspaceSettingsRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.UpdateWorkspaceSettingsResponse>;

  updateWorkspaceSettings(
    request: web_app_grpc_pb.UpdateWorkspaceSettingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.UpdateWorkspaceSettingsResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.UpdateWorkspaceSettingsResponse>;

  updateWorkspaceSettings(
    request: web_app_grpc_pb.UpdateWorkspaceSettingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.UpdateWorkspaceSettingsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/UpdateWorkspaceSettings',
        request,
        metadata || {},
        this.methodDescriptorUpdateWorkspaceSettings,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/UpdateWorkspaceSettings',
    request,
    metadata || {},
    this.methodDescriptorUpdateWorkspaceSettings);
  }

  methodDescriptorGetWorkspacePermissions = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/GetWorkspacePermissions',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.GetWorkspacePermissionsRequest,
    web_app_grpc_pb.WorkspacePermissionsResponse,
    (request: web_app_grpc_pb.GetWorkspacePermissionsRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.WorkspacePermissionsResponse.deserializeBinary
  );

  getWorkspacePermissions(
    request: web_app_grpc_pb.GetWorkspacePermissionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.WorkspacePermissionsResponse>;

  getWorkspacePermissions(
    request: web_app_grpc_pb.GetWorkspacePermissionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.WorkspacePermissionsResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.WorkspacePermissionsResponse>;

  getWorkspacePermissions(
    request: web_app_grpc_pb.GetWorkspacePermissionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.WorkspacePermissionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/GetWorkspacePermissions',
        request,
        metadata || {},
        this.methodDescriptorGetWorkspacePermissions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/GetWorkspacePermissions',
    request,
    metadata || {},
    this.methodDescriptorGetWorkspacePermissions);
  }

  methodDescriptorUpdateWorkspacePermissions = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/UpdateWorkspacePermissions',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.UpdateWorkspacePermissionsRequest,
    web_app_grpc_pb.WorkspacePermissionsResponse,
    (request: web_app_grpc_pb.UpdateWorkspacePermissionsRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.WorkspacePermissionsResponse.deserializeBinary
  );

  updateWorkspacePermissions(
    request: web_app_grpc_pb.UpdateWorkspacePermissionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.WorkspacePermissionsResponse>;

  updateWorkspacePermissions(
    request: web_app_grpc_pb.UpdateWorkspacePermissionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.WorkspacePermissionsResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.WorkspacePermissionsResponse>;

  updateWorkspacePermissions(
    request: web_app_grpc_pb.UpdateWorkspacePermissionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.WorkspacePermissionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/UpdateWorkspacePermissions',
        request,
        metadata || {},
        this.methodDescriptorUpdateWorkspacePermissions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/UpdateWorkspacePermissions',
    request,
    metadata || {},
    this.methodDescriptorUpdateWorkspacePermissions);
  }

  methodDescriptorGetWorkspaceBranding = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/GetWorkspaceBranding',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.GetWorkspaceBrandingRequest,
    web_app_grpc_pb.WorkspaceBrandingResponse,
    (request: web_app_grpc_pb.GetWorkspaceBrandingRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.WorkspaceBrandingResponse.deserializeBinary
  );

  getWorkspaceBranding(
    request: web_app_grpc_pb.GetWorkspaceBrandingRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.WorkspaceBrandingResponse>;

  getWorkspaceBranding(
    request: web_app_grpc_pb.GetWorkspaceBrandingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.WorkspaceBrandingResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.WorkspaceBrandingResponse>;

  getWorkspaceBranding(
    request: web_app_grpc_pb.GetWorkspaceBrandingRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.WorkspaceBrandingResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/GetWorkspaceBranding',
        request,
        metadata || {},
        this.methodDescriptorGetWorkspaceBranding,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/GetWorkspaceBranding',
    request,
    metadata || {},
    this.methodDescriptorGetWorkspaceBranding);
  }

  methodDescriptorUpdateWorkspaceBranding = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/UpdateWorkspaceBranding',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.UpdateWorkspaceBrandingRequest,
    web_app_grpc_pb.WorkspaceBrandingResponse,
    (request: web_app_grpc_pb.UpdateWorkspaceBrandingRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.WorkspaceBrandingResponse.deserializeBinary
  );

  updateWorkspaceBranding(
    request: web_app_grpc_pb.UpdateWorkspaceBrandingRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.WorkspaceBrandingResponse>;

  updateWorkspaceBranding(
    request: web_app_grpc_pb.UpdateWorkspaceBrandingRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.WorkspaceBrandingResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.WorkspaceBrandingResponse>;

  updateWorkspaceBranding(
    request: web_app_grpc_pb.UpdateWorkspaceBrandingRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.WorkspaceBrandingResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/UpdateWorkspaceBranding',
        request,
        metadata || {},
        this.methodDescriptorUpdateWorkspaceBranding,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/UpdateWorkspaceBranding',
    request,
    metadata || {},
    this.methodDescriptorUpdateWorkspaceBranding);
  }

  methodDescriptorGetWorkspaceDomains = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/GetWorkspaceDomains',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.GetWorkspaceDomainsRequest,
    web_app_grpc_pb.WorkspaceDomainResponse,
    (request: web_app_grpc_pb.GetWorkspaceDomainsRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.WorkspaceDomainResponse.deserializeBinary
  );

  getWorkspaceDomains(
    request: web_app_grpc_pb.GetWorkspaceDomainsRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.WorkspaceDomainResponse>;

  getWorkspaceDomains(
    request: web_app_grpc_pb.GetWorkspaceDomainsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.WorkspaceDomainResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.WorkspaceDomainResponse>;

  getWorkspaceDomains(
    request: web_app_grpc_pb.GetWorkspaceDomainsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.WorkspaceDomainResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/GetWorkspaceDomains',
        request,
        metadata || {},
        this.methodDescriptorGetWorkspaceDomains,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/GetWorkspaceDomains',
    request,
    metadata || {},
    this.methodDescriptorGetWorkspaceDomains);
  }

  methodDescriptorUpsertWorkspaceDomain = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/UpsertWorkspaceDomain',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.UpsertWorkspaceDomainRequest,
    web_app_grpc_pb.WorkspaceDomainResponse,
    (request: web_app_grpc_pb.UpsertWorkspaceDomainRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.WorkspaceDomainResponse.deserializeBinary
  );

  upsertWorkspaceDomain(
    request: web_app_grpc_pb.UpsertWorkspaceDomainRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.WorkspaceDomainResponse>;

  upsertWorkspaceDomain(
    request: web_app_grpc_pb.UpsertWorkspaceDomainRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.WorkspaceDomainResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.WorkspaceDomainResponse>;

  upsertWorkspaceDomain(
    request: web_app_grpc_pb.UpsertWorkspaceDomainRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.WorkspaceDomainResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/UpsertWorkspaceDomain',
        request,
        metadata || {},
        this.methodDescriptorUpsertWorkspaceDomain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/UpsertWorkspaceDomain',
    request,
    metadata || {},
    this.methodDescriptorUpsertWorkspaceDomain);
  }

  methodDescriptorRemoveWorkspaceDomain = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/RemoveWorkspaceDomain',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.RemoveWorkspaceDomainRequest,
    web_app_grpc_pb.WorkspaceDomainResponse,
    (request: web_app_grpc_pb.RemoveWorkspaceDomainRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.WorkspaceDomainResponse.deserializeBinary
  );

  removeWorkspaceDomain(
    request: web_app_grpc_pb.RemoveWorkspaceDomainRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.WorkspaceDomainResponse>;

  removeWorkspaceDomain(
    request: web_app_grpc_pb.RemoveWorkspaceDomainRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.WorkspaceDomainResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.WorkspaceDomainResponse>;

  removeWorkspaceDomain(
    request: web_app_grpc_pb.RemoveWorkspaceDomainRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.WorkspaceDomainResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/RemoveWorkspaceDomain',
        request,
        metadata || {},
        this.methodDescriptorRemoveWorkspaceDomain,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/RemoveWorkspaceDomain',
    request,
    metadata || {},
    this.methodDescriptorRemoveWorkspaceDomain);
  }

  methodDescriptorUpdateWorkspaceDomainSettings = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/UpdateWorkspaceDomainSettings',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.UpdateWorkspaceDomainSettingsRequest,
    web_app_grpc_pb.WorkspaceDomainResponse,
    (request: web_app_grpc_pb.UpdateWorkspaceDomainSettingsRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.WorkspaceDomainResponse.deserializeBinary
  );

  updateWorkspaceDomainSettings(
    request: web_app_grpc_pb.UpdateWorkspaceDomainSettingsRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.WorkspaceDomainResponse>;

  updateWorkspaceDomainSettings(
    request: web_app_grpc_pb.UpdateWorkspaceDomainSettingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.WorkspaceDomainResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.WorkspaceDomainResponse>;

  updateWorkspaceDomainSettings(
    request: web_app_grpc_pb.UpdateWorkspaceDomainSettingsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.WorkspaceDomainResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/UpdateWorkspaceDomainSettings',
        request,
        metadata || {},
        this.methodDescriptorUpdateWorkspaceDomainSettings,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/UpdateWorkspaceDomainSettings',
    request,
    metadata || {},
    this.methodDescriptorUpdateWorkspaceDomainSettings);
  }

  methodDescriptorGetWorkspaceSeatCount = new grpcWeb.MethodDescriptor(
    '/grpc_web.PhotoCircleWeb/GetWorkspaceSeatCount',
    grpcWeb.MethodType.UNARY,
    web_app_grpc_pb.GetWorkspaceSeatCountRequest,
    web_app_grpc_pb.GetWorkspaceSeatCountResponse,
    (request: web_app_grpc_pb.GetWorkspaceSeatCountRequest) => {
      return request.serializeBinary();
    },
    web_app_grpc_pb.GetWorkspaceSeatCountResponse.deserializeBinary
  );

  getWorkspaceSeatCount(
    request: web_app_grpc_pb.GetWorkspaceSeatCountRequest,
    metadata: grpcWeb.Metadata | null): Promise<web_app_grpc_pb.GetWorkspaceSeatCountResponse>;

  getWorkspaceSeatCount(
    request: web_app_grpc_pb.GetWorkspaceSeatCountRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetWorkspaceSeatCountResponse) => void): grpcWeb.ClientReadableStream<web_app_grpc_pb.GetWorkspaceSeatCountResponse>;

  getWorkspaceSeatCount(
    request: web_app_grpc_pb.GetWorkspaceSeatCountRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: web_app_grpc_pb.GetWorkspaceSeatCountResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/grpc_web.PhotoCircleWeb/GetWorkspaceSeatCount',
        request,
        metadata || {},
        this.methodDescriptorGetWorkspaceSeatCount,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/grpc_web.PhotoCircleWeb/GetWorkspaceSeatCount',
    request,
    metadata || {},
    this.methodDescriptorGetWorkspaceSeatCount);
  }

}

