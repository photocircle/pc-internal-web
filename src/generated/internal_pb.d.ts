import * as jspb from 'google-protobuf'



export class Branding extends jspb.Message {
  getHeaderBackgroundColor(): string;
  setHeaderBackgroundColor(value: string): Branding;

  getPrimaryColor(): string;
  setPrimaryColor(value: string): Branding;

  getLogoUrl(): string;
  setLogoUrl(value: string): Branding;

  getActionUrl(): string;
  setActionUrl(value: string): Branding;
  hasActionUrl(): boolean;
  clearActionUrl(): Branding;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Branding.AsObject;
  static toObject(includeInstance: boolean, msg: Branding): Branding.AsObject;
  static serializeBinaryToWriter(message: Branding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Branding;
  static deserializeBinaryFromReader(message: Branding, reader: jspb.BinaryReader): Branding;
}

export namespace Branding {
  export type AsObject = {
    headerBackgroundColor: string,
    primaryColor: string,
    logoUrl: string,
    actionUrl?: string,
  }
}

export class CirclePermissions extends jspb.Message {
  getCanAddMedia(): boolean;
  setCanAddMedia(value: boolean): CirclePermissions;

  getCanViewComments(): boolean;
  setCanViewComments(value: boolean): CirclePermissions;

  getCanAddComments(): boolean;
  setCanAddComments(value: boolean): CirclePermissions;

  getCanViewReactions(): boolean;
  setCanViewReactions(value: boolean): CirclePermissions;

  getCanAddReaction(): boolean;
  setCanAddReaction(value: boolean): CirclePermissions;

  getCanViewMembersList(): boolean;
  setCanViewMembersList(value: boolean): CirclePermissions;

  getCanInviteMembers(): boolean;
  setCanInviteMembers(value: boolean): CirclePermissions;

  getCanDeleteCircle(): boolean;
  setCanDeleteCircle(value: boolean): CirclePermissions;

  getCanLeaveCircle(): boolean;
  setCanLeaveCircle(value: boolean): CirclePermissions;

  getCanRemoveMembers(): boolean;
  setCanRemoveMembers(value: boolean): CirclePermissions;

  getCanUpdateTitle(): boolean;
  setCanUpdateTitle(value: boolean): CirclePermissions;

  getCanShareWebAlbum(): boolean;
  setCanShareWebAlbum(value: boolean): CirclePermissions;

  getCanSaveIndividualMedia(): boolean;
  setCanSaveIndividualMedia(value: boolean): CirclePermissions;

  getCanSaveAllToLibrary(): boolean;
  setCanSaveAllToLibrary(value: boolean): CirclePermissions;

  getCanShareMedia(): boolean;
  setCanShareMedia(value: boolean): CirclePermissions;

  getCanSetCircleCover(): boolean;
  setCanSetCircleCover(value: boolean): CirclePermissions;

  getCanRemoveOtherMedia(): boolean;
  setCanRemoveOtherMedia(value: boolean): CirclePermissions;

  getCanRemoveOtherComments(): boolean;
  setCanRemoveOtherComments(value: boolean): CirclePermissions;

  getCanViewDates(): boolean;
  setCanViewDates(value: boolean): CirclePermissions;

  getCanUpdateOtherCaption(): boolean;
  setCanUpdateOtherCaption(value: boolean): CirclePermissions;

  getCanReorderMedia(): boolean;
  setCanReorderMedia(value: boolean): CirclePermissions;

  getCanUnblockUsers(): boolean;
  setCanUnblockUsers(value: boolean): CirclePermissions;

  getCanDownloadZip(): boolean;
  setCanDownloadZip(value: boolean): CirclePermissions;

  getCanDownloadExcel(): boolean;
  setCanDownloadExcel(value: boolean): CirclePermissions;

