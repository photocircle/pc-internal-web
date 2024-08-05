import React from "react"
import { Buffer } from "buffer"

import { PhotoCircleWebInternalClient } from "../generated/InternalServiceClientPb"
import {
    Group, Media, StatusCode, SubscriptionMediaPackage, SubscriptionTerm,
} from "../generated/web_app_grpc_pb.js"
import {
    IconRoleModeratorSm, IconRoleContributorSm, IconRoleGuestSm, IconRoleViewerSm,
} from "../assets/Icons"
import { SchemaVersion } from "../generated/web_app_grpc_pb"
import { RetryInterceptor } from "../store/grpc/grpc.retries"
import { StatusCodeMessage } from "../types/types"

const LOCALHOST_MODE = false // Change to true for testing against Vagrant

// The environment the web app is running from.
// NB. For development, this is "localhost" but the backend is likely "dev"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ENVIRONMENT = (window as any).PHOTOCIRCLE_ENVIRONMENT || "localhost"
export const IS_DEV_ENV = ENVIRONMENT !== "prod"
export const SENTRY_ENABLED = ENVIRONMENT !== "localhost" // Change to true to allow Sentry for local testing, if desired

// The prefix used for connecting to backend services
const DEFAULT_BACKEND = LOCALHOST_MODE ? "localhost" : "dev"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BACKEND_ENV = (window as any).PHOTOCIRCLE_ENVIRONMENT || DEFAULT_BACKEND
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ROOT_HOSTNAME = (window as any).PHOTOCIRCLE_ROOT_HOSTNAME || `${BACKEND_ENV}.photocircleapp.com`
export const AUTH_STATE_COOKIE_NAME = `${BACKEND_ENV}_app_state`

const apiHostname = `accounts-api.${ROOT_HOSTNAME}`
export const photoDownloadHostname = `photo-download.${ROOT_HOSTNAME}`
export const videoDownloadHostname = `video-download.${ROOT_HOSTNAME}`

export const uploadPhotoHostname = `media-upload.${ROOT_HOSTNAME}`

export const singlePhotoDownloadHostname = `photo-store.${ROOT_HOSTNAME}`
export const singleVideoDownloadHostname = `video-store.${ROOT_HOSTNAME}`

export const webAppHostname = `web.${ROOT_HOSTNAME}`
export const adminAppHostname = `admin.${ROOT_HOSTNAME}`

// Used for third-party auth providers
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const { origin } = (window as any).location

export const grpcClient = new PhotoCircleWebInternalClient(`https://${apiHostname}`, {}, {
    unaryInterceptors: [new RetryInterceptor()],
})


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const grpcMetadata: any = {
    "pc-app-version": "2024.0805.01",
    "pc-device-type": "web-internal",
    "pc-schema-version": SchemaVersion.CURRENT_SCHEMA_VERSION,
    "authorization": "Bearer 6TV5rO35v0kOwgPIisBz9tZrJJoKTE", // XXX: Hard-coded for now
}

export enum DeviceType {
    iOS = "iOS",
    Android = "Android",
    unknown = "unknown",
}

export function getDeviceType(): DeviceType {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const userAgent: string = navigator.userAgent || navigator.vendor || (window as any).opera

    // Check if user is on an iOS device (iPhone or iPod)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (/iPhone|iPod|iPad/.test(userAgent) && !(window as any).MSStream) {
        return DeviceType.iOS
    }

    // Check for iPads, which might report as Macintosh
    if (/Macintosh/.test(userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1) {
        const ratio = window.screen.width / window.screen.height
        if (ratio > 0.5 && ratio < 0.8) {
            return DeviceType.iOS // Most iPads have a screen ratio between 0.5 and 0.8
        }
    }

    // Check if user is on an Android device
    if (/android/i.test(userAgent)) {
        return DeviceType.Android
    }

    // Default to 'unknown' if we cannot determine the device
    return DeviceType.unknown
}

export function copyToClipboard(text: string) {
    navigator.clipboard?.writeText(text)
        .then(() => {
            // console.error('Text successfully copied to clipboard');
        })
        .catch(() => {
            // console.error('Failed to copy text: ', err);
        })
}

export const getTypeKey = (
    object: { [key: string]: number | string }, // Adjusted to accept both number and string values
    value: number,
): string => Object.keys(object).find(
    (key) => object[key] === value,
) || ""

