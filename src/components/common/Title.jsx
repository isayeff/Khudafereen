
function Title({ title, description }) {
    return (
        <>
            <div className='py-10 flex flex-col justify-center items-center text-center gap-3'>
                <h3 className='xuduText text-[1.3rem] font-bold'>{title}</h3>
                <div className='text-[#898A8C]'>
                    {description}
                </div>
            </div>
        </>
    )
}

export default Title