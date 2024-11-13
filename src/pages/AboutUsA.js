import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";
import { useState } from 'react';
import bgImage from '../images/bg-linear.png';
import iconFB from '../images/icon-fb.png';
import iconLN from '../images/icon-ln.png';
import profileMico from '../images/profileMico.jpg'
import profileLat from '../images/profileLat.jpg';
import profileAries from '../images/profileAries.jpg';
import profileRy from '../images/profileRy.jpg'
import iconPhone from '../images/icon-phone.png'


export default function AboutUsA(){

    return(
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      <style type="text/tailwindcss" dangerouslySetInnerHTML={{ __html: "\n\t\t\t@layer base {\n\t\t\t\t:root {\n\t\t\t\t\t--background: 0 0% 100%;\n--foreground: 240 10% 3.9%;\n--card: 0 0% 100%;\n--card-foreground: 240 10% 3.9%;\n--popover: 0 0% 100%;\n--popover-foreground: 240 10% 3.9%;\n--primary: 240 5.9% 10%;\n--primary-foreground: 0 0% 98%;\n--secondary: 240 4.8% 95.9%;\n--secondary-foreground: 240 5.9% 10%;\n--muted: 240 4.8% 95.9%;\n--muted-foreground: 240 3.8% 46.1%;\n--accent: 240 4.8% 95.9%;\n--accent-foreground: 240 5.9% 10%;\n--destructive: 0 84.2% 60.2%;\n--destructive-foreground: 0 0% 98%;\n--border: 240 5.9% 90%;\n--input: 240 5.9% 90%;\n--ring: 240 5.9% 10%;\n--radius: 0.5rem;\n\t\t\t\t}\n\t\t\t\t.dark {\n\t\t\t\t\t--background: 240 10% 3.9%;\n--foreground: 0 0% 98%;\n--card: 240 10% 3.9%;\n--card-foreground: 0 0% 98%;\n--popover: 240 10% 3.9%;\n--popover-foreground: 0 0% 98%;\n--primary: 0 0% 98%;\n--primary-foreground: 240 5.9% 10%;\n--secondary: 240 3.7% 15.9%;\n--secondary-foreground: 0 0% 98%;\n--muted: 240 3.7% 15.9%;\n--muted-foreground: 240 5% 64.9%;\n--accent: 240 3.7% 15.9%;\n--accent-foreground: 0 0% 98%;\n--destructive: 0 62.8% 30.6%;\n--destructive-foreground: 0 0% 98%;\n--border: 240 3.7% 15.9%;\n--input: 240 3.7% 15.9%;\n--ring: 240 4.9% 83.9%;\n\t\t\t\t}\n\t\t\t}\n\t\t" }} />

      <div className="bg-cover bg-center text-white p-8" style={{ backgroundImage: `url(${bgImage})` }}>
        <h1 className="text-4xl font-bold text-center">Find scholarship and achieve your dreams</h1>
        <p className="mt-4 text-lg text-center">Get financial aid to cater for your studies. We provide a collection of scholarships applications that suit your needs.</p>
      </div>
      <div className="bg-background py-8 text-center">
        <h2 className="text-2xl font-semibold text-foreground">About the Developers</h2>
      </div>
      <div className="bg-cover bg-center text-black p-8" style={{ "background-image": "url('images/Green-bg.png')" }}>
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-card p-6 shadow-lg">
            <img className="mx-auto h-24 w-24 rounded-full border-4 border-green-500" src={profileAries} alt="Developer portrait" />
            <h3 className="mt-4 text-xl font-semibold text-card-foreground">Salazar, Aries</h3>
            <p className="text-muted-foreground">Student</p>
            <p className="text-muted-foreground">Mask, Greeder</p>
            <p className="mt-4 text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
            <div className="mt-4 flex items-center justify-center space-x-2 text-muted-foreground">
              <span className="flex items-center space-x-1">
                <img src={iconPhone} alt="phone" />
                <span>0928 820 5300</span>
              </span>
            </div>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="" className="text-blue-500 "><img src={iconFB} alt="Facebook" /></a>
              <a href="" className="text-blue-400"><img src={iconLN} alt="Linkedin" /></a>
            </div>
          </div>
          <div className="rounded-lg bg-card p-6 shadow-lg">
            <img className="mx-auto h-24 w-24 rounded-full border-4 border-green-500" src={profileLat} ima alt="Developer portrait" />
            <h3 className="mt-4 text-xl font-semibold text-card-foreground">Lat, Isaac Lance Tristan</h3>
            <p className="text-muted-foreground">Student</p>
            <p className="text-muted-foreground">Mask, Greeder</p>
            <p className="mt-4 text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
            <div className="mt-4 flex items-center justify-center space-x-2 text-muted-foreground">
              <span className="flex items-center space-x-1">
                <img src={iconPhone} alt="phone" />
                <span>0928 820 5300</span>
              </span>
            </div>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61553410351540&mibextid=JRoKGi" className="text-blue-500"><img src={iconFB} alt="Facebook" /></a>
              <a href="https://www.linkedin.com/in/lance-tristan-lat-a5006b306/" className="text-blue-400"><img src={iconLN} alt="Linkedin" /></a>
            </div>
          </div>
          <div className="rounded-lg bg-card p-6 shadow-lg">
            <img className="mx-auto h-24 w-24 rounded-full border-4 border-green-500" src={profileMico} alt="Developer portrait" />
            <h3 className="mt-4 text-xl font-semibold text-card-foreground">Temporal, Eduardo III</h3>
            <p className="text-muted-foreground">Student</p>
            <p className="text-muted-foreground">Mask, Greeder</p>
            <p className="mt-4 text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
            <div className="mt-4 flex items-center justify-center space-x-2 text-muted-foreground">
              <span className="flex items-center space-x-1">
                <img src={iconPhone} alt="phone" />
                <span>0928 820 5300</span>
              </span>
            </div>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="https://www.facebook.com/micco.temporal?mibextid=JRoKGi" className="text-blue-500"><img src={iconFB} alt="Facebook" /></a>
              <a href="#" className="text-blue-400"><img src={iconLN} alt="Linkedin" /></a>
            </div>
          </div>
          <div className="rounded-lg bg-card p-6 shadow-lg">
            <img className="mx-auto h-24 w-24 rounded-full border-4 border-green-500" src={profileRy} alt="Developer portrait" />
            <h3 className="mt-4 text-xl font-semibold text-card-foreground">Rodulfo, Bryce</h3>
            <p className="text-muted-foreground">Student</p>
            <p className="text-muted-foreground">Mask, Greeder</p>
            <p className="mt-4 text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.</p>
            <div className="mt-4 flex items-center justify-center space-x-2 text-muted-foreground">
              <span className="flex items-center space-x-1">
                <img src={iconPhone} alt="phone" />
                <span>0928 820 5300</span>
              </span>
            </div>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="https://www.facebook.com/brycerodulfo?mibextid=JRoKGi" className="text-blue-500"><img src={iconFB} alt="Facebook" /></a>
              <a href="#" className="text-blue-400"><img src={iconLN} alt="Linkedin" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-12">
        <div className="container mx-auto text-center">
        </div>
      </div>
        </div>
    )
}