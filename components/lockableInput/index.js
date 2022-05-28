import { textStyles } from "../styles/textStyles"
import Image from "next/image"
import lock from '../../assets/svg/lock.svg'
import lockStyles from "./styles"

const LockableInput = ({ label, children, unlock, description, previewLink }) => {
    return (
        <>
            <div className="mb-[30px] z-0 relative">
                <p className={textStyles.label}>
                    {label} {previewLink ? <a target='_blank' className="text-brand" href={previewLink} rel="noreferrer">[view]</a> : null}
                </p>
                <p className={textStyles.labelDescription}>{description}</p>
                {!unlock
                    ? <div>
                        <div className={!unlock ? lockStyles.lockLabelWrapper : 'mb-[30px]'}>
                            <Image alt='locked feature icon' src={lock.src} width={22} height={22} />
                            <div className="m-1" />
                            Go premium to use feature
                        </div>
                        {children}
                    </div>
                    : <div>{children}</div>}

            </div>
        </>
    )
}

export default LockableInput