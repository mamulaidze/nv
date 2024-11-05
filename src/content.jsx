import React, { useState } from 'react';

const Content = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (  
    <div className='h-screen'>
      {/* Header */}
      <header className='bg-blue-500 text-white py-4 px-6 flex items-center justify-between w-full fixed'>
        <a href="#" className="text-xl font-semibold">
          Nova Camp
        </a>
        {/* Desktop Navigation */}
        <nav className='hidden md:flex space-x-4 '>
          <a href="#" className='hover:text-yellow-300'>კონტენტი</a>
          <a href="#" className='hover:text-yellow-300'>რეგისტრაცია</a>
          <a href="#" className='hover:text-yellow-300'>კონტაქტი</a>
        </nav>
        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button onClick={handleMenuToggle} className="text-2xl">
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden flex flex-col space-y-4 bg-blue-500 text-white p-6 absolute top-16 w-full left-0 shadow-lg'>
          <a href="#" className='hover:text-yellow-300'>კონტენტი</a>
          <a href="#" className='hover:text-yellow-300'>რეგისტრაცია</a>
          <a href="#" className='hover:text-yellow-300'>კონტაქტი</a>
        </div>
      )}

      {/* Main Content */}
      <main className="bg-gray-100 text-navyBlue min-h-[calc(100vh-4rem)] p-4 md:p-8 lg:p-16 space-y-12 md:space-y-16">
        
        {/* Hero Section */}
        <section className='text-center bg-sectionBg1 p-8 md:p-12 rounded-xl shadow-lg'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6'>მოგესალმებით Nova Camp-ში!</h1>
          <p className='text-base md:text-lg lg:text-xl leading-relaxed'>
            მზად ხარ ზაფხულის საოცარი თავგადასავლებისთვის? 🌞 <strong>Nova Camp</strong> გელოდება – ადგილი, სადაც განტვირთვა და მხიარულება გარანტირებულია!
          </p>
        </section>

        {/* Why Nova Camp */}
        <section className='grid gap-6 md:gap-8 lg:gap-16 md:grid-cols-2 lg:grid-cols-3'>
          <div className='bg-sectionBg2 p-6 md:p-8 rounded-lg shadow-lg'>
            <h2 className='text-xl md:text-2xl font-semibold mb-2 md:mb-4'>🎉 მხიარული აქტივობები</h2>
            <p className='leading-relaxed text-sm md:text-base'>
              გველოდება დაუვიწყარი დღეები! სპორტი, ექსტრემალური თამაშები, მუსიკალური საღამოები და ბევრი სხვა სიურპრიზი!
            </p>
          </div>
          <div className='bg-sectionBg3 p-6 md:p-8 rounded-lg shadow-lg'>
            <h2 className='text-xl md:text-2xl font-semibold mb-2 md:mb-4'>🤝 ახალი მეგობრები</h2>
            <p className='leading-relaxed text-sm md:text-base'>
              შეხვდი განსხვავებული ინტერესებისა და იდეების მქონე ადამიანებს. ახალი მეგობრები – ახალი ისტორიებია!
            </p>
          </div>
          <div className='bg-sectionBg1 p-6 md:p-8 rounded-lg shadow-lg'>
            <h2 className='text-xl md:text-2xl font-semibold mb-2 md:mb-4'>🌅 თავისუფლების შეგრძნება</h2>
            <p className='leading-relaxed text-sm md:text-base'>
              ჩვენთან შეგიძლია იყო შენივე თავი, ისიამოვნო და დაისვენო.
            </p>
          </div>
        </section>

        {/* Expectations */}
        <section className='text-center bg-sectionBg2 p-8 md:p-12 rounded-xl shadow-lg'>
          <h2 className='text-2xl md:text-3xl font-semibold mb-4 md:mb-6'>რას ველოდებით?</h2>
          <p className='text-base md:text-lg leading-relaxed'>
            Nova Camp არის ადგილი, სადაც ყოველი დღე განსხვავებული და დაუვიწყარი იქნება. შემოგვიერთდი, თუ გინდა ცხოვრება სრულად მოიგვარო!
          </p>
        </section>

        {/* Call to Action */}
        <section className='bg-ctaBg text-ctaText py-6 px-4 md:py-8 md:px-6 rounded-lg text-center'>
          <p className='text-lg md:text-xl font-medium'>
            ⏳ <strong>დარეგისტრირდი დღესვე!</strong> ადგილები შეზღუდულია! არ გამოტოვო შენი შანსი, რადგან ზაფხული აქ იწყება!
          </p>
        </section>

      </main>
    </div>
  );
};

export default Content;
