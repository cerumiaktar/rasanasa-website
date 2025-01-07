
import Description from '../Description/Description';
import RelatedProducts from '../RelatedProducts/RelatedProducts';

const RightSidebar = () => {
    return (
        <div>
            <div className='bg-white shadow-lg  border'>
                <div className='flex items-center gap-8 border-b p-4'>
                    <h1 className='text-xl font-medium text-[#0474BC]'>Description</h1>
                    <h1 className='text-xl font-medium'>Review</h1>
                </div>
                <div>
                    <Description></Description>
                </div>
            </div>
            <div>
                <RelatedProducts></RelatedProducts>
            </div>
        </div>
    );
};

export default RightSidebar;