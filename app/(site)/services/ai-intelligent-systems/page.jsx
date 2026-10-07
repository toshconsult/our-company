"use client";

import { useState } from "react";
import Image from 'next/image';
import arrow from '../../../../public/images/Curved Arrow Downward.png';
import product from '../../../../public/images/Rectangle 87.png';
import purple from '../../../../public/images/Rectangle 94.png'
import orange from '../../../../public/images/Rectangle 95.png'
import ui from '../../../../public/images/Rectangle 87 (1).png'
import Image1  from '../../../../public/images/Rectangle 100.png'
import Image2  from '../../../../public/images/Rectangle 101.png'
import Image3 from '../../../../public/images/Component 3.png'
import Image4 from '../../../../public/images/Rectangle 103.png'
import Image5 from '../../../../public/images/Rectangle 104.png'
import Image6 from '../../../../public/images/Rectangle 105.png'
// import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
function ai() {
  
  const [selectedImage, setSelectedImage] = useState(null);

const gallery = [
  {
    image: Image1,
    title: "Project One",
    text: "This is the description for project one. Here you can explain what the project is about and the work that was done.",
  },
  {
    image: Image2,
    title: "Project Two",
    text: "This is the description for project two. You can add information about the design, development and purpose of the project.",
  },
  {
    image: Image3,
    title: "Project Three",
    text: "This is the description for project three. Add the details you want your visitors to see when they open this image.",
  },
  {
    image: Image4,
    title: "Project Four",
    text: "This is the description for project four. You can describe the project, the client's needs and the solution provided.",
  },
  {
    image: Image5,
    title: "Project Five",
    text: "This is the description for project five. Add your project information here.",
  },
  {
    image: Image6,
    title: "Project Six",
    text: "This is the description for project six. Add your project information here.",
  },
];

const nextImage = () => {
  setSelectedImage((prev) =>
    prev === gallery.length - 1 ? 0 : prev + 1
  );
};

const previousImage = () => {
  setSelectedImage((prev) =>
    prev === 0 ? gallery.length - 1 : prev - 1
  );
};
  return (

    

    <>
      {/* <Navbar /> */}
      <main className="w-full bg-white text-gray-900 font-sans">

            {/* ========================================== */}
        {/* 1. HERO SECTION                            */}
        {/* ========================================== */}

      <section className="relative w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#FEF9EC] overflow-hidden">

          {/* ========================================== */}
          {/* BACKGROUND IMAGE 1 — GROUP 67              */}
          {/* ========================================== */}

          <div className="absolute inset-0 pointer-events-none z-0">
            <div
              className="absolute w-[45vw] h-[45vw] sm:w-[35vw] sm:h-[35vw] md:w-[25vw] md:h-[25vw] bg-no-repeat bg-contain"
              style={{
                backgroundImage: "url('/images/Group 67.png')",
                backgroundPosition: "center",
                backgroundSize: "contain",
                right: "-5%",
                bottom: "-10%",
              }}
            />
          </div>


          {/* ========================================== */}
          {/* BACKGROUND IMAGE 2 — GROUP 68              */}
          {/* ========================================== */}

          <div className="absolute inset-0 pointer-events-none z-0">
            <div
              className="absolute w-[30vw] h-[30vw] sm:w-[22vw] sm:h-[22vw] md:w-[15vw] md:h-[15vw] bg-no-repeat bg-contain"
              style={{
                backgroundImage: "url('/images/Group 68.png')",
                backgroundPosition: "center",
                backgroundSize: "contain",
                right: "5%",
                top: "6%",
              }}
            />
          </div>


          {/* ========================================== */}
          {/* BACKGROUND IMAGE 3 — GROUP 69              */}
          {/* ========================================== */}

          <div className="absolute inset-0 pointer-events-none z-0">
            <div
              className="absolute w-[35vw] h-[35vw] sm:w-[28vw] sm:h-[28vw] md:w-[20vw] md:h-[20vw] bg-no-repeat bg-contain"
              style={{
                backgroundImage: "url('/images/Group 69.png')",
                backgroundPosition: "center",
                backgroundSize: "contain",
                left: "2%",
                bottom: "10%",
              }}
            />
          </div>


          {/* ========================================== */}
          {/* BACKGROUND IMAGE 4 — GROUP 70              */}
          {/* ========================================== */}

          <div className="absolute inset-0 pointer-events-none z-0">
            <div
              className="absolute w-[25vw] h-[25vw] sm:w-[18vw] sm:h-[18vw] md:w-[12vw] md:h-[12vw] bg-no-repeat bg-contain"
              style={{
                backgroundImage: "url('/images/Group 70.png')",
                backgroundPosition: "center",
                backgroundSize: "contain",
                left: "10%",
                top: "8%",
              }}
            />
          </div>


          {/* ========================================== */}
          {/* HERO CONTENT                               */}
          {/* ========================================== */}

          <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center gap-6 z-10 mt-2">

            {/* HEADING */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight tracking-tight text-black">
              Are You Looking For A Web Design <br className="hidden md:block" />
              Experts To Work On Your Projects?
            </h1>


            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm sm:text-base md:text-base max-w-2xl mt-2 leading-relaxed text-start w-full">
              Search No More! Our Expert UI UX Designers Are Ready To Work On Both Your New And
              Existing Project To Deliver Professional And Conversion Products.
            </p>


            {/* BUTTON */}
            <button className="mt-4 bg-[#F59E0B] hover:bg-[#D97706] transition-colors text-white font-semibold py-3.5 px-6 sm:px-8 rounded-lg flex items-center gap-3 shadow-md cursor-pointer text-sm sm:text-base">

              Book a free consultation

              {/* Arrow Icon */}
              <Image
                src={arrow}
                alt="arrow"
                className="w-5 h-auto"
              />

            </button>

          </div>

        </section>
      {/* ========================================== */}
      {/* 2. FEATURE SECTIONS (Research & Flow)      */}
      {/* ========================================== */}
      <section className="py-24 px-4 max-w-5xl mx-auto flex flex-col gap-32 h-auto">

                    {/* --- Feature 1: Product Research --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            
              <div className="relative max-w-[500px] flex items-center justify-center">

                {/* Purple/Bottom Image */}
                <div className="absolute z-0  rotate-3">
                  <Image
                    src={purple}
                    alt="below"
                    className="w-full h-[76vh]"
                  />
                </div>

                {/* Main Product Image */}
                <div className="relative z-10 right-4">
                  <Image
                    src={product}
                    alt="product"
                    className="w-full h-[80vh]"
                  />
                </div>

              </div>


          <div className="flex flex-col gap-5 w-full">
              <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold leading-tight text-black">
                Product Research <br className="hidden sm:block" /> Approach
              </h2>

              <p className="text-gray-600 lg:text-[12px] font-bold text-sm md:text-[15px] leading-relaxed">
                We Don't Just Start Designing A Product, We First Conduct A <br className="hidden sm:block" /> Thorough Product Research
                And Analysis. So We Can Define <br className="hidden sm:block" /> The Project Goals And Objects, Conduct Market Research
                To <br className="hidden sm:block" /> Understand Your User Needs And Preference, From There We'd <br className="hidden sm:block" /> Understand Who Your
                Target Audiences Are And Be Able To <br className="hidden sm:block" /> Analyze Your Intend Competitors And Compare Similar <br className="hidden sm:block" /> Products.
              </p>
            </div>
        </div>


        {/* --- Feature 2: Product Flow --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

         {/* Text Content (Left - Note: order changes on mobile) */}
          <div className="flex flex-col gap-5 order-2 md:order-1 w-full">
            <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold leading-tight text-black">
              Product Flow And <br className="hidden sm:block" /> Architecture <br className="hidden sm:block" /> Design
            </h2>

            <p className="text-gray-500 lg:text-[12px] font-bold text-sm md:text-[15px] leading-relaxed">
              Upon Understanding Your Product, Our Experts Will Start <br className="hidden sm:block" /> Working On Your Product Design
              By Sketching Out it's <br className="hidden sm:block" /> The Architectural Design, Apply Some Design Principles And Make <br className="hidden sm:block" /> Sure
              We Deliver What Your Users Will Love And What You'd Also <br className="hidden sm:block" /> Be Pleased With!
            </p>
          </div>

          {/* Image Placeholder (Right) */}
          <div className="w-full flex justify-center md:justify-end order-1 md:order-2">

             <div className="relative max-w-[500px] flex items-center justify-center">

                {/* Purple/Bottom Image */}
                <div className="absolute z-0  rotate-3">
                  <Image
                    src={orange}
                    alt="below"
                    className="w-full h-[76vh]"
                  />
                </div>

                {/* Main Product Image */}
                <div className="relative z-10 right-4">
                  <Image
                    src={ui}
                    alt="product"
                    className="w-full h-[80vh]"
                  />
                </div>

              </div>

          </div>
        </div>

      </section>


      <section className="bg-[#fff1cc] h-auto w-full flex-col items-center justify-center p-6 sm:p-10 md:p-16 lg:p-28">

  <div className="text-center">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-black">
      We Follow A Simples <br /> Process For Our Clients
    </h2>
  </div>

                    
  <div className="w-full sm:w-[90vw] md:w-[85vw] lg:w-[80vw] flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-6 lg:gap-8 mt-12 md:mt-16 mx-auto">

    {/* Step 1 */}
    <div className="flex flex-col items-start gap-4 w-full sm:w-[80%] md:w-auto">
      <div className='flex items-center justify-center gap-4'>
        <div className="w-14 h-14 shrink-0 rounded-full bg-[#F59E0B] text-white flex items-center justify-center text-xl font-bold">
          1
        </div>

        <div className="hidden md:block w-[13vw] border-t-2 border-dashed border-black my-8 relative left-4"></div>
      </div>
      
      <h3 className="font-bold text-lg">
        Choose Our Services
      </h3>

      <p className="text-xs text-gray-500 leading-relaxed w-full md:w-[20vw]">
        Lorem ipsum Dolor Sit Amet, Consectetur <br className="hidden md:block" /> Adipiscing Elit, Eget Aenean Accumsan  <br className="hidden md:block" /> Bibendum Gravida Maecenas Augue. <br className="hidden md:block" /> Lorem ipsum dolor sit amet,
      </p>
    </div>



    {/* Step 2 */}
    <div className="flex flex-col items-start gap-4 w-full sm:w-[80%] md:w-auto">
      <div className='flex items-center justify-center gap-4'>
        <div className="w-14 h-14 shrink-0 rounded-full bg-white text-black flex items-center justify-center text-xl font-bold">
          2
        </div>

        <div className="hidden md:block w-[13vw] border-t-2 border-dashed border-black my-8 relative left-4"></div>
      </div>

      <h3 className="font-bold text-lg">
        Request For Meeting
      </h3>

      <p className="text-xs text-gray-500 leading-relaxed w-full md:w-[20vw]">
        Lorem ipsum Dolor Sit Amet, Consectetur <br className="hidden md:block" /> Adipiscing Elit, Eget Aenean Accumsan  <br className="hidden md:block" /> Bibendum Gravida Maecenas Augue. <br className="hidden md:block" /> Lorem ipsum dolor sit amet,
      </p>
    </div>


    {/* Step 3 */}
    <div className="flex flex-col items-start gap-4 w-full sm:w-[80%] md:w-auto">
      <div className='flex items-center justify-center gap-4'>
        <div className="w-14 h-14 shrink-0 rounded-full bg-white text-black flex items-center justify-center text-xl font-bold">
          3
        </div>

        <div className="hidden md:block w-[13vw] border-t-2 border-dashed border-black my-8 relative left-4"></div>
      </div>


      <h3 className="font-bold text-lg">
        Get Custom Plan
      </h3>

      <p className="text-xs text-gray-500 leading-relaxed w-full md:w-[20vw]">
        Lorem ipsum Dolor Sit Amet, Consectetur <br className="hidden md:block" /> Adipiscing Elit, Eget Aenean Accumsan  <br className="hidden md:block" /> Bibendum Gravida Maecenas Augue. <br className="hidden md:block" /> Lorem ipsum dolor sit amet,
      </p>
    </div>


    {/* Step 4 */}
    <div className="flex flex-col items-start gap-4 w-full sm:w-[80%] md:w-auto">
      <div className='flex items-center justify-center gap-4'>
        <div className="w-14 h-14 shrink-0 rounded-full bg-white text-black flex items-center justify-center text-xl font-bold">
          4
        </div>
      </div>


      <h3 className="font-bold text-lg">
        Delivery
      </h3>

      <p className="text-xs text-gray-500 leading-relaxed w-full md:w-[20vw]">
        Lorem ipsum Dolor Sit Amet, Consectetur <br className="hidden md:block" /> Adipiscing Elit, Eget Aenean Accumsan  <br className="hidden md:block" /> Bibendum Gravida Maecenas Augue. <br className="hidden md:block" /> Lorem ipsum dolor sit amet,
      </p>
    </div>

  </div>
</section>
{/* ========================================== */}
{/* 4. GALLERY / TESTIMONIALS SECTION          */}
{/* ========================================== */}

<section className="py-24 px-4 bg-white">

  <div className="max-w-5xl mx-auto">

    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-bold leading-tight text-black">
        What Other Business <br /> Owners Are Saying About Us
      </h2>
    </div>


    {/* ========================================== */}
    {/* IMAGE GRID                                  */}
    {/* ========================================== */}

    <div className="flex flex-wrap gap-6">

      {/* Image 1 */}
      <div
        onClick={() => setSelectedImage(0)}
        className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] aspect-[4/3] rounded-2xl flex items-center justify-center cursor-pointer overflow-hidden"
      >
        <Image
          src={Image1}
          alt="Gallery Image 1"
          className="w-full h-full object-contain"
        />
      </div>


      {/* Image 2 */}
      <div
        onClick={() => setSelectedImage(1)}
        className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] aspect-[4/3] rounded-2xl flex items-center justify-center cursor-pointer overflow-hidden"
      >
        <Image
          src={Image2}
          alt="Gallery Image 2"
          className="w-full h-full object-contain"
        />
      </div>


      {/* Image 3 */}
      <div
        onClick={() => setSelectedImage(2)}
        className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] aspect-[4/3] rounded-2xl flex items-center justify-center cursor-pointer overflow-hidden"
      >
        <Image
          src={Image3}
          alt="Gallery Image 3"
          className="w-full h-full object-contain"
        />
      </div>


      {/* Image 4 */}
      <div
        onClick={() => setSelectedImage(3)}
        className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] aspect-[4/3] rounded-2xl flex items-center justify-center cursor-pointer overflow-hidden"
      >
        <Image
          src={Image4}
          alt="Gallery Image 4"
          className="w-full h-full object-contain"
        />
      </div>


      {/* Image 5 */}
      <div
        onClick={() => setSelectedImage(4)}
        className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] aspect-[4/3] rounded-2xl flex items-center justify-center cursor-pointer overflow-hidden"
      >
        <Image
          src={Image5}
          alt="Gallery Image 5"
          className="w-full h-full object-contain"
        />
      </div>


      {/* Image 6 */}
      <div
        onClick={() => setSelectedImage(5)}
        className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] aspect-[4/3] rounded-2xl flex items-center justify-center cursor-pointer overflow-hidden"
      >
        <Image
          src={Image6}
          alt="Gallery Image 6"
          className="w-full h-full object-contain"
        />
      </div>

    </div>


    {/* ========================================== */}
    {/* IMAGE POPUP                                */}
    {/* ========================================== */}

    {selectedImage !== null && (

      <div
        className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
        onClick={() => setSelectedImage(null)}
      >

        {/* POPUP BOX */}

        <div
          className="relative bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto p-6 sm:p-8"
          onClick={(e) => e.stopPropagation()}
        >


          {/* CLOSE BUTTON */}

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-3 sm:right-6 sm:top-4 text-3xl sm:text-4xl font-bold text-black cursor-pointer hover:text-gray-500 transition"
          >
            ×
          </button>


          {/* ========================================== */}
          {/* IMAGE + TEXT                               */}
          {/* ========================================== */}

          <div className="flex flex-col md:flex-row items-center gap-8 mt-8">


            {/* LARGE IMAGE */}

            <div className="w-full md:w-1/2 flex items-center justify-center">

              <Image
                src={gallery[selectedImage].image}
                alt={gallery[selectedImage].title}
                className="w-full max-h-[50vh] md:max-h-[60vh] object-contain rounded-xl"
              />

            </div>


            {/* TEXT BESIDE IMAGE */}

            <div className="w-full md:w-1/2 text-center md:text-left">

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                {gallery[selectedImage].title}
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                {gallery[selectedImage].text}
              </p>

            </div>

          </div>


          {/* ========================================== */}
          {/* PREVIOUS / NEXT BUTTONS                    */}
          {/* ========================================== */}

          <div className="flex justify-between items-center mt-8 gap-4">


            {/* PREVIOUS */}

            <button
              onClick={previousImage}
              className="bg-black text-white px-4 sm:px-5 py-3 rounded-lg cursor-pointer hover:bg-gray-800 transition text-sm sm:text-base"
            >
              Previous
            </button>


            {/* IMAGE NUMBER */}

            <p className="text-sm text-gray-500 font-medium">
              {selectedImage + 1} / {gallery.length}
            </p>


            {/* NEXT */}

            <button
              onClick={nextImage}
              className="bg-[#F59E0B] text-white px-4 sm:px-5 py-3 rounded-lg cursor-pointer hover:bg-[#D97706] transition text-sm sm:text-base"
            >
              Next
            </button>

          </div>

        </div>

      </div>

    )}

  </div>

</section>


      {/* ========================================== */}
      {/* 5. BOTTOM CTA SECTION                      */}
      {/* ========================================== */}
      <section className="py-32 px-4 bg-[#FAFAFA] relative overflow-hidden backgroundI">

        {/* Background wavy lines placeholder - add absolute positioned svg/image here */}

        <div className="relative max-w-3xl mx-auto text-center flex flex-col items-center gap-8 z-10 ">

          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-black">
            Are You Ready To Elevate <br /> Your Business?
          </h2>

          <button className="bg-[#F59E0B] hover:bg-[#D97706] transition-colors text-white font-semibold py-3.5 px-10 rounded-lg shadow-md text-sm md:text-base cursor-pointer">
            Schedule Consultation
          </button>

        </div>
      </section>

    </main>
    {/* <Footer /> */}
    </>
  );
}

export default ai