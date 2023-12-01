import * as yup from 'yup'

const profileDetailSchema = yup.object({
    name: yup.string().required('نام الزامی است'),
    address: yup.string().required('آدرس الزامی است'),
    latitude: yup.string().required('عرض جغرافیایی الزامی است'),
    longitude: yup.string().required('طول جغرافیایی الزامی است'),
    working_calendar: yup
        .object()
        .test('custom-test-1', 'باید یک شیفت را کامل پر کنید', (workingCalendar, context) => {
            //check if there is workingCalendar
            if (!workingCalendar) {
                //there is no workingCalendar , there is no need to check
                return true
            }

            for (const singleDay in workingCalendar) {
                //check morning values to be correct
                if (
                    workingCalendar[singleDay].start_time_am.length === 0 &&
                    workingCalendar[singleDay].end_time_am.length !== 0
                ) {
                    //user must insert value of "start_time_am" , because inserted value of "end_time_am"
                    return context.createError({
                        path: `working_calendar[${singleDay}][start_time_am]`,
                        message: 'باید شیفت صبح را کامل پر کنید',
                    })
                }
                if (
                    workingCalendar[singleDay].end_time_am.length === 0 &&
                    workingCalendar[singleDay].start_time_am.length !== 0
                ) {
                    //user must insert value of "end_time_am" , because inserted value of "start_time_am"
                    return context.createError({
                        path: `working_calendar[${singleDay}][end_time_am]`,
                        message: 'باید شیفت صبح را کامل پر کنید',
                    })
                }

                //check if time be correct in order (start time must be lower than end time)
                if (
                    parseInt(workingCalendar[singleDay].start_time_am.replace(':', ''), 10) >
                    parseInt(workingCalendar[singleDay].end_time_am.replace(':', ''), 10)
                ) {
                    return context.createError({
                        path: `working_calendar[${singleDay}][end_time_am]`,
                        message: 'ترتیب ساعت را باید به درستی وارد کنید',
                    })
                }

                // check evening values to be correct
                if (
                    workingCalendar[singleDay].start_time_pm.length === 0 &&
                    workingCalendar[singleDay].end_time_pm.length !== 0
                ) {
                    //check evening values to be correct
                    //user must insert value of "start_time_pm" , because inserted value of "end_time_pm"
                    return context.createError({
                        path: `working_calendar[${singleDay}][start_time_pm]`,
                        message: 'باید شیفت عصر را کامل پر کنید',
                    })
                }
                if (
                    workingCalendar[singleDay].end_time_pm.length === 0 &&
                    workingCalendar[singleDay].start_time_pm.length !== 0
                ) {
                    //user must insert value of "end_time_pm" , because inserted value of "start_time_pm"
                    return context.createError({
                        path: `working_calendar[${singleDay}][end_time_pm]`,
                        message: 'باید شیفت عصر را کامل پر کنید',
                    })
                }
                //check if time be correct in order (start time must be lower than end time)
                if (workingCalendar[singleDay].start_time_pm > workingCalendar[singleDay].end_time_pm) {
                    return context.createError({
                        path: `working_calendar[${singleDay}][end_time_pm]`,
                        message: 'ترتیب ساعت را باید به درستی وارد کنید',
                    })
                }
            }

            return true
        })
        .required()
        .default({}),
})

export { profileDetailSchema }