export const getStatusMessage = (
    object: typeof StatusCode,
    value: number,
) => StatusCodeMessage[getTypeKey(object, value)]

// Get error messages specific for auth
export const getAuthStatusMessage = (status: number) => (
    status === StatusCode.FORBIDDEN
        ? "You are unable to sign up because your domain is managed. Please contact your workspace admin."
        : undefined
)

export const getRoleIcon = (role: number) => {
    switch (role) {
        case 1: return <IconRoleModeratorSm />
        case 2: return <IconRoleContributorSm />
        case 3: return <IconRoleGuestSm />
        case 4: return <IconRoleViewerSm />
        default: return null
    }
}

export const detectBrowser = () => {
    // CREDIT: https://developer.mozilla.org/en-US/docs/Web/API/Window/navigator#example_1_browser_detect_and_return_a_string
    let sBrowser
    const sUsrAg = navigator.userAgent

    // The order matters here, and this may report false positives for unlisted browsers.

    if (sUsrAg.indexOf("Firefox") > -1) {
        sBrowser = "Firefox"
        // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
    } else if (sUsrAg.indexOf("SamsungBrowser") > -1) {
        sBrowser = "Samsung"
        // "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G955F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36
    } else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
        sBrowser = "Opera"
        // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
    } else if (sUsrAg.indexOf("Trident") > -1) {
        sBrowser = "IE"
        // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
    } else if (sUsrAg.indexOf("Edge") > -1) {
        sBrowser = "Edge"
        // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
    } else if (sUsrAg.indexOf("Chrome") > -1) {
        sBrowser = "Chrome"
        // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
    } else if (sUsrAg.indexOf("Safari") > -1) {
        sBrowser = "Safari"
        // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
    } else {
        sBrowser = "unknown"
    }

    return sBrowser
}

export const canPlayHEVCVideo = () => {
    const video = document.createElement("video")
    const browser = detectBrowser()
    if (browser === "Safari") {
        return video.canPlayType("video/mp4; codecs=\"hvc1\"") !== ""
    }
    // Note: hev1.1.6.L120.90 is main profile
    return video.canPlayType("video/mp4; codecs=\"hev1.1.6.L120.90\"") !== ""
}

export const getJoinPageMediaSize = (mediaUuids?: string[], isMobileScreen?: boolean) => {
    if (mediaUuids?.length === 0 || !mediaUuids) return undefined
    if (mediaUuids?.length === 1) return "full"
    if (mediaUuids?.length > 4) {
        if (isMobileScreen) return "thumb252"
        return "thumb417"
    }
    return "thumb417"
}

export const getMediaUrl = (mediaUuid: string, type: "thumb" | "thumb252" | "thumb417" | "full" | "video") => {
    switch (type) {
        case "thumb":
            return `https://${photoDownloadHostname}/${mediaUuid}.thumb.jpg`
        case "thumb252":
            return `https://${photoDownloadHostname}/${mediaUuid}.s252.jpg`
        case "thumb417":
            return `https://${photoDownloadHostname}/${mediaUuid}.s417.jpg`
        case "full":
            return `https://${photoDownloadHostname}/${mediaUuid}.full.jpg`
        case "video":
            return `https://${videoDownloadHostname}/${mediaUuid}`
        default:
            return ""
    }
}

export const getUserLocale = () => {
    const userLocale = navigator.languages && navigator.languages.length
        ? navigator.languages[0]
        : navigator.language

    return userLocale || "en-US"
}

export const convertDateFromUS = (date: number) => new Date(date / 1000)

export const formatLocaleDate = (date?: number, locale?: string, options: Intl.DateTimeFormatOptions = {}) => {
    // date should be epoch time in microseconds
    if (!options) {
        options = {
            month: "short",
            day: "numeric",
            year: "numeric",
        }
    }

    if (!date) {
        return "N/A"
    }

    return convertDateFromUS(date).toLocaleDateString(locale || getUserLocale(), options)
}

export const formatRelativeDate = (timestampUS: number) => {
    const date = convertDateFromUS(timestampUS)
    const now = new Date()
    const diff = now.getTime() - date.getTime()

    if (diff < 60000) {
        return "Just now"
    } if (diff < 3600000) {
        return `${Math.floor(diff / 60000)} minutes ago`
    } if (diff < 86400000) {
        return `${Math.floor(diff / 3600000)} hours ago`
    }
    if (diff < 604800000) {
        return `${Math.floor(diff / 86400000)} days ago`
    }
    return date.toLocaleDateString(getUserLocale(), {
        month: "short",
        day: "numeric",
        year: "numeric",
    })
}

