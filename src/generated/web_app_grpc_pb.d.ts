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

export class CircleMetadata extends jspb.Message {
  getCircleUuid(): string;
  setCircleUuid(value: string): CircleMetadata;

  getTitle(): string;
  setTitle(value: string): CircleMetadata;

  getMediaCount(): number;
  setMediaCount(value: number): CircleMetadata;

  getMemberCount(): number;
  setMemberCount(value: number): CircleMetadata;

  getLastActivityTimestamp(): number;
  setLastActivityTimestamp(value: number): CircleMetadata;
  hasLastActivityTimestamp(): boolean;
  clearLastActivityTimestamp(): CircleMetadata;

  getInternalId(): string;
  setInternalId(value: string): CircleMetadata;
  hasInternalId(): boolean;
  clearInternalId(): CircleMetadata;

  getGroupUuid(): string;
  setGroupUuid(value: string): CircleMetadata;
  hasGroupUuid(): boolean;
  clearGroupUuid(): CircleMetadata;

  getMemberUuid(): string;
  setMemberUuid(value: string): CircleMetadata;
  hasMemberUuid(): boolean;
  clearMemberUuid(): CircleMetadata;

  getWorkspaceUuid(): string;
  setWorkspaceUuid(value: string): CircleMetadata;
  hasWorkspaceUuid(): boolean;
  clearWorkspaceUuid(): CircleMetadata;

  getRolesList(): Array<Role>;
  setRolesList(value: Array<Role>): CircleMetadata;
  clearRolesList(): CircleMetadata;
  addRoles(value?: Role, index?: number): Role;

  getRoleId(): number;
  setRoleId(value: number): CircleMetadata;
  hasRoleId(): boolean;
  clearRoleId(): CircleMetadata;

  getTargetRoleIdsList(): Array<number>;
  setTargetRoleIdsList(value: Array<number>): CircleMetadata;
  clearTargetRoleIdsList(): CircleMetadata;
  addTargetRoleIds(value: number, index?: number): CircleMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CircleMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: CircleMetadata): CircleMetadata.AsObject;
  static serializeBinaryToWriter(message: CircleMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CircleMetadata;
  static deserializeBinaryFromReader(message: CircleMetadata, reader: jspb.BinaryReader): CircleMetadata;
}

export namespace CircleMetadata {
  export type AsObject = {
    circleUuid: string,
    title: string,
    mediaCount: number,
    memberCount: number,
    lastActivityTimestamp?: number,
    internalId?: string,
    groupUuid?: string,
    memberUuid?: string,
    workspaceUuid?: string,
    rolesList: Array<Role.AsObject>,
    roleId?: number,
    targetRoleIdsList: Array<number>,
  }
}

export class MemberMetadata extends jspb.Message {
  getDisplayName(): string;
  setDisplayName(value: string): MemberMetadata;

  getMediaCount(): number;
  setMediaCount(value: number): MemberMetadata;

  getLastSessionTimestamp(): number;
  setLastSessionTimestamp(value: number): MemberMetadata;
  hasLastSessionTimestamp(): boolean;
  clearLastSessionTimestamp(): MemberMetadata;

  getIsWorkspaceMember(): boolean;
  setIsWorkspaceMember(value: boolean): MemberMetadata;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): MemberMetadata;
  hasAvatarUrl(): boolean;
  clearAvatarUrl(): MemberMetadata;

  getMemberUuid(): string;
  setMemberUuid(value: string): MemberMetadata;

  getUserUuid(): string;
  setUserUuid(value: string): MemberMetadata;

  getIsActive(): boolean;
  setIsActive(value: boolean): MemberMetadata;

  getRoleId(): number;
  setRoleId(value: number): MemberMetadata;

  getTargetRoleIdsList(): Array<number>;
  setTargetRoleIdsList(value: Array<number>): MemberMetadata;
  clearTargetRoleIdsList(): MemberMetadata;
  addTargetRoleIds(value: number, index?: number): MemberMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemberMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: MemberMetadata): MemberMetadata.AsObject;
  static serializeBinaryToWriter(message: MemberMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemberMetadata;
  static deserializeBinaryFromReader(message: MemberMetadata, reader: jspb.BinaryReader): MemberMetadata;
}

export namespace MemberMetadata {
  export type AsObject = {
    displayName: string,
    mediaCount: number,
    lastSessionTimestamp?: number,
    isWorkspaceMember: boolean,
    avatarUrl?: string,
    memberUuid: string,
    userUuid: string,
    isActive: boolean,
    roleId: number,
    targetRoleIdsList: Array<number>,
  }
}

export class RegisterRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): RegisterRequest;

  getPassword(): string;
  setPassword(value: string): RegisterRequest;

  getDisplayName(): string;
  setDisplayName(value: string): RegisterRequest;

  getOtpCode(): string;
  setOtpCode(value: string): RegisterRequest;
  hasOtpCode(): boolean;
  clearOtpCode(): RegisterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequest;
  static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
  export type AsObject = {
    email: string,
    password: string,
    displayName: string,
    otpCode?: string,
  }
}

export class LoginWithEmailPasswordRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): LoginWithEmailPasswordRequest;

  getPassword(): string;
  setPassword(value: string): LoginWithEmailPasswordRequest;

  getOtpCode(): string;
  setOtpCode(value: string): LoginWithEmailPasswordRequest;
  hasOtpCode(): boolean;
  clearOtpCode(): LoginWithEmailPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginWithEmailPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginWithEmailPasswordRequest): LoginWithEmailPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: LoginWithEmailPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginWithEmailPasswordRequest;
  static deserializeBinaryFromReader(message: LoginWithEmailPasswordRequest, reader: jspb.BinaryReader): LoginWithEmailPasswordRequest;
}

export namespace LoginWithEmailPasswordRequest {
  export type AsObject = {
    email: string,
    password: string,
    otpCode?: string,
  }
}

export class LoginWithTokenRequest extends jspb.Message {
  getTokenType(): TokenType;
  setTokenType(value: TokenType): LoginWithTokenRequest;

  getToken(): string;
  setToken(value: string): LoginWithTokenRequest;

  getCreateNewAccount(): boolean;
  setCreateNewAccount(value: boolean): LoginWithTokenRequest;

  getOtpCode(): string;
  setOtpCode(value: string): LoginWithTokenRequest;
  hasOtpCode(): boolean;
  clearOtpCode(): LoginWithTokenRequest;

  getDisplayName(): string;
  setDisplayName(value: string): LoginWithTokenRequest;
  hasDisplayName(): boolean;
  clearDisplayName(): LoginWithTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginWithTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginWithTokenRequest): LoginWithTokenRequest.AsObject;
  static serializeBinaryToWriter(message: LoginWithTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginWithTokenRequest;
  static deserializeBinaryFromReader(message: LoginWithTokenRequest, reader: jspb.BinaryReader): LoginWithTokenRequest;
}

export namespace LoginWithTokenRequest {
  export type AsObject = {
    tokenType: TokenType,
    token: string,
    createNewAccount: boolean,
    otpCode?: string,
    displayName?: string,
  }
}

export class AuthenticationResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): AuthenticationResponse;

  getUserProfile(): Profile | undefined;
  setUserProfile(value?: Profile): AuthenticationResponse;
  hasUserProfile(): boolean;
  clearUserProfile(): AuthenticationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthenticationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthenticationResponse): AuthenticationResponse.AsObject;
  static serializeBinaryToWriter(message: AuthenticationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthenticationResponse;
  static deserializeBinaryFromReader(message: AuthenticationResponse, reader: jspb.BinaryReader): AuthenticationResponse;
}

export namespace AuthenticationResponse {
  export type AsObject = {
    statusCode: StatusCode,
    userProfile?: Profile.AsObject,
  }
}

export class ForgotPasswordRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): ForgotPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForgotPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ForgotPasswordRequest): ForgotPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ForgotPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForgotPasswordRequest;
  static deserializeBinaryFromReader(message: ForgotPasswordRequest, reader: jspb.BinaryReader): ForgotPasswordRequest;
}

export namespace ForgotPasswordRequest {
  export type AsObject = {
    email: string,
  }
}

export class ForgotPasswordResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): ForgotPasswordResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForgotPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ForgotPasswordResponse): ForgotPasswordResponse.AsObject;
  static serializeBinaryToWriter(message: ForgotPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForgotPasswordResponse;
  static deserializeBinaryFromReader(message: ForgotPasswordResponse, reader: jspb.BinaryReader): ForgotPasswordResponse;
}

export namespace ForgotPasswordResponse {
  export type AsObject = {
    statusCode: StatusCode,
  }
}

export class LogoutRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutRequest): LogoutRequest.AsObject;
  static serializeBinaryToWriter(message: LogoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutRequest;
  static deserializeBinaryFromReader(message: LogoutRequest, reader: jspb.BinaryReader): LogoutRequest;
}

export namespace LogoutRequest {
  export type AsObject = {
  }
}

export class LogoutResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): LogoutResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutResponse): LogoutResponse.AsObject;
  static serializeBinaryToWriter(message: LogoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutResponse;
  static deserializeBinaryFromReader(message: LogoutResponse, reader: jspb.BinaryReader): LogoutResponse;
}

export namespace LogoutResponse {
  export type AsObject = {
    statusCode: StatusCode,
  }
}

export class GetJoinPageDataRequest extends jspb.Message {
  getInviteCode(): string;
  setInviteCode(value: string): GetJoinPageDataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJoinPageDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetJoinPageDataRequest): GetJoinPageDataRequest.AsObject;
  static serializeBinaryToWriter(message: GetJoinPageDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJoinPageDataRequest;
  static deserializeBinaryFromReader(message: GetJoinPageDataRequest, reader: jspb.BinaryReader): GetJoinPageDataRequest;
}

export namespace GetJoinPageDataRequest {
  export type AsObject = {
    inviteCode: string,
  }
}

export class GetJoinPageDataResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): GetJoinPageDataResponse;

  getCircleTitle(): string;
  setCircleTitle(value: string): GetJoinPageDataResponse;
  hasCircleTitle(): boolean;
  clearCircleTitle(): GetJoinPageDataResponse;

  getCircleDescription(): string;
  setCircleDescription(value: string): GetJoinPageDataResponse;
  hasCircleDescription(): boolean;
  clearCircleDescription(): GetJoinPageDataResponse;

  getInviterName(): string;
  setInviterName(value: string): GetJoinPageDataResponse;
  hasInviterName(): boolean;
  clearInviterName(): GetJoinPageDataResponse;

  getInviterAvatarUrl(): string;
  setInviterAvatarUrl(value: string): GetJoinPageDataResponse;
  hasInviterAvatarUrl(): boolean;
  clearInviterAvatarUrl(): GetJoinPageDataResponse;

  getMediaUuidsList(): Array<string>;
  setMediaUuidsList(value: Array<string>): GetJoinPageDataResponse;
  clearMediaUuidsList(): GetJoinPageDataResponse;
  addMediaUuids(value: string, index?: number): GetJoinPageDataResponse;

  getCircleWorkspaceUuid(): string;
  setCircleWorkspaceUuid(value: string): GetJoinPageDataResponse;
  hasCircleWorkspaceUuid(): boolean;
  clearCircleWorkspaceUuid(): GetJoinPageDataResponse;

  getCircleWebAppUrl(): string;
  setCircleWebAppUrl(value: string): GetJoinPageDataResponse;
  hasCircleWebAppUrl(): boolean;
  clearCircleWebAppUrl(): GetJoinPageDataResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetJoinPageDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetJoinPageDataResponse): GetJoinPageDataResponse.AsObject;
  static serializeBinaryToWriter(message: GetJoinPageDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetJoinPageDataResponse;
  static deserializeBinaryFromReader(message: GetJoinPageDataResponse, reader: jspb.BinaryReader): GetJoinPageDataResponse;
}

export namespace GetJoinPageDataResponse {
  export type AsObject = {
    statusCode: StatusCode,
    circleTitle?: string,
    circleDescription?: string,
    inviterName?: string,
    inviterAvatarUrl?: string,
    mediaUuidsList: Array<string>,
    circleWorkspaceUuid?: string,
    circleWebAppUrl?: string,
  }
}

export class SendJoinLinkToPhoneResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): SendJoinLinkToPhoneResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendJoinLinkToPhoneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendJoinLinkToPhoneResponse): SendJoinLinkToPhoneResponse.AsObject;
  static serializeBinaryToWriter(message: SendJoinLinkToPhoneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendJoinLinkToPhoneResponse;
  static deserializeBinaryFromReader(message: SendJoinLinkToPhoneResponse, reader: jspb.BinaryReader): SendJoinLinkToPhoneResponse;
}

export namespace SendJoinLinkToPhoneResponse {
  export type AsObject = {
    statusCode: StatusCode,
  }
}

export class GetCurrentUserInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentUserInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentUserInfoRequest): GetCurrentUserInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetCurrentUserInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentUserInfoRequest;
  static deserializeBinaryFromReader(message: GetCurrentUserInfoRequest, reader: jspb.BinaryReader): GetCurrentUserInfoRequest;
}

export namespace GetCurrentUserInfoRequest {
  export type AsObject = {
  }
}

export class AppConfig extends jspb.Message {
  getInternalIdsEnabled(): boolean;
  setInternalIdsEnabled(value: boolean): AppConfig;

  getInternalIdShortHint(): string;
  setInternalIdShortHint(value: string): AppConfig;
  hasInternalIdShortHint(): boolean;
  clearInternalIdShortHint(): AppConfig;

  getInternalIdLongHint(): string;
  setInternalIdLongHint(value: string): AppConfig;
  hasInternalIdLongHint(): boolean;
  clearInternalIdLongHint(): AppConfig;

  getInternalIdRegexValidator(): string;
  setInternalIdRegexValidator(value: string): AppConfig;
  hasInternalIdRegexValidator(): boolean;
  clearInternalIdRegexValidator(): AppConfig;

  getReactionSet(): ReactionSet | undefined;
  setReactionSet(value?: ReactionSet): AppConfig;
  hasReactionSet(): boolean;
  clearReactionSet(): AppConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AppConfig): AppConfig.AsObject;
  static serializeBinaryToWriter(message: AppConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppConfig;
  static deserializeBinaryFromReader(message: AppConfig, reader: jspb.BinaryReader): AppConfig;
}

export namespace AppConfig {
  export type AsObject = {
    internalIdsEnabled: boolean,
    internalIdShortHint?: string,
    internalIdLongHint?: string,
    internalIdRegexValidator?: string,
    reactionSet?: ReactionSet.AsObject,
  }
}

export class GetCurrentUserInfoResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): GetCurrentUserInfoResponse;

  getUpdatedProfile(): Profile | undefined;
  setUpdatedProfile(value?: Profile): GetCurrentUserInfoResponse;
  hasUpdatedProfile(): boolean;
  clearUpdatedProfile(): GetCurrentUserInfoResponse;

  getAppConfig(): AppConfig | undefined;
  setAppConfig(value?: AppConfig): GetCurrentUserInfoResponse;
  hasAppConfig(): boolean;
  clearAppConfig(): GetCurrentUserInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrentUserInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrentUserInfoResponse): GetCurrentUserInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetCurrentUserInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrentUserInfoResponse;
  static deserializeBinaryFromReader(message: GetCurrentUserInfoResponse, reader: jspb.BinaryReader): GetCurrentUserInfoResponse;
}

export namespace GetCurrentUserInfoResponse {
  export type AsObject = {
    statusCode: StatusCode,
    updatedProfile?: Profile.AsObject,
    appConfig?: AppConfig.AsObject,
  }
}

export class GetCirclesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCirclesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCirclesRequest): GetCirclesRequest.AsObject;
  static serializeBinaryToWriter(message: GetCirclesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCirclesRequest;
  static deserializeBinaryFromReader(message: GetCirclesRequest, reader: jspb.BinaryReader): GetCirclesRequest;
}

export namespace GetCirclesRequest {
  export type AsObject = {
  }
}

export class GetCirclesResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): GetCirclesResponse;

  getCirclesList(): Array<Circle>;
  setCirclesList(value: Array<Circle>): GetCirclesResponse;
  clearCirclesList(): GetCirclesResponse;
  addCircles(value?: Circle, index?: number): Circle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCirclesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCirclesResponse): GetCirclesResponse.AsObject;
  static serializeBinaryToWriter(message: GetCirclesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCirclesResponse;
  static deserializeBinaryFromReader(message: GetCirclesResponse, reader: jspb.BinaryReader): GetCirclesResponse;
}

export namespace GetCirclesResponse {
  export type AsObject = {
    statusCode: StatusCode,
    circlesList: Array<Circle.AsObject>,
  }
}

export class GetCircleDataRequest extends jspb.Message {
  getCircleUuid(): string;
  setCircleUuid(value: string): GetCircleDataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCircleDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCircleDataRequest): GetCircleDataRequest.AsObject;
  static serializeBinaryToWriter(message: GetCircleDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCircleDataRequest;
  static deserializeBinaryFromReader(message: GetCircleDataRequest, reader: jspb.BinaryReader): GetCircleDataRequest;
}

export namespace GetCircleDataRequest {
  export type AsObject = {
    circleUuid: string,
  }
}

export class GetCircleDataResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): GetCircleDataResponse;

  getMembersList(): Array<CircleMember>;
  setMembersList(value: Array<CircleMember>): GetCircleDataResponse;
  clearMembersList(): GetCircleDataResponse;
  addMembers(value?: CircleMember, index?: number): CircleMember;

  getMediaList(): Array<Media>;
  setMediaList(value: Array<Media>): GetCircleDataResponse;
  clearMediaList(): GetCircleDataResponse;
  addMedia(value?: Media, index?: number): Media;

  getPermissions(): CirclePermissions | undefined;
  setPermissions(value?: CirclePermissions): GetCircleDataResponse;
  hasPermissions(): boolean;
  clearPermissions(): GetCircleDataResponse;

  getConfig(): CircleConfig | undefined;
  setConfig(value?: CircleConfig): GetCircleDataResponse;
  hasConfig(): boolean;
  clearConfig(): GetCircleDataResponse;

  getCircleMembershipConfig(): CircleMembershipConfig | undefined;
  setCircleMembershipConfig(value?: CircleMembershipConfig): GetCircleDataResponse;
  hasCircleMembershipConfig(): boolean;
  clearCircleMembershipConfig(): GetCircleDataResponse;

  getGroupUuid(): string;
  setGroupUuid(value: string): GetCircleDataResponse;
  hasGroupUuid(): boolean;
  clearGroupUuid(): GetCircleDataResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCircleDataResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCircleDataResponse): GetCircleDataResponse.AsObject;
  static serializeBinaryToWriter(message: GetCircleDataResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCircleDataResponse;
  static deserializeBinaryFromReader(message: GetCircleDataResponse, reader: jspb.BinaryReader): GetCircleDataResponse;
}

export namespace GetCircleDataResponse {
  export type AsObject = {
    statusCode: StatusCode,
    membersList: Array<CircleMember.AsObject>,
    mediaList: Array<Media.AsObject>,
    permissions?: CirclePermissions.AsObject,
    config?: CircleConfig.AsObject,
    circleMembershipConfig?: CircleMembershipConfig.AsObject,
    groupUuid?: string,
  }
}

export class GetReactionsForMediaRequest extends jspb.Message {
  getMediaUuid(): string;
  setMediaUuid(value: string): GetReactionsForMediaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReactionsForMediaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetReactionsForMediaRequest): GetReactionsForMediaRequest.AsObject;
  static serializeBinaryToWriter(message: GetReactionsForMediaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReactionsForMediaRequest;
  static deserializeBinaryFromReader(message: GetReactionsForMediaRequest, reader: jspb.BinaryReader): GetReactionsForMediaRequest;
}

export namespace GetReactionsForMediaRequest {
  export type AsObject = {
    mediaUuid: string,
  }
}

export class GetReactionsForMediaResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): GetReactionsForMediaResponse;

  getMediaReactionsList(): Array<MediaReaction>;
  setMediaReactionsList(value: Array<MediaReaction>): GetReactionsForMediaResponse;
  clearMediaReactionsList(): GetReactionsForMediaResponse;
  addMediaReactions(value?: MediaReaction, index?: number): MediaReaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReactionsForMediaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetReactionsForMediaResponse): GetReactionsForMediaResponse.AsObject;
  static serializeBinaryToWriter(message: GetReactionsForMediaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReactionsForMediaResponse;
  static deserializeBinaryFromReader(message: GetReactionsForMediaResponse, reader: jspb.BinaryReader): GetReactionsForMediaResponse;
}

export namespace GetReactionsForMediaResponse {
  export type AsObject = {
    statusCode: StatusCode,
    mediaReactionsList: Array<MediaReaction.AsObject>,
  }
}

export class GetCommentsForMediaRequest extends jspb.Message {
  getMediaUuid(): string;
  setMediaUuid(value: string): GetCommentsForMediaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCommentsForMediaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCommentsForMediaRequest): GetCommentsForMediaRequest.AsObject;
  static serializeBinaryToWriter(message: GetCommentsForMediaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCommentsForMediaRequest;
  static deserializeBinaryFromReader(message: GetCommentsForMediaRequest, reader: jspb.BinaryReader): GetCommentsForMediaRequest;
}

export namespace GetCommentsForMediaRequest {
  export type AsObject = {
    mediaUuid: string,
  }
}

export class GetCommentsForMediaResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): GetCommentsForMediaResponse;

  getMediaCommentsList(): Array<MediaComment>;
  setMediaCommentsList(value: Array<MediaComment>): GetCommentsForMediaResponse;
  clearMediaCommentsList(): GetCommentsForMediaResponse;
  addMediaComments(value?: MediaComment, index?: number): MediaComment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCommentsForMediaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCommentsForMediaResponse): GetCommentsForMediaResponse.AsObject;
  static serializeBinaryToWriter(message: GetCommentsForMediaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCommentsForMediaResponse;
  static deserializeBinaryFromReader(message: GetCommentsForMediaResponse, reader: jspb.BinaryReader): GetCommentsForMediaResponse;
}

export namespace GetCommentsForMediaResponse {
  export type AsObject = {
    statusCode: StatusCode,
    mediaCommentsList: Array<MediaComment.AsObject>,
  }
}

export class GetInviteRequest extends jspb.Message {
  getCircleUuid(): string;
  setCircleUuid(value: string): GetInviteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInviteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInviteRequest): GetInviteRequest.AsObject;
  static serializeBinaryToWriter(message: GetInviteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInviteRequest;
  static deserializeBinaryFromReader(message: GetInviteRequest, reader: jspb.BinaryReader): GetInviteRequest;
}

export namespace GetInviteRequest {
  export type AsObject = {
    circleUuid: string,
  }
}

export class GetInviteResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): GetInviteResponse;

  getInviteCode(): string;
  setInviteCode(value: string): GetInviteResponse;
  hasInviteCode(): boolean;
  clearInviteCode(): GetInviteResponse;

  getInviteUrl(): string;
  setInviteUrl(value: string): GetInviteResponse;
  hasInviteUrl(): boolean;
  clearInviteUrl(): GetInviteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInviteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInviteResponse): GetInviteResponse.AsObject;
  static serializeBinaryToWriter(message: GetInviteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInviteResponse;
  static deserializeBinaryFromReader(message: GetInviteResponse, reader: jspb.BinaryReader): GetInviteResponse;
}

export namespace GetInviteResponse {
  export type AsObject = {
    statusCode: StatusCode,
    inviteCode?: string,
    inviteUrl?: string,
  }
}

export class GetInviteInformationRequest extends jspb.Message {
  getInviteCode(): string;
  setInviteCode(value: string): GetInviteInformationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInviteInformationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInviteInformationRequest): GetInviteInformationRequest.AsObject;
  static serializeBinaryToWriter(message: GetInviteInformationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInviteInformationRequest;
  static deserializeBinaryFromReader(message: GetInviteInformationRequest, reader: jspb.BinaryReader): GetInviteInformationRequest;
}

export namespace GetInviteInformationRequest {
  export type AsObject = {
    inviteCode: string,
  }
}

