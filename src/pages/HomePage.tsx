import landingImage from '../assets/landing.png';
import appDownloadImage from '../assets/appDownload.png';
import SearchBar, { SearchForm } from '@/components/SearchBar';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate()
  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
        pathname: `/search/${searchFormValues.searchQuery}`,
    });
  }

  return (
    <div className='flex flex-col gap-12'>
        <div className='md:px-32 bg-black border-white border-solid rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16'>
            <h1 className='text-5xl font-bold tracking-tight text-white'>
                Ready to Takeaway Today
            </h1>
            <span className='text-xl text-white'>Food is just a click away!</span>
            <SearchBar
                placeHolder='Search by City like London or Manchester' 
                onSubmit={handleSearchSubmit}
            />
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingImage} className='rounded-2xl'/>
            <div className='flex flex-col items-center justify-center gap-4 text-center text-white'>
                <span className='font-bold text-3xl tracking-tighter'>
                    Order takeaway even faster!
                </span>
                <span>
                    Download the Hungry App for faster ordering and personalized recommendations.
                </span>
                <img src={appDownloadImage} />
            </div>
        </div>
    </div>
  )
}

export default HomePage