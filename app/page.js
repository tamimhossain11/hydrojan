"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Head from "next/head";

// Dynamically import ModelViewer
//const ModelViewer = dynamic(() => import("./components/ModelViewer"), { ssr: false });

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Hydrojan | Autonomous Underwater Vehicle</title>
        <meta name="description" content="Hydrojan - Advanced AUV for RoboSub 2025 by Dreams of Bangladesh." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="min-h-screen bg-background text-foreground transition-colors">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-sea-green-400 to-sea-green-600 dark:from-sea-green-700 dark:to-sea-green-900 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Welcome to Hydrojan</h1>
            <p className="text-lg md:text-xl font-medium mb-10">
              Unveiling the future of Autonomous Underwater Vehicles for RoboSub 2025
            </p>
            <Link
              href="#3d-model"
              className="px-8 py-3 bg-white text-sea-green-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Explore Hydrojan
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">About Hydrojan</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
              Hydrojan is an advanced Autonomous Underwater Vehicle (AUV) built to tackle the challenges of underwater
              exploration. Designed and developed by the Dreams of Bangladesh team, Hydrojan is our submission for the
              prestigious RoboSub competition.
            </p>
            <Link href="/about" className="text-sea-green-600 hover:underline font-medium">
              Learn More
            </Link>
          </div>
        </section>

        {/* 3D Model Section */}
        <section id="3d-model" className="py-16 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Explore Hydrojan</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
              Interact with our 3D model to get a closer look at Hydrojan's innovative design.
            </p>
            <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
             

             
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
              Have questions or want to learn more about Hydrojan? Get in touch with us!
            </p>
            <Link
              href="/contact"
              className="px-8 py-3 bg-sea-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-sea-green-700 transition"
            >
              Contact Us
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 bg-sea-green-600 dark:bg-sea-green-800 text-white">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm">&copy; 2025 Dreams of Bangladesh. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