export class GetInviteInformationResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): GetInviteInformationResponse;

  getCircleTitle(): string;
  setCircleTitle(value: string): GetInviteInformationResponse;
  hasCircleTitle(): boolean;
  clearCircleTitle(): GetInviteInformationResponse;

  getPreviewMediaUuid(): string;
  setPreviewMediaUuid(value: string): GetInviteInformationResponse;
  hasPreviewMediaUuid(): boolean;
  clearPreviewMediaUuid(): GetInviteInformationResponse;

  getMediaCount(): number;
  setMediaCount(value: number): GetInviteInformationResponse;
  hasMediaCount(): boolean;
  clearMediaCount(): GetInviteInformationResponse;

  getMemberCount(): number;
  setMemberCount(value: number): GetInviteInformationResponse;
  hasMemberCount(): boolean;
  clearMemberCount(): GetInviteInformationResponse;

  getInviterMember(): CircleMember | undefined;
  setInviterMember(value?: CircleMember): GetInviteInformationResponse;
  hasInviterMember(): boolean;
  clearInviterMember(): GetInviteInformationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInviteInformationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInviteInformationResponse): GetInviteInformationResponse.AsObject;
  static serializeBinaryToWriter(message: GetInviteInformationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInviteInformationResponse;
  static deserializeBinaryFromReader(message: GetInviteInformationResponse, reader: jspb.BinaryReader): GetInviteInformationResponse;
}

export namespace GetInviteInformationResponse {
  export type AsObject = {
    statusCode: StatusCode,
    circleTitle?: string,
    previewMediaUuid?: string,
    mediaCount?: number,
    memberCount?: number,
    inviterMember?: CircleMember.AsObject,
  }
}

export class GetCircleDownloadURLRequest extends jspb.Message {
  getCircleUuid(): string;
  setCircleUuid(value: string): GetCircleDownloadURLRequest;

  getFileType(): FileType;
  setFileType(value: FileType): GetCircleDownloadURLRequest;

  getMediaUuidsList(): Array<string>;
  setMediaUuidsList(value: Array<string>): GetCircleDownloadURLRequest;
  clearMediaUuidsList(): GetCircleDownloadURLRequest;
  addMediaUuids(value: string, index?: number): GetCircleDownloadURLRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCircleDownloadURLRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCircleDownloadURLRequest): GetCircleDownloadURLRequest.AsObject;
  static serializeBinaryToWriter(message: GetCircleDownloadURLRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCircleDownloadURLRequest;
  static deserializeBinaryFromReader(message: GetCircleDownloadURLRequest, reader: jspb.BinaryReader): GetCircleDownloadURLRequest;
}

export namespace GetCircleDownloadURLRequest {
  export type AsObject = {
    circleUuid: string,
    fileType: FileType,
    mediaUuidsList: Array<string>,
  }
}

export class GetCircleDownloadURLResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): GetCircleDownloadURLResponse;

  getDownloadUrl(): string;
  setDownloadUrl(value: string): GetCircleDownloadURLResponse;
  hasDownloadUrl(): boolean;
  clearDownloadUrl(): GetCircleDownloadURLResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCircleDownloadURLResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCircleDownloadURLResponse): GetCircleDownloadURLResponse.AsObject;
  static serializeBinaryToWriter(message: GetCircleDownloadURLResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCircleDownloadURLResponse;
  static deserializeBinaryFromReader(message: GetCircleDownloadURLResponse, reader: jspb.BinaryReader): GetCircleDownloadURLResponse;
}

export namespace GetCircleDownloadURLResponse {
  export type AsObject = {
    statusCode: StatusCode,
    downloadUrl?: string,
  }
}

export class GetGroupCirclesRequest extends jspb.Message {
  getGroupUuid(): string;
  setGroupUuid(value: string): GetGroupCirclesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupCirclesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupCirclesRequest): GetGroupCirclesRequest.AsObject;
  static serializeBinaryToWriter(message: GetGroupCirclesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupCirclesRequest;
  static deserializeBinaryFromReader(message: GetGroupCirclesRequest, reader: jspb.BinaryReader): GetGroupCirclesRequest;
}

export namespace GetGroupCirclesRequest {
  export type AsObject = {
    groupUuid: string,
  }
}

export class GetGroupCirclesResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): GetGroupCirclesResponse;

  getGroupCirclesList(): Array<Circle>;
  setGroupCirclesList(value: Array<Circle>): GetGroupCirclesResponse;
  clearGroupCirclesList(): GetGroupCirclesResponse;
  addGroupCircles(value?: Circle, index?: number): Circle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGroupCirclesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGroupCirclesResponse): GetGroupCirclesResponse.AsObject;
  static serializeBinaryToWriter(message: GetGroupCirclesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGroupCirclesResponse;
  static deserializeBinaryFromReader(message: GetGroupCirclesResponse, reader: jspb.BinaryReader): GetGroupCirclesResponse;
}

export namespace GetGroupCirclesResponse {
  export type AsObject = {
    statusCode: StatusCode,
    groupCirclesList: Array<Circle.AsObject>,
  }
}

export class GetViewableGroupsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetViewableGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetViewableGroupsRequest): GetViewableGroupsRequest.AsObject;
  static serializeBinaryToWriter(message: GetViewableGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetViewableGroupsRequest;
  static deserializeBinaryFromReader(message: GetViewableGroupsRequest, reader: jspb.BinaryReader): GetViewableGroupsRequest;
}

export namespace GetViewableGroupsRequest {
  export type AsObject = {
  }
}

export class GetViewableGroupsResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): GetViewableGroupsResponse;

  getViewableGroupsList(): Array<Group>;
  setViewableGroupsList(value: Array<Group>): GetViewableGroupsResponse;
  clearViewableGroupsList(): GetViewableGroupsResponse;
  addViewableGroups(value?: Group, index?: number): Group;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetViewableGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetViewableGroupsResponse): GetViewableGroupsResponse.AsObject;
  static serializeBinaryToWriter(message: GetViewableGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetViewableGroupsResponse;
  static deserializeBinaryFromReader(message: GetViewableGroupsResponse, reader: jspb.BinaryReader): GetViewableGroupsResponse;
}

export namespace GetViewableGroupsResponse {
  export type AsObject = {
    statusCode: StatusCode,
    viewableGroupsList: Array<Group.AsObject>,
  }
}

export class CreateCircleRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): CreateCircleRequest;

  getInternalId(): string;
  setInternalId(value: string): CreateCircleRequest;
  hasInternalId(): boolean;
  clearInternalId(): CreateCircleRequest;

  getGroupUuid(): string;
  setGroupUuid(value: string): CreateCircleRequest;
  hasGroupUuid(): boolean;
  clearGroupUuid(): CreateCircleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCircleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCircleRequest): CreateCircleRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCircleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCircleRequest;
  static deserializeBinaryFromReader(message: CreateCircleRequest, reader: jspb.BinaryReader): CreateCircleRequest;
}

export namespace CreateCircleRequest {
  export type AsObject = {
    title: string,
    internalId?: string,
    groupUuid?: string,
  }
}

export class CreateCircleResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): CreateCircleResponse;

  getCircle(): Circle | undefined;
  setCircle(value?: Circle): CreateCircleResponse;
  hasCircle(): boolean;
  clearCircle(): CreateCircleResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCircleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCircleResponse): CreateCircleResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCircleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCircleResponse;
  static deserializeBinaryFromReader(message: CreateCircleResponse, reader: jspb.BinaryReader): CreateCircleResponse;
}

export namespace CreateCircleResponse {
  export type AsObject = {
    statusCode: StatusCode,
    circle?: Circle.AsObject,
  }
}

export class AddCommentRequest extends jspb.Message {
  getMediaUuid(): string;
  setMediaUuid(value: string): AddCommentRequest;

  getCommentText(): string;
  setCommentText(value: string): AddCommentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddCommentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddCommentRequest): AddCommentRequest.AsObject;
  static serializeBinaryToWriter(message: AddCommentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddCommentRequest;
  static deserializeBinaryFromReader(message: AddCommentRequest, reader: jspb.BinaryReader): AddCommentRequest;
}

export namespace AddCommentRequest {
  export type AsObject = {
    mediaUuid: string,
    commentText: string,
  }
}

export class AddCommentResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): AddCommentResponse;

  getMediaComment(): MediaComment | undefined;
  setMediaComment(value?: MediaComment): AddCommentResponse;
  hasMediaComment(): boolean;
  clearMediaComment(): AddCommentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddCommentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddCommentResponse): AddCommentResponse.AsObject;
  static serializeBinaryToWriter(message: AddCommentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddCommentResponse;
  static deserializeBinaryFromReader(message: AddCommentResponse, reader: jspb.BinaryReader): AddCommentResponse;
}

export namespace AddCommentResponse {
  export type AsObject = {
    statusCode: StatusCode,
    mediaComment?: MediaComment.AsObject,
  }
}

export class RemoveCommentRequest extends jspb.Message {
  getCommentUuid(): string;
  setCommentUuid(value: string): RemoveCommentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveCommentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveCommentRequest): RemoveCommentRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveCommentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveCommentRequest;
  static deserializeBinaryFromReader(message: RemoveCommentRequest, reader: jspb.BinaryReader): RemoveCommentRequest;
}

export namespace RemoveCommentRequest {
  export type AsObject = {
    commentUuid: string,
  }
}

export class RemoveCommentResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): RemoveCommentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveCommentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveCommentResponse): RemoveCommentResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveCommentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveCommentResponse;
  static deserializeBinaryFromReader(message: RemoveCommentResponse, reader: jspb.BinaryReader): RemoveCommentResponse;
}

export namespace RemoveCommentResponse {
  export type AsObject = {
    statusCode: StatusCode,
  }
}

export class RemoveMemberRequest extends jspb.Message {
  getMemberUuid(): string;
  setMemberUuid(value: string): RemoveMemberRequest;

  getBlockFromRejoining(): boolean;
  setBlockFromRejoining(value: boolean): RemoveMemberRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveMemberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveMemberRequest): RemoveMemberRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveMemberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveMemberRequest;
  static deserializeBinaryFromReader(message: RemoveMemberRequest, reader: jspb.BinaryReader): RemoveMemberRequest;
}

export namespace RemoveMemberRequest {
  export type AsObject = {
    memberUuid: string,
    blockFromRejoining: boolean,
  }
}

export class RemoveMemberResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): RemoveMemberResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveMemberResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveMemberResponse): RemoveMemberResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveMemberResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveMemberResponse;
  static deserializeBinaryFromReader(message: RemoveMemberResponse, reader: jspb.BinaryReader): RemoveMemberResponse;
}

export namespace RemoveMemberResponse {
  export type AsObject = {
    statusCode: StatusCode,
  }
}

export class UpdateCircleTitleRequest extends jspb.Message {
  getCircleUuid(): string;
  setCircleUuid(value: string): UpdateCircleTitleRequest;

  getTitleText(): string;
  setTitleText(value: string): UpdateCircleTitleRequest;

  getInternalId(): string;
  setInternalId(value: string): UpdateCircleTitleRequest;
  hasInternalId(): boolean;
  clearInternalId(): UpdateCircleTitleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCircleTitleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCircleTitleRequest): UpdateCircleTitleRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCircleTitleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCircleTitleRequest;
  static deserializeBinaryFromReader(message: UpdateCircleTitleRequest, reader: jspb.BinaryReader): UpdateCircleTitleRequest;
}

export namespace UpdateCircleTitleRequest {
  export type AsObject = {
    circleUuid: string,
    titleText: string,
    internalId?: string,
  }
}

export class UpdateCircleTitleResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): UpdateCircleTitleResponse;

  getCircle(): Circle | undefined;
  setCircle(value?: Circle): UpdateCircleTitleResponse;
  hasCircle(): boolean;
  clearCircle(): UpdateCircleTitleResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCircleTitleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCircleTitleResponse): UpdateCircleTitleResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCircleTitleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCircleTitleResponse;
  static deserializeBinaryFromReader(message: UpdateCircleTitleResponse, reader: jspb.BinaryReader): UpdateCircleTitleResponse;
}

export namespace UpdateCircleTitleResponse {
  export type AsObject = {
    statusCode: StatusCode,
    circle?: Circle.AsObject,
  }
}

export class RemoveMediaRequest extends jspb.Message {
  getMediaUuid(): string;
  setMediaUuid(value: string): RemoveMediaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveMediaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveMediaRequest): RemoveMediaRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveMediaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveMediaRequest;
  static deserializeBinaryFromReader(message: RemoveMediaRequest, reader: jspb.BinaryReader): RemoveMediaRequest;
}

export namespace RemoveMediaRequest {
  export type AsObject = {
    mediaUuid: string,
  }
}

