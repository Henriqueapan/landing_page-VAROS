import Image from "next/image";
import TradersClub from '@/public/svg/tc.svg';
import Neofeed from '@/public/svg/neofeed.svg';
import Valoreconomico from '@/public/svg/valoreconomico.svg';
import FinClass from '@/public/svg/f.svg';
import BMandCNews from '@/public/svg/bm&c_news.svg';
import Bradvisors from '@/public/svg/bradvisors.svg';

const logoObjectArray = [
    {
        logoSrc: TradersClub,
        logoAlt: "Traders Club"
    },
    {
        logoSrc: Neofeed,
        logoAlt: "Neofeed"
    },
    {
        logoSrc: Valoreconomico,
        logoAlt: "Valor Econômico"
    },
    {
        logoSrc: FinClass,
        logoAlt: "FinClass"
    },
    {
        logoSrc: BMandCNews,
        logoAlt: "BM&C News"
    },
    {
        logoSrc: Bradvisors,
        logoAlt: "Bradvisors"
    },
]

export default function LogoInfiniteSlider(props : {"max-width" ?: number}) {
    return (
    <div className="w-full inline-flex flex-nowrap border border-[#4D5358] rounded-[24px] relative items-center"
        style={{"maxWidth": props["max-width"]}}>
        <div
            className="w-full h-[105%] -top-[2px] left-[3px] absolute
             bg-[linear-gradient(to_right,transparent,#131313_85%)]"
        />
        <div className="h-fit text-center pl-8 mr-16 text-nowrap">
            visto em
        </div>
        <div className="overflow-x-hidden flex flex-nowrap">
            <SliderLogoList/>
            <SliderLogoList/>
        </div>
    </div>
    )
}

function SliderLogoList() {
    return (
        <ul className="flex flex-shrink-0 items-center justify-center md:justify-start my-[28px] max-w-none
                animate-infinite-scroll"
        >
            {logoObjectArray.map((logoObject, key) => (
                <li key={key} className="mx-4 z-10">
                    <Image src={logoObject.logoSrc} alt={logoObject.logoAlt}/>
                </li>
            ))}
        </ul>
    )
}
