import './App.css';
import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PhoneIllustration from './images/illustration-phones.svg';


function App() {
  return (
    <div className="content-container w-screen">
      <div className="page1 pt-8">
        <NavBar></NavBar>
        <h2 className='text-center xl:mt-48 xl:text-6xl text-white mb-16 sm:text-4xl sm:mt-20'>A modern publishing platform</h2>
        <h4 className='text-center text-white font-light mb-20'>Grow your audience and build your online brand</h4>
        <button className='xl:pl-11 xl:pr-11 pt-3 pb-3 sm:pt-5 sm:pb-5 rounded-xl xl:mr-3 sm:mr-2' id='LandingPageOfferBtn'>
          Start for Free
        </button>
        <button className='xl:pl-11 xl:pr-11 xl:pt-3 xl:pb-3 bg-inherit hover:bg-white rounded-xl' id='LearnMoreBtn'>
          Learn More
        </button>
      </div>
      <div className="page2 xl:h-screen xl:pt-8 xl:pl-20 xl:pr-20 sm:pl-6 sm:pr-6 sm:pt-8">
        <div className='grid xl:grid-cols-2 sm:grid-rows-2' id='Page2Grid'>
          <div id='EditorIllustrationImgColumn' className='xl:h-full'>
          </div>
          <div className='xl:pt-20'>
          <h1 className='mb-16'>Designed for the future</h1>
            <h3 className='mb-6'>Introducing an extensible editor</h3>
            <p className='mb-11 leading-8'>
              Introducing an extensible editor
              Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
              The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
              videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
              change the looks of a blog.
            </p>
            <h3 className='mb-6'>Robust content management</h3>
            <p className='leading-8'>
              Flexible content management enables users to easily move through posts. Increase the usability of your blog 
              by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
            </p>
          </div>
        </div>
      </div>
      <div id='PhoneIllustrationImgColumn'>
        <img src={PhoneIllustration} alt="Phone Illustration" className='absolute' id='PhoneIllustration'/>
      </div>
      <div className="page3 grid grid-cols-2">
        <div id='BackgroundCircles'></div>
        <div className='p-20 page3-content'>
          <h1 className='text-white mb-8'>State of the Art Infrastructure</h1>
          <p className='text-white leading-8'>
            With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
            This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
          </p>
        </div>
      </div>
      <div className="page4 grid grid-cols-2">
        <div className='LaptopIllustrationColumn'></div>
        <div className='pl-28 pr-24 pt-28'>
          <h3 className='mt-24 mb-6'>Free, open, simple</h3>
          <p className='leading-7 mb-12'>
            Blogr is a free and open source application backed by a large community of helpful developers. It supports 
            features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
            and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
          </p>
          <h3 className='mb-6'>Powerful tooling</h3>
          <p className='leading-7'>
            Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
            capable of producing even the most complicated sites.
          </p>
        </div>
      </div>
      <div className="content-footer grid grid-cols-4 mt-20 p-20 text-slate-200 leading-8">
        <div className='font-bold text-white text-3xl'>
          Blogr
        </div>
        <div className='grid grid-rows-6'>
          <a>Product</a>
          <a>Overview</a>
          <a> Pricing</a>
          <a>Marketplace</a>
          <a>Features</a>
          <a>Integrations</a>
        </div>
        <div className='grid grid-rows-6'>
          <a>Company</a>
          <a>About</a>
          <a>Team</a>
          <a>Blog</a>
          <a>Careers</a>
        </div>
        <div className='grid grid-rows-6'>
          <a>Connect</a>
          <a>Contact</a>
          <a>Newsletter</a>
          <a>LinkedIn</a>
        </div>
      </div>
      <div className="attribution mt-32 text-center">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Atul Shince</a>.
      </div>
    </div>
  );
}

export default App;
