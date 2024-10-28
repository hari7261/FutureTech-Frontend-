import React from 'react';
const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CEO at TechCorp",
            image: "/image.png",
            quote: "This platform has transformed how we approach digital innovation."
        },
        {
            name: "Mark Stevens",
            role: "CTO at StartupX",
            image: "/image.png",
            quote: "The AI-powered features have increased our productivity by 300%."
        }
    ];

    return (
        <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">
                    Customer Success Stories
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl bg-gray-800/50 backdrop-blur-md border border-gray-700 transition-transform transform hover:scale-105 shadow-lg hover:shadow-neonPurple/50"
                        >
                            <div className="flex items-start gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full"
                                />
                                <div>
                                    <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                                    <p className="font-semibold">{testimonial.name}</p>
                                    <p className="text-gray-400">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
