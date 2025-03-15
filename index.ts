import { IconProps } from './icons/IconProps';
import { genCancelIcon } from './icons/cancel';
export {CancelIcon} from './icons/cancel';
import { genPenIcon } from './icons/pen';
export {PenIcon} from './icons/pen';
import { genChatBubblesIcon } from './icons/chat';
export {ChatBubbles} from './icons/chat'
import { genSettingsIcon } from './icons/settings';
export { SettingsIcon } from './icons/settings'
import { genUserIcon } from './icons/user'
import { genBookIcon } from './icons/book';
export {UserIcon} from './icons/user'

export const createTheme = (theme: IconProps) => ({
    cancel: genCancelIcon (theme),
    pen: genPenIcon (theme),
    chat: genChatBubblesIcon (theme),
    settings: genSettingsIcon (theme),
    user: genUserIcon (theme),
    book: genBookIcon (theme),
})