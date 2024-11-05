import React from 'react';

const Footer = () => {
    return (
        <div className="bg-white py-10">
            <div className="max-w-screen-xl mx-auto px-4 text-center">
                <h2 className="text-2xl text-black font-semibold">Gadget Heaven</h2>
                <p className="text-gray-500 mt-2">Leading the way in cutting-edge technology and innovation.</p>
                <div className="border-t border-gray-300 my-6"></div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div>
                        <h3 className="font-medium text-black  mb-2">Services</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:underline">Product Support</a></li>
                            <li><a href="#" className="hover:underline">Order Tracking</a></li>
                            <li><a href="#" className="hover:underline">Shipping & Delivery</a></li>
                            <li><a href="#" className="hover:underline">Returns</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-medium text-black  mb-2">Company</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Careers</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-medium text-black  mb-2">Legal</h3>
                        <ul className="space-y-1">
                            <li><a href="#" className="hover:underline">Terms of Service</a></li>
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="#" className="hover:underline">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