  getCanInactivateMembership(): boolean;
  setCanInactivateMembership(value: boolean): CirclePermissions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CirclePermissions.AsObject;
  static toObject(includeInstance: boolean, msg: CirclePermissions): CirclePermissions.AsObject;
  static serializeBinaryToWriter(message: CirclePermissions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CirclePermissions;
  static deserializeBinaryFromReader(message: CirclePermissions, reader: jspb.BinaryReader): CirclePermissions;
}

export namespace CirclePermissions {
  export type AsObject = {
    canAddMedia: boolean,
    canViewComments: boolean,
    canAddComments: boolean,
    canViewReactions: boolean,
    canAddReaction: boolean,
    canViewMembersList: boolean,
    canInviteMembers: boolean,
    canDeleteCircle: boolean,
    canLeaveCircle: boolean,
    canRemoveMembers: boolean,
    canUpdateTitle: boolean,
    canShareWebAlbum: boolean,
    canSaveIndividualMedia: boolean,
    canSaveAllToLibrary: boolean,
    canShareMedia: boolean,
    canSetCircleCover: boolean,
    canRemoveOtherMedia: boolean,
    canRemoveOtherComments: boolean,
    canViewDates: boolean,
    canUpdateOtherCaption: boolean,
    canReorderMedia: boolean,
    canUnblockUsers: boolean,
    canDownloadZip: boolean,
    canDownloadExcel: boolean,
    canInactivateMembership: boolean,
  }
}

export class CircleConfig extends jspb.Message {
  getEnableAds(): boolean;
  setEnableAds(value: boolean): CircleConfig;

  getMaxVideoLength(): number;
  setMaxVideoLength(value: number): CircleConfig;

  getEnableEventTracking(): boolean;
  setEnableEventTracking(value: boolean): CircleConfig;

  getBranding(): Branding | undefined;
  setBranding(value?: Branding): CircleConfig;
  hasBranding(): boolean;
  clearBranding(): CircleConfig;

  getDefaultVideoSelectionLength(): number;
  setDefaultVideoSelectionLength(value: number): CircleConfig;

  getMinimumVideoLengthForTrim(): number;
  setMinimumVideoLengthForTrim(value: number): CircleConfig;

  getReactionSet(): ReactionSet | undefined;
  setReactionSet(value?: ReactionSet): CircleConfig;
  hasReactionSet(): boolean;
  clearReactionSet(): CircleConfig;

  getMaxPhotoDimension(): number;
  setMaxPhotoDimension(value: number): CircleConfig;
  hasMaxPhotoDimension(): boolean;
  clearMaxPhotoDimension(): CircleConfig;

  getVideoResolution(): VideoResolution;
  setVideoResolution(value: VideoResolution): CircleConfig;
  hasVideoResolution(): boolean;
  clearVideoResolution(): CircleConfig;

  getVideoBitrateKbps(): number;
  setVideoBitrateKbps(value: number): CircleConfig;
  hasVideoBitrateKbps(): boolean;
  clearVideoBitrateKbps(): CircleConfig;

  getRolesList(): Array<Role>;
  setRolesList(value: Array<Role>): CircleConfig;
  clearRolesList(): CircleConfig;
  addRoles(value?: Role, index?: number): Role;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CircleConfig.AsObject;
  static toObject(includeInstance: boolean, msg: CircleConfig): CircleConfig.AsObject;
  static serializeBinaryToWriter(message: CircleConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CircleConfig;
  static deserializeBinaryFromReader(message: CircleConfig, reader: jspb.BinaryReader): CircleConfig;
}

export namespace CircleConfig {
  export type AsObject = {
    enableAds: boolean,
    maxVideoLength: number,
    enableEventTracking: boolean,
    branding?: Branding.AsObject,
    defaultVideoSelectionLength: number,
    minimumVideoLengthForTrim: number,
    reactionSet?: ReactionSet.AsObject,
    maxPhotoDimension?: number,
    videoResolution?: VideoResolution,
    videoBitrateKbps?: number,
    rolesList: Array<Role.AsObject>,
  }
}

export class AdminCircleMetadata extends jspb.Message {
  getMediaCount(): number;
  setMediaCount(value: number): AdminCircleMetadata;

  getMemberCount(): number;
  setMemberCount(value: number): AdminCircleMetadata;

  getRolesList(): Array<Role>;
  setRolesList(value: Array<Role>): AdminCircleMetadata;
  clearRolesList(): AdminCircleMetadata;
  addRoles(value?: Role, index?: number): Role;

