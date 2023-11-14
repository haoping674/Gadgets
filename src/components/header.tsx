import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import { NavLink } from '@/components/button'

const Header = () => {
    return (
        <header className="flex bg-gray-800 items-center justify-between py-5 px-5">
            <div className="flex items-center justify-between">
                <Image src={Logo} alt="logo" width={50} />
                <h1 className="text-white text-2xl font-bold ml-2">HaoPing, Chang</h1>
            </div>
            <div className="flex items-center justify-between">
                <NavLink name='關於我' url='#about' />
                <NavLink name='專案' url='#project' />
            </div>
        </header>
    )
}

export default Header