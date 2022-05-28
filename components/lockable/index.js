import { textStyles } from "../styles/textStyles"
import Image from "next/image"
import lock from '../../assets/svg/lock.svg'

const Lockable = ({ label, children, unlock, description, previewLink }) => {
    return (
        <>
            <div className="mb-[30px] z-0 relative">
                <p className={textStyles.label}>{label} {previewLink ? <a target='_blank' className="text-brand" href={previewLink} rel="noreferrer">[view]</a> : null}</p>
                <p className={textStyles.labelDescription}>{description}</p>
                {!unlock
                    ? <div>
                        <div className={!unlock ? 'bg-[#ffffffbb] font-bold absolute w-full h-full top-0 left-0 z-10 flex items-center justify-center' : 'mb-[30px]'}>

                            <Image alt='locked feature icon' src={lock.src} width={24} height={24} />
                            <div className="m-1" />
                            Go premium to unlock feature

                            {/* <PrimaryButton label='Go premium' action={() => window.alert('Feature coming soon 🤞')} full={false} /> */}
                            {/* <div className="mt-3">
                                <PrimaryButton full={false} label='Go premium' />
                            </div> */}
                        </div>
                        {children}
                    </div>
                    : <div>{children}</div>}

            </div>
        </>
    )
}

export default Lockable