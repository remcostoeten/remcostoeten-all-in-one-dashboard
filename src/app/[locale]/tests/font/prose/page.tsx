import React from 'react'

const TypographyShowcase = () => {
    return (
        <div className='p-8'>
            <h1 className='text-3xl font-bold mb-6'>
                Tailwind CSS Typography Showcase
            </h1>
            <div className='flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8'>
                {/* Prose Section */}
                <div className='w-full lg:w-1/2'>
                    <h2 className='text-2xl mb-4'>
                        Prose Styling (Tailwind Typography Plugin)
                    </h2>
                    <h2 className='prose-2xl mb-4'>
                        Prose Styling (Tailwind Typography Plugin)
                    </h2>
                    <article className='prose lg:prose-xl'>
                        <h1>Garlic Bread with Cheese</h1>
                        <p>
                            For years, parents have espoused the health benefits
                            of eating garlic bread with cheese to their
                            children, with the food earning such an iconic
                            status in our culture that kids often dress up as
                            warm, cheesy loaves for Halloween.
                        </p>
                        <p>
                            But a recent study shows that the celebrated
                            appetizer may be linked to a series of rabies cases
                            springing up around the country.
                        </p>
                        <blockquote>
                            <p>
                                This is an important study that has far-reaching
                                implications for public health.
                            </p>
                        </blockquote>
                        <ul>
                            <li>Garlic bread is delicious</li>
                            <li>Cheese makes it better</li>
                            <li>But be cautious of potential health risks</li>
                        </ul>
                    </article>
                </div>

                {/* Regular Tailwind Section */}
                <div className='w-full lg:w-1/2'>
                    <h2 className='text-2xl mb-4'>
                        Regular Tailwind Text Options
                    </h2>
                    <div>
                        <h1 className='text-4xl font-bold'>
                            Garlic Bread with Cheese
                        </h1>
                        <p className='text-lg mt-4'>
                            For years, parents have espoused the health benefits
                            of eating garlic bread with cheese to their
                            children, with the food earning such an iconic
                            status in our culture that kids often dress up as
                            warm, cheesy loaves for Halloween.
                        </p>
                        <p className='text-lg mt-4'>
                            But a recent study shows that the celebrated
                            appetizer may be linked to a series of rabies cases
                            springing up around the country.
                        </p>
                        <blockquote className='border-l-4 border-gray-300 pl-4 my-4'>
                            <p className='italic'>
                                This is an important study that has far-reaching
                                implications for public health.
                            </p>
                        </blockquote>
                        <ul className='list-disc list-inside'>
                            <li>Garlic bread is delicious</li>
                            <li>Cheese makes it better</li>
                            <li>But be cautious of potential health risks</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TypographyShowcase