export class RemoveMediaResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): RemoveMediaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveMediaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveMediaResponse): RemoveMediaResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveMediaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveMediaResponse;
  static deserializeBinaryFromReader(message: RemoveMediaResponse, reader: jspb.BinaryReader): RemoveMediaResponse;
}

export namespace RemoveMediaResponse {
  export type AsObject = {
    statusCode: StatusCode,
  }
}

export class RemoveMediaBatchRequest extends jspb.Message {
  getMediaUuidsList(): Array<string>;
  setMediaUuidsList(value: Array<string>): RemoveMediaBatchRequest;
  clearMediaUuidsList(): RemoveMediaBatchRequest;
  addMediaUuids(value: string, index?: number): RemoveMediaBatchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveMediaBatchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveMediaBatchRequest): RemoveMediaBatchRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveMediaBatchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveMediaBatchRequest;
  static deserializeBinaryFromReader(message: RemoveMediaBatchRequest, reader: jspb.BinaryReader): RemoveMediaBatchRequest;
}

export namespace RemoveMediaBatchRequest {
  export type AsObject = {
    mediaUuidsList: Array<string>,
  }
}

export class RemoveMediaBatchResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): RemoveMediaBatchResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveMediaBatchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveMediaBatchResponse): RemoveMediaBatchResponse.AsObject;
  static serializeBinaryToWriter(message: RemoveMediaBatchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveMediaBatchResponse;
  static deserializeBinaryFromReader(message: RemoveMediaBatchResponse, reader: jspb.BinaryReader): RemoveMediaBatchResponse;
}

export namespace RemoveMediaBatchResponse {
  export type AsObject = {
    statusCode: StatusCode,
  }
}

export class ReorderCircleMediaRequest extends jspb.Message {
  getCircleUuid(): string;
  setCircleUuid(value: string): ReorderCircleMediaRequest;

  getMediaUuidsList(): Array<string>;
  setMediaUuidsList(value: Array<string>): ReorderCircleMediaRequest;
  clearMediaUuidsList(): ReorderCircleMediaRequest;
  addMediaUuids(value: string, index?: number): ReorderCircleMediaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReorderCircleMediaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReorderCircleMediaRequest): ReorderCircleMediaRequest.AsObject;
  static serializeBinaryToWriter(message: ReorderCircleMediaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReorderCircleMediaRequest;
  static deserializeBinaryFromReader(message: ReorderCircleMediaRequest, reader: jspb.BinaryReader): ReorderCircleMediaRequest;
}

export namespace ReorderCircleMediaRequest {
  export type AsObject = {
    circleUuid: string,
    mediaUuidsList: Array<string>,
  }
}

export class ReorderCircleMediaResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): ReorderCircleMediaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReorderCircleMediaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReorderCircleMediaResponse): ReorderCircleMediaResponse.AsObject;
  static serializeBinaryToWriter(message: ReorderCircleMediaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReorderCircleMediaResponse;
  static deserializeBinaryFromReader(message: ReorderCircleMediaResponse, reader: jspb.BinaryReader): ReorderCircleMediaResponse;
}

export namespace ReorderCircleMediaResponse {
  export type AsObject = {
    statusCode: StatusCode,
  }
}

export class UpdateMediaCaptionRequest extends jspb.Message {
  getMediaUuid(): string;
  setMediaUuid(value: string): UpdateMediaCaptionRequest;

  getCaptionText(): string;
  setCaptionText(value: string): UpdateMediaCaptionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMediaCaptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMediaCaptionRequest): UpdateMediaCaptionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateMediaCaptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMediaCaptionRequest;
  static deserializeBinaryFromReader(message: UpdateMediaCaptionRequest, reader: jspb.BinaryReader): UpdateMediaCaptionRequest;
}

export namespace UpdateMediaCaptionRequest {
  export type AsObject = {
    mediaUuid: string,
    captionText: string,
  }
}

export class UpdateMediaCaptionResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): UpdateMediaCaptionResponse;

  getMedia(): Media | undefined;
  setMedia(value?: Media): UpdateMediaCaptionResponse;
  hasMedia(): boolean;
  clearMedia(): UpdateMediaCaptionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMediaCaptionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMediaCaptionResponse): UpdateMediaCaptionResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateMediaCaptionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMediaCaptionResponse;
  static deserializeBinaryFromReader(message: UpdateMediaCaptionResponse, reader: jspb.BinaryReader): UpdateMediaCaptionResponse;
}

export namespace UpdateMediaCaptionResponse {
  export type AsObject = {
    statusCode: StatusCode,
    media?: Media.AsObject,
  }
}

export class SetReactionRequest extends jspb.Message {
  getMediaUuid(): string;
  setMediaUuid(value: string): SetReactionRequest;

  getReactionText(): string;
  setReactionText(value: string): SetReactionRequest;
  hasReactionText(): boolean;
  clearReactionText(): SetReactionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetReactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetReactionRequest): SetReactionRequest.AsObject;
  static serializeBinaryToWriter(message: SetReactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetReactionRequest;
  static deserializeBinaryFromReader(message: SetReactionRequest, reader: jspb.BinaryReader): SetReactionRequest;
}

export namespace SetReactionRequest {
  export type AsObject = {
    mediaUuid: string,
    reactionText?: string,
  }
}

export class SetReactionResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): SetReactionResponse;

  getMediaReaction(): MediaReaction | undefined;
  setMediaReaction(value?: MediaReaction): SetReactionResponse;
  hasMediaReaction(): boolean;
  clearMediaReaction(): SetReactionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetReactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetReactionResponse): SetReactionResponse.AsObject;
  static serializeBinaryToWriter(message: SetReactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetReactionResponse;
  static deserializeBinaryFromReader(message: SetReactionResponse, reader: jspb.BinaryReader): SetReactionResponse;
}

export namespace SetReactionResponse {
  export type AsObject = {
    statusCode: StatusCode,
    mediaReaction?: MediaReaction.AsObject,
  }
}

export class SetCircleCoverPhotoRequest extends jspb.Message {
  getCircleUuid(): string;
  setCircleUuid(value: string): SetCircleCoverPhotoRequest;

  getMediaUuid(): string;
  setMediaUuid(value: string): SetCircleCoverPhotoRequest;
  hasMediaUuid(): boolean;
  clearMediaUuid(): SetCircleCoverPhotoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetCircleCoverPhotoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetCircleCoverPhotoRequest): SetCircleCoverPhotoRequest.AsObject;
  static serializeBinaryToWriter(message: SetCircleCoverPhotoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetCircleCoverPhotoRequest;
  static deserializeBinaryFromReader(message: SetCircleCoverPhotoRequest, reader: jspb.BinaryReader): SetCircleCoverPhotoRequest;
}

export namespace SetCircleCoverPhotoRequest {
  export type AsObject = {
    circleUuid: string,
    mediaUuid?: string,
  }
}

export class SetCircleCoverPhotoResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): SetCircleCoverPhotoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetCircleCoverPhotoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetCircleCoverPhotoResponse): SetCircleCoverPhotoResponse.AsObject;
  static serializeBinaryToWriter(message: SetCircleCoverPhotoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetCircleCoverPhotoResponse;
  static deserializeBinaryFromReader(message: SetCircleCoverPhotoResponse, reader: jspb.BinaryReader): SetCircleCoverPhotoResponse;
}

export namespace SetCircleCoverPhotoResponse {
  export type AsObject = {
    statusCode: StatusCode,
  }
}

export class SetCirclePushPreferenceRequest extends jspb.Message {
  getCircleUuid(): string;
  setCircleUuid(value: string): SetCirclePushPreferenceRequest;

  getPushEnabled(): boolean;
  setPushEnabled(value: boolean): SetCirclePushPreferenceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetCirclePushPreferenceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetCirclePushPreferenceRequest): SetCirclePushPreferenceRequest.AsObject;
  static serializeBinaryToWriter(message: SetCirclePushPreferenceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetCirclePushPreferenceRequest;
  static deserializeBinaryFromReader(message: SetCirclePushPreferenceRequest, reader: jspb.BinaryReader): SetCirclePushPreferenceRequest;
}

export namespace SetCirclePushPreferenceRequest {
  export type AsObject = {
    circleUuid: string,
    pushEnabled: boolean,
  }
}

export class SetCirclePushPreferenceResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): SetCirclePushPreferenceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetCirclePushPreferenceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetCirclePushPreferenceResponse): SetCirclePushPreferenceResponse.AsObject;
  static serializeBinaryToWriter(message: SetCirclePushPreferenceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetCirclePushPreferenceResponse;
  static deserializeBinaryFromReader(message: SetCirclePushPreferenceResponse, reader: jspb.BinaryReader): SetCirclePushPreferenceResponse;
}

export namespace SetCirclePushPreferenceResponse {
  export type AsObject = {
    statusCode: StatusCode,
  }
}

export class JoinGroupCircleRequest extends jspb.Message {
  getCircleUuid(): string;
  setCircleUuid(value: string): JoinGroupCircleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinGroupCircleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JoinGroupCircleRequest): JoinGroupCircleRequest.AsObject;
  static serializeBinaryToWriter(message: JoinGroupCircleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinGroupCircleRequest;
  static deserializeBinaryFromReader(message: JoinGroupCircleRequest, reader: jspb.BinaryReader): JoinGroupCircleRequest;
}

export namespace JoinGroupCircleRequest {
  export type AsObject = {
    circleUuid: string,
  }
}

export class JoinGroupCircleResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): JoinGroupCircleResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinGroupCircleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JoinGroupCircleResponse): JoinGroupCircleResponse.AsObject;
  static serializeBinaryToWriter(message: JoinGroupCircleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinGroupCircleResponse;
  static deserializeBinaryFromReader(message: JoinGroupCircleResponse, reader: jspb.BinaryReader): JoinGroupCircleResponse;
}

export namespace JoinGroupCircleResponse {
  export type AsObject = {
    statusCode: StatusCode,
  }
}

export class JoinCircleByShareCodeRequest extends jspb.Message {
  getShareCode(): string;
  setShareCode(value: string): JoinCircleByShareCodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinCircleByShareCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JoinCircleByShareCodeRequest): JoinCircleByShareCodeRequest.AsObject;
  static serializeBinaryToWriter(message: JoinCircleByShareCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinCircleByShareCodeRequest;
  static deserializeBinaryFromReader(message: JoinCircleByShareCodeRequest, reader: jspb.BinaryReader): JoinCircleByShareCodeRequest;
}

export namespace JoinCircleByShareCodeRequest {
  export type AsObject = {
    shareCode: string,
  }
}

export class JoinCircleByShareCodeResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): JoinCircleByShareCodeResponse;

  getCircleUuid(): string;
  setCircleUuid(value: string): JoinCircleByShareCodeResponse;
  hasCircleUuid(): boolean;
  clearCircleUuid(): JoinCircleByShareCodeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinCircleByShareCodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JoinCircleByShareCodeResponse): JoinCircleByShareCodeResponse.AsObject;
  static serializeBinaryToWriter(message: JoinCircleByShareCodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinCircleByShareCodeResponse;
  static deserializeBinaryFromReader(message: JoinCircleByShareCodeResponse, reader: jspb.BinaryReader): JoinCircleByShareCodeResponse;
}

export namespace JoinCircleByShareCodeResponse {
  export type AsObject = {
    statusCode: StatusCode,
    circleUuid?: string,
  }
}

export class JoinCircleByInviteCodeRequest extends jspb.Message {
  getInviteCode(): string;
  setInviteCode(value: string): JoinCircleByInviteCodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinCircleByInviteCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JoinCircleByInviteCodeRequest): JoinCircleByInviteCodeRequest.AsObject;
  static serializeBinaryToWriter(message: JoinCircleByInviteCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinCircleByInviteCodeRequest;
  static deserializeBinaryFromReader(message: JoinCircleByInviteCodeRequest, reader: jspb.BinaryReader): JoinCircleByInviteCodeRequest;
}

export namespace JoinCircleByInviteCodeRequest {
  export type AsObject = {
    inviteCode: string,
  }
}

export class JoinCircleByInviteCodeResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): JoinCircleByInviteCodeResponse;

  getCircleUuid(): string;
  setCircleUuid(value: string): JoinCircleByInviteCodeResponse;
  hasCircleUuid(): boolean;
  clearCircleUuid(): JoinCircleByInviteCodeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinCircleByInviteCodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JoinCircleByInviteCodeResponse): JoinCircleByInviteCodeResponse.AsObject;
  static serializeBinaryToWriter(message: JoinCircleByInviteCodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinCircleByInviteCodeResponse;
  static deserializeBinaryFromReader(message: JoinCircleByInviteCodeResponse, reader: jspb.BinaryReader): JoinCircleByInviteCodeResponse;
}

