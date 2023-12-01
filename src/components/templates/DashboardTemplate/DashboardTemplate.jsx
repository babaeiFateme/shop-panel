import {
    DDashboardBanner,
    DDashboardContract,
    DDashboardDetail,
    DDashboardRecentRequest,
} from '@components/UI/organisms/DashboardOrganisms'
const DashboardTemplate = () => {
    return (
        <div className='flex flex-col w-full gap-y-3'>
            <DDashboardDetail />
            <DDashboardContract />
            <DDashboardBanner />
            <DDashboardRecentRequest />
        </div>
    )
}

export default DashboardTemplate
