export interface Message  {
    label: string;
    description?: string;
    type?: string|MessageType;
}

export interface Toast extends Message {
    duration?: number|Persistent;
}

export interface Banner extends Message {
    // No additional properties
}

export type Persistent = 'persistent'
export type MessageType = 'info' | 'warning' | 'error' | 'success';

export interface MessageData {
    id: string
    remove: () => void
}

export type ToastOptions = Pick<Toast, 'description' | 'type' |'duration'>;
export type Options = Pick<Message, 'description' | 'type'>;

export type MessageOptions<T extends Message> = T extends Toast ? ToastOptions : Options

export type TypedOptions<T extends Message> = Omit<MessageOptions<T>, 'type'>;