export namespace JoinCircleByInviteCodeResponse {
  export type AsObject = {
    statusCode: StatusCode,
    circleUuid?: string,
  }
}

export class LeaveCircleRequest extends jspb.Message {
  getCircleUuid(): string;
  setCircleUuid(value: string): LeaveCircleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaveCircleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LeaveCircleRequest): LeaveCircleRequest.AsObject;
  static serializeBinaryToWriter(message: LeaveCircleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaveCircleRequest;
  static deserializeBinaryFromReader(message: LeaveCircleRequest, reader: jspb.BinaryReader): LeaveCircleRequest;
}

export namespace LeaveCircleRequest {
  export type AsObject = {
    circleUuid: string,
  }
}

export class LeaveCircleResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): LeaveCircleResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaveCircleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LeaveCircleResponse): LeaveCircleResponse.AsObject;
  static serializeBinaryToWriter(message: LeaveCircleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaveCircleResponse;
  static deserializeBinaryFromReader(message: LeaveCircleResponse, reader: jspb.BinaryReader): LeaveCircleResponse;
}

export namespace LeaveCircleResponse {
  export type AsObject = {
    statusCode: StatusCode,
  }
}

export class InactivateMembershipRequest extends jspb.Message {
  getCircleUuid(): string;
  setCircleUuid(value: string): InactivateMembershipRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InactivateMembershipRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InactivateMembershipRequest): InactivateMembershipRequest.AsObject;
  static serializeBinaryToWriter(message: InactivateMembershipRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InactivateMembershipRequest;
  static deserializeBinaryFromReader(message: InactivateMembershipRequest, reader: jspb.BinaryReader): InactivateMembershipRequest;
}

export namespace InactivateMembershipRequest {
  export type AsObject = {
    circleUuid: string,
  }
}

export class InactivateMembershipResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): InactivateMembershipResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InactivateMembershipResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InactivateMembershipResponse): InactivateMembershipResponse.AsObject;
  static serializeBinaryToWriter(message: InactivateMembershipResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InactivateMembershipResponse;
  static deserializeBinaryFromReader(message: InactivateMembershipResponse, reader: jspb.BinaryReader): InactivateMembershipResponse;
}

export namespace InactivateMembershipResponse {
  export type AsObject = {
    statusCode: StatusCode,
  }
}

export class DeleteCircleRequest extends jspb.Message {
  getCircleUuid(): string;
  setCircleUuid(value: string): DeleteCircleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCircleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCircleRequest): DeleteCircleRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCircleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCircleRequest;
  static deserializeBinaryFromReader(message: DeleteCircleRequest, reader: jspb.BinaryReader): DeleteCircleRequest;
}

export namespace DeleteCircleRequest {
  export type AsObject = {
    circleUuid: string,
  }
}

export class DeleteCircleResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): DeleteCircleResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCircleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCircleResponse): DeleteCircleResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteCircleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCircleResponse;
  static deserializeBinaryFromReader(message: DeleteCircleResponse, reader: jspb.BinaryReader): DeleteCircleResponse;
}

export namespace DeleteCircleResponse {
  export type AsObject = {
    statusCode: StatusCode,
  }
}

export class UpdateProfileRequest extends jspb.Message {
  getAvatarData(): Uint8Array | string;
  getAvatarData_asU8(): Uint8Array;
  getAvatarData_asB64(): string;
  setAvatarData(value: Uint8Array | string): UpdateProfileRequest;
  hasAvatarData(): boolean;
  clearAvatarData(): UpdateProfileRequest;

  getDisplayName(): string;
  setDisplayName(value: string): UpdateProfileRequest;
  hasDisplayName(): boolean;
  clearDisplayName(): UpdateProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProfileRequest): UpdateProfileRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProfileRequest;
  static deserializeBinaryFromReader(message: UpdateProfileRequest, reader: jspb.BinaryReader): UpdateProfileRequest;
}

export namespace UpdateProfileRequest {
  export type AsObject = {
    avatarData?: Uint8Array | string,
    displayName?: string,
  }
}

export class UpdateProfileResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): UpdateProfileResponse;

  getUpdatedProfile(): Profile | undefined;
  setUpdatedProfile(value?: Profile): UpdateProfileResponse;
  hasUpdatedProfile(): boolean;
  clearUpdatedProfile(): UpdateProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProfileResponse): UpdateProfileResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProfileResponse;
  static deserializeBinaryFromReader(message: UpdateProfileResponse, reader: jspb.BinaryReader): UpdateProfileResponse;
}

export namespace UpdateProfileResponse {
  export type AsObject = {
    statusCode: StatusCode,
    updatedProfile?: Profile.AsObject,
  }
}

export class CreateGroupRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateGroupRequest;

  getParentGroupUuid(): string;
  setParentGroupUuid(value: string): CreateGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGroupRequest): CreateGroupRequest.AsObject;
  static serializeBinaryToWriter(message: CreateGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGroupRequest;
  static deserializeBinaryFromReader(message: CreateGroupRequest, reader: jspb.BinaryReader): CreateGroupRequest;
}

export namespace CreateGroupRequest {
  export type AsObject = {
    name: string,
    parentGroupUuid: string,
  }
}

export class CreateGroupResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): CreateGroupResponse;

  getGroup(): Group | undefined;
  setGroup(value?: Group): CreateGroupResponse;
  hasGroup(): boolean;
  clearGroup(): CreateGroupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGroupResponse): CreateGroupResponse.AsObject;
  static serializeBinaryToWriter(message: CreateGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGroupResponse;
  static deserializeBinaryFromReader(message: CreateGroupResponse, reader: jspb.BinaryReader): CreateGroupResponse;
}

export namespace CreateGroupResponse {
  export type AsObject = {
    statusCode: StatusCode,
    group?: Group.AsObject,
  }
}

export class UpdateGroupRequest extends jspb.Message {
  getGroupUuid(): string;
  setGroupUuid(value: string): UpdateGroupRequest;

  getName(): string;
  setName(value: string): UpdateGroupRequest;
  hasName(): boolean;
  clearName(): UpdateGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGroupRequest): UpdateGroupRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGroupRequest;
  static deserializeBinaryFromReader(message: UpdateGroupRequest, reader: jspb.BinaryReader): UpdateGroupRequest;
}

export namespace UpdateGroupRequest {
  export type AsObject = {
    groupUuid: string,
    name?: string,
  }
}

export class UpdateGroupResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): UpdateGroupResponse;

  getGroup(): Group | undefined;
  setGroup(value?: Group): UpdateGroupResponse;
  hasGroup(): boolean;
  clearGroup(): UpdateGroupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGroupResponse): UpdateGroupResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGroupResponse;
  static deserializeBinaryFromReader(message: UpdateGroupResponse, reader: jspb.BinaryReader): UpdateGroupResponse;
}

export namespace UpdateGroupResponse {
  export type AsObject = {
    statusCode: StatusCode,
    group?: Group.AsObject,
  }
}

export class DeleteGroupRequest extends jspb.Message {
  getGroupUuid(): string;
  setGroupUuid(value: string): DeleteGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGroupRequest): DeleteGroupRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteGroupRequest;
  static deserializeBinaryFromReader(message: DeleteGroupRequest, reader: jspb.BinaryReader): DeleteGroupRequest;
}

export namespace DeleteGroupRequest {
  export type AsObject = {
    groupUuid: string,
  }
}

export class DeleteGroupResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): DeleteGroupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGroupResponse): DeleteGroupResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteGroupResponse;
  static deserializeBinaryFromReader(message: DeleteGroupResponse, reader: jspb.BinaryReader): DeleteGroupResponse;
}

export namespace DeleteGroupResponse {
  export type AsObject = {
    statusCode: StatusCode,
  }
}

export class AdminGetUserRequest extends jspb.Message {
  getUserUuid(): string;
  setUserUuid(value: string): AdminGetUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminGetUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminGetUserRequest): AdminGetUserRequest.AsObject;
  static serializeBinaryToWriter(message: AdminGetUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminGetUserRequest;
  static deserializeBinaryFromReader(message: AdminGetUserRequest, reader: jspb.BinaryReader): AdminGetUserRequest;
}

export namespace AdminGetUserRequest {
  export type AsObject = {
    userUuid: string,
  }
}

export class AdminGetUserResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): AdminGetUserResponse;

  getUserProfile(): Profile | undefined;
  setUserProfile(value?: Profile): AdminGetUserResponse;
  hasUserProfile(): boolean;
  clearUserProfile(): AdminGetUserResponse;

  getCircleMetadataList(): Array<CircleMetadata>;
  setCircleMetadataList(value: Array<CircleMetadata>): AdminGetUserResponse;
  clearCircleMetadataList(): AdminGetUserResponse;
  addCircleMetadata(value?: CircleMetadata, index?: number): CircleMetadata;

  getCircleCount(): number;
  setCircleCount(value: number): AdminGetUserResponse;
  hasCircleCount(): boolean;
  clearCircleCount(): AdminGetUserResponse;

  getMediaCount(): number;
  setMediaCount(value: number): AdminGetUserResponse;
  hasMediaCount(): boolean;
  clearMediaCount(): AdminGetUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminGetUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminGetUserResponse): AdminGetUserResponse.AsObject;
  static serializeBinaryToWriter(message: AdminGetUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminGetUserResponse;
  static deserializeBinaryFromReader(message: AdminGetUserResponse, reader: jspb.BinaryReader): AdminGetUserResponse;
}

export namespace AdminGetUserResponse {
  export type AsObject = {
    statusCode: StatusCode,
    userProfile?: Profile.AsObject,
    circleMetadataList: Array<CircleMetadata.AsObject>,
    circleCount?: number,
    mediaCount?: number,
  }
}

export class AdminUpdateUserRequest extends jspb.Message {
  getUserUuid(): string;
  setUserUuid(value: string): AdminUpdateUserRequest;

  getDisplayName(): string;
  setDisplayName(value: string): AdminUpdateUserRequest;
  hasDisplayName(): boolean;
  clearDisplayName(): AdminUpdateUserRequest;

  getEmail(): string;
  setEmail(value: string): AdminUpdateUserRequest;
  hasEmail(): boolean;
  clearEmail(): AdminUpdateUserRequest;

  getGroupUuid(): string;
  setGroupUuid(value: string): AdminUpdateUserRequest;
  hasGroupUuid(): boolean;
  clearGroupUuid(): AdminUpdateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminUpdateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminUpdateUserRequest): AdminUpdateUserRequest.AsObject;
  static serializeBinaryToWriter(message: AdminUpdateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminUpdateUserRequest;
  static deserializeBinaryFromReader(message: AdminUpdateUserRequest, reader: jspb.BinaryReader): AdminUpdateUserRequest;
}

export namespace AdminUpdateUserRequest {
  export type AsObject = {
    userUuid: string,
    displayName?: string,
    email?: string,
    groupUuid?: string,
  }
}

export class AdminUpdateUserResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): AdminUpdateUserResponse;

  getUser(): Profile | undefined;
  setUser(value?: Profile): AdminUpdateUserResponse;
  hasUser(): boolean;
  clearUser(): AdminUpdateUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminUpdateUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminUpdateUserResponse): AdminUpdateUserResponse.AsObject;
  static serializeBinaryToWriter(message: AdminUpdateUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminUpdateUserResponse;
  static deserializeBinaryFromReader(message: AdminUpdateUserResponse, reader: jspb.BinaryReader): AdminUpdateUserResponse;
}

export namespace AdminUpdateUserResponse {
  export type AsObject = {
    statusCode: StatusCode,
    user?: Profile.AsObject,
  }
}

export class DisableUserRequest extends jspb.Message {
  getUserUuid(): string;
  setUserUuid(value: string): DisableUserRequest;

  getLeaveCircles(): boolean;
  setLeaveCircles(value: boolean): DisableUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisableUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DisableUserRequest): DisableUserRequest.AsObject;
  static serializeBinaryToWriter(message: DisableUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisableUserRequest;
  static deserializeBinaryFromReader(message: DisableUserRequest, reader: jspb.BinaryReader): DisableUserRequest;
}

