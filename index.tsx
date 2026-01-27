import { IconProps } from './icons/IconProps';
import { genCancelIcon } from './icons/cancel';
export { CancelIcon } from './icons/cancel';
import { genPenIcon } from './icons/pen';
export { PenIcon } from './icons/pen';
import { genChatBubblesIcon } from './icons/chat';
export { ChatBubbles } from './icons/chat'
import { genSettingsIcon } from './icons/settings';
export { SettingsIcon } from './icons/settings'
import { genUserIcon } from './icons/user'
export { UserIcon } from './icons/user'
import { genBookIcon } from './icons/book';
export { BookIcon } from './icons/book'
import { genCalendarIcon } from './icons/calendar';
export { CalendarIcon } from './icons/calendar';
import { genChevronDownIcon } from './icons/chevronDown';
export { ChevronDownIcon } from './icons/chevronDown';
import { genChevronLeftIcon } from './icons/chevronLeft';
export { ChevronLeftIcon } from './icons/chevronLeft';
import { genChevronRightIcon } from './icons/chevronRight';
export { ChevronRightIcon } from './icons/chevronRight';
import { genChevronUpIcon } from './icons/chevronUp';
export { ChevronUpIcon } from './icons/chevronUp';
import { genDashIcon } from './icons/dash';
export { DashIcon } from './icons/dash';
import { genDotsHorizontalIcon } from './icons/dotsHorizontal';
export { DotsHorizontalIcon } from './icons/dotsHorizontal';
import { genDotsVerticalIcon } from './icons/dotsVertical';
export { DotsVerticalIcon } from './icons/dotsVertical';
import { genFilterIcon } from './icons/filter';
export { FilterIcon } from './icons/filter';
import { genLightBulbIcon } from './icons/lightBulb';
export { LightBulbIcon } from './icons/lightBulb';
import { genNotificationsIcon } from './icons/notifications';
export { NotificationsIcon } from './icons/notifications';
import { genPlusIcon } from './icons/plus';
export { PlusIcon } from './icons/plus';
import { genQuestionMarkIcon } from './icons/questionMark';
export { QuestionMarkIcon } from './icons/questionMark';
import { genRemoveIcon } from './icons/remove';
export { RemoveIcon } from './icons/remove';
import { genRulerIcon } from './icons/ruler';
export { RulerIcon } from './icons/ruler';
import { genSearchIcon } from './icons/search';
export { SearchIcon } from './icons/search';
import { genStarFilledIcon } from './icons/starFilled';
export { StarFilledIcon } from './icons/starFilled';
import { genStarIcon } from './icons/star';
export { StarIcon } from './icons/star';
import { genStopwatchIcon } from './icons/stopwatch';
export { StopwatchIcon } from './icons/stopwatch';
import { genSubmitIcon } from './icons/submit';
export { SubmitIcon } from './icons/submit';
import { genTrashIcon } from './icons/trash';
export { TrashIcon } from './icons/trash';

export const createTheme = (theme: IconProps) => ({
    cancel: genCancelIcon(theme),
    pen: genPenIcon(theme),
    chat: genChatBubblesIcon(theme),
    settings: genSettingsIcon(theme),
    user: genUserIcon(theme),
    book: genBookIcon(theme),
    calendar: genCalendarIcon(theme),
    chevronDown: genChevronDownIcon(theme),
    chevronLeft: genChevronLeftIcon(theme),
    chevronRight: genChevronRightIcon(theme),
    chevronUp: genChevronUpIcon(theme),
    dash: genDashIcon(theme),
    dotsHorizontal: genDotsHorizontalIcon(theme),
    dotsVertical: genDotsVerticalIcon(theme),
    filter: genFilterIcon(theme),
    lightBulb: genLightBulbIcon(theme),
    notifications: genNotificationsIcon(theme),
    plus: genPlusIcon(theme),
    questionMark: genQuestionMarkIcon(theme),
    remove: genRemoveIcon(theme),
    ruler: genRulerIcon(theme),
    search: genSearchIcon(theme),
    starFilled: genStarFilledIcon(theme),
    star: genStarIcon(theme),
    stopwatch: genStopwatchIcon(theme),
    submit: genSubmitIcon(theme),
    trash: genTrashIcon(theme),
})