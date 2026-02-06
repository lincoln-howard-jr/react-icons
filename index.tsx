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
import { genStarIcon } from './icons/star';
export { StarIcon } from './icons/star';
import { genStopwatchIcon } from './icons/stopwatch';
export { StopwatchIcon } from './icons/stopwatch';
import { genSubmitIcon } from './icons/submit';
export { SubmitIcon } from './icons/submit';
import { genTrashIcon } from './icons/trash';
export { TrashIcon } from './icons/trash';

// Animated icon imports (play once on load)
import { genAnimatedCancelIcon } from './icons/animated/cancel';
import { genAnimatedChatIcon } from './icons/animated/chat';
import { genAnimatedChevronDownIcon } from './icons/animated/chevronDown';
import { genAnimatedChevronLeftIcon } from './icons/animated/chevronLeft';
import { genAnimatedChevronRightIcon } from './icons/animated/chevronRight';
import { genAnimatedChevronUpIcon } from './icons/animated/chevronUp';
import { genAnimatedLightBulbIcon } from './icons/animated/lightBulb';
import { genAnimatedNotificationsIcon } from './icons/animated/notifications';
import { genAnimatedPlusIcon } from './icons/animated/plus';
import { genAnimatedSearchIcon } from './icons/animated/search';
import { genAnimatedSettingsIcon } from './icons/animated/settings';
import { genAnimatedStarIcon } from './icons/animated/star';
import { genAnimatedStopwatchIcon } from './icons/animated/stopwatch';
import { genAnimatedSubmitIcon } from './icons/animated/submit';
import { genAnimatedTrashIcon } from './icons/animated/trash';

// Continuous animated icon imports (loop infinitely)
import { genContinuousCancelIcon } from './icons/animated/continuous/cancel';
import { genContinuousChatIcon } from './icons/animated/continuous/chat';
import { genContinuousChevronDownIcon } from './icons/animated/continuous/chevronDown';
import { genContinuousChevronLeftIcon } from './icons/animated/continuous/chevronLeft';
import { genContinuousChevronRightIcon } from './icons/animated/continuous/chevronRight';
import { genContinuousChevronUpIcon } from './icons/animated/continuous/chevronUp';
import { genContinuousLightBulbIcon } from './icons/animated/continuous/lightBulb';
import { genContinuousNotificationsIcon } from './icons/animated/continuous/notifications';
import { genContinuousPlusIcon } from './icons/animated/continuous/plus';
import { genContinuousSearchIcon } from './icons/animated/continuous/search';
import { genContinuousSettingsIcon } from './icons/animated/continuous/settings';
import { genContinuousStarIcon } from './icons/animated/continuous/star';
import { genContinuousStopwatchIcon } from './icons/animated/continuous/stopwatch';
import { genContinuousSubmitIcon } from './icons/animated/continuous/submit';
import { genContinuousTrashIcon } from './icons/animated/continuous/trash';

// Re-export animated icons
export * from './icons/animated';
export * from './icons/animated/continuous';

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
    star: genStarIcon(theme),
    stopwatch: genStopwatchIcon(theme),
    submit: genSubmitIcon(theme),
    trash: genTrashIcon(theme),
    // Animated versions (play once on load)
    animated: {
        cancel: genAnimatedCancelIcon(theme),
        chat: genAnimatedChatIcon(theme),
        chevronDown: genAnimatedChevronDownIcon(theme),
        chevronLeft: genAnimatedChevronLeftIcon(theme),
        chevronRight: genAnimatedChevronRightIcon(theme),
        chevronUp: genAnimatedChevronUpIcon(theme),
        lightBulb: genAnimatedLightBulbIcon(theme),
        notifications: genAnimatedNotificationsIcon(theme),
        plus: genAnimatedPlusIcon(theme),
        search: genAnimatedSearchIcon(theme),
        settings: genAnimatedSettingsIcon(theme),
        star: genAnimatedStarIcon(theme),
        stopwatch: genAnimatedStopwatchIcon(theme),
        submit: genAnimatedSubmitIcon(theme),
        trash: genAnimatedTrashIcon(theme),
    },
    // Continuous animated versions (loop infinitely)
    continuous: {
        cancel: genContinuousCancelIcon(theme),
        chat: genContinuousChatIcon(theme),
        chevronDown: genContinuousChevronDownIcon(theme),
        chevronLeft: genContinuousChevronLeftIcon(theme),
        chevronRight: genContinuousChevronRightIcon(theme),
        chevronUp: genContinuousChevronUpIcon(theme),
        lightBulb: genContinuousLightBulbIcon(theme),
        notifications: genContinuousNotificationsIcon(theme),
        plus: genContinuousPlusIcon(theme),
        search: genContinuousSearchIcon(theme),
        settings: genContinuousSettingsIcon(theme),
        star: genContinuousStarIcon(theme),
        stopwatch: genContinuousStopwatchIcon(theme),
        submit: genContinuousSubmitIcon(theme),
        trash: genContinuousTrashIcon(theme),
    },
})