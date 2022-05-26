import Link from "next/link"

const FAB = () => {
    return (
        <>
            <Link href="mailto:follioap@gmail.com" passHref>
                <div className='tooltip fixed lg:right-[30px] right-[20px] shadow-2xl cursor-pointer active:scale-50 transition bottom-[80px] bg-brand z-50 w-[60px] h-[60px] rounded-full p-3 flex items-center justify-center text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="30" height="30" viewBox="0 0 24 24"><path d="M12 1c-6.627 0-12 4.364-12 9.749 0 3.131 1.817 5.917 4.64 7.7.868 2.167-1.083 4.008-3.142 4.503 2.271.195 6.311-.121 9.374-2.498 7.095.538 13.128-3.997 13.128-9.705 0-5.385-5.373-9.749-12-9.749z" /></svg>
                    <span className="tooltiptext">Leave a review</span>
                </div>
            </Link>
        </>
    )
}

export default FAB