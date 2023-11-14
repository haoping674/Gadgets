'use client'
import { useState, useEffect } from 'react'
import { Input } from '@/components/input'
import { DescriptionBlock, InputBlock } from '@/components/block'

const HEALTHY_BMI_LOWER = 18.5;
const HEALTHY_BMI_UPPER = 24.9;

type BMIResult = {
    bmi: number,
    idelWeight: {
        lower: number,
        upper: number
    }
}

const defaultBMIResult: BMIResult = {
    bmi: NaN,
    idelWeight: {
        lower: NaN,
        upper: NaN
    }
}

export default function BMICalculator() {
    const [height, setHeight] = useState<number | undefined>(undefined);
    const [weight, setWeight] = useState<number | undefined>(undefined);
    const [bmiResult, setBMIResult] = useState<BMIResult>(defaultBMIResult);

    const calculateBMI = (height: number, weight: number): BMIResult => {
        const bmi = weight / Math.pow(height / 100, 2);
        const idelWeight = {
            lower: HEALTHY_BMI_LOWER * Math.pow(height / 100, 2),
            upper: HEALTHY_BMI_UPPER * Math.pow(height / 100, 2)
        }
        return {
            bmi,
            idelWeight
        }
    }

    const handleChangeHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHeight(Number(e.target.value));
    }
    const handleChangeWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWeight(Number(e.target.value));
    }

    useEffect(() => {
        if (height === undefined || weight === undefined) {
            return;
        }
        setBMIResult(calculateBMI(height, weight));
    }, [height, weight])


    return (
        <section className='px-4 md:px-8 lg:px-16 xl:px-32 space-y-10'>
            <DescriptionBlock>
                <h2 className="text-2xl font-bold mb-4">Welcome to our BMI Calculator</h2>
                <p className="text-gray-700 leading-relaxed">
                    Our BMI calculator is a simple tool that helps you calculate your Body Mass Index (BMI). 
                    BMI is a measure of body fat based on your height and weight. 
                    Knowing your BMI can help you determine if you are at a healthy weight or if you need to make some changes to your lifestyle.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                    To use our BMI calculator, simply enter your height and weight in the fields above and click the "Calculate" button. 
                    Our calculator will then display your BMI and the ideal weight range for your height.
                </p>
            </DescriptionBlock>
            <InputBlock>
                <Input
                    label="Height (cm)"
                    type="number"
                    name="height"
                    placeholder="Height"
                    value={height}
                    onChange={handleChangeHeight}
                />
                <Input
                    label="Weight (kg)"
                    type="number"
                    name="weight"
                    placeholder="Weight"
                    value={weight}
                    onChange={handleChangeWeight}
                />
            </InputBlock>
            {!Number.isNaN(bmiResult.bmi) && (
            <DescriptionBlock>
                <p className='text-2xl font-bold mb-4'>Your BMI Result</p>
                <p className='text-gray-700 leading-relaxed mb-2'>Your BMI is <span className='font-bold'>{bmiResult.bmi.toFixed(2)}</span>.</p>
                <p className='text-gray-700 leading-relaxed'>Ideal weight is between <span className='font-bold'>{bmiResult.idelWeight.lower.toFixed(2)}</span> - <span className='font-bold'>{bmiResult.idelWeight.upper.toFixed(2)}</span> kg.</p>
            </DescriptionBlock>)}
        </section>
    )   
}