export function deepCopy(object: object) {
    return JSON.parse(JSON.stringify(object))
}

export const renderVideoTime = (videoElement: HTMLVideoElement | null) => {
    if (videoElement) {
        const current = new Date(0)
        const duration = new Date(0)
        const countdown = new Date(0)

        current.setSeconds(videoElement.currentTime)
        duration.setSeconds(videoElement.duration)
        countdown.setSeconds(videoElement.duration - videoElement.currentTime)

        const countdownString = countdown.toLocaleTimeString("en-US", {
            timeZone: "UTC",
            minute: "2-digit",
            second: "2-digit",
        })

        if (countdownString === "Invalid Date") {
            return "..."
        }

        return countdownString
    }
    return null
}

export type GroupTreeNode = Group.AsObject & {
    groupUuid?: string,
    parentGroupUuid?: string,
    children?: GroupTreeNode[],
}

// TODO: @process I added types here but I'm not sure if they're correct
export const convertGroupsToTree = (groups: Group.AsObject[]): GroupTreeNode[] => {
    if (!groups.length) return []
    let rootGroup: GroupTreeNode | undefined // Correctly type rootGroup
    const groupMap: { [key: string]: GroupTreeNode } = {} // Correctly type groupMap
    groups.forEach((g) => {
        const groupWithChildren: GroupTreeNode = { ...g, children: [] } // Explicitly add children here
        groupMap[g.groupUuid] = groupWithChildren
    })
    groups.forEach((g) => {
        if (!g.parentGroupUuid || !(g.parentGroupUuid in groupMap)) {
            rootGroup = groupMap[g.groupUuid]
        } else {
            // Ensure the children array exists before pushing into it
            const parentGroup = groupMap[g.parentGroupUuid]
            if (!parentGroup.children) {
                parentGroup.children = [] // Initialize children as an empty array if it doesn't exist
            }
            parentGroup.children.push(groupMap[g.groupUuid])
        }
    })
    return rootGroup ? [rootGroup] : [] // Ensure an array is returned, even if rootGroup is undefined
}

export const flattenTree = (groupTree: GroupTreeNode[]) => {
    if (!groupTree.length) return []
    const flatTree = [...groupTree]
    const currentNode = groupTree[0]!
    if (currentNode.children) {
        for (let i = 0; i < currentNode.children.length; i += 1) {
            const group = currentNode.children[i]
            flatTree.push(...flattenTree([group]))
        }
    }
    return flatTree
}

export const renderGroupSelectOptions = (group: GroupTreeNode, prefix = "") => (
    <React.Fragment key={`${group.groupUuid}`}>
        <option value={group.groupUuid}>{prefix} {group.name}</option>
        {group?.children?.length && group?.children?.map(
            (child: GroupTreeNode) => renderGroupSelectOptions(child, `-${prefix}`),
        )}
    </React.Fragment>
)

export const getInitials = (name: string) => {
    const allNames = name.trim().split(" ")
    const initials = allNames.reduce((acc, curr, index) => {
        if (index === 0 || index === allNames.length - 1) {
            acc = `${acc}${curr.charAt(0).toUpperCase()}`
        }
        return acc
    }, "")
    return initials
}

// Returns an integer value for a string
// The range is [0, UINT32_MAX]
export const hashString = (str: string) => {
    // Adapted from https://stackoverflow.com/a/7616484/1976390
    let hash = 0
    if (str.length === 0) return hash
    for (let i = 0; i < str.length; i += 1) {
        const char = str.charCodeAt(i)
        hash = ((hash << 5) - hash) + char
        hash |= 0
    }
    return Math.abs(hash)
}

export const getAvatarColorName = (name: string) => {
    const avatarColorNames = [
        "purple", "pink", "blue", "green", "ink", "yellow", "mint", "grey",
        "brown", "babyblue", "grass", "darkgrey", "earth", "carmin", "orange",
    ]

    return avatarColorNames[hashString(name) % avatarColorNames.length]
}