export namespace DisableUserRequest {
  export type AsObject = {
    userUuid: string,
    leaveCircles: boolean,
  }
}

export class DisableUserResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): DisableUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisableUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DisableUserResponse): DisableUserResponse.AsObject;
  static serializeBinaryToWriter(message: DisableUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisableUserResponse;
  static deserializeBinaryFromReader(message: DisableUserResponse, reader: jspb.BinaryReader): DisableUserResponse;
}

export namespace DisableUserResponse {
  export type AsObject = {
    statusCode: StatusCode,
  }
}

export class EnableUserRequest extends jspb.Message {
  getUserUuid(): string;
  setUserUuid(value: string): EnableUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EnableUserRequest): EnableUserRequest.AsObject;
  static serializeBinaryToWriter(message: EnableUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableUserRequest;
  static deserializeBinaryFromReader(message: EnableUserRequest, reader: jspb.BinaryReader): EnableUserRequest;
}

export namespace EnableUserRequest {
  export type AsObject = {
    userUuid: string,
  }
}

export class EnableUserResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): EnableUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EnableUserResponse): EnableUserResponse.AsObject;
  static serializeBinaryToWriter(message: EnableUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableUserResponse;
  static deserializeBinaryFromReader(message: EnableUserResponse, reader: jspb.BinaryReader): EnableUserResponse;
}

export namespace EnableUserResponse {
  export type AsObject = {
    statusCode: StatusCode,
  }
}

export class PromoteAdminRequest extends jspb.Message {
  getUserUuid(): string;
  setUserUuid(value: string): PromoteAdminRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PromoteAdminRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PromoteAdminRequest): PromoteAdminRequest.AsObject;
  static serializeBinaryToWriter(message: PromoteAdminRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PromoteAdminRequest;
  static deserializeBinaryFromReader(message: PromoteAdminRequest, reader: jspb.BinaryReader): PromoteAdminRequest;
}

export namespace PromoteAdminRequest {
  export type AsObject = {
    userUuid: string,
  }
}

export class PromoteAdminResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): PromoteAdminResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PromoteAdminResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PromoteAdminResponse): PromoteAdminResponse.AsObject;
  static serializeBinaryToWriter(message: PromoteAdminResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PromoteAdminResponse;
  static deserializeBinaryFromReader(message: PromoteAdminResponse, reader: jspb.BinaryReader): PromoteAdminResponse;
}

export namespace PromoteAdminResponse {
  export type AsObject = {
    statusCode: StatusCode,
  }
}

export class DemoteAdminRequest extends jspb.Message {
  getUserUuid(): string;
  setUserUuid(value: string): DemoteAdminRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DemoteAdminRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DemoteAdminRequest): DemoteAdminRequest.AsObject;
  static serializeBinaryToWriter(message: DemoteAdminRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DemoteAdminRequest;
  static deserializeBinaryFromReader(message: DemoteAdminRequest, reader: jspb.BinaryReader): DemoteAdminRequest;
}

export namespace DemoteAdminRequest {
  export type AsObject = {
    userUuid: string,
  }
}

export class DemoteAdminResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): DemoteAdminResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DemoteAdminResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DemoteAdminResponse): DemoteAdminResponse.AsObject;
  static serializeBinaryToWriter(message: DemoteAdminResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DemoteAdminResponse;
  static deserializeBinaryFromReader(message: DemoteAdminResponse, reader: jspb.BinaryReader): DemoteAdminResponse;
}

export namespace DemoteAdminResponse {
  export type AsObject = {
    statusCode: StatusCode,
  }
}

export class ChangeMemberRoleRequest extends jspb.Message {
  getMemberUuid(): string;
  setMemberUuid(value: string): ChangeMemberRoleRequest;

  getNewRoleId(): number;
  setNewRoleId(value: number): ChangeMemberRoleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeMemberRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeMemberRoleRequest): ChangeMemberRoleRequest.AsObject;
  static serializeBinaryToWriter(message: ChangeMemberRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeMemberRoleRequest;
  static deserializeBinaryFromReader(message: ChangeMemberRoleRequest, reader: jspb.BinaryReader): ChangeMemberRoleRequest;
}

export namespace ChangeMemberRoleRequest {
  export type AsObject = {
    memberUuid: string,
    newRoleId: number,
  }
}

export class ChangeMemberRoleResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): ChangeMemberRoleResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeMemberRoleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeMemberRoleResponse): ChangeMemberRoleResponse.AsObject;
  static serializeBinaryToWriter(message: ChangeMemberRoleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeMemberRoleResponse;
  static deserializeBinaryFromReader(message: ChangeMemberRoleResponse, reader: jspb.BinaryReader): ChangeMemberRoleResponse;
}

export namespace ChangeMemberRoleResponse {
  export type AsObject = {
    statusCode: StatusCode,
  }
}

export class ForceUserLogoutRequest extends jspb.Message {
  getUserUuid(): string;
  setUserUuid(value: string): ForceUserLogoutRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForceUserLogoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ForceUserLogoutRequest): ForceUserLogoutRequest.AsObject;
  static serializeBinaryToWriter(message: ForceUserLogoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForceUserLogoutRequest;
  static deserializeBinaryFromReader(message: ForceUserLogoutRequest, reader: jspb.BinaryReader): ForceUserLogoutRequest;
}

export namespace ForceUserLogoutRequest {
  export type AsObject = {
    userUuid: string,
  }
}

export class ForceUserLogoutResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): ForceUserLogoutResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForceUserLogoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ForceUserLogoutResponse): ForceUserLogoutResponse.AsObject;
  static serializeBinaryToWriter(message: ForceUserLogoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForceUserLogoutResponse;
  static deserializeBinaryFromReader(message: ForceUserLogoutResponse, reader: jspb.BinaryReader): ForceUserLogoutResponse;
}

export namespace ForceUserLogoutResponse {
  export type AsObject = {
    statusCode: StatusCode,
  }
}

export class AdminGetCircleRequest extends jspb.Message {
  getCircleUuid(): string;
  setCircleUuid(value: string): AdminGetCircleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminGetCircleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminGetCircleRequest): AdminGetCircleRequest.AsObject;
  static serializeBinaryToWriter(message: AdminGetCircleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminGetCircleRequest;
  static deserializeBinaryFromReader(message: AdminGetCircleRequest, reader: jspb.BinaryReader): AdminGetCircleRequest;
}

export namespace AdminGetCircleRequest {
  export type AsObject = {
    circleUuid: string,
  }
}

export class AdminGetCircleResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): AdminGetCircleResponse;

  getCircleMetadata(): CircleMetadata | undefined;
  setCircleMetadata(value?: CircleMetadata): AdminGetCircleResponse;
  hasCircleMetadata(): boolean;
  clearCircleMetadata(): AdminGetCircleResponse;

  getMemberMetadataList(): Array<MemberMetadata>;
  setMemberMetadataList(value: Array<MemberMetadata>): AdminGetCircleResponse;
  clearMemberMetadataList(): AdminGetCircleResponse;
  addMemberMetadata(value?: MemberMetadata, index?: number): MemberMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminGetCircleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminGetCircleResponse): AdminGetCircleResponse.AsObject;
  static serializeBinaryToWriter(message: AdminGetCircleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminGetCircleResponse;
  static deserializeBinaryFromReader(message: AdminGetCircleResponse, reader: jspb.BinaryReader): AdminGetCircleResponse;
}

export namespace AdminGetCircleResponse {
  export type AsObject = {
    statusCode: StatusCode,
    circleMetadata?: CircleMetadata.AsObject,
    memberMetadataList: Array<MemberMetadata.AsObject>,
  }
}

export class AdminUpdateCircleRequest extends jspb.Message {
  getCircleUuid(): string;
  setCircleUuid(value: string): AdminUpdateCircleRequest;

  getTitle(): string;
  setTitle(value: string): AdminUpdateCircleRequest;

  getInternalId(): string;
  setInternalId(value: string): AdminUpdateCircleRequest;
  hasInternalId(): boolean;
  clearInternalId(): AdminUpdateCircleRequest;

  getGroupUuid(): string;
  setGroupUuid(value: string): AdminUpdateCircleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminUpdateCircleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminUpdateCircleRequest): AdminUpdateCircleRequest.AsObject;
  static serializeBinaryToWriter(message: AdminUpdateCircleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminUpdateCircleRequest;
  static deserializeBinaryFromReader(message: AdminUpdateCircleRequest, reader: jspb.BinaryReader): AdminUpdateCircleRequest;
}

export namespace AdminUpdateCircleRequest {
  export type AsObject = {
    circleUuid: string,
    title: string,
    internalId?: string,
    groupUuid: string,
  }
}

export class AdminUpdateCircleResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): AdminUpdateCircleResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminUpdateCircleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminUpdateCircleResponse): AdminUpdateCircleResponse.AsObject;
  static serializeBinaryToWriter(message: AdminUpdateCircleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminUpdateCircleResponse;
  static deserializeBinaryFromReader(message: AdminUpdateCircleResponse, reader: jspb.BinaryReader): AdminUpdateCircleResponse;
}

export namespace AdminUpdateCircleResponse {
  export type AsObject = {
    statusCode: StatusCode,
  }
}

export class GetWorkspaceRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkspaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkspaceRequest): GetWorkspaceRequest.AsObject;
  static serializeBinaryToWriter(message: GetWorkspaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkspaceRequest;
  static deserializeBinaryFromReader(message: GetWorkspaceRequest, reader: jspb.BinaryReader): GetWorkspaceRequest;
}

export namespace GetWorkspaceRequest {
  export type AsObject = {
  }
}

export class GetWorkspaceResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): GetWorkspaceResponse;

  getWorkspaceGroupsList(): Array<Group>;
  setWorkspaceGroupsList(value: Array<Group>): GetWorkspaceResponse;
  clearWorkspaceGroupsList(): GetWorkspaceResponse;
  addWorkspaceGroups(value?: Group, index?: number): Group;

  getWorkspaceUsersList(): Array<Profile>;
  setWorkspaceUsersList(value: Array<Profile>): GetWorkspaceResponse;
  clearWorkspaceUsersList(): GetWorkspaceResponse;
  addWorkspaceUsers(value?: Profile, index?: number): Profile;

  getWorkspaceCirclesList(): Array<Circle>;
  setWorkspaceCirclesList(value: Array<Circle>): GetWorkspaceResponse;
  clearWorkspaceCirclesList(): GetWorkspaceResponse;
  addWorkspaceCircles(value?: Circle, index?: number): Circle;

  getInternalIdsEnabled(): boolean;
  setInternalIdsEnabled(value: boolean): GetWorkspaceResponse;
  hasInternalIdsEnabled(): boolean;
  clearInternalIdsEnabled(): GetWorkspaceResponse;

  getWorkspaceDomainsList(): Array<string>;
  setWorkspaceDomainsList(value: Array<string>): GetWorkspaceResponse;
  clearWorkspaceDomainsList(): GetWorkspaceResponse;
  addWorkspaceDomains(value: string, index?: number): GetWorkspaceResponse;

  getCanManageNoGroup(): boolean;
  setCanManageNoGroup(value: boolean): GetWorkspaceResponse;
  hasCanManageNoGroup(): boolean;
  clearCanManageNoGroup(): GetWorkspaceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkspaceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkspaceResponse): GetWorkspaceResponse.AsObject;
  static serializeBinaryToWriter(message: GetWorkspaceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkspaceResponse;
  static deserializeBinaryFromReader(message: GetWorkspaceResponse, reader: jspb.BinaryReader): GetWorkspaceResponse;
}

export namespace GetWorkspaceResponse {
  export type AsObject = {
    statusCode: StatusCode,
    workspaceGroupsList: Array<Group.AsObject>,
    workspaceUsersList: Array<Profile.AsObject>,
    workspaceCirclesList: Array<Circle.AsObject>,
    internalIdsEnabled?: boolean,
    workspaceDomainsList: Array<string>,
    canManageNoGroup?: boolean,
  }
}

export class WorkspaceInvite extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): WorkspaceInvite;

  getGroupUuid(): string;
  setGroupUuid(value: string): WorkspaceInvite;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkspaceInvite.AsObject;
  static toObject(includeInstance: boolean, msg: WorkspaceInvite): WorkspaceInvite.AsObject;
  static serializeBinaryToWriter(message: WorkspaceInvite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkspaceInvite;
  static deserializeBinaryFromReader(message: WorkspaceInvite, reader: jspb.BinaryReader): WorkspaceInvite;
}

