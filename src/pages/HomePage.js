import React from 'react';

function HomePage() {
  return (
    <div className="bg-white py-10">
      {/* Hero Section */}
      <section className="bg-indigo-700 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Event Management Site</h1>
          <p className="text-lg mb-8">
            We help you organize unforgettable events, from weddings to corporate functions and everything in between.
          </p>
          <button className="bg-white text-indigo-700 font-semibold py-2 px-6 rounded hover:bg-gray-200">
            Get Started
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <div className="w-full h-48 bg-gray-300 mb-4 rounded">Image Placeholder</div>
            <h3 className="text-xl font-semibold mb-2">Wedding Planning</h3>
            <p className="text-gray-600">
              We provide expert wedding planning services to make your special day memorable and stress-free.
            </p>
          </div>
          
          {/* Service 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <div className="w-full h-48 bg-gray-300 mb-4 rounded">Image Placeholder</div>
            <h3 className="text-xl font-semibold mb-2">Corporate Events</h3>
            <p className="text-gray-600">
              Our team organizes seamless corporate events to suit your business needs, from conferences to team-building retreats.
            </p>
          </div>
          
          {/* Service 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <div className="w-full h-48 bg-gray-300 mb-4 rounded">Image Placeholder</div>
            <h3 className="text-xl font-semibold mb-2">Private Parties</h3>
            <p className="text-gray-600">
              Let us handle all the details for your private gatherings, ensuring an unforgettable experience for you and your guests.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="p-6 rounded-lg shadow-lg bg-white">
              <p className="italic text-gray-600 mb-4">
                "Our wedding was flawless, thanks to the amazing team! Every detail was perfect, and we couldn't have asked for more."
              </p>
              <h4 className="font-semibold">- Emily & Mark</h4>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6 rounded-lg shadow-lg bg-white">
              <p className="italic text-gray-600 mb-4">
                "A huge thank you for organizing our corporate retreat! The team-building activities were fantastic, and everyone enjoyed it."
              </p>
              <h4 className="font-semibold">- Tech Solutions Inc.</h4>
            </div>

            {/* Testimonial 3 */}
            <div className="p-6 rounded-lg shadow-lg bg-white">
              <p className="italic text-gray-600 mb-4">
                "Our family reunion was a hit! The venue and catering were top-notch, and the event went smoothly from start to finish."
              </p>
              <h4 className="font-semibold">- The Johnson Family</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-indigo-700 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Event?</h2>
          <p className="text-lg mb-8">
            Contact us today to start planning your perfect event. We are excited to make your vision come to life!
          </p>
          <button className="bg-white text-indigo-700 font-semibold py-2 px-6 rounded hover:bg-gray-200">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
