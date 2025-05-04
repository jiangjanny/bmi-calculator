import React, { useState } from "react";

const BmiCalculator = () => {
    const [weight, setWeight] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [bmi, setBmi] = useState<number | null>(null);
    const [category, setCategory] = useState<string>("");

    const calculateBmi = () => {
        if (weight > 0 && height > 0) {
            const heightInMeters = height / 100;
            const calculatedBmi = weight / (heightInMeters * heightInMeters);
            setBmi(calculatedBmi);
            categorizeBmi(calculatedBmi);
        }
    };

    const categorizeBmi = (bmiValue: number) => {
        if (bmiValue < 18.5) {
            setCategory("Underweight");
        } else if (bmiValue < 24.9) {
            setCategory("Normal weight");
        } else if (bmiValue < 29.9) {
            setCategory("Overweight");
        } else {
            setCategory("Obesity");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-center mb-6">BMI Calculator</h1>
            <div className="mb-4">
                <label htmlFor="weight" className="block text-sm font-medium">
                    Weight (kg)
                </label>
                <input
                    type="number"
                    id="weight"
                    className="w-full p-2 mt-2 border rounded-md"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="height" className="block text-sm font-medium">
                    Height (cm)
                </label>
                <input
                    type="number"
                    id="height"
                    className="w-full p-2 mt-2 border rounded-md"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                />
            </div>
            <button
                onClick={calculateBmi}
                className="w-full bg-blue-500 text-white p-2 rounded-md mt-4"
            >
                Calculate BMI
            </button>
            {bmi && (
                <div className="mt-6 text-center">
                    <h2 className="text-xl font-semibold">Your BMI: {bmi.toFixed(2)}</h2>
                    <p className="text-lg text-gray-600">Category: {category}</p>
                </div>
            )}
        </div>
    );
};

export default BmiCalculator;
