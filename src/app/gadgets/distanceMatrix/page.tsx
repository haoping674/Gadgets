'use client'
import { useState, useEffect } from 'react'
import { Input } from '@/components/input'
import { DescriptionBlock, InputBlock } from '@/components/block'
import { MessageButton } from '@/components/button';

export default function DistanceMatrixGenerator() {
    const [num, setNum] = useState(0);
    const [matrix, setMatrix] = useState<number[][]>([]);

    const generateMatrix = () => {
        // TODO: make a good distance matrix generator
        const newMatrix = [];
        for (let i = 0; i < num; i++) {
            const row: number[] = [];
            for (let j = 0; j < num; j++) {
                if (i === j) {
                    row.push(0); // distance from a point to itself is 0
                } else if (i < j) {
                    row.push(Math.floor(Math.random() * 100)); // generate a random distance for upper triangle
                } else {
                    row.push(newMatrix[j][i]); // copy the value from the lower triangle
                }
            }
            newMatrix.push(row);
        }
        setMatrix(newMatrix);
    }

    const handleChangeNum = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNum(parseInt(e.target.value));
    }

    useEffect(() => {
        if (num === 0) {
            return;
        }
        generateMatrix();
    }, [num])

    return (
        <section className="px-4 md:px-8 lg:px-16 xl:px-32 space-y-10">
            <MessageButton 
                message='因為 Christina 某項作業範例給的距離矩陣很簡單，然後只使用範例給的矩陣做 report 時，分數比較低，所以設計了一個可以產生距離矩陣的小工具'
            />
            <h2 className="text-2xl font-bold mb-4 text-center">Distance Matrix Generator</h2>
            <InputBlock >
                <Input label="Number of n*n Matrix" type="number" name="cols" placeholder="n" value={num} onChange={handleChangeNum} />
            </InputBlock>
            {matrix.length > 0 && (
                <div className="mt-4">
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th></th>
                                {Array.from({ length: num }, (_, i) => String.fromCharCode(65 + i)).map((col) => (
                                    <th key={col} className="px-4 py-2">{col}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {matrix.map((row, i) => (
                                <tr key={i}>
                                    <th className="px-4 py-2">{String.fromCharCode(65 + i)}</th>
                                    {row.map((cell, j) => (
                                        <td key={j} className="border px-4 py-2">{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    )
}