  getMemberUuid(): string;
  setMemberUuid(value: string): AdminCircleMetadata;
  hasMemberUuid(): boolean;
  clearMemberUuid(): AdminCircleMetadata;

  getRoleId(): number;
  setRoleId(value: number): AdminCircleMetadata;
  hasRoleId(): boolean;
  clearRoleId(): AdminCircleMetadata;

  getTargetRoleIdsList(): Array<number>;
  setTargetRoleIdsList(value: Array<number>): AdminCircleMetadata;
  clearTargetRoleIdsList(): AdminCircleMetadata;
  addTargetRoleIds(value: number, index?: number): AdminCircleMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminCircleMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: AdminCircleMetadata): AdminCircleMetadata.AsObject;
  static serializeBinaryToWriter(message: AdminCircleMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminCircleMetadata;
  static deserializeBinaryFromReader(message: AdminCircleMetadata, reader: jspb.BinaryReader): AdminCircleMetadata;
}

export namespace AdminCircleMetadata {
  export type AsObject = {
    mediaCount: number,
    memberCount: number,
    rolesList: Array<Role.AsObject>,
    memberUuid?: string,
    roleId?: number,
    targetRoleIdsList: Array<number>,
  }
}

export class Circle extends jspb.Message {
  getCircleUuid(): string;
  setCircleUuid(value: string): Circle;

  getTitle(): string;
  setTitle(value: string): Circle;

  getDateCreatedTimestamp(): number;
  setDateCreatedTimestamp(value: number): Circle;

  getCoverPhotoMediaUuid(): string;
  setCoverPhotoMediaUuid(value: string): Circle;
  hasCoverPhotoMediaUuid(): boolean;
  clearCoverPhotoMediaUuid(): Circle;

  getGroupUuid(): string;
  setGroupUuid(value: string): Circle;
  hasGroupUuid(): boolean;
  clearGroupUuid(): Circle;

  getLastActivityTimestamp(): number;
  setLastActivityTimestamp(value: number): Circle;
  hasLastActivityTimestamp(): boolean;
  clearLastActivityTimestamp(): Circle;

  getInternalId(): string;
  setInternalId(value: string): Circle;
  hasInternalId(): boolean;
  clearInternalId(): Circle;

  getWorkspaceUuid(): string;
  setWorkspaceUuid(value: string): Circle;
  hasWorkspaceUuid(): boolean;
  clearWorkspaceUuid(): Circle;

  getLastMediaUuid(): string;
  setLastMediaUuid(value: string): Circle;
  hasLastMediaUuid(): boolean;
  clearLastMediaUuid(): Circle;

  getAdminCircleMetadata(): AdminCircleMetadata | undefined;
  setAdminCircleMetadata(value?: AdminCircleMetadata): Circle;
  hasAdminCircleMetadata(): boolean;
  clearAdminCircleMetadata(): Circle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Circle.AsObject;
  static toObject(includeInstance: boolean, msg: Circle): Circle.AsObject;
  static serializeBinaryToWriter(message: Circle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Circle;
  static deserializeBinaryFromReader(message: Circle, reader: jspb.BinaryReader): Circle;
}

export namespace Circle {
  export type AsObject = {
    circleUuid: string,
    title: string,
    dateCreatedTimestamp: number,
    coverPhotoMediaUuid?: string,
    groupUuid?: string,
    lastActivityTimestamp?: number,
    internalId?: string,
    workspaceUuid?: string,
    lastMediaUuid?: string,
    adminCircleMetadata?: AdminCircleMetadata.AsObject,
  }
}

export class Role extends jspb.Message {
  getRoleId(): number;
  setRoleId(value: number): Role;

  getName(): string;
  setName(value: string): Role;

  getDescription(): string;
  setDescription(value: string): Role;
  hasDescription(): boolean;
  clearDescription(): Role;

  getIconId(): number;
  setIconId(value: number): Role;
  hasIconId(): boolean;
  clearIconId(): Role;

