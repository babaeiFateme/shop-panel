import { FaRegCalendarDays } from 'react-icons/fa6'
import { DateInput } from 'mantine-datepicker-jalali'

import 'dayjs/locale/fa'

const DDatePicker = ({ label, ...rest }) => {
    return (
        <DateInput
            label={label}
            rightSection={<FaRegCalendarDays />}
            className=''
            classNames={{
                rightSection: 'text-gray-300',
                label: 'font-semibold text-base',
                input: 'py-0.5 px-4 h-auto rounded-lg',
                calendarHeaderControlIcon: 'rotate-90',
            }}
            style={{ direction: 'rtl' }}
            defaultValue={new Date()}
            locale='fa'
            firstDayOfWeek={6} // number 0-6, 0 – Sunday, 6 – Saturday, defaults to 1 – Monday
            weekendDays={[5]} // Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday, defaults to value defined in DatesProvider
            maxDate={new Date()}
            {...rest}
        />
    )
}

export default DDatePicker
