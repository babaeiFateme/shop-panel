import { DAYS_LIST, DSingleWorkDay } from './resources'

const DAddWorkDays = () => {
    return (
        <div className='flex flex-col gap-y-1 my-2'>
            {
                //map on all days we have to create checkbox of all days
                DAYS_LIST.map((singleDay, index) => (
                    //each day has field name for (form controller) and also label to show which day it is to user
                    <DSingleWorkDay key={index} fieldName={singleDay.fieldName} label={singleDay.label} />
                ))
            }
        </div>
    )
}

export default DAddWorkDays