  getIconBytes(): Uint8Array | string;
  getIconBytes_asU8(): Uint8Array;
  getIconBytes_asB64(): string;
  setIconBytes(value: Uint8Array | string): Role;
  hasIconBytes(): boolean;
  clearIconBytes(): Role;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Role.AsObject;
  static toObject(includeInstance: boolean, msg: Role): Role.AsObject;
  static serializeBinaryToWriter(message: Role, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Role;
  static deserializeBinaryFromReader(message: Role, reader: jspb.BinaryReader): Role;
}

export namespace Role {
  export type AsObject = {
    roleId: number,
    name: string,
    description?: string,
    iconId?: number,
    iconBytes?: Uint8Array | string,
  }
}

export class AdminMemberMetadata extends jspb.Message {
  getMediaCount(): number;
  setMediaCount(value: number): AdminMemberMetadata;

  getLastSessionTimestamp(): number;
  setLastSessionTimestamp(value: number): AdminMemberMetadata;
  hasLastSessionTimestamp(): boolean;
  clearLastSessionTimestamp(): AdminMemberMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminMemberMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: AdminMemberMetadata): AdminMemberMetadata.AsObject;
  static serializeBinaryToWriter(message: AdminMemberMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminMemberMetadata;
  static deserializeBinaryFromReader(message: AdminMemberMetadata, reader: jspb.BinaryReader): AdminMemberMetadata;
}

export namespace AdminMemberMetadata {
  export type AsObject = {
    mediaCount: number,
    lastSessionTimestamp?: number,
  }
}

export class CircleMember extends jspb.Message {
  getMemberUuid(): string;
  setMemberUuid(value: string): CircleMember;

  getUserUuid(): string;
  setUserUuid(value: string): CircleMember;
  hasUserUuid(): boolean;
  clearUserUuid(): CircleMember;

  getCircleUuid(): string;
  setCircleUuid(value: string): CircleMember;

  getLastUpdatedTimestamp(): number;
  setLastUpdatedTimestamp(value: number): CircleMember;

  getDisplayName(): string;
  setDisplayName(value: string): CircleMember;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): CircleMember;
  hasAvatarUrl(): boolean;
  clearAvatarUrl(): CircleMember;

  getInvitedByMemberUuid(): string;
  setInvitedByMemberUuid(value: string): CircleMember;
  hasInvitedByMemberUuid(): boolean;
  clearInvitedByMemberUuid(): CircleMember;

  getDateJoinedTimestamp(): number;
  setDateJoinedTimestamp(value: number): CircleMember;

  getLastSessionTimestamp(): number;
  setLastSessionTimestamp(value: number): CircleMember;
  hasLastSessionTimestamp(): boolean;
  clearLastSessionTimestamp(): CircleMember;

  getIsActive(): boolean;
  setIsActive(value: boolean): CircleMember;

  getIsRemovable(): boolean;
  setIsRemovable(value: boolean): CircleMember;

  getIsWorkspaceMember(): boolean;
  setIsWorkspaceMember(value: boolean): CircleMember;

  getRoleId(): number;
  setRoleId(value: number): CircleMember;

  getTargetRoleIdsList(): Array<number>;
  setTargetRoleIdsList(value: Array<number>): CircleMember;
  clearTargetRoleIdsList(): CircleMember;
  addTargetRoleIds(value: number, index?: number): CircleMember;

  getAdminMemberMetadata(): AdminMemberMetadata | undefined;
  setAdminMemberMetadata(value?: AdminMemberMetadata): CircleMember;
  hasAdminMemberMetadata(): boolean;
  clearAdminMemberMetadata(): CircleMember;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CircleMember.AsObject;
  static toObject(includeInstance: boolean, msg: CircleMember): CircleMember.AsObject;
  static serializeBinaryToWriter(message: CircleMember, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CircleMember;
  static deserializeBinaryFromReader(message: CircleMember, reader: jspb.BinaryReader): CircleMember;
}

export namespace CircleMember {
  export type AsObject = {
    memberUuid: string,
    userUuid?: string,
    circleUuid: string,
    lastUpdatedTimestamp: number,
    displayName: string,
    avatarUrl?: string,
    invitedByMemberUuid?: string,
    dateJoinedTimestamp: number,
    lastSessionTimestamp?: number,
    isActive: boolean,
    isRemovable: boolean,
    isWorkspaceMember: boolean,
    roleId: number,
    targetRoleIdsList: Array<number>,
    adminMemberMetadata?: AdminMemberMetadata.AsObject,
  }
}

export class CircleMembershipConfig extends jspb.Message {
  getCircleUuid(): string;
  setCircleUuid(value: string): CircleMembershipConfig;

