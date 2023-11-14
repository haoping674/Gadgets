import { DisplayCard } from '@/components/card'

export default function Home() {
    return (
        <div className='container-fluid p-10'>
            <div className='grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                <DisplayCard
                    title='BMI Calculator' 
                    description='This BMI calculator is a tool that helps you determine your Body Mass Index (BMI) based on your height and weight.'
                    href='/gadgets/bmi'
                    src='/bmi.jpeg'
                    alt='BMI Calculator'
                />
                <DisplayCard 
                    title='Distance Matrix Generator'
                    description='This distance matrix generator is a tool that helps you generate a random distance matrix.'
                    href='/gadgets/distanceMatrix'
                    src='/distanceMatrix.jpeg'
                    alt='Distance Matrix Generator'
                />
                <DisplayCard 
                    title='Location Finder'
                    description='This location finder is a tool that helps you find your current location.'
                    href='/gadgets/findLocation'
                    src='/locationFinder.jpeg'
                    alt='Location Finder'
                />
                <DisplayCard />
                <DisplayCard />
                <DisplayCard />
                <DisplayCard />
                <DisplayCard />
            </div>
        </div>
    )
}