export namespace WorkspaceInvite {
  export type AsObject = {
    email: string,
    groupUuid: string,
  }
}

export class InviteToWorkspaceRequest extends jspb.Message {
  getWorkspaceInvitesList(): Array<WorkspaceInvite>;
  setWorkspaceInvitesList(value: Array<WorkspaceInvite>): InviteToWorkspaceRequest;
  clearWorkspaceInvitesList(): InviteToWorkspaceRequest;
  addWorkspaceInvites(value?: WorkspaceInvite, index?: number): WorkspaceInvite;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InviteToWorkspaceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InviteToWorkspaceRequest): InviteToWorkspaceRequest.AsObject;
  static serializeBinaryToWriter(message: InviteToWorkspaceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InviteToWorkspaceRequest;
  static deserializeBinaryFromReader(message: InviteToWorkspaceRequest, reader: jspb.BinaryReader): InviteToWorkspaceRequest;
}

export namespace InviteToWorkspaceRequest {
  export type AsObject = {
    workspaceInvitesList: Array<WorkspaceInvite.AsObject>,
  }
}

export class InviteToWorkspaceResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): InviteToWorkspaceResponse;

  getWorkspaceInviteResultsMap(): jspb.Map<string, StatusCode>;
  clearWorkspaceInviteResultsMap(): InviteToWorkspaceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InviteToWorkspaceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InviteToWorkspaceResponse): InviteToWorkspaceResponse.AsObject;
  static serializeBinaryToWriter(message: InviteToWorkspaceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InviteToWorkspaceResponse;
  static deserializeBinaryFromReader(message: InviteToWorkspaceResponse, reader: jspb.BinaryReader): InviteToWorkspaceResponse;
}

export namespace InviteToWorkspaceResponse {
  export type AsObject = {
    statusCode: StatusCode,
    workspaceInviteResultsMap: Array<[string, StatusCode]>,
  }
}

export class GetWorkspaceSettingsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkspaceSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkspaceSettingsRequest): GetWorkspaceSettingsRequest.AsObject;
  static serializeBinaryToWriter(message: GetWorkspaceSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkspaceSettingsRequest;
  static deserializeBinaryFromReader(message: GetWorkspaceSettingsRequest, reader: jspb.BinaryReader): GetWorkspaceSettingsRequest;
}

export namespace GetWorkspaceSettingsRequest {
  export type AsObject = {
  }
}

export class GetWorkspaceSettingsResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): GetWorkspaceSettingsResponse;

  getWorkspaceName(): string;
  setWorkspaceName(value: string): GetWorkspaceSettingsResponse;
  hasWorkspaceName(): boolean;
  clearWorkspaceName(): GetWorkspaceSettingsResponse;

  getCompanyName(): string;
  setCompanyName(value: string): GetWorkspaceSettingsResponse;
  hasCompanyName(): boolean;
  clearCompanyName(): GetWorkspaceSettingsResponse;

  getDateCreated(): number;
  setDateCreated(value: number): GetWorkspaceSettingsResponse;
  hasDateCreated(): boolean;
  clearDateCreated(): GetWorkspaceSettingsResponse;

  getSubscriptionTerm(): SubscriptionTerm;
  setSubscriptionTerm(value: SubscriptionTerm): GetWorkspaceSettingsResponse;
  hasSubscriptionTerm(): boolean;
  clearSubscriptionTerm(): GetWorkspaceSettingsResponse;

  getSubscriptionPackage(): SubscriptionMediaPackage;
  setSubscriptionPackage(value: SubscriptionMediaPackage): GetWorkspaceSettingsResponse;
  hasSubscriptionPackage(): boolean;
  clearSubscriptionPackage(): GetWorkspaceSettingsResponse;

  getCurrentPeriodStart(): number;
  setCurrentPeriodStart(value: number): GetWorkspaceSettingsResponse;
  hasCurrentPeriodStart(): boolean;
  clearCurrentPeriodStart(): GetWorkspaceSettingsResponse;

  getCurrentPeriodEnd(): number;
  setCurrentPeriodEnd(value: number): GetWorkspaceSettingsResponse;
  hasCurrentPeriodEnd(): boolean;
  clearCurrentPeriodEnd(): GetWorkspaceSettingsResponse;

  getSeatsPurchased(): number;
  setSeatsPurchased(value: number): GetWorkspaceSettingsResponse;
  hasSeatsPurchased(): boolean;
  clearSeatsPurchased(): GetWorkspaceSettingsResponse;

  getSeatsActive(): number;
  setSeatsActive(value: number): GetWorkspaceSettingsResponse;
  hasSeatsActive(): boolean;
  clearSeatsActive(): GetWorkspaceSettingsResponse;

  getCanManageViaStripe(): boolean;
  setCanManageViaStripe(value: boolean): GetWorkspaceSettingsResponse;
  hasCanManageViaStripe(): boolean;
  clearCanManageViaStripe(): GetWorkspaceSettingsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkspaceSettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkspaceSettingsResponse): GetWorkspaceSettingsResponse.AsObject;
  static serializeBinaryToWriter(message: GetWorkspaceSettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkspaceSettingsResponse;
  static deserializeBinaryFromReader(message: GetWorkspaceSettingsResponse, reader: jspb.BinaryReader): GetWorkspaceSettingsResponse;
}

export namespace GetWorkspaceSettingsResponse {
  export type AsObject = {
    statusCode: StatusCode,
    workspaceName?: string,
    companyName?: string,
    dateCreated?: number,
    subscriptionTerm?: SubscriptionTerm,
    subscriptionPackage?: SubscriptionMediaPackage,
    currentPeriodStart?: number,
    currentPeriodEnd?: number,
    seatsPurchased?: number,
    seatsActive?: number,
    canManageViaStripe?: boolean,
  }
}

export class GetStripeDashboardUrlRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStripeDashboardUrlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStripeDashboardUrlRequest): GetStripeDashboardUrlRequest.AsObject;
  static serializeBinaryToWriter(message: GetStripeDashboardUrlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStripeDashboardUrlRequest;
  static deserializeBinaryFromReader(message: GetStripeDashboardUrlRequest, reader: jspb.BinaryReader): GetStripeDashboardUrlRequest;
}

export namespace GetStripeDashboardUrlRequest {
  export type AsObject = {
  }
}

export class GetStripeDashboardUrlResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): GetStripeDashboardUrlResponse;

  getStripeUrl(): string;
  setStripeUrl(value: string): GetStripeDashboardUrlResponse;
  hasStripeUrl(): boolean;
  clearStripeUrl(): GetStripeDashboardUrlResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStripeDashboardUrlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStripeDashboardUrlResponse): GetStripeDashboardUrlResponse.AsObject;
  static serializeBinaryToWriter(message: GetStripeDashboardUrlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStripeDashboardUrlResponse;
  static deserializeBinaryFromReader(message: GetStripeDashboardUrlResponse, reader: jspb.BinaryReader): GetStripeDashboardUrlResponse;
}

export namespace GetStripeDashboardUrlResponse {
  export type AsObject = {
    statusCode: StatusCode,
    stripeUrl?: string,
  }
}

export class UpdateWorkspaceSettingsRequest extends jspb.Message {
  getWorkspaceName(): string;
  setWorkspaceName(value: string): UpdateWorkspaceSettingsRequest;
  hasWorkspaceName(): boolean;
  clearWorkspaceName(): UpdateWorkspaceSettingsRequest;

  getCompanyName(): string;
  setCompanyName(value: string): UpdateWorkspaceSettingsRequest;
  hasCompanyName(): boolean;
  clearCompanyName(): UpdateWorkspaceSettingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWorkspaceSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWorkspaceSettingsRequest): UpdateWorkspaceSettingsRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateWorkspaceSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWorkspaceSettingsRequest;
  static deserializeBinaryFromReader(message: UpdateWorkspaceSettingsRequest, reader: jspb.BinaryReader): UpdateWorkspaceSettingsRequest;
}

export namespace UpdateWorkspaceSettingsRequest {
  export type AsObject = {
    workspaceName?: string,
    companyName?: string,
  }
}

export class UpdateWorkspaceSettingsResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): UpdateWorkspaceSettingsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWorkspaceSettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWorkspaceSettingsResponse): UpdateWorkspaceSettingsResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateWorkspaceSettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWorkspaceSettingsResponse;
  static deserializeBinaryFromReader(message: UpdateWorkspaceSettingsResponse, reader: jspb.BinaryReader): UpdateWorkspaceSettingsResponse;
}

export namespace UpdateWorkspaceSettingsResponse {
  export type AsObject = {
    statusCode: StatusCode,
  }
}

export class WorkspacePermissions extends jspb.Message {
  getFeatureComments(): boolean;
  setFeatureComments(value: boolean): WorkspacePermissions;

  getFeatureReactions(): boolean;
  setFeatureReactions(value: boolean): WorkspacePermissions;

  getAllowExternalGuests(): boolean;
  setAllowExternalGuests(value: boolean): WorkspacePermissions;

  getContributorAddMedia(): boolean;
  setContributorAddMedia(value: boolean): WorkspacePermissions;

  getContributorSaveMedia(): boolean;
  setContributorSaveMedia(value: boolean): WorkspacePermissions;

  getContributorShareMedia(): boolean;
  setContributorShareMedia(value: boolean): WorkspacePermissions;

  getContributorViewMembers(): boolean;
  setContributorViewMembers(value: boolean): WorkspacePermissions;

  getContributorInviteMembers(): boolean;
  setContributorInviteMembers(value: boolean): WorkspacePermissions;

  getContributorComment(): FeatureAbility;
  setContributorComment(value: FeatureAbility): WorkspacePermissions;

  getContributorReactions(): FeatureAbility;
  setContributorReactions(value: FeatureAbility): WorkspacePermissions;

  getGuestAddMedia(): boolean;
  setGuestAddMedia(value: boolean): WorkspacePermissions;

  getGuestSaveMedia(): boolean;
  setGuestSaveMedia(value: boolean): WorkspacePermissions;

  getGuestShareMedia(): boolean;
  setGuestShareMedia(value: boolean): WorkspacePermissions;

  getGuestViewMembers(): boolean;
  setGuestViewMembers(value: boolean): WorkspacePermissions;

  getGuestInviteMembers(): boolean;
  setGuestInviteMembers(value: boolean): WorkspacePermissions;

  getGuestComment(): FeatureAbility;
  setGuestComment(value: FeatureAbility): WorkspacePermissions;

  getGuestReactions(): FeatureAbility;
  setGuestReactions(value: FeatureAbility): WorkspacePermissions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkspacePermissions.AsObject;
  static toObject(includeInstance: boolean, msg: WorkspacePermissions): WorkspacePermissions.AsObject;
  static serializeBinaryToWriter(message: WorkspacePermissions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkspacePermissions;
  static deserializeBinaryFromReader(message: WorkspacePermissions, reader: jspb.BinaryReader): WorkspacePermissions;
}

export namespace WorkspacePermissions {
  export type AsObject = {
    featureComments: boolean,
    featureReactions: boolean,
    allowExternalGuests: boolean,
    contributorAddMedia: boolean,
    contributorSaveMedia: boolean,
    contributorShareMedia: boolean,
    contributorViewMembers: boolean,
    contributorInviteMembers: boolean,
    contributorComment: FeatureAbility,
    contributorReactions: FeatureAbility,
    guestAddMedia: boolean,
    guestSaveMedia: boolean,
    guestShareMedia: boolean,
    guestViewMembers: boolean,
    guestInviteMembers: boolean,
    guestComment: FeatureAbility,
    guestReactions: FeatureAbility,
  }
}

export class GetWorkspacePermissionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkspacePermissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkspacePermissionsRequest): GetWorkspacePermissionsRequest.AsObject;
  static serializeBinaryToWriter(message: GetWorkspacePermissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkspacePermissionsRequest;
  static deserializeBinaryFromReader(message: GetWorkspacePermissionsRequest, reader: jspb.BinaryReader): GetWorkspacePermissionsRequest;
}

export namespace GetWorkspacePermissionsRequest {
  export type AsObject = {
  }
}