  getMemberUuid(): string;
  setMemberUuid(value: string): CircleMembershipConfig;

  getPermissions(): CirclePermissions | undefined;
  setPermissions(value?: CirclePermissions): CircleMembershipConfig;
  hasPermissions(): boolean;
  clearPermissions(): CircleMembershipConfig;

  getConfig(): CircleConfig | undefined;
  setConfig(value?: CircleConfig): CircleMembershipConfig;
  hasConfig(): boolean;
  clearConfig(): CircleMembershipConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CircleMembershipConfig.AsObject;
  static toObject(includeInstance: boolean, msg: CircleMembershipConfig): CircleMembershipConfig.AsObject;
  static serializeBinaryToWriter(message: CircleMembershipConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CircleMembershipConfig;
  static deserializeBinaryFromReader(message: CircleMembershipConfig, reader: jspb.BinaryReader): CircleMembershipConfig;
}

export namespace CircleMembershipConfig {
  export type AsObject = {
    circleUuid: string,
    memberUuid: string,
    permissions?: CirclePermissions.AsObject,
    config?: CircleConfig.AsObject,
  }
}

export class Media extends jspb.Message {
  getMediaUuid(): string;
  setMediaUuid(value: string): Media;

  getCircleUuid(): string;
  setCircleUuid(value: string): Media;

  getIsVideo(): boolean;
  setIsVideo(value: boolean): Media;

  getAddedByMemberUuid(): string;
  setAddedByMemberUuid(value: string): Media;

  getDateAddedTimestamp(): number;
  setDateAddedTimestamp(value: number): Media;

  getCaption(): string;
  setCaption(value: string): Media;
  hasCaption(): boolean;
  clearCaption(): Media;

  getPreviewData(): Uint8Array | string;
  getPreviewData_asU8(): Uint8Array;
  getPreviewData_asB64(): string;
  setPreviewData(value: Uint8Array | string): Media;
  hasPreviewData(): boolean;
  clearPreviewData(): Media;

  getSortKey(): number;
  setSortKey(value: number): Media;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Media.AsObject;
  static toObject(includeInstance: boolean, msg: Media): Media.AsObject;
  static serializeBinaryToWriter(message: Media, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Media;
  static deserializeBinaryFromReader(message: Media, reader: jspb.BinaryReader): Media;
}

export namespace Media {
  export type AsObject = {
    mediaUuid: string,
    circleUuid: string,
    isVideo: boolean,
    addedByMemberUuid: string,
    dateAddedTimestamp: number,
    caption?: string,
    previewData?: Uint8Array | string,
    sortKey: number,
  }
}

export class MediaComment extends jspb.Message {
  getCommentUuid(): string;
  setCommentUuid(value: string): MediaComment;

  getMediaUuid(): string;
  setMediaUuid(value: string): MediaComment;

  getAddedByMemberUuid(): string;
  setAddedByMemberUuid(value: string): MediaComment;

  getCommentText(): string;
  setCommentText(value: string): MediaComment;

  getDateAddedTimestamp(): number;
  setDateAddedTimestamp(value: number): MediaComment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediaComment.AsObject;
  static toObject(includeInstance: boolean, msg: MediaComment): MediaComment.AsObject;
  static serializeBinaryToWriter(message: MediaComment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaComment;
  static deserializeBinaryFromReader(message: MediaComment, reader: jspb.BinaryReader): MediaComment;
}

export namespace MediaComment {
  export type AsObject = {
    commentUuid: string,
    mediaUuid: string,
    addedByMemberUuid: string,
    commentText: string,
    dateAddedTimestamp: number,
  }
}

export class MediaReaction extends jspb.Message {
  getMediaUuid(): string;
  setMediaUuid(value: string): MediaReaction;