export const renderDefaultAvatar = (name: string, color?: string, className?: string) => {
    const randomColor = color || getAvatarColorName(name)
    const initials = getInitials(name)

    // adapting this to the mui variables
    const lightColorName = `${randomColor}Light`
    const darkColorName = `${randomColor}Dark`
    const lightColor = 'black'
    const darkColor = 'black'

    const avatarStyle = {
        color: lightColor,
        background: darkColor,
    }

    return (
        <div
            className={"member-avatar"}
            style={avatarStyle}
        >
            {initials}
        </div>
    )
}

export const validateEmail = (email: string) => String(email)
    .toLowerCase()
    .match(
        // eslint-disable-next-line max-len
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    )

export const getJoinLink = () => {
    const currentLink = window.location.href

    if (ENVIRONMENT === "localhost") {
        const changeToDev = currentLink.replace("localhost", "dev")
        const regex = /:\d{4}/
        const removePort = changeToDev.replace(regex, "")
        return removePort
    }

    return currentLink
}

export const maximumLength = {
    displayName: 25,
    circleTitle: 50,
    caption: 200,
    comments: 400,
    emailAddress: 254,
}

export function generateUUID(): string {
    const arr = new Uint8Array(16)
    window.crypto.getRandomValues(arr)

    arr[6] = (arr[6] & 0x0f) | 0x40 // Set the version to 4 (UUID version 4)
    arr[8] = (arr[8] & 0x3f) | 0x80 // Set the variant to 1 (variant 1)

    return [...arr].map((byte, index) => {
        const str = byte.toString(16).padStart(2, "0")
        return (index === 4 || index === 6 || index === 8 || index === 10) ? `-${str}` : str
    }).join("")
}

export function generateMediaUUID(circleUuid: string) {
    if (circleUuid.length === 0) {
        throw new Error("circleUuid must not be empty")
    }

    const firstCharOfCircleUUID = circleUuid.charAt(0)
    const newUUID = generateUUID()
    const newUUIDMinusFirstChar = newUUID.substring(1)

    return firstCharOfCircleUUID + newUUIDMinusFirstChar
}

export function encodeEmail({
    email,
    subject = "",
    body = "",
}: {
    email: string;
    subject?: string;
    body?: string;
}) {
    const encodedEmail = encodeURIComponent(email)
    const encodedSubject = subject ? `subject=${encodeURIComponent(subject)}` : ""
    const encodedBody = body ? `body=${encodeURIComponent(body)}` : ""

    // returns the mailto link
    return `mailto:${encodedEmail}?${encodedSubject}${encodedSubject && encodedBody ? "&" : ""}${encodedBody}`
}

interface ScalingDimensions {
    sx: number;
    sy: number;
    sWidth: number;
    sHeight: number;
}

function getScalingDimensions(
    imgWidth: number,
    imgHeight: number,
    targetWidth: number,
    targetHeight: number,
): ScalingDimensions {
    const imgRatio = imgWidth / imgHeight
    const targetRatio = targetWidth / targetHeight

    let sx: number; let sy: number; let sWidth: number; let
        sHeight: number

    if (imgRatio > targetRatio) {
        // Wider than tall: clip horizontally
        sHeight = imgHeight
        sWidth = imgHeight * targetRatio
        sx = (imgWidth - sWidth) / 2
        sy = 0
    } else {
        // Taller than wide: clip vertically
        sWidth = imgWidth
        sHeight = imgWidth / targetRatio
        sx = 0
        sy = (imgHeight - sHeight) / 2
    }

    return {
        sx, sy, sWidth, sHeight,
    }
}

export function createThumbnail(imageBlob: Blob, callback: (thumbnailBlob: Blob | null) => void): void {
    const img = new Image()
    img.onload = () => {
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")
        if (!ctx) {
            callback(null)
            return
        }

        // Set canvas dimensions to the ones we use for thumbnails in grid media
        canvas.width = 252
        canvas.height = 252

        // Calculate the scaling and positioning
        const dimensions = getScalingDimensions(img.width, img.height, 252, 252)

        // Draw the image on the canvas
        ctx.drawImage(img, dimensions.sx, dimensions.sy, dimensions.sWidth, dimensions.sHeight, 0, 0, 252, 252)

        canvas.toBlob((thumbnailBlob) => {
            callback(thumbnailBlob)
        }, "image/jpeg")
    }

    img.onerror = () => {
        callback(null)
    }

    // Read the blob as a URL and set it as the image source
    img.src = URL.createObjectURL(imageBlob)
}

