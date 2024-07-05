import { ref } from 'vue'
import { type Toast, type MessageData, type ToastOptions, type TypedOptions } from '.'


const toasts = ref<(Toast & MessageData)[]>([])
let count = 0

export const useToast = () => {

    const getId = () => `toast-${count++}`

    const remove = (id: string) => {
        toasts.value = toasts.value.filter(toast => toast.id !== id)
    }

    const removeByIndex = (index: number) => {
        toasts.value.splice(index, 1)
    }

    const clear = () => {
        toasts.value = []
    }

    const toast = (label: string, params: ToastOptions = {} ) => {
        const {
            description = undefined,
            type = undefined,
            duration = 5000,
        } = params
        const id = getId()

        toasts.value.push({ id, label, description, type, duration, remove: () => remove(id) })

        if (duration && duration !== 'persistent') {
            setTimeout(() => remove(id), duration)
        }
    }

    const success = (label: string, params: TypedOptions<Toast>) => {
        toast(label, { ...params, type: 'success' })
    }

    const error = (label: string, params: TypedOptions<Toast>) => {
        toast(label, { ...params, type: 'error' })
    }

    const warning = (label: string, params: TypedOptions<Toast>) => {
        toast(label, { ...params, type: 'warning' })
    }

    const info = (label: string, params: TypedOptions<Toast>) => {
        toast(label, { ...params, type: 'info' })
    }

    return {
        toast,
        success,
        error,
        warning,
        info,
        clear,
        remove,
        removeByIndex,
        toasts,
    }
}