  getAddedByMemberUuid(): string;
  setAddedByMemberUuid(value: string): MediaReaction;

  getReactionText(): string;
  setReactionText(value: string): MediaReaction;

  getDateModifiedTimestamp(): number;
  setDateModifiedTimestamp(value: number): MediaReaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MediaReaction.AsObject;
  static toObject(includeInstance: boolean, msg: MediaReaction): MediaReaction.AsObject;
  static serializeBinaryToWriter(message: MediaReaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MediaReaction;
  static deserializeBinaryFromReader(message: MediaReaction, reader: jspb.BinaryReader): MediaReaction;
}

export namespace MediaReaction {
  export type AsObject = {
    mediaUuid: string,
    addedByMemberUuid: string,
    reactionText: string,
    dateModifiedTimestamp: number,
  }
}

export class Profile extends jspb.Message {
  getUserUuid(): string;
  setUserUuid(value: string): Profile;

  getLastUpdatedTimestamp(): number;
  setLastUpdatedTimestamp(value: number): Profile;

  getDisplayName(): string;
  setDisplayName(value: string): Profile;

  getEmail(): string;
  setEmail(value: string): Profile;
  hasEmail(): boolean;
  clearEmail(): Profile;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): Profile;
  hasAvatarUrl(): boolean;
  clearAvatarUrl(): Profile;

  getAuthTypesList(): Array<AuthType>;
  setAuthTypesList(value: Array<AuthType>): Profile;
  clearAuthTypesList(): Profile;
  addAuthTypes(value: AuthType, index?: number): Profile;

  getAccountCreationTimestamp(): number;
  setAccountCreationTimestamp(value: number): Profile;

  getGroupUuid(): string;
  setGroupUuid(value: string): Profile;
  hasGroupUuid(): boolean;
  clearGroupUuid(): Profile;

  getIsGroupAdmin(): boolean;
  setIsGroupAdmin(value: boolean): Profile;
  hasIsGroupAdmin(): boolean;
  clearIsGroupAdmin(): Profile;

  getLastSessionTimestamp(): number;
  setLastSessionTimestamp(value: number): Profile;
  hasLastSessionTimestamp(): boolean;
  clearLastSessionTimestamp(): Profile;

  getGroupsList(): Array<Group>;
  setGroupsList(value: Array<Group>): Profile;
  clearGroupsList(): Profile;
  addGroups(value?: Group, index?: number): Group;

  getWorkspaceUuid(): string;
  setWorkspaceUuid(value: string): Profile;
  hasWorkspaceUuid(): boolean;
  clearWorkspaceUuid(): Profile;

  getIsDisabled(): boolean;
  setIsDisabled(value: boolean): Profile;
  hasIsDisabled(): boolean;
  clearIsDisabled(): Profile;

  getEmailStatus(): EmailStatus;
  setEmailStatus(value: EmailStatus): Profile;

  getAdCustomTargetingMap(): jspb.Map<string, string>;
  clearAdCustomTargetingMap(): Profile;

  getIsWorkspaceOwner(): boolean;
  setIsWorkspaceOwner(value: boolean): Profile;
  hasIsWorkspaceOwner(): boolean;
  clearIsWorkspaceOwner(): Profile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Profile.AsObject;
  static toObject(includeInstance: boolean, msg: Profile): Profile.AsObject;
  static serializeBinaryToWriter(message: Profile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Profile;
  static deserializeBinaryFromReader(message: Profile, reader: jspb.BinaryReader): Profile;
}

export namespace Profile {
  export type AsObject = {
    userUuid: string,
    lastUpdatedTimestamp: number,
    displayName: string,
    email?: string,
    avatarUrl?: string,
    authTypesList: Array<AuthType>,
    accountCreationTimestamp: number,
    groupUuid?: string,
    isGroupAdmin?: boolean,
    lastSessionTimestamp?: number,
    groupsList: Array<Group.AsObject>,
    workspaceUuid?: string,
    isDisabled?: boolean,
    emailStatus: EmailStatus,
    adCustomTargetingMap: Array<[string, string]>,
    isWorkspaceOwner?: boolean,
  }
}

export class Group extends jspb.Message {
  getGroupUuid(): string;
  setGroupUuid(value: string): Group;