export const formatTerm = (term?: SubscriptionTerm) => {
    if (term === undefined) {
        return "N/A"
    }

    switch (term) {
        case SubscriptionTerm.MONTH:
            return "Month"
        case SubscriptionTerm.YEAR:
            return "Year"
        default:
            return "N/A"
    }
}

export const formatPackage = (mediaPackage?: SubscriptionMediaPackage) => {
    if (mediaPackage === undefined) {
        return "N/A"
    }

    switch (mediaPackage) {
        case SubscriptionMediaPackage.STANDARD_RESOLUTION:
            return "Standard"
        case SubscriptionMediaPackage.HIGH_RESOLUTION:
            return "High"
        default:
            return "N/A"
    }
}

export function convertMicrosecondsToFormattedDate(microseconds?: number): string {
    if (!microseconds) {
        return "N/A"
    }

    const milliseconds = microseconds / 1000
    const date = new Date(milliseconds)

    // Extracting month, day, and year components
    const month = (`0${date.getUTCMonth() + 1}`).slice(-2) // getUTCMonth() returns month from 0-11
    const day = (`0${date.getUTCDate()}`).slice(-2)
    const year = date.getUTCFullYear()

    // Concatenating components in MM/DD/YYYY format
    return `${month}/${day}/${year}`
}

export const resizeLogo = (
    image: HTMLImageElement,
    fileName: string,
    onSuccess: (newFile: File) => void,
    onError: (message: string) => void,
): void => {
    if (image.height < 120 || image.width < 120) {
        onError("Image is too small. Minimum dimensions are 120x120 pixels.")
        return
    }

    const newHeight = 120
    const newWidth = (image.width * newHeight) / image.height

    if (newWidth < 120 || newWidth > 600) {
        onError("Logo is too wide after resizing. Width should be between 120px and 600px.")
        return
    }

    const canvas = document.createElement("canvas")
    canvas.width = newWidth
    canvas.height = newHeight
    const ctx = canvas.getContext("2d")
    if (ctx) {
        ctx.drawImage(image, 0, 0, newWidth, newHeight)
        canvas.toBlob((blob) => {
            if (blob) {
                const newFile = new File([blob], fileName, {
                    type: "image/png",
                })
                onSuccess(newFile)
            }
        }, "image/png")
    } else {
        onError("Unable to load canvas. Please try again.")
    }
}

export function base64ToUint8Array(base64: string): Uint8Array {
    const binaryString = window.atob(base64)
    const { length } = binaryString
    const bytes = new Uint8Array(length)

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < length; i++) {
        bytes[i] = binaryString.charCodeAt(i)
    }

    return bytes
}

export function pngUint8ArrayToFile(uint8Array: string | Uint8Array | null, filename: string): File | null {
    if (!uint8Array) {
        return null
    }

    const mimeType = "image/png"

    const blob = new Blob([uint8Array], { type: mimeType })

    const file = new File([blob], filename, { type: mimeType })

    return file
}

export function convertPngFileToUint8Array(file: File | null): Promise<Uint8Array> {
    return new Promise((resolve, reject) => {
        if (!file) {
            reject(new Error("No file provided"))
            return
        }

        const reader = new FileReader()

        reader.onload = (event: ProgressEvent<FileReader>) => {
            if (event.target && event.target.result) {
                const buffer = event.target.result as ArrayBuffer

                resolve(new Uint8Array(buffer))
            } else {
                reject(new Error("Failed to load the file"))
            }
        }

        reader.onerror = () => {
            reject(new Error("There was an error reading the file"))
        }

        reader.readAsArrayBuffer(file)
    })
}

const rgbToHex = (rgb: number[]): string => `#${rgb.map((x) => {
    const hex = x.toString(16)
    return hex.length === 1 ? `0${hex}` : hex
}).join("")}`

const getMostCommonColorFromImageData = (imageData: ImageData): string => {
    const colorCounts: Record<string, number> = Array
        .from({ length: imageData.data.length / 4 })
        .reduce((acc: Record<string, number>, _, index: number) => {
            const i = index * 4
            const alpha = imageData.data[i + 3]
            // Skip transparent pixels
            if (alpha === 0) return acc

            const rgbKey = [imageData.data[i], imageData.data[i + 1], imageData.data[i + 2]].join(",")
            acc[rgbKey] = (acc[rgbKey] || 0) + 1
            return acc
        }, {})

    const mostCommonRgb = Object
        .entries(colorCounts)
        .reduce((a: [string, number], b: [string, number]) => (a[1] > b[1] ? a : b))[0]

    return rgbToHex(mostCommonRgb.split(",").map((num) => parseInt(num, 10)))
}

