import PageHead from "../pageHead"
import Image from "next/image"
import { layoutStyles } from "../styles/layout"

const Loader = ({ image }) => {

    const LoaderImage = () => {
        if (typeof image == 'string' && image !== '') return <Image src={image} alt='loading...' width={50} height={50} />

        return <div className={layoutStyles.loaderIcon}>
            <svg>
                <path fill="#2563EB" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        dur="1s"
                        from="0 50 50"
                        to="360 50 50"
                        repeatCount="indefinite" />
                </path>
            </svg>
        </div>
    }

    return <div className={layoutStyles.loaderBody}>
        <PageHead title="Follio - Loading..." />
        <LoaderImage />
    </div>
}

export default Loader