  getName(): string;
  setName(value: string): Group;

  getDateCreated(): number;
  setDateCreated(value: number): Group;

  getParentGroupUuid(): string;
  setParentGroupUuid(value: string): Group;
  hasParentGroupUuid(): boolean;
  clearParentGroupUuid(): Group;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Group.AsObject;
  static toObject(includeInstance: boolean, msg: Group): Group.AsObject;
  static serializeBinaryToWriter(message: Group, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Group;
  static deserializeBinaryFromReader(message: Group, reader: jspb.BinaryReader): Group;
}

export namespace Group {
  export type AsObject = {
    groupUuid: string,
    name: string,
    dateCreated: number,
    parentGroupUuid?: string,
  }
}

export class ReactionCategory extends jspb.Message {
  getCategoryName(): string;
  setCategoryName(value: string): ReactionCategory;
  hasCategoryName(): boolean;
  clearCategoryName(): ReactionCategory;

  getReactions(): string;
  setReactions(value: string): ReactionCategory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReactionCategory.AsObject;
  static toObject(includeInstance: boolean, msg: ReactionCategory): ReactionCategory.AsObject;
  static serializeBinaryToWriter(message: ReactionCategory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReactionCategory;
  static deserializeBinaryFromReader(message: ReactionCategory, reader: jspb.BinaryReader): ReactionCategory;
}

export namespace ReactionCategory {
  export type AsObject = {
    categoryName?: string,
    reactions: string,
  }
}

export class ReactionSet extends jspb.Message {
  getDefaultReactions(): string;
  setDefaultReactions(value: string): ReactionSet;

  getReactionCategoriesList(): Array<ReactionCategory>;
  setReactionCategoriesList(value: Array<ReactionCategory>): ReactionSet;
  clearReactionCategoriesList(): ReactionSet;
  addReactionCategories(value?: ReactionCategory, index?: number): ReactionCategory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReactionSet.AsObject;
  static toObject(includeInstance: boolean, msg: ReactionSet): ReactionSet.AsObject;
  static serializeBinaryToWriter(message: ReactionSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReactionSet;
  static deserializeBinaryFromReader(message: ReactionSet, reader: jspb.BinaryReader): ReactionSet;
}

export namespace ReactionSet {
  export type AsObject = {
    defaultReactions: string,
    reactionCategoriesList: Array<ReactionCategory.AsObject>,
  }
}

export class LegalUrls extends jspb.Message {
  getTermsOfUseUrl(): string;
  setTermsOfUseUrl(value: string): LegalUrls;
  hasTermsOfUseUrl(): boolean;
  clearTermsOfUseUrl(): LegalUrls;

  getUsageGuidelinesUrl(): string;
  setUsageGuidelinesUrl(value: string): LegalUrls;
  hasUsageGuidelinesUrl(): boolean;
  clearUsageGuidelinesUrl(): LegalUrls;

  getPrivacyPolicyUrl(): string;
  setPrivacyPolicyUrl(value: string): LegalUrls;
  hasPrivacyPolicyUrl(): boolean;
  clearPrivacyPolicyUrl(): LegalUrls;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LegalUrls.AsObject;
  static toObject(includeInstance: boolean, msg: LegalUrls): LegalUrls.AsObject;
  static serializeBinaryToWriter(message: LegalUrls, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LegalUrls;
  static deserializeBinaryFromReader(message: LegalUrls, reader: jspb.BinaryReader): LegalUrls;
}

export namespace LegalUrls {
  export type AsObject = {
    termsOfUseUrl?: string,
    usageGuidelinesUrl?: string,
    privacyPolicyUrl?: string,
  }
}

export class UserAlert extends jspb.Message {
  getUserAlertUuid(): string;
  setUserAlertUuid(value: string): UserAlert;

  getTitle(): string;
  setTitle(value: string): UserAlert;
  hasTitle(): boolean;
  clearTitle(): UserAlert;

  getBody(): string;
  setBody(value: string): UserAlert;

