import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
                <h5 className="text-xl font-bold mb-2">CodePulse</h5>
                <p className="text-gray-400">Helping you become better than yesterday.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-right">
                <h5 className="text-xl font-bold mb-2">Follow Us</h5>
                <div className="flex justify-center md:justify-end space-x-4">
                <a href="#" className="hover:text-gray-300">
                    <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a href="#" className="hover:text-gray-300">
                    <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a href="#" className="hover:text-gray-300">
                    <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a href="#" className="hover:text-gray-300">
                    <i className="fab fa-linkedin fa-lg"></i>
                </a>
                </div>
            </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-4 text-center">
            <p className="text-gray-400">© 2024 CodePulse. All rights reserved.</p>
            </div>
        </div>
        </footer>

  )
}

export default Footer