export class UpdateWorkspacePermissionsRequest extends jspb.Message {
  getPermissions(): WorkspacePermissions | undefined;
  setPermissions(value?: WorkspacePermissions): UpdateWorkspacePermissionsRequest;
  hasPermissions(): boolean;
  clearPermissions(): UpdateWorkspacePermissionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWorkspacePermissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWorkspacePermissionsRequest): UpdateWorkspacePermissionsRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateWorkspacePermissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWorkspacePermissionsRequest;
  static deserializeBinaryFromReader(message: UpdateWorkspacePermissionsRequest, reader: jspb.BinaryReader): UpdateWorkspacePermissionsRequest;
}

export namespace UpdateWorkspacePermissionsRequest {
  export type AsObject = {
    permissions?: WorkspacePermissions.AsObject,
  }
}

export class WorkspacePermissionsResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): WorkspacePermissionsResponse;

  getPermissions(): WorkspacePermissions | undefined;
  setPermissions(value?: WorkspacePermissions): WorkspacePermissionsResponse;
  hasPermissions(): boolean;
  clearPermissions(): WorkspacePermissionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkspacePermissionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WorkspacePermissionsResponse): WorkspacePermissionsResponse.AsObject;
  static serializeBinaryToWriter(message: WorkspacePermissionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkspacePermissionsResponse;
  static deserializeBinaryFromReader(message: WorkspacePermissionsResponse, reader: jspb.BinaryReader): WorkspacePermissionsResponse;
}

export namespace WorkspacePermissionsResponse {
  export type AsObject = {
    statusCode: StatusCode,
    permissions?: WorkspacePermissions.AsObject,
  }
}

export class BrandingConfig extends jspb.Message {
  getHeaderBackgroundColor(): string;
  setHeaderBackgroundColor(value: string): BrandingConfig;

  getPrimaryColor(): string;
  setPrimaryColor(value: string): BrandingConfig;

  getLogo(): Uint8Array | string;
  getLogo_asU8(): Uint8Array;
  getLogo_asB64(): string;
  setLogo(value: Uint8Array | string): BrandingConfig;

  getActionUrl(): string;
  setActionUrl(value: string): BrandingConfig;
  hasActionUrl(): boolean;
  clearActionUrl(): BrandingConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BrandingConfig.AsObject;
  static toObject(includeInstance: boolean, msg: BrandingConfig): BrandingConfig.AsObject;
  static serializeBinaryToWriter(message: BrandingConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BrandingConfig;
  static deserializeBinaryFromReader(message: BrandingConfig, reader: jspb.BinaryReader): BrandingConfig;
}

export namespace BrandingConfig {
  export type AsObject = {
    headerBackgroundColor: string,
    primaryColor: string,
    logo: Uint8Array | string,
    actionUrl?: string,
  }
}

export class GetWorkspaceBrandingRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkspaceBrandingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkspaceBrandingRequest): GetWorkspaceBrandingRequest.AsObject;
  static serializeBinaryToWriter(message: GetWorkspaceBrandingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkspaceBrandingRequest;
  static deserializeBinaryFromReader(message: GetWorkspaceBrandingRequest, reader: jspb.BinaryReader): GetWorkspaceBrandingRequest;
}

export namespace GetWorkspaceBrandingRequest {
  export type AsObject = {
  }
}

export class WorkspaceBrandingResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): WorkspaceBrandingResponse;

  getBrandingConfig(): BrandingConfig | undefined;
  setBrandingConfig(value?: BrandingConfig): WorkspaceBrandingResponse;
  hasBrandingConfig(): boolean;
  clearBrandingConfig(): WorkspaceBrandingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkspaceBrandingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WorkspaceBrandingResponse): WorkspaceBrandingResponse.AsObject;
  static serializeBinaryToWriter(message: WorkspaceBrandingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkspaceBrandingResponse;
  static deserializeBinaryFromReader(message: WorkspaceBrandingResponse, reader: jspb.BinaryReader): WorkspaceBrandingResponse;
}

export namespace WorkspaceBrandingResponse {
  export type AsObject = {
    statusCode: StatusCode,
    brandingConfig?: BrandingConfig.AsObject,
  }
}

export class UpdateWorkspaceBrandingRequest extends jspb.Message {
  getBrandingConfig(): BrandingConfig | undefined;
  setBrandingConfig(value?: BrandingConfig): UpdateWorkspaceBrandingRequest;
  hasBrandingConfig(): boolean;
  clearBrandingConfig(): UpdateWorkspaceBrandingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWorkspaceBrandingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWorkspaceBrandingRequest): UpdateWorkspaceBrandingRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateWorkspaceBrandingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWorkspaceBrandingRequest;
  static deserializeBinaryFromReader(message: UpdateWorkspaceBrandingRequest, reader: jspb.BinaryReader): UpdateWorkspaceBrandingRequest;
}

export namespace UpdateWorkspaceBrandingRequest {
  export type AsObject = {
    brandingConfig?: BrandingConfig.AsObject,
  }
}

export class WorkspaceDomain extends jspb.Message {
  getDomain(): string;
  setDomain(value: string): WorkspaceDomain;

  getWorkspaceJoining(): WorkspaceJoining;
  setWorkspaceJoining(value: WorkspaceJoining): WorkspaceDomain;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkspaceDomain.AsObject;
  static toObject(includeInstance: boolean, msg: WorkspaceDomain): WorkspaceDomain.AsObject;
  static serializeBinaryToWriter(message: WorkspaceDomain, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkspaceDomain;
  static deserializeBinaryFromReader(message: WorkspaceDomain, reader: jspb.BinaryReader): WorkspaceDomain;
}

export namespace WorkspaceDomain {
  export type AsObject = {
    domain: string,
    workspaceJoining: WorkspaceJoining,
  }
}

export class GetWorkspaceDomainsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkspaceDomainsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkspaceDomainsRequest): GetWorkspaceDomainsRequest.AsObject;
  static serializeBinaryToWriter(message: GetWorkspaceDomainsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkspaceDomainsRequest;
  static deserializeBinaryFromReader(message: GetWorkspaceDomainsRequest, reader: jspb.BinaryReader): GetWorkspaceDomainsRequest;
}

export namespace GetWorkspaceDomainsRequest {
  export type AsObject = {
  }
}

export class UpsertWorkspaceDomainRequest extends jspb.Message {
  getDomain(): string;
  setDomain(value: string): UpsertWorkspaceDomainRequest;

  getWorkspaceJoining(): WorkspaceJoining;
  setWorkspaceJoining(value: WorkspaceJoining): UpsertWorkspaceDomainRequest;
  hasWorkspaceJoining(): boolean;
  clearWorkspaceJoining(): UpsertWorkspaceDomainRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpsertWorkspaceDomainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpsertWorkspaceDomainRequest): UpsertWorkspaceDomainRequest.AsObject;
  static serializeBinaryToWriter(message: UpsertWorkspaceDomainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpsertWorkspaceDomainRequest;
  static deserializeBinaryFromReader(message: UpsertWorkspaceDomainRequest, reader: jspb.BinaryReader): UpsertWorkspaceDomainRequest;
}

export namespace UpsertWorkspaceDomainRequest {
  export type AsObject = {
    domain: string,
    workspaceJoining?: WorkspaceJoining,
  }
}

export class RemoveWorkspaceDomainRequest extends jspb.Message {
  getDomain(): string;
  setDomain(value: string): RemoveWorkspaceDomainRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveWorkspaceDomainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveWorkspaceDomainRequest): RemoveWorkspaceDomainRequest.AsObject;
  static serializeBinaryToWriter(message: RemoveWorkspaceDomainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveWorkspaceDomainRequest;
  static deserializeBinaryFromReader(message: RemoveWorkspaceDomainRequest, reader: jspb.BinaryReader): RemoveWorkspaceDomainRequest;
}

export namespace RemoveWorkspaceDomainRequest {
  export type AsObject = {
    domain: string,
  }
}

export class WorkspaceDomainResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): WorkspaceDomainResponse;

  getRestrictUsersToDomains(): boolean;
  setRestrictUsersToDomains(value: boolean): WorkspaceDomainResponse;
  hasRestrictUsersToDomains(): boolean;
  clearRestrictUsersToDomains(): WorkspaceDomainResponse;

  getWorkspaceDomainsList(): Array<WorkspaceDomain>;
  setWorkspaceDomainsList(value: Array<WorkspaceDomain>): WorkspaceDomainResponse;
  clearWorkspaceDomainsList(): WorkspaceDomainResponse;
  addWorkspaceDomains(value?: WorkspaceDomain, index?: number): WorkspaceDomain;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkspaceDomainResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WorkspaceDomainResponse): WorkspaceDomainResponse.AsObject;
  static serializeBinaryToWriter(message: WorkspaceDomainResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkspaceDomainResponse;
  static deserializeBinaryFromReader(message: WorkspaceDomainResponse, reader: jspb.BinaryReader): WorkspaceDomainResponse;
}

export namespace WorkspaceDomainResponse {
  export type AsObject = {
    statusCode: StatusCode,
    restrictUsersToDomains?: boolean,
    workspaceDomainsList: Array<WorkspaceDomain.AsObject>,
  }
}

export class UpdateWorkspaceDomainSettingsRequest extends jspb.Message {
  getRestrictUsersToDomains(): boolean;
  setRestrictUsersToDomains(value: boolean): UpdateWorkspaceDomainSettingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWorkspaceDomainSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWorkspaceDomainSettingsRequest): UpdateWorkspaceDomainSettingsRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateWorkspaceDomainSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWorkspaceDomainSettingsRequest;
  static deserializeBinaryFromReader(message: UpdateWorkspaceDomainSettingsRequest, reader: jspb.BinaryReader): UpdateWorkspaceDomainSettingsRequest;
}

export namespace UpdateWorkspaceDomainSettingsRequest {
  export type AsObject = {
    restrictUsersToDomains: boolean,
  }
}

export class GetWorkspaceSeatCountRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkspaceSeatCountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkspaceSeatCountRequest): GetWorkspaceSeatCountRequest.AsObject;
  static serializeBinaryToWriter(message: GetWorkspaceSeatCountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkspaceSeatCountRequest;
  static deserializeBinaryFromReader(message: GetWorkspaceSeatCountRequest, reader: jspb.BinaryReader): GetWorkspaceSeatCountRequest;
}

export namespace GetWorkspaceSeatCountRequest {
  export type AsObject = {
  }
}

export class GetWorkspaceSeatCountResponse extends jspb.Message {
  getStatusCode(): StatusCode;
  setStatusCode(value: StatusCode): GetWorkspaceSeatCountResponse;

  getSeatsPurchased(): number;
  setSeatsPurchased(value: number): GetWorkspaceSeatCountResponse;
  hasSeatsPurchased(): boolean;
  clearSeatsPurchased(): GetWorkspaceSeatCountResponse;

  getSeatsActive(): number;
  setSeatsActive(value: number): GetWorkspaceSeatCountResponse;
  hasSeatsActive(): boolean;
  clearSeatsActive(): GetWorkspaceSeatCountResponse;

  getWorkspaceName(): string;
  setWorkspaceName(value: string): GetWorkspaceSeatCountResponse;
  hasWorkspaceName(): boolean;
  clearWorkspaceName(): GetWorkspaceSeatCountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkspaceSeatCountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkspaceSeatCountResponse): GetWorkspaceSeatCountResponse.AsObject;
  static serializeBinaryToWriter(message: GetWorkspaceSeatCountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkspaceSeatCountResponse;
  static deserializeBinaryFromReader(message: GetWorkspaceSeatCountResponse, reader: jspb.BinaryReader): GetWorkspaceSeatCountResponse;
}

export namespace GetWorkspaceSeatCountResponse {
  export type AsObject = {
    statusCode: StatusCode,
    seatsPurchased?: number,
    seatsActive?: number,
    workspaceName?: string,
  }
}

export enum SchemaVersion { 
  CURRENT_SCHEMA_VERSION = 1068,
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
export enum TokenType { 
  GOOGLE = 2,
  APPLE = 3,
  MICROSOFT = 4,
}
export enum SubscriptionTerm { 
  MONTH = 1,
  YEAR = 2,
}
export enum SubscriptionMediaPackage { 
  STANDARD_RESOLUTION = 1,
  HIGH_RESOLUTION = 2,
}
export enum FeatureAbility { 
  OFF = 1,
  VIEW = 2,
  ADD = 3,
}
export enum WorkspaceJoining { 
  AUTOMATIC = 1,
  EXPLICIT_INVITATION = 2,
}