  getUserAlertButtonsList(): Array<UserAlertButton>;
  setUserAlertButtonsList(value: Array<UserAlertButton>): UserAlert;
  clearUserAlertButtonsList(): UserAlert;
  addUserAlertButtons(value?: UserAlertButton, index?: number): UserAlertButton;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserAlert.AsObject;
  static toObject(includeInstance: boolean, msg: UserAlert): UserAlert.AsObject;
  static serializeBinaryToWriter(message: UserAlert, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserAlert;
  static deserializeBinaryFromReader(message: UserAlert, reader: jspb.BinaryReader): UserAlert;
}

export namespace UserAlert {
  export type AsObject = {
    userAlertUuid: string,
    title?: string,
    body: string,
    userAlertButtonsList: Array<UserAlertButton.AsObject>,
  }
}

export class UserAlertButton extends jspb.Message {
  getButtonText(): string;
  setButtonText(value: string): UserAlertButton;

  getButtonAction(): UserAlertButtonAction;
  setButtonAction(value: UserAlertButtonAction): UserAlertButton;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserAlertButton.AsObject;
  static toObject(includeInstance: boolean, msg: UserAlertButton): UserAlertButton.AsObject;
  static serializeBinaryToWriter(message: UserAlertButton, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserAlertButton;
  static deserializeBinaryFromReader(message: UserAlertButton, reader: jspb.BinaryReader): UserAlertButton;
}

export namespace UserAlertButton {
  export type AsObject = {
    buttonText: string,
    buttonAction: UserAlertButtonAction,
  }
}

export class HelloRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HelloRequest): HelloRequest.AsObject;
  static serializeBinaryToWriter(message: HelloRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloRequest;
  static deserializeBinaryFromReader(message: HelloRequest, reader: jspb.BinaryReader): HelloRequest;
}

export namespace HelloRequest {
  export type AsObject = {
  }
}

export class HelloResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): HelloResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HelloResponse): HelloResponse.AsObject;
  static serializeBinaryToWriter(message: HelloResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloResponse;
  static deserializeBinaryFromReader(message: HelloResponse, reader: jspb.BinaryReader): HelloResponse;
}

export namespace HelloResponse {
  export type AsObject = {
    statusCode: StatusCode,
  }
}

export enum SchemaVersion { 
  CURRENT_SCHEMA_VERSION = 1080,
}
export enum AuthType { 
  PASSWORD = 1,
  FACEBOOK_TOKEN = 2,
  GOOGLE_TOKEN = 3,
  APPLE_TOKEN = 4,
  MICROSOFT_TOKEN = 5,
}
export enum EmailStatus { 
  UNVERIFIED = 1,
  VERIFIED = 2,
  INVALID = 3,
}
export enum UserAlertButtonAction { 
  CLOSE = 1,
  EDIT_PROFILE = 2,
  APP_STORE = 3,
  CONTACT_SUPPORT = 4,
}
export enum VideoResolution { 
  VIDEO_720P = 1,
  VIDEO_1080P = 2,
}
export enum FileType { 
  ZIP = 1,
  EXCEL = 2,
}
export enum StatusCode { 
  UNKNOWN_STATUS = 0,
  SUCCESS = 1,
  NOT_MODIFIED = 100,
  BAD_REQUEST = 101,
  NOT_FOUND = 102,
  FORBIDDEN = 103,
  ACCOUNT_EXISTS = 200,
  INVALID_AUTH = 201,
  NO_PASSWORD_SET = 202,
  ACCOUNT_SUSPENDED = 203,
  UNACCEPTABLE_PASSWORD = 205,
  CONSENT_REQUIRED = 206,
  SSO_AUTH_REQUIRED_MICROSOFT = 207,
  SSO_AUTH_REQUIRED_GOOGLE = 208,
  AUTH_OTP_REQUIRED = 209,
  AUTH_EXPIRED = 210,
  INVALID_OTP = 211,
  UNACCEPTABLE_DOMAIN = 300,
  BAD_WORKSPACE = 301,
  ADDED_TO_WORKSPACE = 302,
  WEB_ACCESS_DENIED = 303,
  DUPLICATE_CIRCLE_TITLE = 304,
  DUPLICATE_CIRCLE_INTERNAL_ID = 305,
}
