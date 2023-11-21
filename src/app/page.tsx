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
                    date='2023-11-10'
                />
                <DisplayCard 
                    title='Distance Matrix Generator'
                    description='This distance matrix generator is a tool that helps you generate a random distance matrix.'
                    href='/gadgets/distanceMatrix'
                    src='/distanceMatrix.jpeg'
                    alt='Distance Matrix Generator'
                    date='2023-11-13'
                />
                <DisplayCard 
                    title='Location Finder'
                    description='This location finder is a tool that helps you find your current latitude and longitude.'
                    href='/gadgets/findLocation'
                    src='/locationFinder.jpeg'
                    alt='Location Finder'
                    date='2023-11-14'
                />
                <DisplayCard 
                    title='Taiwan Weather'
                    description='This Taiwan weather is a tool that helps you find the weather in Taiwan.'
                    href='/gadgets/weather'
                    src='/taiwanWeather.jpeg'
                    alt='Taiwan Weather'
                    date='2023-11-21'
                />
                <DisplayCard />
                <DisplayCard />
                <DisplayCard />
                <DisplayCard />
            </div>
        </div>
    )
}
