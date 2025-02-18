import X from '../assets/X.png';
import LinkedIn from '../assets/Linked IN.png';
import Github from '../assets/Github.png';
import Instagram from '../assets/Instagram.png';
import Whatsapp from '../assets/Whatsapp.png';
import Twitter from '../assets/Twitter.png';

const Follow = () => {
    return (
        <div className='mt-[5%] px-[5%] w-full pb-10 pt-10 md:pt-0' id='follow'>
            <img src={X} />
            <div className='w-full lg:flex pl-[10%] pb-[5%] border-b border-[#6800F9]'>
                <div className='lg:w-[65%]'>
                    <p className='Akatab pt-[2%] FollowText' style={{ lineHeight: '70px' }}>{`Let's Connect On`}</p>
                    <div className="grid grid-cols-12 grid-rows-1 md:w-[80%] pt-[6%]">
                        {Array.from({ length: 12 }).map((_, colIndex) => {
                            const opacity = (15 + (11 - colIndex) * 10) / 100;
                            return (
                                <div
                                    key={colIndex}
                                    className="w-[18px] h-[18px] rounded-full bg-[#6800F9]"
                                    style={{ opacity }}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className='lg:w-[35%] lg:pr-[3%] pt-[10%] lg:pt-0'>
                    <div className='flex justify-between'>
                        <img src={LinkedIn} />
                        <img src={Github} />
                        <img src={Instagram} />
                    </div>
                    <div className='flex mt-[7%] justify-center'>
                        <img src={Whatsapp} />
                        <img src={Twitter} className='pl-[20%]' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Follow;