import { useState } from "react";
import PricingCard from "../Utils/PricingCard";

function Pricing() {
    const [selectMonthly, setSelectMonthly] = useState(true);

    const toggleMonthly = () => {
        setSelectMonthly(!selectMonthly);
    };

    const plans = [
        {
            name: 'Basic',
            description: 'For small teams just getting started',
            monthlyPrice: 29,
            annuallyPrice: 299,
            features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
        },
        {
            name: 'Pro',
            description: 'For growing businesses with unlimited users',
            monthlyPrice: 79,
            annuallyPrice: 799,
            features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
        },
        {
            name: 'Enterprise',
            description: 'For large enterprises needing advanced features',
            monthlyPrice: 149,
            annuallyPrice: 1499,
            features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
        },
    ];

    return (
        <section className="flex-grow bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-50">
            <div className="max-w-screen-lg pt-24 px-4 py-12 mx-auto">
                <h1 className="text-4xl font-bold text-center">Choose Your Plan</h1>
                <div className="grid grid-cols-1 item-center justify-center gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan, index) => (
                        <PricingCard key={index} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Pricing;
