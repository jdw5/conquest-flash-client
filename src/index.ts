export { useToast } from "./use-toast";
export { useBanner } from "./use-banner";
export { plugin } from "./plugin";

export interface Message {
	label: string;
	description?: string;
	type?: string | MessageType;
}

export interface Toast extends Message {
	duration?: number | Persistent;
}

export interface Banner extends Message {}

export interface HasId {
	id: string;
}

export interface HasRemove {
	remove: () => void;
}

export type ToastOptions = Pick<Toast, "description" | "type" | "duration">;
export type Options = Pick<Message, "description" | "type">;
export type MessageOptions<T extends Message> = T extends Toast
	? ToastOptions
	: Options;
export type TypedOptions<T extends Message> = Omit<MessageOptions<T>, "type">;
export type Persistent = "persistent";
export type MessageType = "info" | "warning" | "error" | "success";
