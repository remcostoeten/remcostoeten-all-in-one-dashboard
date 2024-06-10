import AnimatedLogoCloud from '@/components/marketing/AnimatedLogoCloud'
import HeroSection from '@/components/marketing/HeroSection'
import PageWrapper from '@/components/shared/containers/PageWrapper'

export default function Home() {
    return (
        <PageWrapper>
            <div className='flex flex-col justify-center items-center w-full mt-[1rem] p-3'>
                <HeroSection />
                <div className='w-[80%] py-[4rem] dark:hidden'>
                    <AnimatedLogoCloud />
                </div>
                {/* <StaticLogoCloud /> */}
            </div>
            <div className='flex my-[5rem] w-full justify-center items-center'>
                Side by side component
            </div>
            <div className='flex flex-col p-2 w-full justify-center items-center'>
                Marketing cards here
            </div>
            <div className='max-w-[1200px] p-8 mt-[2rem] lg:mt-[6rem] lg:mb-[5rem]'>
                Blog sample here
            </div>
            <div>Pricing component here</div>
            <div className='flex justify-center items-center w-full my-[8rem]'>
                accordion component here
            </div>
        </PageWrapper>
    )
}