export async function getMostCommonColor(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => {
            const canvas = document.createElement("canvas")
            const ctx = canvas.getContext("2d")

            if (!ctx) {
                reject(new Error("Unable to get canvas context"))
                return
            }

            canvas.width = img.width
            canvas.height = img.height
            ctx.drawImage(img, 0, 0)

            try {
                const imageData = ctx.getImageData(0, 0, img.width, img.height)
                const mostCommonColor = getMostCommonColorFromImageData(imageData)
                resolve(mostCommonColor)
            } catch (error) {
                reject(new Error("Error processing image data"))
            }
        }

        img.onerror = () => reject(new Error("Error loading image"))
        img.crossOrigin = "anonymous" // Necessary for external URLs in web environments
        img.src = URL.createObjectURL(file)
    })
}

export function isLightColor(hex: string): boolean {
    // Remove the hash at the beginning if it's there
    hex = hex.replace("#", "")

    // Parse the hex string into its RGB components
    const bigint = parseInt(hex, 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255

    // Calculate the relative luminance according to W3's WCAG 2.0: https://www.w3.org/TR/WCAG20/#relativeluminancedef
    const luminance = 0.2126 * (r / 255) + 0.7152 * (g / 255) + 0.0722 * (b / 255)

    // Standard threshold for determining if color is light or dark
    // Same threshold used in the mobile app var contrastColor
    // https://github.com/photocircle/PhotoCircle-iOS/blob/main/PhotoCircle/Extensions/UIColor%2BExtensions.swift
    return luminance >= 0.4
}

const COMMON_IMAGE_HEADERS = Buffer.from([0xFF, 0xD8, 0xFF, 0xE0, 0x00, 0x10, 0x4A, 0x46, 0x49, 0x46, 0x00, 0x01, 0x01, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0xFF, 0xDB, 0x00, 0x43, 0x00, 0x0D, 0x0A, 0x0A, 0x10, 0x0C, 0x10, 0x19, 0x0F, 0x0F, 0x19, 0x21, 0x19, 0x14, 0x19, 0x21, 0x1E, 0x19, 0x19, 0x19, 0x19, 0x1E, 0x28, 0x22, 0x22, 0x22, 0x22, 0x22, 0x28, 0x2C, 0x2A, 0x2A, 0x2A, 0x2A, 0x2A, 0x2A, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0xFF, 0xDB, 0x00, 0x43, 0x01, 0x0E, 0x10, 0x10, 0x15, 0x12, 0x15, 0x19, 0x10, 0x10, 0x19, 0x23, 0x19, 0x15, 0x19, 0x23, 0x2C, 0x23, 0x1C, 0x1C, 0x23, 0x2C, 0x2C, 0x2C, 0x2B, 0x22, 0x2B, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0x2C, 0xFF, 0xC0, 0x00, 0x11, 0x08, 0x00, 0xFF, 0x00, 0xFF, 0x03, 0x01, 0x22, 0x00, 0x02, 0x11, 0x01, 0x03, 0x11, 0x01, 0xFF, 0xC4, 0x00, 0x1F, 0x00, 0x00, 0x01, 0x05, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0A, 0x0B, 0xFF, 0xC4, 0x00, 0xB5, 0x10, 0x00, 0x02, 0x01, 0x03, 0x03, 0x02, 0x04, 0x03, 0x05, 0x05, 0x04, 0x04, 0x00, 0x00, 0x01, 0x7D, 0x01, 0x02, 0x03, 0x00, 0x04, 0x11, 0x05, 0x12, 0x21, 0x31, 0x41, 0x06, 0x13, 0x51, 0x61, 0x07, 0x22, 0x71, 0x14, 0x32, 0x81, 0x91, 0xA1, 0x08, 0x23, 0x42, 0xB1, 0xC1, 0x15, 0x52, 0xD1, 0xF0, 0x24, 0x33, 0x62, 0x72, 0x82, 0x09, 0x0A, 0x16, 0x17, 0x18, 0x19, 0x1A, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2A, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3A, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4A, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5A, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6A, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7A, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8A, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98, 0x99, 0x9A, 0xA2, 0xA3, 0xA4, 0xA5, 0xA6, 0xA7, 0xA8, 0xA9, 0xAA, 0xB2, 0xB3, 0xB4, 0xB5, 0xB6, 0xB7, 0xB8, 0xB9, 0xBA, 0xC2, 0xC3, 0xC4, 0xC5, 0xC6, 0xC7, 0xC8, 0xC9, 0xCA, 0xD2, 0xD3, 0xD4, 0xD5, 0xD6, 0xD7, 0xD8, 0xD9, 0xDA, 0xE1, 0xE2, 0xE3, 0xE4, 0xE5, 0xE6, 0xE7, 0xE8, 0xE9, 0xEA, 0xF1, 0xF2, 0xF3, 0xF4, 0xF5, 0xF6, 0xF7, 0xF8, 0xF9, 0xFA, 0xFF, 0xC4, 0x00, 0x1F, 0x01, 0x00, 0x03, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0A, 0x0B, 0xFF, 0xC4, 0x00, 0xB5, 0x11, 0x00, 0x02, 0x01, 0x02, 0x04, 0x04, 0x03, 0x04, 0x07, 0x05, 0x04, 0x04, 0x00, 0x01, 0x02, 0x77, 0x00, 0x01, 0x02, 0x03, 0x11, 0x04, 0x05, 0x21, 0x31, 0x06, 0x12, 0x41, 0x51, 0x07, 0x61, 0x71, 0x13, 0x22, 0x32, 0x81, 0x08, 0x14, 0x42, 0x91, 0xA1, 0xB1, 0xC1, 0x09, 0x23, 0x33, 0x52, 0xF0, 0x15, 0x62, 0x72, 0xD1, 0x0A, 0x16, 0x24, 0x34, 0xE1, 0x25, 0xF1, 0x17, 0x18, 0x19, 0x1A, 0x26, 0x27, 0x28, 0x29, 0x2A, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3A, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4A, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5A, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6A, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7A, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8A, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98, 0x99, 0x9A, 0xA2, 0xA3, 0xA4, 0xA5, 0xA6, 0xA7, 0xA8, 0xA9, 0xAA, 0xB2, 0xB3, 0xB4, 0xB5, 0xB6, 0xB7, 0xB8, 0xB9, 0xBA, 0xC2, 0xC3, 0xC4, 0xC5, 0xC6, 0xC7, 0xC8, 0xC9, 0xCA, 0xD2, 0xD3, 0xD4, 0xD5, 0xD6, 0xD7, 0xD8, 0xD9, 0xDA, 0xE2, 0xE3, 0xE4, 0xE5, 0xE6, 0xE7, 0xE8, 0xE9, 0xEA, 0xF2, 0xF3, 0xF4, 0xF5, 0xF6, 0xF7, 0xF8, 0xF9, 0xFA, 0xFF, 0xDA, 0x00, 0x0C, 0x03, 0x01, 0x00, 0x02, 0x11, 0x03, 0x11, 0x00, 0x3F, 0x00])

export interface ExtendedMedia extends Media.AsObject {
    uploadedMedia?: string;
    isLoading?: boolean;
}

// Generating blurred thumbnail from image data docs: https://www.notion.so/photocircle/Sync-734770ed27fe455383f0c7f2b86ec69c?pvs=4#cc7dc56a4d084845b468712486c54c97
export const reconstructBlurredImage = (mediaItem: ExtendedMedia): string => {
    if (!mediaItem.previewData) return ""

    const buffer = Buffer.from(mediaItem.previewData as string, "base64")
    const width = buffer[1]
    const height = buffer[2]
    const imageData = buffer.slice(3)

    const headerWithDimensions = Buffer.concat([COMMON_IMAGE_HEADERS, imageData])

    headerWithDimensions[164] = width
    headerWithDimensions[166] = height

    const jpegEndMarker = Buffer.from([0xff, 0xd9])
    const completeImageData = Buffer.concat([headerWithDimensions, jpegEndMarker])

    return `data:image/jpeg;base64,${completeImageData.toString("base64")}`
}

function canShare() {
    if (navigator.canShare && typeof navigator.canShare === "function") {
        try {
            return navigator.canShare({ title: "test", files: [new File([""], "test.txt")] })
        } catch (error) {
            return false
        }
    }
    return false
}
export const browserSupportsSharingFiles = canShare()
