'use client'

import { DTabs } from '@components/UI/molecules/client'
import { DContractTable, DPaymentTable } from '@components/UI/organisms/ContractOrganisms'

const ContractsTemplate = () => {
    return (
        <DTabs defaultValue='contract'>
            <DTabs.List>
                <DTabs.Tab value='contract'>قرارداد ها</DTabs.Tab>
                <DTabs.Tab value='payment'>پرداخت ها</DTabs.Tab>
            </DTabs.List>

            <DTabs.Panel value='contract'>
                <DContractTable />
            </DTabs.Panel>

            <DTabs.Panel value='payment'>
                <DPaymentTable />
            </DTabs.Panel>
        </DTabs>
    )
}

export default ContractsTemplate
